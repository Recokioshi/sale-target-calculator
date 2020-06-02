import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { State } from '../../redux/types';
import { targetsInputTextChanged, loadOriginalTargets } from '../../redux/actions';
import TargetLoader, { TargetLoaderDispatchProps, TargetLoaderStateProps } from './TargetLoaderComponent';
import { parseTargetInput } from './TargetInputParser';

const mapStateToProps = (state: State): TargetLoaderStateProps => ({
  targetLoadedSuccessfully: !!state?.loadedTargets,
});

const mapDispatchToProps = (dispatch: Dispatch): TargetLoaderDispatchProps => ({
  inputTextChanged: (targetInput: string) => {
    dispatch(targetsInputTextChanged(parseTargetInput(targetInput)));
  },
  onLoadTargetButtonClicked: (targetInput: string) => {
    const parsedTargets = parseTargetInput(targetInput);
    parsedTargets && dispatch(loadOriginalTargets(parsedTargets, `${targetInput}`));
  },
});

export default connect<TargetLoaderStateProps, TargetLoaderDispatchProps, {}, State>(
  mapStateToProps,
  mapDispatchToProps,
)(TargetLoader);
