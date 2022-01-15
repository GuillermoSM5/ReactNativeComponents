import React, {FunctionComponent, useRef} from 'react';
import {Animated, Button, Easing, StyleSheet, View} from 'react-native';
import useAnimation from '../Hooks/useAnimation';

interface Animation101ScreenProps {}

const Animation101Screen: FunctionComponent<Animation101ScreenProps> = () => {
  const {opacity, position, fadeOut, fadeIn, startMovingPosition} =
    useAnimation();
  return (
    <View style={styles.container}>
      <Animated.View
        style={{
          ...styles.pupleBox,
          opacity,
          transform: [{translateY: position}],
        }}
      />
      <Button
        title="FadeIn and FadeOut"
        onPress={() => {
          fadeIn();
          startMovingPosition(-100);
        }}
      />
      <Button title="FadeOut" onPress={fadeOut} />
    </View>
  );
};

export default Animation101Screen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  pupleBox: {
    backgroundColor: '#612897',
    width: 150,
    height: 150,
  },
});
