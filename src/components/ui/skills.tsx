"use client";

import { skills } from "@/lib/data";
import { SkillCard } from "./card";

export const Skills = () => {
  return (
    <div>
      <h1 className="text-center heading">
        My <span className="text-purple">Skills</span>
      </h1>

      <div
        id="skills"
        className="grid  grid-cols-1 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6"
      >
        {skills.map((skill) => (
          <SkillCard key={skill.id} src={skill.src} title={skill.title} />
        ))}
      </div>
    </div>
  );
};
