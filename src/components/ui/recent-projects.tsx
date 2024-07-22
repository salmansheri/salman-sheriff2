import { projects } from "@/lib/data";

export const RecentProjects = () => {
  return (
    <div className="py-20">
      <h1 className="heading">
        A Small selection of{" "}
        <span className="text-purple">Recent Projects</span>
      </h1>
      <div className="flex flex-wrap items-center justify-center p-4 gap-16 mt-10">
        {projects.map((project) => (
          <div key={project.id}>{project.title}</div>
        ))}
      </div>
    </div>
  );
};
