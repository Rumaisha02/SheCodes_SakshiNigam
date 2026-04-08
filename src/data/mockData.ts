export interface Influencer {
  id: string;
  name: string;
  instagram_handle: string;
  niche: string;
  city: string;
  followers: number;
  engagement_rate: number;
  email: string;
  match_score: number;
  avatar: string;
  rates: { reel: number; story: number; post: number };
  bio: string;
  growthData: { month: string; followers: number }[];
}

export interface Campaign {
  id: string;
  brandName: string;
  brandIcon: React.ReactNode;
  title: string;
  description: string;
  budget: string;
  niche: string;
  city: string;
  applicants: number;
  deadline: string;
  status: "open" | "in-progress" | "completed";
}

export const influencers: Influencer[] = [
  {
    id: "1", name: "Priya Sharma", instagram_handle: "@priyacooks", avatar: "https://i.pravatar.cc/150?img=1",
    niche: "Food", city: "Mumbai", followers: 48200, engagement_rate: 7.2, match_score: 87, email: "priya@example.com",
    rates: { reel: 5000, story: 1500, post: 3000 }, bio: "Home chef sharing authentic Indian recipes & food stories.",
    growthData: [{ month: "Jan", followers: 38000 }, { month: "Feb", followers: 40100 }, { month: "Mar", followers: 42500 }, { month: "Apr", followers: 44200 }, { month: "May", followers: 46800 }, { month: "Jun", followers: 48200 }]
  },
  {
    id: "2", name: "Arjun Mehta", instagram_handle: "@arjunfits", avatar: "https://i.pravatar.cc/150?img=3",
    niche: "Fitness", city: "Delhi", followers: 92400, engagement_rate: 5.8, match_score: 72, email: "arjun@example.com",
    rates: { reel: 8000, story: 2500, post: 5000 }, bio: "Certified trainer. Helping India get fit, one reel at a time.",
    growthData: [{ month: "Jan", followers: 75000 }, { month: "Feb", followers: 79000 }, { month: "Mar", followers: 83000 }, { month: "Apr", followers: 86500 }, { month: "May", followers: 89000 }, { month: "Jun", followers: 92400 }]
  },
  {
    id: "3", name: "Sneha Reddy", instagram_handle: "@snehaglows", avatar: "https://i.pravatar.cc/150?img=5",
    niche: "Beauty", city: "Bangalore", followers: 31500, engagement_rate: 8.9, match_score: 94, email: "sneha@example.com",
    rates: { reel: 4000, story: 1200, post: 2500 }, bio: "Skincare junkie & beauty reviewer. All things glow.",
    growthData: [{ month: "Jan", followers: 22000 }, { month: "Feb", followers: 24500 }, { month: "Mar", followers: 26800 }, { month: "Apr", followers: 28500 }, { month: "May", followers: 30200 }, { month: "Jun", followers: 31500 }]
  },
  {
    id: "4", name: "Rohan Kapoor", instagram_handle: "@rohantech", avatar: "https://i.pravatar.cc/150?img=8",
    niche: "Tech", city: "Pune", followers: 67800, engagement_rate: 4.3, match_score: 65, email: "rohan@example.com",
    rates: { reel: 7000, story: 2000, post: 4500 }, bio: "Gadget reviews & tech news. Unboxing the future.",
    growthData: [{ month: "Jan", followers: 55000 }, { month: "Feb", followers: 58000 }, { month: "Mar", followers: 60500 }, { month: "Apr", followers: 63000 }, { month: "May", followers: 65500 }, { month: "Jun", followers: 67800 }]
  },
  {
    id: "5", name: "Ananya Iyer", instagram_handle: "@ananyastyle", avatar: "https://i.pravatar.cc/150?img=9",
    niche: "Lifestyle", city: "Chennai", followers: 55100, engagement_rate: 6.5, match_score: 81, email: "ananya@example.com",
    rates: { reel: 6000, story: 1800, post: 3500 }, bio: "Lifestyle & fashion content. Curating the everyday aesthetic.",
    growthData: [{ month: "Jan", followers: 42000 }, { month: "Feb", followers: 45000 }, { month: "Mar", followers: 48000 }, { month: "Apr", followers: 50500 }, { month: "May", followers: 53000 }, { month: "Jun", followers: 55100 }]
  },
];

export const campaigns: Campaign[] = [
  {
    id: "c1", brandName: "Zara Bakehouse", brandIcon: undefined, title: "Food influencers for new cafe launch",
    description: "We're launching our new café in Bandra and looking for food micro-influencers to create authentic content.",
    budget: "₹15,000 - ₹30,000", niche: "Food", city: "Mumbai", applicants: 24, deadline: "Apr 30, 2026", status: "open"
  },
  {
    id: "c2", brandName: "GreenSip", brandIcon: undefined, title: "Health drink brand ambassador needed",
    description: "Promote our new organic matcha line through lifestyle content. Looking for wellness-focused creators.",
    budget: "₹10,000 - ₹20,000", niche: "Lifestyle", city: "Delhi", applicants: 18, deadline: "May 15, 2026", status: "open"
  },
  {
    id: "c3", brandName: "PixelWear", brandIcon: undefined, title: "Streetwear launch - Gen Z creators wanted",
    description: "Our new streetwear drop needs authentic Gen Z voices. Create reels showcasing the collection.",
    budget: "₹20,000 - ₹40,000", niche: "Fashion", city: "Bangalore", applicants: 31, deadline: "Apr 20, 2026", status: "open"
  },
];

export function calculateEScore(likes: number, comments: number, reach: number): number {
  return Math.round(((likes + 2 * comments) / reach) * 100);
}
