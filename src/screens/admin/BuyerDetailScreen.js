
import React from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { C, S } from '../../theme';
import { Card, PageHeader, GradeBadge, StatusBadge, Badge, Btn, ProgressBar, Alert } from '../../components';
import { DATA, fmtM } from '../../data/mockData';

export default function BuyerDetailScreen({ navigation, route }) {
  const b = DATA.buyers.find(x => x.id === route?.params?.id) || DATA.buyers[0];
  const payments = DATA.payments.filter(p => true);
  return (
    <View style={S.screen}>
      <PageHeader title={b.name} subtitle={`${b.id} — ${b.status}`} onBack={() => navigation.goBack()} />
      <ScrollView style={{ padding:16 }}>
        <Alert type={b.status==='Active'?'ok':b.status==='Arrears'?'err':'warn'} icon={b.status==='Active'?'✅':'⚠️'}>{b.status === 'Active' ? 'All payments current. On track.' : b.status === 'Arrears' ? 'Buyer is in arrears — contact required.' : 'Application pending bank offer.'}</Alert>
        <Card>
          <View style={{ flexDirection:'row', alignItems:'center', gap:12, marginBottom:14 }}>
            <View style={{ width:52, height:52, backgroundColor:C.nearBlack, borderRadius:26, alignItems:'center', justifyContent:'center' }}>
              <Text style={{ fontSize:16, fontWeight:'700', color:C.white }}>{b.name.split(' ').map(n=>n[0]).join('')}</Text>
            </View>
            <View style={{ flex:1 }}>
              <Text style={{ fontSize:17, fontWeight:'700' }}>{b.name}</Text>
              <Text style={S.mutedS}>{b.email} · {b.phone}</Text>
            </View>
            <View style={{ alignItems:'flex-end', gap:4 }}>
              <GradeBadge grade={b.score} />
              <StatusBadge status={b.status} />
            </View>
          </View>
          {[['NIC',b.nic],['Employer',b.employer],['Monthly Income',fmtM(b.income)],['Employment',b.empType],['Agent',b.agent||'—'],['Joined',b.joinDate]].map(([k,v],i) => (
            <View key={i} style={[S.row,i===5&&S.rowLast]}><Text style={S.rowKey}>{k}</Text><Text style={S.rowVal}>{v}</Text></View>
          ))}
        </Card>
        <Card>
          <Text style={[S.h3,{marginBottom:12}]}>CSA Details</Text>
          <View style={{ marginBottom:10 }}>
            <View style={{ flexDirection:'row', justifyContent:'space-between', marginBottom:4 }}>
              <Text style={{ fontSize:12, fontWeight:'600' }}>Ownership Progress</Text>
              <Text style={{ fontSize:12, fontWeight:'700' }}>{Math.round(b.monthsPaid/240*100)}%</Text>
            </View>
            <ProgressBar pct={Math.round(b.monthsPaid/240*100)} />
            <Text style={{ fontSize:11, color:C.mid, marginTop:4 }}>{b.monthsPaid}/240 months</Text>
          </View>
          {[['Property',b.property||'—'],['Pkg',`Package ${b.pkg}`],['Bank',b.bank],['Monthly',fmtM(b.nextAmt)],['Next Due',b.nextPay],['Deposit',fmtM(b.deposit+b.depositInterest)]].map(([k,v],i) => (
            <View key={i} style={[S.row,i===5&&S.rowLast]}><Text style={S.rowKey}>{k}</Text><Text style={S.rowVal}>{v}</Text></View>
          ))}
        </Card>
        <View style={{ flexDirection:'row', gap:10 }}>
          <Btn label="📞 Contact" type="secondary" style={{ flex:1 }} onPress={() => {}} />
          <Btn label="✉️ Message" type="secondary" style={{ flex:1 }} onPress={() => {}} />
          <Btn label="⚠️ Escalate" type="danger" style={{ flex:1 }} onPress={() => {}} />
        </View>
      </ScrollView>
    </View>
  );
}
