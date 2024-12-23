import React, {
  useCallback,
  useEffect,
  useId,
  useMemo,
  useRef,
  useState,
} from "react";

type DialogActions = Record<"open" | "close" | "toggle", () => void>;

interface UseDialogReturn {
  dialogProps: Pick<
    React.DetailedHTMLProps<
      React.DialogHTMLAttributes<HTMLDialogElement>,
      HTMLDialogElement
    >,
    "id" | "onClose" | "ref" | "role" | "aria-modal" | "aria-labelledby"
  >;
  visible: boolean;
  actions: DialogActions;
  dialogControl: (value: boolean) => void;
}

export default function useDialog(): UseDialogReturn {
  const ref = useRef<HTMLDialogElement>(null);
  const id = useId();
  const headerId = useId();
  const [visible, setVisible] = useState(false);

  const dialogControl: UseDialogReturn["dialogControl"] = useCallback(
    (value) => {
      if (!ref.current) return;
      if (value) {
        ref.current.showModal();
      } else {
        ref.current.close();
      }
    },
    [],
  );

  const actions: DialogActions = useMemo(
    () => ({
      open() {
        setVisible(true);
      },
      close() {
        setVisible(false);
      },
      toggle() {
        setVisible((value) => !value);
      },
    }),
    [],
  );

  useEffect(() => {
    dialogControl(visible);
  }, [visible, dialogControl]);

  useEffect(() => {
    // 組件卸載時關閉
    return () => {
      setVisible(false);
    };
  }, []);

  const dialogProps: UseDialogReturn["dialogProps"] = useMemo(
    () => ({
      ref,
      id,
      onClose() {
        setVisible(false);
      },
      role: "dialog",
      "aria-modal": true,
      "aria-labelledby": headerId,
    }),
    [id, headerId],
  );

  return {
    dialogProps,
    visible,
    dialogControl,
    actions,
  };
}
