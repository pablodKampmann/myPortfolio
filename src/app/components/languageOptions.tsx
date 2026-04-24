import { MdLanguage } from "react-icons/md";
import { useState, useEffect } from "react";
import { IoIosClose } from "react-icons/io";
import { useTheme } from "../context/ThemeContext";

interface LanguageOptionsProps {
  handleLanguageChange: (language: string) => void;
}

export default function LanguageOptions({ handleLanguageChange }: LanguageOptionsProps) {
  const { tone, colorMain, language } = useTheme();
  //TONE
  const [classesTones, setClassesTones] = useState<any>(null);

  useEffect(() => {
    const updateClassesTones = () => {
      let bgColorMain = "";
      let borderColorMain = "";

      switch (colorMain) {
        case "emerald":
          bgColorMain = tone === "dark" ? "bg-emerald-600" : "bg-emerald-500";
          borderColorMain =
            tone === "dark" ? "border-emerald-600" : "border-emerald-500";
          break;
        case "rose":
          bgColorMain = tone === "dark" ? "bg-rose-600" : "bg-rose-500";
          borderColorMain =
            tone === "dark" ? "border-rose-600" : "border-rose-500";
          break;
        case "blue":
          bgColorMain = tone === "dark" ? "bg-blue-600" : "bg-blue-500";
          borderColorMain =
            tone === "dark" ? "border-blue-600" : "border-blue-500";
          break;
        case "yellow":
          bgColorMain = tone === "dark" ? "bg-yellow-600" : "bg-yellow-500";
          borderColorMain =
            tone === "dark" ? "border-yellow-600" : "border-yellow-500";
          break;
        default:
          break;
      }

      setClassesTones({
        dark: {
          bgColor: "bg-[#090D1F]",
          textMain: "text-white",
          bgHoverButton: "hover:bg-white",
          bgOpacityHoverButton: "hover:bg-opacity-20",
          textIcon: "text-black",
          bgColorMain: bgColorMain,
          borderColorMain: borderColorMain,
        },
        light: {
          bgColor: "bg-white",
          textMain: "text-black",
          bgHoverButton: "hover:bg-black",
          bgOpacityHoverButton: "hover:bg-opacity-20",
          textIcon: "text-white",
          bgColorMain: bgColorMain,
          borderColorMain: borderColorMain,
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

  //LOGIC
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setOpen(false);
    }, 5000);

    return () => clearTimeout(timeoutId);
  }, [open]);

  return (
    <div className="">
      <button
        onClick={() => setOpen(!open)}
        className={`absolute ${open ? "opacity-0" : "opacity-100"} ${classes?.bgColorMain} p-1.5 z-20 flex justify-center items-center rounded-full bottom-4 right-4`}
      >
        <MdLanguage className={`${classes?.textIcon}`} size={36} />
      </button>
      <div
        onClick={() => setOpen(!open)}
        className={`${classes?.bgColor} ${classes?.textMain} z-20 p-4 font-medium text-center flex-col rounded-xl border-2 ${classes?.borderColorMain} justify-center items-center transition duration-300 all h-fit w-fit absolute bottom-4 right-4 ${open ? "translate-y-0" : "translate-y-full opacity-0"}`}
      >
        <button
          className={`absolute ${classes?.bgOpacityHoverButton} ${classes?.bgHoverButton} rounded-full top-2 right-2`}
        >
          <IoIosClose size={30} />
        </button>
        <MdLanguage className={`${classes?.textMain} mt-1 w-full`} size={30} />
        {open && language === "eng" && "Select Language"}
        {open && language === "spa" && "Seleccionar Idioma"}
        <div
          className={`w-full h-0.5 mt-2 ${classes?.bgColorMain} rounded-full`}
        ></div>
        <div className=" mt-2 flex-col flex space-y-2 p-1">
          <button
            className={`${language === "spa" ? `${classes?.bgColorMain}` : `${classes?.bgOpacityHoverButton} ${classes?.bgHoverButton}`} w-fit pr-10 transition duration-150 text-start px-3 rounded-xl py-0.5`}
            onClick={() => handleLanguageChange("spa")}
          >
            01. Español
          </button>
          <button
            className={`${language === "eng" ? `${classes?.bgColorMain}` : `${classes?.bgOpacityHoverButton} ${classes?.bgHoverButton}`} w-fit pr-10 transition duration-150 text-start px-3 rounded-xl py-0.5`}
            onClick={() => handleLanguageChange("eng")}
          >
            02. English
          </button>
        </div>
      </div>
    </div>
  );
}
