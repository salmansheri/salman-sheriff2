import { FloatingNav } from "@/components/ui/floating-navbar";
import { Grid } from "@/components/ui/grid";
import { Hero } from "@/components/ui/hero";
import { RecentProjects } from "@/components/ui/recent-projects";

export default function Home() {
  return (
    <main className="bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <FloatingNav navItems={[]} />
        <Hero />
        <Grid />
        <RecentProjects />
      </div>
    </main>
  );
}
