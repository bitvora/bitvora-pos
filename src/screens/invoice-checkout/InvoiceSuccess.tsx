import React from 'react';
import {Text, View} from 'react-native';
import styles from './styles';
import FastImage from 'react-native-fast-image';

const InvoiceSuccess = () => {
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
