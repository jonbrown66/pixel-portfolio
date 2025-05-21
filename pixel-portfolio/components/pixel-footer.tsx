"use client";

import Link from "next/link";
import { GithubIcon, TwitterIcon, InstagramIcon, LinkedinIcon } from "lucide-react";
import { motion } from "framer-motion";
import { PixelSeparator } from "@/components/pixel-separator";

export function PixelFooter() {
  const currentYear = new Date().getFullYear();
  
  const socialLinks = [
    { icon: <GithubIcon size={24} />, href: "https://github.com", label: "GitHub" },
    { icon: <TwitterIcon size={24} />, href: "https://twitter.com", label: "Twitter" },
    { icon: <InstagramIcon size={24} />, href: "https://instagram.com", label: "Instagram" },
    { icon: <LinkedinIcon size={24} />, href: "https://linkedin.com", label: "LinkedIn" },
  ];

  const footerLinks = [
    { name: "Home", href: "/" },
    { name: "Blog", href: "/blog" },
    { name: "Works", href: "/works" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <footer className="bg-primary/20 border-t-4 border-black mt-16 pixel-grid">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="mcdonalds-arch"></div>
              <h3 className="text-xl font-bold">PixelPortfolio</h3>
            </div>
            <p className="text-lg">
              A pixel-perfect blog and portfolio showcasing my creative works and thoughts.
            </p>
          </div>
          
          <div className="space-y-4">
            <h3 className="text-lg font-bold px-4 py-2 bg-black text-primary inline-block">Navigation</h3>
            <ul className="space-y-2">
              {footerLinks.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href}
                    className="text-lg hover:text-primary transition-colors flex items-center"
                  >
                    <span className="mr-2">■</span>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="space-y-4">
            <h3 className="text-lg font-bold px-4 py-2 bg-black text-primary inline-block">Connect</h3>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="p-2 bg-white dark:bg-foreground border-2 border-black hover:bg-primary transition-colors dark:text-background"
                  whileHover={{ y: -5 }}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
            <p className="text-lg mt-4">
              Let's connect and create something awesome together!
            </p>
          </div>
        </div>
        
        <PixelSeparator className="my-8" />
        
        <div className="text-center">
          <p className="text-lg">
            © {currentYear} PixelPortfolio. All rights reserved.
          </p>
          <p className="text-sm mt-2">
            Crafted with 🍔 and pixel love
          </p>
        </div>
      </div>
    </footer>
  );
}