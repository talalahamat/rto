
import React, { useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity, Modal } from 'react-native';
import { C, S } from '../../theme';
import { Card, GradeBadge, Badge, Alert, PageHeader, Btn, Field, Select, SearchBar } from '../../components';
import { DATA, fmtM } from '../../data/mockData';

export default function ApplicationsScreen({ navigation }) {
  const [apps, setApps] = useState(DATA.pendingApps.map(a => ({ ...a, decided:false, decision:null })));
  const [detail, setDetail] = useState(null);
  const [search, setSearch] = useState('');
  const visible = apps.filter(a => a.name.toLowerCase().includes(search.toLowerCase()));

  const decide = (id, dec) => {
    setApps(prev => prev.map(a => a.id === id ? { ...a, decided:true, decision:dec } : a));
    setDetail(null);
  };

  return (
    <View style={S.screen}>
      <PageHeader title="Applications" subtitle={`${apps.filter(a=>!a.decided).length} pending your offer`} onBack={() => navigation.goBack()} />
      <View style={{ padding:16, paddingBottom:0 }}>
        <Alert type="info" icon="ℹ️">Grade A buyers are typically claimed within 48 hours.</Alert>
        <SearchBar value={search} onChangeText={setSearch} placeholder="Search name or NIC…" />
      </View>
      <ScrollView style={{ padding:16 }}>
        {visible.map(a => (
          <Card key={a.id} style={{ marginBottom:10, opacity:a.decided?0.6:1 }}>
            <View style={{ flexDirection:'row', justifyContent:'space-between', alignItems:'flex-start', marginBottom:10 }}>
              <View style={{ flex:1 }}>
                <View style={{ flexDirection:'row', alignItems:'center', gap:8, marginBottom:2 }}>
                  <Text style={{ fontSize:15, fontWeight:'700' }}>{a.name}</Text>
                  <GradeBadge grade={a.score} />
                </View>
                <Text style={S.mutedS}>{a.property} · {fmtM(a.propVal)}</Text>
                <Text style={S.mutedS}>{a.employer} · {fmtM(a.income)}/mo</Text>
              </View>
              <Text style={{ fontSize:11, color:C.light }}>Applied {a.applied}</Text>
            </View>
            {a.decided ? (
              <Badge label={a.decision === 'offer' ? 'Offer Submitted ✓' : a.decision === 'counter' ? 'Counter-Offer Sent' : 'Passed'} type={a.decision==='offer'?'ok':a.decision==='counter'?'warn':'gray'} />
            ) : (
              <View style={{ flexDirection:'row', gap:8 }}>
                <Btn label="Make Offer" size="sm" onPress={() => { setDetail({ app:a, mode:'offer' }); }} style={{ flex:1 }} />
                <Btn label="Counter" type="secondary" size="sm" onPress={() => { setDetail({ app:a, mode:'counter' }); }} style={{ flex:1 }} />
                <Btn label="Pass" type="danger" size="sm" onPress={() => decide(a.id, 'pass')} style={{ flex:1 }} />
              </View>
            )}
          </Card>
        ))}
      </ScrollView>
      <Modal visible={!!detail} transparent animationType="slide" onRequestClose={() => setDetail(null)}>
        <TouchableOpacity style={{ flex:1, backgroundColor:'rgba(0,0,0,0.4)' }} onPress={() => setDetail(null)} />
        <View style={{ backgroundColor:C.white, borderTopLeftRadius:20, borderTopRightRadius:20, padding:24 }}>
          {detail && <>
            <Text style={[S.h2,{marginBottom:4}]}>{detail.mode === 'offer' ? 'Make Offer' : 'Counter-Offer'}</Text>
            <Text style={[S.mutedS,{marginBottom:16}]}>{detail.app.name} — {detail.app.property}</Text>
            <Field label="Net Yield">
              <Select value="10.9%" options={['10.9%','10.5%','10.2%','9.8%']} onSelect={() => {}} />
            </Field>
            <Field label="Processing Time">
              <Select value="5 working days" options={['3 working days','5 working days','7 working days']} onSelect={() => {}} />
            </Field>
            <Field label="Arrears Grace Period">
              <Select value="90 days" options={['30 days','60 days','90 days']} onSelect={() => {}} />
            </Field>
            <View style={{ flexDirection:'row', gap:10, marginTop:8 }}>
              <Btn label="Cancel" type="secondary" style={{ flex:1 }} onPress={() => setDetail(null)} />
              <Btn label={detail.mode==='offer'?'Submit Offer':'Send Counter'} style={{ flex:1 }} onPress={() => decide(detail.app.id, detail.mode==='offer'?'offer':'counter')} />
            </View>
          </>}
        </View>
      </Modal>
    </View>
  );
}
