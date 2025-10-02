import React from "react";
import { Badge } from "./Badge";

const Card = ({ image, alt, title, badgeText, role, year, onClick }) => {
  return (
    <div
      onClick={onClick}
      className="flex flex-col gap-4 md:gap-6 xl:gap-8 cursor-pointer"
    >
      <img
        src={image}
        alt={alt}
        className="w-full transitions pointer-events-none"
      />
      <div className="flex flex-col gap-3 md:gap-4 xl:gap-5">
        <div className="flex items-center justify-between gap-6">
          <h3 className="primary-body truncate transitions">{title}</h3>
          {badgeText ? <Badge displayText={badgeText} /> : <Badge />}
        </div>
        <hr className="h-[0.3px] md:h-[0.4px] xl:h-[0.5px] border-0 bg-white/50" />
        <div className="flex justify-between secondary-body text-white/50 transitions">
          <p>{role}</p>
          <p>{year}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
