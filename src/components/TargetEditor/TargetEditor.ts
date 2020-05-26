import { connect } from 'react-redux';
import TargetEditor, { TargetEditorStateProps } from './TargetEditorComponent';
import { State } from '../../redux/types';

const mapStateToProps = (state: State): TargetEditorStateProps => ({
  originalTargets: state.originalTargets!,
});

export default connect<TargetEditorStateProps, {}, {}, State>(mapStateToProps, {})(TargetEditor);
