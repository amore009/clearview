"use client";
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import AnimatedButton from './animatedButton';

export function CTA() {
  return (
    <section className="py-6 md:py-12 w-full max-w-6xl mx-auto px-4 md:px-14 flex flex-col md:flex-row gap-10 gap-6 items-center justify-center">

      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="w-full md:w-1/2"
      >
        <Image
          src="/imgMediumShotWomanWorkingWithLaptop11.png"
          alt="Woman working with laptop"
          width={500}
          height={500}
          className="w-full h-full object-cover"
        />
      </motion.div>


      <motion.div
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
        className="flex flex-col gap-6 items-start w-full max-w-2xl md:w-1/2"
      >
        <div className="flex flex-col gap-5 w-full">
          <h2 className="text-text-main text-4xl md:text-5xl lg:text-6xl font-black leading-tight font-header">
            Ready to Elevate Your Brand?
          </h2>
          <p className="text-gray-600 text-xs font-sans leading-relaxed">
            Let’s create something powerful together. Whether you need a fresh strategy, a new identity, or a complete marketing overhaul, our team is here to help you grow with confidence.
          </p>
        </div>

        <motion.div
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}>
                                       <AnimatedButton
  text="Contact Us"
  href="/contact"
  bgColor="var(--primary)"
  hoverColor="var(--foreground)"
  textColor="var(--background)"
  hoverTextColor="var(--background)"  
  textColorChange
/>
                                    </motion.div>
        
      </motion.div>
    </section>
  );
}
