"use client";
import { motion } from "framer-motion";
import { Search, CheckCircle, BarChart3, FileText, Activity } from "lucide-react";

const agents = [
  { num: "01", icon: Search, name: "Detection", desc: "Deepfake & AI image scan", color: "#3b82f6", bg: "rgba(59,130,246,0.1)", border: "rgba(59,130,246,0.2)" },
  { num: "02", icon: CheckCircle, name: "Verification", desc: "Fact check & sources", color: "#8b5cf6", bg: "rgba(139,92,246,0.1)", border: "rgba(139,92,246,0.2)" },
  { num: "03", icon: BarChart3, name: "Risk", desc: "Harm & virality score", color: "#06b6d4", bg: "rgba(6,182,212,0.1)", border: "rgba(6,182,212,0.2)" },
  { num: "04", icon: FileText, name: "Response", desc: "PDF report & counter", color: "#3b82f6", bg: "rgba(59,130,246,0.1)", border: "rgba(59,130,246,0.2)" },
  { num: "05", icon: Activity, name: "Monitoring", desc: "Spread & reach track", color: "#8b5cf6", bg: "rgba(139,92,246,0.1)", border: "rgba(139,92,246,0.2)" },
];

export function HowItWorks() {
  return (
    <section id="how-it-works" style={{ padding: "0 24px 80px" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{ textAlign: "center", marginBottom: 40 }}
        >
          <div style={{ fontSize: 11, letterSpacing: "0.1em", color: "#3b82f6", fontWeight: 600, marginBottom: 8 }}>
            MULTI-AGENT PIPELINE
          </div>
          <h2 style={{ fontSize: 36, fontWeight: 700, letterSpacing: "-0.02em", color: "#fff", marginBottom: 12 }}>
            Five agents. One verdict.
          </h2>
          <p style={{ fontSize: 14, color: "rgba(255,255,255,0.4)", maxWidth: 480, margin: "0 auto" }}>
            Every submission passes through a parallel agent pipeline delivering a complete intelligence report.
          </p>
        </motion.div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(5,1fr)", gap: 10 }}>
          {agents.map((a, i) => {
            const Icon = a.icon;
            return (
              <motion.div
                key={a.num}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                style={{
                  background: "#0d1526",
                  border: "0.5px solid rgba(59,130,246,0.1)",
                  borderRadius: 14,
                  padding: 16,
                  transition: "border-color 0.2s",
                  cursor: "default",
                }}
                whileHover={{ borderColor: "rgba(59,130,246,0.35)" } as any}
              >
                <div style={{ fontSize: 10, fontFamily: "monospace", color: "rgba(255,255,255,0.2)", marginBottom: 10 }}>
                  {a.num}
                </div>
                <div
                  style={{
                    width: 34,
                    height: 34,
                    background: a.bg,
                    border: `0.5px solid ${a.border}`,
                    borderRadius: 10,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginBottom: 12,
                  }}
                >
                  <Icon style={{ width: 16, height: 16, color: a.color }} />
                </div>
                <div style={{ fontSize: 13, fontWeight: 600, color: "#fff", marginBottom: 6 }}>{a.name}</div>
                <div style={{ fontSize: 11, color: "rgba(255,255,255,0.35)", lineHeight: 1.5 }}>{a.desc}</div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}