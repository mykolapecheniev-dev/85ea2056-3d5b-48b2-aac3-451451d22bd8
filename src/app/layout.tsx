import type { Metadata } from "next";
import { Halant } from "next/font/google";
import { Inter } from "next/font/google";
import "./globals.css";
import "@/lib/gsap-setup";
import { ServiceWrapper } from "@/components/ServiceWrapper";
import Tag from "@/tag/Tag";
import { getVisualEditScript } from "@/utils/visual-edit-script";
import { Inter_Tight } from "next/font/google";
import { Libre_Baskerville } from "next/font/google";



export const metadata: Metadata = {
  title: 'Flowers Studio Liza | Botanical Art & Floral Design',
  description: 'Discover Liza Flowers Studio, offering artisanal floral arrangements and bespoke designs for your most special moments.',
  openGraph: {
    "title": "Flowers Studio Liza",
    "description": "Artisanal floral arrangements and botanical design by Liza Flowers.",
    "type": "website",
    "siteName": "Liza Flowers Studio"
  },
};


const libreBaskerville = Libre_Baskerville({
  variable: "--font-libre-baskerville",
  subsets: ["latin"],
  weight: ["400", "700"],
});
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <ServiceWrapper>
        <body className={`${libreBaskerville.variable} ${inter.variable} antialiased`}>
          <Tag />
          {children}
          <script
              dangerouslySetInnerHTML={{
                  __html: `${getVisualEditScript()}`
              }}
          />
        </body>
      </ServiceWrapper>
    </html>
  );
}
