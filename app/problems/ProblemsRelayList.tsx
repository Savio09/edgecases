// "use client";

// import { useLazyLoadQuery } from "react-relay";
// import type { ProblemsRelayListQuery } from "@/__generated__/ProblemsRelayListQuery.graphql";
// import ProblemsRelayListQueryNode from "@/__generated__/ProblemsRelayListQuery.graphql";

// export default function ProblemsRelayList() {
//   const data = useLazyLoadQuery<ProblemsRelayListQuery>(
//     ProblemsRelayListQueryNode as any,
//     { first: 20 }
//   );

//   return (
//     <ul className="space-y-2">
//       {data.problems?.edges?.map((edge) => (
//         <li
//           key={edge?.node?.id ?? Math.random()}
//           className="border p-3 rounded"
//         >
//           <div className="font-semibold">{edge?.node?.title}</div>
//           <div className="text-sm text-gray-500">{edge?.node?.difficulty}</div>
//         </li>
//       ))}
//     </ul>
//   );
// }
