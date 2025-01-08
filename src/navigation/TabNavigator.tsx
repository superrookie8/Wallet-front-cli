import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialIcons';

import HomeScreen from '../pages/HomeScreen';
import CreateWalletScreen from '../pages/CreateWallet';
import ImportWalletScreen from '../pages/ImportWallet';
import AccountScreen from '../pages/Account';

const Tab = createBottomTabNavigator();

export function TabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: '#007AFF',
      }}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({color, size}) => (
            <Icon name="home" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="CreateWallet"
        component={CreateWalletScreen}
        options={{
          tabBarIcon: ({color, size}) => (
            <Icon name="add-circle" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="ImportWallet"
        component={ImportWalletScreen}
        options={{
          tabBarIcon: ({color, size}) => (
            <Icon name="file-download" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Account"
        component={AccountScreen}
        options={{
          tabBarIcon: ({color, size}) => (
            <Icon name="account-balance-wallet" size={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
