import React, {FunctionComponent, useContext} from 'react';
import {View} from 'react-native';
import {ThemeContext} from '../Context/themeContext/ThemeContext';

interface ItemSeparatorProps {}

const ItemSeparator: FunctionComponent<ItemSeparatorProps> = () => {
  const {
    theme: {colors},
  } = useContext(ThemeContext);
  return (
    <View
      style={{
        borderBottomWidth: 1,
        opacity: 0.5,
        marginVertical: 5,
        borderColor: colors.border,
      }}
    />
  );
};

export default ItemSeparator;
