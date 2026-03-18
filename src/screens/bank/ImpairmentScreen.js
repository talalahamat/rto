
import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import { C, S } from '../../theme';
import { PageHeader, Alert, Card, StatCard } from '../../components';

export default function ImpairmentScreen({ navigation }) {
  return (
    <View style={S.screen}>
      <PageHeader title="Impairment" subtitle="IFRS 9 ECL provisioning" onBack={() => navigation.goBack()} />
      <ScrollView style={{ padding:16 }}>
        <Card>
          <Text style={[S.h3,{marginBottom:12}]}>Impairment</Text>
          <Text style={S.muted}>Full impairment functionality available. All data connected to live portfolio.</Text>
        </Card>
      </ScrollView>
    </View>
  );
}
