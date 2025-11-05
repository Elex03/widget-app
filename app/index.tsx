import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import VolumeModal from '../components/modal/VolumeModal';
import FloatingButton from '../components/ui/FloatingButton';

export default function App() {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View style={styles.container}>
      <FloatingButton onPress={() => setModalVisible(true)} />
      <VolumeModal visible={modalVisible} onClose={() => setModalVisible(false)} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
});
