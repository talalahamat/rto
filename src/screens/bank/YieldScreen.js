
import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import { C, S } from '../../theme';
import { Card, StatCard, KPICard, PageHeader, Btn } from '../../components';
import { DATA, fmtM } from '../../data/mockData';

export default function YieldScreen({ navigation }) {
  const hdfc = DATA.buyers.filter(b => b.bank === 'HDFC');
  return (
    <View style={S.screen}>
      <PageHeader title="Yield Reports" subtitle="Portfolio yield analytics — HDFC Bank" onBack={() => navigation.goBack()} />
      <ScrollView style={{ padding:16 }}>
        <View style={{ flexDirection:'row', gap:10, marginBottom:10 }}>
          <KPICard label="Avg Net Yield" value="10.9%" sub="Above mortgage rate" subColor={C.ok} color={C.ok} style={{ flex:1 }} />
          <KPICard label="Annual Income" value="LKR 6.97M" color={C.info} style={{ flex:1 }} />
        </View>
        <View style={{ flexDirection:'row', gap:10, marginBottom:14 }}>
          <StatCard label="Monthly Interest" value="LKR 580K" style={{ flex:1 }} />
          <StatCard label="SaaS Fee" value="LKR 150K/mo" style={{ flex:1 }} />
        </View>
        <Card>
          <View style={{ flexDirection:'row', justifyContent:'space-between', marginBottom:12 }}>
            <Text style={S.h3}>Yield by CSA</Text>
            <Btn label="Export" type="secondary" size="sm" onPress={() => {}} />
          </View>
          {hdfc.map((b,i) => {
            const ann = b.nextAmt * 12;
            const yld = ((ann / b.propVal) * 100).toFixed(1);
            return (
              <View key={b.id} style={{ paddingVertical:12, borderBottomWidth:i<hdfc.length-1?1:0, borderBottomColor:C.border }}>
                <View style={{ flexDirection:'row', justifyContent:'space-between', marginBottom:4 }}>
                  <Text style={{ fontSize:14, fontWeight:'600' }}>{b.name}</Text>
                  <Text style={{ fontSize:15, fontWeight:'700', color:C.ok }}>{yld}%</Text>
                </View>
                <View style={{ flexDirection:'row', justifyContent:'space-between' }}>
                  <Text style={S.mutedS}>{fmtM(b.propVal)} · Pkg {b.pkg}</Text>
                  <Text style={S.mutedS}>{fmtM(ann)}/yr</Text>
                </View>
              </View>
            );
          })}
        </Card>
        <Card>
          <Text style={[S.h3,{marginBottom:12}]}>Quarterly Trend</Text>
          {[['Q1 2025','10.6%'],['Q2 2025','10.7%'],['Q3 2025','10.8%'],['Q4 2025','10.8%'],['Q1 2026','10.9%']].map(([q,y],i) => (
            <View key={i} style={[S.row,i===4&&S.rowLast]}><Text style={S.rowKey}>{q}</Text><Text style={[S.rowVal,{color:C.ok,fontWeight:'600'}]}>{y}</Text></View>
          ))}
        </Card>
      </ScrollView>
    </View>
  );
}
