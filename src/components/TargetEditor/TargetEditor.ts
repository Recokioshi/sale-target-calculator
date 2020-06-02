import { connect } from 'react-redux';
import TargetEditor, { TargetEditorStateProps, TargetEditorDispatchProps } from './TargetEditorComponent';
import { State } from '../../redux/types';
import { Target } from '../../Target';
import { Dispatch } from 'redux';
import { resetOriginalTargets } from '../../redux/actions';

const addDayToTotal = (target: Target): Target => {
  target.done += target.today;
  target.today = 0;
  return target;
};

const loadOriginalTargets = (originalTargets: Target[]): Target[] => {
  return originalTargets.map((target) => addDayToTotal(target));
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
});

export default connect<TargetEditorStateProps, TargetEditorDispatchProps, {}, State>(
  mapStateToProps,
  mapDispatchToProps,
)(TargetEditor);
