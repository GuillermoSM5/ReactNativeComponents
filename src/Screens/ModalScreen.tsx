import React, {FunctionComponent, useState} from 'react';
import {Button, Modal, Text, View} from 'react-native';
import HeaderTitle from '../Components/HeaderTitle';
import {styles} from '../Theme/appTheme';

interface ModalScreenProps {}

const ModalScreen: FunctionComponent<ModalScreenProps> = () => {
  const [isVisible, setIsVisible] = useState(false);
  return (
    <View style={styles.globalMargin}>
      <HeaderTitle title="Modal" />
      <Button title="Abrir Modal" onPress={() => setIsVisible(true)} />

      <Modal animationType="fade" visible={isVisible} transparent={true}>
        <View
          style={{
            flex: 1,
            backgroundColor: 'rgba(0,0,0,0.5)',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <View
            style={{
              backgroundColor: 'white',
              width: 200,
              height: 200,
              justifyContent: 'center',
              alignItems: 'center',
              shadowOffset: {
                width: 0,
                height: 10,
              },
              shadowOpacity: 0.25,
              elevation: 10,
              borderRadius: 5,
            }}>
            <Text style={{fontSize: 20, fontWeight: 'bold', color: 'black'}}>
              Modal
            </Text>
            <Text
              style={{
                fontSize: 16,
                fontWeight: '300',
                color: 'black',
                marginBottom: 20,
              }}>
              Cuarpo del Modal
            </Text>
            <Button
              title="Cerrar el Modal"
              onPress={() => setIsVisible(false)}
            />
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default ModalScreen;
