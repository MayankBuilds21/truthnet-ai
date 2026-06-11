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
                  display: "flex",
                  alignItems: "center",
                  gap: 10,
                  padding: collapsed ? "10px 0" : "10px 12px",
                  justifyContent: collapsed ? "center" : "flex-start",
                  borderRadius: 8,
                  textDecoration: "none",
                  background: active ? "rgba(59,130,246,0.12)" : "transparent",
                  border: active ? "0.5px solid rgba(59,130,246,0.2)" : "0.5px solid transparent",
                  color: active ? "#60a5fa" : "rgba(255,255,255,0.45)",
                  fontSize: 13,
                  fontWeight: active ? 500 : 400,
                  transition: "all 0.15s",
                }}
              >
                <Icon style={{ width: 16, height: 16, flexShrink: 0 }} />
                {!collapsed && label}
              </Link>
            );
          })}
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