import {
  Animated,
  PanResponder,
} from 'react-native';
import { useState, useRef } from 'react';


export const useVolunModal = () => {
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

      return {panResponder, volume, pan}
} 