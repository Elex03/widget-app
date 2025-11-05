import React from 'react';
import { Image, TouchableOpacity } from 'react-native';
import { floatingButtonStyle } from '../styles/index.styles';


interface FloatingButtonProps {
  onPress: () => void;
}

export default function FloatingButton({ onPress }: FloatingButtonProps) {
  return (
    <TouchableOpacity style={floatingButtonStyle.button} onPress={onPress}>
      <Image
        source={{
          uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuaP2jiKzM6bCAyoSrPcHC5-UrE6d-q740kg&s',
        }}
        style={floatingButtonStyle.butterfly}
      />
    </TouchableOpacity>
  );
}
