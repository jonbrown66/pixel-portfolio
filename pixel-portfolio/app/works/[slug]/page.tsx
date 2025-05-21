import Image from "next/image";
import Link from "next/link";
import { PixelSeparator } from "@/components/pixel-separator";
import { ArrowLeftIcon, ExternalLinkIcon } from "lucide-react";
import { Button } from "@/components/ui/button";

// Sample works data (in a real app, this would come from a database)
const works = {
  "pixel-arcade": {
    title: "Pixel Arcade",
    description: "A retro-inspired game collection with modern gameplay mechanics.",
    content: `
      Pixel Arcade is a collection of classic arcade games reimagined with modern gameplay mechanics while maintaining the charm of pixel art aesthetics.

      The project combines nostalgic visual elements with contemporary game design principles to create an engaging gaming experience that appeals to both retro gaming enthusiasts and modern players.

      Key Features:

      1. Multiple Classic Games
      2. Modern Controls
      3. Responsive Design
      4. Cross-platform Compatibility
      5. Local Multiplayer Support

      Technical Stack:

      - React for UI components
      - Canvas API for game rendering
      - Web Audio API for sound effects
      - Local Storage for high scores
      - Responsive controls for both desktop and mobile
    `,
    imageUrl: "https://images.pexels.com/photos/3165335/pexels-photo-3165335.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    tags: ["Game Design", "Pixel Art", "JavaScript"],
    link: "https://pixel-arcade.example.com"
  },
  "burger-bytes": {
    title: "Burger Bytes",
    description: "A fast-food ordering system with a delightful pixel art interface.",
    content: `
      Burger Bytes is a modern food ordering platform that stands out with its unique pixel art interface, making the ordering process both fun and efficient.

      The project demonstrates how retro-style visuals can enhance user experience in practical applications, creating memorable interactions for customers.

      Key Features:

      1. Interactive Menu
      2. Real-time Order Tracking
      3. Custom Order Builder
      4. Loyalty Program
      5. Mobile-first Design

      Technical Stack:

      - Next.js for the frontend
      - Supabase for backend services
      - Stripe for payments
      - PWA support
      - Real-time notifications
    `,
    imageUrl: "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    tags: ["UI/UX", "React", "Ecommerce"],
    link: "https://burger-bytes.example.com"
  }
};

export function generateStaticParams() {
  return Object.keys(works).map((slug) => ({
    slug,
  }));
}

export default function WorksPost({ params }: { params: { slug: string } }) {
  const work = works[params.slug as keyof typeof works];

  if (!work) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Project Not Found</h1>
          <Button asChild variant="outline" className="pixel-button">
            <Link href="/works">
              <ArrowLeftIcon className="mr-2 h-5 w-5" />
              Back to Works
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
            <Link href="/works" className="flex items-center">
              <ArrowLeftIcon className="mr-2 h-5 w-5" />
              Back to Works
            </Link>
          </Button>

          <div>
            <h1 className="text-4xl font-bold mb-6">{work.title}</h1>
            
            <div className="flex flex-wrap gap-2 mb-8">
              {work.tags.map((tag) => (
                <span 
                  key={tag}
                  className="bg-primary text-foreground px-3 py-1 text-sm font-medium border-2 border-foreground"
                >
                  {tag}
                </span>
              ))}
            </div>

            <div className="relative h-[400px] w-full mb-8">
              <div className="absolute inset-4 border-4 border-foreground bg-primary/20 z-0"></div>
              <div className="absolute inset-0 pixel-card overflow-hidden">
                <Image
                  src={work.imageUrl}
                  alt={work.title}
                  fill
                  className="object-cover"
                  style={{ imageRendering: "pixelated" }}
                />
              </div>
            </div>

            <PixelSeparator />

            <div className="prose prose-lg dark:prose-invert mt-8 space-y-6">
              {work.content.split("\n\n").map((paragraph, index) => (
                <p key={index} className="text-lg leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </div>

            <PixelSeparator />

            <div className="mt-8 text-center">
              <Button asChild className="pixel-button text-lg py-6">
                <a href={work.link} target="_blank" rel="noopener noreferrer" className="flex items-center">
                  Visit Project
                  <ExternalLinkIcon className="ml-2 h-5 w-5" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
}