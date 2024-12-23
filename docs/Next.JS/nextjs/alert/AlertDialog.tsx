"use client";

import React, {
  Fragment,
  memo,
  useCallback,
  useEffect,
  useId,
  useRef,
} from "react";
import clsx from "clsx";

import type { AlertButton } from "./type";
import { buttonClasses } from "./lib";
import useAlertStore from "./useAlertStore";

/** - 通知組件 */
export default memo(function AlertDialog() {
  const dialogId = useId();
  const current = useAlertStore(
    useCallback((state) => state.queue[state.queue.length - 1], []),
  );

  /** - 當前是否有資料 */
  const hasCurrent = Boolean(current);

  /** - 獲取`dialog`元素 */
  const dialogElement = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const element = dialogElement.current;
    if (element) {
      if (hasCurrent) {
        element.showModal();
      } else {
        element.close();
      }
    }
  }, [hasCurrent]);

  return (
    <dialog ref={dialogElement} id={dialogId} className="modal">
      {current ? (
        <div className="modal-box">
          <h3 className="text-xl text-primary">
            <strong>{_wrapText(current.title)}</strong>
          </h3>
          <p className="py-4 text-base">{_wrapText(current.message)}</p>
          <div className="modal-action gap-1">
            {current.buttons?.map(_renderButton)}
          </div>
        </div>
      ) : null}
    </dialog>
  );
});

/** - 文字換行 */
function _wrapText(str: string | undefined) {
  return str?.split("\n").map((item, index) => (
    <Fragment key={index}>
      {item}
      <br />
    </Fragment>
  ));
}

function _renderButton(item: AlertButton) {
  return <Button {...item} key={item.id} />;
}

/** - 按鈕組件 */
function Button({ onClick, style, text }: AlertButton) {
  const close = useAlertStore(useCallback((state) => state.close, []));

  return (
    <button
      type="button"
      onClick={async () => {
        await onClick?.();
        close();
      }}
      className={clsx("btn", buttonClasses(style))}
    >
      {text}
    </button>
  );
}
