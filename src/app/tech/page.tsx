"use client";

import Image from "next/image";
import React, { useState, useEffect } from "react";
import { GrTechnology } from "react-icons/gr";
import { TbArrowWaveRightUp } from "react-icons/tb";
import { TbHandMove } from "react-icons/tb";

export default function Tech() {
  const [option, setOption] = useState("languages");
  const [category, setCategory] = useState("primary");

  //LISTENER DEL LOCALSTORAGE
  useEffect(() => {
    const handleItemChange = () => {
      const storedLanguage = localStorage.getItem("language");
      if (storedLanguage) setLanguage(storedLanguage);
      const storedTone = localStorage.getItem("tone");
      if (storedTone) setTone(storedTone);
      const storedColorMain = localStorage.getItem("colorMain");
      if (storedColorMain) setColorMain(storedColorMain);
    };
    window.addEventListener("storage", handleItemChange);
    return () => window.removeEventListener("storage", handleItemChange);
  }, []);

  //LANGUAGE
  const [language, setLanguage] = useState<string>("spa");
  useEffect(() => {
    const v = localStorage.getItem("language");
    setLanguage(v ?? "spa");
  }, []);

  const languageTexts = {
    eng: {
      technologies: "Technologies",
      info: "The following are some of the technologies that I have experience with and that I often use in my regular work. I am familiar with them and use them regularly to carry out tasks and projects related to web development and data management:",
      option_1: "Languages & Tools",
      option_2: "Frontend",
      option_3: "Backend",
      category_1: "Primary",
      category_2: "Secondary",
    },
    spa: {
      technologies: "Tecnologías",
      info: "Las siguientes son algunas de las tecnologías con las que tengo experiencia y que suelo utilizar en mi trabajo habitual. Estoy familiarizado con ellas y las utilizo regularmente para llevar a cabo tareas y proyectos relacionados con el desarrollo web y la gestión de datos:",
      option_1: "Lenguajes & Herramientas",
      option_2: "Frontend",
      option_3: "Backend",
      category_1: "Primarios",
      category_2: "Secundarios",
    },
  };

  let texts;
  if (language === "eng") texts = languageTexts.eng;
  else texts = languageTexts.spa;

  //TONE
  const [tone, setTone] = useState<string>("dark");
  const [classesTones, setClassesTones] = useState<any>(null);
  const [colorMain, setColorMain] = useState<string>("emerald");

  useEffect(() => {
    const v = localStorage.getItem("tone");
    setTone(v ?? "dark");
  }, []);

  useEffect(() => {
    const updateClassesTones = () => {
      let bgColorTitle = "";
      let textColorArrow = "";
      let textColorCategory = "";
      let textColorTitleIcon = "";

      switch (colorMain) {
        case "emerald":
          bgColorTitle = "bg-emerald-600";
          textColorArrow = "text-emerald-600";
          textColorCategory = tone === "dark" ? "text-emerald-400" : "text-emerald-600";
          textColorTitleIcon = "text-emerald-700";
          break;
        case "rose":
          bgColorTitle = "bg-rose-600";
          textColorArrow = "text-rose-600";
          textColorCategory = tone === "dark" ? "text-rose-400" : "text-rose-600";
          textColorTitleIcon = "text-rose-700";
          break;
        case "blue":
          bgColorTitle = "bg-blue-600";
          textColorArrow = "text-blue-600";
          textColorCategory = tone === "dark" ? "text-blue-400" : "text-blue-600";
          textColorTitleIcon = "text-blue-700";
          break;
        case "yellow":
          bgColorTitle = "bg-yellow-600";
          textColorArrow = "text-yellow-600";
          textColorCategory = tone === "dark" ? "text-yellow-400" : "text-yellow-600";
          textColorTitleIcon = "text-yellow-700";
          break;
        default:
          break;
      }

      setClassesTones({
        dark: {
          textColorClass: "text-white",
          borderImagesColor: "border-gray-900",
          hoverOpacityButtons: "hover:bg-opacity-10",
          hoverColorButtons: "hover:bg-white",
          textColorCategory,
          borderColorProjectsCont: "border-emerald-950",
          bgColorImages: "bg-blue-950",
          bgOpacityImages: "bg-opacity-20",
          bgColorTitle,
          textColorArrow,
          textColorTitleIcon,
        },
        light: {
          textColorClass: "text-black",
          borderColorProjectsCont: "border-gray-400",
          borderImagesColor: "border-gray-400",
          hoverOpacityButtons: "hover:bg-opacity-20",
          hoverColorButtons: "hover:bg-gray-400",
          textColorCategory,
          bgColorImages: "bg-white",
          bgOpacityImages: "bg-opacity-90",
          bgColorTitle,
          textColorArrow,
          textColorTitleIcon,
        },
      });
    };
    updateClassesTones();
  }, [colorMain, tone]);

  let classes: any;
  if (tone === "dark") classes = classesTones?.dark;
  else classes = classesTones?.light;

  //COLOR MAIN
  useEffect(() => {
    const v = localStorage.getItem("colorMain");
    setColorMain(v ?? "emerald");
  }, []);

  // Mobile tap state — triggers the same animation as desktop hover
  const [activeIcon, setActiveIcon] = useState<string | null>(null);
  useEffect(() => {
    if (!activeIcon) return;
    const id = setTimeout(() => setActiveIcon(null), 500);
    return () => clearTimeout(id);
  }, [activeIcon]);

  const rowCls = "flex flex-wrap md:flex-nowrap justify-center gap-4 sm:gap-5 md:gap-6 mt-4 sm:mt-6 items-center";

  const renderIcons = (icons: { src: string; label: string }[]) => (
    <div className={rowCls}>
      {icons.map(({ src, label }) => {
        const tapped = activeIcon === src;
        return (
          <div
            key={src}
            className="flex flex-col group hover:cursor-help justify-center items-center"
            onTouchStart={() => setActiveIcon(src)}
          >
            <Image
              className={`transition-transform duration-300 w-14 h-14 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-[110px] lg:h-[110px] transform group-hover:scale-110 group-hover:-translate-y-2${tapped ? " scale-110 -translate-y-2" : ""}`}
              width={110} height={110} priority src={src} alt={src}
            />
            <p className={`text-xs sm:text-sm tracking-widest mt-1 sm:mt-1.5 transition duration-150 font-[600] group-hover:opacity-100${tapped ? " opacity-100" : " opacity-0"}`}>
              {label}
            </p>
          </div>
        );
      })}
    </div>
  );

  return (
    <div className={`${classes?.textColorClass} flex flex-col justify-center items-center h-full pb-[6%] px-3`}>

      {/* Title */}
      <div
        className={`${classes?.bgColorTitle} font-normal border-r-4 border-b-4 flex ${classes?.borderColorProjectsCont} justify-center px-2 py-1.5 pb-2 rounded-2xl shadow-2xl mb-4 md:mb-8 items-center text-left text-2xl sm:text-3xl lg:text-4xl`}
      >
        {texts?.technologies}{" "}
        <GrTechnology className={`ml-2 sm:ml-4 ${tone === "light" && "bg-white"} bg-opacity-90 p-1 rounded-full`} />
      </div>

      {/* Description */}
      <p className="text-xs sm:text-sm lg:text-base text-center mt-2 sm:mt-4 w-[92%] sm:w-[75%] lg:w-[50%] leading-relaxed">
        {texts?.info}
      </p>

      {/* Arrow */}
      <TbArrowWaveRightUp
        size={40}
        className={`${classes?.textColorArrow} opacity-20 mt-3 sm:mt-4 mb-4 sm:mb-6 rotate-90`}
      />

      {/* Option tabs */}
      <div className="flex justify-center select-none gap-2 sm:gap-4 items-center">
        <button
          onClick={() => setOption("languages")}
          className={`${option === "languages" ? classes?.bgColorTitle : `${classes?.hoverColorButtons} ${classes?.hoverOpacityButtons}`} transition duration-200 rounded-md text-sm sm:text-base lg:text-lg px-2 sm:px-3 py-1 cursor-pointer`}
        >
          {texts?.option_1}
        </button>
        <button
          onClick={() => setOption("frontend")}
          className={`${option === "frontend" ? classes?.bgColorTitle : `${classes?.hoverColorButtons} ${classes?.hoverOpacityButtons}`} transition duration-200 rounded-md text-sm sm:text-base lg:text-lg px-2 sm:px-3 py-1 cursor-pointer`}
        >
          {texts?.option_2}
        </button>
        <button
          onClick={() => setOption("backend")}
          className={`${option === "backend" ? classes?.bgColorTitle : `${classes?.hoverColorButtons} ${classes?.hoverOpacityButtons}`} transition duration-200 rounded-md text-sm sm:text-base lg:text-lg px-2 sm:px-3 py-1 cursor-pointer`}
        >
          {texts?.option_3}
        </button>
      </div>

      {/* Icons container */}
      <div
        className={[
          option === "languages" && category !== "secondary" ? "md:w-[840px]" : "",
          option === "languages" && category === "secondary" ? "md:w-[450px]" : "",
          option === "frontend" ? "md:w-[450px]" : "",
          option === "backend" ? "md:w-[840px]" : "",
          classes?.bgColorImages,
          classes?.bgOpacityImages,
          "w-[92%] select-none transition-all ease-in-out duration-300 flex flex-col relative rounded-lg shadow-2xl px-4 sm:px-6 py-4 sm:py-6 mt-3 sm:mt-4",
        ].join(" ")}
      >
        <TbHandMove size={20} className="absolute opacity-70 top-1.5 right-1.5" />

        {option === "languages" && (
          <div>
            {/* Primary / Secondary tabs */}
            <div className="flex gap-1.5 items-center text-xs sm:text-sm mb-1">
              <button
                onClick={() => setCategory("primary")}
                className={`${category === "primary" ? `${classes?.textColorCategory} underline` : classes?.textColorClass} cursor-pointer`}
              >
                {texts?.category_1}
              </button>
              /
              <button
                onClick={() => setCategory("secondary")}
                className={`${category === "secondary" ? `${classes?.textColorCategory} underline` : classes?.textColorClass} cursor-pointer`}
              >
                {texts?.category_2}
              </button>
            </div>

            {category === "primary" && renderIcons([
              { src: "tailwind-icon.svg",   label: "Tailwind"   },
              { src: "html-icon.svg",        label: "HTML5"      },
              { src: "typescript-icon.svg",  label: "TypeScript" },
              { src: "css-icon.svg",         label: "CSS"        },
              { src: "javascript-icon.svg",  label: "JavaScript" },
              { src: "github-icon.svg",      label: "GitHub"     },
            ])}

            {category === "secondary" && renderIcons([
              { src: "c-icon.svg",      label: "C#"     },
              { src: "php-icon.svg",    label: "Php"    },
              { src: "python-icon.svg", label: "Python" },
            ])}
          </div>
        )}

        {option === "frontend" && renderIcons([
          { src: "nextjs-icon.svg", label: "Next Js" },
          { src: "react-icon.svg",  label: "React"   },
          { src: "astro-icon.svg",  label: "Astro"   },
        ])}

        {option === "backend" && renderIcons([
          { src: "nodejs-icon.svg",       label: "NodeJs"    },
          { src: "firebase-icon.svg",     label: "Firebase"  },
          { src: "mongodb-icon.svg",      label: "MongoDB"   },
          { src: "supabase-icon.svg",     label: "Supabase"  },
          { src: "mysql-icon.svg",        label: "MySql"     },
          { src: "microsoftsql-icon.svg", label: "SqlServer" },
        ])}
      </div>
    </div>
  );
}
