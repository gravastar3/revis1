import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "kelompok_3",
  description: "Masda",
  keywords: ["Z.ai", "Next.js", "TypeScript", "Tailwind CSS", "shadcn/ui", "AI development", "React"],
  authors: [{ name: "Z.ai Team" }],
  icons: {
    icon: "https://fiverr-res.cloudinary.com/images/q_auto,f_auto/gigs/125396872/original/abc3df2c178a6ee9e5b0cad41a69b49c4831a61f/make-a-meme-create-logo-or-do-some-simple-photoshop.png",
  },
  openGraph: {
    title: "kelompok3",
    description: "skincare",
    url: "https://chat.z.ai",
    siteName: "kelompok3",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "kelompok3",
    description: "ada",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
