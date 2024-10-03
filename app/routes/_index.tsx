import { SignOutButton, SignedIn, SignedOut, UserButton } from "@clerk/remix";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "~/components/ui/card";
import { Button } from "~/components/ui/button";
import { Link, redirect } from "@remix-run/react";
import { LoaderFunction } from "@remix-run/node";
import { getAuth } from "@clerk/remix/ssr.server";

export const loader: LoaderFunction = async (args) => {
  const { userId } = await getAuth(args);
  if (!userId) {
    return redirect("/sign-in");
  }
  return {};
};
export default function EnhancedAuthUI() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <Card className="w-[350px]">
        <CardHeader>
          <CardTitle className="text-2xl font-bold">Welcome</CardTitle>
          <CardDescription>Manage your account</CardDescription>
        </CardHeader>
        <CardContent>
          <SignedIn>
            <div className="text-center">
              <p className="mb-4">You are signed in!</p>
              <UserButton
                appearance={{
                  elements: {
                    userButtonAvatarBox: "w-16 h-16",
                  },
                }}
              />
            </div>
          </SignedIn>
          <SignedOut>
            <p className="text-center mb-4">You are signed out</p>
            <div className="space-y-2 flex flex-col">
              <Link to="/sign-in">
                <Button className="w-full">Sign In</Button>
              </Link>
              <Link to="/sign-up">
                <Button variant="outline" className="w-full">
                  Sign Up
                </Button>
              </Link>
            </div>
          </SignedOut>
        </CardContent>
        <SignedIn>
          <CardFooter>
            <SignOutButton>
              <Button variant="destructive" className="w-full">
                Sign Out
              </Button>
            </SignOutButton>
          </CardFooter>
        </SignedIn>
      </Card>
    </div>
  );
}
