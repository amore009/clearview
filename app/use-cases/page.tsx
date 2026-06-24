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

const categories = [
  "All",
  "Google Ads",
  "SEO",
  "Social",
  "Content",
  "Analytics",
  "Web",
];

function CaseCard({ useCase }: { useCase: typeof cases[0] }) {
  const router = useRouter();
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={() => router.push(`/use-cases/${useCase.slug}`)}
      className="group relative overflow-hidden rounded-[24px] cursor-pointer h-[420px]"
    >
      <Image
        src={useCase.image}
        alt={useCase.title}
        fill
        className={`object-cover transition-all duration-700 ${
          hovered ? "scale-105" : "scale-100"
        }`}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />

      {/* Top Tags */}
      <div className="absolute top-5 left-5 flex gap-2 z-20">
        <span className="px-3 py-1 rounded-full bg-white/10 backdrop-blur-md text-white text-xs font-medium">
          2025
        </span>

        <span className="px-3 py-1 rounded-full bg-orange-500/20 border border-orange-500/30 text-orange-400 text-xs font-medium">
          {useCase.tags[0]}
        </span>
      </div>

      {/* Bottom Content */}
      <div className="absolute bottom-6 left-6 right-6 z-20">
        <p className="text-orange-400 text-sm mb-2">
          {useCase.tags[0]}
        </p>

        <h3 className="text-white text-3xl font-bold mb-2 leading-tight">
          {useCase.title}
        </h3>

        <p className="text-white/75 text-sm leading-relaxed max-w-md">
          {useCase.description}
        </p>
      </div>
    </motion.div>
  );
}

export default function UseCases() {
  const [activeCategory, setActiveCategory] = useState("All");

  return (
    <>
      <Navbar />

      <main className="bg-white min-h-screen pt-28 pb-24">

        {/* Header */}
        <section className="max-w-7xl mx-auto px-6 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-black text-5xl md:text-7xl font-black mb-5 tracking-tight">
              Results you can see.
            </h1>

            <p className="text-zinc-400 max-w-2xl text-base leading-relaxed">
              A curated selection of campaigns, websites, and growth systems
              we built to drive measurable business outcomes.
            </p>
          </motion.div>
        </section>

        {/* Filter Pills */}
        <section className="max-w-7xl mx-auto px-6 mb-14">
          <div className="flex flex-wrap gap-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-5 py-2 rounded-full border text-sm transition-all duration-300
                  ${
                    activeCategory === category
                      ? "bg-orange-500 border-orange-500 text-black"
                      : "border-zinc-700 text-black hover:border-orange-500 hover:text-black"
                  }`}
              >
                {category}
              </button>
            ))}
          </div>
        </section>

        {/* Portfolio Grid */}
        <section className="max-w-7xl mx-auto px-6">

          <div className="grid lg:grid-cols-2 gap-8">

            {cases.map((useCase, index) => (
              <div
                key={useCase.id}
                className={`${
                  index === 0 || index === 1
                    ? "h-[420px] md:h-[450px]"
                    : "h-[380px] md:h-[420px]"
                }`}
              >
                <CaseCard useCase={useCase} />
              </div>
            ))}

          </div>

        </section>

        {/* CTA */}
        <section className="max-w-6xl mx-auto px-6 mt-28">

          <div className="relative overflow-hidden rounded-[30px] border border-zinc-800 bg-gradient-to-b from-zinc-900 to-black">

            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(249,115,22,0.15),transparent_60%)]" />

            <div className="relative px-8 md:px-16 py-16 text-center">

              <h2 className="text-white text-4xl md:text-5xl font-black mb-5">
                Want results like these?
              </h2>

              <p className="text-zinc-400 max-w-xl mx-auto mb-10">
                Book a free strategy call and we'll map the fastest path
                to ROI for your brand.
              </p>

              <div className="flex flex-wrap justify-center gap-4">

                <a href='https://okconsulting.as.me/?appointmentType=59448363' className="bg-orange-500 hover:bg-orange-600 transition px-8 py-4 rounded-full text-white font-semibold">
                  Schedule a Call
                </a>

                <a href='/about' className="border border-zinc-700 hover:border-zinc-500 transition px-8 py-4 rounded-full text-white">
                  View Services
                </a>

              </div>
            </div>
          </div>

        </section>

      </main>

      <Footer />
    </>
  );
}