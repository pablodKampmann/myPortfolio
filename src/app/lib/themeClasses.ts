export const LOADER_COLOR: Record<string, string> = {
  emerald: "#059669",
  rose: "#e11d48",
  blue: "#2563eb",
  yellow: "#eab308",
};

export const SCROLLBAR_COLOR: Record<string, string> = {
  emerald: "#059669",
  rose: "#e11d48",
  blue: "#2563eb",
  yellow: "#eab308",
};

export type ColorClasses = {
  bg500: string;
  bg600: string;
  text400: string;
  text500: string;
  text600: string;
  text700: string;
  text800: string;
  border500: string;
  border600: string;
  border950: string;
  decoration600: string;
  hoverBg500: string;
  hoverBg600: string;
  hoverText400: string;
};

const COLOR_CLASSES: Record<string, ColorClasses> = {
  emerald: {
    bg500: "bg-emerald-500",
    bg600: "bg-emerald-600",
    text400: "text-emerald-400",
    text500: "text-emerald-500",
    text600: "text-emerald-600",
    text700: "text-emerald-700",
    text800: "text-emerald-800",
    border500: "border-emerald-500",
    border600: "border-emerald-600",
    border950: "border-emerald-950",
    decoration600: "decoration-emerald-600",
    hoverBg500: "hover:bg-emerald-500",
    hoverBg600: "hover:bg-emerald-600",
    hoverText400: "hover:text-emerald-400",
  },
  rose: {
    bg500: "bg-rose-500",
    bg600: "bg-rose-600",
    text400: "text-rose-400",
    text500: "text-rose-500",
    text600: "text-rose-600",
    text700: "text-rose-700",
    text800: "text-rose-800",
    border500: "border-rose-500",
    border600: "border-rose-600",
    border950: "border-rose-950",
    decoration600: "decoration-rose-600",
    hoverBg500: "hover:bg-rose-500",
    hoverBg600: "hover:bg-rose-600",
    hoverText400: "hover:text-rose-400",
  },
  blue: {
    bg500: "bg-blue-500",
    bg600: "bg-blue-600",
    text400: "text-blue-400",
    text500: "text-blue-500",
    text600: "text-blue-600",
    text700: "text-blue-700",
    text800: "text-blue-800",
    border500: "border-blue-500",
    border600: "border-blue-600",
    border950: "border-blue-950",
    decoration600: "decoration-blue-600",
    hoverBg500: "hover:bg-blue-500",
    hoverBg600: "hover:bg-blue-600",
    hoverText400: "hover:text-blue-400",
  },
  yellow: {
    bg500: "bg-yellow-500",
    bg600: "bg-yellow-600",
    text400: "text-yellow-400",
    text500: "text-yellow-500",
    text600: "text-yellow-600",
    text700: "text-yellow-700",
    text800: "text-yellow-800",
    border500: "border-yellow-500",
    border600: "border-yellow-600",
    border950: "border-yellow-950",
    decoration600: "decoration-yellow-600",
    hoverBg500: "hover:bg-yellow-500",
    hoverBg600: "hover:bg-yellow-600",
    hoverText400: "hover:text-yellow-400",
  },
};

export function getColorClasses(colorMain: string): ColorClasses {
  return COLOR_CLASSES[colorMain] ?? COLOR_CLASSES.emerald;
}
