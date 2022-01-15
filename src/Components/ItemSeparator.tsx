import React, {FunctionComponent} from 'react';
import {View} from 'react-native';

interface ItemSeparatorProps {}

const ItemSeparator: FunctionComponent<ItemSeparatorProps> = () => {
  return (
    <View style={{borderBottomWidth: 1, opacity: 0.5, marginVertical: 5}} />
  );
};

export default ItemSeparator;
