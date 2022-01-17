import React, {useContext} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from '../Screens/HomeScreen';
import Animation101Screen from '../Screens/Animation101Screen';
import Animation102Screen from '../Screens/Animation102Screen';
import SwitchScreen from '../Screens/SwitchScreen';
import AlertsScreen from '../Screens/AlertsScreen';
import TextInputScreen from '../Screens/TextInputScreen';
import PullToRefreshScreen from '../Screens/PullToRefresScreen';
import CustomSectionList from '../Screens/CustomSectionList';
import ModalScreen from '../Screens/ModalScreen';
import InfiniteScrollScreen from '../Screens/InfiniteScrollScreen';
import SlideScreen from '../Screens/SlideScreen';
import ChangeThemeScreen from '../Screens/ChangeThemeScreen';
import {NavigationContainer, Theme} from '@react-navigation/native';
import {ThemeContext} from '../Context/themeContext/ThemeContext';

const Stack = createStackNavigator();

const Navigation = () => {
  const {theme} = useContext(ThemeContext);

  return (
    <NavigationContainer theme={theme}>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          //cardStyle: {backgroundColor: 'white'},
        }}>
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen
          name="Animation101Screen"
          component={Animation101Screen}
        />
        <Stack.Screen
          name="Animation102Screen"
          component={Animation102Screen}
        />
        <Stack.Screen name="SwitchScreen" component={SwitchScreen} />
        <Stack.Screen name="AlertsScreen" component={AlertsScreen} />
        <Stack.Screen name="TextInputScreen" component={TextInputScreen} />
        <Stack.Screen
          name="PullToRefreshScreen"
          component={PullToRefreshScreen}
        />
        <Stack.Screen name="CustomSectionList" component={CustomSectionList} />
        <Stack.Screen name="ModalScreen" component={ModalScreen} />
        <Stack.Screen
          name="InfiniteScrollScreen"
          component={InfiniteScrollScreen}
        />
        <Stack.Screen name="SlideScreen" component={SlideScreen} />
        <Stack.Screen name="ChangeThemeScreen" component={ChangeThemeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
