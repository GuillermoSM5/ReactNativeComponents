import React, {FunctionComponent, useContext, useState} from 'react';
import {Platform, Switch} from 'react-native';
import {ThemeContext} from '../Context/themeContext/ThemeContext';

interface CustomSwitchProps {
  isOn: boolean;
  onChange: (value: boolean) => void;
}

const CustomSwitch: FunctionComponent<CustomSwitchProps> = ({
  isOn,
  onChange,
}: CustomSwitchProps) => {
  const {
    theme: {colors},
  } = useContext(ThemeContext);
  const [isEnable, setEnable] = useState(isOn);
  const toggleSwitch = () => {
    setEnable(!isEnable);
    onChange(!isEnable);
  };

  return (
    <Switch
      trackColor={{false: '#D9D9DB', true: colors.primary}}
      thumbColor={Platform.OS === 'android' ? colors.primary : colors.primary}
      ios_backgroundColor="#3e3e3e"
      onValueChange={toggleSwitch}
      value={isEnable}
    />
  );
};

export default CustomSwitch;
