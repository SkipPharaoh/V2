import HeaderSection from "@/components/HeaderSection";
import TechStack from "@/components/TechStack";

export default function TechPage() {
  const title = "Tech Stack";
  const subtitle =
    "Just like any other dev, I also spend more time searching and experimenting tools than actually coding some senseful things 😎";

  return (
    <div className="min-h-[75vh] md:min-h-[73vh] px-10 sm:px-20 md:px-32 lg:mb-12 lg:px-60 xl:px-80 mx-auto">
      <main className="max-w-screen max-w-5xl mx-auto">
        <HeaderSection
          title={title}
          subtitle={subtitle}
          gradient="bg-gradient-to-br dark:to-yellow-200 to-yellow-500 dark:from-red-500 from-blue-700"
          centerItems={false}
        />
        <div className="mt-20 mb-20">
          <TechStack />
        </div>
      </main>
    </div>
  );
}
