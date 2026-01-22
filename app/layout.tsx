import type { Metadata } from "next";
import {
  Bebas_Neue,
  Geist,
  Geist_Mono,
  Outfit,
  Poppins,
} from "next/font/google";
import "./globals.css";
import "./style.css";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar";
import ThemeProvider from "@/utils/themeProvider";
import { Toaster } from "@/components/ui/sonner";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});
const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});
export const bebas = Bebas_Neue({
  subsets: ["latin"],
  weight: "400",
});
export const outfit = Outfit({ subsets: ["latin"] });
export const poppins = Poppins({
  subsets: ["latin"],
  weight: "200",
});

export const metadata = {
  metadataBase: new URL("https://www.felienz.my.id/"),
  title: {
    default: "Muhammad Rajab Fadhly - Portofolio Website | Web Developer",
    template: "%s | Rajab",
  },
  description:
    "Muhammad Rajab Fadhly | Seorang Mahasiswa yang sedang berfokus pada pengembangan web dengan stack utama React, dan Node.js. Cek profil saya di sini.",

  keywords: [
    "Muhammad Rajab",
    "Rajab",
    "Rajab Fadhly",
    "m. rajab fadhly",
    "m. rajab",
    "felienz",
    "FelienZ",
    "FelienZ Portfolio",
  ],

  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/icon.png", sizes: "32x32", type: "image/png" },
      { url: "/icon-highres.png", sizes: "192x192", type: "image/png" },
    ],
  },

  openGraph: {
    type: "website",
    url: "https://www.felienz.my.id/",
    title: "Muhammad Rajab — Portofolio Website",
    description: "My Portofolio Website - Muhammad Rajab.",
    images: [
      {
        url: "/images/Kuchi-store.png",
        alt: "FelienZ Portfolio Website",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Muhammad Rajab — Portofolio Website",
    description: "My Portofolio Website - Muhammad Rajab.",
    images: ["/images/Kuchi-store.png"],
  },

  alternates: {
    canonical: "https://www.felienz.my.id/",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${outfit.className} antialiased overflow-x-hidden`}>
        <ThemeProvider>
          <SidebarProvider defaultOpen={false}>
            <AppSidebar />
            <main className="overflow-x-scroll grid w-screen scrollbar-hide">
              <SidebarTrigger />
              <div className="min-h-screen md:w-[95vw] w-screen place-self-center mx-2.5 sm:mx-5 my-5">
                {children}
              </div>
            </main>
            <Toaster
              toastOptions={{ className: "bg-card text-card-foreground" }}
              position="top-center"
            />
          </SidebarProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
