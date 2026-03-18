
import React, { useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity, FlatList } from 'react-native';
import { C, S } from '../../theme';
import { Card, Alert, PageHeader } from '../../components';
import { getPkgASchedule, getPkgBSchedule, fmtM } from '../../data/mockData';

export default function PackagesScreen({ navigation }) {
  const [tab, setTab] = useState('compare');
  const schA = getPkgASchedule();
  const schB = getPkgBSchedule();
  const totalA = schA.reduce((s,r)=>s+r.annual,0)+2000000;
  const totalB = schB.reduce((s,r)=>s+r.annual,0)+1000000;

  return (
    <View style={S.screen}>
      <PageHeader title="Packages" subtitle="Compare Package A and Package B" onBack={() => navigation.goBack()} />
      <ScrollView style={{ padding:16 }}>
        <Alert type="ok" icon="✅">You are currently on Package B — Gradual Escalation with HDFC Bank.</Alert>
        {[['B',75600,'LKR 1M deposit',totalB,'Gradual Escalation','Starts LKR 70K, +8% p.a.',true],['A',140000,'LKR 2M deposit',totalA,'Accelerate','Starts LKR 140K, decreasing by milestone',false]].map(([pkg,mo,dep,tot,name,sub,active]) => (
          <View key={pkg} style={{ borderWidth:active?2:1, borderColor:active?C.nearBlack:C.border, borderRadius:14, padding:20, marginBottom:12, backgroundColor:active?C.black:C.white }}>
            {active && <View style={{ backgroundColor:C.okBg, paddingHorizontal:10, paddingVertical:3, borderRadius:100, alignSelf:'flex-start', marginBottom:10 }}><Text style={{ fontSize:11, fontWeight:'600', color:C.ok }}>Your Package</Text></View>}
            <Text style={{ fontFamily:'Georgia', fontSize:22, color:active?C.white:C.nearBlack, marginBottom:2 }}>Package {pkg}</Text>
            <Text style={{ fontSize:11, color:active?'rgba(255,255,255,0.4)':'rgba(0,0,0,0.4)', textTransform:'uppercase', letterSpacing:2, marginBottom:14 }}>{name}</Text>
            <Text style={{ fontFamily:'Georgia', fontSize:28, color:active?C.white:C.nearBlack }}>{fmtM(mo)}<Text style={{ fontSize:13, fontWeight:'400' }}>/mo start</Text></Text>
            <Text style={{ fontSize:13, color:active?'rgba(255,255,255,0.5)':C.mid, marginBottom:16 }}>{sub}</Text>
            {[[dep,'Down payment'],[fmtM(tot),'20-year total']].map(([v,l],i) => (
              <View key={i} style={{ flexDirection:'row', gap:8, marginBottom:7 }}>
                <Text style={{ fontSize:13, color:active?'rgba(255,255,255,0.5)':C.light }}>✓</Text>
                <Text style={{ fontSize:13, color:active?'rgba(255,255,255,0.8)':C.nearBlack }}>{v} — {l}</Text>
              </View>
            ))}
          </View>
        ))}
        <Card>
          <Text style={[S.h3,{marginBottom:12}]}>Year-by-Year Comparison</Text>
          {schA.map((a,i) => {
            const b = schB[i];
            return (
              <View key={i} style={{ flexDirection:'row', paddingVertical:9, borderBottomWidth:i<19?1:0, borderBottomColor:C.border, backgroundColor:i===0?'#F0FDF4':C.white, borderRadius:i===0?6:0 }}>
                <Text style={{ flex:1, fontSize:12, fontWeight:'600' }}>Yr {a.year}</Text>
                <Text style={{ flex:1.5, fontSize:12, color:C.mid }}>{fmtM(a.monthly)}</Text>
                <Text style={{ flex:1.5, fontSize:12, color:C.ok, fontWeight:'600' }}>{fmtM(b.monthly)}</Text>
              </View>
            );
          })}
        </Card>
      </ScrollView>
    </View>
  );
}
