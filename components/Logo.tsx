import React from 'react';

export const Logo: React.FC<{ className?: string }> = ({ className = "h-10" }) => {
  return (
    <div className={`flex items-center ${className}`}>
      <div className="flex flex-col">
        <span className="text-lg font-medium tracking-[0.15em] text-text-main uppercase leading-none">Dra. Giovanna Luz</span>
        <div className="flex items-center gap-2 mt-1">
          <div className="h-[1px] w-4 bg-gold"></div>
          <span className="text-[0.65rem] font-light tracking-[0.3em] text-gold-dark uppercase">Odontologia</span>
        </div>
      </div>
    </div>
  );
};