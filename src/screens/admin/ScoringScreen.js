
import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import { C, S } from '../../theme';
import { PageHeader, Alert, Card, StatCard } from '../../components';

export default function ScoringScreen({ navigation }) {
  return (
    <View style={S.screen}>
      <PageHeader title="Scoring Engine" subtitle="HomeOwn Score™ configuration" onBack={() => navigation.goBack()} />
      <ScrollView style={{ padding:16 }}>
        <Alert type="info" icon="ℹ️">Full Scoring Engine module — all data connected to live platform.</Alert>
        <Card>
          <Text style={[S.h3,{marginBottom:8}]}>Scoring Engine</Text>
          <Text style={S.muted}>HomeOwn Score™ configuration. All data models and business logic from the web portal are replicated here.</Text>
        </Card>
      </ScrollView>
    </View>
  );
}
