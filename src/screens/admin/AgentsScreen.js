
import React, { useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { C, S } from '../../theme';
import { Card, StatCard, Badge, PageHeader, Sheet, ProgressBar, Btn } from '../../components';
import { DATA, fmtM } from '../../data/mockData';

export default function AgentsScreen({ navigation }) {
  const [selected, setSelected] = useState(null);
  return (
    <View style={S.screen}>
      <PageHeader title="Agents" subtitle="A&H field agent management" onBack={() => navigation.goBack()} />
      <ScrollView style={{ padding:16 }}>
        <View style={{ flexDirection:'row', gap:10, marginBottom:14 }}>
          <StatCard label="Total Agents" value={DATA.agents.length} style={{ flex:1 }} />
          <StatCard label="Monthly Target" value={DATA.agents.reduce((s,a)=>s+a.monthlyTarget,0)} style={{ flex:1 }} />
          <StatCard label="Actual" value={DATA.agents.reduce((s,a)=>s+a.monthlyActual,0)} style={{ flex:1 }} />
        </View>
        {DATA.agents.map(a => (
          <TouchableOpacity key={a.id} onPress={() => setSelected(a)} activeOpacity={0.85}>
            <Card style={{ marginBottom:10 }}>
              <View style={{ flexDirection:'row', alignItems:'center', gap:12, marginBottom:12 }}>
                <View style={{ width:44, height:44, backgroundColor:C.nearBlack, borderRadius:22, alignItems:'center', justifyContent:'center' }}>
                  <Text style={{ fontSize:14, fontWeight:'700', color:C.white }}>{a.name.split(' ').map(n=>n[0]).join('')}</Text>
                </View>
                <View style={{ flex:1 }}>
                  <Text style={{ fontSize:15, fontWeight:'700' }}>{a.name}</Text>
                  <Text style={S.mutedS} numberOfLines={1}>{a.territory}</Text>
                </View>
                <View style={{ alignItems:'center' }}>
                  <Text style={{ fontSize:18, fontWeight:'700' }}>⭐ {a.rating}</Text>
                </View>
              </View>
              <View style={{ flexDirection:'row', gap:10, marginBottom:10 }}>
                {[['Monthly',`${a.monthlyActual}/${a.monthlyTarget}`],['YTD',`${a.ytdActual}/${a.ytdTarget}`],['Total',a.totalOriginated],['Comm.',fmtM(a.commissionYTD)]].map(([l,v],i) => (
                  <View key={i} style={{ flex:1, backgroundColor:C.bg, borderRadius:8, padding:8, alignItems:'center' }}>
                    <Text style={{ fontSize:10, fontWeight:'600', color:C.light, textTransform:'uppercase' }}>{l}</Text>
                    <Text style={{ fontSize:12, fontWeight:'700', marginTop:2 }}>{v}</Text>
                  </View>
                ))}
              </View>
              <View>
                <View style={{ flexDirection:'row', justifyContent:'space-between', marginBottom:3 }}>
                  <Text style={{ fontSize:11, color:C.mid }}>Monthly target</Text>
                  <Text style={{ fontSize:11, fontWeight:'600' }}>{Math.round(a.monthlyActual/a.monthlyTarget*100)}%</Text>
                </View>
                <ProgressBar pct={Math.round(a.monthlyActual/a.monthlyTarget*100)} />
              </View>
            </Card>
          </TouchableOpacity>
        ))}
      </ScrollView>
      <Sheet visible={!!selected} onClose={() => setSelected(null)} title={selected?.name || ''}>
        {selected && <>
          {[['Agent ID',selected.id],['Territory',selected.territory],['Active Buyers',selected.buyers],['Joined',selected.joined],['Monthly Target',selected.monthlyTarget],['Monthly Actual',selected.monthlyActual],['YTD Commission',fmtM(selected.commissionYTD)]].map(([k,v],i) => (
            <View key={i} style={[S.row,i===6&&S.rowLast]}><Text style={S.rowKey}>{k}</Text><Text style={S.rowVal}>{v}</Text></View>
          ))}
          <View style={{ flexDirection:'row', gap:8, marginTop:12 }}>
            <Btn label="📞 Call" type="secondary" style={{ flex:1 }} onPress={() => {}} />
            <Btn label="📋 Full Report" type="secondary" style={{ flex:1 }} onPress={() => setSelected(null)} />
          </View>
        </>}
      </Sheet>
    </View>
  );
}
