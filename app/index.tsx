import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import VolumeModal from '../components/modal/VolumeModal';
import FloatingButton from '../components/ui/FloatingButton';

export default function App() {
  const [modalVisible, setModalVisible] = useState(false);
  const [buttonPosition, setButtonPosition] = useState({ x: 0, y: 0 });

  return (
    <View style={styles.container}>
      <FloatingButton 
      onPress={() => setModalVisible(true)}
      onMove={(pos) => setButtonPosition(pos)}
      />
      <VolumeModal 
      visible={modalVisible} 
      onClose={() => setModalVisible(false)}
      buttonPosition={buttonPosition} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
});
