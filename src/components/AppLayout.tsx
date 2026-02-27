import { Outlet, useLocation } from "react-router-dom";
import { DesktopNav, MobileNav } from "./AppNavigation";

export function AppLayout() {
  const { pathname } = useLocation();

  return (
    <div className="min-h-screen bg-background">
      <DesktopNav />
      <MobileNav />
      <main className="lg:ml-32 px-4 md:px-6 lg:px-9 py-4 md:py-6 lg:py-8">
        <div key={pathname} className="animate-fade-in">
          <Outlet />
        </div>
      </main>
    </div>
  );
}
