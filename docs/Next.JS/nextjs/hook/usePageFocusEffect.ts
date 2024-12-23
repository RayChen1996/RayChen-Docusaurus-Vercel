"use client";

import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";

/**
 * - 聚焦該頁時執行
 *
 * @param callback 要執行的函式
 * @param skipFirstRender 是否跳過第一次渲染執行
 * */
export default function usePageFocusEffect(
  callback: () => void,
  skipFirstRender: boolean = false,
) {
  const pathname = usePathname();
  const pathnameRef = useRef(pathname);
  const isFirstRenderRef = useRef(true);
  const eventRef = useRef({ callback });

  eventRef.current.callback = callback;

  useEffect(() => {
    isFirstRenderRef.current = false;
  }, []);

  useEffect(() => {
    const runCallback = skipFirstRender ? !isFirstRenderRef.current : true;

    if (runCallback && pathnameRef.current === pathname) {
      eventRef.current.callback?.();
    }
  }, [pathname, skipFirstRender]);
}
