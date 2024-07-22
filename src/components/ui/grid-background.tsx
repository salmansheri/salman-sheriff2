import React from "react";

export function GridBackground() {
  return (
    <div className="h-sreeen w-full dark:bg-black-100 bg-white  dark:bg-grid-white/[0.3] bg-grid-black-100/[0.2] absolute top-0 left-0 flex items-center justify-center">
      {/* Radial gradient for the container to give a faded look */}
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      <div className="flex justify-center">
        <div className="max-w-[89vw] ">
          <h2 className="uppercase tracking-widest text-xs text-center text-blue-100 max-w-80">
            Dynamic Web magic with Next.js
          </h2>
        </div>
      </div>
    </div>
  );
}
