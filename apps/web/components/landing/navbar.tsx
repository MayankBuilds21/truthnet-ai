"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Shield } from "lucide-react";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#0B1020]/90 backdrop-blur-md border-b border-white/5"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-blue-500 flex items-center justify-center">
            <Shield className="w-4 h-4 text-white" />
          </div>
          <span className="font-semibold text-white tracking-tight">
            TruthNet <span className="text-blue-400">AI</span>
          </span>
        </Link>

        <div className="hidden md:flex items-center gap-8">
          {["Features", "How it works", "About"].map((item) => (
            <Link
              key={item}
              href={`#${item.toLowerCase().replace(" ", "-")}`}
              className="text-sm text-white/50 hover:text-white transition-colors"
            >
              {item}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-3">
  <Link
    href="/sign-in"
    style={{ fontSize: 13, color: "rgba(255,255,255,0.5)", padding: "8px 16px", textDecoration: "none" }}
  >
    Sign in
  </Link>
  <Link
    href="/dashboard"
    style={{
      fontSize: 13, background: "rgba(255,255,255,0.06)",
      border: "0.5px solid rgba(255,255,255,0.1)",
      color: "#fff", padding: "8px 16px", borderRadius: 8,
      textDecoration: "none", fontWeight: 500
    }}
  >
    Dashboard
  </Link>
  <Link
    href="/sign-up"
    style={{
      fontSize: 13, background: "#3b82f6",
      color: "#fff", padding: "8px 16px", borderRadius: 8,
      textDecoration: "none", fontWeight: 500
    }}
  >
    Get started
  </Link>
</div>
      </div>
    </motion.nav>
  );
}