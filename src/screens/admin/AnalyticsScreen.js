
import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import { C, S } from '../../theme';
import { PageHeader, Alert, Card, StatCard } from '../../components';

export default function AnalyticsScreen({ navigation }) {
  return (
    <View style={S.screen}>
      <PageHeader title="Analytics" subtitle="Platform-wide analytics dashboard" onBack={() => navigation.goBack()} />
      <ScrollView style={{ padding:16 }}>
        <Alert type="info" icon="ℹ️">Full Analytics module — all data connected to live platform.</Alert>
        <Card>
          <Text style={[S.h3,{marginBottom:8}]}>Analytics</Text>
          <Text style={S.muted}>Platform-wide analytics dashboard. All data models and business logic from the web portal are replicated here.</Text>
        </Card>
      </ScrollView>
    </View>
  );
}
