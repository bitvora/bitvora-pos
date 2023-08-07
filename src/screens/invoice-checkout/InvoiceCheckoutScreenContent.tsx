import React, {useContext, useState} from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import styles from './styles';
import {convertSatsToBTC, addCommasToNumber} from '../../lib/helpers';
import {StoreContext} from '../../context/StoreContext';
import Lightning from './Lightning';
import Onchain from './Onchain';
import Unified from './Unified';
// import InvoiceFailure from './InvoiceFailure';
import InvoiceSuccess from './InvoiceSuccess';

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

const TabItem = ({
  label,
  value,
  currentTab,
  changeTab,
}: {
  label: string;
  value: string;
  currentTab: string;
  changeTab: (tab: string) => () => void;
}) => {
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

const InvoiceCheckoutScreenContent = () => {
  const [currentTab, setCurrentTab] = useState(TABS.UNIFIED);
  const {currentInvoice, status} = useContext(StoreContext);

  const changeTab = (tab: string) => () => {
    setCurrentTab(tab);
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
          {convertSatsToBTC(currentInvoice?.satsAmount)} BTC
        </Text>
      </View>

      {status === 'new' && (
        <View style={styles.content}>
          <View style={styles.tabs}>
            {TAB_ITEMS.map(item => TabItem({...item, changeTab, currentTab}))}
          </View>

          <View>
            {currentTab === TABS.LIGHTNING && <Lightning />}
            {currentTab === TABS.UNIFIED && <Unified />}
            {currentTab === TABS.ONCHAIN && <Onchain />}
          </View>
        </View>
      )}

      {status === 'paid' && <InvoiceSuccess />}
    </View>
  );
};

export default InvoiceCheckoutScreenContent;
