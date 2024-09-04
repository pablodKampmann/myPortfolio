import { MdLanguage } from "react-icons/md";
import React, { useState, useEffect } from 'react';
import { IoIosClose } from "react-icons/io";

interface LanguageOptionsProps {
    tone: string;
    language: string;
    colorMain: string;
    handleLanguageChange: (language: string) => void;
}

export default function LanguageOptions({ tone, language, colorMain, handleLanguageChange }: LanguageOptionsProps) {
    const [open, setOpen] = useState(false);

    //TONE
    const [classesTones, setClassesTones] = useState<any>(null);

    useEffect(() => {
        const updateClassesTones = () => {
            let textIconColor = '';
            let borderColor = '';
            let hoverButtonColor = '';
            let textColorButtonSelected = '';

            switch (colorMain) {
                case 'emerald':
                    textIconColor = tone === 'dark' ? "text-emerald-600" : "text-emerald-500";
                    borderColor = tone === 'dark' ? "border-emerald-600" : "border-emerald-500";
                    hoverButtonColor = tone === 'dark' ? "hover:bg-emerald-800" : "hover:bg-emerald-600";
                    textColorButtonSelected = tone === 'dark' ? "text-emerald-500" : "text-emerald-500";

                    break;
                case 'rose':
                    textIconColor = tone === 'dark' ? "text-rose-600" : "text-rose-500";
                    borderColor = tone === 'dark' ? "border-rose-600" : "border-rose-500";
                    hoverButtonColor = tone === 'dark' ? "hover:bg-rose-800" : "hover:bg-rose-600";
                    textColorButtonSelected = tone === 'dark' ? "text-rose-500" : "text-rose-500";

                    break;
                case 'blue':
                    textIconColor = tone === 'dark' ? "text-blue-600" : "text-blue-500";
                    borderColor = tone === 'dark' ? "border-blue-600" : "border-blue-500";
                    hoverButtonColor = tone === 'dark' ? "hover:bg-blue-800" : "hover:bg-blue-600";
                    textColorButtonSelected = tone === 'dark' ? "text-blue-500" : "text-blue-500";

                    break;
                case 'yellow':
                    textIconColor = tone === 'dark' ? "text-yellow-600" : "text-yellow-500";
                    borderColor = tone === 'dark' ? "border-yellow-600" : "border-yellow-500";
                    hoverButtonColor = tone === 'dark' ? "hover:bg-yellow-800" : "hover:bg-yellow-600";
                    textColorButtonSelected = tone === 'dark' ? "text-yellow-500" : "text-yellow-500";

                    break;
                default:
                    break;
            }

            setClassesTones({
                dark: {
                    bgColor: "bg-blue-950",
                    bgOpacity: "bg-opacity-20",
                    textColor: "text-white",
                    bgIconColor: "bg-gray-100",
                    bgIconOpacity: "bg-opacity-15",
                    bgHoverCloseButton: "hover:bg-white",
                    textIconColor: textIconColor,
                    hoverButtonColor: hoverButtonColor,
                    borderColor: borderColor,
                    textColorButtonSelected: textColorButtonSelected,
                    textColorHoverButttons: 'hover:text-black',
                },
                light: {
                    bgColor: "bg-white",
                    bgOpacity: "bg-opacity-100",
                    textColor: "text-black",
                    bgIconColor: "bg-white",
                    bgIconOpacity: "bg-opacity-90",
                    bgHoverCloseButton: "hover:bg-black",
                    textIconColor: textIconColor,
                    hoverButtonColor: hoverButtonColor,
                    borderColor: borderColor,
                    textColorButtonSelected: textColorButtonSelected,
                    textColorHoverButttons: 'hover:text-black',
                }
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

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            setOpen(false);
        }, 5000);

        return () => clearTimeout(timeoutId);

    }, [open]);

    return (
        <button onClick={() => setOpen(!open)} className={`${open ? `${classes?.bgColor} ${classes?.bgOpacity} rounded-lg animate-move-from-bottom` : `${classes?.bgIconColor} ${classes?.bgIconOpacity} hover:bg-opacity-25  rounded-full p-1`} absolute ${classes?.textColor}  transition duration-200 bottom-3 right-3 z-10`}>
            <div className={`${open ? 'border-2 py-4 px-4' : 'cursor-pointer'}  select-none flex flex-col relative  ${classes?.borderColor} shadow-2xl rounded-lg  justify-center items-center`}>
                {open && (
                    <div className={`absolute flex justify-center items-center w-8 h-8 top-1 right-1 ${classes?.bgHoverCloseButton} hover:bg-opacity-10  rounded-full cursor-pointer text-2xl `}>
                        <IoIosClose className={`w-full h-full text-opacity-70 ${classes?.textColor}`} />
                    </div>
                )}
                <MdLanguage size={38} className={`${classes?.textIconColor}`} />
                {open && language === "eng" && (
                    "Select Language"
                )}
                {open && language === "spa" && (
                    "Seleccionar Idioma"
                )}
                {open && (
                    <div className="flex border-t-2 w-full space-y-2  flex-col">
                        <button onClick={() => handleLanguageChange('eng')} className={`${language === 'eng' ? `${classes?.textColorButtonSelected} ${classes?.textColorHoverButttons}` : ''} mt-2 text-left rounded px-2 cursor-pointer py-0.5 ${classes?.hoverButtonColor}`}>1. English</button>
                        <button onClick={() => handleLanguageChange('spa')} className={`${language === 'spa' ? `${classes?.textColorButtonSelected} ${classes?.textColorHoverButttons}` : ''} px-2 text-left rounded py-0.5 cursor-pointer ${classes?.hoverButtonColor}`}>2. Español</button>
                    </div>
                )}
            </div>
        </button>
    );
}
