import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const isLanding = location.pathname === "/";

  return (
    <nav className="sticky top-0 z-50 border-b border-border/50 bg-background/80 backdrop-blur-xl">
      <div className="container mx-auto flex items-center justify-between h-16 px-4">
        <Link to="/" className="flex items-center gap-2">
          <Sparkles className="h-6 w-6 text-primary" />
          <span className="font-heading text-xl font-bold gradient-text">CollabHub</span>
        </Link>

        <div className="hidden md:flex items-center gap-6">
          <Link to="/influencer-dashboard" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">For Influencers</Link>
          <Link to="/brand-dashboard" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">For Brands</Link>
          <Link to="/signup">
            <Button variant="outline" size="sm" className="rounded-xl">Sign Up</Button>
          </Link>
          <Link to="/login">
            <Button size="sm" className="rounded-xl gradient-bg text-primary-foreground hover:opacity-90">Log In</Button>
          </Link>
        </div>

        <button className="md:hidden text-foreground" onClick={() => setOpen(!open)}>
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-border bg-background p-4 flex flex-col gap-3">
          <Link to="/influencer-dashboard" className="text-sm py-2" onClick={() => setOpen(false)}>For Influencers</Link>
          <Link to="/brand-dashboard" className="text-sm py-2" onClick={() => setOpen(false)}>For Brands</Link>
          <Link to="/signup" onClick={() => setOpen(false)}>
            <Button variant="outline" size="sm" className="w-full rounded-xl">Sign Up</Button>
          </Link>
          <Link to="/login" onClick={() => setOpen(false)}>
            <Button size="sm" className="w-full rounded-xl gradient-bg text-primary-foreground">Log In</Button>
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
