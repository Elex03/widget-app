import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import FloatingButton from '../components/ui/FloatingButton';
import VolumeModal from '../components/modal/VolumeModal';

export default function App() {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View style={styles.container}>
      {/* Tu contenido principal aquí */}

      {/* Botón flotante */}
      <FloatingButton onPress={() => setModalVisible(true)} />

      {/* Modal de volumen */}
      <VolumeModal visible={modalVisible} onClose={() => setModalVisible(false)} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
});
