import React, {FunctionComponent, useState} from 'react';
import {
  ActivityIndicator,
  Animated,
  ImageStyle,
  StyleProp,
  View,
} from 'react-native';
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
          color="#5856D6"
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
