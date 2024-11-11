import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

export const metadata: Metadata = {

  title: "Daly Games - Descubra jogos incríveis para se divertir",
  description: "App em Next.js que apresenta os últimos lançamentos de videogames em tempo real, com interface moderna e responsiva, otimizado para performance e SEO.",
  keywords: ['games', 'jogos', 'stean'],
  openGraph: {
    images: [`${process.env.PROJECT_URL}/preview.png`]
  }, 
  robots:{
    index: true,
    follow: true,
    nocache: true,
    googleBot:{
      index: true,
      follow: true,
      noimageindex: true
    }
  }

};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
