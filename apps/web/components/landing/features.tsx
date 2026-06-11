"use client";
import { motion } from "framer-motion";
import { Cpu, Shield, Globe, Eye, FileDown, Layers } from "lucide-react";

const features = [
  { icon: Cpu, title: "Agent visualization", desc: "Watch all 5 AI agents work live with real-time status indicators." },
  { icon: Shield, title: "Truth score engine", desc: "0–100 truth, risk, harm, and virality scores on every submission." },
  { icon: Globe, title: "URL & text analysis", desc: "Paste any URL or text and get a full fact-check in under 10 seconds." },
  { icon: Eye, title: "Deepfake detection", desc: "Identify AI-generated images and voice-cloned audio instantly." },
  { icon: FileDown, title: "PDF report export", desc: "Court-ready evidence report with all findings, scores, and citations." },
  { icon: Layers, title: "Explainable AI", desc: "Plain-language explanations for every score and verdict given." },
];

export function Features() {
  return (
    <section id="features" style={{ background: "#080e1c", padding: "80px 24px" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{ textAlign: "center", marginBottom: 40 }}
        >
          <div style={{ fontSize: 11, letterSpacing: "0.1em", color: "#8b5cf6", fontWeight: 600, marginBottom: 8 }}>
            PLATFORM FEATURES
          </div>
          <h2 style={{ fontSize: 36, fontWeight: 700, letterSpacing: "-0.02em", color: "#fff", marginBottom: 12 }}>
            Built for the information war
          </h2>
          <p style={{ fontSize: 14, color: "rgba(255,255,255,0.4)", maxWidth: 480, margin: "0 auto" }}>
            Every feature is designed for analysts, journalists, and security teams who need fast, reliable verdicts.
          </p>
        </motion.div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 10 }}>
          {features.map((f, i) => {
            const Icon = f.icon;
            return (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                style={{
                  background: "#080e1c",
                  border: "0.5px solid rgba(255,255,255,0.05)",
                  borderRadius: 14,
                  padding: 20,
                  transition: "all 0.2s",
                  cursor: "default",
                }}
                whileHover={{ borderColor: "rgba(59,130,246,0.25)", background: "#0a1020" } as any}
              >
                <div
                  style={{
                    width: 36,
                    height: 36,
                    background: "rgba(255,255,255,0.04)",
                    border: "0.5px solid rgba(255,255,255,0.08)",
                    borderRadius: 10,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginBottom: 14,
                  }}
                >
                  <Icon style={{ width: 17, height: 17, color: "rgba(255,255,255,0.35)" }} />
                </div>
                <div style={{ fontSize: 13, fontWeight: 600, color: "#fff", marginBottom: 6 }}>{f.title}</div>
                <div style={{ fontSize: 12, color: "rgba(255,255,255,0.38)", lineHeight: 1.6 }}>{f.desc}</div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}