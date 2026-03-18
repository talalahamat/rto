
import React, { useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { C, S } from '../../theme';
import { Card, Badge, Alert, PageHeader, Chips, Sheet, Field, Select, Btn } from '../../components';
import { DATA } from '../../data/mockData';

const cats = ['All','Identity','Legal','Financial','Credit','Employment','Property'];

export default function DocumentsScreen({ navigation }) {
  const [cat, setCat] = useState('All');
  const [uploading, setUploading] = useState(false);
  const docs = cat === 'All' ? DATA.documents : DATA.documents.filter(d => d.category === cat);
  const expired = DATA.documents.filter(d => d.expiry !== '—' && new Date(d.expiry) < new Date());

  return (
    <View style={S.screen}>
      <PageHeader title="Document Vault" subtitle="All your documents in one secure place" onBack={() => navigation.goBack()} right={
        <TouchableOpacity onPress={() => setUploading(true)} style={{ backgroundColor:C.white, borderRadius:8, paddingHorizontal:12, paddingVertical:6 }}>
          <Text style={{ fontSize:13, fontWeight:'600', color:C.black }}>+ Upload</Text>
        </TouchableOpacity>
      } />
      {expired.length > 0 && (
        <View style={{ paddingHorizontal:16, paddingTop:12 }}>
          <Alert type="warn" icon="⚠️">{expired.length} document(s) expired — request renewal from your agent.</Alert>
        </View>
      )}
      <Chips options={cats} selected={cat} onSelect={setCat} />
      <ScrollView style={{ paddingHorizontal:16 }}>
        {docs.map(d => (
          <View key={d.id} style={[S.card,{ flexDirection:'row', alignItems:'center', gap:12, marginBottom:8 }]}>
            <View style={{ width:40, height:40, backgroundColor:C.bg, borderRadius:8, alignItems:'center', justifyContent:'center' }}>
              <Text style={{ fontSize:20 }}>{d.icon}</Text>
            </View>
            <View style={{ flex:1 }}>
              <Text style={{ fontSize:13, fontWeight:'600', color:C.nearBlack }}>{d.name}</Text>
              <Text style={S.mutedS}>{d.category} · {d.size}</Text>
              {d.expiry !== '—' && <Text style={{ fontSize:11, color:new Date(d.expiry)<new Date()?C.err:C.mid, marginTop:2 }}>Expires: {d.expiry}</Text>}
            </View>
            <View style={{ alignItems:'flex-end', gap:5 }}>
              <Badge label={d.status} type={d.status==='Verified'||d.status==='Signed'||d.status==='Current'||d.status==='Received'?'ok':d.status==='Expired'?'err':'warn'} />
              <TouchableOpacity><Text style={{ fontSize:11, color:C.info }}>View</Text></TouchableOpacity>
            </View>
          </View>
        ))}
      </ScrollView>
      <Sheet visible={uploading} onClose={() => setUploading(false)} title="Upload Document">
        <Field label="Document Category" required>
          <Select value="" options={['Identity','Financial','Employment','Property','Legal','Credit']} onSelect={() => {}} placeholder="Select category…" />
        </Field>
        <Field label="Document Name" required><View style={S.input}><Text style={{ color:C.light }}>e.g. NIC Renewal 2026</Text></View></Field>
        <Field label="Expiry Date (if applicable)"><View style={S.input}><Text style={{ color:C.light }}>Select date…</Text></View></Field>
        <TouchableOpacity style={{ borderWidth:2, borderColor:C.border, borderStyle:'dashed', borderRadius:10, padding:24, alignItems:'center', marginBottom:14 }}>
          <Text style={{ fontSize:28, marginBottom:8 }}>📎</Text>
          <Text style={{ fontSize:13, color:C.mid }}>Tap to select file</Text>
          <Text style={{ fontSize:11, color:C.light }}>PDF, JPG, PNG — max 10MB</Text>
        </TouchableOpacity>
        <Btn label="Upload Document" onPress={() => setUploading(false)} />
      </Sheet>
    </View>
  );
}
