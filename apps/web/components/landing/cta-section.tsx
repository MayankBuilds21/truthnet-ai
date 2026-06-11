"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function CTASection() {
  return (
    <section style={{ padding: "80px 24px" }}>
      <div style={{ maxWidth: 900, margin: "0 auto" }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{
            background: "rgba(59,130,246,0.04)",
            border: "0.5px solid rgba(59,130,246,0.12)",
            borderRadius: 24,
            padding: "60px 40px",
            textAlign: "center",
            position: "relative",
            overflow: "hidden",
          }}
        >
          <div
            style={{
              position: "absolute",
              inset: 0,
              backgroundImage: "linear-gradient(#3B82F6 1px, transparent 1px), linear-gradient(90deg, #3B82F6 1px, transparent 1px)",
              backgroundSize: "40px 40px",
              opacity: 0.025,
              pointerEvents: "none",
            }}
          />
          <h2
            style={{
              fontSize: 40,
              fontWeight: 700,
              letterSpacing: "-0.02em",
              color: "#fff",
              marginBottom: 12,
              lineHeight: 1.2,
              position: "relative",
            }}
          >
            Stop misinformation
            <br />
            <span style={{ color: "#60a5fa" }}>before it spreads.</span>
          </h2>
          <p style={{ fontSize: 14, color: "rgba(255,255,255,0.4)", marginBottom: 28, position: "relative" }}>
            Join TruthNet AI and get instant access to the most powerful misinformation detection platform.
          </p>
          <Link
            href="/sign-up"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              background: "#3b82f6",
              color: "#fff",
              padding: "12px 28px",
              borderRadius: 12,
              fontWeight: 500,
              fontSize: 14,
              textDecoration: "none",
              position: "relative",
            }}
          >
            Get started for free
            <ArrowRight style={{ width: 16, height: 16 }} />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}