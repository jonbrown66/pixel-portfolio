"use client";

import { motion } from "framer-motion";
import { CodeIcon, PaintbrushIcon, LayoutIcon, RocketIcon } from "lucide-react";

const services = [
  {
    title: "Web Development",
    description: "Custom websites built with modern technologies for optimal performance and user experience.",
    icon: <CodeIcon className="h-10 w-10" />,
  },
  {
    title: "UI/UX Design",
    description: "Intuitive and visually appealing designs that create meaningful experiences for users.",
    icon: <PaintbrushIcon className="h-10 w-10" />,
  },
  {
    title: "Brand Identity",
    description: "Cohesive visual systems that communicate your brand's unique story and values.",
    icon: <LayoutIcon className="h-10 w-10" />,
  },
  {
    title: "Digital Marketing",
    description: "Strategic campaigns that increase visibility and drive engagement with your target audience.",
    icon: <RocketIcon className="h-10 w-10" />,
  },
];

export function ServicesSection() {
  return (
    <section className="container mx-auto px-4 py-16">
      <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">My Services</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {services.map((service, index) => (
          <motion.div
            key={service.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ y: -10 }}
            className="pixel-card p-6 bg-white dark:bg-black"
          >
            <div className="p-4 bg-primary text-black mb-6 inline-block border-2 border-black">
              {service.icon}
            </div>
            
            <h3 className="text-xl font-bold mb-3">{service.title}</h3>
            <p className="text-gray-700 dark:text-gray-300">{service.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}