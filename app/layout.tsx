import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "AI副業マッチング診断",
  description: "あなたに向いているAI副業タイプを5分で診断します",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <body>{children}</body>
    </html>
  );
}
