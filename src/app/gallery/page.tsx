"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import Header from "@/components/header";
import { supabase } from "@/lib/supabase";

const WHATSAPP_URL = "https://wa.me/2347036768760";

interface GalleryImage {
    name: string;
    url: string;
    label: string;
}

export default function GalleryPage() {
    const [images, setImages] = useState<GalleryImage[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchImages();
    }, []);

    async function fetchImages() {
        setLoading(true);
        // Add a timestamp to bust any cache
        const { data } = await supabase.storage.from("gallery").list("", {
            sortBy: { column: "created_at", order: "desc" },
        });

        if (data) {
            const imgs: GalleryImage[] = data
                .filter(file => file.name !== ".emptyFolderPlaceholder")
                .map(file => {
                    const { data: { publicUrl } } = supabase.storage.from("gallery").getPublicUrl(file.name);
                    const label = file.name.includes("__") ? decodeURIComponent(file.name.split("__")[0]) : "";
                    // Bust CDN cache with timestamp query param
                    const bustUrl = `${publicUrl}?t=${file.updated_at || Date.now()}`;
                    return { name: file.name, url: bustUrl, label };
                });
            setImages(imgs);
        }
        setLoading(false);
    }

    return (
        <div className="min-h-screen" style={{ background: "#FAF8F4", fontFamily: "'Georgia', serif" }}>
            <Header />

            {/* Hero */}
            <div className="pt-32 pb-16 text-center px-6">
                <p className="font-sans text-xs uppercase tracking-[0.3em] mb-4" style={{ color: "#C9A84C" }}>Our Products</p>
                <h1 className="text-5xl md:text-7xl font-bold mb-6" style={{ color: "#1C1C1A", letterSpacing: "-0.02em" }}>Gallery</h1>
                <p className="font-sans text-base max-w-sm mx-auto leading-relaxed" style={{ color: "#7A7065" }}>
                    See something you like? Tap any image to order via WhatsApp.
                </p>
            </div>

            {/* Divider */}
            <div className="max-w-xs mx-auto flex items-center gap-4 px-6 mb-16">
                <div className="flex-1 h-px" style={{ background: "#E2DDD5" }} />
                <span style={{ color: "#C9A84C" }}>✦</span>
                <div className="flex-1 h-px" style={{ background: "#E2DDD5" }} />
            </div>

            {/* Grid */}
            <div className="max-w-7xl mx-auto px-6 pb-24">
                {loading ? (
                    <div className="flex items-center justify-center py-32">
                        <p className="font-sans text-sm uppercase tracking-widest" style={{ color: "#9A8F7F" }}>Loading...</p>
                    </div>
                ) : images.length === 0 ? (
                    <div className="flex items-center justify-center py-32">
                        <p className="font-sans text-sm uppercase tracking-widest" style={{ color: "#9A8F7F" }}>No products yet. Check back soon.</p>
                    </div>
                ) : (
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                        {images.map((img, i) => (
                            <a
                                key={i}
                                href={WHATSAPP_URL}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group relative overflow-hidden block"
                                style={{ borderRadius: "4px", background: "#E8E3D9" }}
                            >
                                <div style={{ aspectRatio: "1/1", position: "relative" }}>
                                    <Image
                                        src={img.url}
                                        alt={img.label || `Product ${i + 1}`}
                                        fill
                                        sizes="(max-width: 768px) 50vw, 25vw"
                                        loading={i === 0 ? "eager" : "lazy"}
                                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                                    />
                                    <div
                                        className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                                        style={{ background: "rgba(0,0,0,0.55)" }}
                                    >
                                        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" className="mb-2">
                                            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" fill="#25D366" />
                                            <path d="M12 2C6.477 2 2 6.477 2 12c0 1.89.525 3.66 1.438 5.168L2 22l4.978-1.418A9.956 9.956 0 0012 22c5.523 0 10-4.477 10-10S17.523 2 12 2zm0 18a7.946 7.946 0 01-4.04-1.1l-.29-.173-2.956.842.839-2.881-.19-.295A7.96 7.96 0 014 12c0-4.418 3.582-8 8-8s8 3.582 8 8-3.582 8-8 8z" fill="#25D366" />
                                        </svg>
                                        <p className="font-sans text-white text-xs uppercase tracking-widest">Order Now</p>
                                    </div>
                                </div>
                                {img.label && (
                                    <div className="px-3 py-2" style={{ background: "#fff", borderTop: "1px solid #E2DDD5" }}>
                                        <p className="font-sans text-xs truncate" style={{ color: "#1C1C1A" }}>{img.label}</p>
                                    </div>
                                )}
                            </a>
                        ))}
                    </div>
                )}
            </div>

            {/* CTA */}
            <div className="py-20 text-center px-6" style={{ background: "#1C1C1A" }}>
                <p className="font-sans text-xs uppercase tracking-[0.3em] mb-4" style={{ color: "#C9A84C" }}>Ready to Order?</p>
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6" style={{ fontFamily: "'Georgia', serif" }}>
                    Place your order on WhatsApp
                </h2>
                <a
                    href={WHATSAPP_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block px-12 py-4 font-sans font-semibold text-sm uppercase tracking-widest"
                    style={{ background: "#E8C97A", color: "#1a1a1a", borderRadius: "2px" }}
                >
                    Message Us
                </a>
            </div>

            {/* Footer */}
            <footer style={{ background: "#111110", color: "white" }} className="py-12">
                <div className="max-w-7xl mx-auto px-6 text-center">
                    <h2 className="text-xl font-bold mb-2" style={{ fontFamily: "'Georgia', serif", color: "#E8C97A" }}>Beauty Plug</h2>
                    <p className="font-sans text-xs mb-6" style={{ color: "rgba(255,255,255,0.3)" }}>Quality for Every Style</p>
                    <p className="font-sans text-xs" style={{ color: "rgba(255,255,255,0.2)" }}>&copy; 2026 Beauty Plug Co. All rights reserved.</p>
                </div>
            </footer>
        </div>
    );
}