import React, {useContext} from 'react';

import {Text, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import HeaderTitle from '../Components/HeaderTitle';
import {styles} from '../Theme/appTheme';
import {ThemeContext} from '../Context/themeContext/ThemeContext';

interface ChangeThemeScreenProps {}

const ChangeThemeScreen = () => {
  const {
    setDarkTheme,
    setLightTheme,
    theme: {colors},
  } = useContext(ThemeContext);

  return (
    <View style={styles.globalMargin}>
      <HeaderTitle title="Tema" />
      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <TouchableOpacity
          style={{
            width: 150,
            height: 50,
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 10,
            backgroundColor: colors.primary,
          }}
          activeOpacity={0.8}
          onPress={setLightTheme}>
          <Text style={{color: 'white', fontWeight: 'bold', fontSize: 20}}>
            Light
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            width: 150,
            height: 50,
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 10,
            backgroundColor: colors.primary,
          }}
          activeOpacity={0.8}
          onPress={setDarkTheme}>
          <Text style={{color: 'white', fontWeight: 'bold', fontSize: 20}}>
            Dark
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ChangeThemeScreen;
