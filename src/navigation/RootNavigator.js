
import React, { useContext } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { AppContext } from '../context/AppContext';
import PortalSelectScreen from '../screens/auth/PortalSelectScreen';
import LoginScreen from '../screens/auth/LoginScreen';
import BuyerNavigator from './BuyerNavigator';
import BankNavigator from './BankNavigator';
import AdminNavigator from './AdminNavigator';

const Stack = createStackNavigator();

export default function RootNavigator() {
  const { portal } = useContext(AppContext);

  return (
    <Stack.Navigator screenOptions={{ headerShown:false }}>
      <Stack.Screen name="PortalSelect" component={PortalSelectScreen} />
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Main" component={
        portal === 'bank' ? BankNavigator :
        portal === 'admin' ? AdminNavigator :
        BuyerNavigator
      } />
    </Stack.Navigator>
  );
}
