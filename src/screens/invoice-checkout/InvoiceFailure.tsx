import React from 'react';
import {Text, View} from 'react-native';
import styles from './styles';

const InvoiceFailure = () => {
  return (
    <View style={styles.statusContent}>
      <Text style={styles.invoiceText}>Payment unsuccessful</Text>
    </View>
  );
};

export default InvoiceFailure;
