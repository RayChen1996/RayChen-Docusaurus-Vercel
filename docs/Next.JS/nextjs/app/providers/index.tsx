"use client";

import { createElement } from "react";

import { ApolloWrapper } from "./ApolloWrapper";
import I18nWrapper from "./I18nWrapper";
import AuthenticationWrapper from "./AuthenticationWrapper";

const providers = [ApolloWrapper, I18nWrapper, AuthenticationWrapper];

export default function Provider({ children }: React.PropsWithChildren) {
  return providers.reduceRight(callbackfn, children);
}

function callbackfn(node: React.ReactNode, wrapper: React.FunctionComponent) {
  return createElement(wrapper, undefined, node);
}
