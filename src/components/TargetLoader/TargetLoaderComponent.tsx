import React, { useState } from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import { Text } from 'react-native-elements';
import { ValidButton, InvalidButton } from './ConfirmButton';

const defaultHeight = 100;
const maxHeight = 450;

export type TargetLoaderStateProps = {
  targetLoadedSuccessfully: boolean;
};

export type TargetLoaderDispatchProps = {
  inputTextChanged: (targetInput: string) => void;
};

export type TargetLoaderProps = TargetLoaderStateProps & TargetLoaderDispatchProps;

const TargetLoader: React.FC<TargetLoaderProps> = ({ inputTextChanged, targetLoadedSuccessfully }) => {
  const [targetInput, setTargetInput] = useState('');
  const [height, setHeight] = useState(defaultHeight);
  return (
    <View style={styles.mainContainer}>
      <Text style={styles.label}>Load targets from text</Text>
      <TextInput
        style={[styles.textInput, { height: Math.max(defaultHeight, Math.min(height, maxHeight)) }]}
        multiline={true}
        scrollEnabled={true}
        value={targetInput}
        onChangeText={(text) => {
          setTargetInput(text);
          inputTextChanged(text);
        }}
        onContentSizeChange={(event) => {
          setHeight(event.nativeEvent.contentSize.height);
        }}
        placeholder="TARGET NAME 1000/6000/9000"
      />
      {targetLoadedSuccessfully ? <ValidButton /> : <InvalidButton />}
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    marginTop: 50,
  },
  label: {
    fontSize: 25,
    textAlign: 'center',
  },
  textInput: {
    textAlignVertical: 'top',
    borderColor: 'gray',
    borderRadius: 5,
    borderWidth: 1,
    margin: 15,
    padding: 10,
    backgroundColor: 'white',
  },
  button: { width: '50%', marginLeft: 'auto', marginRight: 'auto' },
});

export default TargetLoader;
