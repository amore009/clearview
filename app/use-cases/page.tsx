"use client";
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Footer } from '../components/Footer';
import { Navbar } from '../components/Navbar';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

// Cleaned up dataset: Row/Col span variables removed for standard grid uniformity
const cases = [
  {
    id: 1,
    slug: "dudden-hill",
    title: "Dudden Hill",
    description: "A bold brand identity system built for a forward-thinking organisation rooted in community.",
    image: "/projects/duddenHill/1.jpg",
    tags: ["Brand Identity", "Visual Identity"],
  },
  {
    id: 2,
    slug: "dudden-hill-next",
    title: "Dudden Hill Next",
    description: "Our identity is designed to move—using expressive type and vibrant color to speak directly to a new generation of leaders.",
    image: "/projects/duddenHillNext/1.jpg",
    tags: ["Brand Identity", "Visual Identity"],
  },
  {
    id: 3,
    slug: "woven-aura",
    title: "Woven Aura",
    description: "A innovative approach to sustainable fashion branding.",
    image: "/projects/wovenAura/31.jpg",
    tags: ["Brand Identity", "Sustainability", "Fashion"],
  },
  {
    id: 4,
    slug: "premier-textiles",
    title: "Premier Textiles",
    description: "Premier Textiles is more than a fabric store. It’s a name families, fashion lovers, and tailors have come to trust.",
    image: "/projects/premierTextiles/11.jpg",
    tags: ["Brand Strategy", "Brand Identity", "Fashion"],
  },
  {
    id: 5,
    slug: "wildberries",
    title: "Wildberries",
    description: "Wildberries is a premium party-favor experience designed to bring a sense of joy, elegance, and warmth.",
    image: "/projects/wildberries/1.jpg",
    tags: ["Brand Strategy", "Brand Identity", "Party Favors"],
  },
  {
    id: 6,
    slug: "silver-swan",
    title: "Silver Swan",
    description: "Silver Swan Integrated Hub is a not-for-profit organization based in Montreal dedicated to strengthening underserved communities.",
    image: "/projects/silverSwan/31.jpg",
    tags: ["Brand Strategy", "Brand Identity"],
  },
  {
    id: 7,
    slug: "sea-seo-report-april-city-center-barbershop",
    title: "SEA & SEO Report",
    description: "A comprehensive analysis of search engine advertising and optimization strategies for City Center Barbershop.",
    image: "/projects/barbershop_report/1.jpg",
    tags: ["Brand Strategy", "Brand Identity", "Community"],
  },
  {
    id: 8,
    slug: "packmate-advertising-report",
    title: "Packmate Advertising Report",
    description: "A comprehensive analysis of search engine advertising and optimization strategies for Packmate.",
    image: "/projects/packmate_report/1.jpg",
    tags: ["Brand Strategy", "Brand Identity", "Community"],
  }
];

function CaseCard({ useCase }: { useCase: typeof cases[0] }) {
  const [hovered, setHovered] = useState(false);
  const router = useRouter();

  return (
    <motion.div
      className="group flex flex-col cursor-pointer w-full"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={() => router.push(`/use-cases/${useCase.slug}`)}
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      {/* Image Wrapper: Enforces a solid, uniform 4:3 aspect ratio across all screen sizes */}
      <div className="relative w-full aspect-[4/3] overflow-hidden rounded-md bg-gray-100 mb-4">
        <Image
          src={useCase.image}
          alt={useCase.title}
          fill
          sizes="(max-w-7xl) 33vw, (max-w-md) 100vw"
          priority={useCase.id <= 3}
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-102"
        />
        
        {/* Subtle, Minimalist hover overlay */}
        <div 
          className={`absolute inset-0 bg-black/5 transition-opacity duration-300 ${hovered ? 'opacity-100' : 'opacity-0'}`} 
        />
      </div>

      {/* Elegant, Clean Metadata Container underneath image */}
      <div className="flex flex-col flex-grow px-1">
        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-2">
          {useCase.tags.slice(0, 2).map((tag) => (
            <span
              key={tag}
              className="text-[10px] uppercase tracking-wider font-medium text-gray-400"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Title & Arrow Link */}
        <div className="flex items-start justify-between gap-4 mb-1">
          <h3 className="text-gray-900 text-lg font-bold tracking-tight leading-snug group-hover:text-gray-600 transition-colors">
            {useCase.title}
          </h3>
          <div className="w-5 h-5 flex items-center justify-center shrink-0 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-[-4px] group-hover:translate-x-0">
            <svg width="12" height="12" viewBox="0 0 14 14" fill="none">
              <path d="M2 12L12 2M12 2H5M12 2V9" stroke="#111827" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
        </div>

        {/* Description */}
        <p className="text-gray-500 text-xs font-sans leading-relaxed line-clamp-2">
          {useCase.description}
        </p>
      </div>
    </motion.div>
  );
}

export default function UseCases() {
  return (
    <>
      <Navbar />
      <main className="w-full min-h-screen bg-white pt-24 pb-10">

        {/* Header */}
        <section className="w-full max-w-6xl mx-auto px-4 md:px-14 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-gray-900 text-4xl md:text-5xl font-black font-header mb-4 tracking-tight">
              Use Cases
            </h1>
            <p className="text-gray-600 text-sm max-w-2xl font-sans leading-relaxed">
              Explore the work we've done for forward-thinking brands across different industries. Each project tells a unique story of challenges solved, ideas brought to life, and measurable wins delivered through smart, creative marketing.
            </p>
          </motion.div>
        </section>

        {/* Standard Minimalist Grid */}
        <section className="w-full max-w-6xl mx-auto px-4 md:px-14 mb-24">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-6 gap-y-12">
            {cases.map((useCase) => (
              <CaseCard key={useCase.id} useCase={useCase} />
            ))}
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}