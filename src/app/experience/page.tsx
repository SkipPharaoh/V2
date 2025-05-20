import InteractiveTimeline from "@/components/InteractiveTimeline";
import WorkHeader from "@/components/WorkHeader";
import { experienceData } from "@public/Experience";

export default function ExperiencePage() {
  return (
    <div className="min-h-[75vh] md:min-h-[73vh] px-10 sm:px-20 md:px-32 lg:mb-12 lg:px-60 xl:px-80 mx-auto">
      <main className="max-w-screen max-w-5xl mx-auto">
        <WorkHeader />
        <div className="w-full max-w-screen-xl mx-auto flex justify-center">
          <InteractiveTimeline experiences={experienceData} />
        </div>
      </main>
    </div>
  );
}
