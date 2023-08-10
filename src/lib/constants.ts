import Config from 'react-native-config';
import timezones from './tz.json';

export const ROUTES = {
  HOME: 'HOME',
  LOGIN: 'LOGIN',
  SETTINGS: 'SETTINGS',
  TRANSACTIONS: 'TRANSACTIONS',
  INDEX: 'INDEX',
  APP: 'APP',
  INVOICE_CHECKOUT: 'INVOICE_CHECKOUT',
};

export const NODELESS_URL = Config.BASE_URL || '';

export const STORAGE_KEYS = {
  API_KEY: 'API_KEY',
  INVOICE_DATA: 'INVOICE_DATA',
  BTC_TO_USD: 'BTC_TO_USD',
  STORES: 'STORES',
  DEFAULT_TIMEZONE: 'UTC',
  DEFAULT_CURRENCY: 'USD',
};

export const TIMEZONES = timezones;

export const COLORS = {
  MAIN: '#FF5A1F',
  DARK: '#374151',
};

export const COIN_GECKO_API = 'https://api.coingecko.com/api/v3';
