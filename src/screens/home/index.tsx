import React, {useContext, useState} from 'react';
import {Text, View, Dimensions, TouchableOpacity, Image} from 'react-native';
import {StoreContext} from '../../context/StoreContext';
import {AppContext} from '../../context/AppContext';
import Layout from '../../components/Layout';
import {formatCurrency, convertToBTC, showToast} from '../../lib/helpers';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';
import styles from './styles';
import axios from '../../lib/axios';
import {useMutation} from '@tanstack/react-query';
import {useNavigation} from '@react-navigation/native';
import {setData} from '../../lib/storage';
import {ROUTES, STORAGE_KEYS, COLORS} from '../../lib/constants';
import AntDesignIcon from 'react-native-vector-icons/AntDesign';

import ActionSheet from '../../components/ActionSheet';
import {Radio} from 'native-base';
import CURRENCIES from '../../lib/currencies';

const windowHeight = Dimensions.get('window').height;

const renderCurrencyIcon = (currency: string) => {
  switch (currency) {
    case 'CAD':
      return (
        <Image
          source={require('../../assets/canada.png')}
          style={styles.image}
        />
      );
    case 'USD':
    default:
      return (
        <Image source={require('../../assets/usa.png')} style={styles.image} />
      );
  }
};

const HomeScreen = () => {
  const {currentStore, setCurrentInvoice} = useContext(StoreContext);
  const {btcToUSD, defaultCurrency, setDefaultCurrency} =
    useContext(AppContext);
  const navigation = useNavigation();

  const [value, setValue] = useState(0);
  const [secondValue, setSecondValue] = useState(0);

  const _onNumberPress = (number: number) => () => {
    setValue(prevAmount => prevAmount * 10 + number * 0.01);
  };

  const _onDeletePress = () => {
    let newValue = Math.floor(value * 10) / 100;
    if (newValue < 0.01) {
      newValue = 0;
    }

    setValue(newValue);
  };

  const _onCancelPress = () => {
    setValue(0);
    setSecondValue(0);
  };

  const _onPlusPress = () => {
    setSecondValue(value + secondValue);
    setValue(0);
  };

  const createInvoice = async () => {
    try {
      const response = await axios({
        url: `/store/${currentStore?.id}/invoice`,
        method: 'POST',
        navigation,
        payload: {amount: value, currency: 'USD'},
      });

      return response?.data;
    } catch (err) {}
  };

  const {isLoading, mutateAsync} = useMutation(createInvoice, {
    onSuccess: data => {
      showToast('success', 'Invoice created!');
      setData(STORAGE_KEYS.INVOICE_DATA, data);
      setCurrentInvoice(data);
      setValue(0);
      //@ts-ignore
      navigation.navigate(ROUTES.INVOICE_CHECKOUT);
    },
    onError: () => {
      showToast('error', 'Error creating invoice. Please, try again!');
    },
  });

  const handleSubmit = async () => {
    await mutateAsync();
  };

  return (
    <Layout>
      <View style={styles.container}>
        <View style={{height: windowHeight / 3}}>
          <View style={styles.topContainer}>
            <Text style={styles.name}>{currentStore?.name}</Text>

            <ActionSheet
              trigger={
                <View style={styles.currencyContainer}>
                  {renderCurrencyIcon(defaultCurrency)}
                  <Text style={styles.darkText}>{defaultCurrency}</Text>
                  <AntDesignIcon
                    name="down"
                    color={COLORS.DARK}
                    style={styles.downIcon}
                  />
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

          <View style={styles.amountContainer}>
            <Text style={value === 0 ? styles.inactiveAmount : styles.amount}>
              {formatCurrency(value, defaultCurrency)}
            </Text>
            <Text style={styles.btcAmount}>
              {convertToBTC(value, btcToUSD)}
            </Text>
          </View>
        </View>

        <View style={styles.bottomContainer}>
          <View style={styles.keyboardContainer}>
            <TouchableOpacity onPress={_onNumberPress(7)} style={styles.number}>
              <Text style={styles.numberText}>7</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={_onNumberPress(8)} style={styles.number}>
              <Text style={styles.numberText}>8</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={_onNumberPress(9)} style={styles.number}>
              <Text style={styles.numberText}>9</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.number} onPress={_onPlusPress}>
              <Text style={styles.numberText}>+</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.keyboardContainer}>
            <TouchableOpacity onPress={_onNumberPress(4)} style={styles.number}>
              <Text style={styles.numberText}>4</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={_onNumberPress(5)} style={styles.number}>
              <Text style={styles.numberText}>5</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={_onNumberPress(6)} style={styles.number}>
              <Text style={styles.numberText}>6</Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={_onDeletePress}
              style={styles.backButton}>
              <Text style={styles.numberText}>
                <Ionicons name="arrow-back" color="#101928" size={25} />
              </Text>
            </TouchableOpacity>
          </View>

          <View style={styles.keyboardContainer}>
            <TouchableOpacity onPress={_onNumberPress(1)} style={styles.number}>
              <Text style={styles.numberText}>1</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={_onNumberPress(2)} style={styles.number}>
              <Text style={styles.numberText}>2</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={_onNumberPress(3)} style={styles.number}>
              <Text style={styles.numberText}>3</Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={_onCancelPress}
              style={styles.cancelButton}>
              <Text style={styles.numberText}>
                <AntDesign name="close" color="#101928" size={25} />
              </Text>
            </TouchableOpacity>
          </View>

          <View style={styles.keyboardContainer}>
            <TouchableOpacity onPress={_onNumberPress(0)} style={styles.number}>
              <Text style={styles.numberText}>0</Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={handleSubmit}
              disabled={value <= 0 || isLoading}
              style={
                value + secondValue > 0
                  ? styles.activeChargeButton
                  : styles.chargeButton
              }>
              <Text style={styles.chargeText}>
                {isLoading ? (
                  <Feather name="loader" color="#fff" size={25} />
                ) : (
                  `Charge: ${formatCurrency(
                    value + secondValue,
                    defaultCurrency,
                  )}`
                )}
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Layout>
  );
};

export default HomeScreen;
