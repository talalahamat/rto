
import React from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { C, S } from '../../theme';
import { Card, StatCard, Alert, PageHeader, Badge, Btn } from '../../components';
import { DATA, fmtM } from '../../data/mockData';

export default function AgreementScreen({ navigation }) {
  const b = DATA.buyers[0];
  return (
    <View style={S.screen}>
      <PageHeader title="My Agreement" subtitle="Conditional Sale Agreement — RTO-CSA-2024-B001" onBack={() => navigation.goBack()} />
      <ScrollView style={{ padding:16 }}>
        <Alert type="ok" icon="✅">CSA executed, notarially attested and registered. Legal title held by HDFC Bank until final payment.</Alert>
        <View style={{ flexDirection:'row', gap:10, marginBottom:14 }}>
          <StatCard label="CSA Reference" value="RTO-CSA-2024-B001" style={{ flex:2 }} />
          <StatCard label="Term" value="20 Years" sub="Ends Mar 2044" style={{ flex:1 }} />
        </View>
        <Card>
          <Text style={[S.h3,{marginBottom:12}]}>Key Terms</Text>
          {[['Buyer','Priya Jayawardena'],['Title Holder','HDFC Bank Sri Lanka'],['Property Manager','A&H Holdings (Pvt) Ltd'],['Property Address',b.propAddr],['Down Payment',fmtM(b.deposit)],['Year 1 Monthly',fmtM(70000)],['Annual Escalation','8% per annum'],['Deposit Rate','7% p.a. compounding'],['Life Insurance','Activates Year 10'],].map(([k,v],i) => (
            <View key={i} style={[S.row,i===8&&S.rowLast]}><Text style={S.rowKey}>{k}</Text><Text style={[S.rowVal,{flex:2}]} numberOfLines={1}>{v}</Text></View>
          ))}
        </Card>
        <Card>
          <Text style={[S.h3,{marginBottom:12}]}>Execution Status</Text>
          {[['Buyer Signature','Signed ✓','ok'],['HDFC Bank','Signed ✓','ok'],['A&H Holdings','Signed ✓','ok'],['Notarial Attestation','Completed ✓','ok'],['Land Registry','Registered ✓','ok']].map(([k,v,t],i) => (
            <View key={i} style={[S.row,i===4&&S.rowLast]}>
              <Text style={S.rowKey}>{k}</Text>
              <Badge label={v} type={t} />
            </View>
          ))}
        </Card>
        <Btn label="📄 Download CSA PDF" type="secondary" onPress={() => {}} style={{ marginBottom:12 }} />
        <Btn label="📁 Document Vault" type="secondary" onPress={() => navigation.navigate('Documents')} />
      </ScrollView>
    </View>
  );
}
