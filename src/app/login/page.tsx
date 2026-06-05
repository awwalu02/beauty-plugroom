import Header from '@/components/header';

export default function LoginPage() {
    return (
        <div className="min-h-screen flex flex-col" style={{ background: '#FAF8F4', fontFamily: "'Georgia', serif" }}>
            <Header />

            <div className="flex-1 flex flex-col items-center justify-center text-center px-6">
                <p className="font-sans text-xs uppercase tracking-[0.3em] mb-4" style={{ color: '#C9A84C' }}>
                    Stay Tuned
                </p>
                <h1 className="text-5xl md:text-7xl font-bold mb-6" style={{ color: '#1C1C1A', letterSpacing: '-0.02em' }}>
                    Coming <span style={{ color: '#C9A84C' }}>Soon</span>
                </h1>
                <p className="font-sans text-base max-w-sm mx-auto leading-relaxed" style={{ color: '#7A7065' }}>
                    We're working on something great. Check back soon.
                </p>
            </div>
        </div>
    );
}