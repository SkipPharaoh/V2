import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Skip ✦ developer",
    template: "%s | Skip ✦ developer",
  },
  description: "Developer | Investor | Thinker",
  metadataBase: new URL("https://caniggiathompson.com"),
  openGraph: {
    title: "Skip ✦ developer",
    description: "Developer | Investor | Thinker",
    url: "https://caniggiathompson.com",
    siteName: "Skip ✦ developer",
    locale: "en_US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  twitter: {
    card: "summary_large_image",
    title: "Skip ✦ developer",
    description: "Developer | Investor | Thinker",
  },
  verification: {
    google: "",
    yandex: "",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="back font-out mx-auto bg-[#fffdfd] dark:bg-[#242424] overflow-x-hidden lg:transform-gpu">
        {children}
      </body>
    </html>
  );
}
