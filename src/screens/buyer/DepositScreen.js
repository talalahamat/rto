
import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import { C, S } from '../../theme';
import { Card, StatCard, Alert, PageHeader } from '../../components';
import { DATA, fmtM } from '../../data/mockData';

export default function DepositScreen({ navigation }) {
  const b = DATA.buyers[0];
  const total = b.deposit + b.depositInterest;
  return (
    <View style={S.screen}>
      <PageHeader title="My Deposit" subtitle="Ring-fenced escrow at HDFC Bank — in your name" onBack={() => navigation.goBack()} />
      <ScrollView style={{ padding:16 }}>
        <Alert type="info" icon="ℹ️">Your deposit is held in escrow at HDFC Bank in your name. A&H Holdings has zero access. On completion, the full amount + 7% p.a. interest is returned by the bank.</Alert>
        <View style={{ flexDirection:'row', gap:10, marginBottom:14 }}>
          <StatCard label="Principal" value={fmtM(b.deposit)} style={{ flex:1 }} />
          <StatCard label="Interest @ 7%" value={fmtM(b.depositInterest)} sub="12 months" subColor={C.ok} style={{ flex:1 }} />
          <StatCard label="Total Balance" value={fmtM(total)} style={{ flex:1 }} />
        </View>
        <View style={{ backgroundColor:C.nearBlack, borderRadius:12, padding:18, marginBottom:14 }}>
          <Text style={{ fontSize:10, fontWeight:'600', color:'rgba(255,255,255,0.4)', textTransform:'uppercase', letterSpacing:1.5, marginBottom:4 }}>Escrow Account</Text>
          <Text style={{ fontSize:20, fontWeight:'500', color:C.white }}>HDFC-ESC-29871</Text>
          <Text style={{ fontSize:12, color:'rgba(255,255,255,0.35)', marginTop:4 }}>HDFC Bank Sri Lanka · Colombo</Text>
        </View>
        <Card>
          <Text style={[S.h3,{marginBottom:12}]}>20-Year Interest Projection</Text>
          {[1,2,3,5,10,15,20].map(y => {
            const int = Math.round(b.deposit * (Math.pow(1.07, y) - 1));
            const bal = b.deposit + int;
            return (
              <View key={y} style={[S.row, y===20&&S.rowLast]}>
                <Text style={S.rowKey}>Year {y} ({2023+y})</Text>
                <View style={{ alignItems:'flex-end' }}>
                  <Text style={[S.rowVal,{fontWeight:'700'}]}>{fmtM(bal)}</Text>
                  <Text style={{ fontSize:11, color:C.ok }}>+{fmtM(int)} interest</Text>
                </View>
              </View>
            );
          })}
        </Card>
        <Card>
          <Text style={[S.h3,{marginBottom:12}]}>Exit Conditions</Text>
          {[['Completion (Year 20)','Full Refund + Interest','ok'],['Voluntary Early Exit','Forfeited','err'],['Breach of Terms','Forfeited','err'],['Death after Year 10','To Beneficiary','ok']].map(([s,v,t],i) => (
            <View key={i} style={[S.row,i===3&&S.rowLast]}>
              <Text style={S.rowKey}>{s}</Text>
              <Text style={[S.rowVal,{color:t==='ok'?C.ok:C.err,fontWeight:'600'}]}>{v}</Text>
            </View>
          ))}
        </Card>
      </ScrollView>
    </View>
  );
}
