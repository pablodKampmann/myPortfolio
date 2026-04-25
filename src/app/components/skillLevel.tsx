"use client";

import React, { useEffect, useState } from "react";

interface SkillLevelProps {
  level: number;
  bgColorMain?: string;
}

const SkillLevel: React.FC<SkillLevelProps> = ({ level, bgColorMain }) => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    setCurrent(0);
    let i = 0;
    const interval = setInterval(() => {
      i++;
      setCurrent(i);
      if (i >= level) clearInterval(interval);
    }, 120);
    return () => clearInterval(interval);
  }, [level]);

  return (
    <div className="flex space-x-1">
      {[...Array(5)].map((_, i) => (
        <div
          key={i}
          className={`w-3 h-3 rounded-full transition-colors duration-200 ${
            i < current
              ? bgColorMain || "bg-emerald-600"
              : "bg-gray-300 bg-opacity-85"
          }`}
        />
      ))}
    </div>
  );
};

export default SkillLevel;