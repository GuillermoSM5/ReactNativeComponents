import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {MenuItem} from '../Interfaces/Interfaces';
import Icon from 'react-native-vector-icons/Ionicons';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {useNavigation} from '@react-navigation/native';

interface FlatListMenuItemProps {
  menuItem: MenuItem;
}

const FlatListMenuItem = ({menuItem}: FlatListMenuItemProps) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      onPress={() => navigation.navigate(menuItem.components as any)}>
      <View style={styles.container}>
        <Icon name={menuItem.icon} size={25} color="black" />
        <Text style={styles.itemText}>{menuItem.name}</Text>
        <View style={{flex: 1}} />
        <Icon name="caret-forward-outline" size={25} color="black" />
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
    color: 'black',
    fontSize: 16,
  },
});
