import { Clients } from "@/components/ui/client";
import { FloatingNav } from "@/components/ui/floating-navbar";
import { Footer } from "@/components/ui/footer";
import { Grid } from "@/components/ui/grid";
import { Hero } from "@/components/ui/hero";
import { MyApproach } from "@/components/ui/my-approach";
import { RecentProjects } from "@/components/ui/recent-projects";
import { Skills } from "@/components/ui/skills";
import { navItems } from "@/lib/data";

export default function Home() {
  return (
    <main className="bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <FloatingNav navItems={navItems} />
        <Hero />
        <Skills />
        <RecentProjects />

        <MyApproach />
        <Footer />
      </div>
    </main>
  );
}
