"use client";
import { FC, useState } from "react";
import { Button } from "./ui/Button";
import { signIn } from "next-auth/react";
import { toast } from "./ui/Toast";

interface SigninButtonProps {}

const SigninButton: FC<SigninButtonProps> = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const sigInWithGoogle = async () => {
    setIsLoading(true);
    try {
      await signIn("google");
    } catch (err) {
      toast({
        title: "Error signing in",
        message: "please try again later",
        type: "error",
      });
    }
  };
  return (
    <Button onClick={sigInWithGoogle} isLoading={isLoading}>
      Sign in
    </Button>
  );
};

export default SigninButton;
