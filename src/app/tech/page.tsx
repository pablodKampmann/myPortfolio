"use client";

import Image from "next/image";
import React, { useState, useEffect } from "react";
import { GrTechnology } from "react-icons/gr";
import { TbArrowWaveRightUp } from "react-icons/tb";
import { TbHandMove } from "react-icons/tb";
import HashLoader from "react-spinners/HashLoader";
import { useTheme } from "../context/ThemeContext";

import { LOADER_COLOR, getColorClasses } from "../lib/themeClasses";

function computeClasses(tone: string, colorMain: string) {
  const c = getColorClasses(colorMain);
  const textColorCategory = tone === "dark" ? c.text400 : c.text600;
  return {
    dark: {
      textColorClass: "text-white",
      borderImagesColor: "border-gray-900",
      hoverOpacityButtons: "hover:bg-opacity-10",
      hoverColorButtons: "hover:bg-white",
      textColorCategory,
      borderColorProjectsCont: c.border950,
      bgColorImages: "bg-white",
      bgOpacityImages: "bg-opacity-10",
      bgColorTitle: c.bg600,
      textColorArrow: c.text600,
      textColorTitleIcon: c.text700,
    },
    light: {
      textColorClass: "text-black",
      borderColorProjectsCont: "border-gray-400",
      borderImagesColor: "border-gray-400",
      hoverOpacityButtons: "hover:bg-opacity-20",
      hoverColorButtons: "hover:bg-gray-400",
      textColorCategory,
      bgColorImages: "bg-black",
      bgOpacityImages: "bg-opacity-10",
      bgColorTitle: c.bg600,
      textColorArrow: c.text600,
      textColorTitleIcon: c.text700,
    },
  };
}

export default function Tech() {
  const { tone, colorMain, language } = useTheme();
  const [option, setOption] = useState("frontend");

  const classesTones = computeClasses(tone, colorMain);
  const classes = tone === "dark" ? classesTones.dark : classesTones.light;

  const [iconsLoaded, setIconsLoaded] = useState<Record<string, boolean>>({});

  const languageTexts = {
    eng: {
      technologies: "Technologies",
      info: "These are the technologies I work with and have worked with. I'm not limited to them, but they're the ones I know well and use day to day.",
      option_1: "Frontend",
      option_2: "Languages",
      option_3: "Backend",
      option_4: "Tools",
      option_5: "Other",
    },
    spa: {
      technologies: "Tecnologías",
      info: "Estas son las tecnologías con las que trabajo y he trabajado. No me limito a ellas, pero son las que conozco y uso en el día a día.",
      option_1: "Frontend",
      option_2: "Lenguajes",
      option_3: "Backend",
      option_4: "Herramientas",
      option_5: "Otros",
    },
  };

  const texts = language === "eng" ? languageTexts.eng : languageTexts.spa;

  const [activeIcon, setActiveIcon] = useState<string | null>(null);
  useEffect(() => {
    if (!activeIcon) return;
    const id = setTimeout(() => setActiveIcon(null), 500);
    return () => clearTimeout(id);
  }, [activeIcon]);

  const tabs = [
    { key: "frontend", label: texts?.option_1 },
    { key: "languages", label: texts?.option_2 },
    { key: "backend", label: texts?.option_3 },
    { key: "tools", label: texts?.option_4 },
    { key: "other", label: texts?.option_5 },
  ];

  const iconSets: Record<string, { src: string; label: string }[]> = {
    frontend: [
      { src: "/icons/nextjs-icon.svg", label: "Next.js" },
      { src: "/icons/react-icon.svg", label: "React" },
      { src: "/icons/astro-icon.svg", label: "Astro" },
    ],
    languages: [
      { src: "/icons/html-icon.svg", label: "HTML5" },
      { src: "/icons/css-icon.svg", label: "CSS" },
      { src: "/icons/javascript-icon.svg", label: "JavaScript" },
      { src: "/icons/typescript-icon.svg", label: "TypeScript" },
      { src: "/icons/tailwind-icon.svg", label: "Tailwind" },
    ],
    backend: [
      { src: "/icons/nodejs-icon.svg", label: "NodeJs" },
      { src: "/icons/firebase-icon.svg", label: "Firebase" },
      { src: "/icons/mongodb-icon.svg", label: "MongoDB" },
      { src: "/icons/supabase-icon.svg", label: "Supabase" },
      { src: "/icons/mysql-icon.svg", label: "MySql" },
      { src: "/icons/microsoftsql-icon.svg", label: "SqlServer" },
    ],
    tools: [
      { src: "/icons/github-icon.svg", label: "GitHub" },
      { src: "/icons/vercel-icon.svg", label: "Vercel" },
    ],
    other: [
      { src: "/icons/c-icon.svg", label: "C#" },
      { src: "/icons/php-icon.svg", label: "PHP" },
      { src: "/icons/python-icon.svg", label: "Python" },
    ],
  };

  const widths: Record<string, string> = {
    frontend: "md:w-[560px]",
    languages: "md:w-[700px]",
    backend: "md:w-[840px]",
    tools: "md:w-[350px]",
    other: "md:w-[560px]",
  };

  // Desktop: full-size icons
  const renderIcons = (icons: { src: string; label: string }[]) => (
    <div className="flex flex-wrap md:flex-nowrap justify-center gap-4 sm:gap-5 md:gap-6 mt-4 sm:mt-6 items-center">
      {icons.map(({ src, label }) => {
        const tapped = activeIcon === src;
        return (
          <div key={src} className="flex flex-col group hover:cursor-help justify-center items-center" onTouchStart={() => setActiveIcon(src)}>
            <div className="relative w-14 h-14 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-[110px] lg:h-[110px]">
              {!iconsLoaded[src] && (
                <div className="absolute inset-0 flex justify-center items-center">
                  <HashLoader speedMultiplier={2.5} color={LOADER_COLOR[colorMain] ?? "#059669"} size={50} />
                </div>
              )}
              <Image
                className={`transition-transform duration-300 w-full h-full transform group-hover:scale-110 group-hover:-translate-y-2${tapped ? " scale-110 -translate-y-2" : ""} ${!iconsLoaded[src] ? "invisible" : ""}`}
                width={110} height={110} priority src={src} alt={src}
                onLoad={() => setIconsLoaded(prev => ({ ...prev, [src]: true }))}
              />
            </div>
            <p className="text-xs sm:text-sm tracking-widest mt-1 sm:mt-2.5 transition duration-150 font-[600] opacity-100">
              {label}
            </p>
          </div>
        );
      })}
    </div>
  );

  // Mobile: compact icons
  const renderIconsCompact = (icons: { src: string; label: string }[]) => (
    <div className="flex flex-wrap justify-center gap-4 sm:gap-6 items-center">
      {icons.map(({ src, label }) => {
        const tapped = activeIcon === src;
        return (
          <div key={src} className="flex flex-col justify-center items-center" onTouchStart={() => setActiveIcon(src)}>
            <div className="relative w-12 h-12 sm:w-16 sm:h-16">
              {!iconsLoaded[src] && (
                <div className="absolute inset-0 flex justify-center items-center">
                  <HashLoader speedMultiplier={2.5} color={LOADER_COLOR[colorMain] ?? "#059669"} size={28} />
                </div>
              )}
              <Image
                className={`transition-transform duration-300 w-full h-full transform${tapped ? " scale-110 -translate-y-2" : ""} ${!iconsLoaded[src] ? "invisible" : ""}`}
                width={64} height={64} priority src={src} alt={label}
                onLoad={() => setIconsLoaded(prev => ({ ...prev, [src]: true }))}
              />
            </div>
            <p className="text-xs tracking-widest mt-1 font-[600]">{label}</p>
          </div>
        );
      })}
    </div>
  );

  return (
    <div className={`${classes?.textColorClass} flex flex-col items-center h-full overflow-y-auto md:overflow-visible md:justify-center pt-16 md:pt-0 pb-6 md:pb-[6%] px-3`}>

      {/* Title — shared */}
      <div className={`${classes?.bgColorTitle} font-normal md:mt-0 mt-9 border-r-4 border-b-4 flex ${classes?.borderColorProjectsCont} justify-center px-2 py-1.5 pb-2 rounded-2xl shadow-2xl mb-4 md:mb-8 items-center text-left text-2xl sm:text-3xl lg:text-4xl`}>
        {texts?.technologies}{" "}
        <GrTechnology className={`ml-2 sm:ml-4 ${tone === "light" && "bg-white"} bg-opacity-90 p-1 rounded-full`} />
      </div>

      {/* ═══ MOBILE LAYOUT ══════════════════════════════════════════════ */}
      <div className="md:hidden w-full pt-2 pb-8 md:mb-0 mb-8 space-y-6">
        <p className="text-sm text-center leading-relaxed w-[95%] mx-auto">{texts?.info}</p>
        {tabs.map(({ key, label }, i) => (
          <div
            key={key}
            className="animate-[fadeSlideUp_0.2s_ease_forwards] opacity-0"
            style={{ animationDelay: `${i * 0.09}s` }}
          >
            <div className="flex items-center gap-2 mb-2">
              <div className={`w-1 h-5 rounded-full ${classes?.bgColorTitle}`} />
              <h3 className={`text-sm font-semibold tracking-wide ${classes?.textColorCategory}`}>{label}</h3>
            </div>
            <div className={`${classes?.bgColorImages} ${classes?.bgOpacityImages} rounded-lg px-3 py-4`}>
              {renderIconsCompact(iconSets[key] ?? [])}
            </div>
          </div>
        ))}
      </div>

      {/* ═══ DESKTOP LAYOUT ════════════════════════════════════════════ */}
      <div className="hidden md:flex flex-col items-center w-full">
        <p className="text-xs sm:text-sm lg:text-lg text-center mt-2 sm:mt-4 w-[92%] sm:w-[75%] lg:w-[50%] leading-relaxed">
          {texts?.info}
        </p>

        <TbArrowWaveRightUp
          size={40}
          className={`${classes?.textColorArrow} opacity-20 mt-3 sm:mt-4 mb-4 sm:mb-6 rotate-90`}
        />

        <div className="flex justify-center select-none gap-2 sm:gap-4 items-center flex-wrap">
          {tabs.map(({ key, label }) => (
            <button
              key={key}
              onClick={() => setOption(key)}
              className={`${option === key ? classes?.bgColorTitle : `${classes?.hoverColorButtons} ${classes?.hoverOpacityButtons}`} transition duration-200 rounded-md text-sm sm:text-base lg:text-lg px-2 sm:px-3 py-1 cursor-pointer`}
            >
              {label}
            </button>
          ))}
        </div>

        <div className={[
          widths[option] ?? "md:w-[560px]",
          classes?.bgColorImages,
          classes?.bgOpacityImages,
          "w-[92%] select-none transition-all ease-in-out duration-300 flex flex-col relative rounded-lg shadow-2xl px-4 sm:px-6 py-4 sm:py-6 mt-3 sm:mt-4",
        ].join(" ")}>
          <TbHandMove size={20} className="absolute opacity-70 top-1.5 right-1.5" />
          {renderIcons(iconSets[option] ?? [])}
        </div>
      </div>

    </div>
  );
}
