
import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import { C, S } from '../../theme';
import { Card, StatCard, KPICard, PageHeader, Btn } from '../../components';
import { DATA, fmtM } from '../../data/mockData';

export default function FinanceScreen({ navigation }) {
  const activeCSAs = DATA.buyers.filter(b => b.status === 'Active');
  const totalMonthly = activeCSAs.reduce((s,b) => s+b.nextAmt, 0);
  const mgmt = Math.round(totalMonthly * 0.20);
  const saas = DATA.banks.filter(b=>b.active).reduce((s,b)=>s+b.saas,0);
  const maint = DATA.maintenance.filter(m=>m.billStatus==='Billed').reduce((s,m)=>s+m.markup,0);
  const onboard = DATA.buyers.filter(b=>b.joinDate>='2026-01').length * 7500;
  const total = mgmt + saas + maint + onboard;

  return (
    <View style={S.screen}>
      <PageHeader title="Finance & P&L" subtitle="Revenue dashboard — A&H Holdings" onBack={() => navigation.goBack()} right={<Btn label="Export" type="secondary" size="sm" onPress={() => {}} style={{ borderColor:'rgba(255,255,255,0.2)' }} />} />
      <ScrollView style={{ padding:16 }}>
        <View style={{ flexDirection:'row', gap:10, marginBottom:10 }}>
          <KPICard label="Monthly Revenue" value={fmtM(total)} sub="All streams" subColor={C.ok} color={C.ok} style={{ flex:1 }} />
          <KPICard label="Active CSAs" value={activeCSAs.length} color={C.info} style={{ flex:1 }} />
        </View>
        <View style={{ flexDirection:'row', gap:10, marginBottom:14 }}>
          <StatCard label="Annualised" value={fmtM(total*12)} style={{ flex:2 }} />
          <StatCard label="YTD" value={fmtM(total*3)} style={{ flex:1 }} />
        </View>
        <Card>
          <Text style={[S.h3,{marginBottom:12}]}>Revenue Streams</Text>
          {[
            ['Management Fee (20%)','Monthly',fmtM(mgmt)],
            ['SaaS — Bank Licensing','Monthly',fmtM(saas)],
            ['Maintenance Markup (15%)','Per-event',fmtM(maint)],
            ['Buyer Onboarding Fees','One-time',fmtM(onboard)],
            ['Bank Origination (est.)','One-time','—'],
          ].map(([k,freq,v],i) => (
            <View key={i} style={[S.row,i===4&&S.rowLast]}>
              <View>
                <Text style={S.rowKey}>{k}</Text>
                <Text style={{ fontSize:10, color:C.light }}>{freq}</Text>
              </View>
              <Text style={[S.rowVal,{fontWeight:'700'}]}>{v}</Text>
            </View>
          ))}
          <View style={{ paddingVertical:12, backgroundColor:C.bg, borderRadius:6, marginTop:8 }}>
            <View style={{ flexDirection:'row', justifyContent:'space-between', paddingHorizontal:10 }}>
              <Text style={{ fontSize:14, fontWeight:'700' }}>Total Monthly</Text>
              <Text style={{ fontSize:14, fontWeight:'700', color:C.ok }}>{fmtM(total)}</Text>
            </View>
          </View>
        </Card>
        <Card>
          <Text style={[S.h3,{marginBottom:12}]}>5-Year Projection</Text>
          {[[200,800000],[400,1600000],[800,3200000],[1200,4800000],[1960,7800000]].map(([csas,rev],i) => (
            <View key={i} style={[S.row,i===4&&S.rowLast]}>
              <Text style={S.rowKey}>Year {i+1} · {csas} CSAs</Text>
              <Text style={[S.rowVal,{fontWeight:'700',color:C.ok}]}>{fmtM(rev)}/mo</Text>
            </View>
          ))}
        </Card>
      </ScrollView>
    </View>
  );
}
