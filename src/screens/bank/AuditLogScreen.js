
import React, { useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { C, S } from '../../theme';
import { Card, StatCard, PageHeader, SearchBar, Btn } from '../../components';

const logs = [
  { time:'2026-03-14 14:32', action:'Viewed application profile', detail:'APP003 — Malintha Jayakody', ip:'10.0.0.2' },
  { time:'2026-03-14 11:15', action:'Submitted offer', detail:'APP001 — Kavya Mendis — 10.9% yield', ip:'10.0.0.2' },
  { time:'2026-03-13 09:44', action:'Logged in', detail:'Browser: Chrome 122 · Colombo', ip:'10.0.0.2' },
  { time:'2026-03-12 15:50', action:'Downloaded yield report', detail:'February 2026 Yield Report PDF', ip:'10.0.0.2' },
  { time:'2026-03-12 10:30', action:'Updated notification settings', detail:'Enabled auto-offer for Grade A', ip:'10.0.0.2' },
  { time:'2026-03-10 09:12', action:'Exported portfolio data', detail:'Portfolio CSV — 3 CSAs', ip:'10.0.0.2' },
  { time:'2026-03-05 11:00', action:'Triggered collections escalation', detail:'AR001 — Prasad Gunawardena', ip:'10.0.0.2' },
  { time:'2026-03-01 09:30', action:'Viewed monthly report', detail:'February 2026 Collections', ip:'10.0.0.2' },
];
export default function AuditLogScreen({ navigation }) {
  const [search, setSearch] = useState('');
  const visible = logs.filter(l => l.action.toLowerCase().includes(search.toLowerCase()) || l.detail.toLowerCase().includes(search.toLowerCase()));
  return (
    <View style={S.screen}>
      <PageHeader title="Audit Log" subtitle="Complete tamper-proof action log" onBack={() => navigation.goBack()} right={<Btn label="Export" type="secondary" size="sm" onPress={() => {}} style={{ borderColor:'rgba(255,255,255,0.2)' }} />} />
      <View style={{ padding:16, paddingBottom:0 }}>
        <View style={{ flexDirection:'row', gap:10, marginBottom:12 }}>
          <StatCard label="Actions (30d)" value={logs.length} style={{ flex:1 }} />
          <StatCard label="Last Login" value="Today" style={{ flex:1 }} />
          <StatCard label="Sessions" value={1} sub="This session" style={{ flex:1 }} />
        </View>
        <SearchBar value={search} onChangeText={setSearch} placeholder="Search actions…" />
      </View>
      <ScrollView style={{ padding:16 }}>
        {visible.map((l,i) => (
          <View key={i} style={{ paddingVertical:12, borderBottomWidth:i<visible.length-1?1:0, borderBottomColor:C.border }}>
            <View style={{ flexDirection:'row', justifyContent:'space-between', marginBottom:3 }}>
              <Text style={{ fontSize:13, fontWeight:'600' }}>{l.action}</Text>
              <Text style={{ fontFamily:'monospace', fontSize:10, color:C.light }}>{l.ip}</Text>
            </View>
            <Text style={S.mutedS} numberOfLines={1}>{l.detail}</Text>
            <Text style={{ fontFamily:'monospace', fontSize:11, color:C.light, marginTop:2 }}>{l.time}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}
