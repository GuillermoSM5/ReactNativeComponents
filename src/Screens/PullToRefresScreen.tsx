import React, {FunctionComponent, useState} from 'react';
import {View, ScrollView, RefreshControl, Text} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import HeaderTitle from '../Components/HeaderTitle';
import {styles} from '../Theme/appTheme';

interface PullToRefreshScreenProps {}

const PullToRefreshScreen: FunctionComponent<PullToRefreshScreenProps> = () => {
  const [refreshing, setRefreshing] = useState(false);
  const [data, setData] = useState<string>();

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
          colors={['white', 'red', 'orange']}
          style={{backgroundColor: '#5856D6'}}
          tintColor="white"
          title="Refreshing"
          titleColor="white"
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
