"use client";
import React, { useEffect, useRef, useState } from 'react';

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

  .title-animate {
    opacity: 0;
  }

  .title-animate.in-view {
    animation: fadeInUp 0.8s ease-out 0.1s forwards;
  }

  .description-animate {
    opacity: 0;
  }

  .description-animate.in-view {
    animation: fadeInUp 0.8s ease-out 0.2s forwards;
  }

  .stat-animate {
    opacity: 0;
  }

  .stat-animate.in-view {
    animation: fadeInUp 0.8s ease-out forwards;
  }

  .service-card-animate {
    opacity: 0;
  }

  .service-card-animate.in-view {
    animation: fadeInUp 0.8s ease-out forwards;
  }
`;

export function Services() {
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
      <section  ref={sectionRef} className="py-6 md:py-12 w-full max-w-6xl mx-auto px-4 md:px-14">
        <div className="w-full flex flex-col lg:flex-row gap-12 items-start">
          {/* Left Column: Header + Stats */}
          <div id="services" className="flex flex-col  gap-5 w-full lg:w-1/2">
            <div className="flex flex-col gap-3">
              <h2 className={`text-text-main text-4xl md:text-5xl font-black font-header title-animate ${isVisible ? 'in-view' : ''}`}>
                Services Overview
              </h2>
              <p className={`text-gray-600 text-xs font-sans max-w-xl description-animate ${isVisible ? 'in-view' : ''}`}>
                More accurate lists and tighter targeting have knock-on effects for your whole Sales and Marketing engines: Better personalization, higher conversion rates, and less wasted spend and effort.
              </p>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-10 md:gap-12 w-full">
              {/* Stat 1 */}
              <div className={`flex flex-col gap-2 stat-animate ${isVisible ? 'in-view' : ''}`} style={{ animationDelay: '0.3s' }}>
                <span className="text-orange-500 text-4xl font-semibold font-sans">134+</span>
                <div className="flex flex-col">
                  <span className="text-text-main text-sm font-semibold font-sans">Data Projects Completed</span>
                  <span className="text-gray-600 text-xs font-sans">Proven experience across diverse brands products.</span>
                </div>
              </div>

              {/* Stat 2 */}
              <div className={`flex flex-col gap-2 stat-animate ${isVisible ? 'in-view' : ''}`} style={{ animationDelay: '0.4s' }}>
                <span className="text-orange-500 text-4xl font-semibold font-sans">50+</span>
                <div className="flex flex-col">
                  <span className="text-text-main text-sm font-semibold font-sans">Active Clients</span>
                  <span className="text-gray-600 text-xs font-sans">Businesses that trust Clearview for ongoing growth.</span>
                </div>
              </div>

              {/* Stat 3 */}
              <div className={`flex flex-col gap-2 stat-animate ${isVisible ? 'in-view' : ''}`} style={{ animationDelay: '0.5s' }}>
                <span className="text-orange-500 text-4xl font-semibold font-sans">4×</span>
                <div className="flex flex-col">
                  <span className="text-text-main text-sm font-semibold font-sans">Average Client Growth Increase</span>
                  <span className="text-gray-600 text-xs font-sans">Businesses that trust Clearview for ongoing growth.</span>
                </div>
              </div>

              {/* Stat 4 */}
              <div className={`flex flex-col gap-2 stat-animate ${isVisible ? 'in-view' : ''}`} style={{ animationDelay: '0.6s' }}>
                <span className="text-orange-500 text-4xl font-semibold font-sans">95%</span>
                <div className="flex flex-col">
                  <span className="text-text-main text-sm font-semibold font-sans">Client Satisfaction Rate</span>
                  <span className="text-gray-600 text-xs font-sans">Reliable results and long-term relationships.</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Service List */}
          <div className="w-full lg:w-1/2">
            <div className="flex flex-col gap-7 md:gap-9 p-4 md:p-6 shadow-sm border border-gray-100 rounded-md">
              <div className={`flex flex-col gap-2 service-card-animate ${isVisible ? 'in-view' : ''}`} style={{ animationDelay: '0.4s' }}>
                <h3 className="text-orange-500 text-lg font-semibold font-sans">Brand Strategy & Identity</h3>
                <p className="text-gray-600 text-xs font-sans">
                  We craft distinctive brand identities that set you apart from the competition. From positioning and messaging to visual design, we ensure your brand communicates clearly, connects emotionally, and stands strong across every touchpoint.
                </p>
              </div>

              <div className={`flex flex-col gap-2 service-card-animate ${isVisible ? 'in-view' : ''}`} style={{ animationDelay: '0.5s' }}>
                <h3 className="text-orange-500 text-lg font-semibold font-sans">Digital Marketing & Campaigns</h3>
                <p className="text-gray-600 text-xs font-sans">
                  Our team develops targeted digital campaigns that drive real engagement and conversions. Through social media, paid ads, email marketing, and content strategy, we help you reach the right audience with the right message at the right time.
                </p>
              </div>

              <div className={`flex flex-col gap-2 service-card-animate ${isVisible ? 'in-view' : ''}`} style={{ animationDelay: '0.6s' }}>
                <h3 className="text-orange-500 text-lg font-semibold font-sans">Website & Creative Design</h3>
                <p className="text-gray-600 text-xs font-sans">
                  We design intuitive, high-performing websites and visuals that elevate your brand experience. With a focus on user experience, modern aesthetics, and responsive layouts, we create digital assets that capture attention and turn visitors into customers.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
