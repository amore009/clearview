"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Footer } from '../components/Footer';
import { Navbar } from '../components/Navbar';

export default function Terms() {
    return (
        <>
            <Navbar />
            <main className="w-full min-h-screen bg-white pt-24 pb-20">
                <section className="w-full max-w-4xl mx-auto px-4 md:px-14">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <h1 className="text-text-main text-4xl font-black mb-8 font-header">Terms & Conditions</h1>
                        <div className="prose prose-orange max-w-none text-gray-600 font-sans space-y-6 text-sm ">
                            <p className='text-gray-600 text-sm'>Last Updated: February 5, 2026</p>

                            <section>
                                <h2 className="text-text-main text-2xl font-bold mb-1 font-header">1. Agreement to Terms</h2>
                                <p>By accessing or using Clearview's services, you agree to be bound by these Terms and Conditions. If you do not agree with any part of these terms, you must not use our services.</p>
                            </section>

                            <section>
                                <h2 className="text-text-main text-2xl font-bold mb-1 font-header">2. Services</h2>
                                <p>Clearview provides marketing solutions, brand strategy, and digital campaign management. We reserve the right to modify or discontinue any part of our services at any time without prior notice.</p>
                            </section>

                            <section>
                                <h2 className="text-text-main text-2xl font-bold mb-1 font-header">3. Intellectual Property</h2>
                                <p>All content, branding, and materials provided by Clearview are the intellectual property of Clearview or its licensors. You may not reproduce, distribute, or create derivative works without our express written permission.</p>
                            </section>

                            <section>
                                <h2 className="text-text-main text-2xl font-bold mb-1 font-header">4. User Responsibilities</h2>
                                <p>You are responsible for ensuring that all information provided to us is accurate and up to date. You agree not to use our services for any unlawful or prohibited activities.</p>
                            </section>

                            <section>
                                <h2 className="text-text-main text-2xl font-bold mb-1 font-header">5. Limitation of Liability</h2>
                                <p>To the maximum extent permitted by law, Clearview shall not be liable for any indirect, incidental, or consequential damages arising from the use of our services.</p>
                            </section>

                            <section>
                                <h2 className="text-text-main text-2xl font-bold mb-1 font-header">6. Governing Law</h2>
                                <p>These terms are governed by the laws of Nigeria. Any disputes arising from these terms shall be resolved in the courts of Lagos, Nigeria.</p>
                            </section>

                            <section>
                                <h2 className="text-text-main text-2xl font-bold mb-1 font-header">7. Contact Us</h2>
                                <p>If you have any questions about these Terms, please contact us at <a href="mailto:contact@clearview.com" className="text-primary hover:underline">contact@clearview.com</a>.</p>
                            </section>
                        </div>
                    </motion.div>
                </section>
            </main>
            <Footer />
        </>
    );
}
