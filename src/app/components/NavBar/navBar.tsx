"use client"

import React from 'react';
import { useMediaQuery } from './../../hooks/useMediaQuery';
import DesktopVersion from './desktopVersion';
import MobileVersion from './mobileVersion';

interface NavBarProps {
    tone: string;
    language: string;
    colorMain: string;
    handleColorChange: (language: string) => void;
}

export default function navBar({ tone, language, colorMain, handleColorChange }: NavBarProps) {
    //CHECK DEVICE
    const isMobile = useMediaQuery('(max-width: 768px)');

    return (
        <div>

            {isMobile ? (
                <MobileVersion tone={tone} language={language} colorMain={colorMain} handleColorChange={handleColorChange} />
            ) : (
                <DesktopVersion tone={tone} language={language} colorMain={colorMain} handleColorChange={handleColorChange} />
            )}

        </div>

    );
}