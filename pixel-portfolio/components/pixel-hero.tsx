"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRightIcon } from "lucide-react";
import { Button } from "@/components/ui/button";

export function PixelHero() {
  return (
    <section className="container mx-auto px-4 py-24 md:pt-32 md:pb-16">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-6"
        >
          <div className="space-y-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="px-4 py-2 bg-primary border-2 border-black inline-block"
            >
              <p className="text-black font-bold">Welcome to my pixel world</p>
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.5 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold"
            >
              Crafting <span className="text-primary">Pixel-Perfect</span> Digital Experiences
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9, duration: 0.5 }}
              className="text-xl md:text-2xl"
            >
              I design and build creative websites with pixel art aesthetics, bringing a unique retro feeling to modern web experiences.
            </motion.p>
          </div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.5 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Button asChild className="pixel-button text-lg py-6 rounded-none">
              <Link href="/works">
                View My Work
                <ArrowRightIcon className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            
            <Button asChild variant="outline" className="pixel-button bg-white text-lg py-6 rounded-none">
              <Link href="/blog">
                Read My Blog
              </Link>
            </Button>
          </motion.div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="relative"
        >
          <div className="relative h-[400px] w-full">
            <div className="absolute inset-4 border-4 border-black bg-primary/20 z-0"></div>
            <div className="absolute inset-0 pixel-card overflow-hidden">
              <Image
                src="https://images.pexels.com/photos/2103864/pexels-photo-2103864.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="Pixel Art Portfolio"
                fill
                className="object-cover"
                style={{ imageRendering: "pixelated" }}
              />
            </div>
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 1.5, duration: 0.5 }}
              className="absolute -bottom-6 -left-6 z-10"
            >
              <div className="bg-white dark:bg-background dark:text-foreground border-4 border-black p-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <p className="text-lg font-bold">5+ Years Experience</p>
              </div>
            </motion.div>
            <motion.div
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 1.8, duration: 0.5 }}
              className="absolute -top-6 -right-6 z-10"
            >
              <div className="bg-accent border-4 border-black p-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <p className="text-lg font-bold text-white">20+ Projects</p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}