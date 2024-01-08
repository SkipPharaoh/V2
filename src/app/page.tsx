import Blob from "@/components/Blob";
import Contact from "@/components/Contact";
import Experience from "@/components/Experience";
import HomeHeader from "@/components/HomeHeader";

export default function HomePage() {
  return (
    <div className="lg:min-h-screen px-10 sm:px-20 md:px-32 lg:mb-12 lg:px-60 mx-auto max-w-[75rem]">
      <div className="lg:h-screen 2xl:h-max max-w-[90rem] mx-auto">
        <Blob />
        <HomeHeader />
      </div>
      <div className="mt-28 mx-auto">
        <Experience />
      </div>
      <div className="mt-28 mx-auto">
        <Contact />
      </div>
    </div>
  );
}
