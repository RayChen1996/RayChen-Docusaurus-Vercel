import React from "react";

import RequiredMark from "./RequiredMark";

export default function RequireTips() {
  return (
    <div className="flex gap-2">
      <RequiredMark size={20} />
      <p className="label-text">
        <span className="font-bold">is a required field</span>
      </p>
    </div>
  );
}
