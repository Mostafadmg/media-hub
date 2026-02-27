import { useLocation, Link } from "react-router-dom";
import { LogoIcon, NavHome, NavMovies, NavTVSeries, NavBookmark } from "./icons";

const navItems = [
  { to: "/", icon: NavHome },
  { to: "/movies", icon: NavMovies },
  { to: "/tv-series", icon: NavTVSeries },
  { to: "/bookmarks", icon: NavBookmark },
];

export function DesktopNav() {
  const { pathname } = useLocation();

  return (
    <aside className="hidden lg:flex flex-col items-center w-24 bg-card rounded-[20px] py-8 my-8 ml-8 fixed top-0 bottom-0 z-50">
      <Link to="/">
        <LogoIcon className="mb-16" />
      </Link>
      <nav className="flex flex-col items-center gap-10 flex-1">
        {navItems.map(({ to, icon: Icon }) => (
          <Link
            key={to}
            to={to}
            className={`transition-colors hover:text-primary ${pathname === to ? "text-foreground" : "text-muted"}`}
          >
            <Icon />
          </Link>
        ))}
      </nav>
      <div className="w-10 h-10 rounded-full border-2 border-foreground overflow-hidden">
        <img src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=80&h=80&fit=crop" alt="Avatar" className="w-full h-full object-cover" />
      </div>
    </aside>
  );
}

export function MobileNav() {
  const { pathname } = useLocation();

  return (
    <header className="lg:hidden flex items-center justify-between bg-card px-4 md:px-6 py-4 md:mx-6 md:mt-6 md:rounded-[10px]">
      <Link to="/">
        <LogoIcon />
      </Link>
      <nav className="flex items-center gap-6 md:gap-8">
        {navItems.map(({ to, icon: Icon }) => (
          <Link
            key={to}
            to={to}
            className={`transition-colors hover:text-primary ${pathname === to ? "text-foreground" : "text-muted"}`}
          >
            <Icon />
          </Link>
        ))}
      </nav>
      <div className="w-6 h-6 md:w-8 md:h-8 rounded-full border border-foreground overflow-hidden">
        <img src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=80&h=80&fit=crop" alt="Avatar" className="w-full h-full object-cover" />
      </div>
    </header>
  );
}
