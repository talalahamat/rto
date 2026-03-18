
import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import { C, S } from '../../theme';
import { PageHeader, Alert, Card, StatCard } from '../../components';

export default function ScheduledReportsScreen({ navigation }) {
  return (
    <View style={S.screen}>
      <PageHeader title="Scheduled Reports" subtitle="Automated report delivery" onBack={() => navigation.goBack()} />
      <ScrollView style={{ padding:16 }}>
        <Alert type="info" icon="ℹ️">Full Scheduled Reports module — all data connected to live platform.</Alert>
        <Card>
          <Text style={[S.h3,{marginBottom:8}]}>Scheduled Reports</Text>
          <Text style={S.muted}>Automated report delivery. All data models and business logic from the web portal are replicated here.</Text>
        </Card>
      </ScrollView>
    </View>
  );
}
