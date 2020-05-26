import React from 'react';
import { View } from 'react-native';
import TargetLoader from '../TargetLoader/TargetLoader';
import TargetEditor from '../TargetEditor/TargetEditor';

export type HomeStateProps = {
  originalTargetsLoaded: boolean;
};

type HomeProps = HomeStateProps;

const Home: React.FC<HomeProps> = ({ originalTargetsLoaded }) => (
  <View>{originalTargetsLoaded ? <TargetEditor /> : <TargetLoader />}</View>
);

export default Home;
