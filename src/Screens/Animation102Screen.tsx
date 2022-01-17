import React, {FunctionComponent, useContext, useRef} from 'react';
import {StyleSheet, View, Animated, PanResponder} from 'react-native';
import {ThemeContext} from '../Context/themeContext/ThemeContext';

interface Animation102ScreenProps {}

const Animation102Screen: FunctionComponent<Animation102ScreenProps> = () => {
  const pan = useRef(new Animated.ValueXY()).current;
  const {
    theme: {colors},
  } = useContext(ThemeContext);

  const panResponse = PanResponder.create({
    onStartShouldSetPanResponder: () => true,
    onPanResponderMove: Animated.event(
      [
        null,
        {
          dx: pan.x, // x,y are Animated.Value
          dy: pan.y,
        },
      ],
      {
        useNativeDriver: false,
      },
    ),
    onPanResponderRelease: () => {
      Animated.spring(
        pan, // Auto-multiplexed
        {toValue: {x: 0, y: 0}, useNativeDriver: false}, // Back to zero
      ).start();
    },
  });

  return (
    <View style={styles.container}>
      <Animated.View
        {...panResponse.panHandlers}
        style={[
          pan.getLayout(),
          {...styles.pupleBox, backgroundColor: colors.primary},
        ]}
      />
    </View>
  );
};

export default Animation102Screen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  pupleBox: {
    width: 150,
    height: 150,
    borderRadius: 8,
  },
});
