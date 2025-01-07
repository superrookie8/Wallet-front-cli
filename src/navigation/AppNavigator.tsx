// src/navigation/AppNavigator.tsx
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from '../pages/HomeScreen';
import CreateWalletScreen from '../pages/CreateWallet';
import ImportWalletScreen from '../pages/ImportWallet';
import AccountScreen from '../pages/Account';
import {RootStackParamList} from './types';

const Stack = createNativeStackNavigator<RootStackParamList>();

function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen
          name="CreateWallet"
          component={CreateWalletScreen}
          options={{title: 'Create Wallet'}}
        />
        <Stack.Screen
          name="ImportWallet"
          component={ImportWalletScreen}
          options={{title: 'Import Wallet'}}
        />
        <Stack.Screen name="Account" component={AccountScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default AppNavigator;
