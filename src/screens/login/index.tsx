import React, {useState} from 'react';
import {
  Text,
  View,
  TextInput,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {ROUTES, STORAGE_KEYS} from '../../lib/constants';
import EntypoIcon from 'react-native-vector-icons/Entypo';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {PrimaryButton} from '../../components/Buttons';
import {setData} from '../../lib/storage';
import styles from './styles';
import SplashImage from '../../assets/Splash3';

const LoginScreen = () => {
  const [key, setKey] = useState('');

  const {navigate} = useNavigation();

  const login = async () => {
    await setData(STORAGE_KEYS.API_KEY, key);
    //@ts-ignore
    navigate(ROUTES.APP);
  };

  const dismissKeyboard = () => {
    Keyboard.dismiss();
  };

  return (
    <TouchableWithoutFeedback onPress={dismissKeyboard}>
      <KeyboardAvoidingView
        behavior="padding"
        keyboardVerticalOffset={120}
        style={styles.container}>
        <View style={styles.topContainer}>
          <SplashImage />
        </View>

        <View style={styles.bottomContainer}>
          <Text style={styles.headerText}>Log in</Text>

          <View style={styles.inputContainer}>
            <TextInput
              style={styles.input}
              placeholder="API Key"
              placeholderTextColor="#374151"
              onChangeText={text => setKey(text)}
              defaultValue={key}
            />

            <Ionicons name="scan" color="#374151" size={25} />
          </View>

          <View style={styles.footer}>
            <View style={styles.iconContainer}>
              <EntypoIcon name="help" color="#ffffff" />
            </View>

            <Text style={styles.subHeaderText}>Input the store</Text>

            <Text style={styles.spanSubHeaderText}>API key</Text>

            <Text style={styles.subHeaderText}>found in your nodeless.io</Text>
          </View>
          <Text style={styles.moreSubHeaderText}>account</Text>

          <View style={styles.loginButtonContainer}>
            <PrimaryButton onPress={login} text="Login" disabled={!key} />
          </View>
        </View>
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
};

export default LoginScreen;
