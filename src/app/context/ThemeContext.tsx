"use client";
import { createContext, useContext } from "react";

type ThemeContextType = {
  tone: string;
  colorMain: string;
  language: string;
};

export const ThemeContext = createContext<ThemeContextType>({
  tone: "dark",
  colorMain: "emerald",
  language: "spa",
});

export const useTheme = () => useContext(ThemeContext);
