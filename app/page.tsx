import React from "react";
import AuthForm from "@/app/components/AuthForm";

export default function Home() {
  return (
    <div className="flex h-full justify-center items-center">
      <div className="flex flex-col items-center gap-4 w-full">
        <div className="flex flex-col items-center">
          <h1 className="text-5xl font-black uppercase">Social Scribe</h1>
          <h3 className="uppercase text-xl">Your Social Media Copilot</h3>
        </div>
        <AuthForm />
      </div>
    </div>
  );
}
