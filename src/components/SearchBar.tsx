import { Search } from "lucide-react";
import { useRef, useState } from "react";

interface SearchBarProps {
  placeholder: string;
  value: string;
  onChange: (value: string) => void;
}

export function SearchBar({ placeholder, value, onChange }: SearchBarProps) {
  const [focused, setFocused] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <div
      className="flex items-center gap-4 px-4 md:px-0 cursor-text animate-fade-in"
      onClick={() => inputRef.current?.focus()}
    >
      <Search className={`w-6 h-6 md:w-8 md:h-8 flex-shrink-0 transition-colors duration-300 ${focused ? "text-primary" : "text-foreground"}`} />
      <div className="relative w-full">
        <input
          ref={inputRef}
          type="text"
          placeholder={placeholder}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          className="w-full bg-transparent border-none outline-none text-base md:text-2xl font-light text-foreground placeholder:text-muted-foreground caret-primary pb-2 transition-all duration-300"
        />
        <div className={`absolute bottom-0 left-0 h-[1px] bg-muted transition-all duration-500 ease-out ${focused ? "w-full opacity-100" : "w-0 opacity-0"}`} />
      </div>
    </div>
  );
}
