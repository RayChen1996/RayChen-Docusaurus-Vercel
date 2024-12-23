"use client";

import { ApolloClient } from "@apollo/experimental-nextjs-app-support";
import { ApolloLink } from "@apollo/client";

import { cache, links } from "./config";

/** - 取得客戶端 */
export function getClient() {
  return new ApolloClient({
    cache,
    link: ApolloLink.from(links),
  });
}

export function makeClient() {
  return getClient();
}
