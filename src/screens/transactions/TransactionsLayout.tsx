import React from 'react';
import {TransactionsContextProvider} from '../../context/TransactionsContext';

const TransactionsLayout = ({children}: {children: React.ReactNode}) => {
  return <TransactionsContextProvider>{children}</TransactionsContextProvider>;
};

export default TransactionsLayout;
