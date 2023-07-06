"use client";

import Button from "@/app/components/Button";
import Input from "@/app/components/Input";
import { useCallback, useState } from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";

type Variant = "LOGIN" | "REGISTER";

const AuthForm = () => {
  const [variant, setVariant] = useState<Variant>("LOGIN");
  const [isLoading, setIsLoading] = useState(false);

  const toggleVariant = useCallback(() => {
    if (variant === "LOGIN") {
      setVariant("REGISTER");
    } else {
      setVariant("LOGIN");
    }
  }, [variant]);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  });

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    setIsLoading(true);

    if (variant === "REGISTER") {
      if (data.name && data.email && data.password) {
        try {
          const response = await fetch(
            `${process.env.NEXT_PUBLIC_API_HOST}/api/register`,
            {
              method: "POST",
              body: JSON.stringify({
                username: data.name,
                email: data.email,
                password: data.password,
              }),
              headers: {
                "Content-Type": "application/json",
              },
            }
          );

          const result = await response.json();

          if (result.message === "success") {
            console.log("Success: ", result);
          } else {
            console.log("Unsuccessful: ", result);
          }
        } catch (error) {
          console.log("Error: ", error);
        } finally {
          setIsLoading(false);
        }
      } else {
        console.log("Error: ", "Missing fields");
      }
    }

    if (variant === "LOGIN") {
      // NextAuth SignIn
    }
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
          {variant === "REGISTER" && (
            <Input
              id="name"
              label="Name"
              register={register}
              errors={errors}
              disabled={isLoading}
              required={variant === "REGISTER" ? true : false}
            />
          )}
          <Input
            id="email"
            label="Email Address"
            type="email"
            register={register}
            errors={errors}
            disabled={isLoading}
            required
          />
          <Input
            id="password"
            label="Password"
            type="password"
            register={register}
            errors={errors}
            disabled={isLoading}
            required
          />
          <div>
            <Button disabled={isLoading} fullWidth={true} type="submit">
              {variant === "LOGIN" ? "Sign In" : "Register"}
            </Button>
          </div>
        </form>
        <div className="mt-6">
          <div
            className="
          flex
          gap-2
          justify-center
          text-sm
          mt-6
          px-2
          text-gray-500
          "
          >
            <div>
              {variant === "LOGIN"
                ? "Don't have an account?"
                : "Already have an account?"}
            </div>
            <div onClick={toggleVariant} className="underline cursor-pointer">
              {variant === "LOGIN" ? "Create an account" : "Login"}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthForm;
