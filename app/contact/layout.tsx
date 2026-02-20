import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Contact Us – Get in Touch",
    description:
        "Reach out to Clearview for marketing solutions, brand strategy, and digital campaigns. Fill out our contact form or connect via social media. We'd love to hear from you.",
    alternates: {
        canonical: "https://clearviewmarketing.co/contact",
    },
    openGraph: {
        title: "Contact Clearview – Let's Work Together",
        description:
            "Have a project in mind? Get in touch with Clearview for tailored marketing solutions that boost visibility and drive measurable results.",
        url: "https://clearviewmarketing.co/contact",
    },
};

export default function ContactLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return children;
}
