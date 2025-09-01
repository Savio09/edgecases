"use client";

import { Environment, Network, RecordSource, Store } from "relay-runtime";

async function fetchGraphQL(text: string | null | undefined, variables: any) {
  const res = await fetch("/api/graphql", {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify({ query: text, variables }),
    credentials: "include",
  });
  return await res.json();
}

function createEnvironment() {
  return new Environment({
    network: Network.create(fetchGraphQL),
    store: new Store(new RecordSource()),
  });
}

let clientEnv: Environment | null = null;

export function getRelayEnvironment() {
  if (!clientEnv) clientEnv = createEnvironment();
  return clientEnv;
}
