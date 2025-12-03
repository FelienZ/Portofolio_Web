import type { Metadata } from "next";
import { Bebas_Neue, Geist, Geist_Mono, Outfit, Poppins } from "next/font/google";
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
  subsets: ['latin'],
  weight: "400"
});
export const outfit = Outfit({ subsets: ['latin'] })
export const poppins = Poppins({
  subsets: ['latin'],
  weight: "200"
})

export const metadata = {
  metadataBase: new URL("https://www.felienz.my.id/"),
  title: {
    default: "Muhammad Rajab Fadhly- Portofolio Website",
    template: "%s | Rajab"
  },
  description: "My Portofolio Website with NextJs - Muhammad Rajab.",
  
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

  openGraph: {
    type: "website",
    url: "https://www.felienz.my.id/",
    title: "Muhammad Rajab — Portofolio Website",
    description: "My Portofolio Website - Muhammad Rajab.",
    images: [
      {
        url: "/images/Kuchi-store.png",
        alt: "FelienZ Portfolio Website",
      }
    ]
  },

  twitter: {
    card: "summary_large_image",
    title: "Muhammad Rajab — Portofolio Website",
    description: "My Portofolio Website - Muhammad Rajab.",
    images: ["/images/Kuchi-store.png"]
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
      <body
        className={`${outfit.className} antialiased overflow-x-hidden`}
      >
      <ThemeProvider>
        <SidebarProvider>
          <AppSidebar />
          <main className="overflow-x-scroll">
            <SidebarTrigger />
            <div className="min-h-screen w-screen mx-2.5 sm:mx-5 my-5">
              {children}
            </div>
          </main>
          <Toaster toastOptions={{className: 'bg-card text-card-foreground'}} position="top-center"/>
        </SidebarProvider>
      </ThemeProvider>
      </body>
    </html>
  );
}
