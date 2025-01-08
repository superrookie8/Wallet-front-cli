// src/navigation/AppNavigator.tsx
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from '../pages/HomeScreen';
import CreateWalletScreen from '../pages/CreateWallet';
import ImportWalletScreen from '../pages/ImportWallet';
import AccountScreen from '../pages/Account';
import {RootStackParamList} from './types';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {TabNavigator} from './TabNavigator';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator<RootStackParamList>();

function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="MainTabs" component={TabNavigator} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default AppNavigator;
