import {
  ActionTargetInputTextChanged,
  ActionLoadOriginalTargets,
  ActionResetOriginalTargets,
  ActionSaveEditedTargets,
} from './types';
import { Target } from '../Target';

export const targetsInputTextChanged = (newTargetInput: Target[] | null): ActionTargetInputTextChanged => ({
  type: 'TARGET_INPUT_TEXT_CHANGED',
  newTargetInput,
});

export const loadOriginalTargets = (
  originalTargets: Target[],
  originalTargetsInput: string,
): ActionLoadOriginalTargets => ({
  type: 'LOAD_ORIGINAL_TARGETS',
  originalTargets,
  originalTargetsInput,
});

export const resetOriginalTargets = (): ActionResetOriginalTargets => ({ type: 'RESET_ORIGINAL_TARGETS' });

export const saveEditedTargets = (newOriginalTargetsInput: string): ActionSaveEditedTargets => ({
  type: 'SAVE_EDITED_TARGETS',
  newOriginalTargetsInput,
});
