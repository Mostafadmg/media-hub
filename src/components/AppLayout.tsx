import { Outlet } from "react-router-dom";
import { DesktopNav, MobileNav } from "./AppNavigation";

export function AppLayout() {
  return (
    <div className="min-h-screen bg-background">
      <DesktopNav />
      <MobileNav />
      <main className="lg:ml-32 px-4 md:px-6 lg:px-9 py-4 md:py-6 lg:py-8">
        <Outlet />
      </main>
    </div>
  );
}
