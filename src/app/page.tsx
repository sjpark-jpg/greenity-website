import Image from "next/image";
import Link from "next/link";

export default function Home() {
  const brands = [
    {
      id: "sengsihk",
      name: "Sengsihk",
      description: "Lifestyle & Home Essentials",
      color: "rgba(45, 90, 39, 0.05)",
      textColor: "text-greenity",
      link: "https://sengsiik.kr"
    },
    {
      id: "cleanhat",
      name: "Clean Hat",
      description: "Care Services & Products",
      color: "rgba(0, 85, 164, 0.05)",
      textColor: "text-cleanhat",
      link: "https://cleanhat.kr"
    },
    {
      id: "cleanview",
      name: "Clean View",
      description: "Premium Cleaning Solutions",
      color: "rgba(135, 206, 235, 0.05)",
      textColor: "text-cleanview",
      link: "https://cleanview.kr"
    },
    {
      id: "akiiko",
      name: "Akiiko",
      description: "Minimalist Carry Goods",
      color: "rgba(0, 0, 0, 0.02)",
      textColor: "text-gray-900",
      link: "#"
    }
  ];

  return (
    <div className="flex flex-col w-full">
      {/* Hero Section */}
      <section className="relative h-screen w-full flex items-center justify-center bg-gray-50 overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20">
          <div className="absolute top-1/4 -left-1/4 w-1/2 h-1/2 bg-greenity/20 rounded-full blur-[120px]" />
          <div className="absolute bottom-1/4 -right-1/4 w-1/2 h-1/2 bg-cleanhat/20 rounded-full blur-[120px]" />
        </div>

        <div className="container mx-auto px-6 relative z-10 text-center">
          <h1 className="text-4xl md:text-7xl font-bold tracking-tight mb-8 leading-[1.1] text-foreground">
            Innovating Everyday Life<br />
            <span className="text-greenity">for a Cleaner, Greener Future.</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-500 max-w-2xl mx-auto mb-10 leading-relaxed font-light">
            We uncover and solve hidden inconveniences in daily life,
            shaping the ultimate home lifestyle experience.
          </p>
          <div className="flex flex-col md:flex-row items-center justify-center gap-6">
            <Link
              href="/company"
              className="px-10 py-4 bg-foreground text-white rounded-full font-medium hover:bg-gray-800 transition-all duration-300 transform hover:scale-105"
            >
              Learn More
            </Link>
            <Link
              href="/brands"
              className="px-10 py-4 border border-gray-200 rounded-full font-medium hover:border-gray-900 transition-colors"
            >
              Explore Brands
            </Link>
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </section>

      {/* Brand Section */}
      <section id="brands" className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div className="max-w-xl">
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-greenity mb-4 block">Our Portfolio</span>
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight">Caring for your lifestyle.</h2>
            </div>
            <Link href="/brands" className="text-sm font-bold uppercase tracking-widest border-b-2 border-foreground pb-2 hover:text-greenity hover:border-greenity transition-colors">
              View All Brands
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {brands.map((brand) => (
              <a
                key={brand.id}
                href={brand.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative overflow-hidden rounded-3xl p-12 h-[350px] flex flex-col justify-end transition-all duration-500 hover:shadow-2xl"
                style={{ backgroundColor: brand.color }}
              >
                <div className="relative z-10">
                  <h3 className={`text-2xl font-bold mb-2 ${brand.textColor}`}>{brand.name}</h3>
                  <p className="text-gray-500 text-sm mb-6">{brand.description}</p>
                  <span className="inline-flex items-center text-xs font-bold uppercase tracking-widest group-hover:translate-x-2 transition-transform duration-300">
                    Visit Site <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                  </span>
                </div>
                {/* Image Placeholder or Logo could go here */}
                <div className="absolute top-10 right-10 opacity-10 group-hover:opacity-20 transition-opacity duration-500 text-6xl font-black">
                  {brand.name[0]}
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter / Press Section Catch */}
      <section className="py-24 bg-gray-900 text-white overflow-hidden relative">
        <div className="container mx-auto px-6 relative z-10 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 italic">"Where Innovation Meets Everyday Care."</h2>
          <p className="text-gray-400 max-w-xl mx-auto mb-10 text-sm">
            Stay updated with the latest news from Greenity Corporation.
          </p>
          <Link
            href="/press"
            className="px-8 py-3 bg-white text-gray-900 rounded-full text-xs font-bold uppercase tracking-widest hover:bg-greenity hover:text-white transition-all duration-300"
          >
            Read Press Releases
          </Link>
        </div>
        <div className="absolute top-0 right-0 w-64 h-64 bg-greenity/20 rounded-full blur-[100px]" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-cleanhat/20 rounded-full blur-[100px]" />
      </section>
    </div>
  );
}
