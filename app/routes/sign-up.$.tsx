import { SignUp } from "@clerk/remix";
import { AuthLayout } from "~/components/AuthLayout";
import { appearance } from "./sign-in.$";

export default function SignInPage() {
  return (
    <AuthLayout>
      <SignUp appearance={appearance} />
    </AuthLayout>
  );
}
