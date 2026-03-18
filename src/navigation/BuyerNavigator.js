
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Text, View } from 'react-native';
import { C } from '../theme';

import DashboardScreen from '../screens/buyer/DashboardScreen';
import PaymentHistoryScreen from '../screens/buyer/PaymentHistoryScreen';
import DocumentsScreen from '../screens/buyer/DocumentsScreen';
import MessagesScreen from '../screens/buyer/MessagesScreen';
import MaintenanceScreen from '../screens/buyer/MaintenanceScreen';
import DepositScreen from '../screens/buyer/DepositScreen';
import InsuranceScreen from '../screens/buyer/InsuranceScreen';
import ScheduleScreen from '../screens/buyer/ScheduleScreen';
import ProfileScreen from '../screens/buyer/ProfileScreen';
import SettingsScreen from '../screens/buyer/SettingsScreen';
import AgreementScreen from '../screens/buyer/AgreementScreen';
import PackagesScreen from '../screens/buyer/PackagesScreen';
import BankOffersScreen from '../screens/buyer/BankOffersScreen';
import RentVsOwnScreen from '../screens/buyer/RentVsOwnScreen';
import ValuationScreen from '../screens/buyer/ValuationScreen';
import ReferralScreen from '../screens/buyer/ReferralScreen';
import CommunityScreen from '../screens/buyer/CommunityScreen';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function TabIcon({ icon, label, focused }) {
  return (
    <View style={{ alignItems:'center', gap:1 }}>
      <Text style={{ fontSize:20, opacity:focused?1:0.4 }}>{icon}</Text>
      <Text style={{ fontSize:9, fontWeight:'600', color:focused?C.nearBlack:C.light }}>{label}</Text>
    </View>
  );
}

function BuyerTabs() {
  return (
    <Tab.Navigator screenOptions={{ headerShown:false, tabBarStyle:{ height:60, paddingBottom:6, borderTopWidth:1, borderTopColor:C.border }, tabBarShowLabel:false }}>
      <Tab.Screen name="Dashboard" component={DashboardScreen} options={{ tabBarIcon:({ focused }) => <TabIcon icon="🏠" label="Home" focused={focused} /> }} />
      <Tab.Screen name="PaymentHistory" component={PaymentHistoryScreen} options={{ tabBarIcon:({ focused }) => <TabIcon icon="💳" label="Payments" focused={focused} /> }} />
      <Tab.Screen name="Messages" component={MessagesScreen} options={{ tabBarIcon:({ focused }) => <TabIcon icon="💬" label="Messages" focused={focused} /> }} />
      <Tab.Screen name="Documents" component={DocumentsScreen} options={{ tabBarIcon:({ focused }) => <TabIcon icon="📁" label="Docs" focused={focused} /> }} />
      <Tab.Screen name="Profile" component={ProfileScreen} options={{ tabBarIcon:({ focused }) => <TabIcon icon="👤" label="Profile" focused={focused} /> }} />
    </Tab.Navigator>
  );
}

export default function BuyerNavigator() {
  return (
    <Stack.Navigator screenOptions={{ headerShown:false }}>
      <Stack.Screen name="BuyerTabs" component={BuyerTabs} />
      <Stack.Screen name="Maintenance" component={MaintenanceScreen} />
      <Stack.Screen name="Deposit" component={DepositScreen} />
      <Stack.Screen name="Insurance" component={InsuranceScreen} />
      <Stack.Screen name="Schedule" component={ScheduleScreen} />
      <Stack.Screen name="Settings" component={SettingsScreen} />
      <Stack.Screen name="Agreement" component={AgreementScreen} />
      <Stack.Screen name="Packages" component={PackagesScreen} />
      <Stack.Screen name="BankOffers" component={BankOffersScreen} />
      <Stack.Screen name="RentVsOwn" component={RentVsOwnScreen} />
      <Stack.Screen name="Valuation" component={ValuationScreen} />
      <Stack.Screen name="Referral" component={ReferralScreen} />
      <Stack.Screen name="Community" component={CommunityScreen} />
    </Stack.Navigator>
  );
}
