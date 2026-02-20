"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Footer } from '../components/Footer';
import { Navbar } from '../components/Navbar';
import Image from 'next/image';

const testimonials = [
    {
        id: 1,
        text: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim.",
        author: "James Chuk",
        role: "Marketing Director",
        company: "TechFlow",
        image: "/avatar/emoji1.png"
    },
    {
        id: 2,
        text: "ClearView has completely transformed how we handle our data. The insights are deeper, faster, and more actionable than anything we've used before. Truly a game-changer for our analytics team.",
        author: "Sarah Jenkins",
        role: "CEO",
        company: "DataSphere",
        image: "/avatar/emoji2.png"
    },
    {
        id: 3,
        text: "The level of support and attention to detail from the ClearView team is unmatched. They didn't just provide a tool; they provided a partnership that helped us scale efficiently.",
        author: "Michael Ross",
        role: "Head of Operations",
        company: "LogiTech",
        image: "/avatar/emoji3.png"
    },
    {
        id: 4,
        text: "Since implementing ClearView's strategies, our lead generation has increased by 150%. The ROI has been immediate and sustained.",
        author: "Elena Rodriguez",
        role: "VP of Sales",
        company: "GrowthCo",
        image: "/avatar/emoji4.png"
    },
    {
        id: 5,
        text: "A seamless experience from start to finish. The team understood our unique challenges and delivered a custom solution that fits perfectly.",
        author: "David Kim",
        role: "Founder",
        company: "StartUp Inc.",
        image: "/avatar/emoji5.png"
    },
    {
        id: 6,
        text: "Highly recommended for any business looking to take their marketing intelligence to the next level. ClearView is ahead of the curve.",
        author: "Anita Patel",
        role: "CMO",
        company: "Future Retail",
        image: "/avatar/emoji6.png"
    }
];

export default function Testimonials() {
    return (
        <>
            <Navbar />
            <main className="w-full min-h-screen bg-white pt-24 pb-20">
                <br/>

                {/* Header Section */}
                <section className="w-full max-w-6xl mx-auto px-4 md:px-14 flex flex-col items-start text-start gap-6 mb-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <h1 className="text-text-main text-4xl  font-black  font-header mb-3">
                            What People Say About Us
                        </h1>
                        <p className="text-gray-600 text-sm max-w-2xl mx-auto font-sans">
                            We&apos;d love to hear from you! Whether you have questions about our services, need assistance, our team is here to help. Reach out to us through the form or the social links.
                        </p>
                    </motion.div>
                </section>

                {/* Testimonials Grid */}
                <section className="w-full max-w-6xl mx-auto px-4 md:px-14 mb-24">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {testimonials.map((testimonial, index) => (
                            <motion.div
                                key={testimonial.id}
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.4, delay: index * 0.1 }}
                                className="bg-white  flex flex-col gap-2"
                            >
                                {/* Avatar Placeholder */}
                                <div className="w-12 h-12 rounded-full overflow-hidden bg-gray-100 relative">
                                    {/* Using existing placeholder image for avatars, or generic */}
                                    <Image
                                        src={testimonial.image}
                                        alt={testimonial.author}
                                        width={48}
                                        height={48}
                                        className="object-cover w-full h-full border border-gray-100 rounded-full"
                                    />
                                </div>

                                <div className="flex flex-col gap-2 ">
                                    <div className="flex flex-col items-start gap-1">
                                    <h3 className="text-text-main text-sm font-semibold font-header">{testimonial.author}, </h3>
                                    <span className="text-gray-600 text-xs italic font-sans -mt-1">{testimonial.role} at {testimonial.company}</span>
                                    </div>
                                    <p className="text-gray-600 text-[0.82rem]  font-sans">
                                        {testimonial.text}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </section>

            </main>
            <Footer />
        </>
    );
}
