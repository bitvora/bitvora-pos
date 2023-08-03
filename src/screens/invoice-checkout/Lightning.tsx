import React, {useContext} from 'react';
import {View, Image, Text, TouchableOpacity} from 'react-native';
import styles from './styles';
import {copyToClipboard} from '../../lib/helpers';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {StoreContext} from '../../context/StoreContext';

const Lightning = () => {
  const {currentInvoice} = useContext(StoreContext);

  return (
    <View style={styles.lightningContainer}>
      <Image
        source={{uri: currentInvoice?.qrCodes?.lightning}}
        style={styles.image}
      />

      <View style={styles.footer}>
        <Text numberOfLines={1} ellipsizeMode="tail" style={styles.invoiceText}>
          {currentInvoice?.lightningInvoice}
        </Text>

        <Text style={styles.divider}>|</Text>

        <TouchableOpacity
          style={styles.copyButton}
          onPress={() => copyToClipboard(currentInvoice?.lightningInvoice)}>
          <Ionicons name="copy-outline" color="#374151" size={18} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Lightning;
