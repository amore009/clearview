import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Testimonials – What Our Clients Say",
    description:
        "Read what clients say about working with Clearview. From 150% lead generation increases to seamless partnerships, discover why top brands trust our marketing solutions.",
    alternates: {
        canonical: "https://clearviewmarketing.co/testimonials",
    },
    openGraph: {
        title: "Clearview Testimonials – Client Success Stories",
        description:
            "Hear from real clients about how Clearview transformed their marketing, boosted lead generation, and delivered sustained ROI.",
        url: "https://clearviewmarketing.co/testimonials",
    },
};

export default function TestimonialsLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return children;
}
