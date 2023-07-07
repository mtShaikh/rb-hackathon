"use client";

import OnboardForm from "@/app/components/OnboardForm";
import { TwitterButton } from "@/app/components/TwitterButton";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";

const SettingsPage = () => {
  const router = useRouter();
  useEffect(() => {
    if (!localStorage.getItem("authToken")) router.push("/");
  }, []);
  return (
    <div className="flex flex-col items-center gap-4 w-full">
      <h1 className="mt-12 text-3xl font-semibold uppercase">Settings</h1>
      <div className="flex flex-col items-center w-full">
        <h3 className="text-lg">
          Please update your brand information and connect your socials
        </h3>
        <OnboardForm />
        <TwitterButton />
      </div>
    </div>
  );
};

export default SettingsPage;
