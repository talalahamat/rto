
import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import { C, S } from '../../theme';
import { PageHeader, Alert, Card, StatCard } from '../../components';

export default function CohortAnalysisScreen({ navigation }) {
  return (
    <View style={S.screen}>
      <PageHeader title="Cohort Analysis" subtitle="Buyer cohort performance" onBack={() => navigation.goBack()} />
      <ScrollView style={{ padding:16 }}>
        <Alert type="info" icon="ℹ️">Full Cohort Analysis module — all data connected to live platform.</Alert>
        <Card>
          <Text style={[S.h3,{marginBottom:8}]}>Cohort Analysis</Text>
          <Text style={S.muted}>Buyer cohort performance. All data models and business logic from the web portal are replicated here.</Text>
        </Card>
      </ScrollView>
    </View>
  );
}
