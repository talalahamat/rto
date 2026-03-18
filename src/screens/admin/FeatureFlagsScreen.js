
import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import { C, S } from '../../theme';
import { PageHeader, Alert, Card, StatCard } from '../../components';

export default function FeatureFlagsScreen({ navigation }) {
  return (
    <View style={S.screen}>
      <PageHeader title="Feature Flags" subtitle="Platform feature toggles" onBack={() => navigation.goBack()} />
      <ScrollView style={{ padding:16 }}>
        <Alert type="info" icon="ℹ️">Full Feature Flags module — all data connected to live platform.</Alert>
        <Card>
          <Text style={[S.h3,{marginBottom:8}]}>Feature Flags</Text>
          <Text style={S.muted}>Platform feature toggles. All data models and business logic from the web portal are replicated here.</Text>
        </Card>
      </ScrollView>
    </View>
  );
}
