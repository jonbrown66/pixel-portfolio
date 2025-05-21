import { PixelSeparator } from "@/components/pixel-separator";
import { WorksCard } from "@/components/works-card";

// Sample works data
const works = [
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
  },
  {
    title: "PixelFolio",
    description: "A portfolio template for digital artists featuring a pixel art aesthetic.",
    slug: "pixelfolio",
    imageUrl: "https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    tags: ["Web Design", "Next.js", "Portfolio"]
  },
  {
    title: "RetroChat",
    description: "A messaging application with a nostalgic 90s computer interface.",
    slug: "retrochat",
    imageUrl: "https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    tags: ["WebSockets", "UI Design", "React"]
  },
  {
    title: "PixelWeather",
    description: "A weather application that displays forecast data with pixel art illustrations.",
    slug: "pixelweather",
    imageUrl: "https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    tags: ["API Integration", "Weather", "Pixel Art"]
  },
  {
    title: "BitBlogger",
    description: "A minimalist blogging platform with pixelated visual elements.",
    slug: "bitblogger",
    imageUrl: "https://images.pexels.com/photos/262508/pexels-photo-262508.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    tags: ["CMS", "Content Creation", "Typescript"]
  }
];

export default function WorksPage() {
  return (
    <div className="pixel-grid min-h-screen">
      <section className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">My Works</h1>
          <p className="text-xl max-w-2xl mx-auto">
            A collection of my projects, designs, and creative experiments.
          </p>
        </div>
        
        <PixelSeparator />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {works.map((work, index) => (
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
    </div>
  );
}