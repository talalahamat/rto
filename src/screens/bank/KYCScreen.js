
import React, { useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { C, S } from '../../theme';
import { Card, StatCard, Badge, Alert, PageHeader, SearchBar, Btn } from '../../components';
import { DATA } from '../../data/mockData';

const kycDocs = ['NIC (Certified Copy)','Proof of Income','CRIB Report','Employment Letter','Bank Statements','Utility Bills'];
export default function KYCScreen({ navigation }) {
  const buyers = DATA.buyers.filter(b => b.bank === 'HDFC');
  const [search, setSearch] = useState('');
  const visible = buyers.filter(b => b.name.toLowerCase().includes(search.toLowerCase()));
  return (
    <View style={S.screen}>
      <PageHeader title="KYC Documents" subtitle="Know-Your-Customer document storage" onBack={() => navigation.goBack()} right={
        <Btn label="Export" type="secondary" size="sm" onPress={() => {}} style={{ borderColor:'rgba(255,255,255,0.2)' }} />
      } />
      <View style={{ padding:16, paddingBottom:0 }}>
        <Alert type="warn" icon="⚠️">3 documents expiring within 90 days — request renewals.</Alert>
        <View style={{ flexDirection:'row', gap:10, marginBottom:12 }}>
          <StatCard label="Full KYC" value={buyers.length-1} sub={`of ${buyers.length}`} subColor={C.ok} style={{ flex:1 }} />
          <StatCard label="Expiring (90d)" value={3} subColor={C.warn} style={{ flex:1 }} />
        </View>
        <SearchBar value={search} onChangeText={setSearch} placeholder="Search buyer…" />
      </View>
      <ScrollView style={{ padding:16 }}>
        {visible.map(b => (
          <Card key={b.id} style={{ marginBottom:12 }}>
            <View style={{ flexDirection:'row', alignItems:'center', gap:10, marginBottom:12, paddingBottom:12, borderBottomWidth:1, borderBottomColor:C.border }}>
              <View style={{ width:38, height:38, backgroundColor:C.nearBlack, borderRadius:19, alignItems:'center', justifyContent:'center' }}>
                <Text style={{ fontSize:12, fontWeight:'700', color:C.white }}>{b.name.split(' ').map(n=>n[0]).join('')}</Text>
              </View>
              <View style={{ flex:1 }}>
                <Text style={{ fontSize:14, fontWeight:'600' }}>{b.name}</Text>
                <Text style={S.mutedS}>CSA: RTO-CSA-2024-{b.id}</Text>
              </View>
              <Badge label="KYC Complete" type="ok" />
            </View>
            <View style={{ flexDirection:'row', flexWrap:'wrap', gap:8 }}>
              {kycDocs.map((doc,di) => (
                <View key={di} style={{ width:'47%', padding:9, backgroundColor:C.bg, borderRadius:8, borderWidth:1, borderColor:C.border }}>
                  <Text style={{ fontSize:11, fontWeight:'600', marginBottom:4 }} numberOfLines={1}>{doc}</Text>
                  <Badge label={di===3&&b.id==='B008'?'Expires Soon':'Verified'} type={di===3&&b.id==='B008'?'warn':'ok'} />
                </View>
              ))}
            </View>
            <View style={{ flexDirection:'row', gap:8, marginTop:10 }}>
              <Btn label="Request Refresh" type="secondary" size="sm" style={{ flex:1 }} onPress={() => {}} />
              <Btn label="Download Pack" type="secondary" size="sm" style={{ flex:1 }} onPress={() => {}} />
            </View>
          </Card>
        ))}
      </ScrollView>
    </View>
  );
}
