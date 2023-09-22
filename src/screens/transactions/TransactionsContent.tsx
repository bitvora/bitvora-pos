import React, {useContext} from 'react';
import {ScrollView, View, Text} from 'react-native';
import styles from './styles';
import {sortTransactions} from './helpers';
import {TransactionsContext} from '../../context/TransactionsContext';
import SingleTransactionGroup from './SingleTransactionGroup';
import TransactionSkeleton from './TransactionSkeleton';

const TransactionsContent = () => {
  const {transactions, isLoading} = useContext(TransactionsContext);
  const groupedAndSortedTransactions = sortTransactions(transactions);

  return isLoading ? (
    <TransactionSkeleton />
  ) : (
    <ScrollView style={styles.container}>
      {transactions && transactions?.length < 1 && !isLoading && (
        <View style={styles.noTransactionsView}>
          <Text style={styles.noTransactionsText}>No Transactions</Text>
        </View>
      )}
      {groupedAndSortedTransactions.map((transaction, index) => (
        <SingleTransactionGroup group={transaction} key={index} />
      ))}
    </ScrollView>
  );
};

export default TransactionsContent;
