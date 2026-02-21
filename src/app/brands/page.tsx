import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Brands | GREENITY CORPORATION INC.",
    description: "Explore GREENITY CORPORATION INC.'s brand portfolio — Sengsihk, Clean Hat, Clean View, and Akiiko. Premium lifestyle brands for everyday living.",
    openGraph: {
        title: "Brands | GREENITY CORPORATION INC.",
        description: "Explore GREENITY CORPORATION INC.'s brand portfolio — Sengsihk, Clean Hat, Clean View, and Akiiko.",
        siteName: "GREENITY CORPORATION INC.",
    },
};

export default function Brands() {
    const brandList = [
        {
            id: "sengsihk",
            name: "Sengsihk",
            subtitle: "Life Focus Design",
            description: "A premium lifestyle brand that focuses on the essentials of daily living. We design products that bring comfort and convenience to your home environment, emphasizing functional beauty and sustainable quality.",
            color: "border-greenity text-greenity",
            bgColor: "bg-greenity/5",
            tags: ["Home Essentials", "Premium Design", "Lifestyle"],
            logo: "/logos/sengsihk.jpg",
            url: "https://sengsiik.kr"
        },
        {
            id: "cleanhat",
            name: "Clean Hat",
            subtitle: "Professional Hat Care",
            description: "Korea's leading professional hat care service. We provide specialized cleaning, restoration, and maintenance solutions to preserve the value of your hats using eco-friendly technology.",
            color: "border-cleanhat text-cleanhat",
            bgColor: "bg-cleanhat/5",
            tags: ["Care Service", "Restoration", "Specialized"],
            logo: "/logos/cleanhat.ico",
            url: "https://cleanhat.kr"
        },
        {
            id: "cleanview",
            name: "Clean View",
            subtitle: "Pure Space Solution",
            description: "Advanced cleaning solutions for residential and commercial spaces. We ensure a transparently clean and healthy environment through high-efficiency purification systems.",
            color: "border-cleanview text-cleanview",
            bgColor: "bg-cleanview/5",
            tags: ["Cleaning Solution", "Eco-friendly", "Expertise"],
            logo: "/logos/cleanview.jpg",
            url: "https://cleanview.kr"
        },
        {
            id: "akiiko",
            name: "Akiiko Korea",
            subtitle: "Modern Simplicity",
            description: "A brand that redefines carry-goods with minimalist aesthetics and functional excellence. Designed for the modern individual who values simplicity, durability, and ergonomic design.",
            color: "border-gray-900 text-gray-900",
            bgColor: "bg-gray-50",
            tags: ["Fashion", "Minimalist", "Accessories"],
            logo: "/logos/akiiko.png",
            url: "https://akiikokorea.com"
        }
    ];

    return (
        <div className="pt-48 pb-32 premium-gradient">
            <div className="container mx-auto px-6">
                <header className="mb-32 max-w-3xl">
                    <span className="text-[10px] md:text-[12px] font-bold uppercase tracking-[0.4em] text-greenity mb-6 block">
                        Our Portfolio
                    </span>
                    <h1 className="text-5xl md:text-7xl font-bold tracking-tighter leading-tight mb-8">
                        Elevating the every day standards.
                    </h1>
                    <p className="text-xl text-gray-400 font-light leading-relaxed">
                        We curate a diverse range of brands that share a common vision: enhancing the quality of daily life through innovation and design excellence.
                    </p>
                </header>

                <div className="grid grid-cols-1 gap-12 md:gap-48">
                    {brandList.map((brand, index) => (
                        <div key={brand.id} className={`flex flex-col ${index % 2 === 1 ? 'md:flex-row-reverse' : 'md:flex-row'} gap-16 items-center`}>
                            <div className="flex-1 w-full aspect-square md:aspect-[4/3] rounded-[60px] overflow-hidden bg-white shadow-xl shadow-gray-100 flex items-center justify-center p-20 group relative">
                                <Image
                                    src={brand.logo}
                                    alt={`${brand.name} logo`}
                                    fill
                                    className="object-contain p-16 group-hover:scale-105 transition-transform duration-700"
                                    sizes="(max-width: 768px) 100vw, 50vw"
                                />
                            </div>
                            <div className="flex-1 space-y-10">
                                <div className={`inline-block border-l-8 ${brand.color} pl-8`}>
                                    <h2 className="text-4xl md:text-5xl font-bold tracking-tighter mb-2">{brand.name}</h2>
                                    <p className="text-[11px] font-bold uppercase tracking-[0.3em] text-gray-300">{brand.subtitle}</p>
                                </div>
                                <p className="text-lg text-gray-500 font-light leading-relaxed">
                                    {brand.description}
                                </p>
                                <div className="flex flex-wrap gap-3">
                                    {brand.tags.map(tag => (
                                        <span key={tag} className="text-[9px] font-bold uppercase tracking-widest bg-gray-50 text-gray-400 px-5 py-2 rounded-full">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                                <div className="pt-6">
                                    <a
                                        href={brand.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center text-xs font-bold uppercase tracking-[0.2em] group border-b border-gray-200 pb-2 hover:border-greenity transition-all"
                                    >
                                        Visit Brand Store
                                        <svg className="w-4 h-4 ml-3 group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                        </svg>
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
