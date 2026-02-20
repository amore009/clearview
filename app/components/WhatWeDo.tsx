"use client";
import React, { useEffect, useRef, useState } from 'react';
import { Users, Image, Users2 } from 'lucide-react';

const animationStyles = `
  @keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  .section-title {
    opacity: 0;
  }

  .section-title.in-view {
    animation: fadeInUp 0.8s ease-out 0.1s forwards;
  }

  .section-description {
    opacity: 0;
  }

  .section-description.in-view {
    animation: fadeInUp 0.8s ease-out 0.2s forwards;
  }

  .card-animate {
    opacity: 0;
  }

  .card-animate.in-view:nth-child(1) {
    animation: fadeInUp 0.8s ease-out 0.3s forwards;
  }

  .card-animate.in-view:nth-child(2) {
    animation: fadeInUp 0.8s ease-out 0.4s forwards;
  }

  .card-animate.in-view:nth-child(3) {
    animation: fadeInUp 0.8s ease-out 0.5s forwards;
  }
`;

export function WhatWeDo() {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <>
      <style>{animationStyles}</style>
      <section ref={sectionRef} className="py-6 md:py-12 flex flex-col md:flex-row gap-8 xl:gap-16 items-start justify-center px-4 md:px-14 max-w-6xl mx-auto">
      <div className="flex flex-col gap-4 items-start w-full md:max-w-xs">
        <h2 className={`text-text-main text-4xl md:text-5xl font-black leading-tight font-header section-title ${isVisible ? 'in-view' : ''}`}>
          What Clearview<br />does
        </h2>
        <p className={`text-gray-600 text-xs font-sans leading-relaxed section-description ${isVisible ? 'in-view' : ''}`}>
          Clearview helps brands tell powerful stories and create meaningful connections. Through strategic thinking, thoughtful design, and innovative digital marketing, we ensure your message cuts through the noise and reaches the people who matter most.
        </p>
      </div>

      <div className="flex flex-col gap-4 w-full">
        {/* Salespeople Card */}
        <div className={`bg-linear-to-r from-[#D3D0CF80] to-[#E0E0E033] rounded-xl p-4 card-animate ${isVisible ? 'in-view' : ''}`}>
          <div className="flex flex-col md:flex-row gap-2 md:gap-4 items-start">
            <div className="bg-orange-500 rounded-full w-10 h-10 shrink-0 flex items-center justify-center shadow-sm">
              <Users className="w-5 h-5 text-white" />
            </div>
            <div className="flex flex-col ">
              <h3 className="text-text-dark text-base font-semibold font-sans">Salespeople</h3>
              <p className="text-gray-600 text-xs font-sans leading-relaxed">
                Salespeople love that we provide hyper-targeted lead searches and provide actual contact data. Not to mention fully managed list building so they spend more time talking to prospects vs researching them.
              </p>
            </div>
          </div>
        </div>

        {/* Marketers Card */}
        <div className={`bg-linear-to-r from-[#E0E0E033] to-[#D3D0CF80] rounded-xl p-4 card-animate ${isVisible ? 'in-view' : ''}`}>
          <div className="flex flex-col md:flex-row gap-2 md:gap-4 items-start">
            <div className="bg-orange-500 rounded-full w-10 h-10 shrink-0 flex items-center justify-center shadow-sm">
              <Image className="w-5 h-5 text-white" />
            </div>
            <div className="flex flex-col ">
              <h3 className="text-text-dark text-base font-semibold font-sans">Marketers</h3>
              <p className="text-gray-600 text-xs font-sans leading-relaxed">
                Marketers love that we provide personal emails as well as business emails so you can have higher match rates for custom audience ad targeting and building outreach lists for their sales team.
              </p>
            </div>
          </div>
        </div>

        {/* Recruiters Card */}
        <div className={`bg-linear-to-r from-[#D3D0CF80] to-[#E0E0E033] rounded-xl p-4 card-animate ${isVisible ? 'in-view' : ''}`}>
          <div className="flex flex-col md:flex-row gap-2 md:gap-4 items-start">
            <div className="bg-orange-500 rounded-full w-10 h-10 shrink-0 flex items-center justify-center shadow-sm">
              <Users2 className="w-5 h-5 text-white" />
            </div>
            <div className="flex flex-col ">
              <h3 className="text-text-dark text-base font-semibold font-sans">Recruiters</h3>
              <p className="text-gray-600 text-xs font-sans leading-relaxed">
                Recruiters love that we provide both personal and company emails and filtering by people who do not have an active job. Use it as a passive sourcing tool to find people who are not actively looking for a job!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
  );
}
