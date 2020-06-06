import { Target } from '../Target';

export type TARGET_INPUT_TEXT_CHANGED = 'TARGET_INPUT_TEXT_CHANGED';
export type LOAD_ORIGINAL_TARGETS = 'LOAD_ORIGINAL_TARGETS';
export type RESET_ORIGINAL_TARGETS = 'RESET_ORIGINAL_TARGETS';
export type SAVE_EDITED_TARGETS = 'SAVE_EDITED_TARGETS';

export type ActionType =
  | TARGET_INPUT_TEXT_CHANGED
  | LOAD_ORIGINAL_TARGETS
  | RESET_ORIGINAL_TARGETS
  | SAVE_EDITED_TARGETS;

export type ActionTargetInputTextChanged = {
  type: TARGET_INPUT_TEXT_CHANGED;
  newTargetInput: Target[] | null;
};
export type ActionLoadOriginalTargets = {
  type: LOAD_ORIGINAL_TARGETS;
  originalTargets: Target[];
  originalTargetsInput: string;
};

export type ActionResetOriginalTargets = {
  type: RESET_ORIGINAL_TARGETS;
};

export type ActionSaveEditedTargets = {
  type: SAVE_EDITED_TARGETS;
  newOriginalTargetsInput: string;
};

export type Action =
  | ActionTargetInputTextChanged
  | ActionLoadOriginalTargets
  | ActionResetOriginalTargets
  | ActionSaveEditedTargets;

export type State = {
  loadedTargets: Target[] | null;
  originalTargets: Target[] | null;
  newTargets: Target[] | null;
  originalTargetsInput: string;
};
