'use client';

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Calendar, Clock } from "lucide-react";
import { format } from "date-fns";

interface BlogPostProps {
  title: string;
  excerpt: string;
  slug: string;
  date: Date;
  imageUrl: string;
  readTime: number;
  index?: number;
}

export function BlogCard({ title, excerpt, slug, date, imageUrl, readTime, index = 0 }: BlogPostProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -10 }}
      className="pixel-card overflow-hidden h-full flex flex-col"
    >
      <Link href={`/blog/${slug}`} className="block h-full flex flex-col">
        <div className="h-48 relative">
          <Image
            src={imageUrl}
            alt={title}
            fill
            className="object-cover"
            style={{ imageRendering: "pixelated" }}
          />
        </div>
        
        <div className="p-6 flex flex-col flex-grow">
          <div className="flex items-center justify-between mb-4 text-sm text-muted-foreground">
            <span className="flex items-center gap-1">
              <Calendar size={16} />
              {format(date, "MMM dd, yyyy")}
            </span>
            <span className="flex items-center gap-1">
              <Clock size={16} />
              {readTime} min read
            </span>
          </div>
          
          <h3 className="text-xl font-bold mb-2 line-clamp-2 min-h-[3.5rem]">{title}</h3>
          <p className="text-muted-foreground line-clamp-3 mb-4 flex-grow">{excerpt}</p>
          
          <div className="bg-primary text-black font-bold px-4 py-2 inline-block border-2 border-black mt-auto">
            Read More
          </div>
        </div>
      </Link>
    </motion.div>
  );
}