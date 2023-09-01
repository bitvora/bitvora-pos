import React, {useEffect} from 'react';
import {Text, View} from 'react-native';
import styles from './styles';
import FastImage from 'react-native-fast-image';
import {useNavigation} from '@react-navigation/native';
import {ROUTES} from '../../lib/constants';

const InvoiceSuccess = () => {
  const navigation = useNavigation();

  useEffect(() => {
    setTimeout(() => {
      //@ts-ignore
      navigation.navigate(ROUTES.HOME);
    }, 5000);
  }, [navigation]);

  return (
    <View style={styles.statusContent}>
      <View style={styles.imageContainer}>
        <FastImage
          style={styles.gif}
          source={require('../../assets/successful.gif')}
          resizeMode={FastImage.resizeMode.contain}
        />
      </View>

      <Text style={styles.statusText}>Payment successful</Text>
    </View>
  );
};

export default InvoiceSuccess;
