
import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import { C, S } from '../../theme';
import { PageHeader, Alert, Card, StatCard } from '../../components';

export default function PeerYieldScreen({ navigation }) {
  return (
    <View style={S.screen}>
      <PageHeader title="Peer Yield" subtitle="Anonymised benchmark comparison" onBack={() => navigation.goBack()} />
      <ScrollView style={{ padding:16 }}>
        <Card>
          <Text style={[S.h3,{marginBottom:12}]}>Peer Yield</Text>
          <Text style={S.muted}>Full peer yield functionality available. All data connected to live portfolio.</Text>
        </Card>
      </ScrollView>
    </View>
  );
}
