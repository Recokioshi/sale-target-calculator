import React, { useState } from 'react';
import { View, StyleSheet, TextInput, FlatList } from 'react-native';
import { Text, Button } from 'react-native-elements';
import { cloneDeep } from 'lodash';

import { Target } from '../../Target';

type TargetRowProps = {
  target: Target;
  onChangeText: { today: (text: number) => void; done: (text: number) => void; total: (text: number) => void };
};

export type TargetEditorStateProps = {
  originalTargets: Target[];
};

export type TargetEditorDispatchProps = {
  onLoadTargetsAgain: () => void;
  onSaveNewTargets: (newTargets: Target[]) => void;
};

type TargetEditorProps = TargetEditorStateProps & TargetEditorDispatchProps;

const TargetRow: React.FC<TargetRowProps> = ({ target, onChangeText }) => {
  return (
    <View style={styles.targetRowContainer}>
      <View style={styles.inputWrap}>
        <Text>{target.name}</Text>
      </View>
      <View style={styles.inputWrap}>
        <TextInput
          style={styles.inputComp}
          onChangeText={(text) => {
            onChangeText.today(Number(text));
          }}
        >
          {target.today}
        </TextInput>
      </View>
      <View style={styles.inputWrap}>
        <TextInput
          style={styles.inputComp}
          onChangeText={(text) => {
            onChangeText.done(Number(text));
          }}
        >
          {target.done}
        </TextInput>
      </View>
      <View style={styles.inputWrap}>
        <TextInput
          style={styles.inputComp}
          onChangeText={(text) => {
            onChangeText.total(Number(text));
          }}
        >
          {target.total}
        </TextInput>
      </View>
    </View>
  );
};

const TargetEditor: React.FC<TargetEditorProps> = ({ originalTargets, onLoadTargetsAgain, onSaveNewTargets }) => {
  const [editedTargets, setEditedTargets] = useState(cloneDeep(originalTargets));

  const todayChanged = (index: number) => (newValue: number) => {
    let newEditedTargets = [...editedTargets];
    newEditedTargets[index].done = originalTargets[index].done + newValue;
    newEditedTargets[index].today = newValue;
    setEditedTargets(newEditedTargets);
  };

  const doneTotalChanged = (targetType: 'today' | 'done' | 'total', index: number) => (newValue: number) => {
    let newEditedTargets = [...editedTargets];
    newEditedTargets[index][targetType] = newValue;
    setEditedTargets(newEditedTargets);
  };

  return (
    <View style={styles.mainContainer}>
      <Button onPress={onLoadTargetsAgain} title="Edit targets from text" />
      <FlatList
        data={editedTargets}
        renderItem={({ item, index }) => (
          <TargetRow
            target={item}
            onChangeText={{
              today: todayChanged(index),
              done: doneTotalChanged('done', index),
              total: doneTotalChanged('total', index),
            }}
          />
        )}
        keyExtractor={(item) => `${item.name}-${item}`}
      />
      <Button onPress={() => onSaveNewTargets(editedTargets)} title="Save new targets" />
    </View>
  );
};

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
