import React from 'react';
import { Animated, Dimensions, Image } from 'react-native';
import { useFloatingModal } from '../Hooks/useFloatingModal';
import { floatingButtonStyle } from '../styles/index.styles';

export default function FloatingButton({ onPress, onMove }: { onPress: () => void, onMove: (pos: {x: number, y: number}) => void}) {
  const {panResponder, pan} = useFloatingModal({onPress, onMove})

  return (
    <Animated.View
      {...panResponder.panHandlers}
      style={[{
        position: 'absolute',
        zIndex: 10,
        left: pan.x,
        top: pan.y,
      }, floatingButtonStyle.button]}
    >
      <Image
        source={{
          uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuaP2jiKzM6bCAyoSrPcHC5-UrE6d-q740kg&s',
        }}
        style={floatingButtonStyle.butterfly}
      />
    </Animated.View>
  );
}
