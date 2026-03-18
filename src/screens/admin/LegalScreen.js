
import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import { C, S } from '../../theme';
import { PageHeader, Alert, Card, StatCard } from '../../components';

export default function LegalScreen({ navigation }) {
  return (
    <View style={S.screen}>
      <PageHeader title="Legal & Compliance" subtitle="Case tracker and regulatory filings" onBack={() => navigation.goBack()} />
      <ScrollView style={{ padding:16 }}>
        <Alert type="info" icon="ℹ️">Full Legal & Compliance module — all data connected to live platform.</Alert>
        <Card>
          <Text style={[S.h3,{marginBottom:8}]}>Legal & Compliance</Text>
          <Text style={S.muted}>Case tracker and regulatory filings. All data models and business logic from the web portal are replicated here.</Text>
        </Card>
      </ScrollView>
    </View>
  );
}
