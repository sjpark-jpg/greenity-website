import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Press | Greenity Corporation",
    description: "Latest news and press releases from Greenity Corporation and its brands — Sengsihk, Clean Hat, Clean View, and Akiiko.",
    openGraph: {
        title: "Press | Greenity Corporation",
        description: "Latest news and press releases from Greenity Corporation and its brands.",
        siteName: "Greenity Corporation",
    },
};

export default function Press() {
    const news = [
        {
            id: 1,
            category: "Sustainability",
            title: "Greenity Corporation Expands Sustainable Product Line",
            date: "2026.02.15",
            excerpt: "Following the core mission of a 'Greener Future', Greenity announces new eco-friendly initiatives across all brands."
        },
        {
            id: 2,
            category: "Brand News",
            title: "Clean Hat Receives Innovation Award for Care Services",
            date: "2026.01.20",
            excerpt: "The professional hat care brand Clean Hat has been recognized for its exceptional service quality and customer satisfaction."
        },
        {
            id: 3,
            category: "E-Commerce",
            title: "Sengsihk Best-selling Items Now Available Internationally",
            date: "2025.12.10",
            excerpt: "The lifestyle brand Sengsihk is expanding its reach to global customers starting this quarter."
        }
    ];

    return (
        <div className="pt-32 pb-24">
            <div className="container mx-auto px-6">
                <header className="mb-24">
                    <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-greenity mb-4 block">Press Room</span>
                    <h1 className="text-4xl md:text-6xl font-bold tracking-tight">Latest News.</h1>
                </header>

                <div className="grid grid-cols-1 gap-12">
                    {news.map((item) => (
                        <article key={item.id} className="group border-b border-gray-100 pb-12 transition-colors hover:border-greenity">
                            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
                                <span className="text-[10px] font-bold uppercase tracking-widest px-3 py-1 bg-gray-50 text-gray-400 rounded-full group-hover:bg-greenity/10 group-hover:text-greenity transition-colors">
                                    {item.category}
                                </span>
                                <time className="text-xs text-gray-400 font-medium">{item.date}</time>
                            </div>
                            <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-4 group-hover:text-greenity transition-colors">
                                {item.title}
                            </h2>
                            <p className="text-gray-500 leading-relaxed max-w-3xl">
                                {item.excerpt}
                            </p>
                        </article>
                    ))}
                </div>
            </div>
        </div>
    );
}
