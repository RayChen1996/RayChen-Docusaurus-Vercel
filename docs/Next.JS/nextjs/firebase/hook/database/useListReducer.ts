import { DataSnapshot } from "firebase/database";
import { produce } from "immer";
import { useReducer } from "react";

interface KeyValueState {
  keys: string[];
  values: DataSnapshot[];
}

interface ReducerState {
  error?: Error;
  loading: boolean;
  value: KeyValueState;
}

type ReducerAction =
  | { type: "add"; previousKey?: string | null; snapshot: DataSnapshot | null }
  | { type: "change"; snapshot: DataSnapshot | null }
  | { type: "empty" }
  | { type: "error"; error: Error }
  | { type: "move"; previousKey?: string | null; snapshot: DataSnapshot | null }
  | { type: "remove"; snapshot: DataSnapshot | null }
  | { type: "reset" }
  | { type: "value"; snapshots: DataSnapshot[] | null };

const initialState: ReducerState = {
  loading: true,
  error: undefined,
  value: {
    keys: [],
    values: [],
  },
};

const actionsMap: Record<
  "add" | "move" | "change" | "remove",
  (
    draft: KeyValueState,
    snapshot: DataSnapshot,
    previousKey?: string | null,
  ) => void
> = {
  add: addChild,
  move: moveChild,
  change: changeChild,
  remove: removeChild,
};

function listReducer(state: ReducerState, action: ReducerAction): ReducerState {
  switch (action.type) {
    case "add":
    case "move":
    case "change":
    case "remove":
      if (!action.snapshot) {
        return state;
      }
      return produce(state, (draft) => {
        draft.error = initialState.error;

        const actionHandler = actionsMap[action.type];
        if (action.type === "add" || action.type === "move") {
          actionHandler(draft.value, action.snapshot!, action.previousKey);
        } else {
          actionHandler(draft.value, action.snapshot!);
        }
      });
    case "error":
      return produce(state, (draft) => {
        draft.error = action.error;
        draft.loading = false;
        draft.value = initialState.value;
      });
    case "reset":
      return initialState;
    case "value":
      return produce(state, (draft) => {
        draft.error = initialState.error;
        draft.loading = false;
        draft.value = setValue(action.snapshots);
      });
    case "empty":
      return produce(state, (draft) => {
        draft.loading = false;
        draft.value = initialState.value;
      });
    default:
      return state;
  }
}

function setValue(snapshots: DataSnapshot[] | null): KeyValueState {
  if (snapshots) {
    const keys: string[] = [];
    const values: DataSnapshot[] = [];

    for (const snapshot of snapshots) {
      if (snapshot.key) {
        keys.push(snapshot.key);
        values.push(snapshot);
      }
    }

    return { keys, values };
  } else {
    return initialState.value;
  }
}

function addChild(
  draft: KeyValueState,
  snapshot: DataSnapshot,
  previousKey?: string | null,
): void {
  if (!snapshot.key || draft.keys.includes(snapshot.key)) {
    return;
  }

  if (!previousKey) {
    // 將子項添加到列表開頭
    draft.keys.unshift(snapshot.key);
    draft.values.unshift(snapshot);
  } else {
    // 確定前一個子項的索引
    const index = draft.keys.indexOf(previousKey);
    // 檢查索引是否合法
    if (index !== -1) {
      // 將項目插入到前一個子項之後
      draft.keys.splice(index + 1, 0, snapshot.key);
      draft.values.splice(index + 1, 0, snapshot);
    } else {
      // 如果索引不合法，將項目添加到列表末尾
      draft.keys.push(snapshot.key);
      draft.values.push(snapshot);
    }
  }
}

function changeChild(draft: KeyValueState, snapshot: DataSnapshot): void {
  if (!snapshot.key) return;

  const index = draft.keys.indexOf(snapshot.key);
  if (index !== -1) {
    draft.values[index] = snapshot;
  }
}

function removeChild(draft: KeyValueState, snapshot: DataSnapshot): void {
  if (!snapshot.key) return;

  const index = draft.keys.indexOf(snapshot.key);
  if (index !== -1) {
    draft.keys.splice(index, 1);
    draft.values.splice(index, 1);
  }
}

function moveChild(
  draft: KeyValueState,
  snapshot: DataSnapshot,
  previousKey?: string | null,
): void {
  removeChild(draft, snapshot);
  addChild(draft, snapshot, previousKey);
}

export default function useListReducer() {
  return useReducer(listReducer, initialState);
}
