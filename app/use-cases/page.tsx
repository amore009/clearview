"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Footer } from '../components/Footer';
import { Navbar } from '../components/Navbar';
import Image from 'next/image';

const cases = [
    {
        id: 1,
        title: "Amazon Prime",
        description: "Lorem ipsum dolor sit amet consectetur. Tempus tristique felis vitae a. Aliquet fermentum tincidunt donec in id viverra nibh neque.",
        image: "/projects/amazon-prime.jpg", // Update with correct image path if available
        
    },
    {   
        id: 2,
        title: "Volkabot",
        description: "The lottery continues: get into the draw for a brand new iPhone 15.",
        image: "/projects/vulkanbet.jpg",
        
    },
    { 
        id: 3,
        title: "VulkanBet",
        description: "Lorem ipsum dolor sit amet consectetur. Tempus tristique felis vitae a. Aliquet fermentum tincidunt donec in id viverra nibh neque.",
        image: "/projects/vulkanbet.jpg",
       
    },
    {
        id: 4,
        title: "Nord Galaxy",
        description: "Lorem ipsum dolor sit amet consectetur. Tempus tristique felis vitae a. Aliquet fermentum tincidunt donec in id viverra nibh neque.",
        image: "/projects/amazon-prime.jpg",
       
    }
];

export default function UseCases() {
    return (
        <>
            <Navbar />
            <br/>
            <main className="w-full min-h-screen bg-white pt-24 pb-10">

                {/* Header Section */}
                <section className="w-full max-w-6xl mx-auto px-4 md:px-14 mb-6">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <h1 className="text-text-main text-4xl md:text-5xl  font-black font-header mb-2">
                            Use Cases
                        </h1>
                        <p className="text-gray-600 text-sm max-w-3xl  font-sans">
                            Explore the work we've done for forward-thinking brands across different industries. Each project tells a unique story of challenges solved, ideas brought to life, and measurable wins delivered through smart, creative marketing.
                        </p>
                    </motion.div>
                </section>

                {/* Cases Grid */}
                <section className="w-full max-w-6xl mx-auto px-4 md:px-14 mb-24">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {cases.map((useCase) => (
                            <div key={useCase.id} className="bg-gray-100 rounded-xl overflow-hidden flex flex-col gap-4 shadow-sm hover:shadow-md transition-shadow h-full">
                                             <div className="relative w-full aspect-video overflow-hidden bg-gray-200">
                                               <Image 
                                                 src={useCase.image} 
                                                 alt={useCase.title} 
                                                 fill
                                                 className="project-image w-full h-full object-cover"
                                               />
                                             </div>
                                             <div className="px-4 pb-4 flex flex-col gap-3 items-start">
                                               <div className="flex flex-col gap-0.5">
                                                 <h3 className="text-text-main text-base font-semibold font-sans">{useCase.title}</h3>
                                                 <p className="text-gray-600 text-xs font-sans leading-relaxed">{useCase.description}</p>
                                               </div>
                                               <button className="border border-text-main rounded-md px-4 py-2 text-[0.75rem] font-medium font-sans text-text-main hover:bg-text-main hover:text-white transition-colors">
                                                 View project
                                               </button>
                                             </div>
                                           </div>
                        ))}
                    </div>
                </section>

            </main>
            <Footer />
        </>
    );
}
