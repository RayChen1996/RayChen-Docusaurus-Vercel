"use client";

import { createElement } from "react";

import { SessionStoreProvider } from "./Session";

const providers = [SessionStoreProvider];

export default function Provider({ children }: React.PropsWithChildren) {
  return providers.reduceRight(
    (node, Wrapper) => createElement(Wrapper, undefined, node),
    children
  );
}
