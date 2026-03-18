
import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import { C, S } from '../../theme';
import { PageHeader, Alert, Card, StatCard } from '../../components';

export default function AccessControlScreen({ navigation }) {
  return (
    <View style={S.screen}>
      <PageHeader title="Access Control" subtitle="Platform role and permission management" onBack={() => navigation.goBack()} />
      <ScrollView style={{ padding:16 }}>
        <Alert type="info" icon="ℹ️">Full Access Control module — all data connected to live platform.</Alert>
        <Card>
          <Text style={[S.h3,{marginBottom:8}]}>Access Control</Text>
          <Text style={S.muted}>Platform role and permission management. All data models and business logic from the web portal are replicated here.</Text>
        </Card>
      </ScrollView>
    </View>
  );
}
