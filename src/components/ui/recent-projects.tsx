import { projects } from "@/lib/data";
import { PinContainer } from "./3d-pin";
import Image from "next/image";
import { FaLocationArrow } from "react-icons/fa";

export const RecentProjects = () => {
  return (
    <div className="py-20" id="projects">
      <h1 className="heading">
        A Small selection of{" "}
        <span className="text-purple">Recent Projects</span>
      </h1>
      <div className="flex flex-wrap items-center justify-center p-4 gap-x-24 gap-y-8  mt-10">
        {projects.map((project) => (
          <div
            key={project.id}
            className="sm:h-[41rem] h-[32rem] lg:min-h-[35.rem]  flex items-center justify-center  w-[80vw] sm:w-[570px]"
          >
            <PinContainer title={project.title} href={project.link}>
              <div className="relative flex items-center justify-center  w-[80vw] overflow-hidden  sm:w-[570px] lg:h-[30vh] mb-10 sm:h-[40vh] h-[30vh] ">
                <div className="relative w-full h-full overflow-hidden lg:rounded-3xl bg-[#13162d] ">
                  <img src="/bg.png" />
                </div>
                <img src={project.img} className="z-10 absolute bottom-0" />
              </div>
              <h1 className="font-bold lg:text-2xl md:text-xl text-base line-clamp-1 ">
                {project.title}
              </h1>
              <p className="lg:text-xl lg:font-normal font-light text-sm line-clamp-2">
                {project.des}
              </p>
              <div className="flex items-center justify-between mt-7 mb-3">
                <div className="flex items-center">
                  {project.iconLists.map((icon, index) => (
                    <div
                      className="broder border-white/[0.2] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8"
                      key={icon}
                      style={{
                        transform: `translateX(-${5 * index * 2}px)`,
                      }}
                    >
                      <Image src={icon} alt="icons" height={20} width={20} />
                    </div>
                  ))}
                </div>

                <div className="flex justify-center items-center">
                  <p className="flex lg:text-lg md:text-xs text-sm text-purple">
                    Check Live Site
                  </p>
                  <FaLocationArrow className="ms-3" color="#CBACF9" />
                </div>
              </div>
            </PinContainer>
          </div>
        ))}
      </div>
    </div>
  );
};
