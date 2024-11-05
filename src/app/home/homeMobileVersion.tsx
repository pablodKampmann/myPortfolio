"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { FaDev, FaGithub, FaEnvelope } from "react-icons/fa";
import { SlOptionsVertical } from "react-icons/sl";
import { IoLogoWhatsapp } from "react-icons/io";
import { CgClose } from "react-icons/cg";
import { useRouter } from "next/navigation";
import SkillLevel from "../components/skillLevel";
import { IoSchool } from "react-icons/io5";
import { languageTexts } from "./languageTexts";

export default function HomeMobile() {
  const imageBlur =
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP8XwMAAoABfYJLKisAAAAASUVORK5CYII=";
  const router = useRouter();

  //LISTENER DEL LOCALSTORAGE
  useEffect(() => {
    const handleItemChange = () => {
      const storedLanguage = localStorage.getItem("language");
      if (storedLanguage) {
        setLanguage(storedLanguage);
      }
      const storedTone = localStorage.getItem("tone");
      if (storedTone) {
        setTone(storedTone);
      }
      const storedColorMain = localStorage.getItem("colorMain");
      if (storedColorMain) {
        setColorMain(storedColorMain);
      }
    };

    window.addEventListener("storage", handleItemChange);

    return () => {
      window.removeEventListener("storage", handleItemChange);
    };
  }, []);

  //LANGUAGE
  const [language, setLanguage] = useState<string>("spa");

  useEffect(() => {
    const storedLanguage = localStorage.getItem("language");
    if (storedLanguage) {
      setLanguage(storedLanguage);
    }
  }, []);

  let texts;
  if (language === "eng") {
    texts = languageTexts.eng;
  } else if (language === "spa") {
    texts = languageTexts.spa;
  }

  //TONE
  const [tone, setTone] = useState<string>("dark");
  const [classesTones, setClassesTones] = useState<any>(null);
  const [colorMain, setColorMain] = useState<string>("emerald");

  useEffect(() => {
    const storedTone = localStorage.getItem("tone");
    if (storedTone) {
      setTone(storedTone);
    }
  }, []);

  useEffect(() => {
    const updateClassesTones = () => {
      let textMainColor = "";
      let textLinkColor = "";
      let hoverTextLinkColor = "";
      let borderColorImage = "";
      let decorationColor = "";
      let bgMain = "";

      switch (colorMain) {
        case "emerald":
          bgMain = tone === "dark" ? "bg-emerald-600" : "bg-emerald-600";
          textMainColor =
            tone === "dark" ? "text-emerald-600" : "text-emerald-600";
          textLinkColor =
            tone === "dark" ? "text-emerald-600" : "text-emerald-600";
          hoverTextLinkColor =
            tone === "dark"
              ? "hover:text-emerald-400"
              : "hover:text-emerald-400";
          borderColorImage =
            tone === "dark" ? "border-emerald-600" : "border-emerald-600";
          decorationColor =
            tone === "dark"
              ? "decoration-emerald-600"
              : "decoration-emerald-600";

          break;
        case "rose":
          bgMain = tone === "dark" ? "bg-rose-600" : "bg-rose-600";
          textMainColor = tone === "dark" ? "text-rose-600" : "text-rose-600";
          textLinkColor = tone === "dark" ? "text-rose-600" : "text-rose-600";
          hoverTextLinkColor =
            tone === "dark" ? "hover:text-rose-400" : "hover:text-rose-400";
          borderColorImage =
            tone === "dark" ? "border-rose-600" : "border-rose-600";
          decorationColor =
            tone === "dark" ? "decoration-rose-600" : "decoration-rose-600";

          break;
        case "blue":
          bgMain = tone === "dark" ? "bg-blue-600" : "bg-blue-600";
          textMainColor = tone === "dark" ? "text-blue-600" : "text-blue-600";
          textLinkColor = tone === "dark" ? "text-blue-600" : "text-blue-600";
          hoverTextLinkColor =
            tone === "dark" ? "hover:text-blue-400" : "hover:text-blue-400";
          borderColorImage =
            tone === "dark" ? "border-blue-600" : "border-blue-600";
          decorationColor =
            tone === "dark" ? "decoration-blue-600" : "decoration-blue-600";

          break;
        case "yellow":
          bgMain = tone === "dark" ? "bg-yellow-600" : "bg-yellow-600";
          textMainColor =
            tone === "dark" ? "text-yellow-600" : "text-yellow-600";
          textLinkColor =
            tone === "dark" ? "text-yellow-600" : "text-yellow-600";
          hoverTextLinkColor =
            tone === "dark" ? "hover:text-yellow-400" : "hover:text-yellow-400";
          borderColorImage =
            tone === "dark" ? "border-yellow-600" : "border-yellow-600";
          decorationColor =
            tone === "dark" ? "decoration-yellow-600" : "decoration-yellow-600";

          break;
        default:
          break;
      }

      setClassesTones({
        dark: {
          bgMain: bgMain,
          textMainColor: textMainColor,
          bgOpacityMain: "bg-opacity-10",
          textColorMain: "text-white",
          bgTextInfo: "bg-white",
          bgOpacityTextInfo: "bg-opacity-10",
          textOpacity: "text-opacity-100",
          hoverBgColor: "hover:bg-white",
          hoverBgOpacity: "hover:bg-opacity-10",
          textLinkColor: textLinkColor,
          hoverTextLinkColor: hoverTextLinkColor,
          borderColorImage: borderColorImage,
          decorationColor: decorationColor,
        },
        light: {
          bgMain: bgMain,
          textMainColor: textMainColor,
          bgOpacityMain: "bg-opacity-100",
          textColorMain: "text-black",
          bgTextInfo: "bg-black",
          bgOpacityTextInfo: "bg-opacity-10",
          textOpacity: "text-opacity-60",
          hoverBgColor: "hover:bg-black",
          hoverBgOpacity: "hover:bg-opacity-10",
          textLinkColor: textLinkColor,
          hoverTextLinkColor: hoverTextLinkColor,
          borderColorImage: borderColorImage,
          decorationColor: decorationColor,
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

  //COLOR MAIN
  useEffect(() => {
    const storedTone = localStorage.getItem("colorMain");
    if (storedTone) {
      setColorMain(storedTone);
    }
  }, []);

  //USER ITERACTION
  const [openSocial, setOpenSocial] = useState(false);

  function whatsAppContact() {
    const phoneNumber = "+543413466408";
    const whatsappUrl = `https://wa.me/${phoneNumber}`;

    window.open(whatsappUrl, "_blank");
  }

  function emailContact() {
    const emailAddress = "pablo7kamp@gmail.com";
    window.open("mailto:" + emailAddress);
  }

  function gitHubContact() {
    window.open("https://github.com/pablodKampmann", "_blank");
  }

  const [selected, setSelected] = useState<string>("developer");

  return (
    <div
      className={`${classes?.textColorMain} flex flex-col justify-center items-center h-full pb-[6%]`}
    >
      <div
        className={`flex justify-start sm:text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl tracking-wide border-b-2 ${classes?.borderColorImage} w-[50%]`}
      >
        <button
          onClick={() => setSelected("developer")}
          className={`${selected === "developer" ? `${classes?.bgMain}` : `hover:bg-opacity-20 bg-white ${classes?.bgOpacityMain}`} transition duration-100  px-3 py-1 rounded-tl-lg`}
        >
          Desarrollador
        </button>
        <button
          onClick={() => setSelected("studies")}
          className={`${selected === "studies" ? `${classes?.bgMain}` : `hover:bg-opacity-20 bg-white ${classes?.bgOpacityMain}`} transition duration-100  px-3 `}
        >
          Estudios
        </button>
        <button
          onClick={() => setSelected("skills")}
          className={`${selected === "skills" ? `${classes?.bgMain}` : ` hover:bg-opacity-20 bg-white ${classes?.bgOpacityMain}`} transition duration-100  px-3 rounded-tr-lg`}
        >
          Habilidades
        </button>
      </div>
      <div
        className={`w-[50%] h-[65%] flex flex-col justify-start  p-8 pt-6 relative bg-white ${classes?.bgOpacityMain} rounded-b-2xl rounded-tr-2xl shadow-2xl`}
      >
        <div>
          <h2 className="uppercase flex items-center md:text-xs lg:text-sm xl:text-base 2xl:text-xl text-opacity-80">
            {texts?.title_1}({" "}
            <span className={` underline ${classes?.decorationColor}`}>
              {" "}
              {texts?.title_2}
            </span>
            ){" "}
            <FaDev
              className={`ml-4 ${classes?.bgTextInfo} ${classes?.bgOpacityTextInfo} p-1 rounded ${classes?.textMainColor}`}
              size={28}
            />
          </h2>
          <h1
            className={`${classes?.textMainColor} font-semibold md:text-xs lg:text-xs xl:text-sm 2xl:text-base `}
          >
            Pablo Kampmann
          </h1>
        </div>
        {selected === "developer" && (
          <div className="w-[70%] h-fit space-y-4 overflow-y-auto  md:text-xs lg:text-sm xl:text-base 2xl:text-lg about-me-container  mt-4">
            <p
              className={`${classes?.bgTextInfo} ${classes?.bgOpacityTextInfo} py-1 px-2 rounded-md`}
            >
              {texts?.text_1}
            </p>
            <p
              className={`${classes?.bgTextInfo} ${classes?.bgOpacityTextInfo}  py-1 px-2  rounded-md`}
            >
              {texts?.text_2_part_1}{" "}
              <a
                onClick={() => router.push("/work")}
                className={`${classes?.textLinkColor} ${classes?.hoverTextLinkColor} hover:cursor-pointer transition duration-150`}
              >
                {texts?.text_link_1}
              </a>
              {texts?.text_2_part_2}
            </p>
            <p
              className={`${classes?.bgTextInfo} ${classes?.bgOpacityTextInfo} py-1 px-2  rounded-md`}
            >
              {texts?.text_3_part_1}{" "}
              <a
                onClick={() => router.push("/tech")}
                className={`${classes?.textLinkColor} ${classes?.hoverTextLinkColor} hover:cursor-pointer transition duration-150`}
              >
                {texts?.text_link_2}{" "}
              </a>
              {texts?.text_3_part_2}
            </p>
          </div>
        )}
        {selected === "studies" && (
          <div className="w-[70%] h-fit space-y-4 overflow-y-auto  md:text-xs lg:text-sm xl:text-base 2xl:text-lg about-me-container  mt-4">
            <p
              className={`${classes?.bgTextInfo} ${classes?.bgOpacityTextInfo}  py-1 px-2  rounded-md`}
            >
              {texts?.text_4_part_1}{" "}
              <a
                onClick={() => window.open("https://uap.edu.ar/", "_blank")}
                className={`${classes?.textLinkColor} ${classes?.hoverTextLinkColor} hover:cursor-pointer transition duration-150`}
              >
                {texts?.text_link_4}
              </a>
              {texts?.text_4_part_2}
            </p>
            <p
              className={`${classes?.bgTextInfo} ${classes?.bgOpacityTextInfo}  py-1 px-2  rounded-md`}
            >
              {texts?.text_5}
            </p>
            <h2
              className={`flex md:text-xs lg:text-sm xl:text-base 2xl:text-xl items-center underline ${classes?.decorationColor} ml-1`}
            >
              Titulos <IoSchool className="ml-2" />
            </h2>
            <p
              className={`${classes?.bgTextInfo} ${classes?.bgOpacityTextInfo}  py-1 px-2 w-fit  rounded-md`}
            >
              {texts?.degree_1}{" "}
              <span className={`${classes?.textMainColor}`}>90%</span>
            </p>
            <p
              className={`${classes?.bgTextInfo} ${classes?.bgOpacityTextInfo}  py-1 px-2 w-fit  rounded-md`}
            >
              {texts?.degree_2}{" "}
              <span className={`${classes?.textMainColor}`}>70%</span>
            </p>
          </div>
        )}
        {selected === "skills" && (
          <div className="w-[70%] h-fit space-y-4 overflow-y-auto md:text-xs lg:text-sm xl:text-base 2xl:text-lg about-me-container mt-4">
            <div
              className={`${classes?.bgTextInfo} ${classes?.bgOpacityTextInfo} py-1 px-2 rounded-lg flex justify-between items-center`}
            >
              <span>{texts?.skill_1}</span>
              <SkillLevel level={4} bgColorMain={classes?.bgMain} />
            </div>
            <div
              className={`${classes?.bgTextInfo} ${classes?.bgOpacityTextInfo} py-1 px-2 rounded-lg flex justify-between items-center`}
            >
              <span>{texts?.skill_2}</span>
              <SkillLevel level={3} bgColorMain={classes?.bgMain} />
            </div>
            <div
              className={`${classes?.bgTextInfo} ${classes?.bgOpacityTextInfo} py-1 px-2 rounded-lg flex justify-between items-center`}
            >
              <span>{texts?.skill_3}</span>
              <SkillLevel level={4} bgColorMain={classes?.bgMain} />
            </div>
            <div
              className={`${classes?.bgTextInfo} ${classes?.bgOpacityTextInfo} py-1 px-2 rounded-lg flex justify-between items-center`}
            >
              <span>{texts?.skill_4}</span>
              <SkillLevel level={5} bgColorMain={classes?.bgMain} />
            </div>
            <div
              className={`${classes?.bgTextInfo} ${classes?.bgOpacityTextInfo} py-1 px-2 rounded-lg flex justify-between items-center`}
            >
              <span>{texts?.skill_5}</span>
              <SkillLevel level={5} bgColorMain={classes?.bgMain} />
            </div>
            <div
              className={`${classes?.bgTextInfo} ${classes?.bgOpacityTextInfo} py-1 px-2 rounded-lg flex justify-between items-center`}
            >
              <span>{texts?.skill_6}</span>
              <SkillLevel level={4} bgColorMain={classes?.bgMain} />
            </div>
            <div
              className={`${classes?.bgTextInfo} ${classes?.bgOpacityTextInfo} py-1 px-2 rounded-lg flex justify-between items-center`}
            >
              <span>{texts?.skill_7}</span>
              <SkillLevel level={3} bgColorMain={classes?.bgMain} />
            </div>
          </div>
        )}

        <div className="absolute -top-10 -right-10">
          <Image
            placeholder="blur"
            blurDataURL={imageBlur}
            className={`rounded-full border-4  ${classes?.borderColorImage}  shadow-2xl object-cover w-[200px] h-[200px]`}
            quality={10}
            width={959}
            height={1280}
            priority={true}
            src="/me-image.jpg"
            alt="me-image"
          />
          {openSocial && (
            <div className="">
              <button
                onClick={whatsAppContact}
                className={`absolute animate-move-whatsapp cursor-pointer  ${classes?.hoverBgColor} ${classes?.hoverBgOpacity} p-2 rounded-full -left-12 top-[45%]`}
              >
                <IoLogoWhatsapp
                  size={28}
                  className={`${classes?.textColorMain} ${classes?.textOpacity} `}
                />
              </button>
              <button
                onClick={emailContact}
                className={`absolute animate-move-email cursor-pointer  ${classes?.hoverBgColor} ${classes?.hoverBgOpacity} p-2 rounded-full -left-8 top-[70%]`}
              >
                <FaEnvelope
                  size={24}
                  className={`${classes?.textColorMain} ${classes?.textOpacity} `}
                />
              </button>
              <button
                onClick={gitHubContact}
                className={`absolute animate-move-gitHub cursor-pointer  ${classes?.hoverBgColor} ${classes?.hoverBgOpacity} p-2 rounded-full left-0 top-[90%]`}
              >
                <FaGithub
                  size={28}
                  className={`${classes?.textColorMain} ${classes?.textOpacity} `}
                />
              </button>
            </div>
          )}
          <button
            onClick={() => setOpenSocial(!openSocial)}
            className={`absolute cursor-pointer transition duration-150 ${classes?.hoverBgColor} ${classes?.hoverBgOpacity} p-2 rounded-full  top-[110%] right-[40%] `}
          >
            {openSocial ? (
              <CgClose
                size={20}
                className={`${classes?.textColorMain} ${classes?.textOpacity} `}
              />
            ) : (
              <SlOptionsVertical
                size={20}
                className={`${classes?.textColorMain} ${classes?.textOpacity}  animate-[spin_5s_ease-in-out_infinite]`}
              />
            )}
          </button>
        </div>
      </div>
    </div>
  );
}
