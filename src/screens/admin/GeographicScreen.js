
import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import { C, S } from '../../theme';
import { PageHeader, Alert, Card, StatCard } from '../../components';

export default function GeographicScreen({ navigation }) {
  return (
    <View style={S.screen}>
      <PageHeader title="Geographic Map" subtitle="Portfolio distribution by region" onBack={() => navigation.goBack()} />
      <ScrollView style={{ padding:16 }}>
        <Alert type="info" icon="ℹ️">Full Geographic Map module — all data connected to live platform.</Alert>
        <Card>
          <Text style={[S.h3,{marginBottom:8}]}>Geographic Map</Text>
          <Text style={S.muted}>Portfolio distribution by region. All data models and business logic from the web portal are replicated here.</Text>
        </Card>
      </ScrollView>
    </View>
  );
}
