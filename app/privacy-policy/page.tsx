"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Footer } from '../components/Footer';
import { Navbar } from '../components/Navbar';

export default function PrivacyPolicy() {
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
                        <h1 className="text-text-main text-4xl font-black mb-8 font-header">Privacy Policy</h1>
                        <div className="prose prose-orange max-w-none text-gray-600 font-sans space-y-6 text-sm ">
                            <p>Last Updated: February 5, 2026</p>

                            <section>
                                <h2 className="text-text-main text-2xl font-bold mb-1 font-header">1. Introduction</h2>
                                <p>At Clearview, we are committed to protecting your privacy. This Privacy Policy explains how we collect, use, and safeguard your information when you visit our website or use our services.</p>
                            </section>

                            <section>
                                <h2 className="text-text-main text-2xl font-bold mb-1 font-header">2. Information We Collect</h2>
                                <p>We collect information that you provide directly to us, such as when you fill out a contact form, subscribe to our newsletter, or engage with our services. This may include your name, email address, phone number, and company details.</p>
                            </section>

                            <section>
                                <h2 className="text-text-main text-2xl font-bold mb-1 font-header">3. How We Use Your Information</h2>
                                <p>We use the information we collect to provide and improve our services, communicate with you, and personalize your experience. We may also use your information for marketing purposes, with your consent.</p>
                            </section>

                            <section>
                                <h2 className="text-text-main text-2xl font-bold mb-1 font-header">4. Information Sharing</h2>
                                <p>We do not sell or rent or share your personal information to third parties. We may share information with trusted service providers who assist us in operating our business, provided they agree to keep the information confidential.</p>
                            </section>

                            <section>
                                <h2 className="text-text-main text-2xl font-bold mb-1 font-header">5. Data Security</h2>
                                <p>We implement a variety of security measures to maintain the safety of your personal information. However, no method of transmission over the internet is 100% secure, and we cannot guarantee absolute security.</p>
                            </section>

                            <section>
                                <h2 className="text-text-main text-2xl font-bold mb-1 font-header">6. Your Rights</h2>
                                <p>You have the right to access, correct, or delete your personal information. If you wish to exercise any of these rights, please contact us at the email address provided below.</p>
                            </section>

                            <section>
                                <h2 className="text-text-main text-2xl font-bold mb-1 font-header">7. Contact Information</h2>
                                <p>If you have any questions or concerns regarding this Privacy Policy, please contact us at <a href="mailto:privacy@clearview.com" className="text-primary hover:underline">privacy@clearview.com</a>.</p>
                            </section>
                        </div>
                    </motion.div>
                </section>
            </main>
            <Footer />
        </>
    );
}
