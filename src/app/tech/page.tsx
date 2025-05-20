import TechHeader from "@/components/TechHeader";
import TechStack from "@/components/TechStack";

export default function TechPage() {
  return (
    <div className="min-h-[75vh] md:min-h-[73vh] px-10 sm:px-20 md:px-32 lg:mb-12 lg:px-60 xl:px-80 mx-auto">
      <main className="max-w-screen max-w-5xl mx-auto">
        <TechHeader />
        <div className="mt-20 mb-20">
          <TechStack />
        </div>
      </main>
    </div>
  );
}
