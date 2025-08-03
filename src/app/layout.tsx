import { MobileNav } from "@/components/mobile-nav";
import { Sidebar } from "@/components/sidebar";
import { ThemeProvider } from "@/components/theme-provider";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import type { Metadata } from "next";
import { ViewTransitions } from "next-view-transitions";
import { Geist_Mono, Inter } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import type React from "react";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Abhishek Baiju",
    template: "%s - Abhishek Baiju",
  },
  description:
    "Abhishek Baiju's personal website. Web Development Intern at Vercel, studying AI and human languages at BYU. Thoughts on web development, web security, and building things that matter.",
  keywords: [
    "Abhishek Baiju",
    "web developer",
    "Vercel",
    "Next.js",
    "React",
    "TypeScript",
    "AI",
    "machine learning",
    "BYU",
  ],
  authors: [{ name: "Abhishek Baiju", url: "https://glaucusec.tech" }],
  creator: "Abhishek Baiju",
  publisher: "Abhishek Baiju",
  metadataBase: new URL("https://glaucusec.tech"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://glaucusec.tech",
    title: "Abhishek Baiju",
    description:
      "Abhishek Baiju's personal website. Web Development Intern at Vercel, studying AI and human languages at BYU.",
    siteName: "Abhishek Baiju",
  },
  twitter: {
    card: "summary_large_image",
    title: "Abhishek Baiju",
    description:
      "Abhishek Baiju's personal website. Web Development Intern at Vercel, studying AI and human languages at BYU.",
    creator: "@glaucusec",
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
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ViewTransitions>
      <html lang="en" suppressHydrationWarning>
        <body className={`${inter.className} ${geistMono.variable}`}>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            {/* Outermost wrapper for max-width and centering */}
            <div className="w-full max-w-screen-xl mx-auto bg-background">
              <div className="flex min-h-screen">
                {/* Desktop Sidebar */}
                <Sidebar />

                {/* Main Content Area */}
                <div className="flex-1 md:ml-64 flex flex-col">
                  {/* Mobile Header */}
                  <header className="sticky top-0 z-40 md:hidden border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
                    <div className="flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
                      <Link href="/" className="flex items-center space-x-3">
                        <div className="relative w-8 h-8 rounded-full overflow-hidden ring-2 ring-border/20">
                          <Image
                            src="/abhishekbaiju.jpg"
                            alt="Profile photo"
                            width={32}
                            height={32}
                            className="object-cover"
                            priority
                          />
                        </div>
                        <span className="text-lg font-semibold">
                          Abhishek Baiju
                        </span>
                      </Link>
                      <MobileNav />
                    </div>
                  </header>
                  {/* Page Content Wrapper */}
                  <main className="flex-1 w-full px-4 sm:px-6 lg:px-8 py-8 md:py-12">
                    <div className="mb-16">{children}</div>
                  </main>
                </div>
              </div>
            </div>
          </ThemeProvider>
          <Analytics />
          <SpeedInsights />
        </body>
      </html>
    </ViewTransitions>
  );
}
