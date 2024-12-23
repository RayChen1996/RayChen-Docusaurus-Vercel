"use client";

import { ApolloNextAppProvider } from "@apollo/experimental-nextjs-app-support";

import { makeClient } from "@/apollo/client-ssr";

export function ApolloWrapper({ children }: React.PropsWithChildren) {
  return (
    <ApolloNextAppProvider makeClient={makeClient}>
      {children}
    </ApolloNextAppProvider>
  );
}
