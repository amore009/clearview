"use client";
import React, {
    createContext,
    useContext,
    useEffect,
    useRef,
    useState,
    type ReactNode,
} from "react";
import Lenis from "lenis";

/* ── Context ─────────────────────────────────────────────────── */

interface ScrollStackContextValue {
    progress: number;
    totalItems: number;
}

const ScrollStackContext = createContext<ScrollStackContextValue>({
    progress: 0,
    totalItems: 0,
});

/* ── ScrollStack ─────────────────────────────────────────────── */

interface ScrollStackProps {
    children: ReactNode;
    /** Extra content (e.g. a sticky left column) rendered alongside the cards */
    stickyContent?: ReactNode;
    /** How many viewport-heights the scroll runway should span per card (default 1.2) */
    heightPerCard?: number;
    className?: string;
}

export default function ScrollStack({
    children,
    stickyContent,
    heightPerCard = 1.2,
    className = "",
}: ScrollStackProps) {
    const containerRef = useRef<HTMLDivElement>(null);
    const [progress, setProgress] = useState(0);

    const items = React.Children.toArray(children);
    const totalItems = items.length;

    // Total runway = cards × heightPerCard viewports + 1 viewport for the sticky frame itself
    const runwayVh = totalItems * heightPerCard * 100 + 100;

    /* ── Lenis smooth scroll + progress tracking ─────────────── */
    useEffect(() => {
        const lenis = new Lenis({
            duration: 1.2,
            easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
            smoothWheel: true,
        });

        function onScroll() {
            if (!containerRef.current) return;
            const rect = containerRef.current.getBoundingClientRect();
            const sectionHeight = containerRef.current.offsetHeight;
            const viewportHeight = window.innerHeight;
            const scrollable = sectionHeight - viewportHeight;
            if (scrollable <= 0) return;

            const rawProgress = -rect.top / scrollable;
            setProgress(Math.min(Math.max(rawProgress, 0), 1));
        }

        function raf(time: number) {
            lenis.raf(time);
            requestAnimationFrame(raf);
        }

        lenis.on("scroll", onScroll);
        onScroll(); // initial
        requestAnimationFrame(raf);

        return () => {
            lenis.destroy();
        };
    }, []);

    return (
        <ScrollStackContext.Provider value={{ progress, totalItems }}>
            <div
                ref={containerRef}
                className={className}
                style={{ minHeight: `${runwayVh}vh`, position: "relative" }}
            >
                <div
                    className="hidden md:flex items-center gap-12 xl:gap-16"
                    style={{ position: "sticky", top: 0, height: "100vh", zIndex: 10 }}
                >
                    {/* Optional sticky left column */}
                    {stickyContent && (
                        <div className="shrink-0 w-full max-w-xs">{stickyContent}</div>
                    )}

                    {/* Card stack area */}
                    <div style={{ position: "relative", flex: 1, height: 420 }}>
                        {items.map((child, i) => (
                            <ScrollStackItemInner key={i} index={i} totalItems={totalItems}>
                                {child}
                            </ScrollStackItemInner>
                        ))}
                    </div>
                </div>

                {/* Mobile: simple stacked fallback */}
                <div className="flex flex-col gap-6 md:hidden py-10">
                    {stickyContent && <div className="px-0">{stickyContent}</div>}
                    {items}
                </div>
            </div>
        </ScrollStackContext.Provider>
    );
}

/* ── ScrollStackItem (public wrapper – just passes children through) ── */

interface ScrollStackItemProps {
    children: ReactNode;
    className?: string;
}

export function ScrollStackItem({ children, className = "" }: ScrollStackItemProps) {
    return <div className={className}>{children}</div>;
}

/* ── Internal animated wrapper for desktop ───────────────────── */

function ScrollStackItemInner({
    index,
    totalItems,
    children,
}: {
    index: number;
    totalItems: number;
    children: ReactNode;
}) {
    const { progress } = useContext(ScrollStackContext);

    // Distribute entries evenly across the 0-1 progress range
    const segmentSize = 1 / totalItems;
    const enterStart = index * segmentSize;
    const enterEnd = enterStart + segmentSize * 0.7;

    // Card 0 is always visible; others fade/slide in
    let opacity = 1;
    let yOffset = 0;
    let scale = 1;

    if (index > 0) {
        const raw = (progress - enterStart) / (enterEnd - enterStart);
        const t = Math.min(Math.max(raw, 0), 1);
        const eased = 1 - Math.pow(1 - t, 3); // ease-out cubic
        opacity = eased;
        yOffset = (1 - eased) * 120;
        scale = 0.92 + eased * 0.08;
    }

    // Stack effect: earlier cards shrink slightly when later cards arrive
    for (let later = index + 1; later < totalItems; later++) {
        const laterEnterStart = later * segmentSize;
        const laterEnterEnd = laterEnterStart + segmentSize * 0.7;
        const laterRaw =
            (progress - laterEnterStart) / (laterEnterEnd - laterEnterStart);
        const laterT = Math.min(Math.max(laterRaw, 0), 1);
        scale -= laterT * 0.025;
        yOffset -= laterT * 8;
    }

    return (
        <div
            style={{
                position: "absolute",
                inset: 0,
                zIndex: index + 1,
                opacity,
                transform: `translateY(${yOffset}px) scale(${scale})`,
                willChange: "transform, opacity",
            }}
        >
            {children}
        </div>
    );
}
