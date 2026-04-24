"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { FaDev, FaGithub, FaEnvelope } from "react-icons/fa";
import { SlOptionsVertical } from "react-icons/sl";
import { IoLogoWhatsapp } from "react-icons/io";
import { CgClose } from "react-icons/cg";
import { useRouter } from "next/navigation";
import SkillLevel from "../components/skillLevel";
import { IoSchool } from "react-icons/io5";
import { languageTexts } from "./languageTexts";
import PuffLoader from "react-spinners/PuffLoader";
import { useTheme } from "../context/ThemeContext";

const SCROLLBAR: Record<string, string> = {
  emerald: "#059669",
  rose: "#E11D48",
  blue: "#2563EB",
  yellow: "#C88904",
};

function computeClasses(colorMain: string) {
  let bgMain = "";
  let textMainColor = "";
  let textLinkColor = "";
  let hoverTextLinkColor = "";
  let borderColorImage = "";
  let decorationColor = "";

  switch (colorMain) {
    case "emerald":
      bgMain = "bg-emerald-600";
      textMainColor = "text-emerald-600";
      textLinkColor = "text-emerald-600";
      hoverTextLinkColor = "hover:text-emerald-400";
      borderColorImage = "border-emerald-600";
      decorationColor = "decoration-emerald-600";
      break;
    case "rose":
      bgMain = "bg-rose-600";
      textMainColor = "text-rose-600";
      textLinkColor = "text-rose-600";
      hoverTextLinkColor = "hover:text-rose-400";
      borderColorImage = "border-rose-600";
      decorationColor = "decoration-rose-600";
      break;
    case "blue":
      bgMain = "bg-blue-600";
      textMainColor = "text-blue-600";
      textLinkColor = "text-blue-600";
      hoverTextLinkColor = "hover:text-blue-400";
      borderColorImage = "border-blue-600";
      decorationColor = "decoration-blue-600";
      break;
    case "yellow":
      bgMain = "bg-yellow-600";
      textMainColor = "text-yellow-600";
      textLinkColor = "text-yellow-600";
      hoverTextLinkColor = "hover:text-yellow-400";
      borderColorImage = "border-yellow-600";
      decorationColor = "decoration-yellow-600";
      break;
  }

  return {
    dark: {
      bgMain,
      textMainColor,
      bgOpacityMain: "bg-opacity-10",
      textColorMain: "text-white",
      bgTextInfo: "bg-white",
      bgOpacityTextInfo: "bg-opacity-10",
      textOpacity: "text-opacity-100",
      hoverBgColor: "hover:bg-white",
      hoverBgOpacity: "hover:bg-opacity-10",
      textLinkColor,
      hoverTextLinkColor,
      borderColorImage,
      decorationColor,
    },
    light: {
      bgMain,
      textMainColor,
      bgOpacityMain: "bg-opacity-100",
      textColorMain: "text-black",
      bgTextInfo: "bg-black",
      bgOpacityTextInfo: "bg-opacity-10",
      textOpacity: "text-opacity-60",
      hoverBgColor: "hover:bg-black",
      hoverBgOpacity: "hover:bg-opacity-10",
      textLinkColor,
      hoverTextLinkColor,
      borderColorImage,
      decorationColor,
    },
  };
}

const LOADER_COLOR: Record<string, string> = {
  emerald: "#059669",
  rose: "#e11d48",
  blue: "#2563eb",
  yellow: "#eab308",
};

export default function HomePage() {
  const router = useRouter();
  const [imageLoaded, setImageLoaded] = useState(false);

  const { tone, colorMain, language } = useTheme();

  useEffect(() => {
    document.documentElement.style.setProperty("--scrollbar-color", SCROLLBAR[colorMain] ?? "#059669");
  }, [colorMain]);

  const texts = language === "eng" ? languageTexts.eng : languageTexts.spa;

  const classesTones = computeClasses(colorMain);
  const classes = tone === "dark" ? classesTones.dark : classesTones.light;

  // ── Interactions ─────────────────────────────────────────────────────────
  const [openSocial, setOpenSocial] = useState(false);
  const [selected, setSelected] = useState<string>("developer");

  const skills: { key: keyof typeof texts; level: number }[] = [
    { key: "skill_1", level: 4 },
    { key: "skill_2", level: 3 },
    { key: "skill_5", level: 5 },
    { key: "skill_4", level: 4 },
    { key: "skill_6", level: 5 },
    { key: "skill_7", level: 4 },
    { key: "skill_8", level: 3 },
  ];

  const linkCls = `${classes?.textLinkColor} ${classes?.hoverTextLinkColor} hover:cursor-pointer transition duration-150`;
  const paraCls = `${classes?.bgTextInfo} ${classes?.bgOpacityTextInfo} py-1 px-2 rounded-md`;

  // ── Render ────────────────────────────────────────────────────────────────
  return (
    <div className={`${classes?.textColorMain} flex flex-col justify-center items-center h-full pb-[6%]`}>

      {/* Tab bar */}
      <div className={`flex mt-6 md:mt-0 justify-start text-xs md:text-sm lg:text-base xl:text-lg 2xl:text-xl tracking-wide border-b-2 ${classes?.borderColorImage} w-[90%] md:w-[50%]`}>
        {(["developer", "studies", "skills"] as const).map((tab, i) => {
          const labels = { developer: "Desarrollador", studies: "Estudios", skills: "Habilidades" };
          const roundCls = i === 0 ? "rounded-tl-lg" : i === 2 ? "rounded-tr-lg" : "";
          return (
            <button
              key={tab}
              onClick={() => setSelected(tab)}
              className={`${selected === tab ? classes?.bgMain : `hover:bg-opacity-20 bg-white ${classes?.bgOpacityMain}`} transition duration-100 px-1 md:px-3 py-2 md:py-1 ${roundCls}`}
            >
              {labels[tab]}
            </button>
          );
        })}
      </div>

      {/* Main card */}
      <div className={`w-[90%] md:w-[50%] h-[57%] md:h-[65%] flex flex-col justify-start p-4 md:p-8 md:pt-6 relative bg-white ${classes?.bgOpacityMain} rounded-b-2xl rounded-tr-2xl shadow-2xl`}>

        {/* Header */}
        <div>
          <h2 className="uppercase flex flex-col md:flex-row items-start md:items-center text-base md:text-xs lg:text-sm xl:text-base 2xl:text-xl text-opacity-80">
            <span>
              {texts?.title_1}
              <span className="hidden md:inline">{" ("}</span>
            </span>
            <span className={`underline flex items-center ${classes?.decorationColor}`}>
              <span className="hidden md:inline">&nbsp;</span>
              {texts?.title_2}
              <span className="hidden md:inline">{" )"}</span>
              <FaDev
                className={`ml-2 md:ml-4 ${classes?.bgTextInfo} ${classes?.bgOpacityTextInfo} p-1 rounded ${classes?.textMainColor}`}
                size={24}
              />
            </span>
          </h2>
          <h1 className={`${classes?.textMainColor} font-semibold md:text-xs lg:text-xs xl:text-sm 2xl:text-base`}>
            Pablo Kampmann
          </h1>
        </div>

        {/* Developer tab */}
        {selected === "developer" && (
          <div className="w-full md:w-[70%] h-fit space-y-4 overflow-y-auto about-me-container md:text-xs lg:text-sm xl:text-base 2xl:text-lg mt-4">
            <p className={paraCls}>{texts?.text_1}</p>
            <p className={paraCls}>
              {texts?.text_2_part_1}{" "}
              <a onClick={() => router.push("/work")} className={linkCls}>{texts?.text_link_1}</a>
              {texts?.text_2_part_2}
            </p>
            <p className={paraCls}>
              {texts?.text_3_part_1}{" "}
              <a onClick={() => router.push("/tech")} className={linkCls}>{texts?.text_link_2}{" "}</a>
              {texts?.text_3_part_2}
            </p>
          </div>
        )}

        {/* Studies tab */}
        {selected === "studies" && (
          <div className="w-full md:w-[70%] h-fit space-y-4 overflow-y-auto about-me-container md:text-xs lg:text-sm xl:text-base 2xl:text-lg mt-4">
            <p className={paraCls}>
              {texts?.text_4_part_1}{" "}
              <a onClick={() => window.open("https://uap.edu.ar/", "_blank")} className={linkCls}>{texts?.text_link_4}</a>
              {texts?.text_4_part_2}
            </p>
            <h2 className={`flex items-center underline ${classes?.decorationColor} ml-1 md:text-xs lg:text-sm xl:text-base 2xl:text-xl`}>
              Titulos <IoSchool className="ml-2" />
            </h2>
            <p className={`${classes?.bgTextInfo} ${classes?.bgOpacityTextInfo} py-1 px-2 w-fit rounded-md`}>
              {texts?.degree_1}{" "}<span className={classes?.textMainColor}>95%</span>
            </p>
            <p className={`${classes?.bgTextInfo} ${classes?.bgOpacityTextInfo} py-1 px-2 w-fit rounded-md`}>
              {texts?.degree_2}{" "}<span className={classes?.textMainColor}>90%</span>
            </p>
          </div>
        )}

        {/* Skills tab */}
        {selected === "skills" && (
          <div className="w-full md:w-[70%] h-fit space-y-4 overflow-y-auto text-sm tracking-tight about-me-container md:text-xs md:tracking-normal lg:text-sm xl:text-base 2xl:text-lg mt-4">
            {skills.map(({ key, level }) => (
              <div key={key} className={`${classes?.bgTextInfo} ${classes?.bgOpacityTextInfo} py-1 px-2 rounded-lg flex justify-between items-center`}>
                <span>{texts?.[key]}</span>
                <SkillLevel level={level} bgColorMain={classes?.bgMain} />
              </div>
            ))}
          </div>
        )}

        {/* Avatar + social (social hidden on mobile) */}
        <div className="absolute -top-10 -right-4 md:-right-10">
          {!imageLoaded && (
            <div className={`rounded-full border-4 ${classes?.borderColorImage} shadow-2xl w-[120px] h-[120px] md:w-[200px] md:h-[200px] flex justify-center items-center`}>
              <PuffLoader color={LOADER_COLOR[colorMain] ?? "#059669"} size={100} speedMultiplier={2.5} />
            </div>
          )}
          <Image
            className={`rounded-full object-cover border-4 ${classes?.borderColorImage} shadow-2xl w-[120px] h-[120px] md:w-[200px] md:h-[200px] ${!imageLoaded ? "hidden" : ""}`}
            onLoad={() => setImageLoaded(true)}
            quality={85}
            width={400}
            height={400}
            priority={true}
            src="/images/profile/me-image.jpg"
            alt="me-image"
          />
          <div className="hidden md:block">
            {openSocial && (
              <div>
                <button
                  onClick={() => window.open("https://wa.me/+543413466408", "_blank")}
                  className={`absolute animate-move-whatsapp cursor-pointer ${classes?.hoverBgColor} ${classes?.hoverBgOpacity} p-2 rounded-full -left-12 top-[45%]`}
                >
                  <IoLogoWhatsapp size={28} className={`${classes?.textColorMain} ${classes?.textOpacity}`} />
                </button>
                <button
                  onClick={() => window.open("mailto:pablo7kamp@gmail.com")}
                  className={`absolute animate-move-email cursor-pointer ${classes?.hoverBgColor} ${classes?.hoverBgOpacity} p-2 rounded-full -left-8 top-[70%]`}
                >
                  <FaEnvelope size={24} className={`${classes?.textColorMain} ${classes?.textOpacity}`} />
                </button>
                <button
                  onClick={() => window.open("https://github.com/pablodKampmann", "_blank")}
                  className={`absolute animate-move-gitHub cursor-pointer ${classes?.hoverBgColor} ${classes?.hoverBgOpacity} p-2 rounded-full left-0 top-[90%]`}
                >
                  <FaGithub size={28} className={`${classes?.textColorMain} ${classes?.textOpacity}`} />
                </button>
              </div>
            )}
            <button
              onClick={() => setOpenSocial(!openSocial)}
              className={`absolute cursor-pointer transition duration-150 ${classes?.hoverBgColor} ${classes?.hoverBgOpacity} p-2 rounded-full top-[110%] right-[40%]`}
            >
              {openSocial ? (
                <CgClose size={20} className={`${classes?.textColorMain} ${classes?.textOpacity}`} />
              ) : (
                <SlOptionsVertical size={20} className={`${classes?.textColorMain} ${classes?.textOpacity} animate-[spin_5s_ease-in-out_infinite]`} />
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
