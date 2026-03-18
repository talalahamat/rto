
import React, { useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { C, S } from '../../theme';
import { Card, PageHeader, Field, Btn } from '../../components';
import { DATA } from '../../data/mockData';
import { fmtM } from '../../data/mockData';

export default function ProfileScreen({ navigation }) {
  const b = DATA.buyers[0];
  const [editing, setEditing] = useState(false);
  return (
    <View style={S.screen}>
      <PageHeader title="My Profile" subtitle="Personal, employment and contact information" onBack={() => navigation.goBack()} right={
        <TouchableOpacity onPress={() => setEditing(!editing)} style={{ backgroundColor:editing?C.nearBlack:C.white, borderRadius:8, paddingHorizontal:12, paddingVertical:6 }}>
          <Text style={{ fontSize:13, fontWeight:'600', color:editing?C.white:C.black }}>{editing?'Cancel':'Edit'}</Text>
        </TouchableOpacity>
      } />
      <ScrollView style={{ padding:16 }}>
        <View style={{ alignItems:'center', marginBottom:20 }}>
          <View style={{ width:72, height:72, borderRadius:36, backgroundColor:C.nearBlack, alignItems:'center', justifyContent:'center', marginBottom:10 }}>
            <Text style={{ fontSize:24, fontWeight:'700', color:C.white }}>{b.name.split(' ').map(n=>n[0]).join('')}</Text>
          </View>
          <Text style={{ fontSize:18, fontWeight:'600' }}>{b.name}</Text>
          <Text style={{ fontSize:13, color:C.mid }}>{b.email}</Text>
        </View>
        <Card>
          <Text style={[S.h3,{marginBottom:12}]}>Personal Information</Text>
          {[['Full Name',b.name],['NIC Number',b.nic],['Phone',b.phone],['Email',b.email],['Date of Birth',b.dob],['Address',b.address]].map(([k,v],i) => (
            <View key={i} style={[S.row,i===5&&S.rowLast]}>
              <Text style={S.rowKey}>{k}</Text>
              <Text style={[S.rowVal,{flex:2}]} numberOfLines={1}>{v}</Text>
            </View>
          ))}
        </Card>
        <Card>
          <Text style={[S.h3,{marginBottom:12}]}>Employment</Text>
          {[['Employer',b.employer],['Employment Type',b.empType],['Monthly Income',fmtM(b.income)],['Years Employed',`${b.yrsEmployed} years`]].map(([k,v],i) => (
            <View key={i} style={[S.row,i===3&&S.rowLast]}>
              <Text style={S.rowKey}>{k}</Text>
              <Text style={S.rowVal}>{v}</Text>
            </View>
          ))}
        </Card>
        <Card>
          <Text style={[S.h3,{marginBottom:12}]}>Emergency Contact</Text>
          {[['Name',b.ecName],['Relationship',b.ecRel],['Phone',b.ecPhone]].map(([k,v],i) => (
            <View key={i} style={[S.row,i===2&&S.rowLast]}>
              <Text style={S.rowKey}>{k}</Text>
              <Text style={S.rowVal}>{v}</Text>
            </View>
          ))}
        </Card>
        {editing && <Btn label="Save Changes" onPress={() => setEditing(false)} style={{ marginBottom:20 }} />}
      </ScrollView>
    </View>
  );
}
