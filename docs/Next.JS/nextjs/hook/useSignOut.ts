"use client";

import { useApolloClient } from "@apollo/client";
import { useCallback } from "react";
import { useRouter } from "next/navigation";

import { signOut } from "@/lib";

/**
 * - 統一登出行為
 * @param defaultRedirectPath 登出後要導向的路徑
 */
export default function useSignOut(defaultRedirectPath?: string) {
  const client = useApolloClient();
  const { replace } = useRouter();

  return useCallback(
    /**
     * @param specificRedirectPath 該次執行登出後要導向的路徑，只有`string`會被處理。
     */
    async (specificRedirectPath?: string | any) => {
      await signOut();
      await client.clearStore();

      const redirectPath = [specificRedirectPath, defaultRedirectPath].find(
        (path) => typeof path === "string" && path.trim() !== "",
      ) as string | undefined;

      if (redirectPath) {
        replace(redirectPath);
      }
    },
    [replace, client, defaultRedirectPath],
  );
}
