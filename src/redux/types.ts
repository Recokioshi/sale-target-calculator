import { Target } from '../Target';

export type TARGET_INPUT_TEXT_CHANGED = 'TARGET_INPUT_TEXT_CHANGED';
export type LOAD_ORIGINAL_TARGETS = 'LOAD_ORIGINAL_TARGETS';

export type ActionType = TARGET_INPUT_TEXT_CHANGED | LOAD_ORIGINAL_TARGETS;

export type ActionTargetInputTextChanged = {
  type: TARGET_INPUT_TEXT_CHANGED;
  newTargetInput: Target[] | null;
};
export type ActionLoadOriginalTargets = { type: LOAD_ORIGINAL_TARGETS; originalTargets: Target[] };

export type State = { loadedTargets: Target[] | null; originalTargets: Target[] | null; newTargets: Target[] | null };

export type Action = ActionTargetInputTextChanged | ActionLoadOriginalTargets;
