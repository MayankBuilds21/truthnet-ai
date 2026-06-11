import type { Metadata } from "next";
import { ClerkProvider } from "@clerk/nextjs";
import "./globals.css";

export const metadata: Metadata = {
  title: "TruthNet AI — Detect. Verify. Protect.",
  description: "AI-powered misinformation intelligence platform",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body style={{ margin: 0, padding: 0, background: "#0B1020" }}>
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}