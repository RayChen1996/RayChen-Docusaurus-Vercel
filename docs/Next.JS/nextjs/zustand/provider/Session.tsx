"use client";

import { createZustandStoreProvider } from "./creatStoreProvider";

import { createStore } from "../useSessionStore";

export type * from "../useSessionStore";

const { StoreProvider, useStore } = createZustandStoreProvider(
  createStore,
  "SessionStore",
);
export const SessionStoreProvider = StoreProvider;

export const useSessionStore = useStore;
