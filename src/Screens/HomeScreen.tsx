import React, {FunctionComponent} from 'react';
import {Text, View, FlatList, TextBase} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import FlatListMenuItem from '../Components/FlatListMenuItem';
import HeaderTitle from '../Components/HeaderTitle';
import ItemSeparator from '../Components/ItemSeparator';
import {MenuItem} from '../Interfaces/Interfaces';
import {styles} from '../Theme/appTheme';

const menuItems: MenuItem[] = [
  {
    name: 'Animation 101',
    icon: 'cube-outline',
    components: 'Animation101Screen',
  },
  {
    name: 'Animation 102',
    icon: 'albums-outline',
    components: 'Animation102Screen',
  },
  {
    name: 'Switch',
    icon: 'toggle',
    components: 'SwitchScreen',
  },
  {
    name: 'Alertas',
    icon: 'alert-circle-outline',
    components: 'AlertsScreen',
  },
  {
    name: 'TextInputs',
    icon: 'text-outline',
    components: 'TextInputScreen',
  },
  {
    name: 'Pull To Refresh',
    icon: 'arrow-down-outline',
    components: 'PullToRefreshScreen',
  },
  {
    name: 'Section List',
    icon: 'list-circle-outline',
    components: 'CustomSectionList',
  },
  {
    name: 'Modal',
    icon: 'open-outline',
    components: 'ModalScreen',
  },
  {
    name: 'Infinite Scroll',
    icon: 'infinite-outline',
    components: 'InfiniteScrollScreen',
  },
  {
    name: 'Slide Screen',
    icon: 'albums-outline',
    components: 'SlideScreen',
  },
  {
    name: 'Change Theme',
    icon: 'color-palette-outline',
    components: 'ChangeThemeScreen',
  },
];

const HomeScreen = () => {
  return (
    <View style={{flex: 1, ...styles.globalMargin}}>
      <FlatList
        data={menuItems}
        renderItem={({item}) => <FlatListMenuItem menuItem={item} />}
        keyExtractor={item => item.name}
        ListHeaderComponent={() => <HeaderTitle title="Opciones de Menu" />}
        ItemSeparatorComponent={() => <ItemSeparator />}
      />
    </View>
  );
};

export default HomeScreen;
