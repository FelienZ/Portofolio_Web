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
export const metadata: Metadata = {
  title: "Portofolio Web",
  description: "My Nextjs Porto Web",
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
            <div className="min-h-screen w-screen sm:mx-5 my-5">
              {children}
            </div>
          </main>
          <Toaster toastOptions={{className: 'bg-card text-card-foreground'}} position="bottom-left"/>
        </SidebarProvider>
      </ThemeProvider>
      </body>
    </html>
  );
}
