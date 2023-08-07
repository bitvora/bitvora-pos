import React from 'react';
import {Text, View} from 'react-native';
import styles from './styles';

const InvoiceSuccess = () => {
  return (
    <View style={styles.statusContent}>
      <Text style={styles.statusText}>Payment successful</Text>
    </View>
  );
};

export default InvoiceSuccess;
