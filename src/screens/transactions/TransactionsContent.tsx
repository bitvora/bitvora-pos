import React, {useContext} from 'react';
import {ScrollView} from 'react-native';
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
      {groupedAndSortedTransactions.map((transaction, index) => (
        <SingleTransactionGroup group={transaction} key={index} />
      ))}
    </ScrollView>
  );
};

export default TransactionsContent;
