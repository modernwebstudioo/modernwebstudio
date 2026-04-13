"use client";

import { useState, useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Portfolio from "@/components/Portfolio";
import Services from "@/components/Services";
import Process from "@/components/Process";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Preloader from "@/components/Preloader";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  // Lock scrolling absolutely to the top while the preloader is intensely overlaying
  useEffect(() => {
    if (isLoading) {
      document.body.style.overflow = "hidden";
      window.scrollTo(0, 0);
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isLoading]);

  return (
    <main className="min-h-screen">
      <AnimatePresence mode="wait">
        {isLoading && <Preloader onComplete={() => setIsLoading(false)} />}
      </AnimatePresence>

      <Navbar />
      <Hero />
      <Portfolio />
      <Services />
      <Process />
      <Contact />
      <Footer />
    </main>
  );
}
