import React from "react";
import OnboardForm from "../components/OnboardForm";

export default function Home() {
  return (
    <div className="flex h-full justify-center items-center">
      <div className="flex flex-col items-center gap-4 w-full">
        <div className="flex flex-col items-center">
          <h1 className="text-3xl font-bold uppercase">Brand Information</h1>
          <h3 className="text-lg">
            Please enter brand title/description so trending posts can be
            generated for you.
          </h3>
        </div>
        <OnboardForm />
      </div>
    </div>
  );
}
