import { Reducer } from 'redux';
import { Action, State } from './types';

const defaultState: State = {
  loadedTargets: null,
  newTargets: null,
  originalTargets: null,
  originalTargetsInput: '',
};

const reducer: Reducer<State, Action> = (state: State = defaultState, action: Action) => {
  switch (action.type) {
    case 'TARGET_INPUT_TEXT_CHANGED':
      return { ...state, loadedTargets: action.newTargetInput };
    case 'LOAD_ORIGINAL_TARGETS':
      return { ...state, originalTargets: action.originalTargets };
    default:
      return state;
  }
};

export default reducer;
