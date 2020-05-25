import React from 'react';
import { Button, Text } from 'react-native-elements';
import { StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

type ConfirmButtonProps = {
  title: string;
  backgroundColor?: string;
  onPress: () => void;
  icon: string;
};

const ConfirmButton: React.FC<ConfirmButtonProps> = ({ title, backgroundColor, onPress, icon }) => {
  return (
    <Button
      icon={<Icon name={icon} size={18} color="white" style={{ marginRight: 10 }} />}
      title={title}
      onPress={onPress}
      containerStyle={styles.button}
      buttonStyle={backgroundColor ? { backgroundColor } : {}}
    />
  );
};

export const InvalidButton: React.FC = () => (
  <ConfirmButton
    title="Error hint"
    onPress={() => {
      console.log(`error clicked`);
    }}
    backgroundColor="red"
    icon="times"
  />
);

export const ValidButton: React.FC = () => (
  <ConfirmButton
    title="Load targets"
    onPress={() => {
      console.log(`load clicked`);
    }}
    icon="check"
  />
);

const styles = StyleSheet.create({
  button: { width: '50%', marginLeft: 'auto', marginRight: 'auto' },
});
