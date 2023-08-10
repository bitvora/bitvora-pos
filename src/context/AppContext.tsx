/* eslint-disable @typescript-eslint/no-unused-vars */
import React, {
  useState,
  createContext,
  useEffect,
  ReactNode,
  useMemo,
} from 'react';
import axios from 'axios';
import {useQuery} from '@tanstack/react-query';
import {COIN_GECKO_API, STORAGE_KEYS, TIMEZONES} from '../lib/constants';
import {getData, setData} from '../lib/storage';
import {findTimezoneByCode} from '../lib/helpers';

interface TimeZone {
  label: string;
  tzCode: string;
  name: string;
  utc: string;
}

type AppContextType = {
  btcToUSD: number;
  defaultCurrency: string;
  setDefaultCurrency: (payload: string) => void;
  defaultTimezone: TimeZone;
  setDefaultTimezone: (payload: any) => void;
};

export const AppContext = createContext<AppContextType>({
  btcToUSD: 0,
  defaultCurrency: '',
  setDefaultCurrency: (payload: string) => {},
  defaultTimezone: {} as TimeZone,
  setDefaultTimezone: (payload: any) => {},
});

export const AppContextProvider = ({children}: {children: ReactNode}) => {
  const [btcToUSD, setBtcToUSD] = useState(0);
  const [defaultCurrency, setCurrency] = useState('');
  const [defaultTimezone, setTimezone] = useState<any>({});

  const setDefaultCurrency = (currency: string) => {
    setCurrency(currency);
    setData(STORAGE_KEYS.DEFAULT_CURRENCY, currency);
  };

  const setDefaultTimezone = (tz: any) => {
    setTimezone(tz);
    setData(STORAGE_KEYS.DEFAULT_TIMEZONE, tz);
  };

  useEffect(() => {
    (async () => {
      const cachedPrice = await getData(STORAGE_KEYS.BTC_TO_USD);
      const cachedCurrency = await getData(STORAGE_KEYS.DEFAULT_CURRENCY);
      const cachedTimezone = await getData(STORAGE_KEYS.DEFAULT_TIMEZONE);

      if (cachedPrice) {
        setBtcToUSD(Number(cachedPrice));
      }

      if (cachedCurrency) {
        setCurrency(cachedCurrency);
      } else {
        setCurrency('USD');
        setData(STORAGE_KEYS.DEFAULT_CURRENCY, 'USD');
      }

      if (cachedTimezone) {
        setTimezone(cachedTimezone);
      } else {
        const timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;

        const tz = findTimezoneByCode(timeZone);
        setTimezone(tz || TIMEZONES[0]);
        setData(STORAGE_KEYS.DEFAULT_TIMEZONE, tz);
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
      defaultCurrency,
      defaultTimezone,
      setDefaultCurrency,
      setDefaultTimezone,
    }),

    [btcToUSD, defaultCurrency, defaultTimezone],
  );

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};
