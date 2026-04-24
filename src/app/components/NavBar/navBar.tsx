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
          <div className={`relative group flex items-center mr-2 ${classes?.hoverBgColorIcon} ${classes?.hoverBgOpacityIcon} p-2 rounded-full  transition duration-300`}>            <svg
            fill="currentColor"
            className={`${classes?.textIcon} w-6 h-6 animate-sway`}
            viewBox="0 0 396.494 396.494"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M304.42,330.901h-43.219c-1.56,0-2.834-1.273-2.834-2.834v-10.52c0-1.559-1.275-2.834-2.834-2.834h-60.475c-1.56,0-2.835,1.275-2.835,2.834v10.52c0,1.561-1.275,2.834-2.835,2.834h-32.491c-1.56,0-2.835,1.275-2.835,2.834v12.17c0,1.559,1.275,2.834,2.835,2.834h147.521c1.559,0,2.834-1.275,2.834-2.834v-12.17C307.254,332.179,305.979,330.901,304.42,330.901z" />
            <path d="M377.032,46.368h-308.4c-10.73,0-19.459,8.73-19.459,19.462c0,0,0,37.109,0,50.761c0,6.711-0.498,7.66,4.004,7.66c2.391,0,5.039,0,7.72,0c3.778,0,3.003-0.949,3.003-7.785c0-13.621,0-50.636,0-50.636c0-2.565,2.168-4.733,4.732-4.733h308.4c2.563,0,4.731,2.168,4.731,4.733v189.999h-219.87c0,0-7.749-0.014-7.749,10.006c0,5.941,0,17.823,0,23.766c0,10.006,8,10.006,8,10.006h214.888c10.729,0,19.461-8.729,19.461-19.459V65.83C396.493,55.099,387.763,46.368,377.032,46.368z M222.833,282.804c-4.845,0-8.771-3.926-8.771-8.768s3.926-8.77,8.771-8.77c4.84,0,8.767,3.928,8.767,8.77S227.673,282.804,222.833,282.804z" />
            <path d="M124.125,141.633H12.559C5.632,141.633,0,147.266,0,154.193v183.372c0,6.926,5.632,12.561,12.559,12.561h111.566c6.923,0,12.559-5.635,12.559-12.561V154.193C136.684,147.266,131.048,141.633,124.125,141.633z M54.58,154.443h27.523c1.313,0,2.38,1.064,2.38,2.381c0,1.314-1.066,2.379-2.38,2.379H54.58c-1.315,0-2.379-1.065-2.379-2.379C52.201,155.507,53.265,154.443,54.58,154.443z M68.175,341.304c-3.59,0-6.5-2.91-6.5-6.5s2.91-6.5,6.5-6.5s6.5,2.91,6.5,6.5S71.765,341.304,68.175,341.304z M125.893,322.2c0,1.676-1.342,3.047-2.98,3.047H13.774c-1.639,0-2.98-1.371-2.98-3.047V169.825c0-1.676,1.342-3.046,2.98-3.046h109.139c1.639,0,2.98,1.371,2.98,3.046V322.2z" />
          </svg>
            <span className={`absolute left-1/2 -translate-x-1/2 top-12 whitespace-nowrap text-xs px-2 py-1 rounded ${classes?.bgMain} ${classes?.textMain} opacity-0 group-hover:opacity-100 transition duration-200 shadow-lg`}>
              Full Responsive
            </span>
          </div>
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
