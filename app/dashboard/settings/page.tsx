import OnboardForm from "@/app/components/OnboardForm";
import React from "react";

const SettingsPage = () => {
  return (
    <div className="flex flex-col items-center gap-4 w-full">
      <div className="mt-12 flex flex-col items-center">
        <h1 className="text-5xl font-black uppercase">Brand Information</h1>
        <h3 className="uppercase text-xl">
          Please update brand information
        </h3>
      </div>
      <OnboardForm />
    </div>
  );
};

export default SettingsPage;
