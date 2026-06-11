"use client";

import { motion } from "framer-motion";
import {
  Shield, AlertTriangle, CheckCircle, Clock,
  TrendingUp, Activity, Search, FileText,
  ArrowUpRight, Zap, Eye, Globe,
} from "lucide-react";
import Link from "next/link";

const stats = [
  { label: "Total investigations", value: "1,247", change: "+12%", icon: Search, color: "#3b82f6" },
  { label: "Threats detected", value: "389", change: "+8%", icon: AlertTriangle, color: "#ef4444" },
  { label: "Verified safe", value: "821", change: "+15%", icon: CheckCircle, color: "#22c55e" },
  { label: "Avg analysis time", value: "7.2s", change: "-0.8s", icon: Clock, color: "#8b5cf6" },
];

const recentInvestigations = [
  { id: "INV-001", title: "Viral WhatsApp forward about election results", type: "TEXT", threat: "CRITICAL", score: 12, time: "2m ago" },
  { id: "INV-002", title: "Suspected AI-generated political image", type: "IMAGE", threat: "HIGH", score: 23, time: "8m ago" },
  { id: "INV-003", title: "Health misinformation article on social media", type: "URL", threat: "HIGH", score: 31, time: "15m ago" },
  { id: "INV-004", title: "Voice message claiming natural disaster", type: "AUDIO", threat: "MEDIUM", score: 54, time: "23m ago" },
  { id: "INV-005", title: "News article about economic statistics", type: "URL", threat: "LOW", score: 78, time: "41m ago" },
  { id: "INV-006", title: "Social media post with manipulated screenshot", type: "IMAGE", threat: "HIGH", score: 19, time: "1h ago" },
];

const agentActivity = [
  { name: "Detection Agent", status: "active", load: 78, color: "#3b82f6" },
  { name: "Verification Agent", status: "active", load: 65, color: "#8b5cf6" },
  { name: "Risk Agent", status: "active", load: 45, color: "#06b6d4" },
  { name: "Response Agent", status: "idle", load: 12, color: "#3b82f6" },
  { name: "Monitoring Agent", status: "active", load: 89, color: "#8b5cf6" },
];

const threatMap = [
  { category: "Political", count: 142, pct: 85 },
  { category: "Health", count: 98, pct: 62 },
  { category: "Financial", count: 67, pct: 45 },
  { category: "Climate", count: 54, pct: 38 },
  { category: "Celebrity", count: 28, pct: 20 },
];

function ThreatBadge({ level }: { level: string }) {
  const colors: Record<string, { bg: string; text: string }> = {
    CRITICAL: { bg: "rgba(239,68,68,0.12)", text: "#ef4444" },
    HIGH: { bg: "rgba(245,158,11,0.12)", text: "#f59e0b" },
    MEDIUM: { bg: "rgba(59,130,246,0.12)", text: "#60a5fa" },
    LOW: { bg: "rgba(34,197,94,0.12)", text: "#22c55e" },
  };
  const c = colors[level] ?? colors.LOW;
  return (
    <span
      style={{
        background: c.bg,
        color: c.text,
        fontSize: 10,
        fontWeight: 600,
        padding: "2px 8px",
        borderRadius: 4,
        letterSpacing: "0.05em",
      }}
    >
      {level}
    </span>
  );
}

function TypeBadge({ type }: { type: string }) {
  const colors: Record<string, string> = {
    TEXT: "#8b5cf6", IMAGE: "#06b6d4", AUDIO: "#f59e0b", VIDEO: "#ef4444", URL: "#22c55e",
  };
  return (
    <span
      style={{
        color: colors[type] ?? "#fff",
        fontSize: 10,
        fontWeight: 600,
        fontFamily: "monospace",
        background: "rgba(255,255,255,0.05)",
        padding: "2px 6px",
        borderRadius: 4,
      }}
    >
      {type}
    </span>
  );
}

export default function DashboardPage() {
  return (
    <div style={{ maxWidth: 1400, margin: "0 auto" }}>
      {/* Header */}
      <div style={{ marginBottom: 28, display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <div>
          <h1 style={{ fontSize: 22, fontWeight: 700, color: "#fff", marginBottom: 4 }}>
            Threat Intelligence Dashboard
          </h1>
          <p style={{ fontSize: 13, color: "rgba(255,255,255,0.35)" }}>
            Real-time misinformation monitoring · Last updated just now
          </p>
        </div>
        <Link
          href="/investigate"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 8,
            background: "#3b82f6",
            color: "#fff",
            padding: "10px 18px",
            borderRadius: 10,
            fontSize: 13,
            fontWeight: 500,
            textDecoration: "none",
          }}
        >
          <Search style={{ width: 14, height: 14 }} />
          New investigation
        </Link>
      </div>

      {/* Stats grid */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 12, marginBottom: 20 }}>
        {stats.map((s, i) => {
          const Icon = s.icon;
          return (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.07 }}
              style={{
                background: "#0d1526",
                border: "0.5px solid rgba(255,255,255,0.06)",
                borderRadius: 12,
                padding: "18px 20px",
              }}
            >
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 12 }}>
                <span style={{ fontSize: 12, color: "rgba(255,255,255,0.4)" }}>{s.label}</span>
                <div
                  style={{
                    width: 32,
                    height: 32,
                    background: `${s.color}18`,
                    border: `0.5px solid ${s.color}30`,
                    borderRadius: 8,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Icon style={{ width: 15, height: 15, color: s.color }} />
                </div>
              </div>
              <div style={{ fontSize: 26, fontWeight: 700, color: "#fff", letterSpacing: "-0.02em", marginBottom: 6 }}>
                {s.value}
              </div>
              <div style={{ fontSize: 11, color: "#22c55e", display: "flex", alignItems: "center", gap: 4 }}>
                <TrendingUp style={{ width: 11, height: 11 }} />
                {s.change} this week
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Main content grid */}
      <div style={{ display: "grid", gridTemplateColumns: "1fr 340px", gap: 16, marginBottom: 16 }}>

        {/* Recent investigations */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          style={{
            background: "#0d1526",
            border: "0.5px solid rgba(255,255,255,0.06)",
            borderRadius: 12,
            overflow: "hidden",
          }}
        >
          <div
            style={{
              padding: "16px 20px",
              borderBottom: "0.5px solid rgba(255,255,255,0.06)",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
              <Activity style={{ width: 14, height: 14, color: "#3b82f6" }} />
              <span style={{ fontSize: 13, fontWeight: 600, color: "#fff" }}>Live investigation feed</span>
            </div>
            <Link href="/reports" style={{ fontSize: 11, color: "#60a5fa", textDecoration: "none", display: "flex", alignItems: "center", gap: 4 }}>
              View all <ArrowUpRight style={{ width: 11, height: 11 }} />
            </Link>
          </div>
          <div>
            {recentInvestigations.map((inv, i) => (
              <motion.div
                key={inv.id}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 + i * 0.05 }}
                style={{
                  padding: "14px 20px",
                  borderBottom: "0.5px solid rgba(255,255,255,0.04)",
                  display: "flex",
                  alignItems: "center",
                  gap: 12,
                  cursor: "pointer",
                  transition: "background 0.15s",
                }}
                whileHover={{ background: "rgba(255,255,255,0.02)" } as any}
              >
                <span style={{ fontSize: 10, fontFamily: "monospace", color: "rgba(255,255,255,0.2)", minWidth: 60 }}>
                  {inv.id}
                </span>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ fontSize: 12, color: "#fff", fontWeight: 500, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>
                    {inv.title}
                  </div>
                  <div style={{ fontSize: 11, color: "rgba(255,255,255,0.3)", marginTop: 2 }}>{inv.time}</div>
                </div>
                <TypeBadge type={inv.type} />
                <div style={{ textAlign: "right", minWidth: 40 }}>
                  <div style={{ fontSize: 14, fontWeight: 700, color: inv.score < 30 ? "#ef4444" : inv.score < 60 ? "#f59e0b" : "#22c55e" }}>
                    {inv.score}
                  </div>
                  <div style={{ fontSize: 9, color: "rgba(255,255,255,0.25)" }}>TRUTH</div>
                </div>
                <ThreatBadge level={inv.threat} />
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Right column */}
        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>

          {/* Agent status */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35 }}
            style={{
              background: "#0d1526",
              border: "0.5px solid rgba(255,255,255,0.06)",
              borderRadius: 12,
              padding: 16,
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 16 }}>
              <Zap style={{ width: 14, height: 14, color: "#8b5cf6" }} />
              <span style={{ fontSize: 13, fontWeight: 600, color: "#fff" }}>Agent status</span>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              {agentActivity.map((agent) => (
                <div key={agent.name}>
                  <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 5 }}>
                    <span style={{ fontSize: 11, color: "rgba(255,255,255,0.55)" }}>{agent.name}</span>
                    <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
                      <span
                        style={{
                          width: 5,
                          height: 5,
                          borderRadius: "50%",
                          background: agent.status === "active" ? "#22c55e" : "rgba(255,255,255,0.2)",
                          display: "inline-block",
                        }}
                      />
                      <span style={{ fontSize: 10, color: "rgba(255,255,255,0.3)" }}>{agent.load}%</span>
                    </div>
                  </div>
                  <div style={{ height: 3, background: "rgba(255,255,255,0.06)", borderRadius: 2 }}>
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${agent.load}%` }}
                      transition={{ delay: 0.5, duration: 0.8, ease: "easeOut" }}
                      style={{ height: "100%", background: agent.color, borderRadius: 2 }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Threat categories */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            style={{
              background: "#0d1526",
              border: "0.5px solid rgba(255,255,255,0.06)",
              borderRadius: 12,
              padding: 16,
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 16 }}>
              <Globe style={{ width: 14, height: 14, color: "#06b6d4" }} />
              <span style={{ fontSize: 13, fontWeight: 600, color: "#fff" }}>Threat categories</span>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              {threatMap.map((t) => (
                <div key={t.category}>
                  <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 4 }}>
                    <span style={{ fontSize: 11, color: "rgba(255,255,255,0.55)" }}>{t.category}</span>
                    <span style={{ fontSize: 11, color: "rgba(255,255,255,0.3)" }}>{t.count}</span>
                  </div>
                  <div style={{ height: 3, background: "rgba(255,255,255,0.06)", borderRadius: 2 }}>
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${t.pct}%` }}
                      transition={{ delay: 0.6, duration: 0.8, ease: "easeOut" }}
                      style={{ height: "100%", background: "linear-gradient(90deg,#3b82f6,#8b5cf6)", borderRadius: 2 }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Quick action */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.45 }}
            style={{
              background: "rgba(59,130,246,0.05)",
              border: "0.5px solid rgba(59,130,246,0.15)",
              borderRadius: 12,
              padding: 16,
              textAlign: "center",
            }}
          >
            <Eye style={{ width: 20, height: 20, color: "#60a5fa", margin: "0 auto 8px" }} />
            <div style={{ fontSize: 13, fontWeight: 600, color: "#fff", marginBottom: 4 }}>
              Start new investigation
            </div>
            <div style={{ fontSize: 11, color: "rgba(255,255,255,0.35)", marginBottom: 12 }}>
              Upload text, image, audio, or URL
            </div>
            <Link
              href="/investigate"
              style={{
                display: "block",
                background: "#3b82f6",
                color: "#fff",
                padding: "8px 0",
                borderRadius: 8,
                fontSize: 12,
                fontWeight: 500,
                textDecoration: "none",
              }}
            >
              Investigate now
            </Link>
          </motion.div>
        </div>
      </div>
    </div>
  );
}