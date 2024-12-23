import { useEffect, useState } from "react";

type DialogElement = HTMLDialogElement | null;

/** - `dialog`狀態監聽 */
export default function useDialogVisible(getElement?: () => DialogElement) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    let listner: MutationObserver | undefined;
    const element = getElement?.();

    if (element) {
      listner = new MutationObserver(() => {
        setVisible(element.open);
      });
      listner.observe(element, { attributes: true });
    } else {
    }
    return () => {
      listner?.disconnect();
    };
  }, [getElement]);

  return visible;
}
