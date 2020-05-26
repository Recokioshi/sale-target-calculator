import React from 'react';
import { View, StyleSheet, TextInput, FlatList } from 'react-native';
import { Text } from 'react-native-elements';

import { Target } from '../../Target';

type TargetRowProps = {
  target: Target;
};

export type TargetEditorStateProps = {
  originalTargets: Target[];
};

type TargetEditorProps = TargetEditorStateProps;

const TargetRow: React.FC<TargetRowProps> = ({ target }) => {
  return (
    <View style={styles.targetRowContainer}>
      <View style={styles.inputWrap}>
        <Text>{target.name}</Text>
      </View>
      <View style={styles.inputWrap}>
        <TextInput style={styles.inputComp}>{target.today}</TextInput>
      </View>
      <View style={styles.inputWrap}>
        <TextInput style={styles.inputComp}>{target.done}</TextInput>
      </View>
      <View style={styles.inputWrap}>
        <TextInput style={styles.inputComp}>{target.total}</TextInput>
      </View>
    </View>
  );
};

const TargetEditor: React.FC<TargetEditorProps> = ({ originalTargets }) => (
  <View style={styles.mainContainer}>
    <FlatList
      data={originalTargets}
      renderItem={({ item }) => <TargetRow target={item} key={`${item.name}-${item}`} />}
    />
  </View>
);

const styles = StyleSheet.create({
  mainContainer: {
    marginTop: 50,
    marginLeft: 10,
    marginRight: 10,
  },
  targetRowContainer: {
    flex: 1,
    flexDirection: 'row',
    margin: 5,
  },
  inputWrap: { flex: 1, justifyContent: 'center' },
  inputComp: { height: 40, margin: 4, padding: 8, borderColor: 'black', borderWidth: 1, borderRadius: 9 },
});

export default TargetEditor;
