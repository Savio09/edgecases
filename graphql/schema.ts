import "./types/User";
import "./types/Edgecases";
import "./types/Problem";

import { builder } from "./builder";

import "./queries/user";
import "./mutations/user";
import "./queries/problems";

builder.queryType({
  fields: (t) => ({
    ok: t.boolean({
      resolve: () => true,
    }),
  }),
});

builder.mutationType({
  fields: (t) => ({
    ok: t.boolean({
      resolve: () => true,
    }),
  }),
});

export const schema = builder.toSchema({});

console.log("Schema created", schema);
