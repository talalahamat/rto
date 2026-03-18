
import React, { useState } from 'react';
import { View, Text, ScrollView } from 'react-native';
import { C, S } from '../../theme';
import { Card, StatCard, Alert, PageHeader, Sheet, Field, Select, Btn, TLItem } from '../../components';
import { DATA, fmtM } from '../../data/mockData';

export default function InsuranceScreen({ navigation }) {
  const [editing, setEditing] = useState(false);
  const b = DATA.buyers[0];
  return (
    <View style={S.screen}>
      <PageHeader title="Life Insurance" subtitle="Property protection and inheritance policy" onBack={() => navigation.goBack()} />
      <ScrollView style={{ padding:16 }}>
        <Alert type="info" icon="ℹ️">After Year 10 (March 2034), if the primary buyer passes away, the property transfers directly to the nominated beneficiary.</Alert>
        <View style={{ flexDirection:'row', gap:10, marginBottom:14 }}>
          <StatCard label="Policy Status" value="Pending" sub="Activates Mar 2034" style={{ flex:1 }} />
          <StatCard label="Until Activation" value="8 Years" style={{ flex:1 }} />
          <StatCard label="Sum Insured" value="LKR 12.5M" style={{ flex:1 }} />
        </View>
        <Card>
          <Text style={[S.h3,{marginBottom:12}]}>Policy Details</Text>
          {[['Policy Ref','INS-RTO-2024-B001'],['Type','CSA-Linked Property Transfer'],['Insured','Priya Jayawardena'],['Sum Insured',fmtM(12500000)],['Activation','Death after Year 10'],['From Date','28 March 2034'],['Premium','Included in management fee']].map(([k,v],i) => (
            <View key={i} style={[S.row,i===6&&S.rowLast]}><Text style={S.rowKey}>{k}</Text><Text style={S.rowVal}>{v}</Text></View>
          ))}
        </Card>
        <Card>
          <View style={{ flexDirection:'row', justifyContent:'space-between', alignItems:'center', marginBottom:12 }}>
            <Text style={S.h3}>Beneficiaries</Text>
            <Text onPress={() => setEditing(true)} style={{ fontSize:13, color:C.info }}>Edit</Text>
          </View>
          {[['Primary',b.ecName,b.ecRel,b.ecPhone],['Secondary','Not nominated','—','—']].map(([type,name,rel,ph],i) => (
            <View key={i} style={{ padding:12, backgroundColor:C.bg, borderRadius:8, marginBottom:8 }}>
              <Text style={{ fontSize:11, fontWeight:'600', color:C.mid, textTransform:'uppercase', letterSpacing:1, marginBottom:5 }}>{type}</Text>
              <Text style={{ fontSize:14, fontWeight:'600', marginBottom:2 }}>{name}</Text>
              {rel !== '—' && <Text style={S.mutedS}>{rel} · {ph}</Text>}
            </View>
          ))}
        </Card>
        <Card>
          <Text style={[S.h3,{marginBottom:12}]}>How It Works</Text>
          <TLItem date="Year 1–10: Waiting Period" text="Property transfer protection is building." done />
          <TLItem date="Year 10+: Protection Active" text="If primary buyer passes, beneficiary inherits contract." />
          <TLItem date="On Inheritance" text="Beneficiary assumes CSA obligations. A&H assists transfer." />
          <TLItem date="Year 20: Completion" text="Full title transfers to beneficiary on final payment." last />
        </Card>
      </ScrollView>
      <Sheet visible={editing} onClose={() => setEditing(false)} title="Update Beneficiary">
        <Alert type="warn" icon="⚠️">Changes require notarial attestation. A&H will arrange this for you.</Alert>
        <Field label="Full Name" required><View style={[S.input,{justifyContent:'center'}]}><Text style={{ color:C.nearBlack }}>{b.ecName}</Text></View></Field>
        <Field label="NIC Number" required><View style={[S.input,{justifyContent:'center'}]}><Text style={{ color:C.nearBlack }}>198512345V</Text></View></Field>
        <Field label="Relationship">
          <Select value="Spouse" options={['Spouse','Child','Parent','Sibling','Other']} onSelect={() => {}} />
        </Field>
        <Field label="Phone"><View style={[S.input,{justifyContent:'center'}]}><Text style={{ color:C.nearBlack }}>{b.ecPhone}</Text></View></Field>
        <Btn label="Submit Update" onPress={() => setEditing(false)} />
      </Sheet>
    </View>
  );
}
