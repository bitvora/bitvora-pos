import {formatDate} from '../../lib/helpers';

const parseDate = (dateString: string) => {
  const date = new Date(dateString);
  date.setHours(0, 0, 0, 0);
  return date.toISOString();
};

export const sortTransactions = (transactions: any[]) => {
  const groupedTransactions = transactions.reduce(
    (result: any, transaction: any) => {
      const date = parseDate(transaction.created_at);

      if (!result[date]) {
        result[date] = [];
      }

      result[date].push(transaction);

      return result;
    },
    {},
  );

  const sortedDates = Object.keys(groupedTransactions).sort((a, b) => {
    //@ts-ignore
    return new Date(b) - new Date(a);
  });

  const finalArray = sortedDates.map(date => ({
    date,
    transactions: groupedTransactions[date],
  }));

  return finalArray;
};

function isDateEqualToday(date: string) {
  const today = new Date();

  const inputDate = new Date(date);

  return (
    inputDate.getDate() === today.getDate() &&
    inputDate.getMonth() === today.getMonth() &&
    inputDate.getFullYear() === today.getFullYear()
  );
}

function isDateEqualYesterday(dateString: string) {
  const yesterday = new Date();
  yesterday.setDate(yesterday.getDate() - 1);

  const inputDate = new Date(dateString);

  return (
    inputDate.getDate() === yesterday.getDate() &&
    inputDate.getMonth() === yesterday.getMonth() &&
    inputDate.getFullYear() === yesterday.getFullYear()
  );
}

export const formatTransactionGroupDate = (date: string) => {
  if (isDateEqualToday(date)) {
    return 'Today';
  } else if (isDateEqualYesterday(date)) {
    return 'Yesterday';
  }
  return formatDate(date, 'MMM D, YYYY');
};
