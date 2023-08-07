import React from 'react';
import {Text, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import styles from './styles';
import SplashImage from '../../assets/Splash1';

const SplashScreen = () => {
  return (
    <View style={styles.container}>
      <LinearGradient
        colors={['#911F8E', '#FD7014']}
        start={{x: 0, y: 0}}
        end={{x: 1, y: 1}}
        style={styles.background}>
        <View style={styles.topContainer} />

        <View style={styles.bottomContainer}>
          <Text style={styles.headerText}>Nodeless</Text>
          <Text style={styles.headerText}>POS</Text>
          <SplashImage />
        </View>
      </LinearGradient>
    </View>
  );
};

export default SplashScreen;
