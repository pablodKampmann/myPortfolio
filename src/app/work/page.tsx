"use client";

import React from "react";
import { UseMediaQuery } from "./../hooks/useMediaQuery";
import WorkDesktopVersion from "./workDesktopVersion";
import WorkMobileVersion from "./workMobileVersion";

export default function Work() {
  //CHECK DEVICE
  const isMobile = UseMediaQuery("(max-width: 768px)");

  return (
    <div className="w-full h-screen">
      {isMobile ? <WorkMobileVersion /> : <WorkDesktopVersion />}
    </div>
  );
}
