import React, {FunctionComponent} from 'react';
import {Text, View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {styles} from '../Theme/appTheme';

interface HeaderTitleProps {
  title: string;
}

const HeaderTitle: FunctionComponent<HeaderTitleProps> = ({
  title,
}: HeaderTitleProps) => {
  const {top} = useSafeAreaInsets();
  return (
    <View style={{marginTop: top + 20, marginBottom: 20}}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

export default HeaderTitle;
