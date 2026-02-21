import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Company | Greenity Corporation",
    description: "Greenity Corporation Inc. is a dedicated home lifestyle partner committed to enhancing happiness by uncovering and solving hidden inconveniences in daily life.",
    openGraph: {
        title: "Company | Greenity Corporation",
        description: "Greenity Corporation Inc. is a dedicated home lifestyle partner committed to enhancing happiness.",
        siteName: "Greenity Corporation",
    },
};

export default function Company() {
    return (
        <div className="pt-32 pb-24">
            <div className="container mx-auto px-6">
                <header className="max-w-3xl mb-24">
                    <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-greenity mb-4 block">Company Profile</span>
                    <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-8">
                        Innovating Everyday Life.
                    </h1>
                    <p className="text-xl text-gray-500 font-light leading-relaxed">
                        Greenity Corporation Inc. is a dedicated home lifestyle partner committed to enhancing happiness by uncovering and solving hidden inconveniences in daily life.
                    </p>
                </header>

                <section className="grid grid-cols-1 md:grid-cols-2 gap-24 mb-32">
                    <div className="space-y-8">
                        <h2 className="text-3xl font-bold tracking-tight">Our Mission</h2>
                        <p className="text-gray-500 leading-relaxed">
                            We strive to build the ultimate home lifestyle solution brand. Through our unique perspective, we carefully identify and address the small issues that make a big difference in your daily routine.
                        </p>
                        <div className="pt-8 border-t border-gray-100">
                            <h3 className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-4">Core Values</h3>
                            <ul className="grid grid-cols-2 gap-4 text-sm font-medium">
                                <li>• Innovation</li>
                                <li>• Cleanliness</li>
                                <li>• Sustainability</li>
                                <li>• Customer Care</li>
                            </ul>
                        </div>
                    </div>
                    <div className="bg-gray-50 rounded-3xl p-12 flex items-center justify-center">
                        <div className="text-center">
                            <p className="text-5xl font-black text-greenity/20 mb-2">2023</p>
                            <p className="text-sm font-bold uppercase tracking-widest">Established</p>
                        </div>
                    </div>
                </section>

                <section className="bg-gray-900 text-white rounded-[40px] p-12 md:p-24 text-center">
                    <h2 className="text-2xl md:text-4xl font-bold mb-8 max-w-2xl mx-auto">
                        "We believe that a cleaner, simpler life leads to greater happiness."
                    </h2>
                    <div className="w-12 h-1 bg-greenity mx-auto" />
                </section>
            </div>
        </div>
    );
}
