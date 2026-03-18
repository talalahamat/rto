
import React from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { C, S } from '../../theme';
import { Card, Alert, PageHeader, Badge } from '../../components';

const offers = [
  { bank:'HDFC', full:'HDFC Bank Sri Lanka', rate:'10.9%', proc:'5 working days', penalty:'None', grace:'90 days', selected:true },
  { bank:'BOC', full:'Bank of Ceylon', rate:'10.2%', proc:'7 working days', penalty:'None', grace:'60 days', selected:false },
  { bank:'Comm', full:'Commercial Bank', rate:'10.5%', proc:'3 working days', penalty:'0.5%', grace:'90 days', selected:false },
];
export default function BankOffersScreen({ navigation }) {
  return (
    <View style={S.screen}>
      <PageHeader title="Bank Offers" subtitle="Competing offers from partner banks" onBack={() => navigation.goBack()} />
      <ScrollView style={{ padding:16 }}>
        <Alert type="ok" icon="✅">You have selected HDFC Bank Sri Lanka. Your CSA is active.</Alert>
        {offers.map(o => (
          <View key={o.bank} style={{ borderWidth:o.selected?2:1, borderColor:o.selected?C.nearBlack:C.border, borderRadius:12, padding:16, marginBottom:12, backgroundColor:C.white }}>
            <View style={{ flexDirection:'row', alignItems:'center', marginBottom:10 }}>
              <View style={{ width:44, height:44, backgroundColor:C.bg, borderRadius:8, alignItems:'center', justifyContent:'center', borderWidth:1, borderColor:C.border, marginRight:12 }}>
                <Text style={{ fontSize:11, fontWeight:'700', color:C.nearBlack }}>{o.bank}</Text>
              </View>
              <View style={{ flex:1 }}>
                <Text style={{ fontSize:14, fontWeight:'600' }}>{o.full}</Text>
              </View>
              {o.selected ? <Badge label="Selected ✓" type="ok" /> : null}
            </View>
            <View style={{ flexDirection:'row', flexWrap:'wrap', gap:10 }}>
              {[['Net Yield',o.rate],['Processing',o.proc],['Prepayment',o.penalty],['Grace Period',o.grace]].map(([l,v]) => (
                <View key={l} style={{ flex:1, minWidth:70 }}>
                  <Text style={{ fontSize:10, fontWeight:'600', color:C.light, textTransform:'uppercase', letterSpacing:.8, marginBottom:2 }}>{l}</Text>
                  <Text style={{ fontSize:13, fontWeight:'600' }}>{v}</Text>
                </View>
              ))}
            </View>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}
