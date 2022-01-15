import React, {FunctionComponent, useState} from 'react';
import {Platform, Switch} from 'react-native';

interface CustomSwitchProps {
  isOn: boolean;
  onChange: (value: boolean) => void;
}

const CustomSwitch: FunctionComponent<CustomSwitchProps> = ({
  isOn,
  onChange,
}: CustomSwitchProps) => {
  const [isEnable, setEnable] = useState(isOn);
  const toggleSwitch = () => {
    setEnable(!isEnable);
    onChange(!isEnable);
  };

  return (
    <Switch
      trackColor={{false: '#D9D9DB', true: '#49FF00'}}
      thumbColor={Platform.OS === 'android' ? '#5856D6' : ''}
      ios_backgroundColor="#3e3e3e"
      onValueChange={toggleSwitch}
      value={isEnable}
    />
  );
};

export default CustomSwitch;
