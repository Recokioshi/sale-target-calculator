import { connect } from 'react-redux';
import TargetEditor, { TargetEditorStateProps } from './TargetEditorComponent';
import { State } from '../../redux/types';
import { Target } from '../../Target';

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

export default connect<TargetEditorStateProps, {}, {}, State>(mapStateToProps, {})(TargetEditor);
