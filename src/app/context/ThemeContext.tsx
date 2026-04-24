"use client";
import { createContext, useContext } from "react";

type ThemeContextType = {
  tone: string;
  colorMain: string;
  language: string;
  handleToneChange: (tone: string) => void;
  handleColorChange: (color: string) => void;
  handleLanguageChange: (language: string) => void;
};

export const ThemeContext = createContext<ThemeContextType>({
  tone: "dark",
  colorMain: "emerald",
  language: "spa",
  handleToneChange: () => {},
  handleColorChange: () => {},
  handleLanguageChange: () => {},
});

export const useTheme = () => useContext(ThemeContext);
