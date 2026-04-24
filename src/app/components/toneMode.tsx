import { MdDarkMode, MdOutlineDarkMode } from "react-icons/md";
import { useState, useEffect } from "react";
import { useTheme } from "../context/ThemeContext";

interface ToneOptionsProps {
  handleToneChange: (tone: string) => void;
}

export default function ToneMode({ handleToneChange }: ToneOptionsProps) {
  const { tone, colorMain } = useTheme();
  function handleClick() {
    if (tone === "dark") {
      handleToneChange("light");
    } else if (tone === "light") {
      handleToneChange("dark");
    }
  }

  //TONE
  const [classesTones, setClassesTones] = useState<any>(null);

  useEffect(() => {
    const updateClassesTones = () => {
      let bgColorMain = "";
      let bgColorMainHover = "";

      switch (colorMain) {
        case "emerald":
          bgColorMain = tone === "dark" ? "bg-emerald-600" : "bg-emerald-500";
          bgColorMainHover =
            tone === "dark" ? "hover:bg-emerald-600" : "hover:bg-emerald-500";
          break;
        case "rose":
          bgColorMain = tone === "dark" ? "bg-rose-600" : "bg-rose-500";
          bgColorMainHover =
            tone === "dark" ? "hover:bg-rose-600" : "hover:bg-rose-500";
          break;
        case "blue":
          bgColorMain = tone === "dark" ? "bg-blue-600" : "bg-blue-500";
          bgColorMainHover =
            tone === "dark" ? "hover:bg-blue-600" : "hover:bg-blue-500";
          break;
        case "yellow":
          bgColorMain = tone === "dark" ? "bg-yellow-600" : "bg-yellow-500";
          bgColorMainHover =
            tone === "dark" ? "hover:bg-yellow-600" : "hover:bg-yellow-500";
          break;
        default:
          break;
      }

      setClassesTones({
        dark: {
          bgColorMain: bgColorMain,
          bgColorMainHover: bgColorMainHover,
        },
        light: {
          bgColorMain: bgColorMain,
          bgColorMainHover: bgColorMainHover,
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

  return (
    <button
      onClick={handleClick}
      className={`absolute z-10 bottom-4 ${classes?.bgColorMain} ${classes?.bgColorMainHover} transition duration-150 cursor-pointer p-2 rounded-full left-4`}
    >
      {tone === "dark" ? (
        <MdDarkMode size={30} className="text-black" />
      ) : (
        <MdOutlineDarkMode size={30} className="text-white" />
      )}
    </button>
  );
}
