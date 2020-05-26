import { ActionTargetInputTextChanged } from './types';
import { Target } from '../Target';

export const targetsInputTextChanged = (newTargetInput: Target[] | null): ActionTargetInputTextChanged => ({
  type: 'TARGET_INPUT_TEXT_CHANGED',
  newTargetInput,
});
