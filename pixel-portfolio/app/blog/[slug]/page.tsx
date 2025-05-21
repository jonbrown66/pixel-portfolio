import Image from "next/image";
import Link from "next/link";
import { PixelSeparator } from "@/components/pixel-separator";
import { ArrowLeftIcon } from "lucide-react";
import { Button } from "@/components/ui/button";

// Sample blog data (in a real app, this would come from a database)
const blogPosts = {
  "evolution-pixel-art-web-design": {
    title: "The Evolution of Pixel Art in Modern Web Design",
    content: `
      Pixel art has come a long way from its origins in early video games. What was once a technical limitation has evolved into a deliberate artistic choice that brings charm and nostalgia to modern web designs.

      The resurgence of pixel art in contemporary web design isn't just about nostalgia – it's about making a bold statement. In an era of high-resolution displays and photorealistic graphics, pixel art stands out by embracing its digital roots.

      Modern pixel art in web design often combines retro aesthetics with contemporary design principles. This fusion creates unique experiences that feel both familiar and fresh.

      Key aspects of modern pixel art in web design:

      1. Responsive Scaling
      2. Color Theory Application
      3. Animation Integration
      4. User Interface Enhancement

      The future of pixel art in web design looks promising as more designers discover ways to incorporate this style into modern projects.
    `,
    date: new Date("2023-04-15"),
    imageUrl: "https://images.pexels.com/photos/2749481/pexels-photo-2749481.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    readTime: 7
  },
  "responsive-pixel-art-designs": {
    title: "Creating Responsive Pixel Art Designs",
    content: `
      Creating responsive pixel art designs requires careful consideration of scaling, resolution, and display sizes. This guide explores techniques for maintaining pixel art aesthetics across different devices.

      The challenge lies in preserving the crisp, precise nature of pixel art while ensuring it looks good on various screen sizes. We'll explore different approaches and best practices.

      Key considerations for responsive pixel art:

      1. Scaling Algorithms
      2. Resolution Independence
      3. Breakpoint Management
      4. Performance Optimization

      By following these guidelines, you can create pixel art designs that maintain their charm across all devices.
    `,
    date: new Date("2023-05-22"),
    imageUrl: "https://images.pexels.com/photos/3165335/pexels-photo-3165335.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    readTime: 5
  }
};

export function generateStaticParams() {
  return Object.keys(blogPosts).map((slug) => ({
    slug,
  }));
}

export default function BlogPost({ params }: { params: { slug: string } }) {
  const post = blogPosts[params.slug as keyof typeof blogPosts];

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Post Not Found</h1>
          <Button asChild variant="outline" className="pixel-button">
            <Link href="/blog">
              <ArrowLeftIcon className="mr-2 h-5 w-5" />
              Back to Blog
            </Link>
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="pixel-grid min-h-screen">
      <article className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <Button asChild variant="outline" className="pixel-button mb-8">
            <Link href="/blog" className="flex items-center">
              <ArrowLeftIcon className="mr-2 h-5 w-5" />
              Back to Blog
            </Link>
          </Button>

          <div>
            <h1 className="text-4xl font-bold mb-6">{post.title}</h1>
            
            <div className="flex items-center gap-4 text-muted-foreground mb-8">
              <span>{post.date.toLocaleDateString()}</span>
              <span>•</span>
              <span>{post.readTime} min read</span>
            </div>

            <div className="relative h-[400px] w-full mb-8">
              <div className="absolute inset-4 border-4 border-foreground bg-primary/20 z-0"></div>
              <div className="absolute inset-0 pixel-card overflow-hidden">
                <Image
                  src={post.imageUrl}
                  alt={post.title}
                  fill
                  className="object-cover"
                  style={{ imageRendering: "pixelated" }}
                />
              </div>
            </div>

            <PixelSeparator />

            <div className="prose prose-lg dark:prose-invert mt-8 space-y-6">
              {post.content.split("\n\n").map((paragraph, index) => (
                <p key={index} className="text-lg leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </div>
      </article>
    </div>
  );
}