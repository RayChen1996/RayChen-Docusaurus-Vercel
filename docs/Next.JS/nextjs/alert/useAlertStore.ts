import { createWithEqualityFn as create } from "zustand/traditional";
import { combine } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";
import { deepEqual } from "fast-equals";

import type { AlertEventParams, AlertEvent } from "./type";
import { generateUUID, initial } from "./lib";

interface InitialState {
  queue: Array<AlertEventParams>;
}

const initialState: InitialState = {
  queue: [],
};

const useAlertStore = create(
  immer(
    combine(initialState, (set) => ({
      alert: <AlertEvent["alert"]>function (title, message, buttons) {
        set((state) => {
          state.queue.push({
            id: generateUUID(),
            title,
            message,
            buttons:
              Array.isArray(buttons) && buttons.length > 0
                ? buttons.map((button) => ({
                    ...initial.button,
                    ...button,
                    id: generateUUID(),
                  }))
                : [initial.button],
          });
        });
      },
      notice: <AlertEvent["notice"]>function (message, button) {
        set((state) => {
          state.queue.push({
            id: generateUUID(),
            title: "Alert",
            message,
            buttons: button
              ? [{ ...button, id: generateUUID() }]
              : [initial.button],
          });
        });
      },
      close() {
        set((state) => {
          state.queue.pop();
        });
      },
    })),
  ),
  deepEqual,
);

export default useAlertStore;
