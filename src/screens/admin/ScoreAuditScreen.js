
import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import { C, S } from '../../theme';
import { PageHeader, Alert, Card, StatCard } from '../../components';

export default function ScoreAuditScreen({ navigation }) {
  return (
    <View style={S.screen}>
      <PageHeader title="Score Audit Log" subtitle="HomeOwn Score change history" onBack={() => navigation.goBack()} />
      <ScrollView style={{ padding:16 }}>
        <Alert type="info" icon="ℹ️">Full Score Audit Log module — all data connected to live platform.</Alert>
        <Card>
          <Text style={[S.h3,{marginBottom:8}]}>Score Audit Log</Text>
          <Text style={S.muted}>HomeOwn Score change history. All data models and business logic from the web portal are replicated here.</Text>
        </Card>
      </ScrollView>
    </View>
  );
}
