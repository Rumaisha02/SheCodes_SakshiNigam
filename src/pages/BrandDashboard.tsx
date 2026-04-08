import { useState } from "react";
import { motion } from "framer-motion";
import { Search, FileText, BarChart3, GitBranch, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Slider } from "@/components/ui/slider";
import InfluencerCard from "@/components/InfluencerCard";
import { influencers } from "@/data/mockData";
import { useNavigate } from "react-router-dom";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

const sidebarItems = [
  { icon: Search, label: "Search" },
  { icon: FileText, label: "My Campaigns" },
  { icon: Sparkles, label: "AI Brief" },
  { icon: GitBranch, label: "Pipeline" },
];

const BrandDashboard = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("search");
  const [briefGoal, setBriefGoal] = useState("");
  const [briefGenerated, setBriefGenerated] = useState(false);
  const [isGenerating, setIsGenerating] = useState(false);
  const [simBudget, setSimBudget] = useState([25000]);

  const handleGenerate = () => {
    setIsGenerating(true);
    setTimeout(() => { setIsGenerating(false); setBriefGenerated(true); }, 2500);
  };

  const simData = [
    { name: "Reach", value: Math.round(simBudget[0] * 4.2) },
    { name: "Clicks", value: Math.round(simBudget[0] * 0.35) },
    { name: "Conversions", value: Math.round(simBudget[0] * 0.04) },
  ];

  const briefs = [
    { tone: "Professional", text: `We invite you to partner with us for an authentic campaign. Your audience aligns perfectly with our brand values. Deliverables: 2 Reels + 3 Stories. Budget: ₹${simBudget[0].toLocaleString()}.` },
    { tone: "Bold", text: `Ready to create something EPIC? We love your content and want YOU to represent our brand. Let's make waves together! 2 Reels + 3 Stories. Budget: ₹${simBudget[0].toLocaleString()}.` },
    { tone: "Casual", text: `Hey! We've been following your content and think you'd be an amazing fit. Interested in a chill collab? 2 Reels + 3 Stories. Budget: ₹${simBudget[0].toLocaleString()}.` },
  ];

  const tabMap: Record<string, string> = { "Search": "search", "My Campaigns": "campaigns", "AI Brief": "brief", "Pipeline": "simulator" };

  return (
    <div className="flex min-h-[calc(100vh-4rem)]">
      <aside className="hidden md:flex w-60 border-r border-border bg-card flex-col p-4 gap-1">
        <h2 className="font-heading text-lg font-bold mb-4 gradient-text">Brand Hub</h2>
        {sidebarItems.map((item) => (
          <button key={item.label}
            onClick={() => setActiveTab(tabMap[item.label])}
            className={`flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm transition-colors ${
              activeTab === tabMap[item.label] ? "bg-primary/10 text-primary font-medium" : "text-muted-foreground hover:bg-muted"
            }`}>
            <item.icon className="h-4 w-4" />{item.label}
          </button>
        ))}
      </aside>

      <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 border-t border-border bg-card flex justify-around py-2">
        {sidebarItems.map((item) => (
          <button key={item.label} onClick={() => setActiveTab(tabMap[item.label])}
            className={`flex flex-col items-center gap-1 text-xs ${activeTab === tabMap[item.label] ? "text-primary" : "text-muted-foreground"}`}>
            <item.icon className="h-5 w-5" />{item.label}
          </button>
        ))}
      </div>

      <main className="flex-1 p-6 pb-20 md:pb-6 overflow-auto">
        {activeTab === "search" && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            <h1 className="font-heading text-2xl font-bold mb-6">AI Search & Discovery</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {influencers.map((inf, i) => (
                <InfluencerCard key={inf.id} influencer={inf} index={i}
                  onViewProfile={() => {}} onHire={() => navigate("/war-room")} />
              ))}
            </div>
          </motion.div>
        )}

        {activeTab === "campaigns" && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            <h1 className="font-heading text-2xl font-bold mb-6">My Campaigns</h1>
            <div className="glass-card rounded-2xl p-8 text-center text-muted-foreground">
              <FileText className="h-12 w-12 mx-auto mb-3 opacity-40" />
              <p>No active campaigns yet. Create one with AI Brief Generator!</p>
            </div>
          </motion.div>
        )}

        {activeTab === "brief" && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="max-w-2xl mx-auto">
            <h1 className="font-heading text-2xl font-bold mb-6">AI Brief Generator</h1>
            {!briefGenerated ? (
              <div className="glass-card rounded-2xl p-6 space-y-6">
                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">Campaign Goal</label>
                  <Textarea placeholder="e.g., Launch our new organic tea line to health-conscious millennials..."
                    value={briefGoal} onChange={(e) => setBriefGoal(e.target.value)}
                    className="rounded-xl" rows={3} />
                </div>
                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">Budget Range</label>
                  <Slider value={simBudget} onValueChange={setSimBudget} min={5000} max={100000} step={1000} className="my-4" />
                  <p className="text-sm text-muted-foreground">₹{simBudget[0].toLocaleString()}</p>
                </div>
                <Button onClick={handleGenerate} disabled={isGenerating || !briefGoal}
                  className="w-full rounded-xl gradient-bg text-primary-foreground hover:opacity-90">
                  {isGenerating ? (
                    <span className="flex items-center gap-2">
                      <span className="animate-spin h-4 w-4 border-2 border-primary-foreground border-t-transparent rounded-full" />
                      Generating briefs...
                    </span>
                  ) : (
                    <span className="flex items-center gap-2"><Sparkles className="h-4 w-4" />Generate AI Briefs</span>
                  )}
                </Button>
              </div>
            ) : (
              <div className="space-y-4">
                {briefs.map((b) => (
                  <div key={b.tone} className="glass-card rounded-2xl p-5">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-sm font-semibold text-primary">{b.tone}</span>
                      <Button size="sm" variant="outline" className="rounded-xl">Use This</Button>
                    </div>
                    <p className="text-sm text-muted-foreground">{b.text}</p>
                  </div>
                ))}
                <Button variant="outline" className="rounded-xl" onClick={() => { setBriefGenerated(false); setBriefGoal(""); }}>
                  Start Over
                </Button>
              </div>
            )}
          </motion.div>
        )}

        {activeTab === "simulator" && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="max-w-2xl mx-auto">
            <h1 className="font-heading text-2xl font-bold mb-6">Campaign Simulator</h1>
            <div className="glass-card rounded-2xl p-6 space-y-6">
              <div>
                <label className="text-sm font-medium text-foreground mb-2 block">Budget</label>
                <Slider value={simBudget} onValueChange={setSimBudget} min={5000} max={100000} step={1000} className="my-4" />
                <p className="text-sm text-muted-foreground">₹{simBudget[0].toLocaleString()}</p>
              </div>
              <div className="h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={simData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                    <XAxis dataKey="name" stroke="hsl(var(--muted-foreground))" fontSize={12} />
                    <YAxis stroke="hsl(var(--muted-foreground))" fontSize={12} />
                    <Tooltip contentStyle={{ backgroundColor: "hsl(var(--card))", border: "1px solid hsl(var(--border))", borderRadius: "0.75rem" }} />
                    <Bar dataKey="value" fill="hsl(var(--primary))" radius={[8, 8, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </div>
              <div className="grid grid-cols-3 gap-4 text-center">
                <div className="glass-card rounded-xl p-3">
                  <p className="text-lg font-bold text-foreground">{simData[0].value.toLocaleString()}</p>
                  <p className="text-xs text-muted-foreground">Predicted Reach</p>
                </div>
                <div className="glass-card rounded-xl p-3">
                  <p className="text-lg font-bold text-foreground">{simData[1].value.toLocaleString()}</p>
                  <p className="text-xs text-muted-foreground">Est. Clicks</p>
                </div>
                <div className="glass-card rounded-xl p-3">
                  <p className="text-lg font-bold text-foreground">{Math.round((simData[1].value / simBudget[0]) * 100)}%</p>
                  <p className="text-xs text-muted-foreground">ROI Score</p>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </main>
    </div>
  );
};

export default BrandDashboard;
