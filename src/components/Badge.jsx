import React from "react";

export const Badge = ({ displayText = "Project" }) => {
  return (
    <button className="bg-card-bg border-[1.5px] md:border-2 border-logo-bg text-primary rounded-full">
      <p className="text-center align-middle secondary-caption-uc badge-padding cursor-pointer">
        {displayText}
      </p>
    </button>
  );
};
