"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { BrainCircuitIcon, CodeIcon, PaintbrushIcon, GamepadIcon } from "lucide-react";

const skills = [
  { name: "Web Development", icon: <CodeIcon className="h-6 w-6" />, level: 90 },
  { name: "UI/UX Design", icon: <PaintbrushIcon className="h-6 w-6" />, level: 85 },
  { name: "Game Development", icon: <GamepadIcon className="h-6 w-6" />, level: 75 },
  { name: "AI Integration", icon: <BrainCircuitIcon className="h-6 w-6" />, level: 80 },
];

export function AboutSection() {
  return (
    <section className="container mx-auto px-4 py-16">
      <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">About Me</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="relative"
        >
          <div className="relative h-[400px] w-full">
            <div className="absolute inset-4 border-4 border-primary z-0"></div>
            <div className="absolute inset-0 pixel-card overflow-hidden">
              <Image
                src="https://images.pexels.com/photos/1181325/pexels-photo-1181325.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="Developer portrait"
                fill
                className="object-cover"
                style={{ imageRendering: "pixelated" }}
              />
            </div>
          </div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-6"
        >
          <h3 className="text-2xl font-bold">Hi, I'm PixelArtist</h3>
          
          <p className="text-lg">
            I'm a creative developer and designer with a passion for creating unique digital experiences. With over 5 years of experience, I specialize in building pixel-perfect websites and applications.
          </p>
          
          <p className="text-lg">
            My background in both design and development allows me to create cohesive experiences from concept to implementation. I'm particularly fond of pixel art aesthetics and retro gaming influences.
          </p>
          
          <div className="space-y-4 mt-8">
            <h4 className="text-xl font-bold">My Skills</h4>
            
            <div className="space-y-4">
              {skills.map((skill) => (
                <div key={skill.name} className="space-y-2">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <div className="mr-2 p-2 bg-primary text-black">
                        {skill.icon}
                      </div>
                      <span className="font-medium">{skill.name}</span>
                    </div>
                    <span className="font-bold">{skill.level}%</span>
                  </div>
                  
                  <div className="h-6 w-full bg-gray-200 dark:bg-gray-700 border-2 border-black">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${skill.level}%` }}
                      transition={{ duration: 1, delay: 0.5 }}
                      className="h-full bg-primary"
                    ></motion.div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}