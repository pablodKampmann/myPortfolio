"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { MdDesignServices } from "react-icons/md";
import { GrDeploy } from "react-icons/gr";
import RiseLoader from "react-spinners/RiseLoader";
import { languageTexts } from "./languageTexts";

const LOADER_COLOR: Record<string, string> = {
    emerald: "#059669",
    rose: "#e11d48",
    blue: "#2563eb",
    yellow: "#eab308",
};

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
};

// ─── Component ─────────────────────────────────────────────────────────────────
export default function WorkPage() {
    // ── LocalStorage listener ────────────────────────────────────────────────
    useEffect(() => {
        const onStorage = () => {
            const lang = localStorage.getItem("language");
            if (lang) setLanguage(lang);
            const tn = localStorage.getItem("tone");
            if (tn) setTone(tn);
            const cm = localStorage.getItem("colorMain");
            if (cm) setColorMain(cm);
        };
        window.addEventListener("storage", onStorage);
        return () => window.removeEventListener("storage", onStorage);
    }, []);

    // ── Language ─────────────────────────────────────────────────────────────
    const [language, setLanguage] = useState<string>("spa");
    useEffect(() => {
        const v = localStorage.getItem("language");
        if (v) setLanguage(v);
    }, []);

    const texts = language === "eng" ? languageTexts.eng : languageTexts.spa;

    // ── Tone / color ─────────────────────────────────────────────────────────
    const [tone, setTone] = useState<string>("dark");
    const [classesTones, setClassesTones] = useState<any>(null);
    const [colorMain, setColorMain] = useState<string>("emerald");

    useEffect(() => {
        const v = localStorage.getItem("tone");
        if (v) setTone(v);
    }, []);

    useEffect(() => {
        const v = localStorage.getItem("colorMain");
        if (v) setColorMain(v);
    }, []);

    useEffect(() => {
        const SCROLLBAR: Record<string, string> = {
            emerald: "#059669",
            rose: "#e11d48",
            blue: "#2563eb",
            yellow: "#eab308",
        };
        const TITLE: Record<string, string> = {
            emerald: "bg-emerald-600",
            rose: "bg-rose-600",
            blue: "bg-blue-600",
            yellow: "bg-yellow-600",
        };
        const SUBTITLE: Record<string, string> = {
            emerald: "text-emerald-800",
            rose: "text-rose-800",
            blue: "text-blue-800",
            yellow: "text-yellow-800",
        };
        const LINKS: Record<string, string> = {
            emerald: "text-emerald-500",
            rose: "text-rose-500",
            blue: "text-blue-500",
            yellow: "text-yellow-500",
        };
        const LINKS_HOVER: Record<string, string> = {
            emerald: "hover:text-emerald-400",
            rose: "hover:text-rose-400",
            blue: "hover:text-blue-400",
            yellow: "hover:text-yellow-400",
        };
        const BORDER: Record<string, string> = {
            emerald: "border-emerald-950",
            rose: "border-rose-950",
            blue: "border-blue-950",
            yellow: "border-yellow-950",
        };

        document.documentElement.style.setProperty(
            "--scrollbar-color",
            SCROLLBAR[colorMain] ?? "#059669",
        );

        const bgColorTitle = TITLE[colorMain] ?? "bg-emerald-600";
        const textColorSubTitle = SUBTITLE[colorMain] ?? "text-emerald-800";
        const textColorLinks = LINKS[colorMain] ?? "text-emerald-500";
        const textColorHoverLinks = LINKS_HOVER[colorMain] ?? "hover:text-emerald-400";
        const borderColorProjectsCont = BORDER[colorMain] ?? "border-emerald-950";

        setClassesTones({
            dark: {
                textColorMain: "text-white",
                borderColorProjectsCont,
                bgColorProjectsCont: "bg-white",
                bgOpacityProjectsCont: "bg-opacity-10",
                bgHoverColorProject: "hover:bg-white",
                bgHoverOpacityProject: "hover:bg-opacity-10",
                borderHoverColorProject: "hover:border-white",
                borderHoverOpacityProject: "hover:border-opacity-10",
                bgOpacityLinks: "bg-opacity-10",
                opacityImages: "opacity-50",
                bgOpacityLoaderImage: "bg-opacity-10",
                textColorLinks,
                textColorHoverLinks,
                bgColorTitle,
                textColorSubTitle,
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
                bgOpacityLinks: "bg-opacity-100",
                opacityImages: "opacity-70",
                bgOpacityLoaderImage: "bg-opacity-70",
                textColorLinks,
                textColorHoverLinks,
                bgColorTitle,
                textColorSubTitle,
                bgColorLoaderImage: "bg-gray-300",
            },
        });
    }, [colorMain, tone]);

    const classes: any = tone === "dark" ? classesTones?.dark : classesTones?.light;

    // ── Image loading ────────────────────────────────────────────────────────
    const [imagesLoaded, setImagesLoaded] = useState<boolean[]>([false, false, false, false, false]);
    const imageBlur =
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP8XwMAAoABfYJLKisAAAAASUVORK5CYII=";

    // ── Scroll-reveal (mobile IntersectionObserver) ──────────────────────────
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
            { threshold: 0.4 },
        );
        imageRefs.current.forEach((r) => r && observer.observe(r));
        return () => { imageRefs.current.forEach((r) => r && observer.unobserve(r)); };
    }, []);

    // ── Project data (depends on texts) ─────────────────────────────────────
    const projects: ProjectDef[] = [
        {
            title: "Dental Agenda",
            subtitle: texts.category_1,
            info: texts.info_1,
            deployUrl: "https://dental-agenda.vercel.app/",
            src: "/dentalAgenda-image.png",
            width: 1919, height: 917,
            imageLeft: false, hasLoader: false, textWidth: "md:w-[32%]",
        },
        {
            title: "My RoomMate App",
            subtitle: `${texts.category_1} & ${texts.category_2}`,
            info: texts.info_2,
            deployUrl: "https://myroommate.vercel.app/",
            src: "/MyRoomMate-image.png",
            width: 1920, height: 1080,
            imageLeft: true, hasLoader: true, textWidth: "md:w-[32%]",
        },
        {
            title: "Clients On The Map",
            subtitle: texts.category_1,
            info: texts.info_5,
            deployUrl: null,
            src: "/ClientsOnTheMap-image.png",
            width: 1919, height: 918,
            imageLeft: false, hasLoader: false, textWidth: "md:w-[32%]",
        },
        {
            title: "Login & Register Template",
            subtitle: `${texts.category_1} & ${texts.category_2}`,
            info: texts.info_4,
            deployUrl: "https://login-register-template.vercel.app/login",
            src: "/loginAndRegister-image.png",
            width: 1919, height: 918,
            imageLeft: true, hasLoader: true, textWidth: "md:w-[26%]",
        },
        {
            title: "YouTube Music CLONE",
            subtitle: `${texts.category_1} & ${texts.category_2}`,
            info: texts.info_3,
            deployUrl: "https://youtubemusic-clone.vercel.app/",
            src: "/youtubeMusic-image.png",
            width: 1919, height: 914,
            imageLeft: false, hasLoader: true, textWidth: "md:w-[32%]",
        },
    ];

    // ── Helpers ──────────────────────────────────────────────────────────────
    const imgCls = (i: number) =>
        [
            "rounded-lg shadow-2xl transform transition-all duration-700",
            "w-[85%] sm:w-[78%] md:w-[58%] lg:w-[60%] h-auto",
            "my-5 sm:my-6 md:my-0 md:mx-8 lg:mx-10",
            inViewStates[i] ? "scale-110 opacity-100" : classes?.opacityImages,
            "md:group-hover:scale-110 md:group-hover:opacity-100",
        ].join(" ");

    const deployBox = (p: ProjectDef) => (
        <div className={`bg-white w-fit px-3 py-2 rounded-lg shadow-2xl ${tone === "light" ? "border" : ""} ${classes?.bgOpacityLinks}`}>
            <h2 className="flex items-center text-sm font-semibold">
                Deploy <GrDeploy className="ml-2" />
            </h2>
            <button
                onClick={p.deployUrl ? () => window.open(p.deployUrl!, "_blank") : undefined}
                className={`${classes?.textColorLinks} ${classes?.textColorHoverLinks} text-xs cursor-pointer tracking-tighter break-all text-left transition duration-300`}
            >
                {p.deployUrl ?? "https://clients-on-the-map.vercel.app/"}
            </button>
        </div>
    );

    // ── Render ────────────────────────────────────────────────────────────────
    return (
        <div className={`${classes?.textColorMain} flex flex-col justify-center items-center h-full pt-16 pb-24 md:pt-0 md:pb-[4%]`}>

            {/* Page title */}
            <div
                className={`${classes?.bgColorTitle} font-normal border-r-4 border-b-4 flex ${classes?.borderColorProjectsCont} justify-center px-2 py-1.5 pb-2 rounded-2xl shadow-2xl mb-4 md:mb-6 xl:mb-8 items-center text-left text-xl sm:text-2xl md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl`}
            >
                {texts.title}{" "}
                <MdDesignServices
                    size={26}
                    className={`ml-2 md:ml-3 lg:ml-4 ${tone === "light" ? "bg-white" : ""} bg-opacity-90 p-1 rounded-full`}
                />
            </div>

            {/* Projects container */}
            <div
                className={`flex h-[62%] sm:h-[65%] xl:h-[68%] 2xl:h-[72%] relative ${classes?.bgColorProjectsCont} ${classes?.bgOpacityProjectsCont} rounded-2xl w-[92%] sm:w-[88%] md:w-[78%] lg:w-[72%] xl:w-[68%] shadow-2xl justify-center items-center`}
            >
                <div className="overflow-y-auto bg-transparent overflow-x-hidden flex flex-col h-full w-full">
                    {projects.map((p, i) => {
                        const isFirst = i === 0;
                        const isLast = i === projects.length - 1;
                        const borderCls = [
                            !isLast ? "border-b" : "",
                            !isFirst ? "border-t md:border-t-0" : "",
                            "md:border-transparent",
                            !isFirst ? "md:hover:border-t-2" : "",
                            !isLast ? "md:hover:border-b-2" : "",
                        ].join(" ");

                        return (
                            <div
                                key={p.title}
                                className={[
                                    "flex flex-col md:flex-row group hover:cursor-help",
                                    classes?.bgHoverOpacityProject,
                                    classes?.bgHoverColorProject,
                                    "transition-all duration-300",
                                    "text-xs sm:text-sm md:text-xs lg:text-sm xl:text-base 2xl:text-xl",
                                    "justify-center items-center",
                                    "md:hover:py-10 lg:hover:py-12 xl:hover:py-14",
                                    borderCls,
                                    classes?.borderHoverColorProject,
                                    classes?.borderHoverOpacityProject,
                                    "p-4 sm:p-6 md:p-7 lg:p-9 xl:p-10",
                                ].join(" ")}
                            >
                                {/* ── Text column ── */}
                                <div
                                    className={[
                                        "font-bold w-full",
                                        p.textWidth,
                                        p.imageLeft ? "order-1 md:order-2 md:ml-auto" : "md:mr-auto",
                                    ].join(" ")}
                                >
                                    <span className="block leading-snug">
                                        {p.title}{" "}
                                        <span className={`${classes?.textColorSubTitle} font-normal`}>
                                            ({p.subtitle})
                                        </span>
                                    </span>
                                    <p className="w-full font-normal mt-1 leading-relaxed">{p.info}</p>

                                    {/* Deploy — desktop only (inside text column) */}
                                    <div className="hidden md:block mt-4">
                                        {deployBox(p)}
                                    </div>
                                </div>

                                {/* ── Loader + Image wrapper ── */}
                                <div className={[
                                    "w-[85%] sm:w-[78%] md:w-[58%] lg:w-[60%]",
                                    "my-5 sm:my-6 md:my-0 md:mx-8 lg:mx-10",
                                    p.imageLeft ? "order-2 md:order-1" : "",
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
                                            inViewStates[i] ? "scale-110 opacity-100" : classes?.opacityImages,
                                            "md:group-hover:scale-110 md:group-hover:opacity-100",
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

                                {/* ── Deploy — mobile only (after image) ── */}
                                <div className="md:hidden order-3 w-full mt-3">
                                    {deployBox(p)}
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}
