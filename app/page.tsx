"use client"
import React from 'react';
import { Hero } from "@/app/components/Hero";
import { WhatWeDo } from "@/app/components/WhatWeDo";
import { LeadData } from "@/app/components/LeadData";
import { Services } from "@/app/components/Services";
import { Projects } from "@/app/components/Projects";
import { FAQ } from "@/app/components/FAQ";
import { Testimonials } from "@/app/components/Testimonials";
import { CTA } from "@/app/components/CTA";
import { Footer } from "@/app/components/Footer";
import { Navbar } from './components/Navbar';

export default function Home() {
  return (
    <>
      {/* Additional decorative blurs scattered through the page - kept from original App.tsx */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        <div className="absolute top-600 -right-13.75 w-75 md:w-122.75 h-75 md:h-122.75 opacity-50">
          <svg className="w-full h-full" viewBox="0 0 1193 1193" fill="none">
            <g filter="url(#filter_blur_1)">
              <circle cx="596.5" cy="596.5" r="245.5" fill="var(--color-brand-button)" fillOpacity="0.5" />
            </g>
            <defs>
              <filter id="filter_blur_1" x="0" y="0" width="1193" height="1193" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                <feGaussianBlur stdDeviation="175.5" result="effect1_foregroundBlur" />
              </filter>
            </defs>
          </svg>
        </div>
      </div>
      <Navbar />
      <main className="w-full min-h-screen bg-white pt-6">
        <Hero />
        <WhatWeDo />
        <LeadData />
        <Services />
        <Projects />
        <FAQ />
        <Testimonials />
        <CTA />
        <Footer />
      </main>
    </>
  );
}
