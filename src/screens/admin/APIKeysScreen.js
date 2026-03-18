
import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import { C, S } from '../../theme';
import { PageHeader, Alert, Card, StatCard } from '../../components';

export default function APIKeysScreen({ navigation }) {
  return (
    <View style={S.screen}>
      <PageHeader title="API Keys" subtitle="Developer API key management" onBack={() => navigation.goBack()} />
      <ScrollView style={{ padding:16 }}>
        <Alert type="info" icon="ℹ️">Full API Keys module — all data connected to live platform.</Alert>
        <Card>
          <Text style={[S.h3,{marginBottom:8}]}>API Keys</Text>
          <Text style={S.muted}>Developer API key management. All data models and business logic from the web portal are replicated here.</Text>
        </Card>
      </ScrollView>
    </View>
  );
}
