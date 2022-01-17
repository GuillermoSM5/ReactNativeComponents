import React, {FunctionComponent, useContext, useState} from 'react';
import {View, ScrollView, RefreshControl, Text} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import HeaderTitle from '../Components/HeaderTitle';
import {ThemeContext} from '../Context/themeContext/ThemeContext';
import {styles} from '../Theme/appTheme';

interface PullToRefreshScreenProps {}

const PullToRefreshScreen: FunctionComponent<PullToRefreshScreenProps> = () => {
  const [refreshing, setRefreshing] = useState(false);
  const [data, setData] = useState<string>();
  const {
    theme: {colors},
  } = useContext(ThemeContext);
  const {top} = useSafeAreaInsets();

  const onRefresh = () => {
    setRefreshing(true);
    setTimeout(() => {
      console.log('terminamos');
      setRefreshing(false);
      setData('Hola mundo');
    }, 3000);
  };

  return (
    <ScrollView
      style={{marginTop: refreshing ? top : 0}}
      refreshControl={
        <RefreshControl
          refreshing={refreshing}
          onRefresh={onRefresh}
          progressViewOffset={10}
          colors={[colors.primary]}
          progressBackgroundColor={colors.border}
          style={{backgroundColor: colors.border}}
          tintColor={colors.border}
          title="Refreshing"
          titleColor={colors.border}
        />
      }>
      <View style={styles.globalMargin}>
        <HeaderTitle title="Pull To Refresh" />
        <Text>{data}</Text>
      </View>
    </ScrollView>
  );
};

export default PullToRefreshScreen;
