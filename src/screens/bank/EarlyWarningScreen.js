
import React from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { C, S } from '../../theme';
import { Card, StatCard, Badge, Alert, PageHeader, ToggleRow, Btn } from '../../components';
import { DATA } from '../../data/mockData';

const warnings = [
  { buyer:'Prasad Gunawardena', type:'Payment Miss', severity:'Critical', change:'2 missed — 45 days overdue', score:71, prev:76 },
  { buyer:'Roshan Fernando', type:'Score Drift', severity:'Medium', change:'Score dropped 4pts', score:62, prev:66 },
  { buyer:'Nimal Perera', type:'Income Change', severity:'Low', change:'Employer change reported', score:74, prev:74 },
];
export default function EarlyWarningScreen({ navigation }) {
  return (
    <View style={S.screen}>
      <PageHeader title="Early Warning" subtitle="Proactive risk signals — HDFC portfolio" onBack={() => navigation.goBack()} />
      <ScrollView style={{ padding:16 }}>
        <Alert type="warn" icon="⚠️">3 buyers showing risk signals. 1 critical, 1 medium, 1 low.</Alert>
        <View style={{ flexDirection:'row', gap:10, marginBottom:14 }}>
          {[['Critical',1,'err'],['Medium',1,'warn'],['Low',1,'ok'],['Healthy',1,'ok']].map(([l,v,t],i) => (
            <StatCard key={i} label={l} value={v} style={{ flex:1 }} />
          ))}
        </View>
        <Card>
          <Text style={[S.h3,{marginBottom:12}]}>Active Risk Signals</Text>
          {warnings.map((w,i) => (
            <View key={i} style={{ paddingVertical:12, borderBottomWidth:i<warnings.length-1?1:0, borderBottomColor:C.border }}>
              <View style={{ flexDirection:'row', justifyContent:'space-between', marginBottom:6 }}>
                <Text style={{ fontSize:14, fontWeight:'700' }}>{w.buyer}</Text>
                <Badge label={w.severity} type={w.severity==='Critical'?'err':w.severity==='Medium'?'warn':'gray'} />
              </View>
              <Text style={{ fontSize:13, fontWeight:'500', marginBottom:2 }}>{w.type}</Text>
              <Text style={S.mutedS}>{w.change}</Text>
              <View style={{ flexDirection:'row', justifyContent:'space-between', marginTop:6, alignItems:'center' }}>
                <Text style={{ fontSize:12, color:w.score<w.prev?C.err:C.mid }}>{w.prev} → {w.score} {w.score<w.prev?'↓':'→'}</Text>
                <Btn label="Escalate" size="sm" onPress={() => {}} />
              </View>
            </View>
          ))}
        </Card>
        <Card>
          <Text style={[S.h3,{marginBottom:12}]}>Alert Configuration</Text>
          <ToggleRow label="Payment Miss" sub="Alert after 1 missed payment" value={true} onValueChange={() => {}} />
          <ToggleRow label="Score Drift" sub="Alert if score drops 3+ points in 30 days" value={true} onValueChange={() => {}} />
          <ToggleRow label="Income Change" sub="Alert on employer flag" value={true} onValueChange={() => {}} />
          <ToggleRow label="Affordability Breach" sub="Alert if payment >45% of income" value={true} onValueChange={() => {}} />
        </Card>
      </ScrollView>
    </View>
  );
}
