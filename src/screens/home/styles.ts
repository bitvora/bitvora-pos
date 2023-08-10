import {StyleSheet, Dimensions} from 'react-native';
import {COLORS} from '../../lib/constants';

const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
  },
  name: {
    color: COLORS.MAIN,
    fontWeight: '600',
    marginBottom: 10,
  },
  topContainer: {
    alignItems: 'center',
  },
  bottomContainer: {
    backgroundColor: '#f9f9f9',
    height: windowHeight - windowHeight / 3,
    padding: 20,
    borderTopEndRadius: 15,
    borderTopLeftRadius: 15,
  },
  item: {
    width: 60,
    height: 60,
    backgroundColor: 'red',
    marginBottom: 10,
  },
  btcAmount: {
    color: COLORS.MAIN,
    fontWeight: '600',
    marginBottom: 10,
    fontSize: 16,
  },
  amount: {
    color: COLORS.DARK,
    fontWeight: '600',
    marginBottom: 5,
    fontSize: 40,
  },
  inactiveAmount: {
    color: '#d1d5db',
    fontWeight: '600',
    marginBottom: 5,
    fontSize: 40,
  },
  amountContainer: {
    marginTop: 50,
    alignContent: 'flex-end',
    alignItems: 'flex-end',
    paddingHorizontal: 30,
  },
  number: {
    width: 75,
    height: 65,
    borderRadius: 15,
    backgroundColor: '#f3f3f3',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  numberText: {
    color: '#101928',
    fontSize: 20,
    fontWeight: '700',
    textAlign: 'center',
  },
  keyboardContainer: {
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  backButton: {
    width: 70,
    height: 70,
    borderRadius: 15,
    backgroundColor: '#fce96a',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  cancelButton: {
    width: 75,
    height: 65,
    borderRadius: 15,
    backgroundColor: '#f05352',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  chargeButton: {
    width: 245,
    height: 65,
    borderRadius: 15,
    backgroundColor: '#e6e7eb',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  activeChargeButton: {
    width: 245,
    height: 65,
    borderRadius: 15,
    backgroundColor: '#374151',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  chargeText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: '700',
    textAlign: 'center',
  },
  header: {
    color: '#374151',
    fontSize: 14,
    fontWeight: '600',
    marginVertical: 30,
  },
  storeItem: {
    marginBottom: 15,
  },
  storeItemText: {
    color: '#374151',
    fontSize: 14,
    fontWeight: '600',
  },
  currencyView: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  currencyText: {
    color: '#374151',
    fontSize: 15,
    fontWeight: '600',
  },
  imageView: {
    width: 15,
    height: 15,
    borderRadius: 7,
  },
  image: {
    width: 15,
    height: 15,
  },
  currencyContainer: {
    flexDirection: 'row',
    marginTop: 10,
    marginBottom: 10,
    alignContent: 'center',
    backgroundColor: '#f4f4f4',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 30,
  },
  downIcon: {
    marginRight: 10,
    marginTop: 1,
    fontSize: 16,
  },
  darkText: {
    color: COLORS.DARK,
    marginLeft: 10,
    fontWeight: '600',
    marginRight: 20,
  },
});

export default styles;
