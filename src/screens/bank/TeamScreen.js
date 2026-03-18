
import React, { useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { C, S } from '../../theme';
import { Card, StatCard, Badge, PageHeader, Sheet, Field, Select, Btn, ToggleRow } from '../../components';

const staff = [
  { id:'T001', name:'Ranjith Mendis', role:'Portfolio Manager', access:'Full Bank Portal', last:'Today', status:'Active' },
  { id:'T002', name:'Chandrika Weerasekera', role:'Credit Analyst', access:'Applications Only', last:'Mar 13', status:'Active' },
  { id:'T003', name:'Nishantha Kumara', role:'Collections Officer', access:'Collections Only', last:'Mar 14', status:'Active' },
  { id:'T004', name:'Priyanka Jayawardena', role:'Read-Only Viewer', access:'Dashboard & Reports', last:'Feb 28', status:'Inactive' },
];
export default function TeamScreen({ navigation }) {
  const [addSheet, setAddSheet] = useState(false);
  return (
    <View style={S.screen}>
      <PageHeader title="Team" subtitle="HDFC portal users and access control" onBack={() => navigation.goBack()} right={
        <TouchableOpacity onPress={() => setAddSheet(true)} style={{ backgroundColor:C.white, borderRadius:8, paddingHorizontal:12, paddingVertical:6 }}>
          <Text style={{ fontSize:13, fontWeight:'600', color:C.black }}>+ Add</Text>
        </TouchableOpacity>
      } />
      <ScrollView style={{ padding:16 }}>
        <View style={{ flexDirection:'row', gap:10, marginBottom:14 }}>
          <StatCard label="Members" value={staff.length} style={{ flex:1 }} />
          <StatCard label="Active" value={staff.filter(s=>s.status==='Active').length} subColor={C.ok} style={{ flex:1 }} />
          <StatCard label="Inactive" value={staff.filter(s=>s.status==='Inactive').length} style={{ flex:1 }} />
        </View>
        {staff.map(s => (
          <Card key={s.id} style={{ marginBottom:10 }}>
            <View style={{ flexDirection:'row', alignItems:'center', gap:12, marginBottom:10 }}>
              <View style={{ width:40, height:40, backgroundColor:C.nearBlack, borderRadius:20, alignItems:'center', justifyContent:'center' }}>
                <Text style={{ fontSize:13, fontWeight:'700', color:C.white }}>{s.name.split(' ').map(n=>n[0]).join('')}</Text>
              </View>
              <View style={{ flex:1 }}>
                <Text style={{ fontSize:14, fontWeight:'600' }}>{s.name}</Text>
                <Text style={S.mutedS}>{s.role}</Text>
              </View>
              <Badge label={s.status} type={s.status==='Active'?'ok':'gray'} />
            </View>
            <View style={{ flexDirection:'row', justifyContent:'space-between', marginBottom:8 }}>
              <Text style={S.mutedS}>Access: {s.access}</Text>
              <Text style={S.mutedS}>Last login: {s.last}</Text>
            </View>
            <View style={{ flexDirection:'row', gap:8 }}>
              <Btn label="Edit" type="secondary" size="sm" style={{ flex:1 }} onPress={() => {}} />
              <Btn label={s.status==='Active'?'Revoke':'Restore'} type={s.status==='Active'?'danger':'secondary'} size="sm" style={{ flex:1 }} onPress={() => {}} />
            </View>
          </Card>
        ))}
      </ScrollView>
      <Sheet visible={addSheet} onClose={() => setAddSheet(false)} title="Add Team Member">
        <Field label="Full Name" required><View style={S.input}><Text style={{ color:C.light }}>Full name</Text></View></Field>
        <Field label="Email" required><View style={S.input}><Text style={{ color:C.light }}>email@hdfc.lk</Text></View></Field>
        <Field label="Role"><View style={S.input}><Text style={{ color:C.light }}>e.g. Credit Analyst</Text></View></Field>
        <Field label="Access Level">
          <Select value="" options={['Full Bank Portal','Applications Only','Collections Only','Dashboard & Reports','Read-Only']} onSelect={() => {}} />
        </Field>
        <ToggleRow label="Require 2FA on login" sub="Recommended for all staff" value={true} onValueChange={() => {}} />
        <Btn label="Add Member" onPress={() => setAddSheet(false)} style={{ marginTop:8 }} />
      </Sheet>
    </View>
  );
}
