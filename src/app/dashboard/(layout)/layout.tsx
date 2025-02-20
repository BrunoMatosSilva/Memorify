import type { ReactNode } from "react";
import Logo from "@/src/assets/memory-logo.svg";
import { NavItems } from "@/src/components/pages/dashboard/nav-items";
import { ThemeToggle } from "@/src/components/shared/theme-toogle";
import { UserDropdown } from "@/src/components/pages/dashboard/user-dropdowns";

type DashboardLayoutProps = {
  children: ReactNode;
}

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  return (
    <div className="w-full h-screen overflow-hidden grid grid-cols-[300px,1fr]">
      <aside className="w-full h-full flex flex-col items-center border-r border-muted">
        <div className="w-full p-6 border-b border-muted">
          <Logo className="max-w-[150px] max-auto" />
        </div>

        <NavItems />

        <div className="w-full mt-auto border-t border-muted px-3 py-4 flex items-center justify-between gap-2">
          <UserDropdown />
          <ThemeToggle />
        </div>
      </aside>
      <main className="p-6 flex flex-col w-full h-full overflow-auto">
        {children}
      </main>
    </div>
  );
}