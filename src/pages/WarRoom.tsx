import { useState } from "react";
import { motion } from "framer-motion";
import { Send, Upload, Check, CheckCircle2, Circle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const milestones = [
  { label: "Outreach", done: true },
  { label: "Brief Sent", done: true },
  { label: "Content Approval", done: false },
  { label: "Payment", done: false },
];

const initialMessages = [
  { from: "brand", text: "Hi Priya! We'd love to work with you on our café launch campaign.", time: "10:00 AM" },
  { from: "influencer", text: "Hi! I'd love to. Can you share the brief and deliverables?", time: "10:05 AM" },
  { from: "brand", text: "Sure! We need 2 Reels and 3 Stories. Budget is ₹15,000. Brief attached in the panel →", time: "10:07 AM" },
];

const WarRoom = () => {
  const [messages, setMessages] = useState(initialMessages);
  const [input, setInput] = useState("");

  const sendMessage = () => {
    if (!input.trim()) return;
    setMessages([...messages, { from: "influencer", text: input, time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }) }]);
    setInput("");
  };

  return (
    <div className="flex flex-col md:flex-row min-h-[calc(100vh-4rem)]">
      {/* Status Bar */}
      <div className="md:hidden border-b border-border bg-card px-4 py-3">
        <div className="flex items-center justify-between gap-2">
          {milestones.map((m, i) => (
            <div key={m.label} className="flex items-center gap-1 text-xs">
              {m.done ? <CheckCircle2 className="h-4 w-4 text-success" /> : <Circle className="h-4 w-4 text-muted-foreground" />}
              <span className={m.done ? "text-foreground" : "text-muted-foreground"}>{m.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Chat */}
      <div className="flex-1 flex flex-col border-r border-border">
        <div className="border-b border-border p-4 bg-card">
          <h2 className="font-heading font-semibold text-foreground">Zara Bakehouse × Priya Sharma</h2>
          <p className="text-xs text-muted-foreground">Campaign: Café Launch · Active</p>
        </div>

        <div className="flex-1 overflow-auto p-4 space-y-4">
          {messages.map((msg, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
              className={`flex ${msg.from === "influencer" ? "justify-end" : "justify-start"}`}>
              <div className={`max-w-[75%] rounded-2xl px-4 py-2.5 ${
                msg.from === "influencer" ? "gradient-bg text-primary-foreground" : "bg-muted text-foreground"
              }`}>
                <p className="text-sm">{msg.text}</p>
                <p className={`text-xs mt-1 ${msg.from === "influencer" ? "text-primary-foreground/70" : "text-muted-foreground"}`}>
                  {msg.time}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="border-t border-border p-4 bg-card">
          <div className="flex gap-2">
            <Button variant="outline" size="icon" className="rounded-xl shrink-0">
              <Upload className="h-4 w-4" />
            </Button>
            <Input value={input} onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && sendMessage()}
              placeholder="Type a message..." className="rounded-xl" />
            <Button onClick={sendMessage} className="rounded-xl gradient-bg text-primary-foreground hover:opacity-90 shrink-0">
              <Send className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>

      {/* Deal Panel */}
      <aside className="w-full md:w-80 border-t md:border-t-0 bg-card p-6 space-y-6 overflow-auto">
        <div>
          <h3 className="font-heading font-semibold text-foreground mb-4">Campaign Details</h3>
          <div className="space-y-3 text-sm">
            <div className="flex justify-between"><span className="text-muted-foreground">Brand</span><span className="text-foreground">Zara Bakehouse</span></div>
            <div className="flex justify-between"><span className="text-muted-foreground">Campaign</span><span className="text-foreground">Café Launch</span></div>
            <div className="flex justify-between"><span className="text-muted-foreground">Budget</span><span className="font-semibold text-foreground">₹15,000</span></div>
            <div className="flex justify-between"><span className="text-muted-foreground">Niche</span><span className="text-foreground">Food</span></div>
          </div>
        </div>

        <div>
          <h3 className="font-heading font-semibold text-foreground mb-3">Milestone Tracker</h3>
          <div className="space-y-3">
            {milestones.map((m, i) => (
              <div key={m.label} className="flex items-center gap-3">
                {m.done ? (
                  <CheckCircle2 className="h-5 w-5 text-success shrink-0" />
                ) : (
                  <Circle className="h-5 w-5 text-muted-foreground shrink-0" />
                )}
                <span className={`text-sm ${m.done ? "text-foreground" : "text-muted-foreground"}`}>{m.label}</span>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h3 className="font-heading font-semibold text-foreground mb-3">Deliverables</h3>
          <div className="space-y-2">
            {["2 Instagram Reels", "3 Instagram Stories", "1 Grid Post"].map((d) => (
              <div key={d} className="flex items-center gap-2 text-sm text-muted-foreground">
                <Circle className="h-3.5 w-3.5 shrink-0" />
                <span>{d}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-2">
          <Button className="w-full rounded-xl gradient-bg text-primary-foreground hover:opacity-90">
            <Upload className="h-4 w-4 mr-2" />Upload Content
          </Button>
          <Button variant="outline" className="w-full rounded-xl">
            <Check className="h-4 w-4 mr-2" />Approve & Release Payment
          </Button>
        </div>
      </aside>
    </div>
  );
};

export default WarRoom;
