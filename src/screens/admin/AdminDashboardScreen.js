
import React from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { C, S } from '../../theme';
import { Card, StatCard, KPICard, Alert, Badge, PageHeader } from '../../components';
import { DATA, fmtM } from '../../data/mockData';

export default function AdminDashboardScreen({ navigation }) {
  const activeCSAs = DATA.buyers.filter(b => b.status === 'Active').length;
  const totalPortfolio = DATA.buyers.filter(b => b.status === 'Active').reduce((s,b) => s+b.propVal, 0);
  const totalMonthly = DATA.buyers.filter(b => b.status === 'Active').reduce((s,b) => s+b.nextAmt, 0);
  const arrears = DATA.arrears.length;
  const tickets = DATA.tickets.filter(t => t.status === 'Open').length;

  const navItems = [
    ['📊','Analytics','Analytics'],['👥','Buyers','Buyers'],['🏦','Banks','Banks'],
    ['📋','CSA Registry','CSARegistry'],['🏠','Maintenance','AdminMaintenance'],
    ['💰','Finance','Finance'],['⚖️','Legal','Legal'],['🎫','Tickets','Tickets'],
    ['👷','Agents','Agents'],['🎯','CRM Leads','CRM'],['⚙️','Scoring','Scoring'],
    ['♻️','Re-Contracting','ReContracting'],
  ];

  return (
    <ScrollView style={S.screen}>
      <View style={{ backgroundColor:C.black, paddingTop:56, paddingHorizontal:16, paddingBottom:20 }}>
        <Text style={{ fontSize:11, color:'rgba(255,255,255,0.4)', letterSpacing:2, textTransform:'uppercase', marginBottom:3 }}>A&H Holdings (Pvt) Ltd</Text>
        <Text style={{ fontFamily:'Georgia', fontSize:26, color:C.white }}>Admin Dashboard</Text>
        <Text style={{ fontSize:12, color:'rgba(255,255,255,0.4)', marginTop:2 }}>Platform Operations Centre</Text>
      </View>
      <View style={{ padding:16 }}>
        {(arrears > 0 || tickets > 0) && (
          <Alert type="warn" icon="⚠️">{arrears} arrears + {tickets} open tickets need attention today.</Alert>
        )}
        <View style={{ flexDirection:'row', gap:10, marginBottom:10 }}>
          <StatCard label="Active CSAs" value={activeCSAs} style={{ flex:1 }} />
          <StatCard label="Portfolio" value={fmtM(totalPortfolio)} style={{ flex:1 }} />
        </View>
        <View style={{ flexDirection:'row', gap:10, marginBottom:14 }}>
          <KPICard label="Monthly Revenue" value={fmtM(totalMonthly + 600000)} sub="+fees + SaaS" subColor={C.ok} color={C.ok} style={{ flex:1 }} />
          <KPICard label="Active Banks" value={DATA.banks.filter(b=>b.active).length} sub={`of ${DATA.banks.length}`} color={C.info} style={{ flex:1 }} />
        </View>
        <Card>
          <Text style={[S.h3,{marginBottom:14}]}>Platform Navigation</Text>
          <View style={{ flexDirection:'row', flexWrap:'wrap', gap:10 }}>
            {navItems.map(([icon,label,screen]) => (
              <TouchableOpacity key={screen} onPress={() => navigation.navigate(screen)}
                style={{ width:'22%', aspectRatio:1, backgroundColor:C.bg, borderRadius:10, alignItems:'center', justifyContent:'center', borderWidth:1, borderColor:C.border }}>
                <Text style={{ fontSize:22, marginBottom:2 }}>{icon}</Text>
                <Text style={{ fontSize:10, fontWeight:'600', color:C.mid, textAlign:'center', lineHeight:12 }}>{label}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </Card>
        <Card>
          <Text style={[S.h3,{marginBottom:12}]}>Platform KPIs</Text>
          {[
            ['Total Buyers',DATA.buyers.length],['Active CSAs',activeCSAs],['Pending Applications',DATA.pendingApps.length],
            ['Partner Banks',DATA.banks.filter(b=>b.active).length],['Arrears Cases',arrears],['Open Tickets',tickets],
            ['Active Agents',DATA.agents.length],['Open Maintenance',DATA.maintenance.filter(m=>m.status!=='Completed').length],
          ].map(([k,v],i) => (
            <View key={i} style={[S.row,i===7&&S.rowLast]}>
              <Text style={S.rowKey}>{k}</Text>
              <Text style={[S.rowVal,{fontWeight:'700'}]}>{v}</Text>
            </View>
          ))}
        </Card>
      </View>
    </ScrollView>
  );
}
