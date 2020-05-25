import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { State } from '../../redux/types';
import { targetsInputTextChanged } from '../../redux/actions';
import TargetLoader, { TargetLoaderDispatchProps, TargetLoaderStateProps } from './TargetLoaderComponent';

const parseTargetInput = (targetInput: string): Object | null => {
  return targetInput ? {} : null;
};

const mapStateToProps = (state: State): TargetLoaderStateProps => ({
  targetLoadedSuccessfully: !!state?.loadedTargets,
});

const mapDispatchToProps = (dispatch: Dispatch): TargetLoaderDispatchProps => ({
  inputTextChanged: (targetInput: string) => {
    dispatch(targetsInputTextChanged(parseTargetInput(targetInput)));
  },
});

export default connect<TargetLoaderStateProps, TargetLoaderDispatchProps, {}, State>(
  mapStateToProps,
  mapDispatchToProps,
)(TargetLoader);
