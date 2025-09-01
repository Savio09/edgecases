"use client";

import Link from "next/link";
import { UserButton, useAuth } from "@clerk/nextjs";
import { AddProblemDialog } from "./AddProblemModal";
import { Problem } from "../types/problem";

export default function Navbar() {
  const { isSignedIn } = useAuth();
  const handleAddProblem = (problem: Omit<Problem, "id">) => {
    console.log("New problem added:", problem);
  };
  return (
    <nav className="border-b border-gray-200">
      <div className="nav-bar h-16 flex items-center justify-between w-[90%] mx-auto ">
        <div className="flex items-center gap-8">
          <Link href="/">
            <h1 className="text-3xl font-bold text-gray-800">edgecases.</h1>
          </Link>
          <ul className="flex items-center gap-6">
            <li>
              <Link
                href="/problems"
                className="text-sm font-medium text-gray-500 hover:text-gray-900 transition-colors"
              >
                Problems
              </Link>
            </li>
            <li>
              <Link
                href="/profile"
                className="text-sm font-medium text-gray-500 hover:text-gray-900 transition-colors"
              >
                Profile
              </Link>
            </li>
          </ul>
        </div>

        <div className="flex items-center gap-4">
          {isSignedIn ? (
            <>
              <AddProblemDialog onAddProblem={handleAddProblem} />
              <UserButton />
            </>
          ) : (
            <>
              <Link
                href="/sign-in"
                className="text-sm font-medium text-gray-500 hover:text-gray-900 transition-colors"
              >
                Contribute
              </Link>
              <Link
                href="/sign-up"
                className="text-sm font-medium bg-gray-900 text-white px-4 py-2 rounded-md hover:bg-gray-800 transition-colors"
              >
                Sign up
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
}
