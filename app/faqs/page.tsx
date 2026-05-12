"use client";
import React, { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus, Search } from "lucide-react";
import Link from "next/link";
import { Footer } from "../components/Footer";
import { Navbar } from "../components/Navbar";
import AnimatedButton from "../components/animatedButton";

type Faq = {
    question: string;
    answer: string;
    category: string;
};

const faqs: Faq[] = [
    {
        category: "Services",
        question: "What services does Clearview offer?",
        answer:
            "We provide end-to-end marketing solutions including brand strategy, digital marketing, website design, content creation, social media management, SEO, and campaign management — all tailored to your business goals.",
    },
    {
        category: "Services",
        question: "Do you offer one-off projects or only retainers?",
        answer:
            "Both. We take on defined-scope projects (e.g. a brand refresh or a launch campaign) as well as monthly retainers for clients who want ongoing strategy, content, and campaign support.",
    },
    {
        category: "Services",
        question: "Can you work with businesses in any industry?",
        answer:
            "Yes. We have experience across technology, retail, healthcare, finance, and more. Our research-driven approach lets us adapt quickly to the language and dynamics of any market.",
    },
    {
        category: "Process",
        question: "How long does a typical project take?",
        answer:
            "It depends on scope. A focused branding project usually takes 4–6 weeks. Website builds run 6–10 weeks. Ongoing marketing campaigns are continuous. We'll give you a concrete timeline after the discovery call.",
    },
    {
        category: "Process",
        question: "What does the engagement process look like?",
        answer:
            "Discovery call → proposal & scope → kickoff and research → strategy and creative → review cycles → launch → measurement. You'll have a single point of contact throughout and weekly check-ins on active projects.",
    },
    {
        category: "Process",
        question: "How involved do I need to be?",
        answer:
            "We aim for low-friction collaboration. Expect a kickoff workshop, a couple of structured review sessions per milestone, and async approvals in between. Most clients spend 2–4 hours per week on an active project.",
    },
    {
        category: "Pricing",
        question: "How is pricing structured?",
        answer:
            "Project work is quoted as a fixed fee against a defined scope. Retainers are billed monthly based on the team and hours allocated. We're transparent about what's included and flag anything out-of-scope before it starts.",
    },
    {
        category: "Pricing",
        question: "Do you require a deposit?",
        answer:
            "Yes. Project engagements typically begin with a 50% deposit, with the balance invoiced at agreed milestones. Retainers are invoiced at the start of each month.",
    },
    {
        category: "Pricing",
        question: "What payment methods do you accept?",
        answer:
            "Bank transfer is our default. We can also accommodate card payments for international clients. Invoice terms are net-14 unless agreed otherwise.",
    },
    {
        category: "Working with us",
        question: "Where is Clearview based, and do you work remotely?",
        answer:
            "Our team is based in Lagos, Nigeria, and we work with clients globally. Engagements are run remotely with optional in-person sessions for clients in Lagos.",
    },
    {
        category: "Working with us",
        question: "Who will I be working with?",
        answer:
            "You'll have a dedicated account lead as your single point of contact, supported by specialists (strategy, design, content, paid media, development) brought in based on what your project needs.",
    },
    {
        category: "Working with us",
        question: "What makes Clearview different from other marketing agencies?",
        answer:
            "We pair creative storytelling with a data-driven approach. We don't guess — we research, hyper-target, and measure. You'll always know what we're doing, why, and what it's producing.",
    },
    {
        category: "Support",
        question: "How do you measure success?",
        answer:
            "We agree on KPIs upfront — usually a mix of brand metrics (awareness, share-of-voice) and performance metrics (leads, conversion rate, CAC, ROAS). You'll get a clear monthly report tied to those numbers.",
    },
    {
        category: "Support",
        question: "What happens after a project ends?",
        answer:
            "You keep all assets, files, and accounts. We offer optional support retainers if you'd like ongoing optimisation, and we're always available for follow-up work.",
    },
    {
        category: "Support",
        question: "How do I get in touch to start a project?",
        answer:
            "Use the contact form or email us directly. We'll get back to you within one business day to schedule a discovery call.",
    },
];

const categories = ["All", ...Array.from(new Set(faqs.map((f) => f.category)))];

export default function FaqsPage() {
    const [openIndex, setOpenIndex] = useState<number | null>(0);
    const [activeCategory, setActiveCategory] = useState("All");
    const [query, setQuery] = useState("");

    const filtered = useMemo(() => {
        const q = query.trim().toLowerCase();
        return faqs.filter((f) => {
            const matchesCategory =
                activeCategory === "All" || f.category === activeCategory;
            const matchesQuery =
                q === "" ||
                f.question.toLowerCase().includes(q) ||
                f.answer.toLowerCase().includes(q);
            return matchesCategory && matchesQuery;
        });
    }, [activeCategory, query]);

    return (
        <>
            <Navbar />
            <main className="w-full min-h-screen bg-white pt-24 pb-20">
                <section className="w-full max-w-4xl mx-auto px-4 md:px-14">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="flex flex-col items-start gap-4"
                    >
                        <div className="bg-[#FFEBE4] border border-gray-100 rounded-md px-4 py-2 shadow-xs">
                            <p className="text-orange-500 text-[0.75rem] font-medium font-sans">
                                Frequently Asked Questions
                            </p>
                        </div>
                        <h1 className="text-text-main text-4xl md:text-5xl font-black font-header leading-tight">
                            Got questions? <br /> We've got answers.
                        </h1>
                        <p className="text-gray-600 text-sm font-sans max-w-2xl">
                            Everything you need to know about working with Clearview — our
                            services, process, pricing, and what to expect after a project
                            wraps. Can't find what you're looking for?{" "}
                            <Link
                                href="/contact"
                                className="text-orange-500 hover:underline font-medium"
                            >
                                Get in touch
                            </Link>
                            .
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.15 }}
                        className="mt-10 flex flex-col gap-4"
                    >
                        <div className="relative w-full">
                            <Search
                                size={16}
                                className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                            />
                            <input
                                type="search"
                                value={query}
                                onChange={(e) => setQuery(e.target.value)}
                                placeholder="Search questions…"
                                aria-label="Search questions"
                                className="w-full h-11 pl-10 pr-4 rounded-md border border-gray-200 bg-transparent text-sm focus:outline-none focus:border-orange-500 transition-colors"
                            />
                        </div>

                        <div className="flex flex-wrap gap-2">
                            {categories.map((cat) => {
                                const isActive = activeCategory === cat;
                                return (
                                    <button
                                        key={cat}
                                        onClick={() => {
                                            setActiveCategory(cat);
                                            setOpenIndex(null);
                                        }}
                                        className={`text-xs font-medium font-sans px-3 py-1.5 rounded-full border transition-colors ${
                                            isActive
                                                ? "bg-orange-500 text-white border-orange-500"
                                                : "bg-white text-gray-600 border-gray-200 hover:border-orange-500 hover:text-orange-500"
                                        }`}
                                    >
                                        {cat}
                                    </button>
                                );
                            })}
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.25 }}
                        className="mt-8 flex flex-col"
                    >
                        {filtered.length === 0 ? (
                            <p className="text-gray-500 text-sm font-sans py-10 text-center">
                                No questions matched your search. Try a different term or{" "}
                                <Link
                                    href="/contact"
                                    className="text-orange-500 hover:underline font-medium"
                                >
                                    ask us directly
                                </Link>
                                .
                            </p>
                        ) : (
                            filtered.map((faq, index) => {
                                const isOpen = openIndex === index;
                                return (
                                    <div
                                        key={`${faq.category}-${faq.question}`}
                                        className="border-b border-[rgba(199,199,199,0.5)] py-5 md:py-6 first:pt-0"
                                    >
                                        <button
                                            onClick={() => setOpenIndex(isOpen ? null : index)}
                                            className="flex justify-between items-start w-full text-left group gap-4"
                                            aria-expanded={isOpen}
                                        >
                                            <span className="flex flex-col gap-1">
                                                <span className="text-orange-500 text-[0.65rem] uppercase tracking-wider font-semibold font-sans">
                                                    {faq.category}
                                                </span>
                                                <span className="text-text-main text-sm md:text-base font-bold font-sans">
                                                    {faq.question}
                                                </span>
                                            </span>
                                            <span className="shrink-0 mt-1">
                                                {isOpen ? (
                                                    <Minus className="w-5 h-5" />
                                                ) : (
                                                    <Plus className="w-5 h-5" />
                                                )}
                                            </span>
                                        </button>
                                        <AnimatePresence initial={false}>
                                            {isOpen && (
                                                <motion.div
                                                    initial={{ height: 0, opacity: 0 }}
                                                    animate={{ height: "auto", opacity: 1 }}
                                                    exit={{ height: 0, opacity: 0 }}
                                                    transition={{ duration: 0.25 }}
                                                    className="overflow-hidden"
                                                >
                                                    <p className="text-gray-600 text-sm leading-relaxed font-sans pt-3">
                                                        {faq.answer}
                                                    </p>
                                                </motion.div>
                                            )}
                                        </AnimatePresence>
                                    </div>
                                );
                            })
                        )}
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.35 }}
                        className="mt-16 bg-[#FFF6F1] rounded-2xl p-8 md:p-10 flex flex-col md:flex-row md:items-center md:justify-between gap-6"
                    >
                        <div className="flex flex-col gap-2 max-w-xl">
                            <h2 className="text-text-main text-2xl md:text-3xl font-black font-header leading-tight">
                                Still have questions?
                            </h2>
                            <p className="text-gray-600 text-sm font-sans">
                                Talk to our team — we'll answer anything we missed and walk you
                                through how we'd approach your project.
                            </p>
                        </div>
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
                </section>
            </main>
            <Footer />
        </>
    );
}
