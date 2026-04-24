"use client";

import NavBar from "./components/NavBar/navBar";
import LanguageOptions from "./components/languageOptions";
import { useState, useEffect } from "react";
import ToneMode from "./components/toneMode";
import Loading from "./components/loading";
import { useRouter } from "next/navigation";
import { ThemeContext } from "./context/ThemeContext";
import { getColorClasses } from "./lib/themeClasses";

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  //LANGUAGE
  const [language, setLanguage] = useState<string>("spa");

  const handleLanguageChange = (newLanguage: string) => {
    setLanguage(newLanguage);
    localStorage.setItem("language", newLanguage);
    window.dispatchEvent(new Event("storage"));
  };

  //TONE
  const [tone, setTone] = useState<string>("dark");
  const [colorMain, setColorMain] = useState<string>("emerald");

  const handleToneChange = (newTone: string) => {
    setTone(newTone);
    localStorage.setItem("tone", newTone);
    window.dispatchEvent(new Event("storage"));
  };

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

  const c = getColorClasses(colorMain);
  const bgLinesColor = tone === "dark" ? c.bg600 : c.bg500;
  const bgMainColor = tone === "dark" ? "bg-blue-950" : "bg-zinc-100";
  const bgMainOpacity = tone === "dark" ? "bg-opacity-20" : "bg-opacity-90";

  return (
    <>
      <div className="absolute w-full">{!ready && <Loading />}</div>
      <div className={`${ready ? "opacity-100" : "opacity-0"} overflow-hidden`} style={{ height: "var(--real-vh, 100svh)" }}>
        <div
          className={`overflow-hidden relative ${bgMainColor} transition duration-200 ${bgMainOpacity}`}
          style={{ height: "var(--real-vh, 100svh)" }}
        >
          <div className={`absolute md:opacity-100 lg:opacity-100 xl:opacity-100 opacity-0 left-9 bottom-[16%] rounded-full ${bgLinesColor} h-36 w-1 z-10`} />
          <div className={`absolute md:opacity-100 lg:opacity-100 xl:opacity-100 opacity-0 left-9 bottom-[40%] rounded-full ${bgLinesColor} h-4 w-1 z-10`} />
          <div className={`absolute md:opacity-100 lg:opacity-100 xl:opacity-100 opacity-0 left-9 bottom-[48%] rounded-full ${bgLinesColor} h-16 w-1 z-10`} />
          <div className={`absolute md:opacity-100 lg:opacity-100 xl:opacity-100 opacity-0 right-9 bottom-[42%] rounded-full ${bgLinesColor} h-16 w-1 z-10`} />
          <button
            onClick={() => router.push("/")}
            className={`absolute md:opacity-100 lg:opacity-100 xl:opacity-100 opacity-0 -right-8 hover:underline transition duration-150 cursor-pointer bottom-[64%] font-semibold ${c.text500} transform rotate-90 z-10`}
          >
            @pablokampmann
          </button>
          <div className={`absolute md:opacity-100 lg:opacity-100 right-9 xl:opacity-100 opacity-0 bottom-[80%] rounded-full ${bgLinesColor} h-8 w-1 z-10`} />
          <ThemeContext.Provider value={{ tone, colorMain, language, handleToneChange, handleColorChange: handleColorMainChange, handleLanguageChange }}>
            <NavBar />
            <ToneMode />
            <LanguageOptions />
            {children}
          </ThemeContext.Provider>
        </div>
      </div>
    </>
  );
}
