import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Use Cases – Our Work & Projects",
    description:
        "Explore Clearview's portfolio of marketing projects across diverse industries. See how we've helped brands like Amazon Prime, Volkabot, and more achieve measurable results.",
    alternates: {
        canonical: "https://clearviewmarketing.co/use-cases",
    },
    openGraph: {
        title: "Clearview Use Cases – Marketing Projects & Results",
        description:
            "See real results from Clearview's marketing strategies. Explore our use cases across diverse industries and discover what we can do for your brand.",
        url: "https://clearviewmarketing.co/use-cases",
    },
};

export default function UseCasesLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return children;
}
