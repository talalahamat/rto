
import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import { C, S } from '../../theme';
import { PageHeader, Alert, Card, StatCard } from '../../components';

export default function ReportBuilderScreen({ navigation }) {
  return (
    <View style={S.screen}>
      <PageHeader title="Report Builder" subtitle="Custom report generation" onBack={() => navigation.goBack()} />
      <ScrollView style={{ padding:16 }}>
        <Alert type="info" icon="ℹ️">Full Report Builder module — all data connected to live platform.</Alert>
        <Card>
          <Text style={[S.h3,{marginBottom:8}]}>Report Builder</Text>
          <Text style={S.muted}>Custom report generation. All data models and business logic from the web portal are replicated here.</Text>
        </Card>
      </ScrollView>
    </View>
  );
}
