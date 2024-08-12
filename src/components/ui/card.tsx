"use client";

import Image from "next/image";
import React from "react";
import { CardBody, CardContainer, CardItem } from "../ui/3d-card";
import Link from "next/link";

export function SkillCard({ title, src }: { title: string; src: string }) {
  return (
    <CardContainer className="inter-var">
      <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] bg-dark-100 dark:border-white/[0.2] border-black/[0.1] w-auto  h-auto rounded-xl p-2 border  ">
        <CardItem
          translateZ="100"
          className="w-full mt-4 flex items-center justify-center"
        >
          <Image
            src={src}
            height="50"
            width="50"
            className="h-20 w-20  rounded-xl group-hover/card:shadow-xl"
            alt="thumbnail"
          />
        </CardItem>
        <div className="flex justify-between items-center ">
          <CardItem
            translateZ={20}
            as={Link}
            href="https://twitter.com/mannupaaji"
            target="__blank"
            className="px-4 py-2 rounded-xl text-lg font-bold"
          >
            {title}
          </CardItem>
        </div>
      </CardBody>
    </CardContainer>
  );
}
