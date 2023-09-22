import React, {
  useState,
  createContext,
  useEffect,
  ReactNode,
  useMemo,
} from 'react';
import axios from '../lib/axios';
import {useQuery} from '@tanstack/react-query';

type TransactionsContextType = {
  isLoading: boolean;
  transactions: [];
};

export const TransactionsContext = createContext<TransactionsContextType>({
  isLoading: false,
  transactions: [],
});

export const TransactionsContextProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [transactions, setTransactions] = useState([]);

  const fetchTransactions = async () => {
    try {
      const response = await axios({
        url: '/transaction',
      });

      return response?.data;
    } catch (err) {
      console.log('Fetch transactions error:', err);
      return [];
    }
  };

  const {isLoading, data} = useQuery({
    queryFn: fetchTransactions,
    queryKey: ['transactions'],
  });

  useEffect(() => {
    if (data) {
      setTransactions(data);
    }
  }, [data]);

  const value: any = useMemo(
    () => ({
      transactions,
      isLoading,
    }),
    [transactions, isLoading],
  );

  return (
    <TransactionsContext.Provider value={value}>
      {children}
    </TransactionsContext.Provider>
  );
};
