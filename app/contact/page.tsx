"use client";

import React from "react";
import { motion } from "framer-motion";
import { Footer } from "../components/Footer";
import { Navbar } from "../components/Navbar";
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

type ContactFormValues = {
    fullName: string;
    email: string;
    subject: string;
    message: string;
};

export default function Contact() {
    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
        reset,
    } = useForm<ContactFormValues>();

    const onSubmit = async (data: ContactFormValues) => {
        try {
            const response = await fetch('/api/send', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });

            const result = await response.json();

            if (response.ok) {
                toast.success('Message sent successfully!');
                reset();
            } else {
                toast.error(result.error?.message || 'Failed to send message.');
            }
        } catch (error) {
            console.error('Error submitting form:', error);
            toast.error('An unexpected error occurred. Please try again later.');
        }
    };



    const socialLinks = [
        {
            name: "Twitter",
            icon: Twitter,
            url: "https://twitter.com/yourusername",
        },
        {
            name: "Instagram",
            icon: Instagram,
            url: "https://instagram.com/yourusername",
        },
        {
            name: "LinkedIn",
            icon: Linkedin,
            url: "https://linkedin.com/in/yourusername",
        },
        {
            name: "Facebook",
            icon: Facebook,
            url: "https://facebook.com/yourusername",
        },
    ];


    return (
        <>
            <Navbar />
            <main className="w-full min-h-screen bg-white pt-24 pb-20">
                {/* Header */}
                <section className="w-full max-w-6xl mx-auto px-4 md:px-14 mb-2">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="flex justify-between items-center"
                    >
                        <h1 className="text-text-main text-4xl font-black leading-tight font-header">
                            Contact Us
                        </h1>
                    </motion.div>
                </section>

                {/* Content */}
                <section className="w-full max-w-6xl mx-auto px-4 md:px-14 mb-24">
                    <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
                        {/* Left */}
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="w-full lg:w-1/3 flex flex-col gap-10"
                        >
                            <p className="text-gray-600 text-sm leading-relaxed font-sans">
                                We'd love to hear from you! Reach out using the form or social links.
                            </p>

                            <div>
                                <h4 className="text-text-main font-bold text-lg mb-4 font-header">
                                    Social Links
                                </h4>
                                <div className="flex gap-4">
                                    {socialLinks.map(({ icon: Icon, url, name }) => (
                                        <Link
                                            key={name}
                                            href={url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            aria-label={name}
                                            className="w-10 h-10 rounded-full bg-orange-50 hover:bg-orange-100 flex items-center justify-center text-primary transition-colors"
                                        >
                                            <Icon size={18} />
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        </motion.div>

                        {/* Right - Form */}
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="w-full lg:w-2/3"
                        >
                            <form
                                onSubmit={handleSubmit(onSubmit)}
                                className="flex flex-col gap-6"
                            >
                                {/* Name + Email */}
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label className="text-text-main font-semibold text-sm">
                                            Full Name
                                        </label>
                                        <input
                                            placeholder="Enter full name"
                                            {...register("fullName", {
                                                required: "Full name is required",
                                            })}
                                            className="w-full bg-gray-100 rounded-md px-4 py-3 text-base md:text-sm outline-none focus:ring-2 focus:ring-primary/20"
                                        />
                                        {errors.fullName && (
                                            <p className="text-red-500 text-xs mt-1">
                                                {errors.fullName.message}
                                            </p>
                                        )}
                                    </div>

                                    <div>
                                        <label className="text-text-main font-semibold text-sm">
                                            Email
                                        </label>
                                        <input
                                            type="email"
                                            placeholder="Enter email address"
                                            {...register("email", {
                                                required: "Email is required",
                                                pattern: {
                                                    value: /^\S+@\S+$/i,
                                                    message: "Invalid email address",
                                                },
                                            })}
                                            className="w-full bg-gray-100 rounded-md px-4 py-3  text-base md:text-sm outline-none focus:ring-2 focus:ring-primary/20"
                                        />
                                        {errors.email && (
                                            <p className="text-red-500 text-xs mt-1">
                                                {errors.email.message}
                                            </p>
                                        )}
                                    </div>
                                </div>

                                {/* Subject */}
                                <div>
                                    <label className="text-text-main font-semibold text-sm">
                                        Subject
                                    </label>
                                    <input
                                        placeholder="Enter subject"
                                        {...register("subject", {
                                            required: "Subject is required",
                                        })}
                                        className="w-full bg-gray-100 rounded-md px-4 py-3 text-base md:text-sm outline-none focus:ring-2 focus:ring-primary/20"
                                    />
                                    {errors.subject && (
                                        <p className="text-red-500 text-xs mt-1">
                                            {errors.subject.message}
                                        </p>
                                    )}
                                </div>

                                {/* Message */}
                                <div>
                                    <label className="text-text-main font-semibold text-sm">
                                        Message
                                    </label>
                                    <textarea
                                        placeholder="Enter message"
                                        rows={5}
                                        {...register("message", {
                                            required: "Message is required",
                                            minLength: {
                                                value: 10,
                                                message: "Message must be at least 10 characters",
                                            },
                                        })}
                                        className="w-full bg-gray-100 rounded-md px-4 py-3 text-base md:text-sm outline-none focus:ring-2 focus:ring-primary/20 resize-none"
                                    />
                                    {errors.message && (
                                        <p className="text-red-500 text-xs mt-1">
                                            {errors.message.message}
                                        </p>
                                    )}
                                </div>

                                <motion.div
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="self-start mt-2">
                                    <button
                                        disabled={isSubmitting}
                                        className="bg-primary text-white text-xs font-semibold px-6 py-3 rounded-md hover:bg-orange-500 transition-colors w-full md:w-auto self-start  disabled:opacity-50"
                                    >
                                        {isSubmitting ? "Sending..." : "Send Message"}
                                    </button>
                                </motion.div>

                            </form>
                        </motion.div>
                    </div>
                </section>
            </main>
            <Footer />
            <ToastContainer
                position="bottom-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
            />
        </>
    );
}
