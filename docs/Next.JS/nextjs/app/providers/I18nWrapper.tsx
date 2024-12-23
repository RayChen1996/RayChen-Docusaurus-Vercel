"use client";

import React from "react";
import { I18nProvider } from "react-aria-components";

export default function I18nWrapper({ children }: React.PropsWithChildren) {
  return <I18nProvider locale="en-US">{children}</I18nProvider>;
}
