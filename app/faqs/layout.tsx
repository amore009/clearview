import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "FAQs",
    description:
        "Answers to common questions about Clearview's marketing services, project timelines, pricing, process, and how we work with clients.",
    alternates: {
        canonical: "https://clearviewmarketing.co/faqs",
    },
    openGraph: {
        title: "FAQs – Clearview Marketing",
        description:
            "Answers to common questions about Clearview's services, process, pricing, and ways of working.",
        url: "https://clearviewmarketing.co/faqs",
    },
};

export default function FaqsLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return children;
}
