
import React, { useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { C, S } from '../../theme';
import { Card, StatCard, KPICard, Badge, PageHeader, Sheet, Field, Select, Btn } from '../../components';
import { DATA, fmtM } from '../../data/mockData';

export default function BanksScreen({ navigation }) {
  const [addSheet, setAddSheet] = useState(false);
  const active = DATA.banks.filter(b => b.active);
  return (
    <View style={S.screen}>
      <PageHeader title="Banks" subtitle="Partner bank management" onBack={() => navigation.goBack()} right={
        <TouchableOpacity onPress={() => setAddSheet(true)} style={{ backgroundColor:C.white, borderRadius:8, paddingHorizontal:12, paddingVertical:6 }}>
          <Text style={{ fontSize:13, fontWeight:'600', color:C.black }}>+ Add</Text>
        </TouchableOpacity>
      } />
      <ScrollView style={{ padding:16 }}>
        <View style={{ flexDirection:'row', gap:10, marginBottom:14 }}>
          <StatCard label="Active Partners" value={active.length} style={{ flex:1 }} />
          <StatCard label="Monthly SaaS" value={fmtM(active.reduce((s,b)=>s+b.saas,0))} style={{ flex:1 }} />
          <StatCard label="Active CSAs" value={active.reduce((s,b)=>s+b.portfolio,0)} style={{ flex:1 }} />
        </View>
        {DATA.banks.map(b => (
          <Card key={b.id} style={{ marginBottom:10, opacity:b.active?1:0.5 }}>
            <View style={{ flexDirection:'row', justifyContent:'space-between', alignItems:'flex-start', marginBottom:10 }}>
              <View style={{ flexDirection:'row', alignItems:'center', gap:10, flex:1 }}>
                <View style={{ width:44, height:44, backgroundColor:b.active?C.nearBlack:C.bg, borderRadius:8, alignItems:'center', justifyContent:'center', borderWidth:1, borderColor:C.border }}>
                  <Text style={{ fontSize:11, fontWeight:'700', color:b.active?C.white:C.mid }}>{b.code}</Text>
                </View>
                <View style={{ flex:1 }}>
                  <Text style={{ fontSize:14, fontWeight:'700' }}>{b.name}</Text>
                  <Text style={S.mutedS}>{b.contact || 'Not onboarded'}</Text>
                </View>
              </View>
              <Badge label={b.active?'Active':'Prospect'} type={b.active?'ok':'gray'} />
            </View>
            {b.active && (
              <View style={{ flexDirection:'row', gap:10 }}>
                {[['Portfolio',b.portfolio],['Yield',`${b.yield}%`],['SaaS',fmtM(b.saas)]].map(([l,v],i) => (
                  <View key={i} style={{ flex:1, backgroundColor:C.bg, borderRadius:8, padding:8, alignItems:'center' }}>
                    <Text style={{ fontSize:10, fontWeight:'600', color:C.light, textTransform:'uppercase' }}>{l}</Text>
                    <Text style={{ fontSize:14, fontWeight:'700', marginTop:2 }}>{v}</Text>
                  </View>
                ))}
              </View>
            )}
            {!b.active && (
              <Btn label="Begin Onboarding" type="secondary" size="sm" onPress={() => {}} />
            )}
          </Card>
        ))}
      </ScrollView>
      <Sheet visible={addSheet} onClose={() => setAddSheet(false)} title="Add Bank Partner">
        <Field label="Bank Name" required><View style={S.input}><Text style={{ color:C.light }}>Full bank name</Text></View></Field>
        <Field label="Bank Code" required><View style={S.input}><Text style={{ color:C.light }}>e.g. NSB</Text></View></Field>
        <Field label="Contact Name"><View style={S.input}><Text style={{ color:C.light }}>Primary contact</Text></View></Field>
        <Field label="Contact Email"><View style={S.input}><Text style={{ color:C.light }}>email@bank.lk</Text></View></Field>
        <Btn label="Add Partner" onPress={() => setAddSheet(false)} />
      </Sheet>
    </View>
  );
}
