import { Link, NavLink } from "react-router-dom";
import { Shield, BrainCircuit } from "lucide-react";

const navItems = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Services", to: "/services" },
  { label: "Blog", to: "/blog" },
  { label: "Contact", to: "/contact" },
  { label: "Login", to: "/login" },
];

const SiteHeader = () => {
  return (
    <header className="sticky top-0 z-50 border-b border-border/60 backdrop-blur supports-[backdrop-filter]:bg-background/70">
      <div className="container flex h-16 items-center justify-between">
        <Link to="/" className="group inline-flex items-center gap-2">
          <span className="rounded-md p-2 surface-card shadow-[var(--shadow-glow)]">
            <Shield className="text-[hsl(var(--brand))]" />
          </span>
          <span className="font-display text-lg font-semibold tracking-tight">AI & CyberSecure</span>
        </Link>
        <nav className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                `text-sm transition-colors ${isActive ? 'text-primary' : 'text-muted-foreground hover:text-foreground'} story-link`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>
        <Link to="/contact" className="hidden md:inline-flex">
          <span className="btn-hero h-10 px-4 inline-flex items-center gap-2"><BrainCircuit className="size-4" /> Get Started</span>
        </Link>
      </div>
    </header>
  );
};

export default SiteHeader;
