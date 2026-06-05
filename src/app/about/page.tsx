import Header from '@/components/header';

export default function AboutPage() {
    return (
        <div className="bg-gray-50 min-h-screen">
            <Header />

            {/* Hero */}
            <div className="relative h-[60vh] bg-cover bg-center flex items-center justify-center bg-[url('/img.jpg')]">
                <div className="absolute inset-0 bg-black/55" />
                <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
                    <p className="text-rose-400 font-serif text-sm md:text-lg tracking-widest uppercase mb-4">Our Story</p>
                    <h1 className="text-5xl md:text-8xl font-serif font-bold text-[#FFFDC3] leading-tight mb-6">
                        About Beauty Plug
                    </h1>
                    <p className="text-base md:text-xl text-white/90 max-w-xl mx-auto font-serif">
                        Your go-to source for professional salon supplies in Nigeria. We help salons look
                        great, work efficiently, and serve clients with confidence.
                    </p>
                </div>
            </div>

            {/* Divider */}
            <div className="max-w-xs mx-auto flex items-center gap-4 px-6 py-16">
                <div className="flex-1 h-px bg-gray-200" />
                <span className="text-rose-400 text-xl">✦</span>
                <div className="flex-1 h-px bg-gray-200" />
            </div>

            {/* Connect With Us */}
            <div className="max-w-2xl mx-auto px-6 pb-24">
                <div className="text-center mb-12">
                    <p className="text-rose-500 font-semibold uppercase tracking-widest text-sm mb-3">Find Us On</p>
                    <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900">Connect With Us</h2>
                </div>

                <div className="flex flex-col gap-4">

                    {/* WhatsApp */}
                    <a
                        href="https://wa.me/2347036768760"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-4 md:gap-6 p-4 md:p-6 bg-white rounded-2xl shadow hover:shadow-xl transition group border border-gray-100"
                    >
                        <div className="w-14 h-14 flex items-center justify-center bg-[#e7f8ef] rounded-xl flex-shrink-0">
                            <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
                                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" fill="#25D366" />
                                <path d="M12 2C6.477 2 2 6.477 2 12c0 1.89.525 3.66 1.438 5.168L2 22l4.978-1.418A9.956 9.956 0 0012 22c5.523 0 10-4.477 10-10S17.523 2 12 2zm0 18a7.946 7.946 0 01-4.04-1.1l-.29-.173-2.956.842.839-2.881-.19-.295A7.96 7.96 0 014 12c0-4.418 3.582-8 8-8s8 3.582 8 8-3.582 8-8 8z" fill="#25D366" />
                            </svg>
                        </div>
                        <div className="flex-1">
                            <p className="text-gray-400 text-xs uppercase tracking-widest mb-1">WhatsApp</p>
                            <p className="font-semibold text-base md:text-lg font-serif text-gray-900">07036768760</p>
                            <p className="text-gray-500 text-sm">Chat with us directly</p>
                        </div>
                        <svg className="group-hover:translate-x-1 transition-transform" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#f43f5e" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
                    </a>

                    {/* Instagram */}
                    <a
                        href="https://www.instagram.com/beauty_plugroom"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-4 md:gap-6 p-4 md:p-6 bg-white rounded-2xl shadow hover:shadow-xl transition group border border-gray-100"
                    >
                        <div className="w-14 h-14 flex items-center justify-center bg-[#fdeef5] rounded-xl flex-shrink-0">
                            <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
                                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" stroke="url(#ig1)" strokeWidth="2" />
                                <circle cx="12" cy="12" r="4" stroke="url(#ig2)" strokeWidth="2" />
                                <circle cx="17.5" cy="6.5" r="1" fill="#E1306C" />
                                <defs>
                                    <linearGradient id="ig1" x1="2" y1="22" x2="22" y2="2">
                                        <stop offset="0%" stopColor="#F58529" /><stop offset="50%" stopColor="#DD2A7B" /><stop offset="100%" stopColor="#8134AF" />
                                    </linearGradient>
                                    <linearGradient id="ig2" x1="8" y1="16" x2="16" y2="8">
                                        <stop offset="0%" stopColor="#F58529" /><stop offset="50%" stopColor="#DD2A7B" /><stop offset="100%" stopColor="#8134AF" />
                                    </linearGradient>
                                </defs>
                            </svg>
                        </div>
                        <div className="flex-1">
                            <p className="text-gray-400 text-xs uppercase tracking-widest mb-1">Instagram</p>
                            <p className="font-semibold text-base md:text-lg font-serif text-gray-900">@beauty_plugroom</p>
                            <p className="text-gray-500 text-sm">See our latest products & offers</p>
                        </div>
                        <svg className="group-hover:translate-x-1 transition-transform" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#f43f5e" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
                    </a>

                    {/* TikTok */}
                    <a
                        href="https://www.tiktok.com/@beautyplugroom"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-4 md:gap-6 p-4 md:p-6 bg-white rounded-2xl shadow hover:shadow-xl transition group border border-gray-100"
                    >
                        <div className="w-14 h-14 flex items-center justify-center bg-gray-100 rounded-xl flex-shrink-0">
                            <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
                                <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.69a8.18 8.18 0 004.78 1.52V6.75a4.85 4.85 0 01-1.01-.06z" fill="#000" />
                            </svg>
                        </div>
                        <div className="flex-1">
                            <p className="text-gray-400 text-xs uppercase tracking-widest mb-1">TikTok</p>
                            <p className="font-semibold text-base md:text-lg font-serif text-gray-900">@beautyplugroom</p>
                            <p className="text-gray-500 text-sm">Watch tutorials & behind the scenes</p>
                        </div>
                        <svg className="group-hover:translate-x-1 transition-transform" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#f43f5e" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
                    </a>

                </div>
            </div>

            {/* What We Do */}
            <div className="bg-white py-20">
                <div className="max-w-4xl mx-auto px-6">
                    <div className="text-center mb-14">
                        <p className="text-rose-500 font-semibold uppercase tracking-widest text-sm mb-3">What We Do</p>
                        <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900">Everything Your Salon Needs</h2>
                    </div>
                    <div className="grid md:grid-cols-2 gap-6">
                        {categories.map((cat, i) => (
                            <div key={i} className="bg-gray-50 rounded-2xl p-6 md:p-8 border border-gray-100 hover:shadow-lg transition">
                                <div className="mb-4 text-rose-500">{cat.icon}</div>
                                <h3 className="font-bold text-lg font-serif text-gray-900 mb-2">{cat.title}</h3>
                                <p className="text-gray-500 text-sm leading-relaxed">{cat.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* CTA */}
            <div className="bg-gray-900 py-20 text-center px-6">
                <p className="text-rose-400 font-semibold uppercase tracking-widest text-sm mb-4">Ready to Order?</p>
                <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#FFFDC3] mb-6">
                    Reach out on WhatsApp
                </h2>
                <p className="text-white/50 mb-10 max-w-md mx-auto text-sm md:text-base">
                    The fastest way to place an order or ask a question is to message us directly.
                </p>
                <a
                    href="https://wa.me/2347036768760"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-8 md:px-10 py-4 md:py-5 bg-white text-gray-900 font-semibold rounded-full text-base md:text-lg hover:bg-rose-500 hover:text-white transition inline-block"
                >
                    Message Us
                </a>
            </div>

            {/* Footer */}
            <footer className="bg-gray-900 text-white py-16 border-t border-white/10">
                <div className="max-w-7xl mx-auto px-6 text-center">
                    <h2 className="text-2xl md:text-3xl font-bold mb-4">Beauty Plug</h2>
                    <p className="text-gray-400 mb-8">Quality for Every Style</p>
                    <p className="text-gray-500">&copy; 2026 Beauty Plug Co. All rights reserved.</p>
                </div>
            </footer>
        </div>
    );
}

const categories = [
    {
        icon: (
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M6 3a3 3 0 1 0 0 6 3 3 0 0 0 0-6z" /><path d="M18 15a3 3 0 1 0 0 6 3 3 0 0 0 0-6z" />
                <path d="M8.5 5.5 19 16M9 8l-2.5 2.5M16 15.5l-2.5 2.5" />
            </svg>
        ),
        title: 'Clippers & Scissors',
        desc: 'Professional-grade cutting tools for precision and durability.',
    },
    {
        icon: (
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 22V9a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v13" /><path d="M2 22h20" /><path d="M7 22v-5h10v5" /><path d="M12 7V3" /><path d="M9 3h6" />
            </svg>
        ),
        title: 'Salon Furniture',
        desc: 'Stylish, comfortable chairs and stations built for long days.',
    },
    {
        icon: (
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M9 3H5a2 2 0 0 0-2 2v4m6-6h10a2 2 0 0 1 2 2v4M9 3v18m0 0h10a2 2 0 0 0 2-2v-4M9 21H5a2 2 0 0 1-2-2v-4m0 0h18" />
            </svg>
        ),
        title: 'Tools & Equipment',
        desc: 'Everything from dryers to straighteners — all pro-spec.',
    },
    {
        icon: (
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 2v4M6.3 6.3 3.5 3.5M4 12H2M6.3 17.7l-2.8 2.8M12 22v-4m5.7-2.3 2.8 2.8M22 12h-2m-2.3-5.7 2.8-2.8" />
                <circle cx="12" cy="12" r="4" />
            </svg>
        ),
        title: 'Aprons & Capes',
        desc: 'Keep your clients comfortable and your salon looking sharp.',
    },
];