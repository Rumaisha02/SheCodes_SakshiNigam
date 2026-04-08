import { useState } from "react";
import { Search, Sparkles } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

interface AISearchBarProps {
  onSearch?: (query: string) => void;
  placeholder?: string;
}

const AISearchBar = ({ onSearch, placeholder = "Find food bloggers in Pune with 5k+ followers..." }: AISearchBarProps) => {
  const [query, setQuery] = useState("");
  const [isSearching, setIsSearching] = useState(false);

  const handleSearch = () => {
    if (!query.trim()) return;
    setIsSearching(true);
    setTimeout(() => {
      setIsSearching(false);
      onSearch?.(query);
    }, 2000);
  };

  return (
    <div className="relative w-full max-w-2xl mx-auto">
      <div className="relative flex items-center gap-2 rounded-2xl border border-border bg-card p-2 shadow-lg">
        <div className="flex items-center gap-2 flex-1 px-3">
          <Sparkles className="h-5 w-5 text-primary shrink-0" />
          <Input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSearch()}
            placeholder={placeholder}
            className="border-0 bg-transparent shadow-none focus-visible:ring-0 text-base placeholder:text-muted-foreground"
          />
        </div>
        <Button onClick={handleSearch} disabled={isSearching}
          className="gradient-bg text-primary-foreground rounded-xl px-6 hover:opacity-90 transition-opacity">
          {isSearching ? (
            <span className="flex items-center gap-2">
              <span className="animate-spin h-4 w-4 border-2 border-primary-foreground border-t-transparent rounded-full" />
              AI Thinking...
            </span>
          ) : (
            <span className="flex items-center gap-2"><Search className="h-4 w-4" />Search</span>
          )}
        </Button>
      </div>
    </div>
  );
};

export default AISearchBar;
