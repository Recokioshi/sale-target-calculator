import React from 'react';
import { Provider } from 'react-redux';
import { StyleSheet, View } from 'react-native';
import TargetLoader from './src/components/TargetLoader/TargetLoader';
import store from './src/redux/store';

export default function App() {
  return (
    <Provider store={store}>
      <View style={styles.container}>
        <TargetLoader />
      </View>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: { backgroundColor: 'white', flex: 1 },
});
