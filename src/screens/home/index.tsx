import React, {useContext, useState} from 'react';
import {Text, View, Dimensions, TouchableOpacity} from 'react-native';
import {StoreContext} from '../../context/StoreContext';
import {AppContext} from '../../context/AppContext';
import Layout from '../../components/Layout';
import CountryDropdown from '../../components/CountryDropdown';
import {formatCurrency, convertToBTC} from '../../lib/helpers';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';
import styles from './styles';
import axios from '../../lib/axios';
import {useMutation} from '@tanstack/react-query';
import {useNavigation} from '@react-navigation/native';
import {showToast} from '../../lib/helpers';
import {setData} from '../../lib/storage';
import {ROUTES, STORAGE_KEYS} from '../../lib/constants';

const windowHeight = Dimensions.get('window').height;

const HomeScreen = () => {
  const {currentStore, setCurrentInvoice} = useContext(StoreContext);
  const {btcToUSD} = useContext(AppContext);
  const navigation = useNavigation();
  const [selected, setSelected] = useState(undefined);

  const [value, setValue] = useState(0);

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

  const _onCancelPress = () => setValue(0);

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

            <CountryDropdown
              label="Select Item"
              key={selected}
              onSelect={setSelected}
            />
          </View>

          <View style={styles.amountContainer}>
            <Text style={value === 0 ? styles.inactiveAmount : styles.amount}>
              {formatCurrency(value)}
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

            <TouchableOpacity style={styles.number}>
              <Text style={styles.numberText}>+</Text>
            </TouchableOpacity>

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
                value > 0 ? styles.activeChargeButton : styles.chargeButton
              }>
              <Text style={styles.chargeText}>
                {isLoading ? (
                  <Feather name="loader" color="#fff" size={25} />
                ) : (
                  `Charge: ${formatCurrency(value)}`
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
