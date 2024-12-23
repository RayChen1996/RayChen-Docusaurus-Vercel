import { createContext, createElement, useContext, useRef } from "react";
import { StoreApi, UseBoundStore } from "zustand";

type ZustandStoreApi<TStore> = UseBoundStore<StoreApi<TStore>>;

export function createZustandStoreProvider<TStore>(
  createStore: () => ZustandStoreApi<TStore>,
  name: string,
) {
  const StoreContext = createContext<ZustandStoreApi<TStore> | undefined>(
    undefined,
  );

  function StoreProvider({ children }: React.PropsWithChildren) {
    const storeRef = useRef<ZustandStoreApi<TStore>>();
    if (!storeRef.current) {
      storeRef.current = createStore();
    }

    return createElement(
      StoreContext.Provider,
      { value: storeRef.current },
      children,
    );
  }

  function useStore<T>(selector: (store: TStore) => T): T {
    const storeContext = useContext(StoreContext);

    if (!storeContext) {
      throw new Error(`${name} must be used within StoreProvider`);
    }

    return storeContext(selector);
  }

  return { StoreProvider, useStore };
}
