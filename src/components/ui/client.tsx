"use client";

import { testimonials } from "@/lib/data";
import { InfiniteMovingCards } from "./infinite-moving-cards";

export const Clients = () => {
  return (
    <div className="py-20">
      <h1 className="heading">
        Kind Words From <span className="text-purple">Satisfied Clients</span>
      </h1>
      <div className="flex flex-col items-center ">
        <div className="h-[50vh] md:h-[30rem] rounded-md flex flex-col antialiased items-center relative overflow-hidden">
          <InfiniteMovingCards
            items={testimonials}
            direction="right"
            speed="slow"
          />
        </div>
      </div>
    </div>
  );
};
