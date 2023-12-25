import Image from "next/image";
import Blob from "../components/Contact";

export default function Home() {
  return (
    <main className="lg:min-h-screen px-10 sm:px-20 md:px-32 lg:mb-12 lg:px-60 mx-auto max-w-[75rem]">
      <Blob />
    </main>
  );
}
