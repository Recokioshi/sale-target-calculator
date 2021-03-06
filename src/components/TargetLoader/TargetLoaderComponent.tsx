import React, { useState } from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import { Text } from 'react-native-elements';
import { ValidButton, InvalidButton } from './ConfirmButton';
import ErrorTargetHintOverlay from './ErrorTargetHintOverlay';

const defaultHeight = 100;
const maxHeight = 450;

export type TargetLoaderStateProps = {
  targetLoadedSuccessfully: boolean;
  initTargetInput: string;
};

export type TargetLoaderDispatchProps = {
  inputTextChanged: (targetInput: string) => void;
  onLoadTargetButtonClicked: (targetInput: string) => void;
};

export type TargetLoaderProps = TargetLoaderStateProps & TargetLoaderDispatchProps;

const TargetLoader: React.FC<TargetLoaderProps> = ({
  inputTextChanged,
  targetLoadedSuccessfully,
  onLoadTargetButtonClicked,
  initTargetInput,
}) => {
  const [targetInput, setTargetInput] = useState(initTargetInput);
  const [height, setHeight] = useState(defaultHeight);
  const [errorOverlayVisible, setErrorOverlayVisible] = useState(false);

  const toggleErrorOverlayVisibility = () => {
    setErrorOverlayVisible(!errorOverlayVisible);
  };

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
      {targetLoadedSuccessfully ? (
        <ValidButton
          onPress={() => {
            onLoadTargetButtonClicked(targetInput);
          }}
        />
      ) : (
        <InvalidButton onPress={toggleErrorOverlayVisibility} />
      )}
      <ErrorTargetHintOverlay isVisible={errorOverlayVisible} onBackdropPress={toggleErrorOverlayVisibility} />
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
