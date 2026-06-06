"use client";
import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { supabase } from "@/lib/supabase";

interface GalleryImage {
    name: string;
    url: string;
    label: string;
}

export default function AdminPage() {
    const router = useRouter();
    const fileInputRef = useRef<HTMLInputElement>(null);
    const [images, setImages] = useState<GalleryImage[]>([]);
    const [uploading, setUploading] = useState(false);
    const [deleting, setDeleting] = useState<string | null>(null);
    const [message, setMessage] = useState("");
    const [messageType, setMessageType] = useState<"success" | "error">("success");
    const [labelInput, setLabelInput] = useState("");
    const [selectedFiles, setSelectedFiles] = useState<File[]>([]);

    useEffect(() => {
        checkAuth();
        fetchImages();
    }, []);

    async function checkAuth() {
        const { data: { session } } = await supabase.auth.getSession();
        if (!session) router.push("/login");
    }

    async function fetchImages() {
        const { data, error } = await supabase.storage.from("gallery").list("", {
            sortBy: { column: "created_at", order: "desc" },
        });
        if (error) {
            console.error("Fetch error:", error);
            return;
        }
        if (data) {
            const imgs: GalleryImage[] = data
                .filter(f => f.name !== ".emptyFolderPlaceholder")
                .map(file => {
                    const { data: { publicUrl } } = supabase.storage.from("gallery").getPublicUrl(file.name);
                    const label = file.name.includes("__") ? decodeURIComponent(file.name.split("__")[0]) : "";
                    return { name: file.name, url: publicUrl, label };
                });
            setImages(imgs);
        }
    }

    function handleFileSelect(e: React.ChangeEvent<HTMLInputElement>) {
        const files = Array.from(e.target.files || []);
        if (files.length > 0) {
            setSelectedFiles(files);
            setMessage("");
        }
    }

    async function handleUpload() {
        if (selectedFiles.length === 0) return;
        setUploading(true);
        setMessage("");

        for (const file of selectedFiles) {
            const safeName = file.name.replace(/[^a-zA-Z0-9._-]/g, "_");
            const prefix = labelInput.trim() ? `${encodeURIComponent(labelInput.trim())}__` : "";
            const fileName = `${prefix}${Date.now()}_${safeName}`;

            console.log("Uploading:", fileName);

            const { data, error } = await supabase.storage
                .from("gallery")
                .upload(fileName, file, { cacheControl: "3600", upsert: false });

            console.log("Upload result:", data, error);

            if (error) {
                setMessage(`Upload failed: ${error.message}`);
                setMessageType("error");
                setUploading(false);
                return;
            }
        }

        setMessage(`${selectedFiles.length} image(s) uploaded!`);
        setMessageType("success");
        setSelectedFiles([]);
        setLabelInput("");
        if (fileInputRef.current) fileInputRef.current.value = "";
        await fetchImages();
        setUploading(false);
    }

    async function handleDelete(img: GalleryImage) {
        setDeleting(img.name);
        const { error } = await supabase.storage.from("gallery").remove([img.name]);
        if (error) {
            setMessage(`Delete failed: ${error.message}`);
            setMessageType("error");
            setDeleting(null);
            return;
        }
        setImages(prev => prev.filter(i => i.name !== img.name));
        setMessage("Image deleted.");
        setMessageType("success");
        setDeleting(null);
    }

    async function handleLogout() {
        await supabase.auth.signOut();
        router.push("/login");
    }

    return (
        <div className="min-h-screen" style={{ background: "#FAF8F4", fontFamily: "'Georgia', serif" }}>
            {/* Top bar */}
            <div className="flex items-center justify-between px-6 py-4 border-b" style={{ background: "#fff", borderColor: "#E2DDD5" }}>
                <div>
                    <p className="font-sans text-xs uppercase tracking-[0.3em]" style={{ color: "#C9A84C" }}>Admin Panel</p>
                    <h1 className="text-xl font-bold" style={{ color: "#1C1C1A" }}>Beauty Plug</h1>
                </div>
                <button
                    onClick={handleLogout}
                    className="font-sans text-sm px-5 py-2 uppercase tracking-widest transition"
                    style={{ border: "1px solid #E2DDD5", borderRadius: "4px", color: "#7A7065" }}
                >
                    Sign Out
                </button>
            </div>

            <div className="max-w-5xl mx-auto px-6 py-12">

                {/* Upload box */}
                <div className="p-8 mb-4" style={{ background: "#fff", border: "1px solid #E2DDD5", borderRadius: "4px" }}>
                    <h2 className="font-bold text-lg mb-6" style={{ color: "#1C1C1A" }}>Upload Images</h2>

                    {/* File picker */}
                    <div
                        className="border-2 border-dashed p-8 text-center mb-4 cursor-pointer"
                        style={{ borderColor: "#E2DDD5", borderRadius: "4px" }}
                        onClick={() => fileInputRef.current?.click()}
                    >
                        <input
                            ref={fileInputRef}
                            type="file"
                            multiple
                            accept="image/*"
                            className="hidden"
                            onChange={handleFileSelect}
                        />
                        <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#C9A84C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="mx-auto mb-3">
                            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                            <polyline points="17 8 12 3 7 8" />
                            <line x1="12" y1="3" x2="12" y2="15" />
                        </svg>
                        <p className="font-sans text-sm font-semibold uppercase tracking-widest" style={{ color: "#1C1C1A" }}>
                            {selectedFiles.length > 0 ? `${selectedFiles.length} file(s) selected` : "Click to choose images"}
                        </p>
                        <p className="font-sans text-xs mt-1" style={{ color: "#9A8F7F" }}>JPG, PNG, WEBP supported</p>
                    </div>

                    {/* Optional label — only show after files selected */}
                    {selectedFiles.length > 0 && <div className="mb-4">
                        <label className="font-sans text-xs uppercase tracking-widest block mb-2" style={{ color: "#9A8F7F" }}>
                            Product Name <span style={{ color: "#C9A84C" }}>(optional)</span>
                        </label>
                        <input
                            type="text"
                            value={labelInput}
                            onChange={e => setLabelInput(e.target.value)}
                            placeholder="e.g. Professional Clippers"
                            className="w-full px-4 py-3 font-sans text-sm outline-none"
                            style={{ background: "#FAF8F4", border: "1px solid #E2DDD5", borderRadius: "4px", color: "#1C1C1A" }}
                        />
                    </div>}

                    {/* Upload button */}
                    <button
                        onClick={handleUpload}
                        disabled={uploading || selectedFiles.length === 0}
                        className="w-full py-4 font-sans font-semibold text-sm uppercase tracking-widest transition"
                        style={{
                            background: uploading || selectedFiles.length === 0 ? "#d4c47a88" : "#E8C97A",
                            color: "#1a1a1a",
                            borderRadius: "4px",
                            cursor: uploading || selectedFiles.length === 0 ? "not-allowed" : "pointer"
                        }}
                    >
                        {uploading ? "Uploading..." : "Upload"}
                    </button>
                </div>

                {/* Message */}
                {message && (
                    <p className="font-sans text-sm text-center mb-6" style={{ color: messageType === "error" ? "#E05A5A" : "#4CAF50" }}>
                        {message}
                    </p>
                )}

                {/* Images grid */}
                <div>
                    <div className="flex items-center justify-between mb-6">
                        <h2 className="text-2xl font-bold" style={{ color: "#1C1C1A" }}>Gallery Images</h2>
                        <p className="font-sans text-sm" style={{ color: "#9A8F7F" }}>{images.length} images</p>
                    </div>

                    {images.length === 0 ? (
                        <p className="font-sans text-sm text-center py-20" style={{ color: "#9A8F7F" }}>No images yet.</p>
                    ) : (
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                            {images.map((img, i) => (
                                <div key={i} className="relative group overflow-hidden" style={{ borderRadius: "4px", aspectRatio: "1/1", background: "#E8E3D9" }}>
                                    <Image src={img.url} alt={img.label || `Product ${i + 1}`} fill className="object-cover" sizes="(max-width: 768px) 50vw, 25vw" />
                                    {img.label && (
                                        <div className="absolute bottom-0 left-0 right-0 px-3 py-2" style={{ background: "rgba(0,0,0,0.5)" }}>
                                            <p className="font-sans text-white text-xs truncate">{img.label}</p>
                                        </div>
                                    )}
                                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ background: "rgba(0,0,0,0.5)" }}>
                                        <button
                                            onClick={() => handleDelete(img)}
                                            className="font-sans text-xs uppercase tracking-widest px-4 py-2"
                                            style={{ background: "#E05A5A", color: "#fff", borderRadius: "4px" }}
                                        >
                                            {deleting === img.name ? "Deleting..." : "Delete"}
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}