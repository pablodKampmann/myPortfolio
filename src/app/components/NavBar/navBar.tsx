"use client";

import { SiVorondesign } from "react-icons/si";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { MdOutlineCancel } from "react-icons/md";
import { LuGithub } from "react-icons/lu";
import { TbFileCv, TbLayoutSidebarRightExpand, TbLayoutSidebarRightCollapse } from "react-icons/tb";
import { BsCloudDownload } from "react-icons/bs";
import { languageTexts } from "./languageTexts";

interface NavBarProps {
  tone: string;
  language: string;
  colorMain: string;
  handleColorChange: (language: string) => void;
}

export default function NavBar({
  tone,
  language,
  colorMain,
  handleColorChange,
}: NavBarProps) {
  const pathname = usePathname();
  const [showOptions, setShowOptions] = useState(false);
  const [openSideBar, setOpenSideBar] = useState(false);

  const texts = language === "eng" ? languageTexts.eng : languageTexts.spa;

  const [classesTones, setClassesTones] = useState<any>(null);

  useEffect(() => {
    let borderColor = "";
    let textIcon = "";
    let bgPageSelected = "";
    let textColorNumber = "";
    let hoverButtton = "";

    switch (colorMain) {
      case "emerald":
        borderColor = "border-emerald-600";
        textIcon = "text-emerald-600";
        bgPageSelected = "bg-emerald-600";
        textColorNumber = "text-emerald-600";
        hoverButtton = "hover:bg-emerald-600";
        break;
      case "rose":
        borderColor = "border-rose-600";
        textIcon = "text-rose-600";
        bgPageSelected = "bg-rose-600";
        textColorNumber = "text-rose-600";
        hoverButtton = "hover:bg-rose-600";
        break;
      case "blue":
        borderColor = "border-blue-600";
        textIcon = "text-blue-600";
        bgPageSelected = "bg-blue-600";
        textColorNumber = "text-blue-600";
        hoverButtton = "hover:bg-blue-600";
        break;
      case "yellow":
        borderColor = "border-yellow-600";
        textIcon = "text-yellow-600";
        bgPageSelected = "bg-yellow-600";
        textColorNumber = "text-yellow-600";
        hoverButtton = "hover:bg-yellow-600";
        break;
      default:
        break;
    }

    setClassesTones({
      dark: {
        bgMain: "bg-[#090D1F]",
        bgMainOpacity: "bg-opacity-100",
        textMain: "text-white",
        bgOpacityButtonPressed: "bg-opacity-40",
        bgOpacityHoverButtons: "hover:bg-opacity-20",
        borderColor,
        textIcon,
        bgColorButtons: "bg-white",
        bgPageSelected,
        textColorNumber,
        hoverButtton,
        bgColorShowOptions: "bg-[#090D1F]",
        bgOpacityShowOptions: "bg-opacity-100",
        borderColorColourSelected: "border-white",
        borderOpacityColourSelected: "border-opacity-100",
        hoverBgColorIcon: "hover:bg-white",
        hoverBgOpacityIcon: "hover:bg-opacity-10",
        bgOpacityButtons: "bg-opacity-[4%]",
        hoverBorderButtons: "hover:border-white",
        hoverTextButtons: "hover:text-white",
      },
      light: {
        bgMain: "bg-white",
        bgMainOpacity: "bg-opacity-100",
        textMain: "text-black",
        bgOpacityButtonPressed: "bg-opacity-20",
        bgOpacityHoverButtons: "hover:bg-opacity-20",
        borderColor,
        textIcon,
        bgColorButtons: "bg-black",
        bgPageSelected,
        textColorNumber,
        hoverButtton,
        bgColorShowOptions: "bg-white",
        bgOpacityShowOptions: "bg-opacity-100",
        borderColorColourSelected: "border-black",
        borderOpacityColourSelected: "border-opacity-60",
        hoverBgColorIcon: "hover:bg-black",
        hoverBgOpacityIcon: "hover:bg-opacity-10",
        bgOpacityButtons: "bg-opacity-[8%]",
        hoverBorderButtons: "hover:border-black",
        hoverTextButtons: "hover:text-black",
      },
    });
  }, [colorMain, tone]);

  const classes = tone === "dark" ? classesTones?.dark : classesTones?.light;

  const [isClick, setIsClick] = useState(false);
  const [showCancelButton, setShowCancelButton] = useState(false);

  useEffect(() => {
    if (isClick) {
      setIsClick(false);
      setShowCancelButton(true);
      setShowOptions(true);
    }
  }, [isClick]);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setShowOptions(false);
      setShowCancelButton(false);
    }, 6000);
    return () => clearTimeout(timeoutId);
  }, [showOptions]);

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsVisible(true);
      setTimeout(() => setIsVisible(false), 1600);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  const colorButtons = [
    { key: "emerald", bg: "bg-emerald-600" },
    { key: "rose", bg: "bg-rose-600" },
    { key: "blue", bg: "bg-blue-600" },
    { key: "yellow", bg: "bg-yellow-600" },
  ];

  const colorPicker = (
    <div
      onClick={() => { setShowOptions(false); setShowCancelButton(false); }}
      className={`border-2 ${classes?.borderColor} duration-300 transform transition-all ${showOptions ? "translate-x-0" : "-translate-x-full opacity-0"} absolute top-[120%] left-[1%] w-[120px] h-[200px] flex flex-col justify-center items-center ${classes?.bgColorShowOptions} ${classes?.bgOpacityShowOptions} shadow-2xl rounded-xl`}
    >
      <h1 className={`text-sm font-medium ${classes?.textMain} mb-2.5 w-[80%] text-balance text-center`}>
        {texts?.select_the}{" "}
        <span className={`${classes?.textIcon} font-semibold text-sm`}>{texts?.color}</span>{" "}
        {texts?.tatata}
      </h1>
      <div className="flex flex-col justify-center space-y-2 items-center">
        <div className="flex justify-center items-center space-x-4">
          {colorButtons.slice(0, 2).map(({ key, bg }) => (
            <button
              key={key}
              onClick={() => { handleColorChange(key); setShowOptions(false); setShowCancelButton(false); }}
              className={`${colorMain === key ? `w-8 h-8 ${classes?.borderOpacityColourSelected} ${classes?.borderColorColourSelected}` : "w-8 h-8 hover:scale-125 border-transparent transition duration-150"} ${bg} border-2 transition duration-200 shadow-2xl rounded-full`}
            />
          ))}
        </div>
        <div className="flex justify-center items-center space-x-4">
          {colorButtons.slice(2).map(({ key, bg }) => (
            <button
              key={key}
              onClick={() => { handleColorChange(key); setShowOptions(false); setShowCancelButton(false); }}
              className={`${colorMain === key ? `w-8 h-8 ${classes?.borderOpacityColourSelected} ${classes?.borderColorColourSelected}` : "w-8 h-8 hover:scale-125 border-transparent transition duration-150"} ${bg} border-2 transition duration-200 shadow-2xl rounded-full`}
            />
          ))}
        </div>
      </div>
    </div>
  );

  const navLinks = [
    { href: "/", label: texts?.about, num: "01" },
    { href: "/work", label: texts?.work, num: "02" },
    { href: "/tech", label: texts?.technologies, num: "03" },
  ];

  return (
    <div className="relative">
      {/* Mobile overlay */}
      <div
        onClick={() => setOpenSideBar(false)}
        className={`md:hidden fixed inset-0 bg-black bg-opacity-70 z-40 transition-opacity duration-300 ${openSideBar ? "opacity-100" : "opacity-0 pointer-events-none"}`}
      />

      {/* Mobile sidebar */}
      <div
        className={`md:hidden ${classes?.bgMain} ${classes?.textMain} fixed border-l-2 ${classes?.borderColor} top-0 right-0 w-[70%] h-screen z-50 transition-transform duration-300 transform ${openSideBar ? "translate-x-0" : "translate-x-full"}`}
      >
        <div className={`flex border-b-2 h-16 ${classes?.borderColor} p-2 justify-start items-center`}>
          <button
            onClick={() => setOpenSideBar(false)}
            className={`${classes?.hoverBgColorIcon} p-2 rounded-full hover:bg-opacity-10 absolute left-1.5 top-1.5`}
          >
            <TbLayoutSidebarRightCollapse className={classes?.textColorNumber} size={32} />
          </button>
          <h1 className="flex justify-center uppercase font-semibold text-xl tracking-wide w-full">
            {texts?.title_sideBar}
          </h1>
        </div>
        <div className="p-4 space-y-4 h-screen">
          {navLinks.map(({ href, label, num }) => (
            <Link key={href} href={href} onClick={() => setOpenSideBar(false)} prefetch={true}>
              <div className={`${pathname === href ? `${classes?.bgPageSelected} ${classes?.bgOpacityButtonPressed}` : `${classes?.bgOpacityHoverButtons} ${classes?.bgColorButtons} ${classes?.bgOpacityButtons}`} cursor-pointer font-medium focus:outline-none mb-4 py-2 px-3 rounded-xl transition duration-150 w-full whitespace-nowrap`}>
                <span className={classes?.textColorNumber}>{num}. </span>
                {label}
              </div>
            </Link>
          ))}
          <div onClick={() => window.open("https://github.com/pablodKampmann/myPortfolio", "_blank")} className={`bg-transparent uppercase font-semibold whitespace-nowrap tracking-widest border-2 ${classes?.textColorNumber} ${classes?.hoverBorderButtons} ${classes?.hoverButtton} hover:bg-opacity-70 ${classes?.hoverTextButtons} transition duration-150 cursor-pointer flex justify-center items-center ${classes?.borderColor} rounded-md py-1 px-3 text-sm`}>
            {texts?.repo}
            <LuGithub className="ml-2" size={34} />
          </div>

          <a href="/documents/Pablo-Kampmann-CV.pdf" download className={`bg-transparent group relative uppercase font-semibold whitespace-nowrap tracking-widest border-2 ${classes?.textColorNumber} ${classes?.hoverBorderButtons} ${classes?.hoverButtton} hover:bg-opacity-70 ${classes?.hoverTextButtons} transition duration-150 cursor-pointer flex justify-center items-center ${classes?.borderColor} rounded-md py-1 px-3`}>
            <TbFileCv className="opacity-100 group-hover:opacity-0" size={34} />
            <BsCloudDownload className="absolute opacity-0 group-hover:opacity-100" size={34} />
          </a>
        </div>
      </div>

      {/* Main navbar */}
      <div
        className={`w-full flex fixed md:relative top-0 left-0 right-0 z-20 md:z-50 justify-between items-center ${classes?.bgMain} border-b-2 ${openSideBar ? "border-transparent" : classes?.borderColor} transition select-none duration-200 ${classes?.bgMainOpacity} h-16`}
      >
        {/* Logo / color picker */}
        <div className="ml-4 flex justify-center items-center">
          {showCancelButton ? (
            <div className={`cursor-pointer ${classes?.hoverBgColorIcon} ${classes?.hoverBgOpacityIcon} transition animate-[spin_0.5s_ease-out] duration-300 p-1 rounded-full`}>
              <MdOutlineCancel
                onClick={() => { setShowOptions(false); setShowCancelButton(false); }}
                size={40}
                className={classes?.textIcon}
              />
            </div>
          ) : (
            <div className={`cursor-pointer ${isVisible ? `${classes?.bgColorButtons} bg-opacity-10` : "bg-transparent"} ${classes?.hoverBgColorIcon} ${classes?.hoverBgOpacityIcon} transition duration-300 p-1 rounded-full`}>
              <SiVorondesign
                onClick={() => setIsClick(true)}
                size={40}
                className={`${classes?.textIcon} ${isClick ? "" : "animate-[spin_5s_ease-in-out_infinite]"}`}
              />
            </div>
          )}
          {colorPicker}
        </div>

        {/* Desktop nav links */}
        <div className={`${classes?.textMain} hidden md:flex space-x-4 md:text-xs lg:text-sm xl:text-base 2xl:text-lg justify-end items-center mr-4`}>
          {navLinks.map(({ href, label, num }) => (
            <Link key={href} href={href} prefetch={true}>
              <div className={`${pathname === href ? `${classes?.bgPageSelected} ${classes?.bgOpacityButtonPressed}` : `${classes?.bgOpacityHoverButtons} ${classes?.bgColorButtons} ${classes?.bgOpacityButtons}`} cursor-pointer focus:outline-none py-2 px-3 rounded-lg transition duration-150 w-full whitespace-nowrap`}>
                <span className={classes?.textColorNumber}>{num}. </span>
                {label}
              </div>
            </Link>
          ))}
          <div onClick={() => window.open("https://github.com/pablodKampmann/myPortfolio", "_blank")} className={`bg-transparent uppercase font-semibold whitespace-nowrap tracking-widest border-2 ${classes?.textColorNumber} hover:border-white ${classes?.hoverButtton} hover:bg-opacity-70 hover:text-white transition duration-150 cursor-pointer flex justify-center items-center ${classes?.borderColor} rounded-md py-1 px-3`}>
            {texts?.repo}
            <LuGithub className="ml-2" size={34} />
          </div>
          <a href="/documents/Pablo-Kampmann-CV.pdf" download className={`bg-transparent group relative uppercase font-semibold whitespace-nowrap tracking-widest border-2 ${classes?.textColorNumber} hover:border-white ${classes?.hoverButtton} hover:bg-opacity-70 hover:text-white transition duration-150 cursor-pointer flex justify-center items-center ${classes?.borderColor} rounded-md py-1 px-3`}>
            <TbFileCv className="opacity-100 group-hover:opacity-0" size={34} />
            <BsCloudDownload className="absolute opacity-0 group-hover:opacity-100" size={34} />
          </a>
        </div>

        {/* Mobile hamburger */}
        <div className="flex md:hidden justify-end items-center mr-4">
          <button
            onClick={() => setOpenSideBar(!openSideBar)}
            className={`${classes?.hoverBgColorIcon} p-2 rounded-full hover:bg-opacity-10`}
          >
            <TbLayoutSidebarRightExpand className={classes?.textColorNumber} size={32} />
          </button>
        </div>
      </div>
    </div>
  );
}
