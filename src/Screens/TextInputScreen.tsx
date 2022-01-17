import React, {FunctionComponent, useContext, useState} from 'react';
import {
  Text,
  View,
  SafeAreaView,
  TextInput,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
} from 'react-native';
import CustomSwitch from '../Components/CustomSwitch';

import HeaderTitle from '../Components/HeaderTitle';
import {styles} from '../Theme/appTheme';
import useForm from '../Hooks/useForm';
import {ThemeContext} from '../Context/themeContext/ThemeContext';

interface TextInputScreenProps {}

const TextInputScreen: FunctionComponent<TextInputScreenProps> = () => {
  const {form, onChange} = useForm({
    name: '',
    email: '',
    phoneNumber: '',
    isSubscribe: false,
  });
  const {
    theme: {colors},
  } = useContext(ThemeContext);
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <ScrollView>
        <View style={styles.globalMargin}>
          <HeaderTitle title="Text Inputs" />

          <TextInput
            style={{
              ...stylesInput.input,
              borderColor: colors.border,
              color: colors.text,
            }}
            placeholder="Ingrese su Nombre"
            value={form.name}
            onChangeText={text => onChange(text, 'name')}
            placeholderTextColor={colors.text}
            autoCorrect={false}
            autoCapitalize="words"
            selectionColor={colors.primary}
          />
          <TextInput
            style={{
              ...stylesInput.input,
              borderColor: colors.border,
              color: colors.text,
            }}
            placeholder="Ingrese su Email"
            keyboardType="email-address"
            placeholderTextColor={colors.text}
            autoCorrect={false}
            value={form.email}
            onChangeText={text => onChange(text, 'email')}
            autoCapitalize="none"
            selectionColor={colors.primary}
          />
          <TextInput
            style={{
              ...stylesInput.input,
              borderColor: colors.border,
              color: colors.text,
            }}
            placeholder="Ingrese su Telefono"
            placeholderTextColor={colors.text}
            keyboardType="numeric"
            value={form.phoneNumber}
            selectionColor={colors.primary}
            onChangeText={text => onChange(text, 'phoneNumber')}
          />

          <View style={stylesInput.switchRow}>
            <Text style={{...stylesInput.switchText, color: colors.text}}>
              isHappy
            </Text>
            <CustomSwitch
              isOn={form.isSubscribe}
              onChange={value => onChange(value, 'isSubscribe')}
            />
          </View>

          <HeaderTitle title={JSON.stringify(form, null, 3)} />
        </View>
        <View style={{height: 100}} />
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default TextInputScreen;

const stylesInput = StyleSheet.create({
  input: {
    height: 40,
    marginVertical: 12,
    borderWidth: 1,
    padding: 10,
    borderRadius: 10,
  },
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
