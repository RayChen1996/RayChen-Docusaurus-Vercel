"use client";

import { usePathname, useRouter } from "next/navigation";
import React, { useEffect, useMemo } from "react";
import { LogOutIcon, UndoIcon } from "lucide-react";

import { signOut } from "@/lib";

import patterns from "@/utils/middleware/patterns";
import isPathnameMatch from "@/utils/middleware/isPathnameMatch";
import useLazyQueryIndividualAccount from "@/apollo/hook/orders/useLazyQueryIndividualAccount";

export default function AuthenticationWrapper({
  children,
}: React.PropsWithChildren) {
  const pathname = usePathname();
  const [query, { loading, data, error, called }] =
    useLazyQueryIndividualAccount();
  /** - 非公開路徑 */
  const isProtected = useMemo(
    () => patterns.protected.some((item) => isPathnameMatch(pathname, item)),
    [pathname],
  );

  useEffect(() => {
    if (isProtected) {
      query();
    }
  }, [query, isProtected]);

  if (isProtected) {
    if (loading || !called) {
      return renderLoading("Verification in progress");
    }

    if (error) {
      return renderError(error?.message);
    }

    if (!data?.individualAccount) {
      return renderError("Individual account not found");
    }
  }

  return children;
}

function renderLoading(message: string) {
  return (
    <Container>
      <Paragraph>{message}</Paragraph>
      <span className="loading bg-primary" />
    </Container>
  );
}

function renderError(message: string) {
  return (
    <Container>
      <Heading>Oops!</Heading>
      <Paragraph>{message}</Paragraph>
      <ToolContainer>
        <SignInAgainButton />
        <SignOutButton />
      </ToolContainer>
    </Container>
  );
}

function Container({ children }: React.PropsWithChildren) {
  return (
    <div className="flex h-dvh w-full flex-col items-center justify-center gap-6 p-4 text-center">
      {children}
    </div>
  );
}

function ToolContainer({ children }: React.PropsWithChildren) {
  return (
    <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-4">
      {children}
    </div>
  );
}

function Heading({ children }: React.PropsWithChildren) {
  return (
    <h2 className="text-3xl font-bold tracking-tight sm:text-5xl">
      {children}
    </h2>
  );
}

function Paragraph({ children }: React.PropsWithChildren) {
  return <p className="text-base leading-7 text-base-content/80">{children}</p>;
}

function SignInAgainButton() {
  const { replace } = useRouter();

  return (
    <button
      type="button"
      onClick={async () => {
        await signOut();
        replace("/sign-in");
      }}
      className="btn btn-primary"
    >
      Sign in again
      <UndoIcon className="h-5 w-5" />
    </button>
  );
}

function SignOutButton() {
  const { replace } = useRouter();

  return (
    <button
      type="button"
      onClick={async () => {
        await signOut();
        replace("/");
      }}
      className="btn btn-ghost"
    >
      Sign out
      <LogOutIcon className="h-5 w-5" />
    </button>
  );
}
