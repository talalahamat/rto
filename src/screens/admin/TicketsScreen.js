
import React, { useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { C, S } from '../../theme';
import { Card, StatCard, Badge, PageHeader, SearchBar, Chips, Sheet, Select, Field, Btn } from '../../components';
import { DATA } from '../../data/mockData';

const types = ['All','Open','In Review','Resolved'];
export default function TicketsScreen({ navigation }) {
  const [filter, setFilter] = useState('All');
  const [search, setSearch] = useState('');
  const [detail, setDetail] = useState(null);
  const visible = DATA.tickets
    .filter(t => filter === 'All' ? true : t.status === filter)
    .filter(t => t.subject.toLowerCase().includes(search.toLowerCase()) || t.buyer.toLowerCase().includes(search.toLowerCase()));
  const open = DATA.tickets.filter(t => t.status === 'Open').length;

  return (
    <View style={S.screen}>
      <PageHeader title="Support Tickets" subtitle={`${open} open tickets`} onBack={() => navigation.goBack()} />
      <View style={{ padding:16, paddingBottom:0 }}>
        <View style={{ flexDirection:'row', gap:10, marginBottom:12 }}>
          <StatCard label="Open" value={open} subColor={open>0?C.err:C.ok} style={{ flex:1 }} />
          <StatCard label="In Review" value={DATA.tickets.filter(t=>t.status==='In Review').length} style={{ flex:1 }} />
          <StatCard label="Resolved" value={DATA.tickets.filter(t=>t.status==='Resolved').length} subColor={C.ok} style={{ flex:1 }} />
        </View>
        <SearchBar value={search} onChangeText={setSearch} placeholder="Search tickets…" />
      </View>
      <Chips options={types} selected={filter} onSelect={setFilter} />
      <ScrollView style={{ paddingHorizontal:16 }}>
        {visible.map(t => (
          <TouchableOpacity key={t.id} onPress={() => setDetail(t)} activeOpacity={0.85}>
            <Card style={{ marginBottom:8 }}>
              <View style={{ flexDirection:'row', justifyContent:'space-between', marginBottom:6 }}>
                <Text style={{ fontSize:14, fontWeight:'700', flex:1 }} numberOfLines={1}>{t.subject}</Text>
                <View style={{ alignItems:'flex-end', gap:4, marginLeft:8 }}>
                  <Badge label={t.priority} type={t.priority==='High'?'err':t.priority==='Medium'?'warn':'gray'} />
                  <Badge label={t.status} type={t.status==='Open'?'err':t.status==='In Review'?'warn':'ok'} />
                </View>
              </View>
              <View style={{ flexDirection:'row', justifyContent:'space-between' }}>
                <Text style={S.mutedS}>{t.buyer} · {t.type}</Text>
                <Text style={S.mutedS}>{t.created}</Text>
              </View>
              <Text style={{ fontSize:12, color:t.agent?C.ok:C.err, marginTop:4 }}>{t.agent ? `Assigned: ${t.agent}` : '⚠️ Unassigned'}</Text>
            </Card>
          </TouchableOpacity>
        ))}
      </ScrollView>
      <Sheet visible={!!detail} onClose={() => setDetail(null)} title={detail?.subject || ''}>
        {detail && <>
          {[['Ticket ID',detail.id],['Buyer',detail.buyer],['Type',detail.type],['Priority',detail.priority],['Status',detail.status],['Created',detail.created],['Last Update',detail.lastUpdate],['Assigned To',detail.agent||'Unassigned']].map(([k,v],i) => (
            <View key={i} style={[S.row,i===7&&S.rowLast]}><Text style={S.rowKey}>{k}</Text><Text style={S.rowVal}>{v}</Text></View>
          ))}
          <Field label="Assign To" style={{ marginTop:14 }}>
            <Select value={detail.agent||''} options={['Kasun Bandara','Dilini Fernando','Ruwanthi Perera']} onSelect={() => {}} placeholder="Select agent…" />
          </Field>
          <View style={{ flexDirection:'row', gap:8 }}>
            <Btn label="Mark Resolved" type="success" style={{ flex:1 }} onPress={() => setDetail(null)} />
            <Btn label="Escalate" type="danger" style={{ flex:1 }} onPress={() => setDetail(null)} />
          </View>
        </>}
      </Sheet>
    </View>
  );
}
