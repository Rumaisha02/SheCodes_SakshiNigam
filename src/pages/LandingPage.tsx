import { motion } from "framer-motion";
import { TrendingUp, Users, Zap } from "lucide-react";
import AISearchBar from "@/components/AISearchBar";
import InfluencerCard from "@/components/InfluencerCard";
import CampaignCard from "@/components/CampaignCard";
import { influencers, campaigns } from "@/data/mockData";
import { useNavigate } from "react-router-dom";

const quickTags = ["Mumbai", "Delhi", "Lifestyle", "Food", "Beauty", "Bangalore"];

const stats = [
  { icon: Users, label: "Influencers", value: "12,400+" },
  { icon: Zap, label: "Campaigns", value: "3,200+" },
  { icon: TrendingUp, label: "Avg. Engagement", value: "6.8%" },
];

const LandingPage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 gradient-bg opacity-10" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,hsl(var(--primary)/0.15),transparent_70%)]" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] rounded-full bg-primary/5 blur-3xl" />
        <div className="container mx-auto px-4 py-20 md:py-32 relative z-10">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto mb-10">
            <h1 className="font-heading text-4xl md:text-6xl font-bold mb-4 leading-tight">
              Where local brands meet{" "}
              <span className="gradient-text">micro-influencers</span> that matter.
            </h1>
            <p className="font-heading text-lg md:text-xl text-muted-foreground mb-8">
              AI-matched. Transparent. No agency fees.
            </p>
            <AISearchBar onSearch={() => navigate("/brand-dashboard")} />
            <div className="flex flex-wrap justify-center gap-2 mt-6">
              {quickTags.map((tag) => (
                <span key={tag}
                  className="px-4 py-1.5 rounded-full text-sm bg-muted text-muted-foreground hover:bg-primary/10 hover:text-primary cursor-pointer transition-colors">
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Stats */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3, duration: 0.5 }}
            className="flex justify-center gap-8 md:gap-16 mt-12">
            {stats.map((s) => (
              <div key={s.label} className="text-center">
                <s.icon className="h-6 w-6 text-primary mx-auto mb-2" />
                <p className="text-2xl md:text-3xl font-bold text-foreground">{s.value}</p>
                <p className="text-sm text-muted-foreground">{s.label}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Live Campaigns */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="font-heading text-2xl md:text-3xl font-bold mb-8">
          Live Campaigns
        </h2>
        <div className="flex flex-col gap-4">
          {campaigns.map((c, i) => (
            <CampaignCard key={c.id} campaign={c} index={i} />
          ))}
        </div>
      </section>

      {/* Featured Influencers */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="font-heading text-2xl md:text-3xl font-bold mb-8">
          Featured Influencers
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {influencers.map((inf, i) => (
            <InfluencerCard key={inf.id} influencer={inf} index={i}
              onViewProfile={() => navigate(`/brand-dashboard`)}
              onHire={() => navigate("/war-room")} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default LandingPage;
