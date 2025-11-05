import React, { useRef, useState } from 'react';
import {
  Animated,
  Modal,
  PanResponder,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import { useVolunModal } from '../Hooks/useVolumenModal';

interface VolumeModalProps {
  visible: boolean;
  onClose: () => void;
}

export default function VolumeModal({ visible, onClose }: VolumeModalProps) {
  const {panResponder, volume, pan} = useVolunModal()
  
  return (
  <Modal transparent visible={visible} animationType="fade">
  <View style={styles.overlay}>
    <TouchableWithoutFeedback onPress={onClose}>
      <View style={StyleSheet.absoluteFill} />
    </TouchableWithoutFeedback>

    {/* Zona del modal, no cierra al tocar */}
    <View style={styles.modal}>
      <View style={styles.volumeContainer}>
        <View style={styles.volumeBar}>
          <View style={[styles.volumeFill, { height: `${volume * 100}%` }]} />
        </View>
        <Animated.View
          {...panResponder.panHandlers}
          style={[
            styles.knob,
            {
              transform: [{ translateY: pan.getLayout().top }],
            },
          ]}
        />
      </View>
      <Text style={styles.volumeText}>{Math.round(volume * 100)}%</Text>
    </View>
  </View>
</Modal>

  );
}

const styles = StyleSheet.create({
  overlay: {
    
    flex: 1,
    backgroundColor: '#00000050',


  },
  modal: {
    width: 45,
    height: 200,
    backgroundColor: '#ffffffee',
    borderRadius: 15,
    padding: 10,
    alignItems: 'center',

    position: 'absolute',
    bottom: '60%',
    right: 100,
  },
  volumeContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  volumeBar: {
    width: 8,
    height: 150,
    borderRadius: 5,
    backgroundColor: '#ddd',
    overflow: 'hidden',
  },
  volumeFill: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: '#4fc3f7',
  },
  knob: {
    position: 'absolute',
    width: 15,
    height: 15,
    borderRadius: 12.5,
    backgroundColor: '#4fc3f7',
    top: 0,
  },
  volumeText: {
    fontSize: 12,
    color: '#333',
    marginTop: 5,
  },
});
