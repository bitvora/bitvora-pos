import React from 'react';
import {Provider as PaperProvider, useTheme} from 'react-native-paper';
import {NavigationContainer, DefaultTheme} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FeatherIcons from 'react-native-vector-icons/Feather';
import AntDesignIcons from 'react-native-vector-icons/AntDesign';
import {NativeBaseProvider} from 'native-base';
import customTheme from './src/lib/theme';
import HomeScreen from './src/screens/home';
import IndexScreen from './src/screens/index/index';
import LoginScreen from './src/screens/login';
import SettingsScreen from './src/screens/settings';
import TransactionsScreen from './src/screens/transactions';
import InvoiceCheckoutScreen from './src/screens/invoice-checkout';

import {ROUTES} from './src/lib/constants';
import {Text, StyleSheet} from 'react-native';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';

import {StoreContextProvider} from './src/context/StoreContext';
import {AppContextProvider} from './src/context/AppContext';

import {SafeAreaProvider} from 'react-native-safe-area-context';
import Toast from 'react-native-toast-message';

const Stack = createNativeStackNavigator();
const Tab = createMaterialBottomTabNavigator();

const renderTabIcon = (
  name: 'home' | 'transactions' | 'settings',
  color: string,
) => {
  switch (name) {
    case 'home':
      return <Ionicons name="grid" color={color} size={21} />;
    case 'settings':
      return <FeatherIcons name="settings" color={color} size={21} />;
    case 'transactions':
      return <AntDesignIcons name="filetext1" color={color} size={21} />;
    default:
  }
};

const renderTabLabel: any = (text: string) => (
  <Text style={styles.tabBarLabel}>{text}</Text>
);

const MainAppScreen = () => {
  return (
    <StoreContextProvider>
      <Tab.Navigator
        activeColor="#FD7014"
        inactiveColor="#374151"
        initialRouteName={ROUTES.SETTINGS}
        barStyle={styles.tabBar}>
        <Tab.Screen
          name={ROUTES.HOME}
          component={HomeScreen}
          options={{
            tabBarLabel: renderTabLabel('Home'),
            tabBarIcon: ({color}) => renderTabIcon('home', color),
          }}
        />

        <Tab.Screen
          name={ROUTES.TRANSACTIONS}
          component={TransactionsScreen}
          options={{
            tabBarLabel: renderTabLabel('Transactions'),
            tabBarIcon: ({color}) => renderTabIcon('transactions', color),
          }}
        />

        <Tab.Screen
          name={ROUTES.SETTINGS}
          component={SettingsScreen}
          options={{
            tabBarLabel: renderTabLabel('Settings'),
            tabBarIcon: ({color}) => renderTabIcon('settings', color),
          }}
        />
      </Tab.Navigator>
    </StoreContextProvider>
  );
};

const queryClient = new QueryClient();

function App(): JSX.Element {
  const theme = useTheme();
  theme.colors.secondaryContainer = 'transparent';

  const MyTheme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      background: 'white',
    },
  };

  return (
    <SafeAreaProvider>
      <QueryClientProvider client={queryClient}>
        <AppContextProvider>
          <NativeBaseProvider theme={customTheme}>
            <PaperProvider>
              <NavigationContainer theme={MyTheme}>
                <Stack.Navigator initialRouteName={ROUTES.APP}>
                  <Stack.Screen
                    name={ROUTES.INDEX}
                    options={{headerShown: false}}
                    component={IndexScreen}
                  />
                  <Stack.Screen
                    name={ROUTES.LOGIN}
                    options={{headerShown: false}}
                    component={LoginScreen}
                  />
                  <Stack.Screen
                    name={ROUTES.APP}
                    options={{headerShown: false}}
                    component={MainAppScreen}
                  />
                  <Stack.Screen
                    name={ROUTES.INVOICE_CHECKOUT}
                    component={InvoiceCheckoutScreen}
                    options={{
                      title: 'Invoice',
                      headerTintColor: 'black',
                      headerBackVisible: true,
                    }}
                  />
                </Stack.Navigator>
              </NavigationContainer>
            </PaperProvider>
          </NativeBaseProvider>
          <Toast />
        </AppContextProvider>
      </QueryClientProvider>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  tabBar: {
    backgroundColor: 'white',
    borderTopWidth: 1,
    borderTopColor: '#E5E7EB',
  },
  tabBarLabel: {
    textAlign: 'center',
    fontSize: 11,
  },
});

export default App;
