import { useState } from "react";
import { motion } from "framer-motion";
import { User, Inbox, Rss, BarChart3, Check, X, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import CampaignCard from "@/components/CampaignCard";
import { campaigns } from "@/data/mockData";
import { useNavigate } from "react-router-dom";

const sidebarItems = [
  { icon: User, label: "Profile", tab: "profile" },
  { icon: Inbox, label: "Inbox", tab: "inbox" },
  { icon: Rss, label: "Feed", tab: "feed" },
  { icon: BarChart3, label: "Stats", tab: "stats" },
];

const invites = [
  { id: "i1", brand: "Zara Bakehouse", message: "We'd love you to promote our new cafe launch!", budget: "₹15,000", date: "Apr 5" },
  { id: "i2", brand: "GreenSip", message: "Looking for a lifestyle creator for our matcha campaign.", budget: "₹12,000", date: "Apr 3" },
];

const InfluencerDashboard = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("profile");
  const [profileCompletion] = useState(70);

  return (
    <div className="flex min-h-[calc(100vh-4rem)]">
      <aside className="hidden md:flex w-60 border-r border-border bg-card flex-col p-4 gap-1">
        <h2 className="font-heading text-lg font-bold mb-4 gradient-text">Creator Hub</h2>
        {sidebarItems.map((item) => (
          <button key={item.tab} onClick={() => setActiveTab(item.tab)}
            className={`flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm transition-colors ${
              activeTab === item.tab ? "bg-primary/10 text-primary font-medium" : "text-muted-foreground hover:bg-muted"
            }`}>
            <item.icon className="h-4 w-4" />{item.label}
          </button>
        ))}
      </aside>

      <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 border-t border-border bg-card flex justify-around py-2">
        {sidebarItems.map((item) => (
          <button key={item.tab} onClick={() => setActiveTab(item.tab)}
            className={`flex flex-col items-center gap-1 text-xs ${activeTab === item.tab ? "text-primary" : "text-muted-foreground"}`}>
            <item.icon className="h-5 w-5" />{item.label}
          </button>
        ))}
      </div>

      <main className="flex-1 p-6 pb-20 md:pb-6 overflow-auto">
        {activeTab === "profile" && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="max-w-2xl mx-auto space-y-6">
            <h1 className="font-heading text-2xl font-bold">My Profile</h1>
            <div className="glass-card rounded-2xl p-6">
              <div className="flex items-center gap-4 mb-6">
                <img src="https://i.pravatar.cc/150?img=1" alt="Profile" className="w-16 h-16 rounded-full ring-2 ring-primary/30" />
                <div>
                  <h3 className="font-semibold text-foreground">Priya Sharma</h3>
                  <p className="text-sm text-muted-foreground">@priyacooks · Food · Mumbai</p>
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">Profile Completion</span>
                  <span className="font-medium text-foreground">{profileCompletion}%</span>
                </div>
                <Progress value={profileCompletion} className="h-2" />
                <p className="text-xs text-muted-foreground">Add rate card to unlock discovery.</p>
              </div>
            </div>
            <div className="grid grid-cols-3 gap-4">
              <div className="glass-card rounded-2xl p-4 text-center">
                <p className="text-2xl font-bold text-foreground">3</p>
                <p className="text-xs text-muted-foreground">Active Campaigns</p>
              </div>
              <div className="glass-card rounded-2xl p-4 text-center">
                <p className="text-2xl font-bold text-primary">87</p>
                <p className="text-xs text-muted-foreground">AI Match Score</p>
              </div>
              <div className="glass-card rounded-2xl p-4 text-center">
                <p className="text-2xl font-bold text-foreground">2</p>
                <p className="text-xs text-muted-foreground">New Invites</p>
              </div>
            </div>
          </motion.div>
        )}

        {activeTab === "inbox" && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="max-w-2xl mx-auto space-y-4">
            <h1 className="font-heading text-2xl font-bold">Inbox & Invites</h1>
            {invites.map((inv) => (
              <div key={inv.id} className="glass-card rounded-2xl p-5">
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <h3 className="font-semibold text-foreground">{inv.brand}</h3>
                    <p className="text-sm text-muted-foreground mt-1">{inv.message}</p>
                    <p className="text-xs text-muted-foreground mt-2">Budget: {inv.budget} · {inv.date}</p>
                  </div>
                </div>
                <div className="flex gap-2 mt-4">
                  <Button size="sm" className="rounded-xl gradient-bg text-primary-foreground hover:opacity-90"
                    onClick={() => navigate("/war-room")}>
                    <Check className="h-3.5 w-3.5 mr-1" />Accept
                  </Button>
                  <Button size="sm" variant="outline" className="rounded-xl">
                    <MessageSquare className="h-3.5 w-3.5 mr-1" />Counter
                  </Button>
                  <Button size="sm" variant="outline" className="rounded-xl text-destructive">
                    <X className="h-3.5 w-3.5 mr-1" />Decline
                  </Button>
                </div>
              </div>
            ))}
          </motion.div>
        )}

        {activeTab === "feed" && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-4">
            <h1 className="font-heading text-2xl font-bold">Campaign Feed</h1>
            {campaigns.map((c, i) => (
              <CampaignCard key={c.id} campaign={c} index={i} />
            ))}
          </motion.div>
        )}

        {activeTab === "stats" && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="max-w-2xl mx-auto">
            <h1 className="font-heading text-2xl font-bold mb-6">Performance Stats</h1>
            <div className="glass-card rounded-2xl p-6 text-center text-muted-foreground">
              <BarChart3 className="h-12 w-12 mx-auto mb-3 opacity-40" />
              <p>Detailed analytics coming soon. Connect your accounts to see insights.</p>
            </div>
          </motion.div>
        )}
      </main>
    </div>
  );
};

export default InfluencerDashboard;
