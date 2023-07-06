"use client";
import { usePathname } from "next/navigation";
import { useEffect } from "react";

export default function Page() {
  const id = usePathname().split("/")[2];
  return (
    <div className="flex flex-col items-center content-center mt-8">
      <h1 className="mb-4 text-2xl font-bold leading-none tracking-tight text-gray-900 md:text-1xl lg:text-1xl dark:text-white">
        Title
      </h1>
      <p className="mb-6 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">
        Content goes here!
      </p>
    </div>
  );
}
