import Form from "next/form";
import { Input } from "./ui/input";
import { useActionState, useEffect, useState } from "react";
import { SubmitButton } from "@/components/submit-button";
import { login, type LoginActionState } from "@/app/(auth)/actions";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

export function AuthForm() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [isSuccessful, setIsSuccessful] = useState(false);
  const [errors, setErrors] = useState({ email: "" });
  const [isFormValid, setIsFormValid] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false); // Track user interaction
  const [state, formAction] = useActionState<LoginActionState, FormData>(
    login,
    {
      status: "idle",
    }
  );

  useEffect(() => {
    validateForm(email);
  }, []);

  useEffect(() => {
    if (state.status === "failed") {
      setErrors({ email: "Invalid credentials." });
      toast.error("Invalid credentials!");
    } else if (state.status === "invalid_data") {
      setErrors({ email: "Email address is not valid." });
    } else if (state.status === "success") {
      setIsSuccessful(true);
      router.refresh();
    }
  }, [state.status, router]);

  const validateForm = (email: string): void => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const validationErrors = { email: "" };

    if (!email) {
      validationErrors.email = "Email is required.";
    } else if (!emailRegex.test(email)) {
      validationErrors.email = "Email address is not valid.";
    }

    setErrors(validationErrors);
    setIsFormValid(validationErrors.email === "");
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setEmail(value);
    validateForm(value);
  };

  const handleKeyUp = () => {
    if (!hasInteracted) {
      setHasInteracted(true);
    }
    validateForm(email);
  };

  const handleSubmit = (formData: FormData) => {
    if (isFormValid) {
      formAction(formData);
    }
  };

  const isSubmitDisabled =
    !isFormValid || state.status === "in_progress" || isSuccessful;

  return (
    <Form
      action={handleSubmit}
      className="flex-1 flex flex-col gap-[3px] w-full"
      noValidate
    >
      <div className="flex flex-col gap-2">
        <Input
          id="email"
          name="email"
          value={email}
          onChange={handleInputChange}
          onKeyUp={handleKeyUp}
          className={errors.email && hasInteracted ? "invalid" : ""}
          placeholder="Your email address"
          autoComplete="email"
          required
          autoFocus
        />
      </div>
      <p className="h-[14px] text-[10px] leading-[10px] mb-0.5 px-4 text-warning">
        {hasInteracted && errors.email}
      </p>
      <SubmitButton isSuccessful={isSuccessful} disabled={isSubmitDisabled}>
        Sign in
      </SubmitButton>
    </Form>
  );
}
