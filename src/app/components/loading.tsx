import * as React from "react";
import CircularProgress from "@mui/material/CircularProgress";

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
        <CircularProgress
          sx={{ "svg circle": { stroke: "url(#my_gradient)" } }}
        />
      </React.Fragment>
    </div>
  );
}
