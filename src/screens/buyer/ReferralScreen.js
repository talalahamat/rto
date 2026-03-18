
import React, { useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity, Share } from 'react-native';
import { C, S } from '../../theme';
import { Card, StatCard, Alert, PageHeader, Badge, Btn, Sheet, Field } from '../../components';

const refs = [
  { name:'Chamara Perera', status:'Applied', date:'2026-02-10', reward:'LKR 7,500', paid:false },
  { name:'Saman Kumara', status:'CSA Active', date:'2025-11-20', reward:'LKR 7,500', paid:true },
];
export default function ReferralScreen({ navigation }) {
  const [newRef, setNewRef] = useState(false);
  const share = () => Share.share({ message:'Join me on A&H Rent To Own! Use my referral link: https://renttoown.lk/ref/PRIYA2024', title:'Rent To Own — A&H Holdings' });
  return (
    <View style={S.screen}>
      <PageHeader title="Referral Programme" subtitle="Earn LKR 7,500 for every CSA referral" onBack={() => navigation.goBack()} />
      <ScrollView style={{ padding:16 }}>
        <Alert type="ok" icon="🎁">You have LKR 7,500 in earned rewards — 1 paid, 1 pending CSA activation.</Alert>
        <View style={{ flexDirection:'row', gap:10, marginBottom:14 }}>
          <StatCard label="Referrals" value={refs.length} style={{ flex:1 }} />
          <StatCard label="Earned" value="LKR 7,500" subColor={C.ok} style={{ flex:1 }} />
          <StatCard label="Pending" value="LKR 7,500" subColor={C.warn} style={{ flex:1 }} />
        </View>
        <Card>
          <Text style={[S.h3,{marginBottom:12}]}>Your Referral Link</Text>
          <View style={{ backgroundColor:C.bg, borderRadius:8, padding:12, marginBottom:12 }}>
            <Text style={{ fontFamily:'monospace', fontSize:12, color:C.nearBlack }}>https://renttoown.lk/ref/PRIYA2024</Text>
          </View>
          <View style={{ flexDirection:'row', gap:8 }}>
            <Btn label="Share Link" icon="📤" onPress={share} style={{ flex:1 }} />
            <Btn label="Copy" type="secondary" onPress={() => {}} style={{ flex:1 }} />
          </View>
        </Card>
        <Card>
          <View style={{ flexDirection:'row', justifyContent:'space-between', alignItems:'center', marginBottom:12 }}>
            <Text style={S.h3}>My Referrals</Text>
            <TouchableOpacity onPress={() => setNewRef(true)}><Text style={{ fontSize:13, color:C.info }}>+ Refer</Text></TouchableOpacity>
          </View>
          {refs.map((r,i) => (
            <View key={i} style={{ padding:12, backgroundColor:C.bg, borderRadius:8, marginBottom:8 }}>
              <View style={{ flexDirection:'row', justifyContent:'space-between', marginBottom:4 }}>
                <Text style={{ fontSize:14, fontWeight:'600' }}>{r.name}</Text>
                <Badge label={r.status} type={r.status==='CSA Active'?'ok':'warn'} />
              </View>
              <View style={{ flexDirection:'row', justifyContent:'space-between', alignItems:'center' }}>
                <Text style={S.mutedS}>Referred: {r.date}</Text>
                <View style={{ flexDirection:'row', alignItems:'center', gap:6 }}>
                  <Text style={{ fontSize:12, fontWeight:'600' }}>{r.reward}</Text>
                  <Badge label={r.paid?'Paid ✓':'Pending'} type={r.paid?'ok':'gray'} />
                </View>
              </View>
            </View>
          ))}
        </Card>
      </ScrollView>
      <Sheet visible={newRef} onClose={() => setNewRef(false)} title="Refer Someone">
        <Field label="Their Name"><View style={S.input}><Text style={{ color:C.light }}>Full name</Text></View></Field>
        <Field label="Their Phone"><View style={S.input}><Text style={{ color:C.light }}>07X XXXXXXX</Text></View></Field>
        <Field label="Their Email"><View style={S.input}><Text style={{ color:C.light }}>email@example.com</Text></View></Field>
        <Btn label="Send Referral" onPress={() => setNewRef(false)} />
      </Sheet>
    </View>
  );
}
