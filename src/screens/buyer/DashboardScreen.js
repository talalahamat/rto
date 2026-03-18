
import React from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { C, S } from '../../theme';
import { Card, StatCard, Alert, ProgressBar, TLItem, KPICard } from '../../components';
import { DATA, fmtM } from '../../data/mockData';

export default function DashboardScreen({ navigation }) {
  const b = DATA.buyers[0];
  const pct = Math.round((b.monthsPaid / 240) * 100);
  const unread = DATA.messages.filter(m => !m.read && m.sender !== 'me').length;
  const actions = [
    { icon:'💳', label:'Payment History', screen:'PaymentHistory' },
    { icon:'📁', label:'Documents',       screen:'Documents' },
    { icon:'💬', label:`Messages${unread>0?` (${unread})`:''}`, screen:'Messages' },
    { icon:'🛡️', label:'Life Insurance',  screen:'Insurance' },
    { icon:'🔧', label:'Maintenance',     screen:'Maintenance' },
    { icon:'📅', label:'Schedule',        screen:'Schedule' },
  ];
  return (
    <ScrollView style={S.screen} showsVerticalScrollIndicator={false}>
      <View style={{ backgroundColor:C.black, paddingTop:56, paddingHorizontal:16, paddingBottom:20 }}>
        <Text style={{ fontSize:11, color:'rgba(255,255,255,0.4)', letterSpacing:2, textTransform:'uppercase', marginBottom:3 }}>Welcome back</Text>
        <Text style={{ fontFamily:'Georgia', fontSize:26, color:C.white, fontWeight:'400', marginBottom:2 }}>{b.name}</Text>
        <Text style={{ fontSize:12, color:'rgba(255,255,255,0.4)' }}>{b.property}</Text>
        <View style={{ marginTop:14 }}>
          <View style={{ flexDirection:'row', justifyContent:'space-between', marginBottom:5 }}>
            <Text style={{ fontSize:12, color:'rgba(255,255,255,0.5)', fontWeight:'600' }}>Ownership Progress</Text>
            <Text style={{ fontSize:12, color:'rgba(255,255,255,0.8)', fontWeight:'700' }}>{pct}% ({b.monthsPaid}/240)</Text>
          </View>
          <View style={{ height:4, backgroundColor:'rgba(255,255,255,0.12)', borderRadius:2 }}>
            <View style={{ height:4, backgroundColor:C.white, borderRadius:2, width:`${pct}%` }} />
          </View>
        </View>
      </View>
      <View style={{ padding:16 }}>
        <View style={{ flexDirection:'row', gap:10, marginBottom:10 }}>
          <StatCard label="Next Payment" value={fmtM(b.nextAmt)} sub={`Due ${b.nextPay}`} style={{ flex:1 }} />
          <StatCard label="Deposit" value={fmtM(b.deposit+b.depositInterest)} sub={`+${fmtM(b.depositInterest)} interest`} subColor={C.ok} style={{ flex:1 }} />
        </View>
        <View style={{ flexDirection:'row', gap:10, marginBottom:12 }}>
          <KPICard label="Score" value={`${b.score} (${b.scoreVal})`} sub="Excellent" subColor={C.ok} color={C.ok} style={{ flex:1 }} />
          <KPICard label="Bank Partner" value={b.bank} sub="Active CSA" color={C.info} style={{ flex:1 }} />
        </View>
        <Alert type="ok" icon="🏠">On track! You will own your home in March 2044.</Alert>
        <Card>
          <Text style={[S.h3,{marginBottom:12}]}>Quick Actions</Text>
          {actions.map((a,i) => (
            <TouchableOpacity key={i} onPress={() => navigation.navigate(a.screen)}
              style={{ flexDirection:'row', alignItems:'center', paddingVertical:11, borderBottomWidth:i<actions.length-1?1:0, borderBottomColor:C.border }}>
              <Text style={{ fontSize:18, marginRight:12 }}>{a.icon}</Text>
              <Text style={{ fontSize:14, fontWeight:'500', color:C.nearBlack, flex:1 }}>{a.label}</Text>
              <Text style={{ color:C.light, fontSize:16 }}>›</Text>
            </TouchableOpacity>
          ))}
        </Card>
        <Card>
          <Text style={[S.h3,{marginBottom:12}]}>Score Breakdown</Text>
          {[['CRIB Report','30%',90],['Income Stability','20%',85],['Affordability','15%',80],['Escalation','10%',88],['Utility History','10%',92],['Household','10%',85],['Location','5%',78]].map(([l,w,v]) => (
            <View key={l} style={{ marginBottom:9 }}>
              <View style={{ flexDirection:'row', justifyContent:'space-between', marginBottom:3 }}>
                <Text style={{ fontSize:12, fontWeight:'500' }}>{l} <Text style={{ color:C.mid }}>({w})</Text></Text>
                <Text style={{ fontSize:12, fontWeight:'700' }}>{v}/100</Text>
              </View>
              <ProgressBar pct={v} />
            </View>
          ))}
        </Card>
        <Card>
          <Text style={[S.h3,{marginBottom:12}]}>Recent Activity</Text>
          <TLItem date="Mar 1, 2026" text="Payment LKR 75,600 received ✓" done />
          <TLItem date="Mar 10, 2026" text="Maintenance request raised" done />
          <TLItem date="Mar 14, 2026" text="Message from Kasun Bandara" done />
          <TLItem date="Apr 1, 2026" text="Next payment due — LKR 75,600" current last />
        </Card>
      </View>
    </ScrollView>
  );
}
