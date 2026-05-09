import type { SelfFunctionType } from "@/data/diagnosticData";
import { tasksByOccupation, actions } from "@/data/diagnosticData";

export interface DiagnosticAnswers {
  occupation: string;
  task: string;
  action: string;
}

/**
 * 診断スコアを計算し、最も高いタイプを返す
 *
 * スコアリング:
 *   Step2 業務選択: +1点
 *   Step3 動作選択: +3点
 *
 * Step3が常に結果を決定する（+3 > +1のため）
 */
export function calculateResult(answers: DiagnosticAnswers): SelfFunctionType {
  const scores: Record<SelfFunctionType, number> = {
    info_structure: 0,
    space_organization: 0,
    process_efficiency: 0,
    bottleneck_solving: 0,
    strategy_design: 0,
    essence_analysis: 0,
    idea_realization: 0,
    unique_expression: 0,
    complex_verbalization: 0,
    visual_communication: 0,
    truth_extraction: 0,
    strength_discovery: 0,
    new_perspective: 0,
    action_promotion: 0,
    team_alignment: 0,
    energy_elevation: 0,
    right_placement: 0,
    intent_alignment: 0,
    joy_creation: 0,
  };

  // Step2: 業務 +1点
  const tasks = tasksByOccupation[answers.occupation] ?? [];
  const selectedTask = tasks.find((t) => t.label === answers.task);
  if (selectedTask) {
    scores[selectedTask.type] += 1;
  }

  // Step3: 動作 +3点
  const selectedAction = actions.find((a) => a.label === answers.action);
  if (selectedAction) {
    scores[selectedAction.type] += 3;
  }

  const maxScore = Math.max(...Object.values(scores));

  // 同点時はStep3優先
  if (selectedAction && scores[selectedAction.type] === maxScore) {
    return selectedAction.type;
  }

  const winner = (Object.keys(scores) as SelfFunctionType[]).find(
    (k) => scores[k] === maxScore,
  );
  return winner ?? "info_structure";
}
