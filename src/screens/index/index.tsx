/* eslint-disable eqeqeq */
import React, {useEffect} from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {useNavigation} from '@react-navigation/native';
import {ROUTES, NODELESS_URL, STORAGE_KEYS} from '../../lib/constants';
import {ExternalLink} from '../../components/Links';
import {getData} from '../../lib/storage';
import styles from './styles';
import SplashImage from '../../assets/Splash2';

const IndexScreen = () => {
  const {navigate} = useNavigation();

  useEffect(() => {
    (async () => {
      const APIKey = await getData(STORAGE_KEYS.API_KEY);
      if (APIKey && APIKey !== '' && APIKey != 'undefined') {
        //@ts-ignore
        navigate(ROUTES.APP);
      }
    })();
  }, [navigate]);

  return (
    <View style={styles.container}>
      <LinearGradient
        colors={['#911F8E', '#FD7014']}
        start={{x: 0, y: 0}}
        end={{x: 1, y: 1}}
        style={styles.background}>
        <View style={styles.topContainer}>
          <SplashImage />
        </View>

        <View style={styles.bottomContainer}>
          <Text style={styles.headerText}>Nodeless</Text>
          <Text style={styles.headerText}>POS</Text>

          <Text style={styles.subHeaderText}>
            An innovative way of accepting payments online using bitcoin
          </Text>

          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              //@ts-ignore
              navigate(ROUTES.LOGIN);
            }}>
            <Text style={styles.buttonText}>Login</Text>
          </TouchableOpacity>

          <View style={styles.footer}>
            <Text style={styles.subHeaderText}>Not registered?</Text>

            <ExternalLink
              text="Visit nodeless.io"
              style={styles.linkContainer}
              textStyle={styles.linkText}
              url={NODELESS_URL}
            />
          </View>
        </View>
      </LinearGradient>
    </View>
  );
};

export default IndexScreen;
