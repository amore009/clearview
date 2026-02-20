import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Terms & Conditions",
    description:
        "Review Clearview's Terms and Conditions governing the use of our marketing services, intellectual property, and user responsibilities.",
    alternates: {
        canonical: "https://clearviewmarketing.co/terms",
    },
    openGraph: {
        title: "Terms & Conditions – Clearview Marketing",
        description:
            "Review the terms governing the use of Clearview's marketing services and website.",
        url: "https://clearviewmarketing.co/terms",
    },
};

export default function TermsLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return children;
}
