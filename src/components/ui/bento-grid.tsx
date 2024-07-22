"use client";

import { cn } from "@/lib/utils";
import Image from "next/image";
import { BackgroundGradientAnimation } from "./gradient";
import { Globe } from "./globe";
import { Gridglobe } from "./grid-globe";
import Lottie from "react-lottie";
import { useState } from "react";
import animationData from "@/lib/data/confetti.json";
import { ButtonMagic } from "./button-magic";
import { IoCopyOutline } from "react-icons/io5";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-6 lg:grid-cols-5 md:grid-row-7 gap-4 lg:gap-8 mx-auto ",
        className,
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  img,
  titleClassName,
  imgClassName,
  spareImg,
  id,
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  img: string;
  titleClassName: string;
  imgClassName: string;
  spareImg: string;

  id?: number;
}) => {
  const [isCopied, SetIsCopied] = useState<boolean>(false);

  const handleCopy = () => {
    navigator.clipboard.writeText("sheriffsalman00@gmail.com");

    SetIsCopied(true);
  };
  return (
    <div
      className={cn(
        "row-span-1 rounded-3xl relative overflow-hidden  group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none p-4 dark:bg-black dark:border-white/[0.2] bg-white border border-transparent justify-between flex flex-col space-y-4 border-red-100",
        className,
      )}
      style={{
        background: "rgb(4,7,29)",
        backgroundColor:
          "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
      }}
    >
      <div className={cn(id === 6 && "flex justify-center", "h-full")}>
        <div className="w-full h-full absolute ">
          {img && (
            <img
              src={img}
              alt="image"
              className={cn(imgClassName, "object-cover object-center")}
            />
          )}
        </div>
        <div
          className={cn(
            "absolute right-0 -bottom-5",
            id === 5 && "w-full opacity-80",
          )}
        >
          {spareImg && (
            <img
              src={spareImg}
              alt={spareImg}
              className={cn("object-cover object-center w-full h-full")}
            />
          )}
        </div>
        {id === 6 && (
          <BackgroundGradientAnimation>
            <div className="absolute z-50 flex items-center justify-center text-white font-bold" />
          </BackgroundGradientAnimation>
        )}
        <div
          className={cn(
            titleClassName,
            "ground-hover/bento:translate-x-2 transition-200 relative md:h-full min-h-40 flex flex-col px-5 p-5 lg-10",
          )}
        >
          <div className="font-sans font-extralight   text-[#c1c2d3] text-sm md:text-xs lg:text-base z-10">
            {description}
          </div>
          <div className=" font-sans font-bold  text-lg  lg:text-3xl max-w-96 z-10">
            {title}
          </div>
        </div>
      </div>

      {id == 2 && <Gridglobe />}

      {id === 3 && (
        <div className="flex gap-1 lg:gap-5 w-fit absolute -right-3 lg:right-2">
          <div className="flex flex-col gap-3 lg:gap-8">
            {["React.js", "nextjs", "typescript"].map((item) => (
              <span
                key={item}
                className="py-2 lg:py-4 lg:px-3 px-3 text-xs lg:text-base opacity-50 lg:opacity-100 rounded-lg bg-[#10132e]"
              >
                {item}
              </span>
            ))}
            <span className="py-4 px-3 rounded-lg text-center bg-[#10132e]" />
          </div>
        </div>
      )}

      {/* <div className="group-hover/bento:translate-x-2 transition duration-200">
       
       
      </div> */}
      {id === 6 && (
        <div className="mt-5 relative ">
          <div className="absolute -bottom-5 right-0">
            <Lottie
              options={{
                loop: isCopied,
                autoplay: isCopied,
                animationData: animationData,
                rendererSettings: {
                  preserveAspectRatio: "XMidYMid slice",
                },
              }}
            />
          </div>
          <ButtonMagic
            title={isCopied ? "Email Copied" : "Copy My Email"}
            icon={<IoCopyOutline />}
            otherClasses="bg-[#161a31]"
            handleClick={handleCopy}
          />
        </div>
      )}
    </div>
  );
};
