import { motion } from "framer-motion";
import { MapPin, Users } from "lucide-react";
import AuthenticityGauge from "./AuthenticityGauge";
import type { Influencer } from "@/data/mockData";
import { Button } from "@/components/ui/button";

interface InfluencerCardProps {
  influencer: Influencer;
  index?: number;
  onViewProfile?: (id: string) => void;
  onHire?: (id: string) => void;
}

const InfluencerCard = ({ influencer, index = 0, onViewProfile, onHire }: InfluencerCardProps) => {
  const formatFollowers = (n: number) => n >= 1000 ? `${(n / 1000).toFixed(1)}K` : n.toString();

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.4 }}
      className="glass-card rounded-2xl p-5 flex flex-col items-center gap-4 hover:shadow-xl transition-shadow duration-300"
    >
      <div className="relative">
        <img src={influencer.avatar} alt={influencer.name}
          className="w-20 h-20 rounded-full object-cover ring-2 ring-primary/30" />
        <span className="absolute -bottom-1 -right-1 bg-card border border-border rounded-full px-2 py-0.5 text-xs font-medium text-muted-foreground">
          {influencer.niche}
        </span>
      </div>
      <div className="text-center">
        <h3 className="font-semibold text-foreground">{influencer.name}</h3>
        <p className="text-sm text-muted-foreground">{influencer.instagram_handle}</p>
      </div>
      <div className="flex items-center gap-4 text-sm text-muted-foreground">
        <span className="flex items-center gap-1"><Users className="h-3.5 w-3.5" />{formatFollowers(influencer.followers)}</span>
        <span className="flex items-center gap-1"><MapPin className="h-3.5 w-3.5" />{influencer.city}</span>
      </div>
      <div className="flex items-center gap-3">
        <div className="text-center">
          <p className="text-lg font-bold text-foreground">{influencer.engagement_rate}%</p>
          <p className="text-xs text-muted-foreground">Engagement</p>
        </div>
        <AuthenticityGauge score={influencer.match_score} size={64} />
      </div>
      <div className="flex gap-2 w-full">
        <Button variant="outline" size="sm" className="flex-1 rounded-xl" onClick={() => onViewProfile?.(influencer.id)}>
          View Profile
        </Button>
        <Button size="sm" className="flex-1 rounded-xl gradient-bg text-primary-foreground hover:opacity-90"
          onClick={() => onHire?.(influencer.id)}>
          Hire
        </Button>
      </div>
    </motion.div>
  );
};

export default InfluencerCard;
