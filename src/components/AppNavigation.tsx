import { useLocation, Link } from "react-router-dom";
import { LogoIcon, NavHome, NavMovies, NavTVSeries, NavBookmark } from "./icons";

const navItems = [
  { to: "/", icon: NavHome, label: "Home" },
  { to: "/movies", icon: NavMovies, label: "Movies" },
  { to: "/tv-series", icon: NavTVSeries, label: "TV Series" },
  { to: "/bookmarks", icon: NavBookmark, label: "Bookmarks" },
];

export function DesktopNav() {
  const { pathname } = useLocation();

  return (
    <aside className="hidden lg:flex flex-col items-center w-24 bg-card rounded-[20px] py-8 my-8 ml-8 fixed top-0 bottom-0 z-50">
      <Link to="/" className="mb-16 transition-transform duration-300 hover:scale-110">
        <LogoIcon />
      </Link>
      <nav className="flex flex-col items-center gap-10 flex-1">
        {navItems.map(({ to, icon: Icon, label }) => (
          <Link
            key={to}
            to={to}
            aria-label={label}
            className={`relative transition-all duration-300 hover:text-primary hover:scale-125 ${pathname === to ? "text-foreground" : "text-muted"}`}
          >
            <Icon />
            {pathname === to && (
              <span className="absolute -left-3 top-1/2 -translate-y-1/2 w-1 h-4 bg-primary rounded-full animate-scale-in" />
            )}
          </Link>
        ))}
      </nav>
      <div className="w-10 h-10 rounded-full border-2 border-foreground overflow-hidden transition-all duration-300 hover:border-primary hover:scale-110 hover:shadow-[0_0_20px_hsl(var(--primary)/0.4)]">
        <img src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=80&h=80&fit=crop" alt="Avatar" className="w-full h-full object-cover" />
      </div>
    </aside>
  );
}

export function MobileNav() {
  const { pathname } = useLocation();

  return (
    <header className="lg:hidden flex items-center justify-between bg-card px-4 md:px-6 py-4 md:mx-6 md:mt-6 md:rounded-[10px] animate-fade-in">
      <Link to="/" className="transition-transform duration-300 hover:scale-110">
        <LogoIcon />
      </Link>
      <nav className="flex items-center gap-6 md:gap-8">
        {navItems.map(({ to, icon: Icon, label }) => (
          <Link
            key={to}
            to={to}
            aria-label={label}
            className={`relative transition-all duration-300 hover:text-primary ${pathname === to ? "text-foreground" : "text-muted"}`}
          >
            <Icon />
            {pathname === to && (
              <span className="absolute -bottom-2.5 left-1/2 -translate-x-1/2 w-4 h-1 bg-primary rounded-full animate-scale-in" />
            )}
          </Link>
        ))}
      </nav>
      <div className="w-6 h-6 md:w-8 md:h-8 rounded-full border border-foreground overflow-hidden transition-all duration-300 hover:border-primary">
        <img src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=80&h=80&fit=crop" alt="Avatar" className="w-full h-full object-cover" />
      </div>
    </header>
  );
}
