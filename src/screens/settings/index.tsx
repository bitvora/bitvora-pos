import React, {useContext} from 'react';
import {Text, View, Linking, TouchableOpacity} from 'react-native';
import Layout from '../../components/Layout';
import styles from './styles';
import Header from '../../components/Header';
import {AppContext} from '../../context/AppContext';
import {StoreContext} from '../../context/StoreContext';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Feather from 'react-native-vector-icons/Feather';
import AntDesignIcon from 'react-native-vector-icons/AntDesign';
import {
  COLORS,
  NODELESS_URL,
  STORAGE_KEYS,

  // TIMEZONES
} from '../../lib/constants';
import ActionSheet from '../../components/ActionSheet';
import {Radio} from 'native-base';
import CURRENCIES from '../../lib/currencies';
import {setData} from '../../lib/storage';

const SettingsScreen = () => {
  const {
    defaultCurrency,
    // defaultTimezone,
    setDefaultCurrency,
    // setDefaultTimezone,
  } = useContext(AppContext);

  const {currentStore, stores, setCurrentStore} = useContext(StoreContext);

  const handleLinkPress = () => {
    Linking.openURL(NODELESS_URL).catch(err =>
      console.error('An error occurred:', err),
    );
  };

  return (
    <Layout>
      <Header title="Settings" />

      <View style={styles.container}>
        <View style={styles.section}>
          <View style={styles.iconContainer}>
            <MaterialCommunityIcons name="store" color="#f5571e" size={21} />
          </View>

          <ActionSheet
            trigger={
              <View style={styles.storeNameView}>
                <Text style={styles.storeName}>{currentStore?.name}</Text>

                <View>
                  <Feather name="edit-3" color="#9CA3AF" size={16} />
                </View>
              </View>
            }
            content={
              <View>
                <Text style={styles.header}>Select Store</Text>

                <Radio.Group
                  value={currentStore?.id}
                  name="stores"
                  onChange={id => {
                    const newStore = stores.find(store => store.id === id);
                    setData(STORAGE_KEYS.CURRENT_STORE, newStore);
                    setCurrentStore(newStore);
                  }}>
                  {stores.map(store => (
                    <View key={store?.id} style={styles.storeItem}>
                      <Radio
                        value={store?.id}
                        my={1}
                        size="sm"
                        colorScheme="primary">
                        <Text style={styles.storeItemText}>{store?.name}</Text>
                      </Radio>
                    </View>
                  ))}
                </Radio.Group>
              </View>
            }
          />
        </View>

        <View style={styles.section}>
          <View style={styles.item}>
            <Text style={styles.label}>Default Currency</Text>

            <ActionSheet
              trigger={
                <View style={styles.valueSection}>
                  <Text style={styles.value}>{defaultCurrency}</Text>

                  <View>
                    <AntDesignIcon
                      name="down"
                      color={COLORS.DARK}
                      style={styles.icon}
                    />
                  </View>
                </View>
              }
              content={
                <View>
                  <Text style={styles.header}>Select Currency</Text>
                  <Radio.Group
                    value={defaultCurrency}
                    name="currency"
                    onChange={label => {
                      setDefaultCurrency(label);
                    }}>
                    {CURRENCIES.map(({label, image}) => (
                      <View key={label} style={styles.storeItem}>
                        <Radio
                          value={label}
                          my={1}
                          size="sm"
                          colorScheme="primary">
                          <View style={styles.currencyView}>
                            <Text style={styles.currencyText}>{label}</Text>
                            <View style={styles.imageView}>{image}</View>
                          </View>
                        </Radio>
                      </View>
                    ))}
                  </Radio.Group>
                </View>
              }
            />
          </View>

          {/* <View style={styles.item}>
            <Text style={styles.label}>Default Timezone</Text>

            <ActionSheet
              trigger={
                <View style={styles.valueSection}>
                  <Text style={styles.value}>{defaultTimezone?.label}</Text>

                  <View>
                    <AntDesignIcon
                      name="down"
                      color={COLORS.DARK}
                      style={styles.icon}
                    />
                  </View>
                </View>
              }
              content={
                 <View>
                <Text style={styles.header}>Select Timezone</Text>
                <Radio.Group
                  value={defaultTimezone?.label}
                  name="timezone"
                  onChange={label => {
                    const newTz = TIMEZONES.find(
                      timezone => timezone.label === label,
                    );
                    setDefaultTimezone(newTz);
                  }}>
                  {TIMEZONES.map(({label}) => (
                    <View key={label} style={styles.storeItem}>
                      <Radio
                        value={label}
                        my={1}
                        size="sm"
                        colorScheme="primary">
                        <Text style={styles.storeItemText}>{label}</Text>
                      </Radio>
                    </View>
                  ))}
                </Radio.Group>
                    </View>
              }
            />
          </View> */}
        </View>

        <View style={styles.more}>
          <Text style={styles.moreText}>
            For more settings please view your{' '}
            <TouchableOpacity onPress={handleLinkPress}>
              <Text style={styles.linkText}>nodeless account</Text>
            </TouchableOpacity>{' '}
          </Text>
        </View>
      </View>
    </Layout>
  );
};

export default SettingsScreen;
