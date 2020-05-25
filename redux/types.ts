export type TARGET_INPUT_TEXT_CHANGED = 'TARGET_INPUT_TEXT_CHANGED';

export type ActionType = TARGET_INPUT_TEXT_CHANGED;

export type ActionTargetInputTextChanged = {
  type: TARGET_INPUT_TEXT_CHANGED;
  newTargetInput: Object | null;
};

export type State = { loadedTargets: Object | null } | undefined;

export type Action = ActionTargetInputTextChanged;
