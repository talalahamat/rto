
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
