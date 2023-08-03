import React from 'react';
import {Text, View} from 'react-native';
import styles from './styles';
import {formatTransactionGroupDate} from './helpers';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {addCommasToNumber, formatDate} from '../../lib/helpers';

type SingleTransactionGroupProps = {
  group: {
    date: string;
    transactions: any[];
  };
};

type TransactionStatus =
  | 'new'
  | 'pending_confirmation'
  | 'paid'
  | 'expired'
  | 'cancelled'
  | 'underpaid'
  | 'overpaid'
  | 'in_flight'
  | 'failed'
  | 'completed'
  | 'pending'
  | 'settled';

const renderStatus = (status: TransactionStatus) => {
  let style, text;
  switch (status) {
    case 'paid' || 'completed':
      text = 'Completed';
      style = styles.paid;
      break;

    case 'pending' || 'in_flight':
      text = 'Pending';
      style = styles.pending;
      break;

    case 'new':
      text = 'New';
      style = styles.new;
      break;

    case 'cancelled':
      text = 'Cancelled';
      style = styles.unpaid;
      break;

    case 'expired':
    default:
      text = 'Expired';
      style = styles.unpaid;
  }

  return <Text style={style}>{text}</Text>;
};

const renderIcon = (status: TransactionStatus) => {
  switch (status) {
    case 'paid' || 'completed':
      return <Ionicons name="checkmark-done" color="#047a55" size={20} />;

    case 'pending' || 'in_flight':
      return <Ionicons name="reload" color="#6c7280" size={20} />;

    case 'expired' || 'cancelled':
    default:
      return <AntDesign name="close" color="#e02425" size={20} />;
  }
};

const SingleTransactionGroup = ({group}: SingleTransactionGroupProps) => {
  const {date, transactions} = group;

  return (
    <View style={styles.transactionGroup}>
      <Text style={styles.transactionGroupDate}>
        {formatTransactionGroupDate(date)}
      </Text>

      <View>
        {transactions.map(transaction => (
          <View key={transaction?.id} style={styles.transactions}>
            <View style={styles.col1}>
              <View style={styles.iconContainer}>
                {renderIcon(transaction?.transactable?.status)}
              </View>

              <View>
                {renderStatus(transaction?.transactable?.status)}

                <Text style={styles.type}>
                  {transaction?.transactable?.type === 'lightning'
                    ? 'Lightning'
                    : 'On-Chain'}
                </Text>
              </View>
            </View>

            <View style={styles.col2}>
              <Text style={styles.date}>
                {formatDate(transaction?.created_at, 'H:mm A')}
              </Text>

              <View style={styles.amountContainer}>
                <Text style={styles.amount}>
                  {addCommasToNumber(transaction?.amount)}
                </Text>
                <Text style={styles.currency}>SATS</Text>
              </View>
            </View>
          </View>
        ))}
      </View>
    </View>
  );
};

export default SingleTransactionGroup;
