import Footer from "@/components/Footer";
import NavBar from "@/components/NavBar";
import { ThemeProvider } from "@/components/ThemeProvider";
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
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="back font-out mx-auto bg-[#fffdfd] dark:bg-black overflow-x-hidden lg:transform-gpu">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <main className="land relative z-10">
            <NavBar />
            {children}
            <Footer />
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
