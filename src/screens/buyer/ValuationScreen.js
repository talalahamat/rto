
import React from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { C, S } from '../../theme';
import { Card, StatCard, Alert, PageHeader, ProgressBar } from '../../components';
import { fmtM } from '../../data/mockData';

export default function ValuationScreen({ navigation }) {
  const propVal = 12500000;
  const milestones = [2024,2026,2030,2034,2044].map(yr => ({
    yr, val: Math.round(propVal * Math.pow(1.06, yr-2024)), label: yr === 2024 ? 'Purchase' : yr === 2026 ? 'Now (est.)' : yr === 2034 ? 'Year 10 (est.)' : yr === 2044 ? 'Completion (est.)' : `Year ${yr-2024} (est.)`
  }));
  return (
    <View style={S.screen}>
      <PageHeader title="Property Valuation" subtitle="Market appreciation tracker" onBack={() => navigation.goBack()} />
      <ScrollView style={{ padding:16 }}>
        <View style={{ flexDirection:'row', gap:10, marginBottom:14 }}>
          <StatCard label="Purchase Value" value="LKR 12.5M" sub="Mar 2024" style={{ flex:1 }} />
          <StatCard label="Current Est." value={fmtM(Math.round(propVal*1.1236))} sub="+6% p.a." subColor={C.ok} style={{ flex:1 }} />
        </View>
        <Card>
          <Text style={[S.h3,{marginBottom:12}]}>Value Milestones</Text>
          {milestones.map((m,i) => (
            <View key={i} style={[S.row,i===milestones.length-1&&S.rowLast]}>
              <View>
                <Text style={{ fontSize:13, fontWeight:'600' }}>{m.yr}</Text>
                <Text style={S.mutedS}>{m.label}</Text>
              </View>
              <Text style={{ fontSize:14, fontWeight:'700', color:i===milestones.length-1?C.ok:C.nearBlack }}>{fmtM(m.val)}</Text>
            </View>
          ))}
          <Alert type="ok" icon="📈">At 6% annual appreciation, your property will be worth {fmtM(Math.round(propVal*Math.pow(1.06,20)))} when you take full ownership in 2044.</Alert>
        </Card>
        <Card>
          <Text style={[S.h3,{marginBottom:12}]}>Annual Survey Reports</Text>
          {[['2026 Survey','Scheduled Apr 1, 2026','warn'],['2025 Survey','Completed — Good condition','ok'],['2024 Survey','Completed — Good at handover','ok']].map(([yr,notes,t],i) => (
            <View key={i} style={{ paddingVertical:10, borderBottomWidth:i<2?1:0, borderBottomColor:C.border }}>
              <View style={{ flexDirection:'row', justifyContent:'space-between', marginBottom:4 }}>
                <Text style={{ fontSize:13, fontWeight:'600' }}>{yr}</Text>
                <Text style={{ fontSize:11, color:t==='ok'?C.ok:C.warn, fontWeight:'600' }}>{t==='ok'?'Completed ✓':'Scheduled'}</Text>
              </View>
              <Text style={S.mutedS}>{notes}</Text>
              {t==='ok' && <TouchableOpacity><Text style={{ fontSize:12, color:C.info, marginTop:4 }}>Download Report →</Text></TouchableOpacity>}
            </View>
          ))}
        </Card>
      </ScrollView>
    </View>
  );
}
