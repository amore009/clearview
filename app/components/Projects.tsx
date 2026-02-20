"use client";
import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react';

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

  @keyframes slideIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  @keyframes zoomIn {
    from {
      transform: scale(1);
    }
    to {
      transform: scale(1.05);
    }
  }

  .header-animate {
    opacity: 0;
  }

  .header-animate.in-view {
    animation: fadeInUp 0.8s ease-out 0.1s forwards;
  }

  .description-animate {
    opacity: 0;
  }

  .description-animate.in-view {
    animation: fadeInUp 0.8s ease-out 0.2s forwards;
  }

  .project-card {
    opacity: 0;
  }

  .project-card.in-view {
    animation: slideIn 0.6s ease-out forwards;
  }

  .carousel-container {
    scroll-behavior: smooth;
  }

  .project-image {
    transition: transform 0.4s ease-in-out;
    transform: scale(1);
  }

  .project-image:hover {
    transform: scale(1.08);
  }
`;

const projects = [
  {
    title: "Amazon Prime",
    description: "Lorem ipsum dolor sit amet consectetur. Tempus tristique felis vitae a. Aliquet fermentum tincidunt donec in id viverra nibh neque.",
    image: "/projects/amazon-prime.jpg",
  },
  {
    title: "Nord Galaxy",
    description: "Lorem ipsum dolor sit amet consectetur. Tempus tristique felis vitae a. Aliquet fermentum tincidunt donec in id viverra nibh neque.",
    image: "/projects/nord-galaxy.jpg",
  },
  {
    title: "VulkanBet",
    description: "Lorem ipsum dolor sit amet consectetur. Tempus tristique felis vitae a. Aliquet fermentum tincidunt donec in id viverra nibh neque.",
    image: "/projects/vulkanbet.jpg",
  },
];

export function Projects() {
  const sectionRef = useRef(null);
  const carouselRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

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

  const checkScroll = () => {
    if (carouselRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  useEffect(() => {
    checkScroll();
    const carousel = carouselRef.current as HTMLDivElement | null;
    if (carousel) {
      carousel.addEventListener('scroll', checkScroll);
      window.addEventListener('resize', checkScroll);
    }
    return () => {
      if (carousel) {
        carousel.removeEventListener('scroll', checkScroll);
      }
      window.removeEventListener('resize', checkScroll);
    };
  }, []);

  const scroll = (direction: 'next' | 'prev') => {
    const carousel = carouselRef.current as HTMLDivElement | null;
    if (carousel) {
      const scrollAmount = carousel.clientWidth;
      carousel.scrollBy({
        left: direction === 'next' ? scrollAmount : -scrollAmount,
        behavior: 'smooth',
      });
    }
  };
  return (
    <>
      <style>{animationStyles}</style>
      <section ref={sectionRef} className="py-6 md:py-12 w-full max-w-6xl mx-auto px-4 md:px-14 flex flex-col gap-12">
      <div className="flex flex-col lg:flex-row gap-4 md:gap-8 items-start justify-between">
        <h2 className={`text-text-main text-4xl md:text-5xl font-black font-header header-animate ${isVisible ? 'in-view' : ''}`}>
          Recent Projects
        </h2>
        <p className={`text-gray-600 text-xs leading-relaxed font-sans w-full lg:max-w-md description-animate ${isVisible ? 'in-view' : ''}`}>
          Explore the work we’ve done for forward-thinking brands across different industries. Each project tells a unique story of challenges solved, ideas brought to life, and measurable wins delivered through smart, creative marketing.
        </p>
      </div>

      <div className="flex flex-col gap-8">
        <div className="relative">
          <div 
            ref={carouselRef}
            className="carousel-container flex gap-6 w-full overflow-x-auto scroll-smooth pb-4 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
          >
            {projects.map((project, index) => (
              <div 
                key={index} 
                className={`shrink-0 w-full md:w-1/2 lg:w-1/3 project-card ${isVisible ? 'in-view' : ''}`}
              >
                <div className="bg-gray-100 rounded-xl overflow-hidden flex flex-col gap-4 shadow-sm hover:shadow-md transition-shadow h-full">
                  <div className="relative w-full aspect-video overflow-hidden bg-gray-200">
                    <Image 
                      src={project.image} 
                      alt={project.title} 
                      fill
                      className="project-image w-full h-full object-cover"
                    />
                  </div>
                  <div className="px-4 pb-4 flex flex-col gap-3 items-start">
                    <div className="flex flex-col gap-0.5">
                      <h3 className="text-text-main text-base font-semibold font-sans">{project.title}</h3>
                      <p className="text-gray-600 text-xs font-sans leading-relaxed">{project.description}</p>
                    </div>
                    <button className="border border-text-main rounded-md px-4 py-2 text-[0.75rem] font-medium font-sans text-text-main hover:bg-text-main hover:text-white transition-colors">
                      View project
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Navigation Arrows */}
        <div className="flex justify-end gap-3">
          <button
            onClick={() => scroll('prev')}
            disabled={!canScrollLeft}
            className="p-2 rounded-full border border-text-main text-text-main hover:bg-text-main hover:text-white disabled:opacity-50 disabled:cursor-not-allowed transition-all"
            aria-label="Previous projects"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={() => scroll('next')}
            disabled={!canScrollRight}
            className="p-2 rounded-full border border-text-main text-text-main hover:bg-text-main hover:text-white disabled:opacity-50 disabled:cursor-not-allowed transition-all"
            aria-label="Next projects"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
      </section>
    </>
  );
}
