import { SiVorondesign } from "react-icons/si";
import { FaConnectdevelop } from "react-icons/fa";
import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import CircularProgress, {
    circularProgressClasses,
    CircularProgressProps,
} from '@mui/material/CircularProgress';
import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress';

export default function Loading() {
    return (
        <div className="h-screen flex-col bg-blue-950 bg-opacity-20 space-y-8 select-none w-full flex justify-center items-center">
            <React.Fragment>
                <svg width={0} height={0}>
                    <defs>
                        <linearGradient id="my_gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                            <stop offset="0%" stopColor="#059669" />
                            <stop offset="100%" stopColor="white" />
                        </linearGradient>
                    </defs>
                </svg>
                <CircularProgress sx={{ 'svg circle': { stroke: 'url(#my_gradient)' } }} />
            </React.Fragment>
        </div>
    );
}
