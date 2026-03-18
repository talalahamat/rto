
import React from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { C, S } from '../../theme';
import { Card, StatCard, KPICard, Badge, GradeBadge, Alert, PageHeader, ProgressBar } from '../../components';
import { DATA, fmtM } from '../../data/mockData';

export default function BankDashboardScreen({ navigation }) {
  const hdfc = DATA.buyers.filter(b => b.bank === 'HDFC');
  const total = hdfc.reduce((s,b) => s+b.propVal, 0);
  const monthly = hdfc.reduce((s,b) => s+b.nextAmt, 0);
  return (
    <ScrollView style={S.screen}>
      <View style={{ backgroundColor:C.black, paddingTop:56, paddingHorizontal:16, paddingBottom:20 }}>
        <Text style={{ fontSize:11, color:'rgba(255,255,255,0.4)', letterSpacing:2, textTransform:'uppercase', marginBottom:3 }}>HDFC Bank Sri Lanka</Text>
        <Text style={{ fontFamily:'Georgia', fontSize:26, color:C.white }}>Portfolio Dashboard</Text>
        <Text style={{ fontSize:12, color:'rgba(255,255,255,0.4)', marginTop:2 }}>Rent To Own Partner Portal</Text>
      </View>
      <View style={{ padding:16 }}>
        <View style={{ flexDirection:'row', gap:10, marginBottom:10 }}>
          <StatCard label="Active CSAs" value={hdfc.length} style={{ flex:1 }} />
          <StatCard label="Portfolio Value" value={fmtM(total)} style={{ flex:1 }} />
        </View>
        <View style={{ flexDirection:'row', gap:10, marginBottom:12 }}>
          <KPICard label="Net Yield" value="10.9%" sub="Above mortgage rate" subColor={C.ok} color={C.ok} style={{ flex:1 }} />
          <KPICard label="Monthly Income" value={fmtM(monthly)} sub="All CSAs" color={C.info} style={{ flex:1 }} />
        </View>
        <Alert type="warn" icon="⚠️">1 arrears case: Prasad G — 45 days overdue, LKR 151,200</Alert>
        <Card>
          <View style={{ flexDirection:'row', justifyContent:'space-between', alignItems:'center', marginBottom:12 }}>
            <Text style={S.h3}>Applications (5 pending)</Text>
            <TouchableOpacity onPress={() => navigation.navigate('Applications')}>
              <Text style={{ fontSize:13, color:C.info }}>Review all →</Text>
            </TouchableOpacity>
          </View>
          {DATA.pendingApps.slice(0,3).map(a => (
            <View key={a.id} style={{ paddingVertical:10, borderBottomWidth:1, borderBottomColor:C.border }}>
              <View style={{ flexDirection:'row', justifyContent:'space-between', alignItems:'center', marginBottom:4 }}>
                <Text style={{ fontSize:14, fontWeight:'600' }}>{a.name}</Text>
                <GradeBadge grade={a.score} />
              </View>
              <View style={{ flexDirection:'row', justifyContent:'space-between' }}>
                <Text style={S.mutedS}>{a.property} · {fmtM(a.propVal)}</Text>
                <TouchableOpacity onPress={() => navigation.navigate('Applications')}><Text style={{ fontSize:12, color:C.info }}>Offer →</Text></TouchableOpacity>
              </View>
            </View>
          ))}
        </Card>
        <Card>
          <Text style={[S.h3,{marginBottom:12}]}>Active Portfolio</Text>
          {hdfc.map(b => (
            <View key={b.id} style={{ paddingVertical:10, borderBottomWidth:1, borderBottomColor:C.border }}>
              <View style={{ flexDirection:'row', justifyContent:'space-between', alignItems:'center', marginBottom:3 }}>
                <Text style={{ fontSize:13, fontWeight:'600' }}>{b.name}</Text>
                <View style={{ flexDirection:'row', gap:6, alignItems:'center' }}>
                  <GradeBadge grade={b.score} />
                  <Badge label={b.status} type={b.status==='Active'?'ok':'err'} />
                </View>
              </View>
              <View style={{ flexDirection:'row', justifyContent:'space-between' }}>
                <Text style={S.mutedS}>Pkg {b.pkg} · {b.monthsPaid}/240</Text>
                <Text style={{ fontSize:13, fontWeight:'600' }}>{fmtM(b.nextAmt)}/mo</Text>
              </View>
              <ProgressBar pct={Math.round(b.monthsPaid/240*100)} style={{ marginTop:5 }} />
            </View>
          ))}
        </Card>
      </View>
    </ScrollView>
  );
}
