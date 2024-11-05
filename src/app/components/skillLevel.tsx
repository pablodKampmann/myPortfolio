import React from 'react';

interface SkillLevelProps {
  level: number;
  bgColorMain?: string; 
}

const SkillLevel: React.FC<SkillLevelProps> = ({ level, bgColorMain }) => {
  return (
    <div className="flex space-x-1">
      {[...Array(5)].map((_, i) => (
        <div
          key={i}
          className={`w-3 h-3 rounded-full ${
            i < level ? bgColorMain || 'bg-emerald-600' : 'bg-gray-300 bg-opacity-85'
          }`}
        ></div>
      ))}
    </div>
  );
};

export default SkillLevel;
