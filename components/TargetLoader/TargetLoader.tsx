import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';
import { Button } from 'react-native-elements';

const defaultHeight = 100;
const maxHeight = 450;

const TargetLoader: React.FC = () => {
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
        onChangeText={(text) => setTargetInput(text.toUpperCase())}
        onContentSizeChange={(event) => {
          setHeight(event.nativeEvent.contentSize.height);
        }}
        placeholder="TARGET NAME 1000/6000/9000"
      />
      <Button
        title="Continue"
        onPress={() => {
          console.log('clicked');
        }}
        containerStyle={{ width: '50%', marginLeft: 'auto', marginRight: 'auto' }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    marginTop: 50,
    flex: 1,
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
  },
  button: {
    width: 300,
  },
});

export default TargetLoader;
