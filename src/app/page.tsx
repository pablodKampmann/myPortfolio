"use client"

import React from 'react';
import { useMediaQuery } from './hooks/useMediaQuery';
import HomeDesktop from './home/homeDesktopVersion';
import MobileVersion from './home/homeMobileVersion';

export default function AboutMe() {
  //CHECK DEVICE
  const isMobile = useMediaQuery('(max-width: 768px)');

  return (
    <div className='w-full h-screen'>

      {isMobile ? (
        <MobileVersion />
      ) : (
        <HomeDesktop />
      )}

    </div>

  );
}