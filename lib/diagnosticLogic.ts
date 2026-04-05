import type { SelfFunctionType } from "@/data/diagnosticData";
import { tasksByOccupation, actions, desires } from "@/data/diagnosticData";

export interface DiagnosticAnswers {
  occupation: string;
  task: string;
  action: string;
  desire: string;
}

/**
 * 診断スコアを計算し、最も高いタイプを返す
 *
 * スコアリング:
 *   Step2 業務選択: +1点
 *   Step3 動作選択: +2点
 *   Step4 欲求選択: +3点
 *
 * 同点の場合: Step4 → Step3 の順で優先
 */
export function calculateResult(answers: DiagnosticAnswers): SelfFunctionType {
  const scores: Record<SelfFunctionType, number> = {
    structure: 0,
    bottleneck: 0,
    solution: 0,
    optimizer: 0,
    gapfill: 0,
    coach: 0,
    harmonizer: 0,
    creator: 0,
    insight: 0,
  };

  // Step2: 業務 +1点
  const tasks = tasksByOccupation[answers.occupation] ?? [];
  const selectedTask = tasks.find((t) => t.label === answers.task);
  if (selectedTask) {
    scores[selectedTask.type] += 1;
  }

  // Step3: 動作 +2点
  const selectedAction = actions.find((a) => a.label === answers.action);
  if (selectedAction) {
    scores[selectedAction.type] += 2;
  }

  // Step4: 欲求 +3点
  const selectedDesire = desires.find((d) => d.label === answers.desire);
  if (selectedDesire) {
    scores[selectedDesire.type] += 3;
  }

  // 最高スコアを特定
  const maxScore = Math.max(...Object.values(scores));

  // 同点の場合: Step4 → Step3 の順で優先
  const step4Type = selectedDesire?.type;
  const step3Type = selectedAction?.type;

  if (step4Type && scores[step4Type] === maxScore) {
    return step4Type;
  }
  if (step3Type && scores[step3Type] === maxScore) {
    return step3Type;
  }

  // それでも同点の場合は最初に見つかったもの
  const winner = (Object.keys(scores) as SelfFunctionType[]).find(
    (k) => scores[k] === maxScore
  );
  return winner ?? "structure";
}
