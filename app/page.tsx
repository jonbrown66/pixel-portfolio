import { PixelHero } from "@/components/pixel-hero";
import { AboutSection } from "@/components/about-section";
import { ServicesSection } from "@/components/services-section";
import { PixelSeparator } from "@/components/pixel-separator";
import { BlogCard } from "@/components/blog-card";
import { WorksCard } from "@/components/works-card";
import Link from "next/link";
import { ArrowRightIcon } from "lucide-react";
import { Button } from "@/components/ui/button";

// Sample data
const featuredPosts = [
  {
    title: "The Evolution of Pixel Art in Modern Web Design",
    excerpt: "Exploring how pixel art has found its place in contemporary web design and why it remains a popular stylistic choice.",
    slug: "evolution-pixel-art-web-design",
    date: new Date("2023-04-15"),
    imageUrl: "https://images.pexels.com/photos/2749481/pexels-photo-2749481.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    readTime: 7
  },
  {
    title: "Creating Responsive Pixel Art Designs",
    excerpt: "Learn the techniques to maintain pixel art aesthetics across different screen sizes while ensuring your designs remain responsive.",
    slug: "responsive-pixel-art-designs",
    date: new Date("2023-05-22"),
    imageUrl: "https://images.pexels.com/photos/3165335/pexels-photo-3165335.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    readTime: 5
  },
  {
    title: "The Psychology of Color in Pixel Art",
    excerpt: "How limited color palettes can evoke powerful emotions and create memorable experiences in pixel art designs.",
    slug: "psychology-color-pixel-art",
    date: new Date("2023-06-10"),
    imageUrl: "https://images.pexels.com/photos/1910225/pexels-photo-1910225.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    readTime: 6
  }
];

const featuredWorks = [
  {
    title: "Pixel Arcade",
    description: "A retro-inspired game collection with modern gameplay mechanics.",
    slug: "pixel-arcade",
    imageUrl: "https://images.pexels.com/photos/3165335/pexels-photo-3165335.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    tags: ["Game Design", "Pixel Art", "JavaScript"]
  },
  {
    title: "Burger Bytes",
    description: "A fast-food ordering system with a delightful pixel art interface.",
    slug: "burger-bytes",
    imageUrl: "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    tags: ["UI/UX", "React", "Ecommerce"]
  }
];

export default function Home() {
  return (
    <div className="pixel-grid min-h-screen">
      <PixelHero />
      
      <PixelSeparator />
      
      <AboutSection />
      
      <PixelSeparator />
      
      <ServicesSection />
      
      <PixelSeparator />
      
      {/* Featured Works Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="flex justify-between items-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">Featured Works</h2>
          <Button asChild variant="outline" className="pixel-button">
            <Link href="/works" className="flex items-center">
              View All
              <ArrowRightIcon className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {featuredWorks.map((work, index) => (
            <WorksCard
              key={work.slug}
              title={work.title}
              description={work.description}
              slug={work.slug}
              imageUrl={work.imageUrl}
              tags={work.tags}
              index={index}
            />
          ))}
        </div>
      </section>
      
      <PixelSeparator />
      
      {/* Blog Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="flex justify-between items-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">Latest Articles</h2>
          <Button asChild variant="outline" className="pixel-button">
            <Link href="/blog" className="flex items-center">
              Read All
              <ArrowRightIcon className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featuredPosts.map((post, index) => (
            <BlogCard
              key={post.slug}
              title={post.title}
              excerpt={post.excerpt}
              slug={post.slug}
              date={post.date}
              imageUrl={post.imageUrl}
              readTime={post.readTime}
              index={index}
            />
          ))}
        </div>
      </section>
    </div>
  );
}