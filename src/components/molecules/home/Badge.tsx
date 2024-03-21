"use client";

import React, { ReactNode } from "react";

interface Props {
  icon: ReactNode;
  label: string;
}

const Badge = ({ icon, label }: Props) => {
  return (
    <>
      <div className="center !flex-col">
        <div className="p-2 border rounded-full w-44 md:w-32 xl:w-52 bg-pry-100 box aspect-square center border-sec">
          <i className="block w-2/3">{icon}</i>
        </div>
        <p className="mt-10 text-center">{label}</p>
      </div>

      <style jsx>{`
        .box {
          filter: drop-shadow(4px 0px #ffca22) drop-shadow(2px 0px #241d05);
        }
      `}</style>
    </>
  );
};

export default Badge;
