"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const testimonials = [
  {
    id: 1,
    text: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim.",
    author: "James Chuk"
  },
  {
    id: 2,
    text: "ClearView has completely transformed how we handle our data. The insights are deeper, faster, and more actionable than anything we've used before. Truly a game-changer for our analytics team.",
    author: "Sarah Jenkins"
  },
  {
    id: 3,
    text: "The level of support and attention to detail from the ClearView team is unmatched. They didn't just provide a tool; they provided a partnership that helped us scale efficiently.",
    author: "Michael Ross"
  }
];

const variants = {
  enter: (direction: number) => {
    return {
      x: direction > 0 ? 100 : -100,
      opacity: 0
    };
  },
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1
  },
  exit: (direction: number) => {
    return {
      zIndex: 0,
      x: direction < 0 ? 300 : -300,
      opacity: 0
    };
  }
};

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const nextTestimonial = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section className="py-10 md:py-12 w-full max-w-6xl mx-auto px-4 md:px-14">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="relative  overflow-hidden w-full  flex flex-col items-center justify-center "
      >


        <div className="relative z-10 flex flex-col items-center  max-w-2xl text-center">
          <h2 className="text-foreground text-4xl md:text-5xl font-black  font-header">
            What our client’s say
          </h2>

          <div className="flex flex-col items-center gap-2 w-full mt-1">
            {/* Quote Icon - Rotated 180 in design code */}
            <svg
              width={52}
              height={37}
              viewBox="0 0 72 57"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"

            >
              <g clipPath="url(#clip0_225_1720)">
                <path
                  d="M0.000141109 13.7726C0.23568 12.7401 0.415434 11.6954 0.719153 10.6875C2.65304 4.36986 7.91544 0.319939 14.5601 0.0126619C16.6985 -0.0856694 18.3534 1.26636 18.5332 3.27595C18.6882 4.98441 17.2997 6.58226 15.3658 6.90183C14.5415 7.03703 13.6799 7.05546 12.8865 7.28285C9.45882 8.26614 7.2832 11.1668 7.09105 14.9648C7.04766 15.7944 7.08485 16.6241 7.08485 17.6135C7.6489 17.6381 8.14477 17.6811 8.63444 17.6811C14.2563 17.6873 19.872 17.6811 25.4939 17.6873C29.9692 17.6873 32.3369 20.041 32.3369 24.4535C32.3369 33.1372 32.3369 41.8209 32.3307 50.5045C32.3307 54.4991 29.9382 56.9573 25.903 56.9819C19.4382 57.0249 12.9795 57.0127 6.5146 56.9819C3.03113 56.9635 1.32659 55.5439 -0.00605727 51.6967C0.000142714 39.0492 0.000140004 26.4078 0.000141109 13.7726ZM25.2212 24.6871C19.5187 24.6871 14.0022 24.7178 8.48568 24.6625C7.35758 24.6502 7.06006 24.9943 7.06626 26.0821C7.10345 33.6042 7.10345 41.1203 7.06006 48.6424C7.05386 49.6687 7.33898 50.0006 8.4051 49.9944C13.6489 49.9514 18.8927 49.9821 24.1365 49.9821C24.4898 49.9821 24.8493 49.9023 25.2274 49.8592C25.2212 41.4644 25.2212 33.1741 25.2212 24.6871Z"
                  fill="#ED6F3F"
                />
                <path
                  d="M46.7609 17.6806C49.1844 17.6806 51.515 17.6806 53.8518 17.6806C57.6948 17.6806 61.5377 17.6683 65.3745 17.6806C69.4406 17.6991 71.9696 20.1511 71.9819 24.1826C72.0067 32.9646 72.0129 41.7405 71.9819 50.5225C71.9634 54.4802 69.4716 56.9569 65.4799 56.9753C59.0584 57.006 52.6431 56.9999 46.2216 56.9753C42.0005 56.9569 39.6514 54.5662 39.6514 50.3627C39.6514 38.5632 39.6452 26.7638 39.6514 14.9643C39.6576 8.27793 44.077 2.38435 50.5233 0.565262C51.8063 0.202676 53.1886 0.0613297 54.5274 0.0183077C56.4551 -0.0492924 57.8497 1.272 58.0109 3.10338C58.1844 5.05152 57.0501 6.59405 55.0853 6.83987C53.015 7.09799 51.0377 7.43599 49.42 8.91092C46.8539 11.2647 46.4758 14.2514 46.7609 17.6806ZM46.7361 49.8403C47.0336 49.9018 47.2134 49.9632 47.3869 49.9632C52.8662 49.9694 58.3456 49.9509 63.8249 49.9878C64.8724 49.9939 64.9158 49.4593 64.9158 48.6788C64.9034 41.1075 64.8848 33.5423 64.9282 25.971C64.9344 24.9078 64.5811 24.6435 63.5522 24.6497C58.3518 24.6927 53.1576 24.6681 47.9572 24.6743C47.5605 24.6743 47.1576 24.7419 46.7299 24.7787C46.7361 33.192 46.7361 41.4516 46.7361 49.8403Z"
                  fill="#ED6F3F"
                />
              </g>
              <defs>
                <clipPath id="clip0_225_1720">
                  <rect
                    width={72}
                    height={57}
                    fill="white"
                    transform="translate(72 57) rotate(-180)"
                  />
                </clipPath>
              </defs>
            </svg>

            <div className="flex flex-col md:flex-row items-center md:gap-10 w-full justify-center">
              {/* Left Arrow - Desktop (Hidden on mobile) */}
              <button
                onClick={prevTestimonial}
                className="hidden md:block shrink-0 p-2 cursor-pointer hover:opacity-75 transition-opacity"
                aria-label="Previous testimonial"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M15 18l-6-6 6-6" stroke="var(--foreground)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" opacity="0.5" />
                </svg>
              </button>

              <div className="flex flex-col gap-3 items-center max-w-2xl min-h-[150px] justify-center relative overflow-hidden">
                <AnimatePresence initial={false} custom={direction} mode="popLayout">
                  <motion.div
                    key={currentIndex}
                    custom={direction}
                    variants={variants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{
                      x: { type: "spring", stiffness: 300, damping: 30 },
                      opacity: { duration: 0.2 }
                    }}
                    className="flex flex-col items-center text-center w-full"
                  >
                    <p className="text-muted-foreground text-sm font-sans px-4">
                      {currentTestimonial.text}
                    </p>
                    <p className="text-foreground text-sm font-semibold leading-7 font-sans">
                      {currentTestimonial.author}
                    </p>
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Right Arrow - Desktop (Hidden on mobile) */}
              <button
                onClick={nextTestimonial}
                className="hidden md:block shrink-0 p-2 cursor-pointer hover:opacity-75 transition-opacity rotate-180"
                aria-label="Next testimonial"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M15 18l-6-6 6-6" stroke="var(--foreground)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" opacity="0.5" />
                </svg>
              </button>
            </div>

            {/* Mobile Controls (Arrows below content) - Hidden on desktop */}
            <div className="flex md:hidden items-center gap-8 mt-4">
              <button
                onClick={prevTestimonial}
                className="shrink-0 p-2 cursor-pointer hover:opacity-75 transition-opacity"
                aria-label="Previous testimonial"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M15 18l-6-6 6-6" stroke="var(--foreground)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" opacity="0.5" />
                </svg>
              </button>

              <button
                onClick={nextTestimonial}
                className="shrink-0 p-2 cursor-pointer hover:opacity-75 transition-opacity rotate-180"
                aria-label="Next testimonial"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M15 18l-6-6 6-6" stroke="var(--foreground)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" opacity="0.5" />
                </svg>
              </button>
            </div>

          </div>
        </div>
      </motion.div>
    </section>
  );
}
