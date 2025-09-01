import SchemaBuilder from "@pothos/core";
import PrismaPlugin from "@pothos/plugin-prisma";
import type PrismaTypes from "@pothos/plugin-prisma/generated";
import prisma from "@/lib/prisma";
import GraphQLDateTime from "./scalars/Date";
import RelayPlugin from "@pothos/plugin-relay";
import { PothosRelayPlugin } from "@pothos/plugin-relay";

export const builder = new SchemaBuilder<{
  PrismaTypes: PrismaTypes;
  Scalars: {
    Date: {
      Input: Date;
      Output: Date;
    };
  };
  Context: {
    prisma: typeof prisma;
    currentUserId: string | null;
  };
}>({
  plugins: [PrismaPlugin, RelayPlugin],
  prisma: {
    client: prisma,
  },
  relay: {},
});

builder.scalarType("Date", {
  serialize: GraphQLDateTime.serialize,
  parseValue: GraphQLDateTime.parseValue,
  parseLiteral: GraphQLDateTime.parseLiteral,
});
