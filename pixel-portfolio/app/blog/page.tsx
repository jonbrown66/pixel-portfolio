import { PixelSeparator } from "@/components/pixel-separator";
import { BlogCard } from "@/components/blog-card";

// Sample blog data
const blogPosts = [
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
  },
  {
    title: "Pixel Art Animation Techniques for Web",
    excerpt: "A deep dive into creating engaging pixel art animations that enhance user experience without affecting performance.",
    slug: "pixel-art-animation-techniques",
    date: new Date("2023-07-05"),
    imageUrl: "https://images.pexels.com/photos/1918290/pexels-photo-1918290.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    readTime: 8
  },
  {
    title: "Accessibility in Pixel Art Websites",
    excerpt: "Ensuring your pixel art designs remain accessible to all users while maintaining their unique aesthetic appeal.",
    slug: "accessibility-pixel-art-websites",
    date: new Date("2023-08-14"),
    imageUrl: "https://images.pexels.com/photos/957024/forest-trees-perspective-bright-957024.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    readTime: 6
  },
  {
    title: "From 8-bit to Modern: The Journey of Pixel Art",
    excerpt: "Tracing the evolution of pixel art from technical necessity to beloved artistic style in digital design.",
    slug: "8bit-to-modern-pixel-art",
    date: new Date("2023-09-01"),
    imageUrl: "https://images.pexels.com/photos/2832382/pexels-photo-2832382.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    readTime: 9
  }
];

export default function BlogPage() {
  return (
    <div className="pixel-grid min-h-screen">
      <section className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Blog</h1>
          <p className="text-xl max-w-2xl mx-auto">
            Thoughts, stories, and ideas about pixel art, web design, and creative coding.
          </p>
        </div>
        
        <PixelSeparator />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {blogPosts.map((post, index) => (
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