
import React from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { C, S } from '../../theme';
import { Card, StatCard, Badge, Alert, PageHeader, TLItem, Btn } from '../../components';
import { DATA, fmtM } from '../../data/mockData';

export default function CollectionsScreen({ navigation }) {
  const mine = DATA.arrears.filter(a => a.bank === 'HDFC');
  return (
    <View style={S.screen}>
      <PageHeader title="Collections" subtitle="Arrears management — HDFC portfolio" onBack={() => navigation.goBack()} />
      <ScrollView style={{ padding:16 }}>
        <View style={{ flexDirection:'row', gap:10, marginBottom:12 }}>
          <StatCard label="Cases" value={mine.length} style={{ flex:1 }} />
          <StatCard label="Total Overdue" value={fmtM(mine.reduce((s,a)=>s+a.amount,0))} style={{ flex:1 }} />
          <StatCard label="Max Days" value={mine.reduce((mx,a)=>Math.max(mx,a.daysOverdue),0)} style={{ flex:1 }} />
        </View>
        {mine.length === 0 ? (
          <Alert type="ok" icon="✅">No arrears cases — all HDFC payments current.</Alert>
        ) : mine.map(a => (
          <Card key={a.id} style={{ marginBottom:10 }}>
            <View style={{ flexDirection:'row', justifyContent:'space-between', marginBottom:8 }}>
              <View>
                <Text style={{ fontSize:15, fontWeight:'700' }}>{a.buyer}</Text>
                <Text style={S.mutedS}>CSA: HDFC · {a.months} month{a.months>1?'s':''} behind</Text>
              </View>
              <View style={{ alignItems:'flex-end' }}>
                <Text style={{ fontSize:18, fontWeight:'700', color:a.daysOverdue>30?C.err:C.warn }}>{a.daysOverdue}d</Text>
                <Badge label={a.status} type={a.status==='Notice Sent'?'warn':'err'} />
              </View>
            </View>
            <View style={[S.row]}><Text style={S.rowKey}>Amount Overdue</Text><Text style={[S.rowVal,{color:C.err,fontWeight:'700'}]}>{fmtM(a.amount)}</Text></View>
            <View style={[S.row,S.rowLast]}><Text style={S.rowKey}>Last Contact</Text><Text style={S.rowVal}>{a.lastContact}</Text></View>
            <Text style={{ fontSize:12, color:C.mid, backgroundColor:C.bg, borderRadius:6, padding:8, marginVertical:8 }}>{a.notes}</Text>
            <View style={{ flexDirection:'row', gap:8 }}>
              <Btn label="Send Reminder" type="secondary" size="sm" style={{ flex:1 }} onPress={() => {}} />
              <Btn label="Escalate" size="sm" style={{ flex:1 }} onPress={() => {}} />
            </View>
          </Card>
        ))}
        <Card>
          <Text style={[S.h3,{marginBottom:12}]}>Escalation Protocol</Text>
          <TLItem date="Day 1–30 — Grace" text="A&H contacts buyer. No penalty." done />
          <TLItem date="Day 31–60 — Notice" text="Formal notice. LKR 2,500 late fee." done />
          <TLItem date="Day 61–90 — Escalation" text="Bank notified. Deposit interest suspended." current />
          <TLItem date="Day 91+ — Legal Action" text="CSA termination initiated. Deposit forfeited." last />
        </Card>
      </ScrollView>
    </View>
  );
}
