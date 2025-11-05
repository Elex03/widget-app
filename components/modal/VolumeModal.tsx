import React from 'react';
import {
  Animated,
  Modal,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View
} from 'react-native';
import { useVolunModal } from '../Hooks/useVolumenModal';
import { volumeModalStyle } from '../styles/index.styles';

interface VolumeModalProps {
  visible: boolean;
  onClose: () => void;
}

export default function VolumeModal({ visible, onClose }: VolumeModalProps) {
  const {panResponder, volume, pan} = useVolunModal()
  
  return (
  <Modal transparent visible={visible} animationType="fade">
  <View style={volumeModalStyle.overlay}>
    <TouchableWithoutFeedback onPress={onClose}>
      <View style={StyleSheet.absoluteFill} />
    </TouchableWithoutFeedback>

    <View style={volumeModalStyle.modal}>
      <View style={volumeModalStyle.volumeContainer}>
        <View style={volumeModalStyle.volumeBar}>
          <View style={[volumeModalStyle.volumeFill, { height: `${volume * 100}%` }]} />
        </View>
        <Animated.View
          {...panResponder.panHandlers}
          style={[
            volumeModalStyle.knob,
            {
              transform: [{ translateY: pan.getLayout().top }],
            },
          ]}
        />
      </View>
      <Text style={volumeModalStyle.volumeText}>{Math.round(volume * 100)}%</Text>
    </View>
  </View>
</Modal>

  );
}
