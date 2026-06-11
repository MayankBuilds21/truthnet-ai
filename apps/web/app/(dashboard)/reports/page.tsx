"use client";

import { motion } from "framer-motion";
import { FileText, Download, AlertTriangle, CheckCircle, Clock, Search } from "lucide-react";

const reports = [
  { id: "TNR-00000001", title: "Viral WhatsApp forward about election results", type: "TEXT", threat: "CRITICAL", truthScore: 12, date: "Today, 2:34 PM", status: "complete" },
  { id: "TNR-00000002", title: "Suspected AI-generated political image", type: "IMAGE", threat: "HIGH", truthScore: 23, date: "Today, 2:26 PM", status: "complete" },
  { id: "TNR-00000003", title: "Health misinformation article on social media", type: "URL", threat: "HIGH", truthScore: 31, date: "Today, 2:19 PM", status: "complete" },
  { id: "TNR-00000004", title: "Voice message claiming natural disaster", type: "AUDIO", threat: "MEDIUM", truthScore: 54, date: "Today, 2:11 PM", status: "complete" },
  { id: "TNR-00000005", title: "News article about economic statistics", type: "URL", threat: "LOW", truthScore: 78, date: "Today, 1:53 PM", status: "complete" },
  { id: "TNR-00000006", title: "Social media post with manipulated screenshot", type: "IMAGE", threat: "HIGH", truthScore: 19, date: "Today, 1:34 PM", status: "complete" },
  { id: "TNR-00000007", title: "Forward claiming government surveillance program", type: "TEXT", threat: "CRITICAL", truthScore: 8, date: "Yesterday, 11:20 PM", status: "complete" },
  { id: "TNR-00000008", title: "Video claiming celebrity endorsement of product", type: "VIDEO", threat: "MEDIUM", truthScore: 45, date: "Yesterday, 9:15 PM", status: "complete" },
];

const threatColors: Record<string, { bg: string; text: string }> = {
  CRITICAL: { bg: "rgba(220,38,38,0.12)", text: "#ef4444" },
  HIGH: { bg: "rgba(245,158,11,0.12)", text: "#f59e0b" },
  MEDIUM: { bg: "rgba(59,130,246,0.12)", text: "#60a5fa" },
  LOW: { bg: "rgba(34,197,94,0.12)", text: "#22c55e" },
};

const typeColors: Record<string, string> = {
  TEXT: "#8b5cf6", IMAGE: "#06b6d4", AUDIO: "#f59e0b",
  VIDEO: "#ef4444", URL: "#22c55e",
};

export default function ReportsPage() {
  return (
    <div style={{ maxWidth: 1200, margin: "0 auto" }}>
      <div style={{ marginBottom: 28, display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <div>
          <h1 style={{ fontSize: 22, fontWeight: 700, color: "#fff", marginBottom: 4 }}>Reports</h1>
          <p style={{ fontSize: 13, color: "rgba(255,255,255,0.35)" }}>
            All investigation reports · {reports.length} total
          </p>
        </div>
        <div style={{ display: "flex", gap: 8 }}>
          <div style={{
            display: "flex", alignItems: "center", gap: 8,
            background: "#0d1526", border: "0.5px solid rgba(255,255,255,0.08)",
            borderRadius: 10, padding: "8px 14px"
          }}>
            <Search style={{ width: 14, height: 14, color: "rgba(255,255,255,0.3)" }} />
            <input
              placeholder="Search reports..."
              style={{
                background: "none", border: "none", outline: "none",
                color: "#fff", fontSize: 13, width: 160
              }}
            />
          </div>
        </div>
      </div>

      {/* Summary stats */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 12, marginBottom: 24 }}>
        {[
          { label: "Total reports", value: "8", icon: FileText, color: "#3b82f6" },
          { label: "Critical threats", value: "2", icon: AlertTriangle, color: "#ef4444" },
          { label: "Verified safe", value: "1", icon: CheckCircle, color: "#22c55e" },
          { label: "Avg truth score", value: "34", icon: Clock, color: "#8b5cf6" },
        ].map((s, i) => {
          const Icon = s.icon;
          return (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.07 }}
              style={{
                background: "#0d1526",
                border: "0.5px solid rgba(255,255,255,0.06)",
                borderRadius: 12, padding: "16px 18px",
                display: "flex", alignItems: "center", gap: 12
              }}
            >
              <div style={{
                width: 36, height: 36,
                background: `${s.color}18`,
                border: `0.5px solid ${s.color}30`,
                borderRadius: 10, display: "flex",
                alignItems: "center", justifyContent: "center"
              }}>
                <Icon style={{ width: 16, height: 16, color: s.color }} />
              </div>
              <div>
                <div style={{ fontSize: 22, fontWeight: 700, color: "#fff" }}>{s.value}</div>
                <div style={{ fontSize: 11, color: "rgba(255,255,255,0.35)" }}>{s.label}</div>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Reports table */}
      <div style={{
        background: "#0d1526",
        border: "0.5px solid rgba(255,255,255,0.06)",
        borderRadius: 14, overflow: "hidden"
      }}>
        <div style={{
          display: "grid",
          gridTemplateColumns: "120px 1fr 80px 90px 70px 100px 80px",
          padding: "12px 20px",
          borderBottom: "0.5px solid rgba(255,255,255,0.06)",
          fontSize: 10, fontWeight: 600,
          color: "rgba(255,255,255,0.25)",
          letterSpacing: "0.08em"
        }}>
          <span>REPORT ID</span>
          <span>TITLE</span>
          <span>TYPE</span>
          <span>THREAT</span>
          <span>TRUTH</span>
          <span>DATE</span>
          <span>ACTION</span>
        </div>

        {reports.map((r, i) => {
          const tc = threatColors[r.threat];
          return (
            <motion.div
              key={r.id}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 + i * 0.05 }}
              style={{
                display: "grid",
                gridTemplateColumns: "120px 1fr 80px 90px 70px 100px 80px",
                padding: "14px 20px",
                borderBottom: "0.5px solid rgba(255,255,255,0.04)",
                alignItems: "center",
                transition: "background 0.15s",
                cursor: "pointer",
              }}
              whileHover={{ background: "rgba(255,255,255,0.02)" } as any}
            >
              <span style={{ fontSize: 10, fontFamily: "monospace", color: "rgba(255,255,255,0.25)" }}>
                {r.id}
              </span>
              <span style={{ fontSize: 12, color: "#fff", fontWeight: 500, paddingRight: 16, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>
                {r.title}
              </span>
              <span style={{
                fontSize: 10, fontWeight: 600, fontFamily: "monospace",
                color: typeColors[r.type] ?? "#fff",
                background: "rgba(255,255,255,0.05)",
                padding: "2px 8px", borderRadius: 4, width: "fit-content"
              }}>
                {r.type}
              </span>
              <span style={{
                fontSize: 10, fontWeight: 600,
                background: tc.bg, color: tc.text,
                padding: "2px 8px", borderRadius: 4,
                letterSpacing: "0.05em", width: "fit-content"
              }}>
                {r.threat}
              </span>
              <span style={{
                fontSize: 14, fontWeight: 700,
                color: r.truthScore < 30 ? "#ef4444" : r.truthScore < 60 ? "#f59e0b" : "#22c55e"
              }}>
                {r.truthScore}
              </span>
              <span style={{ fontSize: 11, color: "rgba(255,255,255,0.35)" }}>{r.date}</span>
              <button style={{
                display: "flex", alignItems: "center", gap: 5,
                background: "rgba(59,130,246,0.08)",
                border: "0.5px solid rgba(59,130,246,0.2)",
                color: "#60a5fa", padding: "5px 10px",
                borderRadius: 7, cursor: "pointer", fontSize: 11
              }}>
                <Download style={{ width: 11, height: 11 }} /> PDF
              </button>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}