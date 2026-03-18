import os

def write(path, content):
    os.makedirs(os.path.dirname(path), exist_ok=True)
    with open(path, 'w') as f:
        f.write(content)
    print(f"  ✓ {path}")

base = "/home/claude/rto-mobile/src"

# ─── AppContext ───────────────────────────────────────────────────────────────
write(f"{base}/context/AppContext.js", """
import React, { createContext, useState } from 'react';
export const AppContext = createContext({});
export function AppProvider({ children }) {
  const [portal, setPortal] = useState(null);
  const [toastMsg, setToastMsg] = useState('');
  const showToast = (msg) => { setToastMsg(msg); setTimeout(() => setToastMsg(''), 2800); };
  return (
    <AppContext.Provider value={{ portal, setPortal, toastMsg, showToast }}>
      {children}
    </AppContext.Provider>
  );
}
""")

# ─── Auth screens ─────────────────────────────────────────────────────────────
write(f"{base}/screens/auth/PortalSelectScreen.js", """
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
""")

write(f"{base}/screens/auth/LoginScreen.js", """
import React, { useState, useContext } from 'react';
import { View, Text, TouchableOpacity, ScrollView, StatusBar, Platform, Alert } from 'react-native';
import { AppContext } from '../../context/AppContext';
import { C, S } from '../../theme';
import { Input, Field, Btn } from '../../components';
import { PORTALS } from '../../data/mockData';

export default function LoginScreen({ navigation, route }) {
  const { portal, setPortal } = useContext(AppContext);
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  const [loading, setLoading] = useState(false);
  const p = PORTALS[portal || 'buyer'];

  const login = () => {
    if (!email || !pass) { Alert.alert('Please enter email and password'); return; }
    setLoading(true);
    setTimeout(() => { setLoading(false); navigation.replace('Main'); }, 1200);
  };

  return (
    <View style={{ flex:1, backgroundColor: C.black }}>
      <StatusBar barStyle="light-content" />
      <ScrollView contentContainerStyle={{ flexGrow:1, justifyContent:'center', padding:28 }}>
        <TouchableOpacity onPress={() => navigation.replace('PortalSelect')} style={{ marginBottom:32, flexDirection:'row', alignItems:'center', gap:6 }}>
          <Text style={{ color:'rgba(255,255,255,0.4)', fontSize:14 }}>‹</Text>
          <Text style={{ color:'rgba(255,255,255,0.4)', fontSize:13 }}>Change portal</Text>
        </TouchableOpacity>
        <View style={{ marginBottom:40 }}>
          <Text style={{ fontSize:11, color:'rgba(255,255,255,0.4)', letterSpacing:3, textTransform:'uppercase', marginBottom:6 }}>A&H Holdings</Text>
          <Text style={{ fontFamily: Platform.OS === 'ios' ? 'Georgia' : 'serif', fontSize:32, color:C.white, fontWeight:'400', marginBottom:4 }}>Welcome back</Text>
          <Text style={{ fontSize:13, color:'rgba(255,255,255,0.4)' }}>Sign in to {p.label}</Text>
        </View>
        <View style={{ backgroundColor:'rgba(255,255,255,0.04)', borderWidth:1, borderColor:'rgba(255,255,255,0.09)', borderRadius:16, padding:20 }}>
          <View style={{ marginBottom:14 }}>
            <Text style={{ fontSize:12, fontWeight:'600', color:'rgba(255,255,255,0.5)', marginBottom:6 }}>EMAIL ADDRESS</Text>
            <View style={{ backgroundColor:'rgba(255,255,255,0.07)', borderRadius:8, paddingHorizontal:14, paddingVertical:12 }}>
              <Text style={{ color:'rgba(255,255,255,0.3)', fontSize:14 }} onPress={() => {}}>
                {portal === 'buyer' ? 'priya@email.com' : portal === 'bank' ? 'ranjith@hdfc.lk' : 'admin@andhholdings.lk'}
              </Text>
            </View>
          </View>
          <View style={{ marginBottom:20 }}>
            <Text style={{ fontSize:12, fontWeight:'600', color:'rgba(255,255,255,0.5)', marginBottom:6 }}>PASSWORD</Text>
            <View style={{ backgroundColor:'rgba(255,255,255,0.07)', borderRadius:8, paddingHorizontal:14, paddingVertical:12 }}>
              <Text style={{ color:'rgba(255,255,255,0.3)', fontSize:14 }}>••••••••</Text>
            </View>
          </View>
          <TouchableOpacity onPress={() => navigation.replace('Main')} activeOpacity={0.85}
            style={{ backgroundColor:C.white, borderRadius:10, paddingVertical:14, alignItems:'center', marginBottom:14 }}>
            <Text style={{ fontSize:15, fontWeight:'700', color:C.black }}>{loading ? 'Signing in…' : 'Sign In'}</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.replace('Main')} style={{ alignItems:'center' }}>
            <Text style={{ fontSize:13, color:'rgba(255,255,255,0.4)' }}>Sign in with Face ID / Touch ID</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity style={{ marginTop:18, alignItems:'center' }}>
          <Text style={{ fontSize:13, color:'rgba(255,255,255,0.3)' }}>Forgot password?</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}
""")

print("Auth screens done")
