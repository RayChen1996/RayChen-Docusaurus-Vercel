import { DicesIcon } from "lucide-react";
import React from "react";

import generateRandomPassword from "./utils/generateRandomPassword";

export interface RandomPasswordProps {
  onRandom?: (value: string) => void;
}

export default function RandomPassword({ onRandom }: RandomPasswordProps) {
  return (
    <button
      onClick={() => {
        onRandom?.(generateRandomPassword());
      }}
      type="button"
      className="btn btn-square btn-sm"
    >
      <DicesIcon />
    </button>
  );
}
