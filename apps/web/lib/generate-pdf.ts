interface ReportData {
  content: string;
  type: string;
  truthScore: number;
  riskScore: number;
  harmScore: number;
  viralityScore: number;
  threatLevel: string;
  verdict: string;
  summary: string;
  counterNarrative: string;
  sources: string[];
  detectionReport?: string;
  verificationReport?: string;
  riskReport?: string;
  responseReport?: string;
  monitoringReport?: string;
}

export function generatePDFReport(data: ReportData) {
  const now = new Date();
  const dateStr = now.toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" });
  const timeStr = now.toLocaleTimeString("en-US", { hour: "2-digit", minute: "2-digit" });
  const reportId = `TNR-${Date.now().toString().slice(-8)}`;

  const threatColorMap: Record<string, string> = {
    LOW: "#22c55e", MEDIUM: "#f59e0b", HIGH: "#ef4444", CRITICAL: "#dc2626",
  };
  const tc = threatColorMap[data.threatLevel] ?? "#ef4444";

  const html = `
<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<title>TruthNet AI Report - ${reportId}</title>
<style>
  * { margin: 0; padding: 0; box-sizing: border-box; }
  body { font-family: 'Segoe UI', Arial, sans-serif; background: #0b1020; color: #fff; padding: 40px; }
  .header { background: #080e1c; border: 1px solid rgba(255,255,255,0.08); border-radius: 16px; padding: 28px 32px; margin-bottom: 24px; display: flex; justify-content: space-between; align-items: flex-start; }
  .logo { display: flex; align-items: center; gap: 12px; }
  .logo-icon { width: 40px; height: 40px; background: #3b82f6; border-radius: 10px; display: flex; align-items: center; justify-content: center; font-weight: 900; font-size: 14px; color: #fff; }
  .logo-text h1 { font-size: 20px; font-weight: 700; color: #fff; }
  .logo-text p { font-size: 11px; color: rgba(255,255,255,0.4); margin-top: 2px; letter-spacing: 0.08em; }
  .meta { text-align: right; font-size: 12px; color: rgba(255,255,255,0.4); line-height: 1.8; }
  .threat-banner { background: ${tc}18; border: 1px solid ${tc}40; border-radius: 12px; padding: 14px 24px; margin-bottom: 24px; display: flex; align-items: center; gap: 12px; }
  .threat-dot { width: 10px; height: 10px; border-radius: 50%; background: ${tc}; flex-shrink: 0; }
  .threat-label { font-size: 14px; font-weight: 700; color: ${tc}; letter-spacing: 0.05em; }
  .scores { display: grid; grid-template-columns: repeat(4, 1fr); gap: 12px; margin-bottom: 24px; }
  .score-card { background: #0d1526; border: 1px solid rgba(255,255,255,0.06); border-radius: 12px; padding: 16px; }
  .score-label { font-size: 11px; color: rgba(255,255,255,0.4); margin-bottom: 8px; }
  .score-value { font-size: 32px; font-weight: 700; margin-bottom: 8px; }
  .score-bar-bg { height: 4px; background: rgba(255,255,255,0.06); border-radius: 2px; }
  .score-bar { height: 4px; border-radius: 2px; }
  .section { background: #0d1526; border: 1px solid rgba(255,255,255,0.06); border-radius: 12px; padding: 20px 24px; margin-bottom: 16px; }
  .section-label { font-size: 10px; font-weight: 700; letter-spacing: 0.1em; margin-bottom: 10px; }
  .section-text { font-size: 13px; color: rgba(255,255,255,0.7); line-height: 1.7; }
  .verdict-section { background: ${tc}0d; border: 1px solid ${tc}30; }
  .counter-section { background: rgba(34,197,94,0.05); border: 1px solid rgba(34,197,94,0.2); }
  .agent-row { display: flex; align-items: flex-start; gap: 12px; padding: 12px 0; border-bottom: 1px solid rgba(255,255,255,0.04); }
  .agent-row:last-child { border-bottom: none; }
  .agent-dot { width: 8px; height: 8px; border-radius: 50%; margin-top: 4px; flex-shrink: 0; }
  .agent-name { font-size: 11px; font-weight: 700; letter-spacing: 0.05em; margin-bottom: 4px; }
  .agent-text { font-size: 12px; color: rgba(255,255,255,0.55); line-height: 1.5; }
  .sources { display: flex; flex-wrap: wrap; gap: 8px; }
  .source-tag { background: rgba(59,130,246,0.08); border: 1px solid rgba(59,130,246,0.2); color: #60a5fa; font-size: 11px; padding: 4px 12px; border-radius: 6px; }
  .content-box { background: #080e1c; border: 1px solid rgba(255,255,255,0.04); border-radius: 8px; padding: 16px; font-size: 12px; color: rgba(255,255,255,0.4); line-height: 1.6; font-family: monospace; }
  .footer { margin-top: 32px; padding-top: 16px; border-top: 1px solid rgba(255,255,255,0.06); display: flex; justify-content: space-between; font-size: 11px; color: rgba(255,255,255,0.2); }
  .agents-title { font-size: 13px; font-weight: 600; color: #fff; margin-bottom: 4px; }
</style>
</head>
<body>

<div class="header">
  <div class="logo">
    <div class="logo-icon">TN</div>
    <div class="logo-text">
      <h1>TruthNet AI</h1>
      <p>INTELLIGENCE REPORT</p>
    </div>
  </div>
  <div class="meta">
    <div>Report ID: <strong style="color:#fff">${reportId}</strong></div>
    <div>Generated: ${dateStr} at ${timeStr}</div>
    <div>Classification: CONFIDENTIAL</div>
    <div>Input type: ${data.type.toUpperCase()}</div>
  </div>
</div>

<div class="threat-banner">
  <div class="threat-dot"></div>
  <div class="threat-label">THREAT LEVEL: ${data.threatLevel}</div>
  <div style="margin-left:auto;font-size:12px;color:rgba(255,255,255,0.4)">Analysis completed by 5-agent pipeline</div>
</div>

<div class="scores">
  <div class="score-card">
    <div class="score-label">Truth Score</div>
    <div class="score-value" style="color:#3b82f6">${data.truthScore}</div>
    <div class="score-bar-bg"><div class="score-bar" style="width:${data.truthScore}%;background:#3b82f6"></div></div>
  </div>
  <div class="score-card">
    <div class="score-label">Risk Score</div>
    <div class="score-value" style="color:#ef4444">${data.riskScore}</div>
    <div class="score-bar-bg"><div class="score-bar" style="width:${data.riskScore}%;background:#ef4444"></div></div>
  </div>
  <div class="score-card">
    <div class="score-label">Harm Score</div>
    <div class="score-value" style="color:#f59e0b">${data.harmScore}</div>
    <div class="score-bar-bg"><div class="score-bar" style="width:${data.harmScore}%;background:#f59e0b"></div></div>
  </div>
  <div class="score-card">
    <div class="score-label">Virality Score</div>
    <div class="score-value" style="color:#8b5cf6">${data.viralityScore}</div>
    <div class="score-bar-bg"><div class="score-bar" style="width:${data.viralityScore}%;background:#8b5cf6"></div></div>
  </div>
</div>

<div class="section verdict-section">
  <div class="section-label" style="color:${tc}">VERDICT</div>
  <div class="section-text" style="color:#fff;font-weight:600">${data.verdict}</div>
</div>

<div class="section">
  <div class="section-label" style="color:rgba(255,255,255,0.4)">ANALYSIS SUMMARY</div>
  <div class="section-text">${data.summary}</div>
</div>

<div class="section counter-section">
  <div class="section-label" style="color:#22c55e">COUNTER NARRATIVE</div>
  <div class="section-text">${data.counterNarrative}</div>
</div>

<div class="section">
  <div class="agents-title">AGENT PIPELINE REPORTS</div>
  <div style="margin-top:12px">
    ${[
      { name: "Detection Agent", report: data.detectionReport, color: "#3b82f6" },
      { name: "Verification Agent", report: data.verificationReport, color: "#8b5cf6" },
      { name: "Risk Assessment Agent", report: data.riskReport, color: "#06b6d4" },
      { name: "Response Agent", report: data.responseReport, color: "#3b82f6" },
      { name: "Monitoring Agent", report: data.monitoringReport, color: "#8b5cf6" },
    ].map(a => `
      <div class="agent-row">
        <div class="agent-dot" style="background:${a.color}"></div>
        <div>
          <div class="agent-name" style="color:${a.color}">${a.name.toUpperCase()}</div>
          <div class="agent-text">${a.report ?? "Analysis complete."}</div>
        </div>
      </div>
    `).join("")}
  </div>
</div>

<div class="section">
  <div class="section-label" style="color:rgba(255,255,255,0.4)">VERIFIED SOURCES</div>
  <div class="sources" style="margin-top:8px">
    ${data.sources.map(s => `<span class="source-tag">${s}</span>`).join("")}
  </div>
</div>

<div class="section">
  <div class="section-label" style="color:rgba(255,255,255,0.4)">SUBMITTED CONTENT</div>
  <div class="content-box">${data.content.slice(0, 600)}${data.content.length > 600 ? "..." : ""}</div>
</div>

<div class="footer">
  <span>TruthNet AI · Confidential Intelligence Report · Not for public distribution</span>
  <span>${reportId}</span>
</div>

</body>
</html>`;

  const blob = new Blob([html], { type: "text/html" });
  const url = URL.createObjectURL(blob);
  const win = window.open(url, "_blank");
  if (win) {
    win.onload = () => {
      setTimeout(() => {
        win.print();
      }, 500);
    };
  }
}