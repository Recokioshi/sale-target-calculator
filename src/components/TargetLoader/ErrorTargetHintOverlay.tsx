import React from 'react';
import { View } from 'react-native';
import { Overlay, Text } from 'react-native-elements';

type ErrorTargetHintOverlayProps = {
  isVisible: boolean;
  onBackdropPress: () => void;
};

const OverlayText: React.FC = ({ children }) => <Text style={{ textAlign: 'center' }}>{children}</Text>;

const ErrorTargetHintOverlay: React.FC<ErrorTargetHintOverlayProps> = ({ isVisible, onBackdropPress }) => (
  <Overlay isVisible={isVisible} onBackdropPress={onBackdropPress}>
    <View>
      <OverlayText>You can load targets from text pasted into the field.</OverlayText>
      <OverlayText>Targets to be loaded properly has to be formatted as</OverlayText>
      <OverlayText>TARGET NAME DAILY/SUM/TARGET</OverlayText>
      <OverlayText>Target name can contain letters and whitespaces</OverlayText>
      <OverlayText>
        There has to be space or other non alphabetic character between target name and target values
      </OverlayText>
      <OverlayText>targets has to be separated by any symbol, but it has to be the same between targets</OverlayText>
      <OverlayText>
        Examples for target named TARGET1, target to acheve - 1000, done untill now - 600, done today - 100:
      </OverlayText>
      <OverlayText>TARGET1 100/600/1000</OverlayText>
      <OverlayText>TARGET1-100|600|1000</OverlayText>
    </View>
  </Overlay>
);

export default ErrorTargetHintOverlay;
