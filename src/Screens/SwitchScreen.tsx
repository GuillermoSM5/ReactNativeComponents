import React, {FunctionComponent, useState} from 'react';
import {Platform, StyleSheet, Switch, Text, View} from 'react-native';
import CustomSwitch from '../Components/CustomSwitch';
import HeaderTitle from '../Components/HeaderTitle';
import {styles} from '../Theme/appTheme';

interface SwitchScreenProps {}

const SwitchScreen: FunctionComponent<SwitchScreenProps> = () => {
  const [state, setState] = useState({
    isActive: true,
    isHungry: false,
    isHappy: true,
  });

  const onChange = (value: boolean, field: string) => {
    setState({
      ...state,
      [field]: value,
    });
  };

  return (
    <View style={{flex: 1, ...styles.globalMargin}}>
      <HeaderTitle title="Switches" />
      <View style={stylesSwitch.switchRow}>
        <Text style={stylesSwitch.switchText}>isActive</Text>
        <CustomSwitch
          isOn={state.isActive}
          onChange={value => onChange(value, 'isActive')}
        />
      </View>
      <View style={stylesSwitch.switchRow}>
        <Text style={stylesSwitch.switchText}>isHungry</Text>
        <CustomSwitch
          isOn={state.isHungry}
          onChange={value => onChange(value, 'isHungry')}
        />
      </View>
      <View style={stylesSwitch.switchRow}>
        <Text style={stylesSwitch.switchText}>isHappy</Text>
        <CustomSwitch
          isOn={state.isHappy}
          onChange={value => onChange(value, 'isHappy')}
        />
      </View>
      <Text style={stylesSwitch.switchText}>
        {JSON.stringify(state, null, 5)}
      </Text>
    </View>
  );
};

export default SwitchScreen;

const stylesSwitch = StyleSheet.create({
  switchRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 10,
  },
  switchText: {
    fontSize: 25,
    color: 'black',
  },
});
