export interface AuthLayoutProps {
  children: React.ReactNode;
}

export function AuthLayout(props: AuthLayoutProps) {
  const { children } = props;

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
        {children}
      </div>
    </div>
  );
}
