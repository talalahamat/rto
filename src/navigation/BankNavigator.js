
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Text, View } from 'react-native';
import { C } from '../theme';

import BankDashboardScreen from '../screens/bank/BankDashboardScreen';
import ApplicationsScreen from '../screens/bank/ApplicationsScreen';
import PortfolioScreen from '../screens/bank/PortfolioScreen';
import CollectionsScreen from '../screens/bank/CollectionsScreen';
import CashFlowScreen from '../screens/bank/CashFlowScreen';
import YieldScreen from '../screens/bank/YieldScreen';
import KYCScreen from '../screens/bank/KYCScreen';
import AuditLogScreen from '../screens/bank/AuditLogScreen';
import TeamScreen from '../screens/bank/TeamScreen';
import EarlyWarningScreen from '../screens/bank/EarlyWarningScreen';
import StressTestScreen from '../screens/bank/StressTestScreen';
import AMLScreen from '../screens/bank/AMLScreen';
import ImpairmentScreen from '../screens/bank/ImpairmentScreen';
import PeerYieldScreen from '../screens/bank/PeerYieldScreen';
import CBSLReportingScreen from '../screens/bank/CBSLReportingScreen';
import PortfolioMapScreen from '../screens/bank/PortfolioMapScreen';
import BankSettingsScreen from '../screens/bank/BankSettingsScreen';

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

function BankTabs() {
  return (
    <Tab.Navigator screenOptions={{ headerShown:false, tabBarStyle:{ height:60, paddingBottom:6, borderTopWidth:1, borderTopColor:C.border }, tabBarShowLabel:false }}>
      <Tab.Screen name="BankDashboard" component={BankDashboardScreen} options={{ tabBarIcon:({ focused }) => <TabIcon icon="📊" label="Dashboard" focused={focused} /> }} />
      <Tab.Screen name="Applications" component={ApplicationsScreen} options={{ tabBarIcon:({ focused }) => <TabIcon icon="📋" label="Apps" focused={focused} /> }} />
      <Tab.Screen name="Portfolio" component={PortfolioScreen} options={{ tabBarIcon:({ focused }) => <TabIcon icon="🏦" label="Portfolio" focused={focused} /> }} />
      <Tab.Screen name="Collections" component={CollectionsScreen} options={{ tabBarIcon:({ focused }) => <TabIcon icon="⚠️" label="Arrears" focused={focused} /> }} />
      <Tab.Screen name="KYC" component={KYCScreen} options={{ tabBarIcon:({ focused }) => <TabIcon icon="🪪" label="KYC" focused={focused} /> }} />
    </Tab.Navigator>
  );
}

export default function BankNavigator() {
  return (
    <Stack.Navigator screenOptions={{ headerShown:false }}>
      <Stack.Screen name="BankTabs" component={BankTabs} />
      <Stack.Screen name="CashFlow" component={CashFlowScreen} />
      <Stack.Screen name="Yield" component={YieldScreen} />
      <Stack.Screen name="AuditLog" component={AuditLogScreen} />
      <Stack.Screen name="Team" component={TeamScreen} />
      <Stack.Screen name="EarlyWarning" component={EarlyWarningScreen} />
      <Stack.Screen name="StressTest" component={StressTestScreen} />
      <Stack.Screen name="AML" component={AMLScreen} />
      <Stack.Screen name="Impairment" component={ImpairmentScreen} />
      <Stack.Screen name="PeerYield" component={PeerYieldScreen} />
      <Stack.Screen name="CBSLReporting" component={CBSLReportingScreen} />
      <Stack.Screen name="PortfolioMap" component={PortfolioMapScreen} />
      <Stack.Screen name="BankSettings" component={BankSettingsScreen} />
    </Stack.Navigator>
  );
}
