import { useCallback, useReducer, useRef } from "react";
import {
  ref,
  getDownloadURL,
  uploadBytesResumable,
  type UploadResult,
  type UploadMetadata,
  type StorageError,
  type TaskState,
} from "firebase/storage";
import { nanoid } from "nanoid";
import { produce } from "immer";

import storage from "../../reference/storage";

export interface UploadFileParams {
  onChangeDownloadURL?: (url: string) => void | Promise<void>;
}

export interface FileUploadState {
  downloadURL?: string;
  error?: StorageError;
  progress: number;
  state?: TaskState;
  loading: boolean;
}

export type UploadFileReturn = [
  (
    file: File,
    url?: string,
    metadata?: UploadMetadata,
  ) => Promise<UploadResult | undefined>,
  FileUploadState,
];

export default function useUploadFile(
  params?: UploadFileParams,
): UploadFileReturn {
  const [state, dispatch] = useReducer(uploadReducer, initialState);
  const paramsRef = useRef(mergeParams(params));

  paramsRef.current = mergeParams(params);

  const uploadFile = useCallback(
    (file: File, url?: string, metadata?: UploadMetadata) => {
      return new Promise<UploadResult | undefined>((resolve, reject) => {
        const storageRef = ref(storage, url || nanoid());
        const uploadTask = uploadBytesResumable(storageRef, file, metadata);

        dispatch({ type: "start" });

        uploadTask.on(
          "state_changed",
          (snapshot) => {
            const progress = snapshot.bytesTransferred / snapshot.totalBytes;
            dispatch({ type: "progress", progress, state: snapshot.state });
          },
          (error: StorageError) => {
            dispatch({ type: "error", error });
            reject(error);
          },
          () => {
            getDownloadURL(uploadTask.snapshot.ref).then(
              async (downloadURL) => {
                dispatch({ type: "success", downloadURL });
                await paramsRef.current.onChangeDownloadURL?.(downloadURL);
                resolve(uploadTask.snapshot);
              },
            );
          },
        );
      });
    },
    [],
  );

  return [uploadFile, state];
}

const initialState: FileUploadState = {
  downloadURL: undefined,
  error: undefined,
  progress: 0,
  state: undefined,
  loading: false,
};

type Action =
  | { type: "start" }
  | { type: "progress"; progress: number; state: TaskState }
  | { type: "error"; error: StorageError }
  | { type: "success"; downloadURL: string }
  | { type: "reset" };

function uploadReducer(state: FileUploadState, action: Action) {
  switch (action.type) {
    case "start":
      return produce(state, (draft) => {
        draft.error = undefined;
        draft.progress = 0;
        draft.state = undefined;
        draft.loading = true;
      });
    case "progress":
      return produce(state, (draft) => {
        draft.progress = action.progress;
        draft.state = action.state;
      });
    case "error":
      return produce(state, (draft) => {
        draft.error = action.error;
        draft.state = "error";
        draft.loading = false;
      });
    case "success":
      return produce(state, (draft) => {
        draft.downloadURL = action.downloadURL;
        draft.state = "success";
        draft.loading = false;
      });
    case "reset":
      return initialState;
    default:
      return state;
  }
}

function mergeParams(params?: UploadFileParams) {
  return {
    onChangeDownloadURL: () => {},
    ...params,
  };
}
