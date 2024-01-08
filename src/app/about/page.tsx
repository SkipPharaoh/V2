import AboutBody from "@/components/AboutBody";
import AboutHeader from "@/components/AboutHeader";
import CategoryCard from "@/components/CategoryCard";
import PageSignature from "@/components/PageSignature";

export default function AboutPage() {
  return (
    <div className="px-10 sm:px-20 md:px-32 lg:mb-12 lg:px-60 mx-auto max-w-[75rem]">
      <main className="max-w-screen">
        <div className=" mx-auto pt-16 -pb-10 max-w-7xl">
          <AboutHeader />
          <CategoryCard />
          <AboutBody />
          <PageSignature />
        </div>
      </main>
    </div>
  );
}
