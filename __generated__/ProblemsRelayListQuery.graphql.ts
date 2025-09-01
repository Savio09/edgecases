/**
 * @generated SignedSource<<853d152cfb4a64d538598a90dbcdad27>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from 'relay-runtime';
export type Difficulty = "easy" | "hard" | "medium" | "%future added value";
export type ProblemsRelayListQuery$variables = {
  first: number;
};
export type ProblemsRelayListQuery$data = {
  readonly problems: {
    readonly edges: ReadonlyArray<{
      readonly node: {
        readonly difficulty: Difficulty | null | undefined;
        readonly id: string | null | undefined;
        readonly title: string | null | undefined;
      } | null | undefined;
    } | null | undefined> | null | undefined;
  } | null | undefined;
};
export type ProblemsRelayListQuery = {
  response: ProblemsRelayListQuery$data;
  variables: ProblemsRelayListQuery$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "first"
  }
],
v1 = [
  {
    "alias": null,
    "args": [
      {
        "kind": "Variable",
        "name": "first",
        "variableName": "first"
      }
    ],
    "concreteType": "QueryProblemsConnection",
    "kind": "LinkedField",
    "name": "problems",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "QueryProblemsConnectionEdge",
        "kind": "LinkedField",
        "name": "edges",
        "plural": true,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "Problem",
            "kind": "LinkedField",
            "name": "node",
            "plural": false,
            "selections": [
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "id",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "title",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "difficulty",
                "storageKey": null
              }
            ],
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ],
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "ProblemsRelayListQuery",
    "selections": (v1/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "ProblemsRelayListQuery",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "0ccbfb66da4cd94129c057cd5c42655e",
    "id": null,
    "metadata": {},
    "name": "ProblemsRelayListQuery",
    "operationKind": "query",
    "text": "query ProblemsRelayListQuery(\n  $first: Int!\n) {\n  problems(first: $first) {\n    edges {\n      node {\n        id\n        title\n        difficulty\n      }\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "bb8dc223b5a0c4749a013feb624d1856";

export default node;
