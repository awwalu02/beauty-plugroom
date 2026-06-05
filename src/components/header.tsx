"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50" style={{ background: '#fefaf0', borderBottom: '1px solid #E2DDD5' }}>

      <div className="flex items-center justify-between px-6 h-16 max-w-7xl mx-auto">

        <button
          className="md:hidden flex flex-col gap-1.5 p-1"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span className="block w-6 h-px transition-all duration-300" style={{ background: '#43422e', transform: menuOpen ? 'translateY(8px) rotate(45deg)' : '' }} />
          <span className="block w-6 h-px transition-all duration-300" style={{ background: '#43422e', opacity: menuOpen ? 0 : 1 }} />
          <span className="block w-6 h-px transition-all duration-300" style={{ background: '#43422e', transform: menuOpen ? 'translateY(-8px) rotate(-45deg)' : '' }} />
        </button>


        <div className="absolute left-1/2 -translate-x-1/2 md:static md:translate-x-0">
          <Link href="/">
            <Image src="/log.png" alt="Logo" width={60} height={60} className="-translate-y-1" />
          </Link>
        </div>


        <nav className="hidden md:flex items-center gap-8 font-sans text-sm" style={{ color: '#43422e' }}>
          <Link href="/about" className="hover:text-black transition">About Us</Link>
          <Link href="/gallery" className="hover:text-black transition">Gallery</Link>
          <Link href="/login" className="hover:text-black transition">Login</Link>
        </nav>

        <div className="w-8 md:hidden" />
      </div>

      <div
        className="md:hidden overflow-hidden transition-all duration-300"
        style={{
          maxHeight: menuOpen ? '200px' : '0',
          background: '#fefaf0',
          borderTop: menuOpen ? '1px solid #E2DDD5' : 'none',
        }}
      >
        <nav className="flex flex-col px-6 py-4 gap-4 font-sans text-sm" style={{ color: '#43422e' }}>
          <Link href="/about" onClick={() => setMenuOpen(false)} className="hover:text-black transition py-1">About Us</Link>
          <Link href="/gallery" onClick={() => setMenuOpen(false)} className="hover:text-black transition py-1">Gallery</Link>
          <Link href="/login" onClick={() => setMenuOpen(false)} className="hover:text-black transition py-1">Login</Link>
        </nav>
      </div>
    </header>
  );
}