import React from 'react';
import {Text, View} from 'react-native';
import styles from './styles';
import FastImage from 'react-native-fast-image';

const InvoiceFailure = () => {
  return (
    <View style={styles.statusContent}>
      <View style={styles.imageContainer}>
        <FastImage
          style={styles.gif}
          source={require('../../assets/failed.gif')}
          resizeMode={FastImage.resizeMode.contain}
        />
      </View>

      <Text style={styles.statusText}>Payment unsuccessful</Text>
    </View>
  );
};

export default InvoiceFailure;
