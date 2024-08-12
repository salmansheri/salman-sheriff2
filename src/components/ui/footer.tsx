import Image from "next/image";
import Link from "next/link";
import { ButtonMagic } from "./button-magic";
import { FaLocationArrow } from "react-icons/fa6";
import { socialMedia } from "@/lib/data";

export const Footer = () => {
  const date = new Date();

  const year = date.getFullYear();
  return (
    <footer className="w-full pt-20 pb-10" id="contact">
      <div className="relative h-[300px] w-full left-0 -bottom">
        <Image src="/footer-grid.svg" alt="grid" fill className="" />
      </div>
      <div className="flex flex-col items-center">
        <h1 className="heading lg:max-w-[45vw]">
          Ready to take <span className="text-purple">Your</span> digital
          presence to the next level
        </h1>
        <p className="text-whtie-200 md:mt-10 my-5 text-center">
          Reach out to me today and let&apos;s discuss how I can help you achive
          your goals.
        </p>
        <Link
          target="_blank"
          className=""
          href="mailto:sheriffsalman00@gmail.com"
        >
          <ButtonMagic icon={<FaLocationArrow />} title="Let's get in touch" />
        </Link>
      </div>
      <div className="flex items-center  flex-col justify-center my-5 gap-6">
        <p>Copyright © {year} Salman Sheriff </p>
        <div className="flex items-center md:gap-3 gap-6">
          {socialMedia.map((profile) => (
            <div
              className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blue-lg saturate-180 rounded-lg border border-black-300"
              key={profile.id}
            >
              <a href={profile.href} target="_blank">
                <Image
                  src={profile.img}
                  alt={profile.img}
                  height={20}
                  width={20}
                />
              </a>
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
};
