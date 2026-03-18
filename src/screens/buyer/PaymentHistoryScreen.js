
import React, { useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity, Modal } from 'react-native';
import { C, S } from '../../theme';
import { Card, StatCard, Badge, PageHeader } from '../../components';
import { DATA, fmtM } from '../../data/mockData';

export default function PaymentHistoryScreen({ navigation }) {
  const [receipt, setReceipt] = useState(null);
  const total = DATA.payments.reduce((s,p) => s+p.amount, 0);
  const onTime = DATA.payments.filter(p => !p.late).length;
  return (
    <View style={S.screen}>
      <PageHeader title="Payment History" subtitle="Full ledger — download receipts anytime" onBack={() => navigation.goBack()} />
      <ScrollView style={{ padding:16 }}>
        <View style={{ flexDirection:'row', gap:10, marginBottom:10 }}>
          <StatCard label="Payments Made" value={DATA.payments.length} sub="of 240 total" style={{ flex:1 }} />
          <StatCard label="Total Paid" value="LKR 840K" style={{ flex:1 }} />
        </View>
        <View style={{ flexDirection:'row', gap:10, marginBottom:14 }}>
          <StatCard label="On-Time Rate" value={`${Math.round(onTime/DATA.payments.length*100)}%`} sub="Excellent" subColor={C.ok} style={{ flex:1 }} />
          <StatCard label="Late Payments" value={DATA.payments.filter(p=>p.late).length} sub="of all" style={{ flex:1 }} />
        </View>
        <Card style={{ marginBottom:0 }}>
          <Text style={[S.h3,{marginBottom:12}]}>Payment Ledger</Text>
          {DATA.payments.map((p,i) => (
            <TouchableOpacity key={p.id} onPress={() => setReceipt(p)}
              style={{ paddingVertical:12, borderBottomWidth:i<DATA.payments.length-1?1:0, borderBottomColor:C.border }}>
              <View style={{ flexDirection:'row', justifyContent:'space-between', marginBottom:4 }}>
                <Text style={{ fontSize:13, fontWeight:'600', color:C.nearBlack }}>{fmtM(p.amount)}</Text>
                <View style={{ flexDirection:'row', gap:6, alignItems:'center' }}>
                  {p.late ? <Badge label="Late" type="warn" /> : <Badge label="On Time" type="ok" />}
                  <Badge label="Paid ✓" type="ok" />
                </View>
              </View>
              <View style={{ flexDirection:'row', justifyContent:'space-between' }}>
                <Text style={S.mutedS}>{p.date} · {p.method}</Text>
                <Text style={{ fontSize:11, color:C.info }}>View Receipt →</Text>
              </View>
            </TouchableOpacity>
          ))}
        </Card>
      </ScrollView>
      <Modal visible={!!receipt} transparent animationType="slide" onRequestClose={() => setReceipt(null)}>
        <TouchableOpacity style={{ flex:1, backgroundColor:'rgba(0,0,0,0.4)' }} onPress={() => setReceipt(null)} />
        <View style={{ backgroundColor:C.white, borderTopLeftRadius:20, borderTopRightRadius:20, padding:24 }}>
          <Text style={[S.h2,{textAlign:'center',marginBottom:4}]}>Payment Receipt</Text>
          <Text style={{ textAlign:'center', fontSize:11, color:C.mid, letterSpacing:2, textTransform:'uppercase', marginBottom:20 }}>A&H Holdings · Rent To Own</Text>
          {receipt && [
            ['Reference', receipt.ref],['Date', receipt.date],['Amount', fmtM(receipt.amount)],
            ['Method', receipt.method],['Received By', 'HDFC Bank Sri Lanka'],['Buyer', 'Priya Jayawardena'],['Status', 'Paid ✓'],
          ].map(([k,v],i) => (
            <View key={i} style={[S.row, i===6&&S.rowLast]}>
              <Text style={S.rowKey}>{k}</Text>
              <Text style={[S.rowVal,{fontFamily:k==='Reference'?'monospace':'System',fontSize:k==='Reference'?11:13}]}>{v}</Text>
            </View>
          ))}
          <TouchableOpacity onPress={() => setReceipt(null)}
            style={{ backgroundColor:C.nearBlack, borderRadius:10, paddingVertical:14, alignItems:'center', marginTop:20 }}>
            <Text style={{ color:C.white, fontSize:14, fontWeight:'700' }}>Close</Text>
          </TouchableOpacity>
        </View>
      </Modal>
    </View>
  );
}
