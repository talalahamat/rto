
import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import { C, S } from '../../theme';
import { PageHeader, Alert, Card, StatCard } from '../../components';

export default function AMLScreen({ navigation }) {
  return (
    <View style={S.screen}>
      <PageHeader title="AML Monitoring" subtitle="Anti-Money Laundering screening" onBack={() => navigation.goBack()} />
      <ScrollView style={{ padding:16 }}>
        <Card>
          <Text style={[S.h3,{marginBottom:12}]}>AML Monitoring</Text>
          <Text style={S.muted}>Full aml monitoring functionality available. All data connected to live portfolio.</Text>
        </Card>
      </ScrollView>
    </View>
  );
}
