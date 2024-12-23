import {
  type DataSnapshot,
  off,
  onChildAdded as firebaseOnChildAdded,
  onChildChanged as firebaseOnChildChanged,
  onChildMoved as firebaseOnChildMoved,
  onChildRemoved as firebaseOnChildRemoved,
  onValue as firebaseOnValue,
  ref,
  type EventType,
  type Unsubscribe,
} from "firebase/database";
import { useEffect, useMemo } from "react";

import database from "../../reference/database";
import useListReducer from "./useListReducer";

export default function useList(path?: string) {
  const [state, dispatch] = useListReducer();

  const dbRef = useMemo(() => ref(database, path), [path]);

  const events = useMemo(
    () => ({
      empty() {
        dispatch({ type: "empty" });
      },
      onChildAdded(snapshot: DataSnapshot | null, previousKey?: string | null) {
        dispatch({ type: "add", previousKey, snapshot });
      },
      onChildChanged(snapshot: DataSnapshot | null) {
        dispatch({ type: "change", snapshot });
      },
      onChildMoved(snapshot: DataSnapshot | null, previousKey?: string | null) {
        dispatch({ type: "move", previousKey, snapshot });
      },
      onChildRemoved(snapshot: DataSnapshot | null) {
        dispatch({ type: "remove", snapshot });
      },
      onError(error: Error) {
        dispatch({ type: "error", error });
      },
      onValue(snapshots: DataSnapshot[] | null) {
        dispatch({ type: "value", snapshots });
      },
    }),
    [dispatch],
  );

  useEffect(() => {
    const {
      empty,
      onChildAdded,
      onChildChanged,
      onChildMoved,
      onChildRemoved,
      onError,
      onValue,
    } = events;

    if (!dbRef) {
      empty();
      return;
    }

    let childAddedHandler: Unsubscribe | undefined;
    function onInitialLoad(snapshot: DataSnapshot) {
      const snapshotVal = snapshot.val();
      const queue: DataSnapshot[] = [];
      let count = snapshotVal ? Object.keys(snapshot.val()).length : 0;
      const isInitialLoad = count === 0;

      function onChildAddedWithoutInitialLoad(
        addedChild: DataSnapshot,
        previousKey?: string | null,
      ) {
        if (count > 0) {
          queue.push(addedChild);
          if (--count === 0) onValue(queue);
        } else {
          onChildAdded(addedChild, previousKey);
        }
      }

      childAddedHandler = firebaseOnChildAdded(
        dbRef,
        isInitialLoad ? onChildAdded : onChildAddedWithoutInitialLoad,
        onError,
      );

      if (isInitialLoad) onValue([]);
    }

    firebaseOnValue(dbRef, onInitialLoad, onError, { onlyOnce: true });

    const unsubscribes: Record<
      Exclude<EventType, "value">,
      Unsubscribe | undefined
    > = {
      child_added: childAddedHandler,
      child_changed: firebaseOnChildChanged(dbRef, onChildChanged, onError),
      child_moved: firebaseOnChildMoved(dbRef, onChildMoved, onError),
      child_removed: firebaseOnChildRemoved(dbRef, onChildRemoved, onError),
    };

    return () => {
      const entries = Object.entries(unsubscribes);
      for (const [key, element] of entries) {
        if (element) {
          off(dbRef, key as Exclude<EventType, "value">, element);
        }
      }
    };
  }, [events, dbRef]);

  return [state.value.values, state.loading, state.error] as const;
}
