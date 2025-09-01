import { printSchema } from "graphql";
import { schema } from "../graphql/schema";
import { writeFileSync } from "fs";

writeFileSync("schema.graphql", printSchema(schema));
console.log("schema.graphql updated");
