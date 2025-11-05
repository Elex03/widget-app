import React from 'react';
import { TouchableOpacity, Image, StyleSheet } from 'react-native';

interface FloatingButtonProps {
  onPress: () => void;
}

export default function FloatingButton({ onPress }: FloatingButtonProps) {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Image
        source={{
          uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuaP2jiKzM6bCAyoSrPcHC5-UrE6d-q740kg&s',
        }}
        style={styles.butterfly}
      />

    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    position: 'absolute',
    bottom: '70%',
    right: 25,
    width: 50,
    height: 50,
    backgroundColor: '#e0f7fa',
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.3,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 5,
    overflow: 'hidden',
  },
  butterfly: {
    position: 'absolute',
    width: '100%',
    height: '100%',
  },
});
