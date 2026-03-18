
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Text, View } from 'react-native';
import { C } from '../theme';

import AdminDashboardScreen from '../screens/admin/AdminDashboardScreen';
import BuyersScreen from '../screens/admin/BuyersScreen';
import BuyerDetailScreen from '../screens/admin/BuyerDetailScreen';
import BanksScreen from '../screens/admin/BanksScreen';
import AgentsScreen from '../screens/admin/AgentsScreen';
import TicketsScreen from '../screens/admin/TicketsScreen';
import FinanceScreen from '../screens/admin/FinanceScreen';
import CSARegistryScreen from '../screens/admin/CSARegistryScreen';
import AdminMaintenanceScreen from '../screens/admin/AdminMaintenanceScreen';
import DepositsScreen from '../screens/admin/DepositsScreen';
import ReContractingScreen from '../screens/admin/ReContractingScreen';
import LegalScreen from '../screens/admin/LegalScreen';
import ScoringScreen from '../screens/admin/ScoringScreen';
import AccessControlScreen from '../screens/admin/AccessControlScreen';
import CRMScreen from '../screens/admin/CRMScreen';
import ScoreAuditScreen from '../screens/admin/ScoreAuditScreen';
import CohortAnalysisScreen from '../screens/admin/CohortAnalysisScreen';
import GeographicScreen from '../screens/admin/GeographicScreen';
import ReportBuilderScreen from '../screens/admin/ReportBuilderScreen';
import APIKeysScreen from '../screens/admin/APIKeysScreen';
import WebhooksScreen from '../screens/admin/WebhooksScreen';
import FeatureFlagsScreen from '../screens/admin/FeatureFlagsScreen';
import DataBackupScreen from '../screens/admin/DataBackupScreen';
import ScheduledReportsScreen from '../screens/admin/ScheduledReportsScreen';
import AnalyticsScreen from '../screens/admin/AnalyticsScreen';

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

function AdminTabs() {
  return (
    <Tab.Navigator screenOptions={{ headerShown:false, tabBarStyle:{ height:60, paddingBottom:6, borderTopWidth:1, borderTopColor:C.border }, tabBarShowLabel:false }}>
      <Tab.Screen name="AdminDashboard" component={AdminDashboardScreen} options={{ tabBarIcon:({ focused }) => <TabIcon icon="⚙️" label="Admin" focused={focused} /> }} />
      <Tab.Screen name="Buyers" component={BuyersScreen} options={{ tabBarIcon:({ focused }) => <TabIcon icon="👥" label="Buyers" focused={focused} /> }} />
      <Tab.Screen name="Tickets" component={TicketsScreen} options={{ tabBarIcon:({ focused }) => <TabIcon icon="🎫" label="Tickets" focused={focused} /> }} />
      <Tab.Screen name="Finance" component={FinanceScreen} options={{ tabBarIcon:({ focused }) => <TabIcon icon="💰" label="Finance" focused={focused} /> }} />
      <Tab.Screen name="Agents" component={AgentsScreen} options={{ tabBarIcon:({ focused }) => <TabIcon icon="👷" label="Agents" focused={focused} /> }} />
    </Tab.Navigator>
  );
}

export default function AdminNavigator() {
  return (
    <Stack.Navigator screenOptions={{ headerShown:false }}>
      <Stack.Screen name="AdminTabs" component={AdminTabs} />
      <Stack.Screen name="BuyerDetail" component={BuyerDetailScreen} />
      <Stack.Screen name="Banks" component={BanksScreen} />
      <Stack.Screen name="CSARegistry" component={CSARegistryScreen} />
      <Stack.Screen name="AdminMaintenance" component={AdminMaintenanceScreen} />
      <Stack.Screen name="Deposits" component={DepositsScreen} />
      <Stack.Screen name="ReContracting" component={ReContractingScreen} />
      <Stack.Screen name="Legal" component={LegalScreen} />
      <Stack.Screen name="Scoring" component={ScoringScreen} />
      <Stack.Screen name="AccessControl" component={AccessControlScreen} />
      <Stack.Screen name="CRM" component={CRMScreen} />
      <Stack.Screen name="ScoreAudit" component={ScoreAuditScreen} />
      <Stack.Screen name="CohortAnalysis" component={CohortAnalysisScreen} />
      <Stack.Screen name="Geographic" component={GeographicScreen} />
      <Stack.Screen name="ReportBuilder" component={ReportBuilderScreen} />
      <Stack.Screen name="APIKeys" component={APIKeysScreen} />
      <Stack.Screen name="Webhooks" component={WebhooksScreen} />
      <Stack.Screen name="FeatureFlags" component={FeatureFlagsScreen} />
      <Stack.Screen name="DataBackup" component={DataBackupScreen} />
      <Stack.Screen name="ScheduledReports" component={ScheduledReportsScreen} />
      <Stack.Screen name="Analytics" component={AnalyticsScreen} />
    </Stack.Navigator>
  );
}
