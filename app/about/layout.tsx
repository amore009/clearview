import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "About Us – Our Story & Mission",
    description:
        "Learn about Clearview's mission to help brands thrive through strategic marketing, compelling content, and data-driven growth. 134+ projects completed, 50+ active clients, 4x average client growth.",
    alternates: {
        canonical: "https://clearviewmarketing.co/about",
    },
    openGraph: {
        title: "About Clearview – Our Story & Mission",
        description:
            "Discover how Clearview helps businesses unlock their full potential through strategic marketing, compelling content, and data-driven growth strategies.",
        url: "https://clearviewmarketing.co/about",
    },
};

export default function AboutLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return children;
}
