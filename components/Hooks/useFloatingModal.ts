import { height, width } from '@/constants';
import { useRef } from 'react';
import { Animated, PanResponder } from 'react-native';


interface UseFloatingModalProps {
  onPress: () => void;
  onMove: (pos: {x: number, y: number}) => void;
}

export function useFloatingModal({ onPress, onMove }: UseFloatingModalProps) {

     const pan = useRef(new Animated.ValueXY({ x: width - 80, y: height / 2 - 30 })).current;

      const isDragging = useRef(false);
    
      const panResponder = useRef(
        PanResponder.create({
          onStartShouldSetPanResponder: () => true,
          onMoveShouldSetPanResponder: (_, gestureState) =>
            Math.abs(gestureState.dx) > 2 || Math.abs(gestureState.dy) > 2,
          onPanResponderGrant: () => {
            isDragging.current = false;
          },
          onPanResponderMove: (_, gesture) => {
            isDragging.current = true;

            let newX = Math.max(0, Math.min(width - 60, gesture.moveX - 30));
            let newY = Math.max(0, Math.min(height - 60, gesture.moveY - 30));

            pan.setValue({ x: newX, y: newY });

            onMove({ x: newX, y: newY });
            },
          onPanResponderRelease: (_, gesture) => {
            if (!isDragging.current) {
              onPress();
              return;
            }
    
            let finalX = gesture.moveX < width / 2 ? 10 : width - 70;
            let finalY = Math.max(10, Math.min(height - 70, gesture.moveY - 30));
            onMove({x: finalX, y: finalY})
    
            Animated.spring(pan, {
              toValue: { x: finalX, y: finalY },
              useNativeDriver: false,
              
            }).start();
          },
        })
      ).current;


      return {panResponder, pan, isDragging}
} 