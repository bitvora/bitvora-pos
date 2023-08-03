import {StyleSheet, Dimensions} from 'react-native';
import {COLORS} from '../../lib/constants';

const windowWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  email: {
    color: COLORS.MAIN,
    textAlign: 'center',
    marginTop: 20,
    fontSize: 14,
    fontWeight: '600',
  },
  amountContainer: {
    textAlign: 'center',
    justifyContent: 'center',
    backgroundColor: '#f9fafb',
    padding: 20,
    paddingTop: 40,
  },
  amountLabel: {
    textAlign: 'center',
    color: '#9da3af',
    fontSize: 14,
    marginBottom: 7,
    fontWeight: '600',
  },
  amountInSATS: {
    textAlign: 'center',
    fontSize: 30,
    color: COLORS.MAIN,
    fontWeight: '700',
    marginBottom: 7,
  },
  amountInBTC: {
    textAlign: 'center',
    color: '#9da3af',
    fontSize: 18,
    marginBottom: 10,
    fontWeight: '700',
  },
  content: {
    marginVertical: 20,
    marginTop: 20,
  },
  tabs: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#cbcfd5',
  },
  activeTab: {
    flexBasis: '33.33%',
    alignItems: 'center',
    paddingVertical: 10,
    borderBottomWidth: 3,
    borderBottomColor: COLORS.MAIN,
    borderRadius: 0,
  },
  inactiveTab: {
    flexBasis: '33.33%',
    alignItems: 'center',
    paddingVertical: 10,
    borderRadius: 5,
  },
  activeTabText: {
    fontSize: 16,
    fontWeight: '700',
  },
  inactiveTabText: {
    fontSize: 16,
  },
  lightningContainer: {
    alignItems: 'center',
    marginTop: 30,
  },
  image: {
    width: 200,
    height: 200,
    resizeMode: 'contain',
    marginBottom: 30,
  },
  copyButton: {
    paddingVertical: 10,
    borderRadius: 5,
  },
  divider: {
    paddingHorizontal: 10,
    fontWeight: '700',
    color: '#9da3af',
    fontSize: 18,
  },
  invoiceText: {
    fontSize: 14,
    overflow: 'hidden',
    width: windowWidth - 140,
    color: '#6c7280',
    fontWeight: '600',
  },
  footer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 15,
    backgroundColor: '#f4f4f4',
    borderRadius: 5,
    width: windowWidth - 60,
    maxWidth: windowWidth - 60,
  },
  label: {
    textAlign: 'center',
    color: '#9da3af',
    fontSize: 14,
    fontWeight: '600',
  },
});

export default styles;
