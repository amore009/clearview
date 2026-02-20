"use client";
import React, { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { Plus, Minus } from 'lucide-react';
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

  .button-animate {
    opacity: 0;
  }

  .button-animate.in-view {
    animation: fadeInUp 0.8s ease-out 0.3s forwards;
  }

  .faq-item {
    opacity: 0;
  }

  .faq-item.in-view {
    animation: fadeInUp 0.8s ease-out forwards;
  }
`;


const faqs = [
  {
    question: "What services does Clearview offer?",
    answer: "We provide end-to-end marketing solutions including brand strategy, digital marketing, website design, content creation, and campaign management tailored to your business goals."
  },
  {
    question: "How long does a typical project take?",
    answer: "Project timelines vary depending on the scope and complexity. A typical branding project takes 4-6 weeks, while comprehensive marketing campaigns are ongoing. Contact us for a specific estimate."
  },
  {
    question: "Can you work with businesses in any industry?",
    answer: "Yes, we have experience across various industries including technology, retail, healthcare, and finance. Our strategic approach allows us to adapt to different market needs effectively."
  },
  {
    question: "What makes Clearview different from other marketing agencies?",
    answer: "Our data-driven approach combined with creative storytelling sets us apart. We don't just guess; we use managed market-based search engines to hyper-target leads and ensure measurable results."
  }
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
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
      <section ref={sectionRef} className="py-6 md:py-20 w-full max-w-6xl mx-auto px-4 md:px-14 flex flex-col md:flex-row gap-12 lg:gap-32 items-start">
      <div className="flex flex-col gap-4 items-start w-full max-w-sm">
       

         <div className={`bg-[#FFEBE4] border border-gray-100 rounded-md px-4 py-2 mb-1 shadow-xs badge-animate header-animate ${isVisible ? 'in-view' : ''}`}>
          <p className="text-orange-500 text-[0.75rem] font-medium font-sans">
            Frequently Asked Questions
          </p>
        </div>
        
        <div className="flex flex-col gap-2 items-start">
          <h2 className={`text-text-main text-4xl md:text-5xl font-black leading-tight font-header header-animate ${isVisible ? 'in-view' : ''}`}>
            Any Questions? <br /> Find here.
          </h2>
          <p className={`text-gray-600 text-xs font-sans description-animate ${isVisible ? 'in-view' : ''}`}>
            Boost your Sales and Marketing Efficiency
          </p>
           <AnimatedButton
  text="Contact Us"
  href="/contact"
  bgColor="var(--primary)"
  hoverColor="var(--foreground)"
  textColor="var(--background)"
  hoverTextColor="var(--background)"  
  textColorChange
/>
        </div>
      </div>

      <div className="flex flex-col w-full max-w-2xl">
        {faqs.map((faq, index) => (
          <div key={index} className={`border-b border-[rgba(199,199,199,0.5)] py-5 md:py-6 first:pt-0 faq-item ${isVisible ? 'in-view' : ''}`} style={{animationDelay: `${0.4 + index * 0.1}s`}}>
            <button 
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
              className="flex justify-between items-center w-full text-left group"
            >
              <span className="text-text-main text-sm font-bold font-sans w-full">
                {faq.question}
              </span>
              <span className={`shrink-0 ml-4`}>
                {openIndex === index ? <Minus className="w-5 h-5" /> : <Plus className="w-5 h-5" />}
              </span>
            </button>
            <AnimatePresence>
              {openIndex === index && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  className="overflow-hidden"
                >
                  <p className="text-gray-600 text-xs leading-normal font-sans pt-2 md:pt-1">
                    {faq.answer}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </section>
    </>
  );
}
