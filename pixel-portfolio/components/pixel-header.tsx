"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { NavMenu } from "@/components/nav-menu";
import { cn } from "@/lib/utils";

export function PixelHeader() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out", 
        scrolled ? "py-2 bg-white shadow-md dark:bg-black" : "py-4 bg-transparent"
      )}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        <motion.div 
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5, type: "spring" }}
          className="flex items-center"
        >
          <div className="flex items-center space-x-2">
            <div className="mcdonalds-arch"></div>
            <h1 className="text-xl md:text-2xl font-pixel tracking-tight">
              <span className="text-accent font-bold">Pixel</span>
              <span className="text-black dark:text-white">Portfolio</span>
            </h1>
          </div>
        </motion.div>

        <div className="flex items-center space-x-4">
          <NavMenu />
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}