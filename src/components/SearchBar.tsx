import { Search } from "lucide-react";

interface SearchBarProps {
  placeholder: string;
  value: string;
  onChange: (value: string) => void;
}

export function SearchBar({ placeholder, value, onChange }: SearchBarProps) {
  return (
    <div className="flex items-center gap-4 px-4 md:px-0">
      <Search className="w-6 h-6 md:w-8 md:h-8 text-foreground flex-shrink-0" />
      <input
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full bg-transparent border-none outline-none text-base md:text-2xl font-light text-foreground placeholder:text-muted-foreground caret-primary focus:border-b focus:border-muted pb-2"
      />
    </div>
  );
}
