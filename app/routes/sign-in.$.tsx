import { SignIn } from "@clerk/remix";
import { AuthLayout } from "~/components/AuthLayout";

export const appearance = {
  elements: {
    rootBox: "w-[350px]",
    card: "bg-zinc-900 shadow-none",
    headerTitle: "text-2xl font-bold text-white",
    headerSubtitle: "text-zinc-400",
    formFieldLabel: "text-white font-normal",
    formFieldInput: "bg-zinc-800 text-white border-zinc-700 rounded",
    formButtonPrimary:
      "w-full bg-white text-black hover:bg-zinc-200 font-normal rounded",
    footerActionLink: "text-white hover:text-zinc-200",
    dividerLine: "bg-zinc-700",
    dividerText: "text-zinc-400",
    formFieldInputShowPasswordButton: "text-zinc-400",
    formFieldAction: "text-zinc-400 hover:text-white",
    identityPreviewEditButton: "text-zinc-400 hover:text-white",
    formFieldSuccessText: "text-green-500",
    formFieldErrorText: "text-red-500",
    selectOptionCell: "text-white bg-zinc-800 hover:bg-zinc-700",
    selectOptionCheckMark: "text-white",
    accountSwitcherActionButton: "text-white hover:text-zinc-200",
    footer: "bg-none bg-zinc-900 rounded-b-lg  py-4 px-6",
    footerActionText: "white hover:text-zinc-600",
    logoBox: "hidden", // Hide the Clerk logo
  },

  layout: {
    // socialButtonsVariant: "iconButton",
    // socialButtonsPlacement: "bottom",
    // termsPageUrl: "https://your-terms-page-url.com",
    // privacyPageUrl: "https://your-privacy-page-url.com",
    unsafe_disableDevelopmentModeWarnings: true,
  },
};

export default function SignInPage() {
  return (
    <AuthLayout>
      <SignIn appearance={appearance} />
    </AuthLayout>
  );
}
