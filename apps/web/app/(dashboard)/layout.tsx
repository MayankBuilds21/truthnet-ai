"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { UserButton } from "@clerk/nextjs";
import {
  LayoutDashboard,
  Search,
  Bot,
  FileText,
  Settings,
  Shield,
  ChevronLeft,
  ChevronRight,
  Bell,
  Activity,
} from "lucide-react";


const navItems = [
  { href: "/dashboard", icon: LayoutDashboard, label: "Dashboard" },
  { href: "/investigate", icon: Search, label: "Investigate" },
  { href: "/agents", icon: Bot, label: "Agents" },
  { href: "/reports", icon: FileText, label: "Reports" },
  { href: "/settings", icon: Settings, label: "Settings" },
];

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [collapsed, setCollapsed] = useState(false);
  const pathname = usePathname();

  return (
    <div style={{ display: "flex", minHeight: "100vh", background: "#0B1020" }}>
      {/* Sidebar */}
      <aside
        style={{
          width: collapsed ? 64 : 220,
          background: "#080e1c",
          borderRight: "0.5px solid rgba(255,255,255,0.06)",
          display: "flex",
          flexDirection: "column",
          transition: "width 0.2s ease",
          flexShrink: 0,
          position: "sticky",
          top: 0,
          height: "100vh",
          zIndex: 40,
        }}
      >
        {/* Logo */}
        <div
          style={{
            padding: collapsed ? "20px 0" : "20px 20px",
            borderBottom: "0.5px solid rgba(255,255,255,0.06)",
            display: "flex",
            alignItems: "center",
            justifyContent: collapsed ? "center" : "space-between",
            gap: 10,
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
            <div
              style={{
                width: 30,
                height: 30,
                background: "#3b82f6",
                borderRadius: 8,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexShrink: 0,
              }}
            >
              <Shield style={{ width: 16, height: 16, color: "#fff" }} />
            </div>
            {!collapsed && (
              <span style={{ fontSize: 14, fontWeight: 600, color: "#fff" }}>
                TruthNet <span style={{ color: "#60a5fa" }}>AI</span>
              </span>
            )}
          </div>
          {!collapsed && (
            <button
              onClick={() => setCollapsed(true)}
              style={{
                background: "none",
                border: "none",
                color: "rgba(255,255,255,0.3)",
                cursor: "pointer",
                padding: 4,
                borderRadius: 6,
                display: "flex",
              }}
            >
              <ChevronLeft style={{ width: 14, height: 14 }} />
            </button>
          )}
        </div>

        {/* Nav */}
<nav style={{ flex: 1, padding: "12px 8px", display: "flex", flexDirection: "column", gap: 2 }}>
  {navItems.map(({ href, icon: Icon, label }) => {
    const active = pathname === href;
    return (
      <Link
        key={href}
        href={href}
        style={{
          display: "flex", alignItems: "center", gap: 10,
          padding: collapsed ? "10px 0" : "10px 12px",
          justifyContent: collapsed ? "center" : "flex-start",
          borderRadius: 8, textDecoration: "none",
          background: active ? "rgba(59,130,246,0.12)" : "transparent",
          border: active ? "0.5px solid rgba(59,130,246,0.2)" : "0.5px solid transparent",
          color: active ? "#60a5fa" : "rgba(255,255,255,0.45)",
          fontSize: 13, fontWeight: active ? 500 : 400,
          transition: "all 0.15s",
        }}
      >
        <Icon style={{ width: 16, height: 16, flexShrink: 0 }} />
        {!collapsed && label}
      </Link>
    );
  })}

  {/* Divider */}
  {!collapsed && (
    <div style={{
      margin: "12px 4px",
      height: "0.5px",
      background: "rgba(255,255,255,0.06)"
    }} />
  )}

  {/* Quick stats */}
  {!collapsed && (
    <div style={{ padding: "4px 8px" }}>
      <div style={{
        fontSize: 10, fontWeight: 600, color: "rgba(255,255,255,0.2)",
        letterSpacing: "0.08em", marginBottom: 10
      }}>
        LIVE STATS
      </div>
      {[
        { label: "Investigations", value: "1,247", color: "#3b82f6" },
        { label: "Threats detected", value: "389", color: "#ef4444" },
        { label: "Verified safe", value: "821", color: "#22c55e" },
        { label: "Avg analysis", value: "7.2s", color: "#8b5cf6" },
      ].map((stat) => (
        <div key={stat.label} style={{
          display: "flex", justifyContent: "space-between",
          alignItems: "center", marginBottom: 8
        }}>
          <span style={{ fontSize: 11, color: "rgba(255,255,255,0.3)" }}>
            {stat.label}
          </span>
          <span style={{
            fontSize: 11, fontWeight: 600, color: stat.color,
            background: `${stat.color}12`,
            padding: "1px 7px", borderRadius: 4
          }}>
            {stat.value}
          </span>
        </div>
      ))}
    </div>
  )}

  {/* New investigation CTA */}
  {!collapsed && (
    <Link
      href="/investigate"
      style={{
        display: "flex", alignItems: "center", justifyContent: "center",
        gap: 6, marginTop: 8, padding: "10px",
        background: "rgba(59,130,246,0.1)",
        border: "0.5px solid rgba(59,130,246,0.2)",
        borderRadius: 10, textDecoration: "none",
        fontSize: 12, fontWeight: 500, color: "#60a5fa",
        transition: "all 0.15s",
      }}
    >
      <Search style={{ width: 13, height: 13 }} />
      New investigation
    </Link>
  )}
</nav>

        {/* Collapse toggle when collapsed */}
        {collapsed && (
          <button
            onClick={() => setCollapsed(false)}
            style={{
              background: "none",
              border: "none",
              color: "rgba(255,255,255,0.3)",
              cursor: "pointer",
              padding: "12px 0",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <ChevronRight style={{ width: 14, height: 14 }} />
          </button>
        )}

        {/* User */}
        <div
          style={{
            padding: collapsed ? "16px 0" : "16px 20px",
            borderTop: "0.5px solid rgba(255,255,255,0.06)",
            display: "flex",
            alignItems: "center",
            justifyContent: collapsed ? "center" : "flex-start",
            gap: 10,
          }}
        >
          <UserButton afterSignOutUrl="/" />
          {!collapsed && (
            <span style={{ fontSize: 12, color: "rgba(255,255,255,0.35)" }}>Account</span>
          )}
        </div>
      </aside>

      {/* Main */}
      <div style={{ flex: 1, display: "flex", flexDirection: "column", overflow: "hidden" }}>
        {/* Topbar */}
        <header
          style={{
            height: 56,
            borderBottom: "0.5px solid rgba(255,255,255,0.06)",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "0 24px",
            background: "#080e1c",
            flexShrink: 0,
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
            <Activity style={{ width: 14, height: 14, color: "#22c55e" }} />
            <span style={{ fontSize: 12, color: "rgba(255,255,255,0.35)" }}>
              System operational
            </span>
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
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
            <button
              style={{
                background: "none",
                border: "none",
                color: "rgba(255,255,255,0.35)",
                cursor: "pointer",
                position: "relative",
                padding: 4,
              }}
            >
              <Bell style={{ width: 16, height: 16 }} />
              <span
                style={{
                  position: "absolute",
                  top: 2,
                  right: 2,
                  width: 6,
                  height: 6,
                  background: "#ef4444",
                  borderRadius: "50%",
                }}
              />
            </button>
            <span style={{ fontSize: 12, color: "rgba(255,255,255,0.2)" }}>
              TruthNet AI v1.0
            </span>
          </div>
        </header>

        {/* Page content */}
        <main style={{ flex: 1, overflow: "auto", padding: 24 }}>
          {children}
        </main>
      </div>

      <style>{`
        @keyframes pulse { 0%,100%{opacity:1} 50%{opacity:0.3} }
        a:hover { color: rgba(255,255,255,0.8) !important; }
      `}</style>
    </div>
  );
}