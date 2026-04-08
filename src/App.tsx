import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Index from "./pages/Index.tsx";
import NotFound from "./pages/NotFound.tsx";
import BrandDashboard from "./pages/BrandDashboard.tsx";
import InfluencerDashboard from "./pages/InfluencerDashboard.tsx";
import WarRoom from "./pages/WarRoom.tsx";
import SignUp from "./pages/SignUp.tsx";
import Login from "./pages/Login.tsx";
import Navbar from "./components/Navbar.tsx";

const queryClient = new QueryClient();

const WithNav = ({ children }: { children: React.ReactNode }) => (
  <>
    <Navbar />
    {children}
  </>
);

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/brand-dashboard" element={<WithNav><BrandDashboard /></WithNav>} />
          <Route path="/influencer-dashboard" element={<WithNav><InfluencerDashboard /></WithNav>} />
          <Route path="/war-room" element={<WithNav><WarRoom /></WithNav>} />
          <Route path="/signup" element={<WithNav><SignUp /></WithNav>} />
          <Route path="/login" element={<WithNav><Login /></WithNav>} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
