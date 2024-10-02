import { useState } from "react";

import { Button } from "~/components/ui/button";
import { Input } from "~/components/ui/input";
import { Label } from "~/components/ui/label";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "~/components/ui/card";
import { Link } from "@remix-run/react";

function AuthPage() {
  const [isSignUp, setIsSignUp] = useState(true);

  return (
    <div className="grid min-h-screen w-full lg:grid-cols-2">
      <div className="hidden lg:block bg-zinc-900">
        <div className="flex h-full flex-col justify-between p-8">
          <div className="flex items-center gap-2 text-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-6 w-6"
            >
              <path d="M3 9h18v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9Z" />
              <path d="M3 9V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v4" />
              <path d="M13 13h4" />
              <path d="M13 17h4" />
            </svg>
            <span className="text-xl font-bold">Acme Inc</span>
          </div>
          <div className="space-y-4 text-white">
            <p className="text-xl font-medium">
              This library has saved me countless hours of work and helped me
              deliver stunning designs to my clients faster than ever before.
            </p>
            <p className="font-medium">Sofia Davis</p>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center bg-black p-8">
        <Card className="w-[350px] bg-zinc-950 border-zinc-800">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-white">
              {isSignUp ? "Sign Up" : "Login"}
            </CardTitle>
            <CardDescription className="text-zinc-400">
              {isSignUp
                ? "Enter your information to create an account"
                : "Enter your email below to login to your account"}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {isSignUp && (
                <>
                  <div className="space-y-2">
                    <Label htmlFor="first-name" className="text-white">
                      First name
                    </Label>
                    <Input
                      id="first-name"
                      placeholder="John"
                      required
                      className="bg-zinc-900 text-white border-zinc-700"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="last-name" className="text-white">
                      Last name
                    </Label>
                    <Input
                      id="last-name"
                      placeholder="Doe"
                      required
                      className="bg-zinc-900 text-white border-zinc-700"
                    />
                  </div>
                </>
              )}
              <div className="space-y-2">
                <Label htmlFor="email" className="text-white">
                  Email
                </Label>
                <Input
                  id="email"
                  placeholder="m@example.com"
                  required
                  type="email"
                  className="bg-zinc-900 text-white border-zinc-700"
                />
              </div>
              <div className="space-y-2">
                <div className="flex items-center">
                  <Label htmlFor="password" className="text-white">
                    Password
                  </Label>
                  {!isSignUp && (
                    <Link
                      to="#"
                      className="ml-auto inline-block text-sm text-white hover:underline"
                    >
                      Forgot your password?
                    </Link>
                  )}
                </div>
                <Input
                  id="password"
                  required
                  type="password"
                  className="bg-zinc-900 text-white border-zinc-700"
                />
              </div>
              <Button
                type="submit"
                className="w-full bg-white text-black hover:bg-zinc-200"
              >
                {isSignUp ? "Create an account" : "Login"}
              </Button>
            </div>
            <div className="mt-4 text-sm">
              <span className="text-zinc-400">
                {isSignUp
                  ? "Already have an account? "
                  : "Don't have an account? "}
              </span>
              <Button
                variant="link"
                className="text-white hover:underline p-0"
                onClick={() => setIsSignUp(!isSignUp)}
              >
                {isSignUp ? "Login" : "Sign up"}
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

export default AuthPage;
