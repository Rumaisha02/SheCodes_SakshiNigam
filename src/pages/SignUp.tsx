import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Sparkles, Building2, Star } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

const SignUp = () => {
  const [role, setRole] = useState<"brand" | "influencer" | null>(null);
  const navigate = useNavigate();

  return (
    <div className="min-h-[calc(100vh-4rem)] flex items-center justify-center p-4">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
        className="glass-card rounded-2xl p-8 w-full max-w-md">
        <div className="text-center mb-8">
          <Sparkles className="h-8 w-8 text-primary mx-auto mb-3" />
          <h1 className="font-heading text-2xl font-bold text-foreground">Join CollabHub</h1>
          <p className="text-sm text-muted-foreground mt-1">Create your account to get started</p>
        </div>

        {!role ? (
          <div className="space-y-4">
            <p className="text-sm text-center text-muted-foreground mb-4">I am a...</p>
            <Button onClick={() => setRole("brand")} variant="outline"
              className="w-full h-16 rounded-2xl text-left justify-start px-6">
              <div className="flex items-center gap-3">
                <Building2 className="h-5 w-5 text-primary shrink-0" />
                <div>
                  <p className="font-semibold text-foreground">Brand</p>
                  <p className="text-xs text-muted-foreground">Find influencers for campaigns</p>
                </div>
              </div>
            </Button>
            <Button onClick={() => setRole("influencer")} variant="outline"
              className="w-full h-16 rounded-2xl text-left justify-start px-6">
              <div className="flex items-center gap-3">
                <Star className="h-5 w-5 text-primary shrink-0" />
                <div>
                  <p className="font-semibold text-foreground">Influencer</p>
                  <p className="text-xs text-muted-foreground">Get discovered by brands</p>
                </div>
              </div>
            </Button>
          </div>
        ) : (
          <div className="space-y-4">
            <Button variant="ghost" size="sm" className="text-muted-foreground" onClick={() => setRole(null)}>
              Back
            </Button>
            {role === "influencer" ? (
              <>
                <Input placeholder="Full Name" className="rounded-xl" />
                <Input placeholder="Email" type="email" className="rounded-xl" />
                <Input placeholder="Instagram Handle" className="rounded-xl" />
                <Input placeholder="Password" type="password" className="rounded-xl" />
              </>
            ) : (
              <>
                <Input placeholder="Company Name" className="rounded-xl" />
                <Input placeholder="Website URL" className="rounded-xl" />
                <Input placeholder="Industry" className="rounded-xl" />
                <Input placeholder="Password" type="password" className="rounded-xl" />
              </>
            )}
            <Button className="w-full rounded-xl gradient-bg text-primary-foreground hover:opacity-90"
              onClick={() => navigate(role === "brand" ? "/brand-dashboard" : "/influencer-dashboard")}>
              Create Account
            </Button>
          </div>
        )}

        <p className="text-sm text-center text-muted-foreground mt-6">
          Already have an account? <Link to="/login" className="text-primary hover:underline">Log In</Link>
        </p>
      </motion.div>
    </div>
  );
};

export default SignUp;
