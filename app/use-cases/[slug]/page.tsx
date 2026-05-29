"use client";
import { useParams, useRouter } from 'next/navigation';
import { Navbar } from '../../components/Navbar';
import { Footer } from '../../components/Footer';
import { motion } from 'framer-motion';
import Image from 'next/image';

const cases = [
  {
    slug: "dudden-hill",
    title: "Dudden Hill",
    description: "A bold brand identity system built for a forward-thinking organisation rooted in community.",
    fullDescription: "Dudden Hill came to us needing a brand identity that could carry the weight of a rich community legacy while feeling contemporary and confident. We built a full visual identity system — from logo and typography to colour palette and application guidelines — designed to work across print, digital, and environmental contexts.",
    image: "/projects/duddenHill/1.jpg",
    tags: ["Brand Identity", "Visual Identity"],
    year: "2024",
    client: "Dudden Hill",
    deliverables: ["Brand Guidelines", "Logo System", "Typography", "Colour Palette", "Application Design"],
    gallery: Array.from({ length: 73 }, (_, i) => `/projects/duddenHill/${i + 1}.jpg`),
  },
  {
    slug: "dudden-hill-next",
    title: "Dudden Hill Next",
    description: "Get into the draw for a brand new iPhone 15. Gamified campaign design.",
    fullDescription: "Dudden Hill Next needed a campaign that cut through the noise in a saturated gaming market. We designed a fully gamified experience that turned a simple lottery mechanic into an engaging multi-touchpoint journey.",
    image: "/projects/duddenHillNext/1.jpg",
    tags: ["Web Design & Development"],
    year: "2024",
    client: "Dudden Hill Next",
    deliverables: ["Web Design", "Frontend Development", "Campaign Strategy"],
    gallery: Array.from({ length: 51 }, (_, i) => `/projects/duddenHillNext/${i + 1}.jpg`),
  },
  {
    slug: "woven-aura",
    title: "Woven Aura",
    description: "A innovative approach to sustainable fashion branding.",
    fullDescription: "Woven Aura is a sustainable fashion brand that combines eco-friendly materials with modern design aesthetics. We partnered with them to create a brand identity that reflects their commitment to environmental responsibility.",
    image: "/projects/wovenAura/31.jpg",
    tags: ["Brand Identity", "Sustainability", "Fashion"],
    year: "2023",
    client: "Woven Aura",
    deliverables: ["Brand Identity", "UI/UX Design", "Performance Assets"],
    gallery: Array.from({ length: 31 }, (_, i) => `/projects/wovenAura/${i + 1}.jpg`),
  },
  {
    slug: "premier-textiles",
    title: "Premier Textiles",
    description: "Premier Textiles is more than a fabric store. It’s a name families, fashion lovers, and tailors have come to trust.",
    fullDescription: "Premier Textiles came to us with a desire to create a brand that resonates with both traditional and modern consumers. We developed a comprehensive brand identity that highlights their commitment to quality and craftsmanship.",
    image: "/projects/premierTextiles/11.jpg",
    tags: ["Brand Strategy", "Brand Identity", "Fashion"],
    year: "2023",
    client: "Premier Textiles",
    deliverables: ["Brand Strategy", "Visual Identity", "Motion Design", "Launch Campaign"],
    gallery: Array.from({ length: 27 }, (_, i) => `/projects/premierTextiles/${i + 1}.jpg`),
  },
  {
    slug: "wildberries",
    title: "Wildberries",
    description: "Wildberries is a premium party-favor experience designed to bring a sense of joy,elegance,and warmth to every celebration. ",
    fullDescription: `Wildberries is a premium party-favor experience designed to bring a 
                      sense of joy,elegance,and warmth to every celebration. 

                      We specialize in serving handcrafted treats like slush, cotton candy,
                      popcorn,and ice cream through are ﬁned and visually pleasing setup
                      that complements both intimate gatherings and grand events. `,
    image: "/projects/wildberries/1.jpg",
    tags: ["Brand Strategy", "Brand Identity", "Party Favors"],
    year: "2024",
    client: "Wildberries",
    deliverables: ["Brand Strategy", "Visual Identity", "Campaign Design"],
    gallery: Array.from({ length: 22 }, (_, i) => `/projects/wildberries/${i + 1}.jpg`),
  },
  {
    slug: "silver-swan",
    title: "Silver Swan",
    description: "Silver Swan Integrated Hub is a not-for-proﬁt organization based in Montreal, dedicated to strengthening underserved communities through social inclusion, capacity building and digital innovation. ",
    fullDescription: `Silver Swan Integrated Hub is a not-for-proﬁt organization based in 
                      Montreal, dedicated to strengthening underserved communities 

                      through social inclusion, capacity building and digital innovation. 
          
                      We support underserved groups including seniors, women, and
                      youth, by offering social services, community programs, and learning
                      opportunities designed with a human-centered approach. 

                      Our work blends community support with digital transformation,
                      helping individuals build the skills and conﬁdence needed to navigate
                      today’s digital world.`,
    image: "/projects/silverSwan/31.jpg",
    tags: ["Brand Strategy", "Brand Identity"],
    year: "2025",
    client: "Silver Swan",
    deliverables: ["Brand Strategy", "Visual Identity", "Community Engagement"],
    gallery: Array.from({ length: 33  }, (_, i) => `/projects/silverSwan/${i + 1}.jpg`),
  },
 {
    slug: "sea-seo-report-april-city-center-barbershop",
    title: "SEA & SEO Report for April  - City Center Barbershop",
    description: "A comprehensive analysis of search engine advertising and optimization strategies for City Center Barbershop, providing insights and recommendations to enhance online visibility and drive customer engagement.",
    fullDescription: `This report provides a comprehensive analysis of search engine advertising (SEA) and search engine optimization (SEO) strategies for City Center Barbershop. It includes an evaluation of current online visibility, keyword performance, competitor analysis, and actionable recommendations to enhance the barbershop's digital presence and drive customer engagement.`,
    image: "/projects/barbershop_report/1.jpg",
    tags: ["Brand Strategy", "Brand Identity", "Community"],
    year: "2025",
    client: "City Center Barbershop",
    deliverables: ["SEA Strategy", "SEO Analysis", "Competitor Analysis", "Actionable Recommendations"],
    gallery: Array.from({ length: 10 }, (_, i) => `/projects/barbershop_report/${i + 1}.jpg`),
  },
  {
    slug: "packmate-advertising-report",
    title: "Packmate Advertising Report",
    description: "A comprehensive analysis of search engine advertising and optimization strategies for Packmate, providing insights and recommendations to enhance online visibility and drive customer engagement.",
    fullDescription: `This report provides a comprehensive analysis of search engine advertising (SEA) and search engine optimization (SEO) strategies for Packmate. It includes an evaluation of current online visibility, keyword performance, competitor analysis, and actionable recommendations to enhance the company's digital presence and drive customer engagement.`,
    image: "/projects/packmate_report/1.jpg",
    tags: ["Brand Strategy", "Brand Identity", "Community"],
    year: "2025",
    client: "Packmate",
    deliverables: ["SEA Strategy", "SEO Analysis", "Competitor Analysis", "Actionable Recommendations"],
    gallery: Array.from({ length: 10 }, (_, i) => `/projects/packmate_report/${i + 1}.jpg`),
  }
];

export default function ProjectPage() {
  const { slug } = useParams();
  const router = useRouter();
  const project = cases.find((c) => c.slug === slug);

  if (!project) {
    return (
      <>
        <Navbar />
        <div className="min-h-screen flex items-center justify-center">
          <p className="text-gray-400 font-sans text-sm">Project not found.</p>
        </div>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Navbar />
      <main className="w-full min-h-screen bg-white pt-24">

        {/* Hero image */}
        <motion.div
          className="w-full h-[60vh] relative overflow-hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7 }}
        >
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/30" />

          {/* Tags on hero */}
          <div className="absolute top-6 left-8 flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="text-[10px] uppercase tracking-widest font-medium text-white border border-white/40 bg-white/10 backdrop-blur-sm px-3 py-1 rounded-sm"
              >
                {tag}
              </span>
            ))}
          </div>
        </motion.div>

        {/* Project info */}
        <section className="w-full max-w-6xl mx-auto px-4 md:px-14 py-16">
          <div className="flex flex-col md:flex-row gap-16">

            {/* Left — main content */}
            <motion.div
              className="flex-1"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <button
                onClick={() => router.back()}
                className="flex items-center gap-2 text-xs text-gray-400 hover:text-text-main transition-colors mb-8 font-sans uppercase tracking-widest"
              >
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path d="M12 7H2M2 7L6 3M2 7L6 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                Back
              </button>

              <h1 className="text-text-main text-4xl md:text-5xl font-black font-header mb-4 leading-tight">
                {project.title}
              </h1>
              <p className="text-gray-500 text-sm font-sans leading-relaxed mb-8 max-w-xl">
                {project.fullDescription}
              </p>
            </motion.div>

            {/* Right — meta */}
            <motion.div
              className="md:w-64 flex flex-col gap-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.35 }}
            >
              <div>
                <p className="text-[10px] uppercase tracking-widest text-gray-400 font-sans mb-1">Client</p>
                <p className="text-text-main text-sm font-semibold font-sans">{project.client}</p>
              </div>
              <div>
                <p className="text-[10px] uppercase tracking-widest text-gray-400 font-sans mb-1">Year</p>
                <p className="text-text-main text-sm font-semibold font-sans">{project.year}</p>
              </div>
              <div>
                <p className="text-[10px] uppercase tracking-widest text-gray-400 font-sans mb-3">Deliverables</p>
                <div className="flex flex-col gap-2">
                  {project.deliverables.map((d) => (
                    <span key={d} className="text-xs font-sans text-gray-600 border-b border-gray-100 pb-2">{d}</span>
                  ))}
                </div>
              </div>
            </motion.div>

          </div>
        </section>

        {/* Gallery */}
        {project.gallery.length > 0 && (
          <section className="w-full max-w-6xl mx-auto px-4 md:px-14 pb-24">
            <div className="flex flex-col items-center gap-6 w-full">
              {project.gallery.map((img, i) => (
                <motion.div
                  key={i}
                  className="w-full block" 
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-80px' }}
                  transition={{
                    duration: 0.7,
                    ease: [0.25, 0.1, 0.25, 1],
                  }}
                >
                  {/* Using standard Next.js image sizing so it scales perfectly to 100% width of the container while maintaining its native height */}
                  <Image
                    src={img}
                    alt={`${project.title} ${i + 1}`}
                    width={1200} // High base width
                    height={675} // Base fallback height ratio
                    className="w-full h-auto object-contain" 
                  />
                </motion.div>
              ))}
            </div>
          </section>
        )}

      </main>
      <Footer />
    </>
  );
}