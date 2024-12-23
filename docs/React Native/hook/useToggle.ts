import {useRef, useState} from 'react';

export interface UseToggleEvents {
  toggleOn: () => void;
  toggleOff: () => void;
  handleToggle: () => void;
}

/** - 開關切換hook */
export default function useToggle(
  initial: boolean | (() => boolean) = false,
): [boolean, UseToggleEvents] {
  const [active, setActive] = useState(initial ?? false);
  const events = useRef<UseToggleEvents>({
    toggleOn() {
      setActive(true);
    },
    toggleOff() {
      setActive(false);
    },
    handleToggle() {
      setActive(e => !e);
    },
  });
  return [active, events.current];
}
