import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { signup as signupApi } from "../../services/apiAuth";

export function useSignup() {
  const { mutate: signup, isLoading } = useMutation(signupApi, {
    onSuccess: () => {
      toast.success("Signup successful! Please check your email to confirm your account.")
    },
  });
  return { signup, isLoading };
}