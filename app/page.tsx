import DiagnosticApp from "@/components/DiagnosticApp";

export default function Home() {
  return (
    <main
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "stretch",
        justifyContent: "center",
        padding: "0",
        position: "relative",
        backgroundImage: "url(/bg.png)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* 診断アプリ本体（最大幅640px、中央） */}
      <div
        style={{
          width: "100%",
          maxWidth: "640px",
          flexShrink: 0,
          position: "relative",
          zIndex: 1,
        }}
      >
        <DiagnosticApp />
      </div>
    </main>
  );
}
