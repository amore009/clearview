"use client";
import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import AnimatedButton from './animatedButton';

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

  .badge-animate {
    opacity: 0;
  }

  .badge-animate.in-view {
    animation: fadeInUp 0.8s ease-out 0.1s forwards;
  }

  .heading-animate {
    opacity: 0;
  }

  .heading-animate.in-view {
    animation: fadeInUp 0.8s ease-out 0.2s forwards;
  }

  .description-animate {
    opacity: 0;
  }

  .description-animate.in-view {
    animation: fadeInUp 0.8s ease-out 0.3s forwards;
  }

  .button-animate {
    opacity: 0;
  }

  .button-animate.in-view {
    animation: fadeInUp 0.8s ease-out 0.4s forwards;
  }

  .image-animate {
    opacity: 0;
  }

  .image-animate.in-view {
    animation: fadeInUp 0.8s ease-out 0.5s forwards;
  }
`;

export function LeadData() {
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
      <section ref={sectionRef} className="py-6 md:py-12 flex flex-col md:flex-row gap-8 items-center justify-between px-4 md:px-14 max-w-6xl mx-auto">
        <div className="flex flex-col gap-6 items-start w-full md:w-1/2">
          <div className={`bg-[#FFEBE4] border border-gray-100 rounded-md px-4 py-2 shadow-xs badge-animate ${isVisible ? 'in-view' : ''}`}>
            <p className="text-orange-500 text-[0.75rem] font-medium font-sans">
              Maximize your business growth
            </p>
          </div>

          
          
          <div className="flex flex-col gap-4 items-start">
            <h2 className={`text-text-main text-4xl md:text-5xl font-black leading-tight font-header heading-animate ${isVisible ? 'in-view' : ''}`}>
              Hyper-Target Lead Data Using Our Managed Market Based Search Engine
            </h2>
            <p className={`text-gray-600 text-xs leading-relaxed font-sans description-animate ${isVisible ? 'in-view' : ''}`}>
              We aggregate, match, and verify information in real-time across 1.9 billion companies 500+ million people. Welcome to the leader in cutting edge data and lead intelligence allowing you to build a better qualified pipeline.
            </p>
             <AnimatedButton
  text="Book Discovery Call"
  href="/"
  bgColor="var(--primary)"
  hoverColor="var(--foreground)"
  textColor="var(--background)"
  hoverTextColor="var(--background)"  
  textColorChange
/>
          </div>
        </div>

        
          <Image 
            src="/lead-data-image.jpg" 
            alt="Hyper-Target Lead Data" 
            width={800}
            height={500}
            className={`w-full md:w-1/2 h-full object-contain ${isVisible ? 'in-view' : ''}`}
          />
      
      </section>
    </>
  );
}
