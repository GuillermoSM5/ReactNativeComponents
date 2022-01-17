import React, {FunctionComponent, useContext, useState} from 'react';
import {
  ActivityIndicator,
  Animated,
  ImageStyle,
  StyleProp,
  View,
} from 'react-native';
import {ThemeContext} from '../Context/themeContext/ThemeContext';
import useAnimation from '../Hooks/useAnimation';

interface FadeInImageProps {
  uri: string;
  style?: StyleProp<ImageStyle>;
}

const FadeInImage: FunctionComponent<FadeInImageProps> = ({
  uri,
  style,
}: FadeInImageProps) => {
  const {opacity, fadeIn} = useAnimation();
  const [isLoaded, setIsLoaded] = useState(true);
  const {
    theme: {colors},
  } = useContext(ThemeContext);

  const finisLoading = () => {
    setIsLoaded(false);
    fadeIn(1000);
  };
  return (
    <View
      style={{
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      {isLoaded && (
        <ActivityIndicator
          color={colors.primary}
          size={30}
          style={{
            position: 'absolute',
          }}
        />
      )}
      <Animated.Image
        source={{uri}}
        onLoadEnd={finisLoading}
        style={{...(style as any), opacity}}
      />
    </View>
  );
};

export default FadeInImage;
