import { SignUp } from "@clerk/nextjs";

export default function SignUpPage() {
  return (
    <main
      style={{
        minHeight: "100vh",
        background: "#0B1020",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
      }}
    >
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage:
            "linear-gradient(rgba(59,130,246,1) 1px, transparent 1px), linear-gradient(90deg, rgba(59,130,246,1) 1px, transparent 1px)",
          backgroundSize: "50px 50px",
          opacity: 0.03,
          pointerEvents: "none",
        }}
      />
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%,-50%)",
          width: 600,
          height: 600,
          background: "radial-gradient(ellipse, rgba(139,92,246,0.07) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />
      <div style={{ position: "relative", zIndex: 2 }}>
        <SignUp />
      </div>
    </main>
  );
}