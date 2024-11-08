"use client";

import React from "react";
import { UseMediaQuery } from "./hooks/useMediaQuery";
import HomeDesktop from "./home/homeDesktopVersion";
import MobileVersion from "./home/homeMobileVersion";

export default function Home() {
  //CHECK DEVICE
  const isMobile = UseMediaQuery("(max-width: 768px)");

  return (
    <div className="w-full h-screen">
      {isMobile ? <MobileVersion /> : <HomeDesktop />}
    </div>
  );
}
