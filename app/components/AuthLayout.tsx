import { LucideInbox } from "lucide-react";
import React from "react";

export interface AuthLayoutProps {
  children: React.ReactNode;
}

export function AuthLayout({ children }: AuthLayoutProps) {
  return (
    <div className="grid min-h-screen w-full lg:grid-cols-2">
      <div className="hidden lg:block bg-zinc-900">
        <div className="flex h-full flex-col justify-between p-8">
          <div className="flex items-center gap-2 text-white">
            <LucideInbox className="h-6 w-6" />
            <span className="text-xl font-bold">Acme Inc</span>
          </div>
          <div className="space-y-4 text-white">
            <p className="text-xl font-medium">
              &quot;This library has saved me countless hours of work and helped
              me deliver stunning designs to my clients faster than ever
              before.&quot;
            </p>
            <p className="font-medium">Sofia Davis</p>
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center p-4 sm:p-8 bg-black">
        <div className="w-full max-w-md space-y-8">
          <div className="text-center">
            <LucideInbox className="mx-auto h-12 w-12 text-white lg:hidden" />
            <h2 className="mt-6 text-3xl font-bold tracking-tight text-white lg:hidden">
              Welcome to Acme Inc
            </h2>
          </div>
          {children}
        </div>
      </div>
    </div>
  );
}
