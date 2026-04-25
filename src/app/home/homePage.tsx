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

import { LOADER_COLOR, SCROLLBAR_COLOR, getColorClasses } from "../lib/themeClasses";

function computeClasses(colorMain: string) {
  const c = getColorClasses(colorMain);
  return {
    dark: {
      bgMain: c.bg600,
      textMainColor: c.text600,
      bgOpacityMain: "bg-opacity-10",
      textColorMain: "text-white",
      bgTextInfo: "bg-white",
      bgOpacityTextInfo: "bg-opacity-10",
      textOpacity: "text-opacity-100",
      hoverBgColor: "hover:bg-white",
      hoverBgOpacity: "hover:bg-opacity-10",
      textLinkColor: c.text600,
      hoverTextLinkColor: c.hoverText400,
      borderColorImage: c.border600,
      decorationColor: c.decoration600,
    },
    light: {
      bgMain: c.bg600,
      textMainColor: c.text600,
      bgOpacityMain: "bg-opacity-100",
      textColorMain: "text-black",
      bgTextInfo: "bg-black",
      bgOpacityTextInfo: "bg-opacity-10",
      textOpacity: "text-opacity-60",
      hoverBgColor: "hover:bg-black",
      hoverBgOpacity: "hover:bg-opacity-10",
      textLinkColor: c.text600,
      hoverTextLinkColor: c.hoverText400,
      borderColorImage: c.border600,
      decorationColor: c.decoration600,
    },
  };
}

export default function HomePage() {
  const router = useRouter();
  const [imageLoaded, setImageLoaded] = useState(false);

  const { tone, colorMain, language } = useTheme();
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [formStatus, setFormStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  const handleSubmit = async () => {
    setFormStatus("sending");
    try {
      const res = await fetch("https://formspree.io/f/mvzdlleg", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name: form.name, email: form.email, message: form.message }),
      });
      if (res.ok) {
        setFormStatus("success");
        setForm({ name: "", email: "", message: "" });
      } else {
        setFormStatus("error");
      }
    } catch {
      setFormStatus("error");
    }
  };

  useEffect(() => {
    document.documentElement.style.setProperty("--scrollbar-color", SCROLLBAR_COLOR[colorMain] ?? "#059669");
  }, [colorMain]);

  const texts = language === "eng" ? languageTexts.eng : languageTexts.spa;

  const classesTones = computeClasses(colorMain);
  const classes = tone === "dark" ? classesTones.dark : classesTones.light;

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

  const sectionTitle = (label: string, icon?: React.ReactNode) => (
    <h3 className={`text-base font-semibold border-b-2 ${classes?.borderColorImage} pb-1 mb-3 flex items-center gap-2`}>
      {label}{icon}
    </h3>
  );

  // ── Render ────────────────────────────────────────────────────────────────
  return (
    <div className={`${classes?.textColorMain} flex flex-col items-center h-full overflow-y-auto md:overflow-visible md:justify-center pt-16 md:pt-0 pb-6 md:pb-[6%]`}>

      {/* ═══ MOBILE LAYOUT ══════════════════════════════════════════════ */}
      <div className="md:hidden w-full px-4 pt-8 pb-8">

        {/* Profile header */}
        <div className="flex items-start justify-between mb-6">
          <div className="flex-1 pr-4">
            <h2 className="uppercase text-sm leading-snug">
              {texts?.title_1}
              <span className={`underline flex items-center gap-1 ${classes?.decorationColor}`}>
                {texts?.title_2}
                <FaDev
                  className={`${classes?.bgTextInfo} ${classes?.bgOpacityTextInfo} p-1 rounded ${classes?.textMainColor}`}
                  size={22}
                />
              </span>
            </h2>
            <h1 className={`${classes?.textMainColor} font-semibold text-xl mt-1`}>Pablo Kampmann</h1>
          </div>
          <div className="relative shrink-0">
            {!imageLoaded && (
              <div className={`rounded-full border-4 ${classes?.borderColorImage} w-20 h-20 flex justify-center items-center`}>
                <PuffLoader color={LOADER_COLOR[colorMain] ?? "#059669"} size={50} speedMultiplier={2.5} />
              </div>
            )}
            <Image
              className={`rounded-full object-cover border-4 ${classes?.borderColorImage} shadow-xl w-20 h-20 ${!imageLoaded ? "hidden" : ""}`}
              onLoad={() => setImageLoaded(true)}
              quality={85} width={200} height={200} priority
              src="/images/profile/me-image.jpg" alt="me-image"
            />
          </div>
        </div>

        {/* Developer section */}
        <div className="mb-7 animate-[fadeSlideUp_0.2s_ease_forwards]">
          {sectionTitle(language === "eng" ? "Developer" : "Desarrollador")}
          <div className="space-y-2 text-sm">
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
        </div>

        {/* Studies section */}
        <div className="mb-7 animate-[fadeSlideUp_0.2s_0.1s_ease_forwards] opacity-0">
          {sectionTitle(language === "eng" ? "Studies" : "Estudios", <IoSchool size={16} />)}
          <div className="space-y-2 text-sm">
            <p className={paraCls}>
              {texts?.text_4_part_1}{" "}
              <a onClick={() => window.open("https://uap.edu.ar/", "_blank")} className={linkCls}>{texts?.text_link_4}</a>
              {texts?.text_4_part_2}
            </p>
            <p className={`${classes?.bgTextInfo} ${classes?.bgOpacityTextInfo} py-1 px-2 w-fit rounded-md`}>
              {texts?.degree_1}{" "}<span className={classes?.textMainColor}>95%</span>
            </p>
            <p className={`${classes?.bgTextInfo} ${classes?.bgOpacityTextInfo} py-1 px-2 w-fit rounded-md`}>
              {texts?.degree_2}{" "}<span className={classes?.textMainColor}>90%</span>
            </p>
          </div>
        </div>

        {/* Skills section */}
        <div className="mb-7 animate-[fadeSlideUp_0.2s_0.2s_ease_forwards] opacity-0">
          {sectionTitle(language === "eng" ? "Skills" : "Habilidades")}
          <div className="space-y-2">
            {skills.map(({ key, level }) => (
              <div key={key} className={`${classes?.bgTextInfo} ${classes?.bgOpacityTextInfo} py-1.5 px-2 rounded-lg flex justify-between items-center text-sm`}>
                <span>{texts?.[key]}</span>
                <SkillLevel level={level} bgColorMain={classes?.bgMain} />
              </div>
            ))}
          </div>
        </div>

        {/* Contact section */}
        <div className="mb-7 animate-[fadeSlideUp_0.2s_0.3s_ease_forwards] opacity-0">
          {sectionTitle(language === "eng" ? "Contact" : "Contacto")}
          <div className="space-y-3">
            {formStatus === "success" ? (
              <div className={`${paraCls} text-center py-6`}>✓ {texts?.contact_success}</div>
            ) : (
              <>
                <input
                  type="text" placeholder={texts?.contact_name} value={form.name}
                  onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
                  className={`w-full ${classes?.bgTextInfo} ${classes?.bgOpacityTextInfo} rounded-md py-2 px-3 outline-none placeholder-current placeholder-opacity-50 text-sm`}
                />
                <input
                  type="email" placeholder={texts?.contact_email} value={form.email}
                  onChange={e => setForm(f => ({ ...f, email: e.target.value }))}
                  className={`w-full ${classes?.bgTextInfo} ${classes?.bgOpacityTextInfo} rounded-md py-2 px-3 outline-none placeholder-current placeholder-opacity-50 text-sm`}
                />
                <textarea
                  placeholder={texts?.contact_message} value={form.message}
                  onChange={e => setForm(f => ({ ...f, message: e.target.value }))}
                  rows={4}
                  className={`w-full ${classes?.bgTextInfo} ${classes?.bgOpacityTextInfo} rounded-md py-2 px-3 outline-none placeholder-current placeholder-opacity-50 text-sm resize-none`}
                />
                <div className="flex items-center gap-3">
                  <button
                    onClick={handleSubmit}
                    disabled={formStatus === "sending" || !form.name || !form.email || !form.message}
                    className={`${classes?.bgMain} px-4 py-2 rounded-md text-white text-sm transition duration-150 disabled:opacity-40`}
                  >
                    {formStatus === "sending" ? texts?.contact_sending : texts?.contact_send}
                  </button>
                  {formStatus === "error" && <span className="text-red-400 text-xs">{texts?.contact_error}</span>}
                </div>
              </>
            )}
          </div>
        </div>

        {/* Social links */}
        <div className="flex justify-center items-center gap-5 pb-2">
          <a href="https://wa.me/5493413466408" target="_blank" rel="noopener noreferrer" className={`${classes?.hoverBgColor} ${classes?.hoverBgOpacity} p-2.5 rounded-full transition duration-150`}>
            <IoLogoWhatsapp size={24} className={classes?.textMainColor} />
          </a>
          <a href="mailto:pablo7kamp@gmail.com" className={`${classes?.hoverBgColor} ${classes?.hoverBgOpacity} p-2.5 rounded-full transition duration-150`}>
            <FaEnvelope size={22} className={classes?.textMainColor} />
          </a>
          <a href="https://github.com/pablodKampmann" target="_blank" rel="noopener noreferrer" className={`${classes?.hoverBgColor} ${classes?.hoverBgOpacity} p-2.5 rounded-full transition duration-150`}>
            <FaGithub size={24} className={classes?.textMainColor} />
          </a>
        </div>
      </div>

      {/* ═══ DESKTOP LAYOUT ════════════════════════════════════════════ */}

      {/* Tab bar */}
      <div className={`hidden md:flex mt-0 justify-start text-sm lg:text-base xl:text-lg 2xl:text-xl tracking-wide border-b-2 ${classes?.borderColorImage} md:w-[50%]`}>
        {(["developer", "studies", "skills", "contact"] as const).map((tab, i) => {
          const labels = {
            developer: language === "eng" ? "Developer" : "Desarrollador",
            studies: language === "eng" ? "Studies" : "Estudios",
            skills: language === "eng" ? "Skills" : "Habilidades",
            contact: language === "eng" ? "Contact" : "Contacto",
          };
          const roundCls = i === 0 ? "rounded-tl-lg" : i === 3 ? "rounded-tr-lg" : "";
          return (
            <button
              key={tab}
              onClick={() => setSelected(tab)}
              className={`${selected === tab ? classes?.bgMain : `hover:bg-opacity-20 bg-white ${classes?.bgOpacityMain}`} transition duration-100 px-3 py-1 ${roundCls}`}
            >
              {labels[tab]}
            </button>
          );
        })}
      </div>

      {/* Main card */}
      <div className={`hidden md:flex flex-col w-[50%] h-[65%] justify-start p-8 pt-6 relative bg-white ${classes?.bgOpacityMain} rounded-b-2xl rounded-tr-2xl shadow-2xl`}>

        {/* Header */}
        <div>
          <h2 className="uppercase flex flex-row items-center text-xs lg:text-sm xl:text-base 2xl:text-xl text-opacity-80">
            <span>
              {texts?.title_1}
              <span>{" ("}</span>
            </span>
            <span className={`underline flex items-center ${classes?.decorationColor}`}>
              &nbsp;{texts?.title_2}
              {" )"}
              <FaDev
                className={`ml-4 ${classes?.bgTextInfo} ${classes?.bgOpacityTextInfo} p-1 rounded ${classes?.textMainColor}`}
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
          <div className="w-[70%] h-fit space-y-4 overflow-y-auto about-me-container text-xs lg:text-sm xl:text-base 2xl:text-lg mt-4 animate-[fadeSlideUp_0.2s_ease_forwards]">
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
          <div className="w-[70%] h-fit space-y-4 overflow-y-auto about-me-container text-xs lg:text-sm xl:text-base 2xl:text-lg mt-4 animate-[fadeSlideUp_0.2s_ease_forwards]">
            <p className={paraCls}>
              {texts?.text_4_part_1}{" "}
              <a onClick={() => window.open("https://uap.edu.ar/", "_blank")} className={linkCls}>{texts?.text_link_4}</a>
              {texts?.text_4_part_2}
            </p>
            <h2 className={`flex items-center underline ${classes?.decorationColor} ml-1 text-xs lg:text-sm xl:text-base 2xl:text-xl`}>
              Títulos <IoSchool className="ml-2" />
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
          <div className="w-[70%] h-fit space-y-4 overflow-y-auto tracking-normal about-me-container text-xs lg:text-sm xl:text-base 2xl:text-lg mt-4 animate-[fadeSlideUp_0.2s_ease_forwards]">
            {skills.map(({ key, level }) => (
              <div key={key} className={`${classes?.bgTextInfo} ${classes?.bgOpacityTextInfo} py-1 px-2 rounded-lg flex justify-between items-center`}>
                <span>{texts?.[key]}</span>
                <SkillLevel level={level} bgColorMain={classes?.bgMain} />
              </div>
            ))}
          </div>
        )}

        {/* Contact tab */}
        {selected === "contact" && (
          <div className="w-[70%] h-fit space-y-3 mt-4">
            {formStatus === "success" ? (
              <div className={`${paraCls} animate-[fadeSlideUp_0.4s_ease_forwards] text-center py-6`}>
                ✓ {texts?.contact_success}
              </div>
            ) : (
              <>
                <div className="animate-[fadeSlideUp_0.2s_ease_forwards]">
                  <input
                    type="text" placeholder={texts?.contact_name} value={form.name}
                    onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
                    className={`w-full ${classes?.bgTextInfo} ${classes?.bgOpacityTextInfo} rounded-md py-1.5 px-3 outline-none placeholder-current placeholder-opacity-50 text-xs lg:text-sm`}
                  />
                </div>
                <div className="animate-[fadeSlideUp_0.2s_0.08s_ease_forwards] opacity-0">
                  <input
                    type="email" placeholder={texts?.contact_email} value={form.email}
                    onChange={e => setForm(f => ({ ...f, email: e.target.value }))}
                    className={`w-full ${classes?.bgTextInfo} ${classes?.bgOpacityTextInfo} rounded-md py-1.5 px-3 outline-none placeholder-current placeholder-opacity-50 text-xs lg:text-sm`}
                  />
                </div>
                <div className="animate-[fadeSlideUp_0.2s_0.16s_ease_forwards] opacity-0">
                  <textarea
                    placeholder={texts?.contact_message} value={form.message}
                    onChange={e => setForm(f => ({ ...f, message: e.target.value }))}
                    rows={3}
                    className={`w-full ${classes?.bgTextInfo} ${classes?.bgOpacityTextInfo} rounded-md py-1.5 px-3 outline-none placeholder-current placeholder-opacity-50 text-xs lg:text-sm resize-none`}
                  />
                </div>
                <div className="animate-[fadeSlideUp_0.2s_0.24s_ease_forwards] opacity-0">
                  <button
                    onClick={handleSubmit}
                    disabled={formStatus === "sending" || !form.name || !form.email || !form.message}
                    className={`${classes?.bgMain} px-4 py-1.5 rounded-md text-white text-xs lg:text-sm transition duration-150 disabled:opacity-40`}
                  >
                    {formStatus === "sending" ? texts?.contact_sending : texts?.contact_send}
                  </button>
                  {formStatus === "error" && (
                    <span className="ml-3 text-red-400 text-xs">{texts?.contact_error}</span>
                  )}
                </div>
              </>
            )}
          </div>
        )}

        {/* Avatar + social */}
        <div className="absolute -top-10 -right-10">
          {!imageLoaded && (
            <div className={`rounded-full border-4 ${classes?.borderColorImage} shadow-2xl w-[200px] h-[200px] flex justify-center items-center`}>
              <PuffLoader color={LOADER_COLOR[colorMain] ?? "#059669"} size={100} speedMultiplier={2.5} />
            </div>
          )}
          <Image
            className={`rounded-full object-cover border-4 ${classes?.borderColorImage} shadow-2xl w-[200px] h-[200px] ${!imageLoaded ? "hidden" : ""}`}
            onLoad={() => setImageLoaded(true)}
            quality={85} width={400} height={400} priority
            src="/images/profile/me-image.jpg" alt="me-image"
          />
          <div>
            {openSocial && (
              <div>
                <button
                  onClick={() => window.open("https://wa.me/543413466408", "_blank")}
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
