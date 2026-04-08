import { motion } from "framer-motion";
import { MapPin, Users, Clock, Briefcase } from "lucide-react";
import { Button } from "@/components/ui/button";
import type { Campaign } from "@/data/mockData";

interface CampaignCardProps {
  campaign: Campaign;
  index?: number;
  onApply?: (id: string) => void;
}

const CampaignCard = ({ campaign, index = 0, onApply }: CampaignCardProps) => (
  <motion.div
    initial={{ opacity: 0, x: -20 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ delay: index * 0.1, duration: 0.4 }}
    className="glass-card rounded-2xl p-5 flex items-center gap-4 hover:shadow-lg transition-shadow"
  >
    <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
      <Briefcase className="h-6 w-6 text-primary" />
    </div>
    <div className="flex-1 min-w-0">
      <h3 className="font-semibold text-foreground truncate">{campaign.title}</h3>
      <p className="text-sm text-muted-foreground">{campaign.brandName}</p>
      <div className="flex items-center gap-3 mt-1 text-xs text-muted-foreground">
        <span className="flex items-center gap-1"><MapPin className="h-3 w-3" />{campaign.city}</span>
        <span className="flex items-center gap-1"><Users className="h-3 w-3" />{campaign.applicants} applied</span>
        <span className="flex items-center gap-1"><Clock className="h-3 w-3" />{campaign.deadline}</span>
      </div>
    </div>
    <div className="text-right shrink-0">
      <p className="text-sm font-semibold text-foreground">{campaign.budget}</p>
      <Button size="sm" className="mt-2 rounded-xl gradient-bg text-primary-foreground hover:opacity-90"
        onClick={() => onApply?.(campaign.id)}>
        Apply
      </Button>
    </div>
  </motion.div>
);

export default CampaignCard;
