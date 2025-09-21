"use client";

import HeaderSection from "@/components/HeaderSection";
import { servicesData } from "@public/Services";
import Link from "next/link";
import Image from "next/image";
import { StaticImageData } from "next/image";

interface ServiceProps {
  title: string;
  desc: string;
  price: string;
  link: string;
  image: StaticImageData;
}

export default function ServicesPage() {
  const title = "Websites that Work. For You.";
  const subtitle =
    "I design and build fast, modern, and responsive websites for individuals, creatives, and small businesses.";

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
          <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-6">
            {servicesData.map((service) => {
              return (
                <div
                  key={service.id}
                  className="p-6 flex justify-center items-center"
                >
                  <Service
                    title={service.title}
                    desc={service.desc}
                    price={service.price}
                    link={service.link}
                    image={service.image}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </main>
    </div>
  );
}

function Service({ title, desc, price, link, image }: ServiceProps) {
  return (
    <Link href={link} className="block w-full h-full">
      <div className="group relative w-full h-80 bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden cursor-pointer transition-all duration-300 ease-in-out hover:shadow-2xl border border-gray-200 dark:border-gray-700">
        {/* Image Layer - Default State */}
        <div className="absolute inset-0 transition-all duration-300 ease-in-out group-hover:backdrop-blur-sm group-hover:bg-black/50">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover transition-all duration-300 ease-in-out group-hover:scale-105 group-hover:blur-sm group-hover:opacity-30"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />

          {/* Title Overlay - Always Visible */}
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
            <h3 className="text-xl font-bold text-white mb-2 group-hover:transform group-hover:translate-y-[-10px] transition-transform duration-300">
              {title}
            </h3>
          </div>
        </div>

        {/* Hover Content Layer - Hidden by Default */}
        <div className="absolute inset-0 bg-white dark:bg-gray-800 p-6 flex flex-col justify-center items-center text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out">
          <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">
            {title}
          </h3>

          <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
            {desc}
          </p>

          <div className="mt-auto">
            <span className="inline-block bg-blue-500 text-white px-6 py-3 rounded-lg font-semibold text-lg transform group-hover:scale-105 transition-transform duration-200">
              {price}
            </span>
          </div>

          {/* Optional: Add a "Get Started" button */}
          {/* <div className="mt-4 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 delay-100">
            <span className="text-blue-500 text-sm font-medium border-b border-blue-500 hover:border-blue-600 transition-colors">
              Get Started →
            </span>
          </div> */}
        </div>
      </div>
    </Link>
  );
}
