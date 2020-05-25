import { Reducer } from 'redux';
import { Action, State } from './types';

const reducer: Reducer<State, Action> = (state: State, action: Action) => {
  switch (action.type) {
    case 'TARGET_INPUT_TEXT_CHANGED':
      return { ...state, loadedTargets: action.newTargetInput };
    default:
      return state;
  }
};

export default reducer;
