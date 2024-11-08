"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { MdDesignServices } from "react-icons/md";
import { GrDeploy } from "react-icons/gr";
import { FaGithub } from "react-icons/fa";
import { languageTexts } from "./languageTexts";

export default function WorkMobileVersion() {
    //LISTENER DEL LOCALSTORAGE
    useEffect(() => {
        const handleItemChange = () => {
            const storedLanguage = localStorage.getItem("language");
            if (storedLanguage) {
                setLanguage(storedLanguage);
            }
            const storedTone = localStorage.getItem("tone");
            if (storedTone) {
                console.log(storedTone);

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
            let bgColorTitle = "";
            let textColorSubTitle = "";
            let textColorLinks = "";
            let textColorHoverLinks = "";
            let borderColorProjectsCont = "";

            switch (colorMain) {
                case "emerald":
                    document.documentElement.style.setProperty(
                        "--scrollbar-color",
                        "#059669",
                    );
                    bgColorTitle = tone === "dark" ? "bg-emerald-600" : "bg-emerald-600";
                    textColorSubTitle =
                        tone === "dark" ? "text-emerald-800" : "text-emerald-800";
                    textColorLinks =
                        tone === "dark" ? "text-emerald-500" : "text-emerald-500";
                    textColorHoverLinks =
                        tone === "dark"
                            ? "hover:text-emerald-400"
                            : "hover:text-emerald-400";
                    borderColorProjectsCont =
                        tone === "dark" ? "border-emerald-950" : "border-emerald-950";

                    break;
                case "rose":
                    document.documentElement.style.setProperty(
                        "--scrollbar-color",
                        "#e11d48",
                    );
                    bgColorTitle = tone === "dark" ? "bg-rose-600" : "bg-rose-600";
                    textColorSubTitle =
                        tone === "dark" ? "text-rose-800" : "text-rose-800";
                    textColorLinks = tone === "dark" ? "text-rose-500" : "text-rose-500";
                    textColorHoverLinks =
                        tone === "dark" ? "hover:text-rose-400" : "hover:text-rose-400";
                    borderColorProjectsCont =
                        tone === "dark" ? "border-rose-950" : "border-rose-950";
                    break;
                case "blue":
                    document.documentElement.style.setProperty(
                        "--scrollbar-color",
                        "#2563eb",
                    );
                    bgColorTitle = tone === "dark" ? "bg-blue-600" : "bg-blue-600";
                    textColorSubTitle =
                        tone === "dark" ? "text-blue-800" : "text-blue-800";
                    textColorLinks = tone === "dark" ? "text-blue-500" : "text-blue-500";
                    textColorHoverLinks =
                        tone === "dark" ? "hover:text-blue-400" : "hover:text-blue-400";
                    borderColorProjectsCont =
                        tone === "dark" ? "border-blue-950" : "border-blue-950";
                    break;
                case "yellow":
                    document.documentElement.style.setProperty(
                        "--scrollbar-color",
                        "#eab308",
                    );
                    bgColorTitle = tone === "dark" ? "bg-yellow-600" : "bg-yellow-600";
                    textColorSubTitle =
                        tone === "dark" ? "text-yellow-800" : "text-yellow-800";
                    textColorLinks =
                        tone === "dark" ? "text-yellow-500" : "text-yellow-500";
                    textColorHoverLinks =
                        tone === "dark" ? "hover:text-yellow-400" : "hover:text-yellow-400";
                    borderColorProjectsCont =
                        tone === "dark" ? "border-yellow-950" : "border-yellow-950";
                    break;
                default:
                    break;
            }

            setClassesTones({
                dark: {
                    textColorMain: "text-white",
                    borderColorProjectsCont: borderColorProjectsCont,
                    bgColorProjectsCont: "bg-blue-950",
                    bgOpacityProjectsCont: "bg-opacity-20",
                    bgHoverColorProject: "hover:bg-blue-950",
                    bgHoverOpacityProject: "hover:bg-opacity-20",
                    borderHoverColorProject: "border-white",
                    borderHoverOpacityProject: "border-opacity-10",
                    bgOpacityLinks: "bg-opacity-10",
                    opacityImages: "opacity-50",
                    bgOpacityLoaderImage: "bg-opacity-10",
                    textColorLinks: textColorLinks,
                    textColorHoverLinks: textColorHoverLinks,
                    bgColorTitle: bgColorTitle,
                    textColorSubTitle: textColorSubTitle,
                },
                light: {
                    textColorMain: "text-black",
                    borderColorProjectsCont: "border-gray-400",
                    bgColorProjectsCont: "bg-white",
                    bgOpacityProjectsCont: "bg-opacity-90",
                    bgHoverColorProject: "hover:bg-gray-300",
                    bgHoverOpacityProject: "hover:bg-opacity-30",
                    borderHoverColorProject: "border-gray-950",
                    borderHoverOpacityProject: "border-opacity-30",
                    bgOpacityLinks: "bg-opacity-100",
                    opacityImages: "opacity-70",
                    bgOpacityLoaderImage: "bg-opacity-100",
                    textColorLinks: textColorLinks,
                    textColorHoverLinks: textColorHoverLinks,
                    bgColorTitle: bgColorTitle,
                    textColorSubTitle: textColorSubTitle,
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

    //IMAGES HANDLER LOADING
    const [imageIsLoad, setImageIsLoad] = useState(false);
    const imageBlur =
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP8XwMAAoABfYJLKisAAAAASUVORK5CYII=";

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            setImageIsLoad(true);
        }, 500);

        return () => clearTimeout(timeoutId);
    }, []);

    //Mobile Function
    const [inViewStates, setInViewStates] = useState([false, false, false, false, false]);
    const imageRefs = [useRef(null), useRef(null), useRef(null), useRef(null), useRef(null)];

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    const index = imageRefs.findIndex(ref => ref.current === entry.target);
                    if (index !== -1) {
                        setInViewStates(prev => {
                            const newState = [...prev];
                            newState[index] = entry.isIntersecting;
                            return newState;
                        });
                    }
                });
            },
            { threshold: 0.5 }
        );

        imageRefs.forEach((ref) => {
            if (ref.current) observer.observe(ref.current);
        });

        return () => {
            imageRefs.forEach((ref) => {
                if (ref.current) observer.unobserve(ref.current);
            });
        };
    }, []);

    return (
        <div
            className={`${classes?.textColorMain} flex flex-col justify-center items-center h-full pb-[4%]`}
        >
            <div
                className={`${classes?.bgColorTitle}  font-normal border-r-4 border-b-4   flex  ${classes?.borderColorProjectsCont} justify-center px-2 py-1.5  rounded-2xl shadow-2xl mb-4 items-center text-left text-2xl    `}
            >
                {texts?.title}{" "}
                <MdDesignServices size={30}
                    className={`ml-2 ${tone === "light" && "bg-white"} bg-opacity-90 p-1 rounded-full `}
                />
            </div>
            <div
                className={`flex h-[65%]   relative  ${classes?.bgColorProjectsCont} ${classes?.bgOpacityProjectsCont} rounded-2xl hover:rounded-2xl w-[90%]  shadow-2xl text-lg justify-center items-center `}
            >
                <div className="overflow-y-auto bg-transparent  overflow-x-hidden flex flex-col h-full ">
                    <div className="">
                        {/* 1 */}
                        <div
                            className={`flex flex-col relative group 	 transition  duration-100 justify-center    border-b   ${classes?.borderHoverColorProject} ${classes?.borderHoverOpacityProject} p-6  transition-all transform duration-500 items-center`}
                        >
                            <div className="font-bold mr-auto text-sm w-[100%] ">
                                Dental Agenda{" "}
                                <span className={`${classes?.textColorSubTitle}`}>
                                    ({texts?.category_1})
                                </span>
                                <p className="w-full text-balance font-normal text-left">
                                    {texts?.info_1}
                                </p>
                            </div>
                            <Image
                                ref={imageRefs[0]}
                                placeholder="blur"
                                blurDataURL={imageBlur}
                                onLoad={() => setImageIsLoad(true)}
                                className={` my-6 rounded-lg shadow-2xl  ${inViewStates[0] ? 'scale-110 opacity-100' : `${classes?.opacityImages}`} trasform transition-all duration-700 w-[90%] h-auto`}
                                quality={100}
                                width={1919}
                                height={917}
                                priority={true}
                                src="/dentalAgenda-image.png"
                                alt="dentalAgenda-image"
                            />
                            <div
                                className={`bg-white ${tone === 'light' && 'border'} w-fit mr-auto px-3 py-2  rounded-lg shadow-2xl ${classes?.bgOpacityLinks}`}
                            >
                                <h2 className="flex justify-start items-center ">
                                    Deploy <GrDeploy className="ml-2" />
                                </h2>
                                <button
                                    onClick={() =>
                                        window.open("https://dental-agenda.vercel.app/", "_blank")
                                    }
                                    className={`${classes?.textColorLinks} ${classes?.textColorHoverLinks} text-xs cursor-pointer tracking-tighter	break-normal text-left transition duration-300 `}
                                >
                                    https://dental-agenda.vercel.app/
                                </button>
                            </div>
                            <div
                                className={`bg-white ${tone === 'light' && 'border'} mr-auto w-fit px-3 py-2 mt-4 rounded-lg shadow-2xl ${classes?.bgOpacityLinks}`}
                            >
                                <h2 className="flex justify-start items-center">
                                    Repo <FaGithub className="ml-2" />
                                </h2>
                                <button
                                    onClick={() =>
                                        window.open(
                                            "https://github.com/pablodKampmann/dental-agenda",
                                            "_blank",
                                        )
                                    }
                                    className={`${classes?.textColorLinks} ${classes?.textColorHoverLinks} text-xs cursor-pointer tracking-tighter	break-normal text-left transition duration-300 `}
                                >
                                    https://github.com/pablodKampmann/dental-agenda
                                </button>
                            </div>
                        </div>
                        {/* 2 */}
                        <div
                            className={`flex flex-col relative group 	 transition  duration-100 justify-center   border-b border-t  ${classes?.borderHoverColorProject} ${classes?.borderHoverOpacityProject} p-6  transition-all transform duration-500 items-center`}
                        >
                            <div className="font-bold mr-auto text-sm w-[100%] ">
                                My RoomMate App{" "}
                                <span className={`${classes?.textColorSubTitle}`}>
                                    ({texts?.category_1} & {texts?.category_2})
                                </span>
                                <p className="w-full text-balance font-normal text-left">
                                    {texts?.info_2}
                                </p>
                            </div>
                            <Image
                                ref={imageRefs[1]}
                                placeholder="blur"
                                blurDataURL={imageBlur}
                                onLoad={() => setImageIsLoad(true)}
                                className={` my-6 rounded-lg  shadow-2xl  ${inViewStates[1] ? 'scale-110 opacity-100' : `${classes?.opacityImages}`} trasform transition-all duration-700 w-[90%] h-auto`}
                                quality={100}
                                width={1920}
                                height={1080}
                                priority={true}
                                src="/MyRoomMate-image.png"
                                alt="MyRoomMate-image"
                            />
                            <div
                                className={`bg-white ${tone === 'light' && 'border'} w-fit mr-auto px-3 py-2  rounded-lg shadow-2xl ${classes?.bgOpacityLinks}`}
                            >
                                <h2 className="flex justify-start items-center ">
                                    Deploy <GrDeploy className="ml-2" />
                                </h2>
                                <button
                                    onClick={() =>
                                        window.open("https://myroommate.vercel.app/", "_blank")
                                    }
                                    className={`${classes?.textColorLinks} ${classes?.textColorHoverLinks} text-xs cursor-pointer tracking-tighter	break-normal text-left transition duration-300 `}
                                >
                                    https://myroommate.vercel.app/
                                </button>
                            </div>
                            <div
                                className={`bg-white ${tone === 'light' && 'border'} mr-auto w-fit px-3 py-2 mt-4 rounded-lg shadow-2xl ${classes?.bgOpacityLinks}`}
                            >
                                <h2 className="flex justify-start items-center">
                                    Repo <FaGithub className="ml-2" />
                                </h2>
                                <button
                                    onClick={() =>
                                        window.open(
                                            "https://github.com/pablodKampmann/myRoomMate-Copy",
                                            "_blank",
                                        )
                                    }
                                    className={`${classes?.textColorLinks} ${classes?.textColorHoverLinks} text-xs cursor-pointer tracking-tighter	break-normal text-left transition duration-300 `}
                                >
                                    https://github.com/pablodKampmann/myRoomMate-Copy
                                </button>
                            </div>
                        </div>
                        {/* 3 */}
                        <div
                            className={`flex flex-col relative group 	 transition  duration-100 justify-center   border-b border-t  ${classes?.borderHoverColorProject} ${classes?.borderHoverOpacityProject} p-6  transition-all transform duration-500 items-center`}
                        >
                            <div className="font-bold mr-auto text-sm w-[100%] ">
                                Clients On The Map{" "}
                                <span className={`${classes?.textColorSubTitle}`}>
                                    ({texts?.category_1} & {texts?.category_2})
                                </span>
                                <p className="w-full text-balance font-normal text-left">
                                    {texts?.info_5}
                                </p>
                            </div>
                            <Image
                                ref={imageRefs[2]}
                                placeholder="blur"
                                blurDataURL={imageBlur}
                                onLoad={() => setImageIsLoad(true)}
                                className={` my-6 rounded-lg  shadow-2xl  ${inViewStates[2] ? 'scale-110 opacity-100' : `${classes?.opacityImages}`} trasform transition-all duration-700 w-[90%] h-auto`}
                                quality={100}
                                width={1919}
                                height={918}
                                priority={true}
                                src="/ClientsOnTheMap-image.png"
                                alt="ClientsOnTheMap-image"
                            />
                            <div
                                className={`bg-white ${tone === 'light' && 'border'} w-fit mr-auto px-3 py-2  rounded-lg shadow-2xl ${classes?.bgOpacityLinks}`}
                            >
                                <h2 className="flex justify-start items-center ">
                                    Deploy <GrDeploy className="ml-2" />
                                </h2>
                                <button
                                    className={`${classes?.textColorLinks} ${classes?.textColorHoverLinks} text-xs cursor-pointer tracking-tighter	break-normal text-left transition duration-300 `}
                                >
                                    https://clients-on-the-map.vercel.app/
                                </button>
                            </div>
                            <div
                                className={`bg-white ${tone === 'light' && 'border'} mr-auto w-fit px-3 py-2 mt-4 rounded-lg shadow-2xl ${classes?.bgOpacityLinks}`}
                            >
                                <h2 className="flex justify-start items-center">
                                    Repo <FaGithub className="ml-2" />
                                </h2>
                                <button
                                    className={`${classes?.textColorLinks} ${classes?.textColorHoverLinks} text-xs cursor-pointer tracking-tighter	break-normal text-left transition duration-300 `}
                                >
                                    https://github.com/pablodKampmann/clients-on-the-map
                                </button>
                            </div>
                        </div>
                        {/* 4 */}
                        <div
                            className={`flex flex-col relative group 	 transition  duration-100 justify-center  border-b border-t  ${classes?.borderHoverColorProject} ${classes?.borderHoverOpacityProject} p-6  transition-all transform duration-500 items-center`}
                        >
                            <div className="font-bold mr-auto text-sm w-[100%] ">
                                Login & Register Template{" "}
                                <span className={`${classes?.textColorSubTitle}`}>
                                    ({texts?.category_1} & {texts?.category_2})
                                </span>
                                <p className="w-full text-balance font-normal text-left">
                                    {texts?.info_4}
                                </p>
                            </div>
                            <Image
                                ref={imageRefs[3]}
                                placeholder="blur"
                                blurDataURL={imageBlur}
                                onLoad={() => setImageIsLoad(true)}
                                className={` my-6 rounded-lg  shadow-2xl  ${inViewStates[3] ? 'scale-110 opacity-100' : `${classes?.opacityImages}`} trasform transition-all duration-700 w-[90%] h-auto`}
                                quality={100}
                                width={1919}
                                height={918}
                                priority={true}
                                src="/loginAndRegister-image.png"
                                alt="loginAndRegister-image"
                            />
                            <div
                                className={`bg-white ${tone === 'light' && 'border'} w-fit mr-auto px-3 py-2  rounded-lg shadow-2xl ${classes?.bgOpacityLinks}`}
                            >
                                <h2 className="flex justify-start items-center ">
                                    Deploy <GrDeploy className="ml-2" />
                                </h2>
                                <button
                                    onClick={() =>
                                        window.open(
                                            "https://login-register-template.vercel.app/login",
                                            "_blank",
                                        )
                                    }
                                    className={`${classes?.textColorLinks} ${classes?.textColorHoverLinks} text-xs cursor-pointer tracking-tighter	break-normal text-left transition duration-300 `}
                                >
                                    https://login-register-template.vercel.app/login
                                </button>
                            </div>
                            <div
                                className={`bg-white ${tone === 'light' && 'border'} mr-auto w-fit px-3 py-2 mt-4 rounded-lg shadow-2xl ${classes?.bgOpacityLinks}`}
                            >
                                <h2 className="flex justify-start items-center">
                                    Repo <FaGithub className="ml-2" />
                                </h2>
                                <button
                                    onClick={() =>
                                        window.open(
                                            "https://github.com/pablodKampmann/login-register-template",
                                            "_blank",
                                        )
                                    }
                                    className={`${classes?.textColorLinks} ${classes?.textColorHoverLinks} text-xs cursor-pointer tracking-tighter	break-normal text-left transition duration-300 `}
                                >
                                    https://github.com/pablodKampmann/login-register-template
                                </button>
                            </div>
                        </div>
                        {/* 5 */}
                        <div
                            className={`flex flex-col relative group 	 transition  duration-100 justify-center  border-t  ${classes?.borderHoverColorProject} ${classes?.borderHoverOpacityProject} p-6  transition-all transform duration-500 items-center`}
                        >
                            <div className="font-bold mr-auto text-sm w-[100%] ">
                                YouTube Music CLONE{" "}
                                <span className={`${classes?.textColorSubTitle}`}>
                                    ({texts?.category_1})
                                </span>
                                <p className="w-full text-balance font-normal text-left">
                                    {texts?.info_3}
                                </p>
                            </div>
                            <Image
                                ref={imageRefs[4]}
                                placeholder="blur"
                                blurDataURL={imageBlur}
                                onLoad={() => setImageIsLoad(true)}
                                className={` my-6 rounded-lg  shadow-2xl  ${inViewStates[4] ? 'scale-110 opacity-100' : `${classes?.opacityImages}`} trasform transition-all duration-700 w-[90%] h-auto`}
                                quality={100}
                                width={1919}
                                height={917}
                                priority={true}
                                src="/youtubeMusic-image.png"
                                alt="youtubeMusic-image"
                            />
                            <div
                                className={`bg-white ${tone === 'light' && 'border'} w-fit mr-auto px-3 py-2  rounded-lg shadow-2xl ${classes?.bgOpacityLinks}`}
                            >
                                <h2 className="flex justify-start items-center ">
                                    Deploy <GrDeploy className="ml-2" />
                                </h2>
                                <button
                                    onClick={() =>
                                        window.open(
                                            "https://youtubemusic-clone.vercel.app/",
                                            "_blank",
                                        )
                                    }
                                    className={`${classes?.textColorLinks} ${classes?.textColorHoverLinks} text-xs cursor-pointer tracking-tighter	break-normal text-left transition duration-300 `}
                                >
                                    https://youtubemusic-clone.vercel.app/
                                </button>
                            </div>
                            <div
                                className={`bg-white ${tone === 'light' && 'border'} mr-auto w-fit px-3 py-2 mt-4 rounded-lg shadow-2xl ${classes?.bgOpacityLinks}`}
                            >
                                <h2 className="flex justify-start items-center">
                                    Repo <FaGithub className="ml-2" />
                                </h2>
                                <button
                                    onClick={() =>
                                        window.open(
                                            "https://github.com/pablodKampmann/youTubeMusic-Clone",
                                            "_blank",
                                        )
                                    }
                                    className={`${classes?.textColorLinks} ${classes?.textColorHoverLinks} text-xs cursor-pointer tracking-tighter	break-normal text-left transition duration-300 `}
                                >
                                    https://github.com/pablodKampmann/-youTubeMusic-Clone
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
