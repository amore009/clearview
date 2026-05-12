import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Privacy Policy",
    description:
        "Read Clearview's Privacy Policy to understand how we collect, use, and safeguard your personal information when you use our website and marketing services.",
    alternates: {
        canonical: "https://clearviewmarketing.co/privacy-policy",
    },
    openGraph: {
        title: "Privacy Policy – Clearview Marketing",
        description:
            "Learn how Clearview protects your data and privacy. Our commitment to transparency and security.",
        url: "https://clearviewmarketing.co/privacy-policy",
    },
};

export default function PrivacyPolicyLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return children;
}
