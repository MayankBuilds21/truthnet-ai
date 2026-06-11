"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const words = ["Misinformation", "Deepfakes", "Fake News", "Voice Clones", "Manipulated Media"];

export function HeroSection() {
  const [displayed, setDisplayed] = useState("Misinformation");
  const [wordIndex, setWordIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => { setMounted(true); }, []);

  useEffect(() => {
    if (!mounted) return;
    const target = words[wordIndex];
    let t: ReturnType<typeof setTimeout>;
    if (!deleting && displayed.length < target.length) {
      t = setTimeout(() => setDisplayed(target.slice(0, displayed.length + 1)), 80);
    } else if (!deleting && displayed.length === target.length) {
      t = setTimeout(() => setDeleting(true), 2000);
    } else if (deleting && displayed.length > 0) {
      t = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 40);
    } else {
      setDeleting(false);
      setWordIndex((p) => (p + 1) % words.length);
    }
    return () => clearTimeout(t);
  }, [displayed, deleting, wordIndex, mounted]);

  return (
    <section
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "80px 24px 40px",
        position: "relative",
        textAlign: "center",
      }}
    >
      {/* Grid background */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage:
            "linear-gradient(rgba(59,130,246,1) 1px, transparent 1px), linear-gradient(90deg, rgba(59,130,246,1) 1px, transparent 1px)",
          backgroundSize: "50px 50px",
          opacity: 0.03,
          pointerEvents: "none",
        }}
      />

      {/* Center glow */}
      <div
        style={{
          position: "absolute",
          top: "40%",
          left: "50%",
          transform: "translate(-50%,-50%)",
          width: 700,
          height: 500,
          background:
            "radial-gradient(ellipse, rgba(59,130,246,0.07) 0%, rgba(139,92,246,0.04) 40%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      <div style={{ position: "relative", zIndex: 2, maxWidth: 760, width: "100%" }}>
        {/* Live badge */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 8,
            background: "rgba(59,130,246,0.08)",
            border: "0.5px solid rgba(59,130,246,0.22)",
            borderRadius: 999,
            padding: "5px 14px",
            marginBottom: 28,
          }}
        >
          <span
            style={{
              width: 6,
              height: 6,
              borderRadius: "50%",
              background: "#22c55e",
              display: "inline-block",
              animation: "pulse 2s ease-in-out infinite",
            }}
          />
          <span style={{ fontSize: 11, color: "#60a5fa", fontWeight: 600, letterSpacing: "0.05em" }}>
            LIVE · AI-POWERED THREAT INTELLIGENCE
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.1 }}
          style={{
            fontSize: "clamp(40px, 6vw, 68px)",
            fontWeight: 700,
            letterSpacing: "-0.03em",
            lineHeight: 1.1,
            color: "#fff",
            marginBottom: 20,
          }}
        >
          Detect &amp; Destroy
          <br />
          <span style={{ color: "#60a5fa" }}>
            {displayed}
            <span style={{ animation: "blink 1s step-end infinite", opacity: 1 }}>|</span>
          </span>
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.2 }}
          style={{
            fontSize: 16,
            color: "rgba(255,255,255,0.45)",
            maxWidth: 520,
            margin: "0 auto 32px",
            lineHeight: 1.7,
          }}
        >
          Autonomous multi-agent pipeline that detects deepfakes, verifies claims,
          and generates intelligence reports in under 8 seconds.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.3 }}
          style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap", marginBottom: 48 }}
        >
          <Link
            href="/sign-up"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              background: "#3b82f6",
              color: "#fff",
              padding: "12px 26px",
              borderRadius: 12,
              fontWeight: 500,
              fontSize: 14,
              textDecoration: "none",
            }}
          >
            Start investigating <ArrowRight style={{ width: 16, height: 16 }} />
          </Link>
          <Link
            href="#how-it-works"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              background: "rgba(255,255,255,0.05)",
              border: "0.5px solid rgba(255,255,255,0.1)",
              color: "#fff",
              padding: "12px 26px",
              borderRadius: 12,
              fontWeight: 500,
              fontSize: 14,
              textDecoration: "none",
            }}
          >
            See how it works
          </Link>
        </motion.div>

        {/* Trusted by line */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          style={{ fontSize: 11, color: "rgba(255,255,255,0.2)", letterSpacing: "0.04em" }}
        >
          POWERED BY GEMINI AI · LANGGRAPH AGENTS · REAL-TIME VERIFICATION
        </motion.p>
      </div>

      <style>{`
        @keyframes blink { 0%,100%{opacity:1} 50%{opacity:0} }
        @keyframes pulse { 0%,100%{opacity:1} 50%{opacity:0.3} }
      `}</style>
    </section>
  );
}