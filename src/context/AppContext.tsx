import React, {
  useState,
  createContext,
  useEffect,
  ReactNode,
  useMemo,
} from 'react';
import axios from 'axios';
import {useQuery} from '@tanstack/react-query';
import {COIN_GECKO_API, STORAGE_KEYS} from '../lib/constants';
import {getData, setData} from '../lib/storage';

type AppContextType = {
  btcToUSD: number;
};

export const AppContext = createContext<AppContextType>({
  btcToUSD: 0,
});

export const AppContextProvider = ({children}: {children: ReactNode}) => {
  const [btcToUSD, setBtcToUSD] = useState(0);

  useEffect(() => {
    (async () => {
      const cachedPrice = await getData(STORAGE_KEYS.BTC_TO_USD);

      if (cachedPrice) {
        setBtcToUSD(Number(cachedPrice));
      }
    })();
  }, []);

  const fetchBTCPrice = async () => {
    const response = await axios.get(
      `${COIN_GECKO_API}/simple/price?ids=bitcoin&vs_currencies=usd`,
    );

    return response?.data;
  };

  const {data} = useQuery({
    queryFn: fetchBTCPrice,
    queryKey: ['BTCToUSD'],
    refetchInterval: 100000,
  });

  useEffect(() => {
    if (data) {
      setBtcToUSD(Number(data?.bitcoin?.usd));
      setData(STORAGE_KEYS.BTC_TO_USD, data?.bitcoin?.usd);
    }
  }, [data]);

  const value: any = useMemo(
    () => ({
      btcToUSD,
    }),
    [btcToUSD],
  );

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};
