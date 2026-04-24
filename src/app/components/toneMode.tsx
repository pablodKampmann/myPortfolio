import { MdDarkMode, MdOutlineDarkMode } from "react-icons/md";
import { useTheme } from "../context/ThemeContext";
import { getColorClasses } from "../lib/themeClasses";

export default function ToneMode() {
  const { tone, colorMain, handleToneChange } = useTheme();
  const c = getColorClasses(colorMain);
  const bgColor = tone === "dark" ? c.bg600 : c.bg500;
  const hoverBg = tone === "dark" ? c.hoverBg600 : c.hoverBg500;

  return (
    <button
      onClick={() => handleToneChange(tone === "dark" ? "light" : "dark")}
      className={`absolute z-10 bottom-4 ${bgColor} ${hoverBg} transition duration-150 cursor-pointer p-2 rounded-full left-4`}
    >
      {tone === "dark" ? (
        <MdDarkMode size={30} className="text-black" />
      ) : (
        <MdOutlineDarkMode size={30} className="text-white" />
      )}
    </button>
  );
}
