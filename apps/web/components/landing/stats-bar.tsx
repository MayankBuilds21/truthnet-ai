"use client";
import { motion } from "framer-motion";
import { Shield, Zap, TrendingUp, AlertTriangle } from "lucide-react";

const stats = [
  { icon: Shield, label: "Threats detected", value: "2.4M+", color: "#3b82f6" },
  { icon: Zap, label: "Avg analysis time", value: "< 8s", color: "#8b5cf6" },
  { icon: TrendingUp, label: "Accuracy rate", value: "94.2%", color: "#06b6d4" },
  { icon: AlertTriangle, label: "Deepfakes flagged", value: "180K+", color: "#f59e0b" },
];

export function StatsBar() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="max-w-6xl mx-auto px-6 mb-20"
    >
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gap: "1px",
          background: "rgba(255,255,255,0.06)",
          borderRadius: 14,
          overflow: "hidden",
          border: "0.5px solid rgba(255,255,255,0.06)",
        }}
      >
        {stats.map(({ icon: Icon, label, value, color }) => (
          <div
            key={label}
            style={{
              background: "#0d1526",
              padding: "20px 20px",
            }}
          >
            <Icon style={{ width: 20, height: 20, color, marginBottom: 10 }} />
            <div style={{ fontSize: 22, fontWeight: 700, color: "#fff", letterSpacing: "-0.02em" }}>
              {value}
            </div>
            <div style={{ fontSize: 12, color: "rgba(255,255,255,0.35)", marginTop: 3 }}>
              {label}
            </div>
          </div>
        ))}
      </div>
    </motion.section>
  );
}