"use client";

import { useUser } from "@clerk/nextjs";
import { motion } from "framer-motion";
import { Shield, Bell, Key, Palette, Save } from "lucide-react";

export default function SettingsPage() {
  const { user } = useUser();

  return (
    <div style={{ maxWidth: 800, margin: "0 auto" }}>
      <div style={{ marginBottom: 28 }}>
        <h1 style={{ fontSize: 22, fontWeight: 700, color: "#fff", marginBottom: 4 }}>Settings</h1>
        <p style={{ fontSize: 13, color: "rgba(255,255,255,0.35)" }}>
          Manage your account and platform preferences
        </p>
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>

        {/* Profile */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          style={{ background: "#0d1526", border: "0.5px solid rgba(255,255,255,0.06)", borderRadius: 14, padding: "20px 24px" }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 20 }}>
            <Shield style={{ width: 14, height: 14, color: "#3b82f6" }} />
            <span style={{ fontSize: 13, fontWeight: 600, color: "#fff" }}>Profile</span>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
            {[
              { label: "Full name", value: user?.fullName ?? "—" },
              { label: "Email", value: user?.primaryEmailAddress?.emailAddress ?? "—" },
              { label: "Account ID", value: user?.id?.slice(0, 16) + "..." ?? "—" },
              { label: "Member since", value: user?.createdAt ? new Date(user.createdAt).toLocaleDateString() : "—" },
            ].map((f) => (
              <div key={f.label}>
                <div style={{ fontSize: 11, color: "rgba(255,255,255,0.35)", marginBottom: 6 }}>{f.label}</div>
                <div style={{
                  background: "#080e1c", border: "0.5px solid rgba(255,255,255,0.08)",
                  borderRadius: 8, padding: "10px 14px", fontSize: 13, color: "#fff"
                }}>
                  {f.value}
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Notifications */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          style={{ background: "#0d1526", border: "0.5px solid rgba(255,255,255,0.06)", borderRadius: 14, padding: "20px 24px" }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 20 }}>
            <Bell style={{ width: 14, height: 14, color: "#8b5cf6" }} />
            <span style={{ fontSize: 13, fontWeight: 600, color: "#fff" }}>Notifications</span>
          </div>
          {[
            { label: "Critical threat alerts", desc: "Get notified when CRITICAL threats are detected", on: true },
            { label: "Investigation complete", desc: "Notify when analysis pipeline finishes", on: true },
            { label: "Weekly report summary", desc: "Weekly digest of all investigations", on: false },
            { label: "System updates", desc: "Platform updates and new features", on: false },
          ].map((item) => (
            <div key={item.label} style={{
              display: "flex", alignItems: "center", justifyContent: "space-between",
              padding: "12px 0", borderBottom: "0.5px solid rgba(255,255,255,0.04)"
            }}>
              <div>
                <div style={{ fontSize: 13, color: "#fff", marginBottom: 2 }}>{item.label}</div>
                <div style={{ fontSize: 11, color: "rgba(255,255,255,0.35)" }}>{item.desc}</div>
              </div>
              <div style={{
                width: 40, height: 22, borderRadius: 11,
                background: item.on ? "#3b82f6" : "rgba(255,255,255,0.1)",
                position: "relative", cursor: "pointer", transition: "background 0.2s"
              }}>
                <div style={{
                  position: "absolute", top: 3,
                  left: item.on ? 21 : 3,
                  width: 16, height: 16, borderRadius: "50%",
                  background: "#fff", transition: "left 0.2s"
                }} />
              </div>
            </div>
          ))}
        </motion.div>

        {/* API */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          style={{ background: "#0d1526", border: "0.5px solid rgba(255,255,255,0.06)", borderRadius: 14, padding: "20px 24px" }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 20 }}>
            <Key style={{ width: 14, height: 14, color: "#06b6d4" }} />
            <span style={{ fontSize: 13, fontWeight: 600, color: "#fff" }}>API Configuration</span>
          </div>
          {[
            { label: "AI Model", value: "Gemini 2.0 Flash" },
            { label: "Analysis Pipeline", value: "LangGraph Multi-Agent" },
            { label: "Max tokens", value: "8,192" },
            { label: "Rate limit", value: "60 req/min" },
          ].map((item) => (
            <div key={item.label} style={{
              display: "flex", justifyContent: "space-between", alignItems: "center",
              padding: "10px 0", borderBottom: "0.5px solid rgba(255,255,255,0.04)"
            }}>
              <span style={{ fontSize: 12, color: "rgba(255,255,255,0.45)" }}>{item.label}</span>
              <span style={{
                fontSize: 12, color: "#60a5fa",
                background: "rgba(59,130,246,0.08)",
                border: "0.5px solid rgba(59,130,246,0.2)",
                padding: "3px 10px", borderRadius: 6, fontFamily: "monospace"
              }}>
                {item.value}
              </span>
            </div>
          ))}
        </motion.div>

        {/* Theme */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          style={{ background: "#0d1526", border: "0.5px solid rgba(255,255,255,0.06)", borderRadius: 14, padding: "20px 24px" }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 16 }}>
            <Palette style={{ width: 14, height: 14, color: "#f59e0b" }} />
            <span style={{ fontSize: 13, fontWeight: 600, color: "#fff" }}>Appearance</span>
          </div>
          <div style={{ display: "flex", gap: 10 }}>
            {["Dark", "Darker", "Midnight"].map((theme, i) => (
              <div key={theme} style={{
                flex: 1, background: i === 0 ? "rgba(59,130,246,0.1)" : "#080e1c",
                border: `0.5px solid ${i === 0 ? "rgba(59,130,246,0.4)" : "rgba(255,255,255,0.06)"}`,
                borderRadius: 10, padding: "12px", textAlign: "center", cursor: "pointer"
              }}>
                <div style={{
                  width: "100%", height: 40, borderRadius: 6, marginBottom: 8,
                  background: i === 0 ? "#0b1020" : i === 1 ? "#060a14" : "#030508"
                }} />
                <div style={{ fontSize: 12, color: i === 0 ? "#60a5fa" : "rgba(255,255,255,0.4)" }}>
                  {theme}
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        <button style={{
          display: "flex", alignItems: "center", justifyContent: "center", gap: 8,
          background: "#3b82f6", color: "#fff", border: "none",
          padding: "12px", borderRadius: 12, cursor: "pointer",
          fontSize: 13, fontWeight: 500
        }}>
          <Save style={{ width: 15, height: 15 }} />
          Save settings
        </button>
      </div>
    </div>
  );
}