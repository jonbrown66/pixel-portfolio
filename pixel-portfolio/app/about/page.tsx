import Image from "next/image";
import { PixelSeparator } from "@/components/pixel-separator";
import { AboutSection } from "@/components/about-section";

export default function AboutPage() {
  return (
    <div className="pixel-grid min-h-screen">
      <section className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">About Me</h1>
          <p className="text-xl max-w-2xl mx-auto">
            Get to know the person behind the pixels.
          </p>
        </div>
        
        <PixelSeparator />
        
        <AboutSection />
        
        <PixelSeparator />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-16">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold">My Journey</h2>
            
            <p className="text-lg">
              My fascination with pixel art began in the early days of gaming, where limited resolutions forced designers to make every pixel count. This appreciation evolved into a passion for creating digital experiences that combine nostalgic elements with modern functionality.
            </p>
            
            <p className="text-lg">
              Over the years, I've worked with startups, established companies, and independent creators to bring their visions to life through the unique lens of pixel art aesthetics.
            </p>
            
            <p className="text-lg">
              I believe that limitations breed creativity, and the constraints of pixel art encourage innovative solutions that stand out in today's digital landscape.
            </p>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <div className="relative h-48 pixel-card overflow-hidden">
              <Image
                src="https://images.pexels.com/photos/1762851/pexels-photo-1762851.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="Working on designs"
                fill
                className="object-cover"
                style={{ imageRendering: "pixelated" }}
              />
            </div>
            
            <div className="relative h-48 pixel-card overflow-hidden">
              <Image
                src="https://images.pexels.com/photos/4050315/pexels-photo-4050315.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="Coding session"
                fill
                className="object-cover"
                style={{ imageRendering: "pixelated" }}
              />
            </div>
            
            <div className="relative h-48 pixel-card overflow-hidden">
              <Image
                src="https://images.pexels.com/photos/5935794/pexels-photo-5935794.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="Design workshop"
                fill
                className="object-cover"
                style={{ imageRendering: "pixelated" }}
              />
            </div>
            
            <div className="relative h-48 pixel-card overflow-hidden">
              <Image
                src="https://images.pexels.com/photos/7014337/pexels-photo-7014337.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="Speaking at conference"
                fill
                className="object-cover"
                style={{ imageRendering: "pixelated" }}
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}