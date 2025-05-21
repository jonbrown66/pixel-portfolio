"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { Gamepad2Icon, HomeIcon, FileTextIcon, BriefcaseIcon, UserIcon } from "lucide-react";
import { cn } from "@/lib/utils";

const navItems = [
  { path: "/", name: "Home", icon: <HomeIcon size={20} /> },
  { path: "/blog", name: "Blog", icon: <FileTextIcon size={20} /> },
  { path: "/works", name: "Works", icon: <BriefcaseIcon size={20} /> },
  { path: "/about", name: "About", icon: <UserIcon size={20} /> },
];

const variants = {
  hidden: { 
    opacity: 0,
    y: 20
  },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.2,
      type: "spring",
      stiffness: 100
    }
  })
};

export function NavMenu() {
  const pathname = usePathname();

  return (
    <nav className="flex items-center justify-center space-x-1 lg:space-x-2">
      {navItems.map((item, index) => (
        <motion.div
          key={item.path}
          custom={index}
          initial="hidden"
          animate="visible"
          variants={variants}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          <Link 
            href={item.path}
            className={cn(
              "pixel-button rounded-none flex flex-col items-center justify-center px-3 py-2 h-14 w-20 sm:w-24",
              pathname === item.path 
                ? "dark:bg-yellow-500 dark:text-background bg-primary border-black" 
                : "bg-white dark:bg-foreground border-black hover:bg-primary/80"
            )}
          >
            <span className="mb-1">{item.icon}</span>
            <span className="text-xs sm:text-sm font-bold">{item.name}</span>
          </Link>
        </motion.div>
      ))}
      <motion.div
        custom={navItems.length}
        initial="hidden"
        animate="visible"
        variants={variants}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        <Link 
          href="https://github.com"
          target="_blank"
          rel="noopener noreferrer"
          className="pixel-button rounded-none flex flex-col items-center justify-center px-3 py-2 h-14 w-20 sm:w-24 bg-white dark:bg-foreground border-black hover:bg-primary/80"
        >
          <span className="mb-1"><Gamepad2Icon size={20} /></span>
          <span className="text-xs sm:text-sm font-bold">Play</span>
        </Link>
      </motion.div>
    </nav>
  );
}