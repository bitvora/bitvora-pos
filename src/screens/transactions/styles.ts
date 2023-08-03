import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    padding: 20,
  },
  transactionGroup: {
    marginBottom: 30,
  },
  transactionGroupDate: {
    fontSize: 13,
    color: '#6c7280',
    fontWeight: '600',
    marginBottom: 20,
  },
  transactions: {
    marginBottom: 30,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  col1: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  col2: {},
  amountContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    alignContent: 'flex-end',
    textAlign: 'right',
  },
  amount: {
    color: '#1a1a1a',
    fontSize: 16,
    fontWeight: '600',
    justifyContent: 'flex-end',
    alignItems: 'center',
    alignContent: 'flex-end',
    textAlign: 'right',
    marginRight: 5,
  },
  currency: {
    color: '#9da3af',
    fontSize: 16,
    fontWeight: '600',
    justifyContent: 'flex-end',
    alignItems: 'center',
    alignContent: 'flex-end',
    textAlign: 'right',
  },
  date: {
    textAlign: 'right',
    color: '#9da3af',
    fontSize: 13,
    marginBottom: 7,
    fontWeight: '600',
  },
  iconContainer: {
    backgroundColor: '#f3f4f6',
    padding: 15,
    marginRight: 20,
    borderRadius: 30,
  },
  type: {
    color: '#374151',
    fontSize: 16,
    fontWeight: '600',
  },
  paid: {
    color: '#047a55',
    fontSize: 14,
    marginBottom: 5,
  },
  unpaid: {
    color: '#e33c3b',
    fontSize: 14,
    marginBottom: 5,
  },
  new: {
    color: 'blue',
    fontSize: 14,
    marginBottom: 5,
  },
  pending: {
    color: '#6c7280',
    fontSize: 14,
    marginBottom: 5,
  },
  skeletonView: {
    padding: 30,
  },
});

export default styles;
