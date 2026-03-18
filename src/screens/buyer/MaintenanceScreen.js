
import React, { useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { C, S } from '../../theme';
import { Card, StatCard, Badge, Alert, PageHeader, Sheet, Field, Select, Btn } from '../../components';
import { DATA, fmtM } from '../../data/mockData';

export default function MaintenanceScreen({ navigation }) {
  const [newReq, setNewReq] = useState(false);
  const mine = DATA.maintenance.filter(m => m.buyerId === 'B001');
  const open = mine.filter(m => m.status !== 'Completed');

  return (
    <View style={S.screen}>
      <PageHeader title="Maintenance" subtitle="Raise and track maintenance requests" onBack={() => navigation.goBack()} right={
        <TouchableOpacity onPress={() => setNewReq(true)} style={{ backgroundColor:C.white, borderRadius:8, paddingHorizontal:12, paddingVertical:6 }}>
          <Text style={{ fontSize:13, fontWeight:'600', color:C.black }}>+ New</Text>
        </TouchableOpacity>
      } />
      <ScrollView style={{ padding:16 }}>
        {open.length > 0 && <Alert type="warn" icon="⚠️">{open.length} active request(s). Expected completion: 20 March 2026.</Alert>}
        <View style={{ flexDirection:'row', gap:10, marginBottom:14 }}>
          <StatCard label="Open" value={open.length} style={{ flex:1 }} />
          <StatCard label="Completed" value={mine.filter(m=>m.status==='Completed').length} style={{ flex:1 }} />
          <StatCard label="Total Billed" value="LKR 0" style={{ flex:1 }} />
        </View>
        {mine.length === 0 ? (
          <Card><Text style={{ textAlign:'center', color:C.mid, padding:20 }}>No requests yet</Text></Card>
        ) : mine.map(m => (
          <Card key={m.id} style={{ marginBottom:10 }}>
            <View style={{ flexDirection:'row', justifyContent:'space-between', marginBottom:8 }}>
              <View>
                <Text style={{ fontSize:13, fontWeight:'600', color:C.nearBlack }}>{m.type} — {m.desc}</Text>
                <Text style={{ fontSize:11, color:C.mid, marginTop:2 }}>Ref: {m.id} · {m.date}</Text>
              </View>
              <View style={{ alignItems:'flex-end', gap:4 }}>
                <Badge label={m.priority} type={m.priority==='High'?'err':m.priority==='Medium'?'warn':'gray'} />
                <Badge label={m.status} type={m.status==='Completed'?'ok':m.status==='In Progress'?'warn':'gray'} />
              </View>
            </View>
            <Text style={{ fontSize:12, color:C.mid, marginBottom:6 }}>🔧 {m.contractor}</Text>
            <Text style={{ fontSize:12, color:C.nearBlack, backgroundColor:C.bg, borderRadius:6, padding:8 }}>{m.update}</Text>
            {m.billStatus === 'Billed' && (
              <View style={{ flexDirection:'row', justifyContent:'space-between', marginTop:8, paddingTop:8, borderTopWidth:1, borderTopColor:C.border }}>
                <Text style={{ fontSize:12, color:C.mid }}>Billed amount</Text>
                <Text style={{ fontSize:13, fontWeight:'600' }}>{fmtM(m.total)}</Text>
              </View>
            )}
          </Card>
        ))}
      </ScrollView>
      <Sheet visible={newReq} onClose={() => setNewReq(false)} title="New Maintenance Request">
        <Field label="Issue Type" required>
          <Select value="" options={['Plumbing — Pipe/Tap','Electrical — Wiring','Electrical — AC','Structural','Joinery — Door/Window','Pest Control','General Repair']} onSelect={() => {}} placeholder="Select type…" />
        </Field>
        <Field label="Priority">
          {[['🔴 High','Safety/habitability risk'],['🟡 Medium','Property still usable'],['🟢 Low','Minor issue']].map(([p,d],i) => (
            <TouchableOpacity key={i} style={{ flexDirection:'row', alignItems:'center', gap:10, padding:10, borderWidth:1, borderColor:i===0?C.nearBlack:C.border, borderRadius:8, marginBottom:6, backgroundColor:i===0?C.bg:C.white }}>
              <Text style={{ fontSize:13, fontWeight:'600' }}>{p}</Text>
              <Text style={{ fontSize:12, color:C.mid }}>{d}</Text>
            </TouchableOpacity>
          ))}
        </Field>
        <Field label="Description" required><View style={[S.input,{minHeight:80}]}><Text style={{ color:C.light }}>Describe the issue clearly…</Text></View></Field>
        <Field label="Preferred Appointment">
          <Select value="" options={['Any time (Mon–Fri, 8am–5pm)','Morning only (8am–12pm)','Afternoon only (1pm–5pm)','Saturday (9am–1pm)']} onSelect={() => {}} />
        </Field>
        <Btn label="Submit Request" onPress={() => setNewReq(false)} />
      </Sheet>
    </View>
  );
}
