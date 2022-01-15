import React, {FunctionComponent, useState} from 'react';
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

interface TextInputScreenProps {}

const TextInputScreen: FunctionComponent<TextInputScreenProps> = () => {
  const {form, onChange} = useForm({
    name: '',
    email: '',
    phoneNumber: '',
    isSubscribe: false,
  });
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <ScrollView>
        <View style={styles.globalMargin}>
          <HeaderTitle title="Text Inputs" />

          <TextInput
            style={stylesInput.input}
            placeholder="Ingrese su Nombre"
            value={form.name}
            onChangeText={text => onChange(text, 'name')}
            autoCorrect={false}
            autoCapitalize="words"
          />
          <TextInput
            style={stylesInput.input}
            placeholder="Ingrese su Email"
            keyboardType="email-address"
            autoCorrect={false}
            value={form.email}
            onChangeText={text => onChange(text, 'email')}
            autoCapitalize="none"
          />
          <TextInput
            style={stylesInput.input}
            placeholder="Ingrese su Telefono"
            keyboardType="numeric"
            value={form.phoneNumber}
            onChangeText={text => onChange(text, 'phoneNumber')}
          />

          <View style={stylesInput.switchRow}>
            <Text style={stylesInput.switchText}>isHappy</Text>
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
    borderColor: 'rgba(0,0,0,0.3)',
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
