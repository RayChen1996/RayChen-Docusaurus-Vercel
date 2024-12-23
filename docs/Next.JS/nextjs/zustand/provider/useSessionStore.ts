import { create } from "zustand";
import { persist, combine, createJSONStorage } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";

export interface State {}

export interface Actions {}

export type Store = State & Actions;

const initialState: State = {};

/** - 網站暫時設定 */
const useSessionStore = create(
  persist(immer(combine(initialState, (set, get): Actions => ({}))), {
    name: "goodla-session",
    storage: createJSONStorage(() => sessionStorage),
  }),
);

export default useSessionStore;

export function createStore() {
  return useSessionStore;
}
