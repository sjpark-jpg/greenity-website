import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Brands | Greenity Corporation",
    description: "Explore Greenity Corporation's brand portfolio — Sengsihk, Clean Hat, Clean View, and Akiiko. Premium lifestyle brands for everyday living.",
    openGraph: {
        title: "Brands | Greenity Corporation",
        description: "Explore Greenity Corporation's brand portfolio — Sengsihk, Clean Hat, Clean View, and Akiiko.",
        siteName: "Greenity Corporation",
    },
};

export default function Brands() {
    const brandList = [
        {
            id: "sengsihk",
            name: "Sengsihk",
            subtitle: "Life Focus Design",
            description: "A premium lifestyle brand that focuses on the essentials of daily living. We design products that bring comfort and convenience to your home environment.",
            color: "border-greenity",
            bgColor: "bg-greenity/5",
            tags: ["Home Essentials", "Premium Design", "Lifestyle"],
            logo: "/logos/sengsihk.jpg",
        },
        {
            id: "cleanhat",
            name: "Clean Hat",
            subtitle: "Professional Hat Care",
            description: "Korea's leading professional hat care service. We provide specialized cleaning, restoration, and maintenance solutions to preserve the value of your hats.",
            color: "border-cleanhat",
            bgColor: "bg-cleanhat/5",
            tags: ["Care Service", "Restoration", "Specialized"],
            logo: "/logos/cleanhat.ico",
        },
        {
            id: "cleanview",
            name: "Clean View",
            subtitle: "Pure Space Solution",
            description: "Advanced cleaning solutions for residential and commercial spaces. We use eco-friendly technology to ensure a transparently clean environment.",
            color: "border-cleanview",
            bgColor: "bg-cleanview/5",
            tags: ["Cleaning Solution", "Eco-friendly", "Expertise"],
            logo: "/logos/cleanview.jpg",
        },
        {
            id: "akiiko",
            name: "Akiiko",
            subtitle: "Modern Simplicity",
            description: "A brand that redefines carry-goods with minimalist aesthetics and functional excellence. Designed for the modern individual who values simplicity.",
            color: "border-gray-900",
            bgColor: "bg-gray-50",
            tags: ["Fashion", "Minimalist", "Accessories"],
            logo: "/logos/akiiko.png",
        }
    ];

    return (
        <div className="pt-32 pb-24">
            <div className="container mx-auto px-6">
                <header className="mb-24">
                    <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-greenity mb-4 block">Our Brands</span>
                    <h1 className="text-4xl md:text-6xl font-bold tracking-tight">Caring for your Lifestyle.</h1>
                </header>

                <div className="grid grid-cols-1 gap-24">
                    {brandList.map((brand, index) => (
                        <div key={brand.id} className={`flex flex-col ${index % 2 === 1 ? 'md:flex-row-reverse' : 'md:flex-row'} gap-12 md:gap-24 items-center`}>
                            <div className="flex-1 w-full aspect-square md:aspect-video rounded-[40px] overflow-hidden bg-gray-50 flex items-center justify-center p-12">
                                <div className="relative w-full h-full">
                                    <Image
                                        src={brand.logo}
                                        alt={`${brand.name} logo`}
                                        fill
                                        className="object-contain"
                                        sizes="(max-width: 768px) 100vw, 50vw"
                                    />
                                </div>
                            </div>
                            <div className="flex-1 space-y-8">
                                <div className={`inline-block border-l-4 ${brand.color} pl-6`}>
                                    <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-2">{brand.name}</h2>
                                    <p className="text-sm font-bold uppercase tracking-widest text-gray-400">{brand.subtitle}</p>
                                </div>
                                <p className="text-lg text-gray-500 font-light leading-relaxed">
                                    {brand.description}
                                </p>
                                <div className="flex flex-wrap gap-2">
                                    {brand.tags.map(tag => (
                                        <span key={tag} className="text-[10px] font-bold uppercase tracking-widest bg-gray-50 text-gray-400 px-4 py-2 rounded-full">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
