import {useNavigation} from '@react-navigation/native';
import {StackScreenProps} from '@react-navigation/stack';
import React, {FunctionComponent, useContext, useState} from 'react';
import {
  ImageSourcePropType,
  Text,
  View,
  SafeAreaView,
  Dimensions,
  Image,
  StyleSheet,
  Animated,
} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Carousel, {Pagination} from 'react-native-snap-carousel';
import Icon from 'react-native-vector-icons/Ionicons';
import {ThemeContext} from '../Context/themeContext/ThemeContext';
import useAnimation from '../Hooks/useAnimation';
import Navigation from '../navigation/Navigation';

const {height: screenHeight, width: screenwidth} = Dimensions.get('window');

interface Slide {
  title: string;
  desc: string;
  img: ImageSourcePropType;
}

interface Props extends StackScreenProps<any, any> {}

const items: Slide[] = [
  {
    title: 'Titulo 1',
    desc: 'Ea et eu enim fugiat sunt reprehenderit sunt aute quis tempor ipsum cupidatat et.',
    img: require('../assets/slide-1.png'),
  },
  {
    title: 'Titulo 2',
    desc: 'Anim est quis elit proident magna quis cupidatat culpa labore Lorem ea. Exercitation mollit velit in aliquip tempor occaecat dolor minim amet dolor enim cillum excepteur. ',
    img: require('../assets/slide-2.png'),
  },
  {
    title: 'Titulo 3',
    desc: 'Ex amet duis amet nulla. Aliquip ea Lorem ea culpa consequat proident. Nulla tempor esse ad tempor sit amet Lorem. Velit ea labore aute pariatur commodo duis veniam enim.',
    img: require('../assets/slide-3.png'),
  },
];

const SlideScreen = ({navigation}: Props) => {
  const [activeSlide, setActiveSlide] = useState(0);
  const {
    theme: {colors},
  } = useContext(ThemeContext);

  const {opacity, fadeIn} = useAnimation();

  const renderItem = (item: Slide) => {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: 'white',
          borderRadius: 5,
          padding: 40,
          justifyContent: 'center',
        }}>
        <Image
          source={item.img}
          style={{width: 350, height: 400, resizeMode: 'center'}}
        />
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.subTitle}>{item.desc}</Text>
      </View>
    );
  };

  const Button = () => {
    if (activeSlide === 2) fadeIn(300);
    return (
      <Animated.View style={{opacity}}>
        <TouchableOpacity
          style={{
            flexDirection: 'row',
            backgroundColor: colors.primary,
            width: 140,
            height: 40,
            borderRadius: 10,
            alignItems: 'center',
            justifyContent: 'center',
          }}
          activeOpacity={0.8}
          onPress={() => navigation.navigate('HomeScreen')}>
          <Text style={{fontSize: 20, color: 'white'}}>Entrar</Text>
          <Icon name="chevron-forward-outline" size={30} color={'white'} />
        </TouchableOpacity>
      </Animated.View>
    );
  };

  const pagination = () => {
    return (
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginHorizontal: 20,
        }}>
        <Pagination
          dotsLength={items.length}
          activeDotIndex={activeSlide}
          containerStyle={{backgroundColor: colors.background}}
          dotStyle={{
            width: 10,
            height: 10,
            borderRadius: 5,
            backgroundColor: colors.primary,
          }}
          inactiveDotOpacity={0.4}
          inactiveDotScale={0.6}
        />
        {Button()}
      </View>
    );
  };

  return (
    <SafeAreaView
      style={{
        flex: 1,
        paddingTop: 50,
      }}>
      <Carousel
        // ref={c => {
        //   this._carousel = c;
        // }}
        data={items}
        renderItem={({item}) => renderItem(item)}
        sliderWidth={screenwidth}
        itemWidth={screenwidth}
        layout="default"
        onSnapToItem={index => {
          setActiveSlide(index);
        }}
      />
      {pagination()}
    </SafeAreaView>
  );
};

export default SlideScreen;

const styles = StyleSheet.create({
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#5856d6',
  },
  subTitle: {
    color: 'black',
    fontWeight: 'bold',
  },
});