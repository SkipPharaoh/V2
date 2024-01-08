import ProjectCard from "@/components/ProjectCard";
import WorkHeader from "@/components/WorkHeader";

export default function WorkPage() {
  return (
    <div className="px-10 sm:px-20 md:px-32 md:-mb-52 lg:mb-0 lg:px-60 mx-auto max-w-[75rem]">
      <main className="min-h-screen max-w-screen">
        <WorkHeader />
        <div className="mt-20 mb-20">
          <ProjectCard />
        </div>
      </main>
    </div>
  );
}
