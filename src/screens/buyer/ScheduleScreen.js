
import React from 'react';
import { View, Text, ScrollView, FlatList } from 'react-native';
import { C, S } from '../../theme';
import { Card, StatCard, Badge, PageHeader } from '../../components';
import { getPkgBSchedule, fmtM } from '../../data/mockData';

export default function ScheduleScreen({ navigation }) {
  const sch = getPkgBSchedule();
  const months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
  const rows = [];
  sch.forEach((yr, yi) => {
    months.forEach((mn, mi) => {
      const absM = yi * 12 + mi + 1;
      const isPaid = absM <= 12;
      const isCur = yi === 1 && mi === 2;
      const cum = sch.slice(0, yi).reduce((s, r) => s + r.annual, 0) + (yr.monthly * (mi + 1));
      rows.push({ key:`${yi}-${mi}`, month:`${mn} ${2024 + yi}`, year: yr.year, monthly: yr.monthly, isPaid, isCur, cum });
    });
  });

  return (
    <View style={S.screen}>
      <PageHeader title="Payment Schedule" subtitle="Package B — 20 Year Escalation Plan" onBack={() => navigation.goBack()} />
      <View style={{ padding:16 }}>
        <View style={{ flexDirection:'row', gap:10, marginBottom:14 }}>
          <StatCard label="Total Payments" value="240" style={{ flex:1 }} />
          <StatCard label="Made" value="12" sub="On schedule ✓" subColor={C.ok} style={{ flex:1 }} />
          <StatCard label="20yr Total" value="LKR 42.3M" style={{ flex:1 }} />
        </View>
      </View>
      <View style={{ flexDirection:'row', backgroundColor:C.bg, paddingHorizontal:16, paddingVertical:7, borderBottomWidth:1, borderBottomColor:C.border }}>
        {['Month','Year','Monthly','Status'].map((h,i) => <Text key={i} style={[{ flex:i===0?2:1, fontSize:10, fontWeight:'600', color:C.light, textTransform:'uppercase', letterSpacing:.8 }]}>{h}</Text>)}
      </View>
      <FlatList
        data={rows}
        keyExtractor={r => r.key}
        renderItem={({ item:r }) => (
          <View style={{ flexDirection:'row', paddingHorizontal:16, paddingVertical:9, borderBottomWidth:1, borderBottomColor:C.border, backgroundColor:r.isCur?'#F0FDF4':C.white, alignItems:'center' }}>
            <Text style={{ flex:2, fontSize:13, color:r.isPaid?C.light:r.isCur?C.ok:C.nearBlack, fontWeight:r.isCur?'700':'400' }}>{r.month}</Text>
            <Text style={{ flex:1, fontSize:13, color:C.mid }}>Yr {r.year}</Text>
            <Text style={{ flex:1, fontSize:13, fontWeight:'600', color:r.isPaid?C.light:C.nearBlack }}>{fmtM(r.monthly)}</Text>
            <View style={{ flex:1 }}>
              <Badge label={r.isPaid?'Paid ✓':r.isCur?'Current':'Upcoming'} type={r.isPaid?'ok':r.isCur?'warn':'gray'} />
            </View>
          </View>
        )}
        initialScrollIndex={12}
        getItemLayout={(_, i) => ({ length: 43, offset: 43 * i, index: i })}
      />
    </View>
  );
}
