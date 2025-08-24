import { DarkModeToggle } from "@/components/common/darkmode-toggle";
import { ReactNode } from "react";
import { Coffee } from "lucide-react";

type AuthLayoutProps = {
  children: ReactNode;
};

export default function AuthLayout({ children }: AuthLayoutProps) {
  return (
    <div className="relative bg-muted flex min-h-svh flex-col items-center justify-center p-6 md:p-10">
      <div className="absolute top-4 right-4">
        <DarkModeToggle />
      </div>

      <div className="flex w-full max-w-sm flex-col">
        {/* Logo */}
        <div className="flex items-center gap-2 self-center font-medium mb-4">
          <div className="flex p-2 items-center justify-center">
            <Coffee className="size-6" />
          </div>
          WPU Coffee
        </div>

        {/* Card (children) */}
        {children}
      </div>
    </div>
  );
}
