import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Sparkles } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-[calc(100vh-4rem)] flex items-center justify-center p-4">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
        className="glass-card rounded-2xl p-8 w-full max-w-md">
        <div className="text-center mb-8">
          <Sparkles className="h-8 w-8 text-primary mx-auto mb-3" />
          <h1 className="font-heading text-2xl font-bold text-foreground">Welcome back</h1>
          <p className="text-sm text-muted-foreground mt-1">Log in to your CollabHub account</p>
        </div>
        <div className="space-y-4">
          <Input placeholder="Email" type="email" className="rounded-xl" />
          <Input placeholder="Password" type="password" className="rounded-xl" />
          <Button className="w-full rounded-xl gradient-bg text-primary-foreground hover:opacity-90"
            onClick={() => navigate("/brand-dashboard")}>
            Log In
          </Button>
        </div>
        <p className="text-sm text-center text-muted-foreground mt-6">
          Don't have an account? <Link to="/signup" className="text-primary hover:underline">Sign Up</Link>
        </p>
      </motion.div>
    </div>
  );
};

export default Login;
