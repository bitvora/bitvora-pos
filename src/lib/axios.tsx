import axios from 'axios';
import {NODELESS_URL, ROUTES, STORAGE_KEYS} from './constants';
import {NavigationProp} from '@react-navigation/native';
import {getData} from './storage';
import {showToast} from './helpers';

type FetchProps = {
  url: string;
  payload?: any;
  method?: 'GET' | 'POST';
  navigation?: NavigationProp<ReactNavigation.RootParamList>;
};

const useFetch = async ({
  method = 'GET',
  url,
  navigation,
  payload,
}: FetchProps) => {
  const authKey = await getData(STORAGE_KEYS.API_KEY);

  const response = await axios({
    method: method,
    url: `${NODELESS_URL}/api/v1${url}`,
    data: payload,
    headers: {
      Authorization: authKey ? `Bearer ${authKey}` : '',
    },
  });

  if (response?.status === 403) {
    showToast('error', 'Invalid API Token');
    //@ts-ignore
    navigation.navigate(ROUTES.LOGIN);
  }

  return response.data;
};

export const makePostReq = async ({
  url,
  payload,
}: {
  url: string;
  payload: any;
}) => {
  const authKey = await getData(STORAGE_KEYS.API_KEY);

  try {
    const response = await axios.post(`${NODELESS_URL}/api/v1${url}`, payload, {
      headers: {
        Authorization: authKey ? `Bearer ${authKey}` : '',
      },
    });

    return response?.data;
  } catch (err) {
    const error: any = err;
    showToast('error', error?.response?.data?.message);
    throw new Error(error?.response?.data?.message);
  }
};

export default useFetch;
