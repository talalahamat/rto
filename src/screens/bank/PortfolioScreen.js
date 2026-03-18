
import React, { useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { C, S } from '../../theme';
import { Card, StatCard, GradeBadge, Badge, ProgressBar, PageHeader, SearchBar, Sheet } from '../../components';
import { DATA, fmtM } from '../../data/mockData';

export default function PortfolioScreen({ navigation }) {
  const hdfc = DATA.buyers.filter(b => b.bank === 'HDFC');
  const [search, setSearch] = useState('');
  const [selected, setSelected] = useState(null);
  const visible = hdfc.filter(b => b.name.toLowerCase().includes(search.toLowerCase()));
  return (
    <View style={S.screen}>
      <PageHeader title="Portfolio" subtitle="Active CSAs — HDFC Bank Sri Lanka" onBack={() => navigation.goBack()} />
      <View style={{ padding:16, paddingBottom:0 }}>
        <View style={{ flexDirection:'row', gap:10, marginBottom:12 }}>
          <StatCard label="Active CSAs" value={hdfc.length} style={{ flex:1 }} />
          <StatCard label="Portfolio" value={fmtM(hdfc.reduce((s,b)=>s+b.propVal,0))} style={{ flex:1 }} />
          <StatCard label="Monthly" value={fmtM(hdfc.reduce((s,b)=>s+b.nextAmt,0))} style={{ flex:1 }} />
        </View>
        <SearchBar value={search} onChangeText={setSearch} />
      </View>
      <ScrollView style={{ padding:16 }}>
        {visible.map(b => (
          <TouchableOpacity key={b.id} onPress={() => setSelected(b)} activeOpacity={0.85}
            style={[S.card,{ marginBottom:10 }]}>
            <View style={{ flexDirection:'row', justifyContent:'space-between', alignItems:'flex-start', marginBottom:8 }}>
              <View style={{ flex:1 }}>
                <Text style={{ fontSize:14, fontWeight:'700', marginBottom:2 }}>{b.name}</Text>
                <Text style={S.mutedS} numberOfLines={1}>{b.property}</Text>
              </View>
              <View style={{ alignItems:'flex-end', gap:4 }}>
                <GradeBadge grade={b.score} />
                <Badge label={b.status} type={b.status==='Active'?'ok':'err'} />
              </View>
            </View>
            <View style={{ flexDirection:'row', justifyContent:'space-between', marginBottom:6 }}>
              <Text style={S.mutedS}>Pkg {b.pkg} · {b.monthsPaid}/240</Text>
              <Text style={{ fontSize:13, fontWeight:'700' }}>{fmtM(b.nextAmt)}/mo</Text>
            </View>
            <ProgressBar pct={Math.round(b.monthsPaid/240*100)} />
          </TouchableOpacity>
        ))}
      </ScrollView>
      <Sheet visible={!!selected} onClose={() => setSelected(null)} title={selected?.name || ''}>
        {selected && <>
          {[['Property',selected.property],['Value',fmtM(selected.propVal)],['Package',`Package ${selected.pkg}`],['Monthly',fmtM(selected.nextAmt)],['Paid',`${selected.monthsPaid}/240`],['Deposit',fmtM(selected.deposit+selected.depositInterest)],['Status',selected.status]].map(([k,v],i) => (
            <View key={i} style={[S.row,i===6&&S.rowLast]}><Text style={S.rowKey}>{k}</Text><Text style={S.rowVal}>{v}</Text></View>
          ))}
        </>}
      </Sheet>
    </View>
  );
}
