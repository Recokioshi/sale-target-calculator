import { connect } from 'react-redux';
import TargetEditor, { TargetEditorStateProps, TargetEditorDispatchProps } from './TargetEditorComponent';
import { State } from '../../redux/types';
import { Target } from '../../Target';
import { Dispatch } from 'redux';
import { resetOriginalTargets, saveEditedTargets } from '../../redux/actions';

const addDayToTotal = (target: Target): Target => {
  target.done += target.today;
  target.today = 0;
  return target;
};

const loadOriginalTargets = (originalTargets: Target[]): Target[] => {
  return originalTargets.map((target) => addDayToTotal(target));
};

const mapTargetListToInput = (targets: Target[]): string => {
  return targets.reduce<string>((acc, target, index) => {
    acc += index > 0 ? '\n' : '';
    acc += `${target.name} ${target.today}/${target.done}/${target.total}`;
    return acc;
  }, ``);
};

const mapStateToProps = ({ originalTargets }: State): TargetEditorStateProps => {
  return {
    originalTargets: loadOriginalTargets(originalTargets!),
  };
};

const mapDispatchToProps = (dispatch: Dispatch): TargetEditorDispatchProps => ({
  onLoadTargetsAgain: () => {
    dispatch(resetOriginalTargets());
  },
  onSaveNewTargets: (newTargets: Target[]) => {
    dispatch(saveEditedTargets(mapTargetListToInput(newTargets)));
  },
});

export default connect<TargetEditorStateProps, TargetEditorDispatchProps, {}, State>(
  mapStateToProps,
  mapDispatchToProps,
)(TargetEditor);
