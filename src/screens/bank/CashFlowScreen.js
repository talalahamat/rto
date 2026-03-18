
import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import { C, S } from '../../theme';
import { Card, StatCard, Alert, PageHeader } from '../../components';
import { DATA, fmtM } from '../../data/mockData';

export default function CashFlowScreen({ navigation }) {
  const hdfc = DATA.buyers.filter(b => b.bank === 'HDFC');
  const baseMonthly = hdfc.reduce((s,b) => s+b.nextAmt, 0);
  const months = ['Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec','Jan','Feb','Mar'];
  const rows = months.map((m,i) => ({ month: m + ' ' + (i<9?'2026':'2027'), collections:baseMonthly, saas:150000, gross:baseMonthly+150000, arrearsProv:i<3?75600:0, net:baseMonthly+150000-(i<3?75600:0) }));
  return (
    <View style={S.screen}>
      <PageHeader title="Cash Flow" subtitle="12-month forward collections forecast" onBack={() => navigation.goBack()} />
      <ScrollView style={{ padding:16 }}>
        <View style={{ flexDirection:'row', gap:10, marginBottom:14 }}>
          <StatCard label="Monthly Collections" value={fmtM(baseMonthly)} style={{ flex:1 }} />
          <StatCard label="SaaS / Month" value="LKR 150K" style={{ flex:1 }} />
        </View>
        <View style={{ flexDirection:'row', gap:10, marginBottom:14 }}>
          <StatCard label="Gross Monthly" value={fmtM(baseMonthly+150000)} style={{ flex:1 }} />
          <StatCard label="Arrears Provision" value={fmtM(151200)} subColor={C.err} style={{ flex:1 }} />
        </View>
        <Card>
          <Text style={[S.h3,{marginBottom:12}]}>Monthly Breakdown</Text>
          {rows.map((r,i) => (
            <View key={i} style={{ paddingVertical:10, borderBottomWidth:i<11?1:0, borderBottomColor:C.border }}>
              <View style={{ flexDirection:'row', justifyContent:'space-between', marginBottom:3 }}>
                <Text style={{ fontSize:13, fontWeight:'600' }}>{r.month}</Text>
                <Text style={{ fontSize:13, fontWeight:'700' }}>{fmtM(r.net)}</Text>
              </View>
              <View style={{ flexDirection:'row', justifyContent:'space-between' }}>
                <Text style={S.mutedS}>Collections: {fmtM(r.collections)} · SaaS: {fmtM(r.saas)}</Text>
                {r.arrearsProv > 0 && <Text style={{ fontSize:11, color:C.err }}>-{fmtM(r.arrearsProv)} prov.</Text>}
              </View>
            </View>
          ))}
          <View style={{ paddingVertical:10, backgroundColor:C.bg, borderRadius:6, marginTop:8 }}>
            <View style={{ flexDirection:'row', justifyContent:'space-between' }}>
              <Text style={{ fontSize:13, fontWeight:'700' }}>12-Month Total</Text>
              <Text style={{ fontSize:13, fontWeight:'700' }}>{fmtM(rows.reduce((s,r)=>s+r.net,0))}</Text>
            </View>
          </View>
        </Card>
      </ScrollView>
    </View>
  );
}
