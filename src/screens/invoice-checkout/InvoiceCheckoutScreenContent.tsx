import React, {useContext, useState} from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import styles from './styles';
import {convertSatsToBTC, addCommasToNumber} from '../../lib/helpers';
import {StoreContext} from '../../context/StoreContext';
import Lightning from './Lightning';
import Onchain from './Onchain';
import Unified from './Unified';

const TABS = {
  LIGHTNING: 'lightning',
  ONCHAIN: 'on-chain',
  UNIFIED: 'unified',
};

const TAB_ITEMS = [
  {
    label: 'Lightning',
    value: TABS.LIGHTNING,
  },
  {
    label: 'Unified',
    value: TABS.UNIFIED,
  },
  {
    label: 'On-chain',
    value: TABS.ONCHAIN,
  },
];

const InvoiceCheckoutScreenContent = () => {
  const [currentTab, setCurrentTab] = useState(TABS.UNIFIED);
  const {currentInvoice} = useContext(StoreContext);

  const changeTab = (tab: string) => () => {
    setCurrentTab(tab);
  };

  const TabItem = ({label, value}: {label: string; value: string}) => {
    return (
      <TouchableOpacity
        style={currentTab === value ? styles.activeTab : styles.inactiveTab}
        key={value}
        onPress={changeTab(value)}>
        <Text
          style={
            currentTab === value ? styles.activeTabText : styles.inactiveTabText
          }>
          {label}
        </Text>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      {currentInvoice?.buyerEmail && (
        <Text style={styles.email}>{currentInvoice?.buyerEmail}</Text>
      )}

      <View style={styles.amountContainer}>
        <Text style={styles.amountLabel}>Amount</Text>
        <Text style={styles.amountInSATS}>
          {addCommasToNumber(currentInvoice?.satsAmount)} SATS
        </Text>
        <Text style={styles.amountInBTC}>
          {convertSatsToBTC(currentInvoice?.satsAmount)}
        </Text>
      </View>

      <View style={styles.content}>
        <View style={styles.tabs}>{TAB_ITEMS.map(item => TabItem(item))}</View>

        <View>
          {currentTab === TABS.LIGHTNING && <Lightning />}
          {currentTab === TABS.UNIFIED && <Unified />}
          {currentTab === TABS.ONCHAIN && <Onchain />}
        </View>
      </View>
    </View>
  );
};

export default InvoiceCheckoutScreenContent;
