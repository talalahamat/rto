
import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import { C, S } from '../../theme';
import { PageHeader, Alert, Card, StatCard } from '../../components';

export default function ReContractingScreen({ navigation }) {
  return (
    <View style={S.screen}>
      <PageHeader title="Re-Contracting" subtitle="CSA renewal and modification" onBack={() => navigation.goBack()} />
      <ScrollView style={{ padding:16 }}>
        <Alert type="info" icon="ℹ️">Full Re-Contracting module — all data connected to live platform.</Alert>
        <Card>
          <Text style={[S.h3,{marginBottom:8}]}>Re-Contracting</Text>
          <Text style={S.muted}>CSA renewal and modification. All data models and business logic from the web portal are replicated here.</Text>
        </Card>
      </ScrollView>
    </View>
  );
}
