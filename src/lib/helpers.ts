import Toast from 'react-native-toast-message';
import Clipboard from '@react-native-community/clipboard';
import dayjs from 'dayjs';
import {TIMEZONES} from './constants';

export function formatCurrency(
  amount: number,
  currency = 'USD',
  locale = 'en',
) {
  return amount.toLocaleString(locale, {style: 'currency', currency});
}

function truncateNumber(number: number, decimalPlaces: number) {
  const factor = 10 ** decimalPlaces;
  return Math.floor(number * factor) / factor;
}

export const convertToBTC = (value: number, btcAmount: number) => {
  const result =
    btcAmount && btcAmount > 0 ? truncateNumber(value / btcAmount, 5) : 0;

  return `${result.toFixed(5)} BTC`;
};

export const showToast = (type: 'success' | 'error' | 'info', text: string) => {
  Toast.hide();

  Toast.show({
    type,
    text1: text,
    topOffset: 50,
  });
};

export const copyToClipboard = (
  text: string,
  message = 'Copied to clip board',
) => {
  Clipboard.setString(text);
  showToast('info', message);
};

export const convertSatsToBTC = (value: number) =>
  value ? value / 100000000 : 0;

export const addCommasToNumber = (number: number) => {
  return number ? number.toLocaleString() : 0;
};

export const formatDate = (date: string, format = 'MMM D, YYYY  hh:mm:ss A') =>
  dayjs(date).format(format);

export const findTimezoneByCode = (tzCode: string) => {
  return TIMEZONES.find(timezone => timezone.tzCode === tzCode);
};
