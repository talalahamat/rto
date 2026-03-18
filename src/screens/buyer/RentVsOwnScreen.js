
import React, { useState, useCallback } from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { C, S } from '../../theme';
import { Card, Alert, PageHeader, StatCard } from '../../components';
import { getPkgBSchedule, fmtM } from '../../data/mockData';

export default function RentVsOwnScreen({ navigation }) {
  const [rent, setRentVal] = useState(55000);
  const sch = getPkgBSchedule();
  const totalRTO = sch.reduce((s,r) => s+r.annual, 0) + 1000000;
  let totalRent = 0, rmonthly = rent;
  for (let y = 0; y < 20; y++) { totalRent += rmonthly * 12; rmonthly = Math.round(rmonthly * 1.08); }
  const finalProp = Math.round(12500000 * Math.pow(1.06, 20));
  const rtoDeposit = Math.round(1000000 * Math.pow(1.07, 20));
  const netRTO = totalRTO - rtoDeposit;

  return (
    <View style={S.screen}>
      <PageHeader title="Rent vs Own" subtitle="20-year cost comparison" onBack={() => navigation.goBack()} />
      <ScrollView style={{ padding:16 }}>
        <Alert type="ok" icon="🏠">By choosing Rent To Own, you will own a property worth {fmtM(finalProp)} and receive {fmtM(rtoDeposit)} deposit back.</Alert>
        <View style={{ flexDirection:'row', gap:10, marginBottom:14 }}>
          <View style={{ flex:1, backgroundColor:C.nearBlack, borderRadius:12, padding:14 }}>
            <Text style={{ fontSize:10, fontWeight:'600', color:'rgba(255,255,255,0.4)', textTransform:'uppercase', letterSpacing:1, marginBottom:6 }}>RTO — Total Outlay</Text>
            <Text style={{ fontSize:20, fontWeight:'700', color:C.white }}>{fmtM(totalRTO)}</Text>
            <Text style={{ fontSize:11, color:'rgba(255,255,255,0.5)', marginTop:4 }}>Deposit returned: {fmtM(rtoDeposit)}</Text>
            <Text style={{ fontSize:12, fontWeight:'600', color:'#86EFAC', marginTop:2 }}>Net cost: {fmtM(netRTO)}</Text>
            <Text style={{ fontSize:12, fontWeight:'700', color:'#86EFAC' }}>+ Property: {fmtM(finalProp)}</Text>
          </View>
          <View style={{ flex:1, backgroundColor:C.bg, borderRadius:12, padding:14, borderWidth:1, borderColor:C.border }}>
            <Text style={{ fontSize:10, fontWeight:'600', color:C.light, textTransform:'uppercase', letterSpacing:1, marginBottom:6 }}>Renting — Total Outlay</Text>
            <Text style={{ fontSize:20, fontWeight:'700', color:C.err }}>{fmtM(totalRent)}</Text>
            <Text style={{ fontSize:11, color:C.mid, marginTop:4 }}>Nothing owned at end</Text>
            <Text style={{ fontSize:12, fontWeight:'600', color:C.err, marginTop:2 }}>Net cost: {fmtM(totalRent)}</Text>
            <Text style={{ fontSize:12, fontWeight:'700', color:C.err }}>Property: LKR 0</Text>
          </View>
        </View>
        <Card>
          <Text style={[S.h3,{marginBottom:12}]}>Year-by-Year Comparison</Text>
          {sch.map((yr, i) => {
            let rtoCum = 1000000, rentCum2 = 0, rm = rent;
            for (let y = 0; y <= i; y++) { rtoCum += sch[y].annual; if(y>0)rm=Math.round(rm*1.08); rentCum2 += rm * 12; }
            const propNow = Math.round(12500000 * Math.pow(1.06, i+1));
            return (
              <View key={i} style={{ paddingVertical:9, borderBottomWidth:i<19?1:0, borderBottomColor:C.border }}>
                <View style={{ flexDirection:'row', justifyContent:'space-between', marginBottom:2 }}>
                  <Text style={{ fontSize:13, fontWeight:'600' }}>Year {yr.year}</Text>
                  <Text style={{ fontSize:12, color:C.ok, fontWeight:'600' }}>🏠 {fmtM(propNow)}</Text>
                </View>
                <View style={{ flexDirection:'row', justifyContent:'space-between' }}>
                  <Text style={S.mutedS}>RTO: {fmtM(rtoCum)}</Text>
                  <Text style={{ fontSize:12, color:C.err }}>Rent: {fmtM(rentCum2)}</Text>
                </View>
              </View>
            );
          })}
        </Card>
      </ScrollView>
    </View>
  );
}
