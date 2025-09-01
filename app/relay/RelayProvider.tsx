"use client";

import { ReactNode } from "react";
import { RelayEnvironmentProvider } from "react-relay";
import { getRelayEnvironment } from "./environment";

export default function RelayProvider({ children }: { children: ReactNode }) {
  const env = getRelayEnvironment();
  return (
    <RelayEnvironmentProvider environment={env}>
      {children}
    </RelayEnvironmentProvider>
  );
}
