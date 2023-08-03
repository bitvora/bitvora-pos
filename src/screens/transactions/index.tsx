import React from 'react';
import Layout from '../../components/Layout';
import Header from '../../components/Header';
import TransactionsLayout from './TransactionsLayout';
import TransactionsContent from './TransactionsContent';

const TransactionsScreen = () => {
  return (
    <TransactionsLayout>
      <Layout>
        <Header title="Transactions" />

        <TransactionsContent />
      </Layout>
    </TransactionsLayout>
  );
};

export default TransactionsScreen;
