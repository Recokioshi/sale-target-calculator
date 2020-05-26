import Home, { HomeStateProps } from './HomeComponenet';
import { connect } from 'react-redux';
import { State } from '../../redux/types';

const mapStateToProps = (state: State): HomeStateProps => ({
  originalTargetsLoaded: !!state.originalTargets,
});

export default connect<HomeStateProps, {}, {}, State>(mapStateToProps, {})(Home);
