"use client";
import { FC, useState } from "react";
import { Button } from "./ui/Button";
import { signOut } from "next-auth/react";

interface SignOutButtonProps {}

const SignOutButton: FC<SignOutButtonProps> = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const signUserOut = async () => {
    setIsLoading(true);
    try {
      await signOut();
    } catch (err) {
      //   toast({
      //     title: "Error signing out",
      //     message: "please try again later",
      //     type: "error",
      //   });
    }
  };
  return (
    <Button onClick={signUserOut} isLoading={isLoading}>
      Sign in
    </Button>
  );
};

export default SignOutButton;