"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Footer } from '../components/Footer';
import { Navbar } from '../components/Navbar';
import Image from 'next/image';
import imgBigC from "../../public/imgBigC.jpg";
import { CTA } from "@/app/components/CTA";
import AnimatedButton from '../components/animatedButton';

export default function About() {
    return (
        <>
            <Navbar />
            <main className="w-full min-h-screen bg-white pt-24 pb-20">

                {/* Header Section */}
                <section className="w-full max-w-6xl mx-auto px-4 md:px-14 flex flex-col items-center text-center gap-6 mb-24">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="bg-[#FFEBE4] border border-gray-100 rounded-md px-4 py-2 mb-4 shadow-xs inline-block">
                            <p className="text-orange-500 text-[0.75rem] font-medium font-sans">
                                About Clearview
                            </p>
                        </div>
                        <h1 className="text-text-main text-4xl md:text-5xl lg:text-6xl font-black leading-tight font-header max-w-4xl">
                            Harness traffic potential with <span className="highlighted-text">innovative</span> solutions
                        </h1>
                        <p className="text-gray-600 text-sm max-w-2xl mx-auto mt-6 leading-relaxed font-sans">
                            We help businesses unlock their full potential through strategic marketing, compelling content, and data-driven growth. From branding to digital campaigns, we craft experiences that attract, convert, and retain your ideal customers.
                        </p>
                        <br/>

                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
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

                {/* Stats Section */}
                <section className="w-full max-w-6xl mx-auto px-4 md:px-14 mb-32">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4">
                        {[
                            { number: "134+", label: "Data Projects Completed", sub: "Successful deliveries across diverse products." },
                            { number: "50+", label: "Active Clients", sub: "Businesses that trust Clearview for ongoing growth." },
                            { number: "4x", label: "Average Client Growth", sub: "Revenue boost for businesses utilising our strategies." },
                            { number: "95%", label: "Client Satisfaction Rate", sub: "Reflecting our commitment to long-term relationships." },
                        ].map((stat, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="flex flex-col gap-0.5 text-left"
                            >
                                <h3 className="text-primary text-4xl md:text-5xl font-semibold font-header">{stat.number}</h3>
                                <p className="text-text-main font-bold text-sm md:text-base font-header">{stat.label}</p>
                                <p className="text-gray-500 text-xs  font-sans">{stat.sub}</p>
                            </motion.div>
                        ))}
                    </div>
                </section>

                {/* Story Section */}
                <section className="w-full max-w-6xl mx-auto px-4 md:px-14 mb-24">
                    <div className="flex flex-col md:flex-row items-center gap-10 md:gap-20">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.7 }}
                            className="w-full md:w-1/2"
                        >
                            <div className="bg-[#FFEBE4] border border-gray-100 rounded-md px-4 py-2 mb-4 shadow-xs inline-block">
                                <p className="text-orange-500 text-[0.75rem] font-medium font-sans">
                                    Maximize your business growth
                                </p>
                            </div>
                            <h2 className="text-text-main text-3xl md:text-5xl font-black font-header mb-6">Our Story</h2>
                            <div className="flex flex-col gap-4 text-gray-600 font-sans  text-sm">
                                <p>
                                    Clearview began with a simple idea: marketing shouldn’t be complicated - it should be clear, creative, and impactful. Founded by a group of passionate strategists and designers, we set out to help brands not just exist, but thrive in a crowded marketplace.
                                </p>
                                <p>
                                    From our first project, we knew that every partner has a story waiting to be told. That’s why we focus on understanding your vision, your audience, and your goals before crafting strategies that deliver results. Over the years, we’ve helped startups, growing businesses, and established brands alike transform their digital presence, increase engagement, and drive measurable growth.
                                </p>
                                <p>
                                    At Clearview, we don’t just create campaigns—we create meaningful experiences. Every project reflects our commitment to creativity, clarity, and impact, ensuring that your brand not only stands out but also leaves a lasting impression.
                                </p>
                            </div>
                            <br/>
                             <motion.div
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
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

                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.7 }}
                            className="w-full md:w-1/2 relative"
                        >
                            {/* Placeholder for the 'C' image from design or upload. Using a colored block or generic image for now if file not present. */}
                            {/* Assuming user wants the 'C' shaped group image. I will construct a visual placeholder or simple image frame. */}
                              <Image 
                                      src={imgBigC} 
                                      alt="Clearview Story" 
                                      width={538}
                                      height={558}
                                      className="w-full h-auto object-contain" />
                        </motion.div>
                    </div>
                </section>

                {/* Services Overview Section - Brief */}
                <section className="w-full max-w-6xl mx-auto px-4 md:px-14 mb-20">

                    <div className="flex flex-col md:flex-row gap-4">
                        <h2 className="text-text-main text-3xl md:text-4xl font-black font-header mb-12 w-full md:w-1/2 text-center md:text-left">Services Overview</h2>
                           <p className="text-gray-500 text-sm  font-sans w-full md:w-1/2">More accurate lists and tighter targeting have knock-on effects for your whole Sales and Marketing engines: Better personalization, higher conversion rates, and less wasted spend and effort.</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-6">
                        {[
                            { title: "Brand Strategy & Identity", desc: "We craft distinctive brand identities that set you apart from the competition. From positioning and messaging to visual design, we ensure your brand communicates clearly." },
                            { title: "Digital Marketing & Campaigns", desc: "Our team develops targeted digital campaigns that drive real engagement and conversions. Through social media, paid ads, email marketing, and content strategy." },
                            { title: "Website & Creative Design", desc: "We design intuitive, high-performing websites and visuals that elevate your brand experience. With a focus on user experience, modern aesthetics, and responsive layouts." }
                        ].map((service, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="flex flex-col gap-3"
                            >
                                <h4 className="text-primary font-bold text-sm font-header">{service.title}</h4>
                                <p className="text-gray-500 text-sm  font-sans">{service.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </section>

            </main>
             <CTA />
            <Footer />
        </>
    );
}
