import { StyleSheet } from "react-native";

export const floatingButtonStyle = StyleSheet.create({
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


export const volumeModalStyle = StyleSheet.create({
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
