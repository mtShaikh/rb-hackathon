"use client";

import Button from "@/app/components/Button";
import Input from "@/app/components/Input";
import { useCallback, useState } from "react";
import { FieldValues, SubmitHandler, set, useForm } from "react-hook-form";
import Textarea from "./Textarea";

type Variant = "BRAND" | "SOCIALACCOUNT";

const OnboardForm = () => {
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      title: "",
      description: "",
    },
  });

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    setIsLoading(true);
  };

  const socialAction = (action: string) => {
    setIsLoading(true);

    // NextAuth Social Signin
  };

  return (
    <div
      className="
  mt-8
  sm:mx-auto
  sm:w-full
  sm:max-w-md
  "
    >
      <div
        className="
      bg-white
      px-4
      py-8
      shadow
      sm:rounded-lg
      sm:px-10
      "
      >
        <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
          <>
            <Input
              id="title"
              label="Title"
              register={register}
              errors={errors}
              disabled={isLoading}
            />
            <Textarea
              id="description"
              label="Description"
              register={register}
              errors={errors}
              disabled={isLoading}
            />
            <div>
              <Button disabled={isLoading} fullWidth={true} type="submit">
                Save
              </Button>
            </div>
          </>
        </form>
      </div>
    </div>
  );
};

export default OnboardForm;
