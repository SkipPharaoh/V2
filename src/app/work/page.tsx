import HeaderSection from "@/components/HeaderSection";
import ProjectCard from "@/components/ProjectCard";

export default function WorkPage() {
  const title = "Work";
  const subtitle =
    "It has been an absolute pleasure to put my heart and soul into these projects. While you're here, browse these projects. 💖";

  return (
    <div className="px-10 sm:px-20 md:px-32 md:-mb-52 lg:mb-0 lg:px-60 mx-auto max-w-[75rem]">
      <main className="min-h-screen max-w-screen">
        <HeaderSection
          title={title}
          subtitle={subtitle}
          gradient="bg-gradient-to-tr from-[#2DE1C2] to-blue-500"
          centerItems={true}
        />
        <div className="mt-20 mb-20">
          <ProjectCard />
        </div>
      </main>
    </div>
  );
}
