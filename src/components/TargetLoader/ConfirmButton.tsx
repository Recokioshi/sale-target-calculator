import React from 'react';
import { Button } from 'react-native-elements';
import { StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

type ConfirmButtonProps = {
  title: string;
  backgroundColor?: string;
  onPress: () => void;
  icon: string;
};

type ValidInvalidButtonProps = {
  onPress: () => void;
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

export const InvalidButton: React.FC<ValidInvalidButtonProps> = ({ onPress }) => (
  <ConfirmButton title="Error hint" onPress={onPress} backgroundColor="red" icon="times" />
);

export const ValidButton: React.FC<ValidInvalidButtonProps> = ({ onPress }) => (
  <ConfirmButton title="Load targets" onPress={onPress} icon="check" />
);

const styles = StyleSheet.create({
  button: { width: '50%', marginLeft: 'auto', marginRight: 'auto' },
});
