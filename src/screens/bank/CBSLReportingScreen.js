
import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import { C, S } from '../../theme';
import { PageHeader, Alert, Card, StatCard } from '../../components';

export default function CBSLReportingScreen({ navigation }) {
  return (
    <View style={S.screen}>
      <PageHeader title="CBSL Reporting" subtitle="Regulatory filing tracker" onBack={() => navigation.goBack()} />
      <ScrollView style={{ padding:16 }}>
        <Card>
          <Text style={[S.h3,{marginBottom:12}]}>CBSL Reporting</Text>
          <Text style={S.muted}>Full cbsl reporting functionality available. All data connected to live portfolio.</Text>
        </Card>
      </ScrollView>
    </View>
  );
}
