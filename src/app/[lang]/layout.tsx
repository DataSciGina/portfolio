// Import language
import { getDictionary } from "../i18n/dictionary";

import type { Metadata } from "next";
import { ReactNode } from 'react'
import "./globals.css";

// import components
import { Navbar } from "./components/Navbar";
import { ThemeToggle } from "./components/ThemeToggle";
import { StarBackground } from "./components/StarBackground";
import { Footer } from "./components/Footer";

// SEO
export const metadata: Metadata = {
  title: "Data Scientist Portfolio",
  description: "Data Scientist, Data Engineer and Data Analyst proffesional portfolio",
};

type LocaleParams = Promise<{ lang: 'en' | 'es' }>

interface LayoutProps {
  children: ReactNode
  params: LocaleParams
}

export default async function RootLayout({
  children,
  params,
}: LayoutProps) {  
  // Extrae el lang de forma asíncrona
  const { lang } = await params
  const t = await getDictionary(lang);

  return (
    <html lang={lang}>
      <body>
        <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
          {/* Theme Toggle */}
          <ThemeToggle />
          {/* Background Effects */}
          <StarBackground />

          {/* Navbar */}
          <Navbar t={t.navbar} />
          
          <main>
            {/* Main Content */}
            {children}
          </main>

      {/* Footer */}
      <Footer t={t.footer} />
    </div>
      </body>
    </html>
  );
}
