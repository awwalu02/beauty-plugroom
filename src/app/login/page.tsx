"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "../../lib/supabase";
import Header from "@/components/header";

export default function LoginPage() {
    const router = useRouter();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);

    async function handleLogin() {
        setLoading(true);
        setError("");
        const { error } = await supabase.auth.signInWithPassword({ email, password });
        if (error) {
            setError("Invalid email or password.");
        } else {
            router.push("/admin");
        }
        setLoading(false);
    }

    return (
        <div className="min-h-screen flex flex-col" style={{ background: "#FAF8F4", fontFamily: "'Georgia', serif" }}>
            <Header />
            <div className="flex-1 flex items-center justify-center px-6">
                <div className="w-full max-w-md">
                    <div className="text-center mb-10">
                        <p className="font-sans text-xs uppercase tracking-[0.3em] mb-3" style={{ color: "#C9A84C" }}>Admin Access</p>
                        <h1 className="text-4xl font-bold" style={{ color: "#1C1C1A" }}>Sign In</h1>
                    </div>

                    <div className="flex flex-col gap-4">
                        <div>
                            <label className="font-sans text-xs uppercase tracking-widest block mb-2" style={{ color: "#9A8F7F" }}>Email</label>
                            <input
                                type="email"
                                value={email}
                                onChange={e => setEmail(e.target.value)}
                                className="w-full px-4 py-3 font-sans text-sm outline-none"
                                style={{ background: "#fff", border: "1px solid #E2DDD5", borderRadius: "4px", color: "#1C1C1A" }}
                                placeholder="your@email.com"
                            />
                        </div>
                        <div>
                            <label className="font-sans text-xs uppercase tracking-widest block mb-2" style={{ color: "#9A8F7F" }}>Password</label>
                            <input
                                type="password"
                                value={password}
                                onChange={e => setPassword(e.target.value)}
                                onKeyDown={e => e.key === "Enter" && handleLogin()}
                                className="w-full px-4 py-3 font-sans text-sm outline-none"
                                style={{ background: "#fff", border: "1px solid #E2DDD5", borderRadius: "4px", color: "#1C1C1A" }}
                                placeholder="••••••••"
                            />
                        </div>

                        {error && (
                            <p className="font-sans text-sm text-center" style={{ color: "#E05A5A" }}>{error}</p>
                        )}

                        <button
                            onClick={handleLogin}
                            disabled={loading}
                            className="w-full py-4 font-sans font-semibold text-sm uppercase tracking-widest transition-all duration-300 mt-2"
                            style={{ background: loading ? "#d4b560" : "#E8C97A", color: "#1a1a1a", borderRadius: "4px", cursor: loading ? "not-allowed" : "pointer" }}
                        >
                            {loading ? "Signing in..." : "Sign In"}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}