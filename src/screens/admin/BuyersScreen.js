
import React, { useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { C, S } from '../../theme';
import { BuyerCard, PageHeader, SearchBar, Chips, StatCard, Alert } from '../../components';
import { DATA } from '../../data/mockData';

const statuses = ['All','Active','Bank Selection','Arrears','Rejected'];

export default function BuyersScreen({ navigation }) {
  const [status, setStatus] = useState('All');
  const [search, setSearch] = useState('');
  const filtered = DATA.buyers
    .filter(b => status === 'All' ? true : b.status === status)
    .filter(b => b.name.toLowerCase().includes(search.toLowerCase()) || b.id.toLowerCase().includes(search.toLowerCase()));

  return (
    <View style={S.screen}>
      <PageHeader title="Buyers" subtitle={`${DATA.buyers.length} registered buyers`} onBack={() => navigation.goBack()} />
      <View style={{ padding:16, paddingBottom:0 }}>
        <View style={{ flexDirection:'row', gap:10, marginBottom:12 }}>
          {[['All',DATA.buyers.length],['Active',DATA.buyers.filter(b=>b.status==='Active').length],['Arrears',DATA.buyers.filter(b=>b.status==='Arrears').length]].map(([l,v],i) => (
            <StatCard key={i} label={l} value={v} style={{ flex:1 }} />
          ))}
        </View>
        <SearchBar value={search} onChangeText={setSearch} placeholder="Search name or ID…" />
      </View>
      <Chips options={statuses} selected={status} onSelect={setStatus} />
      <ScrollView style={{ paddingHorizontal:16 }}>
        {filtered.length === 0 ? (
          <Alert type="info">No buyers match this filter.</Alert>
        ) : filtered.map(b => (
          <BuyerCard key={b.id} buyer={b} onPress={() => navigation.navigate('BuyerDetail', { id:b.id })} />
        ))}
      </ScrollView>
    </View>
  );
}
