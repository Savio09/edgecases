import Link from "next/link";
import Navbar from "./components/Navbar";
import { ArrowRight } from "lucide-react";

export default function Home() {
  return (
    <div>
      <main className="flex flex-col items-center justify-center min-h-screen py-2 w-[70%] mx-auto text-center bg-[#f9f9f9] homepage">
        <h1 className="text-[4rem] font-bold mb-4">
          Your algorithm is correct, but, you're missing that{" "}
          <span>edgecase.</span>
        </h1>

        <div className="cta mt-[20px]!">
          <Link
            href="/problems"
            className="flex items-center! gap-2 bg-black py-2! px-4! rounded-md! text-white! font-bold! text-lg! hover:bg-gradient-to-r from-[#8b5cf6] to-[#3b82f6]! transition-colors! duration-300!"
          >
            Browse edgecases
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </main>
    </div>
  );
}
