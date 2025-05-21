"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ExternalLinkIcon } from "lucide-react";

interface WorksCardProps {
  title: string;
  description: string;
  slug: string;
  imageUrl: string;
  tags: string[];
  index?: number;
}

export function WorksCard({ title, description, slug, imageUrl, tags, index = 0 }: WorksCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ scale: 1.02 }}
      className="pixel-card overflow-hidden h-full flex flex-col"
    >
      <div className="relative h-56">
        <Image
          src={imageUrl}
          alt={title}
          fill
          className="object-cover"
          style={{ imageRendering: "pixelated" }}
        />
        <div className="absolute inset-0 bg-black bg-opacity-30 opacity-0 hover:opacity-100 transition-opacity flex items-center justify-center">
          <Link 
            href={`/works/${slug}`}
            className="bg-primary text-black font-bold px-6 py-3 border-2 border-black flex items-center"
          >
            View Project <ExternalLinkIcon className="ml-2 h-4 w-4" />
          </Link>
        </div>
      </div>
      
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-bold mb-2 min-h-[3rem] line-clamp-2">{title}</h3>
        <p className="text-muted-foreground mb-4 line-clamp-2 flex-grow">{description}</p>
        
        <div className="flex flex-wrap gap-2 mt-auto">
          {tags.map((tag) => (
            <span 
              key={tag} 
              className="bg-black text-primary text-sm px-3 py-1 font-medium"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}