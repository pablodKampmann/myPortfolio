import { SiVorondesign } from "react-icons/si";
import Link from "next/link";
import { usePathname } from 'next/navigation'
import React, { useState, useEffect } from 'react';
import { MdOutlineCancel } from "react-icons/md";
import { LuGithub } from "react-icons/lu";
import { TbFileCv } from "react-icons/tb";
import { BsCloudDownload } from "react-icons/bs";
import { GoSidebarExpand, GoSidebarCollapse } from "react-icons/go";

interface NavBarProps {
    tone: string;
    language: string;
    colorMain: string;
    handleColorChange: (language: string) => void;
}

export default function MobileVersion({ tone, language, colorMain, handleColorChange }: NavBarProps) {
    const pathname = usePathname();
    const [showOptions, setShowOptions] = useState(false);

    //LANGUAGE
    const languageTexts = {
        eng: {
            about: "About me",
            work: "My work",
            technologies: "Technologies",
            repo: "This repository",
            select_the: "Select the",
            color: "COLOR",
            tatata: "interface primary",
            title_sideBar: "Portfolio",
        },
        spa: {
            about: "Acerca de mi",
            work: "Mi trabajo",
            technologies: "Tecnologías",
            repo: "Este repositorio",
            select_the: "Seleccione el",
            color: "COLOR",
            tatata: "primario de la interfaz",
            title_sideBar: "Portafolio",
        }
    };

    let texts;
    if (language === "eng") {
        texts = languageTexts.eng;
    } else if (language === "spa") {
        texts = languageTexts.spa;
    }

    //TONE
    const [classesTones, setClassesTones] = useState<any>(null);

    useEffect(() => {
        const updateClassesTones = () => {
            let borderColor = '';
            let textIcon = '';
            let bgPageSelected = '';
            let textColorNumber = '';
            let hoverButtton = '';

            switch (colorMain) {
                case 'emerald':
                    borderColor = tone === 'dark' ? "border-emerald-600" : "border-emerald-600";
                    textIcon = tone === 'dark' ? "text-emerald-600" : "text-emerald-600";
                    bgPageSelected = tone === 'dark' ? "bg-emerald-600" : "bg-emerald-600";
                    textColorNumber = tone === 'dark' ? "text-emerald-600" : "text-emerald-600";
                    hoverButtton = tone === 'dark' ? "hover:bg-emerald-600" : "hover:bg-emerald-600";
                    break;
                case 'rose':
                    borderColor = tone === 'dark' ? "border-rose-600" : "border-rose-600";
                    textIcon = tone === 'dark' ? "text-rose-600" : "text-rose-600";
                    bgPageSelected = tone === 'dark' ? "bg-rose-600" : "bg-rose-600";
                    textColorNumber = tone === 'dark' ? "text-rose-600" : "text-rose-600";
                    hoverButtton = tone === 'dark' ? "hover:bg-rose-600" : "hover:bg-rose-600";
                    break;
                case 'blue':
                    borderColor = tone === 'dark' ? "border-blue-600" : "border-blue-600";
                    textIcon = tone === 'dark' ? "text-blue-600" : "text-blue-600";
                    bgPageSelected = tone === 'dark' ? "bg-blue-600" : "bg-blue-600";
                    textColorNumber = tone === 'dark' ? "text-blue-600" : "text-blue-600";
                    hoverButtton = tone === 'dark' ? "hover:bg-blue-600" : "hover:bg-blue-600";
                    break;
                case 'yellow':
                    borderColor = tone === 'dark' ? "border-yellow-600" : "border-yellow-600";
                    textIcon = tone === 'dark' ? "text-yellow-600" : "text-yellow-600";
                    bgPageSelected = tone === 'dark' ? "bg-yellow-600" : "bg-yellow-600";
                    textColorNumber = tone === 'dark' ? "text-yellow-600" : "text-yellow-600";
                    hoverButtton = tone === 'dark' ? "hover:bg-yellow-600" : "hover:bg-yellow-600";
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
                    borderColor: borderColor,
                    textIcon: textIcon,
                    bgColorButtons: "bg-white",
                    bgPageSelected: bgPageSelected,
                    textColorNumber: textColorNumber,
                    hoverButtton: hoverButtton,
                    bgColorShowOptions: "bg-[#090D1F]",
                    bgOpacityShowOptions: "bg-opacity-100",
                    borderColorColourSelected: "border-white",
                    borderOpacityColourSelected: "border-opacity-100",
                    textOpacityIconShowOptions: "text-opacity-100",
                    hoverBgColorIcon: "hover:bg-white",
                    hoverBgOpacityIcon: "hover:bg-opacity-10",
                    bgOpacityButtons: "bg-opacity-[4%]",
                },
                light: {
                    bgMain: "bg-white",
                    bgMainOpacity: "bg-opacity-100",
                    textMain: "text-black",
                    bgOpacityButtonPressed: "bg-opacity-20",
                    bgOpacityHoverButtons: "hover:bg-opacity-20",
                    borderColor: borderColor,
                    textIcon: textIcon,
                    bgColorButtons: "bg-black",
                    bgPageSelected: bgPageSelected,
                    textColorNumber: textColorNumber,
                    hoverButtton: hoverButtton,
                    bgColorShowOptions: "bg-white",
                    bgOpacityShowOptions: "bg-opacity-100",
                    borderColorColourSelected: "border-black",
                    borderOpacityColourSelected: "border-opacity-60",
                    textOpacityIconShowOptions: "text-opacity-70",
                    hoverBgColorIcon: "hover:bg-black",
                    hoverBgOpacityIcon: "hover:bg-opacity-10",
                    bgOpacityButtons: "bg-opacity-[8%]",
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

    //COLORS OPTIONS
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

            // Apagar el fondo después de 300 ms
            setTimeout(() => {
                setIsVisible(false);
            }, 1600); // Duración del "encendido"

        }, 6000); // Intervalo de titileo

        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        console.log(isVisible);

    }, [isVisible]);

    //USER INTERACTION
    const [openSideBar, setOpenSideBar] = useState(false);

    return (
        <div className="relative">
            {/* Background overlay */}
            <div
                onClick={() => setOpenSideBar(false)}
                className={`fixed inset-0 bg-black bg-opacity-70 z-40 transition-opacity duration-300 ${openSideBar ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
            ></div>

            {/* Sidebar */}
            <div
                className={`${classes?.bgMain} ${classes?.textMain} fixed border-l-2 ${classes?.borderColor} top-0 right-0 w-[70%] h-screen z-50 transition-transform duration-300 transform ${openSideBar ? 'translate-x-0' : 'translate-x-full'}`}
            >
                <div className={`${classes?.textMain} flex border-b-2 h-16  ${classes?.borderColor} space-x-4 p-2 justify-start items-center  `}>
                    <button onClick={() => setOpenSideBar(!openSideBar)} className={`${classes?.hoverBgColorIcon} p-2 rounded-full hover:bg-opacity-10 absolute left-4 top-2 `} >
                        <GoSidebarCollapse className={`${classes?.textColorNumber}`} size={30} />
                    </button>
                    <h1 className="flex justify-center uppercase font-semibold text-xl tracking-wide w-full">{texts?.title_sideBar}</h1>
                </div>
                <div className="p-4 space-y-4 h-screen">
                    <Link href={'/'} onClick={() => setOpenSideBar(false)} prefetch={true}>
                        <div
                            className={`${pathname === '/' ? `${classes?.bgPageSelected} ${classes?.bgOpacityButtonPressed}` : `${classes?.bgOpacityHoverButtons} ${classes?.bgColorButtons} ${classes?.bgOpacityButtons}`} cursor-pointer font-medium focus:outline-none mb-4 py-2 px-3 rounded-xl transition duration-150 w-full whitespace-nowrap`}
                        >
                            <span className={classes?.textColorNumber}>01. </span>{texts?.about}
                        </div>
                    </Link>
                    <Link href={'/work'} onClick={() => setOpenSideBar(false)} prefetch={true}>
                        <div
                            className={`${pathname === '/work' ? `${classes?.bgPageSelected} ${classes?.bgOpacityButtonPressed}` : `${classes?.bgOpacityHoverButtons} ${classes?.bgColorButtons} ${classes?.bgOpacityButtons}`} cursor-pointer font-medium tracking-wider focus:outline-none mb-4 py-2 px-3 rounded-xl transition duration-150 w-full whitespace-nowrap`}
                        >
                            <span className={classes?.textColorNumber}>02. </span>{texts?.work}
                        </div>
                    </Link>
                    <Link href={'/tech'} onClick={() => setOpenSideBar(false)} prefetch={true}>
                        <div
                            className={`${pathname === '/tech' ? `${classes?.bgPageSelected} ${classes?.bgOpacityButtonPressed}` : `${classes?.bgOpacityHoverButtons} ${classes?.bgColorButtons} ${classes?.bgOpacityButtons}`} cursor-pointer font-medium focus:outline-none mb-4 py-2 px-3 rounded-xl transition duration-150 w-full whitespace-nowrap`}
                        >
                            <span className={classes?.textColorNumber}>03. </span>{texts?.technologies}
                        </div>
                    </Link>
                    <div
                        className={`bg-transparent uppercase font-semibold whitespace-nowrap tracking-widest border-2 ${classes?.textColorNumber} hover:border-white ${classes?.hoverButton} hover:bg-opacity-70 hover:text-white transition duration-150 cursor-pointer flex justify-center items-center ${classes?.borderColor} rounded-md py-1 px-3`}
                    >
                        {texts?.repo}
                        <LuGithub className="ml-2" size={34} />
                    </div>

                    <div
                        className={`bg-transparent group relative uppercase font-semibold whitespace-nowrap tracking-widest border-2 ${classes?.textColorNumber} hover:border-white ${classes?.hoverButton} hover:bg-opacity-70 hover:text-white transition duration-150 cursor-pointer flex justify-center items-center ${classes?.borderColor} rounded-md py-1 px-3`}
                    >
                        <TbFileCv className="opacity-100 group-hover:opacity-0" size={34} />
                        <BsCloudDownload className="absolute opacity-0 group-hover:opacity-100" size={34} />
                    </div>
                </div>
            </div>

            {/* Navbar */}
            <div className={`w-full flex z-20 fixed top-0 left-0 right-0 justify-between items-center ${classes?.bgMain} border-b-2 ${openSideBar ? `border-transparent` : `${classes?.borderColor}`}  transition select-none duration-200 ${classes?.bgMainOpacity} h-16`}>
                <div className="ml-4 flex justify-center items-center">
                    {showCancelButton ? (
                        <div className={`cursor-pointer  ${classes?.hoverBgColorIcon} ${classes?.hoverBgOpacityIcon} transition animate-[spin_0.5s_ease-out] duration-300 p-1 rounded-full`}>
                            <MdOutlineCancel onClick={() => { setShowOptions(false); setShowCancelButton(false) }} size={40} className={`${classes?.textIcon} `} />
                        </div>
                    ) : (
                        <div className={`cursor-pointer ${isVisible ? `${classes?.bgColorButtons} bg-opacity-10` : 'bg-transparent'} ${classes?.hoverBgColorIcon} ${classes?.hoverBgOpacityIcon} transition duration-300  p-1 rounded-full`}>
                            <SiVorondesign onClick={() => setIsClick(true)} size={40} className={`${classes?.textIcon} ${isClick ? '' : 'animate-[spin_5s_ease-in-out_infinite]  '}  `} />
                        </div>
                    )}

                        <div
                            onClick={() => { setShowOptions(false); setShowCancelButton(false); }}
                            className={`border-2 ${classes?.borderColor} duration-300 transform transition-all ${showOptions ? 'translate-x-0' : '-translate-x-full opacity-0'} absolute top-[120%] left-[1%] w-[130px] h-[175px] flex flex-col justify-center items-center ${classes?.bgColorShowOptions} ${classes?.bgOpacityShowOptions} shadow-2xl rounded-xl`}
                        >
                            <h1 className={`text-xs font-medium -tracking-tighter ${classes?.textMain} mb-2.5 w-[80%] text-balance text-center`}>
                                {texts?.select_the} <span className={`${classes?.textIcon} font-semibold text-sm`}>{texts?.color}</span> {texts?.tatata}
                            </h1>
                            <div className="flex flex-col justify-center space-y-2 items-center">
                                <div className="flex justify-center items-center space-x-4">
                                    <button onClick={() => { handleColorChange('emerald'); setShowOptions(false); setShowCancelButton(false); }} className={`${colorMain === 'emerald' ? `w-8 h-8 ${classes?.borderOpacityColourSelected} ${classes?.borderColorColourSelected}` : 'w-8 h-8 hover:scale-125 border-transparent transition duration-150'} bg-emerald-600 border-2 transition duration-200 shadow-2xl rounded-full`}></button>
                                    <button onClick={() => { handleColorChange('rose'); setShowOptions(false); setShowCancelButton(false); }} className={`${colorMain === 'rose' ? `w-8 h-8 ${classes?.borderOpacityColourSelected} ${classes?.borderColorColourSelected}` : 'w-8 h-8 hover:scale-125 border-transparent transition duration-150'} bg-rose-600 border-2 transition duration-200 shadow-2xl rounded-full`}></button>
                                </div>
                                <div className="flex justify-center items-center space-x-4">
                                    <button onClick={() => { handleColorChange('blue'); setShowOptions(false); setShowCancelButton(false); }} className={`${colorMain === 'blue' ? `w-8 h-8 ${classes?.borderOpacityColourSelected} ${classes?.borderColorColourSelected}` : 'w-8 h-8 border-transparent hover:scale-125 transition duration-150'} bg-blue-600 border-2 transition duration-200 shadow-2xl rounded-full`}></button>
                                    <button onClick={() => { handleColorChange('yellow'); setShowOptions(false); setShowCancelButton(false); }} className={`${colorMain === 'yellow' ? `w-8 h-8 ${classes?.borderOpacityColourSelected} ${classes?.borderColorColourSelected}` : 'w-8 h-8 border-transparent hover:scale-125 transition duration-150'} bg-yellow-600 border-2 transition duration-200 shadow-2xl rounded-full`}></button>
                                </div>
                            </div>
                        </div>

                </div>

                <div className={`${classes?.textMain} flex space-x-4  justify-end items-center mr-4`}>
                    <button onClick={() => setOpenSideBar(!openSideBar)} className={`${classes?.hoverBgColorIcon} p-2 rounded-full hover:bg-opacity-10`}>
                        <GoSidebarExpand className={`${classes?.textColorNumber}`} size={30} />
                    </button>
                </div>
            </div>
        </div>
    );

}
