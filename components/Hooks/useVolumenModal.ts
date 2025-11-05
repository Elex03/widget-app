import { width, height } from '@/constants';
import { useRef, useState } from 'react';
import {
  Animated,
  PanResponder,
} from 'react-native';

const isLeft = (xPosition: number) => xPosition < width / 2;

export function useVolumenModal(position: {x: number, y:number}) {
  const [volume, setVolume] = useState(0.5); 
  const pan = useRef(new Animated.ValueXY({ x: 0, y: (1 - volume) * 150 })).current;

  const panResponder = useRef(
    PanResponder.create({
      onMoveShouldSetPanResponder: () => true,
      onPanResponderMove: (_, gesture) => {
        const newY = Math.max(0, Math.min(150, gesture.dy + (1 - volume) * 150));
        const newVol = 1 - newY / 150;
        setVolume(newVol);
        pan.setValue({ x: 0, y: newY });
      },
    })
  ).current;

  const modalX = isLeft(position.x) ? position.x + 60 : position.x - 80;
  const modalY = Math.max(
    20,                        
    Math.min(position.y, height - 200 - 20)  
  );

  return { panResponder, volume, pan, modalPosition: { x: modalX, y: modalY } };
}
