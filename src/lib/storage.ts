import EncryptedStorage from 'react-native-encrypted-storage';

export const setData = async (key: string, payload: any) => {
  try {
    await EncryptedStorage.setItem(key, JSON.stringify(payload));
  } catch (error) {}
};

export const getData = async (key: string) => {
  try {
    const data = await EncryptedStorage.getItem(key);

    if (data) {
      return JSON.parse(data);
    }
  } catch (error) {
    return null;
  }
};

export const deleteData = async (key: string) => {
  try {
    await EncryptedStorage.removeItem(key);
  } catch (error) {}
};

export const clearStorage = async () => {
  try {
    await EncryptedStorage.clear();
  } catch (error) {}
};
