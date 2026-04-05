"use client";

import Image from "next/image";
import { useState, useCallback, useEffect } from "react";
import {
  occupations,
  tasksByOccupation,
  actions,
  desires,
  typeResults,
} from "@/data/diagnosticData";
import { calculateResult } from "@/lib/diagnosticLogic";
import type { SelfFunctionType } from "@/data/diagnosticData";

// ============================================================
// 型定義
// ============================================================
type Step = 0 | 1 | 2 | 3 | 4 | 5;

interface Answers {
  occupation: string;
  task: string;
  action: string;
  desire: string;
}

// ============================================================
// 定数
// ============================================================
const COLORS = {
  bg: "#F9FAFB",
  card: "#FFFFFF",
  text: "#111827",
  sub: "#6B7280",
  accent: "#2563EB",
  cta: "#10B981",
};

const TOTAL_QUESTIONS = 4; // Step1〜Step4

// ============================================================
// サブコンポーネント: 進捗バー
// ============================================================
function ProgressBar({ step }: { step: Step }) {
  if (step === 0 || step === 5) return null;
  const progress = ((step - 1) / TOTAL_QUESTIONS) * 100;
  const filled = (step / TOTAL_QUESTIONS) * 100;

  return (
    <div style={{ marginBottom: "28px" }}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginBottom: "8px",
        }}
      >
        <span
          style={{
            fontSize: "12px",
            color: COLORS.sub,
            fontWeight: 500,
          }}
        >
          {step} / {TOTAL_QUESTIONS}
        </span>
        <span
          style={{
            fontSize: "12px",
            color: COLORS.accent,
            fontWeight: 600,
          }}
        >
          {Math.round(filled)}%
        </span>
      </div>
      <div
        style={{
          width: "100%",
          height: "4px",
          backgroundColor: "#E5E7EB",
          borderRadius: "100px",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            width: `${filled}%`,
            height: "100%",
            backgroundColor: COLORS.accent,
            borderRadius: "100px",
            transition: "width 0.5s cubic-bezier(0.4, 0, 0.2, 1)",
          }}
        />
      </div>
    </div>
  );
}

// ============================================================
// サブコンポーネント: 選択肢ボタン
// ============================================================
function OptionButton({
  label,
  selected,
  disabled,
  onClick,
}: {
  label: string;
  selected: boolean;
  disabled: boolean;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      style={{
        width: "100%",
        padding: "14px 20px",
        borderRadius: "12px",
        border: selected ? `2px solid ${COLORS.accent}` : "2px solid #E5E7EB",
        backgroundColor: selected ? "#EFF6FF" : COLORS.card,
        color: selected ? COLORS.accent : COLORS.text,
        fontSize: "15px",
        fontWeight: selected ? 600 : 400,
        textAlign: "left",
        cursor: disabled ? "not-allowed" : "pointer",
        transition:
          "border-color 0.15s ease, background-color 0.15s ease, color 0.15s ease, transform 0.1s ease",
        transform: selected ? "scale(1.005)" : "scale(1)",
        outline: "none",
        fontFamily: "inherit",
        lineHeight: 1.5,
        opacity: disabled && !selected ? 0.5 : 1,
        display: "flex",
        alignItems: "center",
        gap: "10px",
      }}
      onMouseEnter={(e) => {
        if (!disabled && !selected) {
          (e.currentTarget as HTMLButtonElement).style.borderColor = "#93C5FD";
          (e.currentTarget as HTMLButtonElement).style.backgroundColor =
            "#F8FAFF";
        }
      }}
      onMouseLeave={(e) => {
        if (!disabled && !selected) {
          (e.currentTarget as HTMLButtonElement).style.borderColor = "#E5E7EB";
          (e.currentTarget as HTMLButtonElement).style.backgroundColor =
            COLORS.card;
        }
      }}
    >
      <span
        style={{
          width: "20px",
          height: "20px",
          borderRadius: "50%",
          border: selected
            ? `2px solid ${COLORS.accent}`
            : "2px solid #D1D5DB",
          backgroundColor: selected ? COLORS.accent : "transparent",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexShrink: 0,
          transition: "all 0.15s ease",
        }}
      >
        {selected && (
          <svg
            width="10"
            height="8"
            viewBox="0 0 10 8"
            fill="none"
          >
            <path
              d="M1 4L3.5 6.5L9 1"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        )}
      </span>
      {label}
    </button>
  );
}

// ============================================================
// サブコンポーネント: 質問カード
// ============================================================
function QuestionCard({
  step,
  question,
  subQuestion,
  options,
  selectedValue,
  onSelect,
}: {
  step: Step;
  question: string;
  subQuestion?: string;
  options: string[];
  selectedValue: string;
  onSelect: (value: string) => void;
}) {
  const [localSelected, setLocalSelected] = useState<string>("");
  const [confirmed, setConfirmed] = useState(false);

  const handleSelect = useCallback(
    (value: string) => {
      if (confirmed) return;
      setLocalSelected(value);
      setConfirmed(true);
      setTimeout(() => {
        onSelect(value);
      }, 350);
    },
    [confirmed, onSelect]
  );

  return (
    <div
      className="animate-fade-in-up"
      style={{ width: "100%" }}
    >
      {/* 質問文 */}
      <div style={{ marginBottom: "24px" }}>
        <p
          style={{
            fontSize: "11px",
            fontWeight: 600,
            color: COLORS.accent,
            letterSpacing: "0.08em",
            textTransform: "uppercase",
            marginBottom: "8px",
          }}
        >
          Question {step}
        </p>
        <h2
          style={{
            fontSize: "18px",
            fontWeight: 700,
            color: COLORS.text,
            lineHeight: 1.6,
            marginBottom: subQuestion ? "6px" : 0,
          }}
        >
          {question}
        </h2>
        {subQuestion && (
          <p style={{ fontSize: "14px", color: COLORS.sub, lineHeight: 1.6 }}>
            {subQuestion}
          </p>
        )}
      </div>

      {/* 選択肢 */}
      <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
        {options.map((opt) => (
          <OptionButton
            key={opt}
            label={opt}
            selected={localSelected === opt}
            disabled={confirmed && localSelected !== opt}
            onClick={() => handleSelect(opt)}
          />
        ))}
      </div>
    </div>
  );
}

// ============================================================
// サブコンポーネント: スタート画面
// ============================================================
function StartScreen({ onStart }: { onStart: () => void }) {
  return (
    <div
      className="animate-fade-in"
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "flex-start",
        padding: "0 0 48px",
        textAlign: "center",
        gap: "40px",
        minHeight: "100vh",
        width: "100%",
        background:
          "linear-gradient(160deg, #F8F6F0 0%, #EEE8D5 30%, #F0F4FA 65%, #E8EEF8 100%)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* 装飾: 左上ネイビー円 */}
      <div
        style={{
          position: "absolute",
          top: "-80px",
          left: "-80px",
          width: "260px",
          height: "260px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(2,39,105,0.08) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />
      {/* 装飾: 右下ゴールド円 */}
      <div
        style={{
          position: "absolute",
          bottom: "-60px",
          right: "-60px",
          width: "220px",
          height: "220px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(231,162,0,0.10) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />
      {/* 装飾: 細いゴールドライン（上） */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: "3px",
          background: "linear-gradient(90deg, transparent, #E7A200, #FEE21C, #E7A200, transparent)",
          opacity: 0.6,
          pointerEvents: "none",
        }}
      />
      {/* 装飾: 細いネイビーライン（下） */}
      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          height: "3px",
          background: "linear-gradient(90deg, transparent, #022769, transparent)",
          opacity: 0.4,
          pointerEvents: "none",
        }}
      />

      {/* 動画 */}
      <div
        style={{
          width: "100%",
          position: "relative",
          zIndex: 1,
          alignSelf: "stretch",
        }}
      >
        <video
          src="/app-video.mp4"
          autoPlay
          muted
          loop
          playsInline
          style={{
            width: "100%",
            height: "auto",
            display: "block",
          }}
        />
      </div>

      {/* ロゴ */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
          zIndex: 1,
          marginTop: "-94px",
        }}
      >
        <Image
          src="/logo.png"
          alt="サービスロゴ"
          width={396}
          height={220}
          style={{
            width: "600px",
            height: "auto",
            objectFit: "contain",
          }}
          priority
        />
      </div>

      {/* CTAボタン */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "14px",
          marginTop: "-132px",
          width: "100%",
          position: "relative",
          zIndex: 1,
        }}
      >
        <button
          type="button"
          onClick={onStart}
          style={{
            width: "100%",
            maxWidth: "400px",
            padding: "18px 24px",
            borderRadius: "14px",
            border: "2px solid #E7A200",
            backgroundColor: "#022769",
            color: "#FEE21C",
            fontSize: "15px",
            fontWeight: 700,
            cursor: "pointer",
            lineHeight: 1.5,
            transition: "transform 0.15s ease, box-shadow 0.15s ease",
            boxShadow: "0 4px 18px rgba(2, 39, 105, 0.35)",
            fontFamily: "inherit",
            position: "relative",
            zIndex: 2,
          }}
          onMouseEnter={(e) => {
            (e.currentTarget as HTMLButtonElement).style.transform =
              "translateY(-2px)";
            (e.currentTarget as HTMLButtonElement).style.boxShadow =
              "0 8px 24px rgba(2, 39, 105, 0.45)";
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLButtonElement).style.transform =
              "translateY(0)";
            (e.currentTarget as HTMLButtonElement).style.boxShadow =
              "0 4px 18px rgba(2, 39, 105, 0.35)";
          }}
          onMouseDown={(e) => {
            (e.currentTarget as HTMLButtonElement).style.transform =
              "translateY(0) scale(0.98)";
          }}
          onMouseUp={(e) => {
            (e.currentTarget as HTMLButtonElement).style.transform =
              "translateY(-2px)";
          }}
        >
          簡易AIビジネス適性診断を開始(所要時間3分)
        </button>
        <p
          style={{
            fontSize: "13px",
            color: "#022769",
            opacity: 0.65,
            fontWeight: 500,
            letterSpacing: "0.03em",
          }}
        >
          今すぐ、あなたの可能性を見つけよう
        </p>
      </div>
    </div>
  );
}

// ============================================================
// サブコンポーネント: 結果画面
// ============================================================
function ResultScreen({
  resultType,
  onRetry,
}: {
  resultType: SelfFunctionType;
  onRetry: () => void;
}) {
  const result = typeResults[resultType];

  // ランダムなAI副業を1つ選ぶ（マウント時に固定）
  const [selectedJob] = useState(
    () => result.aiJobs[Math.floor(Math.random() * result.aiJobs.length)]
  );

  return (
    <div className="animate-fade-in-up" style={{ width: "100%" }}>
      {/* 結果ヘッダー */}
      <div
        style={{
          textAlign: "center",
          marginBottom: "28px",
        }}
      >
        <p
          style={{
            fontSize: "12px",
            fontWeight: 600,
            color: COLORS.accent,
            letterSpacing: "0.08em",
            textTransform: "uppercase",
            marginBottom: "12px",
          }}
        >
          Your Result
        </p>
        <p
          style={{
            fontSize: "14px",
            color: COLORS.sub,
            marginBottom: "12px",
            lineHeight: 1.6,
          }}
        >
          あなたは...
        </p>
        <h2
          style={{
            fontSize: "17px",
            fontWeight: 700,
            color: COLORS.text,
            lineHeight: 1.6,
          }}
        >
          {result.name}
        </h2>
      </div>

      {/* AI副業カード */}
      <div
        style={{
          background: "linear-gradient(135deg, #EFF6FF 0%, #F0FDF4 100%)",
          border: `1px solid #BFDBFE`,
          borderRadius: "16px",
          padding: "24px",
          marginBottom: "20px",
          textAlign: "center",
        }}
      >
        <p
          style={{
            fontSize: "12px",
            fontWeight: 600,
            color: COLORS.accent,
            letterSpacing: "0.06em",
            marginBottom: "10px",
          }}
        >
          あなたにマッチしそうなAI活用
        </p>
        <p
          style={{
            fontSize: "24px",
            fontWeight: 800,
            color: COLORS.text,
            letterSpacing: "-0.01em",
            marginBottom: "10px",
          }}
        >
          {selectedJob.title}
        </p>
        <p
          style={{
            fontSize: "14px",
            color: COLORS.sub,
            lineHeight: 1.7,
            marginBottom: "16px",
          }}
        >
          {selectedJob.detail}
        </p>
      </div>

      {/* CTA */}
      <div
        style={{
          background: "#F9FAFB",
          border: "1px solid #E5E7EB",
          borderRadius: "16px",
          padding: "24px",
          marginBottom: "20px",
        }}
      >
        <p
          style={{
            fontSize: "14px",
            fontWeight: 700,
            color: "#1E3A5F",
            lineHeight: 1.9,
            marginBottom: "20px",
            textAlign: "center",
          }}
        >
          この診断はあくまでも簡易版です。
          <br />
          実際は認知科学に基づき、あなただけの強みを発見し
          <br />
          最適なAIビジネスを作成し収益化まで伴走します。
        </p>
        <a
          href="https://docs.google.com/forms/d/e/1FAIpQLSfzB1LXepiwYLDDiseKQXdYk6N2PFBInZuYEHm6PB1Lf_Eu8Q/viewform?usp=header"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: "block",
            width: "100%",
            maxWidth: "400px",
            margin: "0 auto",
            padding: "18px 24px",
            borderRadius: "14px",
            backgroundColor: "#022769",
            fontSize: "15px",
            fontWeight: 700,
            textAlign: "center",
            textDecoration: "none",
            boxShadow: "0 4px 14px rgba(2, 39, 105, 0.4)",
            transition: "transform 0.15s ease, box-shadow 0.15s ease",
            fontFamily: "inherit",
          }}
          onMouseEnter={(e) => {
            (e.currentTarget as HTMLAnchorElement).style.transform =
              "translateY(-2px)";
            (e.currentTarget as HTMLAnchorElement).style.boxShadow =
              "0 8px 20px rgba(2, 39, 105, 0.5)";
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLAnchorElement).style.transform =
              "translateY(0)";
            (e.currentTarget as HTMLAnchorElement).style.boxShadow =
              "0 4px 14px rgba(2, 39, 105, 0.4)";
          }}
        >
          <span
            style={{
              background: "linear-gradient(90deg, #E7A200, #FEE21C)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            無料相談でもっと詳しく話を聞いてみる
          </span>
        </a>
      </div>

      {/* もう一度 */}
      <div style={{ textAlign: "center" }}>
        <button
          onClick={onRetry}
          style={{
            background: "none",
            border: "none",
            color: COLORS.sub,
            fontSize: "13px",
            cursor: "pointer",
            textDecoration: "underline",
            fontFamily: "inherit",
            padding: "8px",
          }}
        >
          もう一度診断する
        </button>
      </div>
    </div>
  );
}

// ============================================================
// メインコンポーネント
// ============================================================
export default function DiagnosticApp() {
  const [step, setStep] = useState<Step>(0);
  const [answers, setAnswers] = useState<Partial<Answers>>({});
  const [resultType, setResultType] = useState<SelfFunctionType | null>(null);

  const handleStart = useCallback(() => {
    setStep(1);
  }, []);

  const handleRetry = useCallback(() => {
    setAnswers({});
    setResultType(null);
    setStep(0);
  }, []);

  const handleBack = useCallback(() => {
    if (step === 1) {
      setAnswers({});
      setStep(0);
    } else if (step === 2) {
      setAnswers((a) => { const n = { ...a }; delete n.task; return n; });
      setStep(1);
    } else if (step === 3) {
      setAnswers((a) => { const n = { ...a }; delete n.action; return n; });
      setStep(2);
    } else if (step === 4) {
      setAnswers((a) => { const n = { ...a }; delete n.desire; return n; });
      setStep(3);
    }
  }, [step]);

  const handleAnswer = useCallback(
    (field: keyof Answers, value: string) => {
      const newAnswers = { ...answers, [field]: value };
      setAnswers(newAnswers);

      if (field === "desire") {
        // Step4完了 → 診断結果を計算してStep5へ
        const result = calculateResult({
          occupation: newAnswers.occupation!,
          task: newAnswers.task!,
          action: newAnswers.action!,
          desire: value,
        });
        setResultType(result);
        setStep(5);
      } else {
        setStep((s) => (s + 1) as Step);
      }
    },
    [answers]
  );

  // Step2: 現在の職業に応じたタスク一覧
  const currentTasks =
    answers.occupation ? tasksByOccupation[answers.occupation] ?? [] : [];

  return (
    <div
      style={{
        width: "100%",
        minHeight: "100vh",
        margin: "0",
        padding: "0",
        backgroundColor: step === 0 ? "transparent" : COLORS.bg,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: step === 0 ? "center" : "flex-start",
      }}
    >
      {/* カード */}
      <div
        style={{
          width: "100%",
          backgroundColor: step === 0 ? "transparent" : COLORS.card,
          borderRadius: 0,
          padding:
            step === 0
              ? "0"
              : step === 5
              ? "32px 24px 40px"
              : "32px 24px",
          boxShadow:
            step === 0
              ? "none"
              : "0 1px 3px rgba(0,0,0,0.06), 0 4px 16px rgba(0,0,0,0.06)",
          minHeight: "100vh",
        }}
      >
        {/* Step 0: スタート */}
        {step === 0 && <StartScreen onStart={handleStart} />}

        {/* Step 1〜4: 質問 */}
        {step >= 1 && step <= 4 && (
          <>
            <ProgressBar step={step} />

            {step === 1 && (
              <QuestionCard
                key={1}
                step={1}
                question="あなたの職業に最も近いものを選んでください"
                options={occupations}
                selectedValue={answers.occupation ?? ""}
                onSelect={(v) => handleAnswer("occupation", v)}
              />
            )}

            {step === 2 && (
              <QuestionCard
                key={2}
                step={2}
                question="その仕事の中で特に夢中になれる業務はどれですか？"
                options={currentTasks.map((t) => t.label)}
                selectedValue={answers.task ?? ""}
                onSelect={(v) => handleAnswer("task", v)}
              />
            )}

            {step === 3 && (
              <QuestionCard
                key={3}
                step={3}
                question="その業務の中でも特に夢中になってやっていることはなんですか？"
                options={actions.map((a) => a.label)}
                selectedValue={answers.action ?? ""}
                onSelect={(v) => handleAnswer("action", v)}
              />
            )}

            {step === 4 && (
              <QuestionCard
                key={4}
                step={4}
                question="それをやることでどんな欲求を満たしたいですか？"
                options={desires.map((d) => d.label)}
                selectedValue={answers.desire ?? ""}
                onSelect={(v) => handleAnswer("desire", v)}
              />
            )}

            {/* 戻るボタン */}
            <div style={{ textAlign: "center", marginTop: "24px" }}>
              <button
                type="button"
                onClick={handleBack}
                style={{
                  background: "none",
                  border: "none",
                  color: COLORS.sub,
                  fontSize: "13px",
                  cursor: "pointer",
                  textDecoration: "underline",
                  fontFamily: "inherit",
                  padding: "8px",
                }}
              >
                一つ前に戻る
              </button>
            </div>
          </>
        )}

        {/* Step 5: 結果 */}
        {step === 5 && resultType && (
          <ResultScreen resultType={resultType} onRetry={handleRetry} />
        )}
      </div>
    </div>
  );
}
