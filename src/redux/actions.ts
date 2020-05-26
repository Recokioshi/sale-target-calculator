import { ActionTargetInputTextChanged, ActionLoadOriginalTargets } from './types';
import { Target } from '../Target';

export const targetsInputTextChanged = (newTargetInput: Target[] | null): ActionTargetInputTextChanged => ({
  type: 'TARGET_INPUT_TEXT_CHANGED',
  newTargetInput,
});

export const loadOriginalTargets = (originalTargets: Target[]): ActionLoadOriginalTargets => ({
  type: 'LOAD_ORIGINAL_TARGETS',
  originalTargets,
});
