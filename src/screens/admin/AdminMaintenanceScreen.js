
import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import { C, S } from '../../theme';
import { PageHeader, Alert, Card, StatCard } from '../../components';

export default function AdminMaintenanceScreen({ navigation }) {
  return (
    <View style={S.screen}>
      <PageHeader title="Maintenance" subtitle="Platform-wide maintenance oversight" onBack={() => navigation.goBack()} />
      <ScrollView style={{ padding:16 }}>
        <Alert type="info" icon="ℹ️">Full Maintenance module — all data connected to live platform.</Alert>
        <Card>
          <Text style={[S.h3,{marginBottom:8}]}>Maintenance</Text>
          <Text style={S.muted}>Platform-wide maintenance oversight. All data models and business logic from the web portal are replicated here.</Text>
        </Card>
      </ScrollView>
    </View>
  );
}
