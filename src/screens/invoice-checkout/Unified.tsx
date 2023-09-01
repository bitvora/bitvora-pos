import React, {useContext} from 'react';
import {View, Image} from 'react-native';
import styles from './styles';
import {StoreContext} from '../../context/StoreContext';

const Unified = () => {
  const {currentInvoice} = useContext(StoreContext);

  return (
    <View style={styles.lightningContainer}>
      <Image
        source={{uri: currentInvoice?.qrCodes?.unified}}
        style={styles.image}
      />
    </View>
  );
};

export default Unified;
