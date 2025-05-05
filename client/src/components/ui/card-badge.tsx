import { cn } from "@/lib/utils";

interface CardBadgeProps {
  variant?: "default" | "annadana" | "gaushala" | "temple";
  children: React.ReactNode;
  className?: string;
}

export function CardBadge({
  variant = "default",
  children,
  className,
}: CardBadgeProps) {
  return (
    <div
      className={cn(
        "inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold",
        variant === "default" && "bg-primary text-primary-foreground",
        variant === "annadana" && "bg-[hsl(var(--spiritual-green))] text-white",
        variant === "gaushala" && "bg-[hsl(var(--deep-blue))] text-white",
        variant === "temple" && "bg-[hsl(var(--gold))] text-black",
        className
      )}
    >
      {children}
    </div>
  );
}
