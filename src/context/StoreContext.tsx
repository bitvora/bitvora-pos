/* eslint-disable @typescript-eslint/no-unused-vars */
import React, {
  useState,
  createContext,
  useEffect,
  ReactNode,
  useMemo,
} from 'react';
import axios from '../lib/axios';
import {useQuery} from '@tanstack/react-query';
import {StoreType} from '../types/stores';
import {useNavigation} from '@react-navigation/native';
import {getData, setData} from '../lib/storage';
import {STORAGE_KEYS} from '../lib/constants';

type StoreContextType = {
  isLoading: boolean;
  stores: StoreType[];
  currentStore: StoreType;
  currentInvoice: any;
  setCurrentInvoice: (invoice: any) => void;
  status: string;
};

export const StoreContext = createContext<StoreContextType>({
  isLoading: false,
  stores: [],
  currentStore: {} as StoreType,
  currentInvoice: {},
  setCurrentInvoice: (invoice: any) => {},
  status: 'new',
});

export const StoreContextProvider = ({children}: {children: ReactNode}) => {
  const [stores, setStores] = useState([]);
  const [currentInvoice, setCurrentInvoice] = useState<any>({});
  const [currentStore, setCurrentStore] = useState<any>({});
  const navigation = useNavigation();
  const [status, setStatus] = useState<string | null>('new');

  useEffect(() => {
    (async () => {
      const invoice = await getData(STORAGE_KEYS.INVOICE_DATA);
      const cachedStores = await getData(STORAGE_KEYS.STORES);
      setCurrentInvoice(invoice);
      setStores(cachedStores);
      setCurrentStore(cachedStores[0]);
    })();
  }, []);

  const fetchStores = async () => {
    const response = await axios({
      url: '/store',
      navigation,
    });

    return response?.data;
  };

  const {isLoading, data} = useQuery({
    queryFn: fetchStores,
    queryKey: ['stores'],
  });

  const fetchInvoiceStatus = async () => {
    const response = await axios({
      url: `/store/${currentStore?.id}/invoice/${currentInvoice?.id}/status`,
      navigation,
    });

    return response;
  };

  const {data: pollingData} = useQuery({
    queryKey: [`invoice-${currentInvoice?.id}`],
    queryFn: fetchInvoiceStatus,
    refetchInterval: 3000,
    enabled: currentInvoice?.id && currentStore?.id && status === 'new',
  });

  useEffect(() => {
    if (data) {
      setStores(data);
      if (data.length > 0) {
        setCurrentStore(data[0]);
      }

      setData(STORAGE_KEYS.STORES, data);
    }
  }, [data]);

  useEffect(() => {
    if (pollingData) {
      setStatus(pollingData?.status);
    }
  }, [pollingData, data]);

  const value: any = useMemo(
    () => ({
      stores,
      isLoading,
      currentStore,
      currentInvoice,
      setCurrentInvoice,
      status,
    }),
    [stores, isLoading, currentStore, currentInvoice, status],
  );

  return (
    <StoreContext.Provider value={value}>{children}</StoreContext.Provider>
  );
};
