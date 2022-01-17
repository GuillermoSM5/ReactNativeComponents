import React, {useContext} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {MenuItem} from '../Interfaces/Interfaces';
import Icon from 'react-native-vector-icons/Ionicons';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {useNavigation, useTheme} from '@react-navigation/native';
import {ThemeContext} from '../Context/themeContext/ThemeContext';

interface FlatListMenuItemProps {
  menuItem: MenuItem;
}

const FlatListMenuItem = ({menuItem}: FlatListMenuItemProps) => {
  const navigation = useNavigation();
  const {
    theme: {colors},
  } = useContext(ThemeContext);
  // const {colors} = useTheme();
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      onPress={() => navigation.navigate(menuItem.components as any)}>
      <View style={styles.container}>
        <Icon name={menuItem.icon} size={25} color={colors.primary} />
        <Text style={{...styles.itemText, color: colors.text}}>
          {menuItem.name}
        </Text>
        <View style={{flex: 1}} />
        <Icon name="caret-forward-outline" size={25} color={colors.primary} />
      </View>
    </TouchableOpacity>
  );
};

export default FlatListMenuItem;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  itemText: {
    marginLeft: 10,
    fontSize: 16,
    color: 'black',
  },
});
