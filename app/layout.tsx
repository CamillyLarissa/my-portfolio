import type { Metadata } from "next";
import { Inter } from "next/font/google"; 
import "./globals.css";
import { Header } from "@/components/ui/header";
import { Footer } from "@/components/ui/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Portfolio | Camilly Larissa",
  description: "Desenvolvedora Fullstack",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${inter.className} bg-mauve-800`}>
        <Header /> 
        
        <main className="min-h-screen flex flex-col items-center p-4 md:p-10">
          {children}
        </main>
        
        <Footer />
      </body>
    </html>
  );
}