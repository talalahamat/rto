
import React, { useContext } from 'react';
import { View, Text, TouchableOpacity, ScrollView, StatusBar, Platform } from 'react-native';
import { AppContext } from '../../context/AppContext';
import { C } from '../../theme';

const portals = [
  { id:'buyer', icon:'🏠', title:'Buyer Portal', sub:'Track your ownership journey, payments, deposit, documents and messages.' },
  { id:'bank',  icon:'🏦', title:'Bank Portal',  sub:'Review applications, manage portfolio, cash flow and KYC compliance.' },
  { id:'admin', icon:'⚙️', title:'Admin Portal', sub:'Full platform operations — agents, finance, legal and analytics.' },
];
export default function PortalSelectScreen({ navigation }) {
  const { setPortal } = useContext(AppContext);
  const enter = (id) => { setPortal(id); navigation.replace('Login', { portal: id }); };
  return (
    <View style={{ flex:1, backgroundColor: C.black }}>
      <StatusBar barStyle="light-content" />
      <ScrollView contentContainerStyle={{ flexGrow:1, padding:24, justifyContent:'center' }}>
        <View style={{ alignItems:'center', marginBottom:48 }}>
          <View style={{ width:64, height:64, borderRadius:32, borderWidth:1.5, borderColor:'rgba(255,255,255,0.6)', alignItems:'center', justifyContent:'center', marginBottom:14 }}>
            <Text style={{ fontSize:18, fontWeight:'700', color:C.white }}>A&H</Text>
          </View>
          <Text style={{ fontSize:11, fontWeight:'600', color:'rgba(255,255,255,0.35)', letterSpacing:3, textTransform:'uppercase', marginBottom:8 }}>A&H Holdings</Text>
          <Text style={{ fontFamily: Platform.OS === 'ios' ? 'Georgia' : 'serif', fontSize:42, fontWeight:'400', color:C.white, letterSpacing:-1 }}>Rent To Own</Text>
          <Text style={{ fontSize:11, color:'rgba(255,255,255,0.3)', letterSpacing:3, textTransform:'uppercase', marginTop:4 }}>Sri Lanka's pathway to homeownership</Text>
        </View>
        {portals.map(p => (
          <TouchableOpacity key={p.id} onPress={() => enter(p.id)} activeOpacity={0.8}
            style={{ backgroundColor:'rgba(255,255,255,0.04)', borderWidth:1, borderColor:'rgba(255,255,255,0.09)', borderRadius:14, padding:20, marginBottom:12 }}>
            <View style={{ flexDirection:'row', alignItems:'flex-start', gap:14 }}>
              <View style={{ width:44, height:44, backgroundColor:'rgba(255,255,255,0.07)', borderRadius:10, alignItems:'center', justifyContent:'center' }}>
                <Text style={{ fontSize:20 }}>{p.icon}</Text>
              </View>
              <View style={{ flex:1 }}>
                <Text style={{ fontSize:17, fontWeight:'600', color:C.white, marginBottom:4 }}>{p.title}</Text>
                <Text style={{ fontSize:12, color:'rgba(255,255,255,0.35)', lineHeight:17 }}>{p.sub}</Text>
              </View>
              <Text style={{ color:'rgba(255,255,255,0.3)', fontSize:20 }}>›</Text>
            </View>
          </TouchableOpacity>
        ))}
        <Text style={{ textAlign:'center', fontSize:11, color:'rgba(255,255,255,0.2)', marginTop:24 }}>Version 1.0.0 · A&H Holdings (Pvt) Ltd</Text>
      </ScrollView>
    </View>
  );
}
