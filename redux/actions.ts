import { ActionTargetInputTextChanged } from './types';

export const targetsInputTextChanged = (newTargetInput: Object | null): ActionTargetInputTextChanged => ({
  type: 'TARGET_INPUT_TEXT_CHANGED',
  newTargetInput,
});
