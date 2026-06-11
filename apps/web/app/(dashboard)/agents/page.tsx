"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  Search, CheckCircle, BarChart3, FileText,
  Activity, Zap, Clock, AlertTriangle, RefreshCw
} from "lucide-react";

const agents = [
  {
    id: 1, name: "Detection Agent", icon: Search, color: "#3b82f6",
    bg: "rgba(59,130,246,0.1)", border: "rgba(59,130,246,0.2)",
    status: "active",
    description: "Scans content for deepfake markers, AI-generation artifacts, manipulation patterns, and voice cloning signatures.",
    capabilities: ["Deepfake detection", "AI image analysis", "Voice clone detection", "Manipulation pattern scan"],
    processed: 1247, accuracy: 94.2, avgTime: 1.8,
  },
  {
    id: 2, name: "Verification Agent", icon: CheckCircle, color: "#8b5cf6",
    bg: "rgba(139,92,246,0.1)", border: "rgba(139,92,246,0.2)",
    status: "active",
    description: "Cross-references claims against live verified sources, validates evidence chains, and calculates truth confidence scores.",
    capabilities: ["Fact checking", "Source validation", "Evidence collection", "Truth scoring"],
    processed: 1198, accuracy: 91.7, avgTime: 2.4,
  },
  {
    id: 3, name: "Risk Assessment Agent", icon: BarChart3, color: "#06b6d4",
    bg: "rgba(6,182,212,0.1)", border: "rgba(6,182,212,0.2)",
    status: "active",
    description: "Calculates harm potential, virality risk, and threat severity across multiple vectors for each investigation.",
    capabilities: ["Harm scoring", "Virality prediction", "Threat classification", "Risk vectoring"],
    processed: 1247, accuracy: 89.3, avgTime: 1.2,
  },
  {
    id: 4, name: "Response Agent", icon: FileText, color: "#3b82f6",
    bg: "rgba(59,130,246,0.1)", border: "rgba(59,130,246,0.2)",
    status: "idle",
    description: "Generates counter-narratives, executive summaries, and downloadable PDF evidence reports for each investigation.",
    capabilities: ["Counter narrative", "Executive summary", "PDF generation", "Report packaging"],
    processed: 1247, accuracy: 97.1, avgTime: 0.9,
  },
  {
    id: 5, name: "Monitoring Agent", icon: Activity, color: "#8b5cf6",
    bg: "rgba(139,92,246,0.1)", border: "rgba(139,92,246,0.2)",
    status: "active",
    description: "Tracks spread vectors, estimates reach, and monitors mentions across platforms in real time.",
    capabilities: ["Spread tracking", "Reach estimation", "Mention monitoring", "Velocity analysis"],
    processed: 892, accuracy: 86.4, avgTime: 3.1,
  },
];

const agentColors = ["#3b82f6","#8b5cf6","#06b6d4","#3b82f6","#8b5cf6"];

function LoadBar({ value, color, delay }: { value: number; color: string; delay: number }) {
  return (
    <div style={{ height: 4, background: "rgba(255,255,255,0.06)", borderRadius: 2 }}>
      <motion.div
        initial={{ width: 0 }}
        animate={{ width: `${value}%` }}
        transition={{ duration: 1, ease: "easeOut", delay }}
        style={{ height: "100%", background: color, borderRadius: 2 }}
      />
    </div>
  );
}

export default function AgentsPage() {
  const [loads, setLoads] = useState([78, 65, 45, 12, 89]);

  useEffect(() => {
    const interval = setInterval(() => {
      setLoads((prev) => prev.map((v, i) =>
        agents[i].status === "active"
          ? Math.min(100, Math.max(10, v + (Math.random() * 10 - 5)))
          : Math.min(15, Math.max(2, v + (Math.random() * 4 - 2)))
      ));
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div style={{ maxWidth: 1200, margin: "0 auto" }}>
      <div style={{ marginBottom: 28, display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <div>
          <h1 style={{ fontSize: 22, fontWeight: 700, color: "#fff", marginBottom: 4 }}>
            Agent Control Center
          </h1>
          <p style={{ fontSize: 13, color: "rgba(255,255,255,0.35)" }}>
            Monitor and manage the 5-agent analysis pipeline
          </p>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: 8, background: "rgba(34,197,94,0.1)", border: "0.5px solid rgba(34,197,94,0.2)", borderRadius: 10, padding: "8px 16px" }}>
          <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#22c55e", display: "inline-block", animation: "pulse 2s infinite" }} />
          <span style={{ fontSize: 12, color: "#22c55e", fontWeight: 500 }}>4 of 5 agents active</span>
        </div>
      </div>

      {/* Pipeline overview */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(5,1fr)", gap: 8, marginBottom: 24 }}>
        {agents.map((a, i) => {
          const Icon = a.icon;
          return (
            <motion.div
              key={a.id}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.08 }}
              style={{
                background: "#0d1526",
                border: `0.5px solid ${a.status === "active" ? a.border : "rgba(255,255,255,0.06)"}`,
                borderRadius: 12, padding: 14, textAlign: "center"
              }}
            >
              <div style={{
                width: 36, height: 36, background: a.bg, border: `0.5px solid ${a.border}`,
                borderRadius: 10, display: "flex", alignItems: "center", justifyContent: "center",
                margin: "0 auto 10px"
              }}>
                <Icon style={{ width: 16, height: 16, color: a.color }} />
              </div>
              <div style={{ fontSize: 11, fontWeight: 600, color: "#fff", marginBottom: 4 }}>{a.name.replace(" Agent", "")}</div>
              <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 4 }}>
                <span style={{ width: 5, height: 5, borderRadius: "50%", background: a.status === "active" ? "#22c55e" : "rgba(255,255,255,0.2)", display: "inline-block" }} />
                <span style={{ fontSize: 10, color: a.status === "active" ? "#22c55e" : "rgba(255,255,255,0.3)" }}>
                  {a.status.toUpperCase()}
                </span>
              </div>
              <div style={{ marginTop: 10 }}>
                <LoadBar value={loads[i]} color={a.color} delay={i * 0.1} />
              </div>
              <div style={{ fontSize: 10, color: "rgba(255,255,255,0.25)", marginTop: 4 }}>
                {Math.round(loads[i])}% load
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Agent detail cards */}
      <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
        {agents.map((a, i) => {
          const Icon = a.icon;
          return (
            <motion.div
              key={a.id}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + i * 0.08 }}
              style={{
                background: "#0d1526",
                border: "0.5px solid rgba(255,255,255,0.06)",
                borderRadius: 14, padding: "20px 24px",
                display: "grid", gridTemplateColumns: "1fr 1fr 1fr",
                gap: 24, alignItems: "start"
              }}
            >
              {/* Left: identity */}
              <div>
                <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 10 }}>
                  <div style={{
                    width: 36, height: 36, background: a.bg,
                    border: `0.5px solid ${a.border}`,
                    borderRadius: 10, display: "flex", alignItems: "center", justifyContent: "center"
                  }}>
                    <Icon style={{ width: 16, height: 16, color: a.color }} />
                  </div>
                  <div>
                    <div style={{ fontSize: 14, fontWeight: 600, color: "#fff" }}>{a.name}</div>
                    <div style={{ display: "flex", alignItems: "center", gap: 4, marginTop: 2 }}>
                      <span style={{ width: 5, height: 5, borderRadius: "50%", background: a.status === "active" ? "#22c55e" : "rgba(255,255,255,0.2)", display: "inline-block" }} />
                      <span style={{ fontSize: 10, color: a.status === "active" ? "#22c55e" : "rgba(255,255,255,0.3)" }}>
                        {a.status.toUpperCase()}
                      </span>
                    </div>
                  </div>
                </div>
                <p style={{ fontSize: 12, color: "rgba(255,255,255,0.45)", lineHeight: 1.6 }}>
                  {a.description}
                </p>
              </div>

              {/* Middle: capabilities */}
              <div>
                <div style={{ fontSize: 10, fontWeight: 600, color: "rgba(255,255,255,0.3)", letterSpacing: "0.08em", marginBottom: 10 }}>
                  CAPABILITIES
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
                  {a.capabilities.map((cap) => (
                    <div key={cap} style={{ display: "flex", alignItems: "center", gap: 8 }}>
                      <CheckCircle style={{ width: 12, height: 12, color: a.color, flexShrink: 0 }} />
                      <span style={{ fontSize: 12, color: "rgba(255,255,255,0.55)" }}>{cap}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right: metrics */}
              <div>
                <div style={{ fontSize: 10, fontWeight: 600, color: "rgba(255,255,255,0.3)", letterSpacing: "0.08em", marginBottom: 10 }}>
                  PERFORMANCE
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                  <div>
                    <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 4 }}>
                      <span style={{ fontSize: 11, color: "rgba(255,255,255,0.4)", display: "flex", alignItems: "center", gap: 4 }}>
                        <Zap style={{ width: 11, height: 11 }} /> Processed
                      </span>
                      <span style={{ fontSize: 11, fontWeight: 600, color: "#fff" }}>{a.processed.toLocaleString()}</span>
                    </div>
                  </div>
                  <div>
                    <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 4 }}>
                      <span style={{ fontSize: 11, color: "rgba(255,255,255,0.4)", display: "flex", alignItems: "center", gap: 4 }}>
                        <CheckCircle style={{ width: 11, height: 11 }} /> Accuracy
                      </span>
                      <span style={{ fontSize: 11, fontWeight: 600, color: "#22c55e" }}>{a.accuracy}%</span>
                    </div>
                    <LoadBar value={a.accuracy} color="#22c55e" delay={0.5 + i * 0.1} />
                  </div>
                  <div>
                    <div style={{ display: "flex", justifyContent: "space-between" }}>
                      <span style={{ fontSize: 11, color: "rgba(255,255,255,0.4)", display: "flex", alignItems: "center", gap: 4 }}>
                        <Clock style={{ width: 11, height: 11 }} /> Avg time
                      </span>
                      <span style={{ fontSize: 11, fontWeight: 600, color: a.color }}>{a.avgTime}s</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
      <style>{`@keyframes pulse { 0%,100%{opacity:1} 50%{opacity:0.3} }`}</style>
    </div>
  );
}