"use client";

import { useEffect, useRef, useState } from "react";
import { useTheme } from "../context/ThemeContext";

const ACCENT_COLOR: Record<string, string> = {
    emerald: "#059669",
    rose: "#e11d48",
    blue: "#2563eb",
    yellow: "#eab308",
};

export default function CustomCursor() {
    const { colorMain, tone } = useTheme();
    const dotColor = ACCENT_COLOR[colorMain] ?? "#059669";
    const ringColor = ACCENT_COLOR[colorMain] ?? "#059669";
    const dotRef = useRef<HTMLDivElement>(null);
    const ringRef = useRef<HTMLDivElement>(null);
    const [hovering, setHovering] = useState(false);

    useEffect(() => {
        const onMove = (e: MouseEvent) => {
            if (dotRef.current) {
                dotRef.current.style.transform = `translate(${e.clientX - 6}px, ${e.clientY - 6}px)`;
            }
            if (ringRef.current) {
                ringRef.current.style.transform = `translate(${e.clientX - 22}px, ${e.clientY - 22}px)`;
            }
        };

        const onEnter = (e: MouseEvent) => {
            const t = e.target as HTMLElement;
            if (t.closest("a, button, [role='button'], input, textarea, select, label")) {
                setHovering(true);
            }
        };
        const onLeave = () => setHovering(false);

        document.addEventListener("mousemove", onMove);
        document.addEventListener("mouseover", onEnter);
        document.addEventListener("mouseout", onLeave);

        return () => {
            document.removeEventListener("mousemove", onMove);
            document.removeEventListener("mouseover", onEnter);
            document.removeEventListener("mouseout", onLeave);
        };
    }, []);

    return (
        <>
            <div
                ref={dotRef}
                className="pointer-events-none fixed top-0 left-0 z-[9999] w-3 h-3 rounded-full transition-colors duration-300"
                style={{ backgroundColor: dotColor }}
            />
            <div
                ref={ringRef}
                className="pointer-events-none fixed top-0 left-0 z-[9999] rounded-full border transition-all duration-200"
                style={{
                    width: hovering ? "56px" : "44px",
                    height: hovering ? "56px" : "44px",
                    marginLeft: hovering ? "-6px" : "0",
                    marginTop: hovering ? "-6px" : "0",
                    borderColor: ringColor,
                    opacity: hovering ? 0.6 : 0.35,
                }}
            />
        </>
    );
}
