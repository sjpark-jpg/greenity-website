const Footer = () => {
    return (
        <footer className="bg-gray-50 border-t border-gray-100 py-16">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
                    <div className="col-span-1 md:col-span-2">
                        <h2 className="text-lg font-bold mb-6 tracking-tight">
                            GREENITY CORPORATION INC<span className="text-greenity">.</span>
                        </h2>
                        <p className="text-gray-400 text-xs leading-relaxed max-w-sm mb-6 font-light">
                            Innovating everyday life for a cleaner, greener future.
                            We are dedicated home lifestyle partners committed to enhancing global standards of happy living.
                        </p>
                    </div>
                    <div>
                        <h3 className="text-xs font-bold uppercase tracking-widest mb-6">Explore</h3>
                        <ul className="space-y-4 text-sm text-gray-400">
                            <li><a href="/company" className="hover:text-foreground transition-colors">Company Profile</a></li>
                            <li><a href="/brands" className="hover:text-foreground transition-colors">Our Brands</a></li>
                            <li><a href="/press" className="hover:text-foreground transition-colors">Press Release</a></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-xs font-bold uppercase tracking-widest mb-6">Contact</h3>
                        <ul className="space-y-4 text-sm text-gray-400">
                            <li>Address: Rm 28, 2F, 418 Sunhwagung-ro, Namyangju-si, Gyeonggi-do</li>
                            <li>Tel: 1877-3427</li>
                            <li>Email: sales@greenitycorp.kr</li>
                        </ul>
                    </div>
                </div>
                <div className="pt-8 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center text-[10px] uppercase tracking-widest text-gray-400">
                    <p>© 2026 GREENITY CORPORATION INC. ALL RIGHTS RESERVED.</p>
                    <div className="flex space-x-6 mt-4 md:mt-0">
                        <span>Privacy Policy</span>
                        <span>Terms of Use</span>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
