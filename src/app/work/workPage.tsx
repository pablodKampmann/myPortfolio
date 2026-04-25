"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { MdDesignServices } from "react-icons/md";
import { GrDeploy } from "react-icons/gr";
import RiseLoader from "react-spinners/RiseLoader";
import { languageTexts } from "./languageTexts";
import { useTheme } from "../context/ThemeContext";
import { HiSquare3Stack3D } from "react-icons/hi2";
import { MdScreenshotMonitor } from "react-icons/md";

import { LOADER_COLOR, SCROLLBAR_COLOR, getColorClasses } from "../lib/themeClasses";

function computeClasses(colorMain: string) {
    const c = getColorClasses(colorMain);
    return {
        dark: {
            textColorMain: "text-white",
            borderColorProjectsCont: c.border950,
            bgColorProjectsCont: "bg-white",
            bgOpacityProjectsCont: "bg-opacity-10",
            bgHoverColorProject: "hover:bg-white",
            bgHoverOpacityProject: "hover:bg-opacity-10",
            borderHoverColorProject: "hover:border-white",
            borderHoverOpacityProject: "hover:border-opacity-10",
            bgColorLinks: "bg-white",
            bgOpacityLinks: "bg-opacity-10",
            opacityImages: "opacity-50",
            bgOpacityLoaderImage: "bg-opacity-10",
            textColorLinks: c.text500,
            textColorHoverLinks: c.hoverText400,
            bgColorTitle: c.bg600,
            textColorSubTitle: c.text800,
            bgColorLoaderImage: "bg-white",
        },
        light: {
            textColorMain: "text-black",
            borderColorProjectsCont: "border-gray-400",
            bgColorProjectsCont: "bg-white",
            bgOpacityProjectsCont: "bg-opacity-90",
            bgHoverColorProject: "hover:bg-gray-300",
            bgHoverOpacityProject: "hover:bg-opacity-30",
            borderHoverColorProject: "hover:border-gray-950",
            borderHoverOpacityProject: "hover:border-opacity-30",
            bgColorLinks: "bg-black",
            bgOpacityLinks: "bg-opacity-10",
            opacityImages: "opacity-70",
            bgOpacityLoaderImage: "bg-opacity-70",
            textColorLinks: c.text500,
            textColorHoverLinks: c.hoverText400,
            bgColorTitle: c.bg600,
            textColorSubTitle: c.text800,
            bgColorLoaderImage: "bg-gray-300",
        },
    };
}

// ─── Project data ──────────────────────────────────────────────────────────────
type ProjectDef = {
    title: string;
    subtitle: string;
    info: string;
    deployUrl: string | null;
    src: string;
    width: number;
    height: number;
    imageLeft: boolean;
    hasLoader: boolean;
    textWidth: string;
    stack: string[];
    devices: string[];
};

// ─── Component ─────────────────────────────────────────────────────────────────
export default function WorkPage() {
    const { tone, colorMain, language } = useTheme();

    const classesTones = computeClasses(colorMain);
    const classes = tone === "dark" ? classesTones.dark : classesTones.light;

    useEffect(() => {
        document.documentElement.style.setProperty(
            "--scrollbar-color",
            SCROLLBAR_COLOR[colorMain] ?? "#059669",
        );
    }, [colorMain]);

    const texts = language === "eng" ? languageTexts.eng : languageTexts.spa;

    const [imagesLoaded, setImagesLoaded] = useState<boolean[]>([false, false, false, false, false]);

    const [inViewStates, setInViewStates] = useState([false, false, false, false, false]);
    const imageRefs = useRef<(HTMLImageElement | null)[]>([]);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    const idx = imageRefs.current.findIndex((r) => r === entry.target);
                    if (idx !== -1) {
                        setInViewStates((prev) => {
                            const next = [...prev];
                            next[idx] = entry.isIntersecting;
                            return next;
                        });
                    }
                });
            },
            { threshold: 0.15 },
        );
        imageRefs.current.forEach((r) => r && observer.observe(r));
        return () => { imageRefs.current.forEach((r) => r && observer.unobserve(r)); };
    }, []);

    const projects: ProjectDef[] = [
        {
            title: "Dental Agenda",
            subtitle: texts.category_1,
            info: texts.info_1,
            deployUrl: "https://dental-agenda.vercel.app/",
            src: "/images/projects/dentalAgenda-image.png",
            width: 1919, height: 917,
            imageLeft: false, hasLoader: false, textWidth: "md:w-[32%]",
            stack: ["Next.js", "Firebase", "TypeScript", "Tailwind", "React"],
            devices: ["Desktop", "Mobile"],
        },
        {
            title: "My RoomMate App",
            subtitle: `${texts.category_1} & ${texts.category_2}`,
            info: texts.info_2,
            deployUrl: "https://myroommate.vercel.app/",
            src: "/images/projects/MyRoomMate-image.png",
            width: 1920, height: 1080,
            imageLeft: true, hasLoader: true, textWidth: "md:w-[32%]",
            stack: ["Astro", "Firebase", "JavaScript", "CSS", "React"],
            devices: ["Desktop", "Mobile"],
        },
        {
            title: "Clients On The Map",
            subtitle: texts.category_1,
            info: texts.info_5,
            deployUrl: null,
            src: "/images/projects/ClientsOnTheMap-image.png",
            width: 1919, height: 918,
            imageLeft: false, hasLoader: false, textWidth: "md:w-[32%]",
            stack: ["Next.js", "Supabase", "TypeScript", "Tailwind", "React"],
            devices: ["Desktop", "Mobile"],
        },
        {
            title: "Login & Register Template",
            subtitle: `${texts.category_1} & ${texts.category_2}`,
            info: texts.info_4,
            deployUrl: "https://login-register-template.vercel.app/login",
            src: "/images/projects/loginAndRegister-image.png",
            width: 1919, height: 918,
            imageLeft: true, hasLoader: true, textWidth: "md:w-[32%]",
            stack: ["Next.js", "TypeScript", "Tailwind", "React"],
            devices: ["Desktop", "Mobile"],
        },
        {
            title: "YouTube Music CLONE",
            subtitle: `${texts.category_1} & ${texts.category_2}`,
            info: texts.info_3,
            deployUrl: "https://youtubemusic-clone.vercel.app/",
            src: "/images/projects/youtubeMusic-image.png",
            width: 1919, height: 914,
            imageLeft: false, hasLoader: true, textWidth: "md:w-[32%]",
            stack: ["Next.js", "TypeScript", "Tailwind", "React"],
            devices: ["Desktop", "Mobile"],
        },
    ];

    const infoBox = (title: string, items: string[], icon: React.ReactNode) => (
        <div className={`${classes?.bgColorLinks} w-fit px-3 py-2 rounded-lg shadow-2xl ${classes?.bgOpacityLinks}`}>
            <h2 className="flex items-center text-sm font-semibold">
                {title} <span className="ml-2">{icon}</span>
            </h2>
            <p className={`${classes?.textColorLinks} text-xs tracking-normal`}>
                {items.join(", ")}
            </p>
        </div>
    );

    return (
        <div className={`${classes?.textColorMain} flex flex-col items-center h-full overflow-y-auto md:overflow-visible md:justify-center pt-16 md:pt-0 pb-6 md:pb-[4%]`}>

            {/* Page title — shared */}
            <div
                className={`${classes?.bgColorTitle} font-normal md:mt-0 mt-8 border-r-4 border-b-4 flex ${classes?.borderColorProjectsCont} justify-center px-2 py-1.5 pb-2 rounded-2xl shadow-2xl mb-4 md:mb-6 xl:mb-8 items-center text-left text-xl sm:text-2xl md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl`}
            >
                {texts.title}{" "}
                <MdDesignServices
                    size={34}
                    className={`ml-2 md:ml-3 lg:ml-4 ${tone === "light" ? "bg-white" : ""} bg-opacity-90 p-1 rounded-full`}
                />
            </div>

            {/* ═══ MOBILE LAYOUT ══════════════════════════════════════════════ */}
            <div className="md:hidden w-full px-4 md:pb-8 pb-14 space-y-5">
                {projects.map((p, i) => (
                    <div
                        key={p.title}
                        className={`${classes?.bgColorLinks} ${classes?.bgOpacityLinks} rounded-xl p-4 animate-[fadeSlideUp_0.2s_ease_forwards]`}
                        style={{ animationDelay: `${i * 0.08}s` }}
                    >
                        {/* Accent bar + title */}
                        <div className="flex items-start gap-3 mb-3">
                            <div className={`w-1 shrink-0 self-stretch rounded-full mt-0.5 ${classes?.bgColorTitle}`} />
                            <h3 className="font-bold text-base leading-snug">{p.title}</h3>
                        </div>

                        {/* Image */}
                        <div className="w-full mb-3" style={{ aspectRatio: `${p.width} / ${p.height}` }}>
                            {!imagesLoaded[i] && (
                                <div className={`flex justify-center items-center rounded-lg shadow-2xl w-full h-full ${classes?.bgColorLoaderImage} ${classes?.bgOpacityLoaderImage}`}>
                                    <RiseLoader color={LOADER_COLOR[colorMain] ?? "#059669"} size={10} />
                                </div>
                            )}
                            <Image
                                className={`rounded-lg shadow-2xl w-full h-full object-cover transition-opacity duration-500 ${imagesLoaded[i] ? "opacity-100" : "invisible absolute"}`}
                                onLoad={() => {
                                    setImagesLoaded(prev => {
                                        const next = [...prev];
                                        next[i] = true;
                                        return next;
                                    });
                                }}
                                quality={85} width={p.width} height={p.height} priority
                                src={p.src} alt={p.title}
                            />
                        </div>

                        {/* Description */}
                        <p className="text-sm leading-relaxed mb-3">{p.info}</p>

                        {/* Stack + devices */}
                        <div className="flex flex-wrap gap-2 mb-3">
                            {infoBox("Stack", p.stack, <HiSquare3Stack3D size={16} />)}
                            {infoBox("Dispositivos", p.devices, <MdScreenshotMonitor size={16} />)}
                        </div>


                    </div>
                ))}
            </div>

            {/* ═══ DESKTOP LAYOUT ════════════════════════════════════════════ */}
            <div
                className={`hidden md:flex h-[55%] xl:h-[68%] 2xl:h-[72%] relative ${classes?.bgColorProjectsCont} ${classes?.bgOpacityProjectsCont} rounded-2xl md:w-[78%] lg:w-[72%] xl:w-[68%] shadow-2xl justify-center items-center`}
            >
                <div className="overflow-y-auto bg-transparent overflow-x-hidden flex flex-col h-full w-full">
                    {projects.map((p, i) => {
                        const isFirst = i === 0;
                        const isLast = i === projects.length - 1;
                        const borderCls = [
                            !isLast ? "border-b border-white border-opacity-10" : "",
                            "border-transparent",
                            !isFirst ? "hover:border-t-2" : "",
                            !isLast ? "hover:border-b-2" : "",
                        ].join(" ");

                        return (
                            <div
                                key={p.title}
                                className={[
                                    "flex flex-row group hover:cursor-help",
                                    classes?.bgHoverOpacityProject,
                                    classes?.bgHoverColorProject,
                                    "transition-all duration-300",
                                    "text-xs lg:text-sm xl:text-base 2xl:text-xl",
                                    "justify-center items-center",
                                    "hover:py-10 lg:hover:py-12 xl:hover:py-14",
                                    borderCls,
                                    classes?.borderHoverColorProject,
                                    classes?.borderHoverOpacityProject,
                                    "p-4 lg:p-5 xl:p-6 rounded-2xl",
                                ].join(" ")}
                            >
                                {/* ── Text column ── */}
                                <div
                                    className={[
                                        "font-bold w-full",
                                        p.textWidth,
                                        p.imageLeft ? "order-2 ml-auto" : "mr-auto",
                                    ].join(" ")}
                                >
                                    <span className="block leading-snug">{p.title}</span>
                                    <p className="w-full font-normal mt-1 leading-relaxed">{p.info}</p>

                                    <div className="flex flex-wrap gap-2 mt-4">
                                        {infoBox("Stack", p.stack, <HiSquare3Stack3D size={16} />)}
                                        {infoBox("Dispositivos", p.devices, <MdScreenshotMonitor size={16} />)}
                                    </div>
                                </div>

                                {/* ── Loader + Image wrapper ── */}
                                <div className={[
                                    "w-[58%] lg:w-[60%]",
                                    "my-0 mx-8 lg:mx-10",
                                    p.imageLeft ? "order-1" : "",
                                ].join(" ")}
                                    style={{ aspectRatio: `${p.width} / ${p.height}` }}
                                >
                                    {!imagesLoaded[i] && (
                                        <div className={[
                                            "flex justify-center items-center rounded-lg shadow-2xl w-full h-full",
                                            classes?.bgColorLoaderImage,
                                            classes?.bgOpacityLoaderImage,
                                        ].join(" ")}>
                                            <RiseLoader color={LOADER_COLOR[colorMain] ?? "#059669"} size={12} />
                                        </div>
                                    )}
                                    <Image
                                        ref={(el) => { imageRefs.current[i] = el; }}
                                        className={[
                                            "rounded-lg shadow-2xl transform transition-all duration-700 w-full h-full object-cover",
                                            "opacity-50 group-hover:scale-110 group-hover:opacity-100",
                                            inViewStates[i] ? "scale-110 opacity-100" : classes?.opacityImages,
                                            !imagesLoaded[i] ? "invisible absolute" : "",
                                        ].join(" ")}
                                        onLoad={() => {
                                            setImagesLoaded(prev => {
                                                const next = [...prev];
                                                next[i] = true;
                                                return next;
                                            });
                                        }}
                                        quality={85}
                                        width={p.width}
                                        height={p.height}
                                        priority={true}
                                        src={p.src}
                                        alt={p.src.replace("/", "").replace(".png", "")}
                                    />
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}
