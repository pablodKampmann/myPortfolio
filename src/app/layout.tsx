"use client";

import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "./components/NavBar/navBar";
import LanguageOptions from "./components/languageOptions";
import React, { useState, useEffect } from "react";
import ToneMode from "./components/toneMode";
import Loading from "./components/loading";
import { useRouter } from "next/navigation";
import { ThemeContext } from "./context/ThemeContext";

const inter = Inter({ subsets: ["latin"], weight: ["400"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  //LANGUAGE
  const [language, setLanguage] = useState<string>("spa");

  const handleLanguageChange = (newLanguage: string) => {
    setLanguage(newLanguage);
    localStorage.setItem("language", newLanguage);
    window.dispatchEvent(new Event("storage"));
  };

  //TONE
  const [tone, setTone] = useState<string>("dark");
  const [classesTones, setClassesTones] = useState<any>(null);
  const [colorMain, setColorMain] = useState<string>("emerald");

  const handleToneChange = (newTone: string) => {
    setTone(newTone);
    localStorage.setItem("tone", newTone);
    window.dispatchEvent(new Event("storage"));
  };

  useEffect(() => {
    const updateClassesTones = () => {
      let bgLinesColor = "";
      switch (colorMain) {
        case "emerald":
          bgLinesColor = tone === "dark" ? "bg-emerald-600" : "bg-emerald-500";
          break;
        case "rose":
          bgLinesColor = tone === "dark" ? "bg-rose-600" : "bg-rose-500";
          break;
        case "blue":
          bgLinesColor = tone === "dark" ? "bg-blue-600" : "bg-blue-500";
          break;
        case "yellow":
          bgLinesColor = tone === "dark" ? "bg-yellow-600" : "bg-yellow-500";
          break;
        default:
          break;
      }

      setClassesTones({
        dark: {
          bgMainColor: "bg-blue-950",
          bgMainOpacity: "bg-opacity-20",
          bgLinesColor: bgLinesColor,
        },
        light: {
          bgMainColor: "bg-zinc-100",
          bgMainOpacity: "bg-opacity-90",
          bgLinesColor: bgLinesColor,
        },
      });
    };

    updateClassesTones();
  }, [colorMain, tone]);

  let classes;
  if (tone === "dark") {
    classes = classesTones?.dark;
  } else if (tone === "light") {
    classes = classesTones?.light;
  }

  const handleColorMainChange = (newColor: string) => {
    setColorMain(newColor);
    localStorage.setItem("colorMain", newColor);
    window.dispatchEvent(new Event("storage"));
  };

  //LOADING
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const storedLanguage = localStorage.getItem("language");
    const storedTone = localStorage.getItem("tone");
    const storedColor = localStorage.getItem("colorMain");
    if (storedLanguage) setLanguage(storedLanguage);
    if (storedTone) setTone(storedTone);
    if (storedColor) setColorMain(storedColor);
    setTimeout(() => setReady(true), 1000);
  }, []);

  useEffect(() => {
    const setVh = () => {
      document.documentElement.style.setProperty("--real-vh", `${window.innerHeight}px`);
    };
    setVh();
    window.addEventListener("resize", setVh);
    return () => window.removeEventListener("resize", setVh);
  }, []);

  const router = useRouter();

  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="absolute w-full">{!ready && <Loading />}</div>
        <div className={`${ready ? "opacity-100" : "opacity-0"} overflow-hidden`} style={{ height: "var(--real-vh, 100svh)" }}>
          <div
            className={`overflow-hidden relative ${classes?.bgMainColor} transition duration-200 ${classes?.bgMainOpacity}`}
            style={{ height: "var(--real-vh, 100svh)" }}
          >
            <div
              className={`absolute md:opacity-100 lg:opacity-100 xl:opacity-100 opacity-0 left-9 bottom-[16%] rounded-full ${classes?.bgLinesColor} h-36 w-1 z-10`}
            ></div>
            <div
              className={`absolute md:opacity-100 lg:opacity-100 xl:opacity-100 opacity-0 left-9 bottom-[40%] rounded-full ${classes?.bgLinesColor} h-4 w-1 z-10`}
            ></div>
            <div
              className={`absolute md:opacity-100 lg:opacity-100 xl:opacity-100 opacity-0 left-9 bottom-[48%] rounded-full ${classes?.bgLinesColor} h-16 w-1 z-10`}
            ></div>
            <div
              className={`absolute md:opacity-100 lg:opacity-100 xl:opacity-100 opacity-0 right-9 bottom-[42%] rounded-full ${classes?.bgLinesColor} h-16 w-1 z-10`}
            ></div>
            <button
              onClick={() => router.push("/")}
              className={`absolute md:opacity-100 lg:opacity-100 xl:opacity-100 opacity-0 -right-8 hover:underline transition duration-150 cursor-pointer bottom-[64%] font-semibold text-${colorMain}-500 transform rotate-90 z-10`}
            >
              @pablokampmann
            </button>
            <div
              className={`absolute md:opacity-100 lg:opacity-100 right-9 xl:opacity-100 opacity-0 bottom-[80%] rounded-full ${classes?.bgLinesColor} h-8 w-1 z-10`}
            ></div>
            <ThemeContext.Provider value={{ tone, colorMain, language, handleToneChange, handleColorChange: handleColorMainChange, handleLanguageChange }}>
              <NavBar />
              <ToneMode />
              <LanguageOptions />
              {children}
            </ThemeContext.Provider>
          </div>
        </div>
      </body>
    </html>
  );
}
