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
import {COLORS, NODELESS_URL} from '../../lib/constants';

const SettingsScreen = () => {
  const {
    defaultCurrency,
    defaultTimezone,
    setDefaultCurrency,
    setDefaultTimezone,
  } = useContext(AppContext);
  const {currentStore} = useContext(StoreContext);

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

          <View style={styles.storeNameView}>
            <Text style={styles.storeName}>{currentStore?.name}</Text>

            <View>
              <Feather name="edit-3" color="#9CA3AF" size={16} />
            </View>
          </View>
        </View>

        <View style={styles.section}>
          <View style={styles.item}>
            <Text style={styles.label}>Default Currency</Text>

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
          </View>

          <View style={styles.item}>
            <Text style={styles.label}>Default Timezone</Text>

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
          </View>
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
