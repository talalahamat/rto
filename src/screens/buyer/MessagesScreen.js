
import React, { useState, useRef } from 'react';
import { View, Text, ScrollView, TouchableOpacity, TextInput, KeyboardAvoidingView, Platform } from 'react-native';
import { C, S } from '../../theme';
import { PageHeader, Card, Sheet, Field, Select, Btn } from '../../components';
import { DATA } from '../../data/mockData';

export default function MessagesScreen({ navigation }) {
  const [msgs, setMsgs] = useState(DATA.messages);
  const [text, setText] = useState('');
  const [ticketSheet, setTicketSheet] = useState(false);
  const scrollRef = useRef(null);
  const unread = msgs.filter(m => !m.read && m.sender !== 'me').length;

  const send = () => {
    if (!text.trim()) return;
    const now = new Date();
    const time = `Today, ${now.toLocaleTimeString('en',{hour:'2-digit',minute:'2-digit'})}`;
    setMsgs(prev => [...prev, { id:`m${Date.now()}`, sender:'me', name:'Me', text:text.trim(), time, read:true }]);
    const t = text.trim(); setText('');
    setTimeout(() => {
      setMsgs(prev => [...prev, { id:`m${Date.now()+1}`, sender:'agent', name:'Kasun Bandara', text:'Thanks for your message! I will get back to you shortly.', time, read:true }]);
    }, 1200);
  };

  return (
    <KeyboardAvoidingView style={S.screen} behavior={Platform.OS==='ios'?'padding':undefined} keyboardVerticalOffset={90}>
      <PageHeader title="Messages" subtitle="Secure messaging with Kasun Bandara" onBack={() => navigation.goBack()} />
      {unread > 0 && (
        <View style={{ backgroundColor:C.infoBg, padding:12, borderBottomWidth:1, borderBottomColor:'#BFDBFE' }}>
          <Text style={{ fontSize:13, color:'#1E3A8A' }}>💬 {unread} unread message{unread>1?'s':''}</Text>
        </View>
      )}
      {/* Agent header */}
      <View style={{ flexDirection:'row', alignItems:'center', gap:12, padding:14, backgroundColor:C.bg, borderBottomWidth:1, borderBottomColor:C.border }}>
        <View style={{ width:38, height:38, backgroundColor:C.nearBlack, borderRadius:19, alignItems:'center', justifyContent:'center' }}>
          <Text style={{ fontSize:13, fontWeight:'700', color:C.white }}>KB</Text>
        </View>
        <View style={{ flex:1 }}>
          <Text style={{ fontSize:14, fontWeight:'600' }}>Kasun Bandara</Text>
          <Text style={{ fontSize:12, color:C.ok }}>● Online</Text>
        </View>
        <TouchableOpacity style={{ flexDirection:'row', alignItems:'center', gap:6, backgroundColor:C.white, borderWidth:1, borderColor:C.border, borderRadius:8, paddingHorizontal:12, paddingVertical:6 }}>
          <Text style={{ fontSize:14 }}>📞</Text>
          <Text style={{ fontSize:13, fontWeight:'500' }}>Call</Text>
        </TouchableOpacity>
      </View>
      <ScrollView style={{ flex:1, padding:14 }} ref={scrollRef} onContentSizeChange={() => scrollRef.current?.scrollToEnd()}>
        {msgs.map(m => (
          <View key={m.id} style={{ marginBottom:10, alignItems:m.sender==='me'?'flex-end':'flex-start' }}>
            <Text style={{ fontSize:10.5, color:C.light, marginBottom:3 }}>{m.name} · {m.time}</Text>
            <View style={{ maxWidth:'78%', padding:12, borderRadius:14, backgroundColor:m.sender==='me'?C.nearBlack:C.white, borderWidth:m.sender==='me'?0:1, borderColor:C.border, borderBottomRightRadius:m.sender==='me'?4:14, borderBottomLeftRadius:m.sender==='me'?14:4 }}>
              <Text style={{ fontSize:13, color:m.sender==='me'?C.white:C.nearBlack, lineHeight:19 }}>{m.text}</Text>
            </View>
          </View>
        ))}
      </ScrollView>
      {/* Input */}
      <View style={{ flexDirection:'row', gap:10, padding:14, borderTopWidth:1, borderTopColor:C.border, backgroundColor:C.white }}>
        <TextInput value={text} onChangeText={setText} placeholder="Type your message…" placeholderTextColor={C.light} multiline
          style={{ flex:1, backgroundColor:C.bg, borderRadius:10, padding:11, fontSize:14, maxHeight:80 }}
          onSubmitEditing={send} />
        <TouchableOpacity onPress={send} style={{ backgroundColor:C.nearBlack, borderRadius:10, width:42, alignItems:'center', justifyContent:'center' }}>
          <Text style={{ color:C.white, fontSize:16 }}>↑</Text>
        </TouchableOpacity>
      </View>
      <View style={{ flexDirection:'row', gap:8, paddingHorizontal:14, paddingBottom:12, backgroundColor:C.white }}>
        <TouchableOpacity onPress={() => setTicketSheet(true)} style={{ flex:1, backgroundColor:C.bg, borderRadius:8, paddingVertical:8, alignItems:'center' }}>
          <Text style={{ fontSize:12, fontWeight:'600', color:C.nearBlack }}>🎫 Raise Ticket</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{ flex:1, backgroundColor:C.errBg, borderRadius:8, paddingVertical:8, alignItems:'center' }}>
          <Text style={{ fontSize:12, fontWeight:'600', color:C.err }}>🚨 Emergency</Text>
        </TouchableOpacity>
      </View>
      <Sheet visible={ticketSheet} onClose={() => setTicketSheet(false)} title="New Support Ticket">
        <Field label="Subject" required><View style={S.input}><Text style={{ color:C.light }}>Describe your issue…</Text></View></Field>
        <Field label="Category">
          <Select value="" options={['Maintenance','Payment','Agreement','Bank Change','Technical','Other']} onSelect={() => {}} placeholder="Select…" />
        </Field>
        <Field label="Details"><View style={[S.input,{minHeight:80}]}><Text style={{ color:C.light }}>Full description…</Text></View></Field>
        <Btn label="Submit Ticket" onPress={() => setTicketSheet(false)} />
      </Sheet>
    </KeyboardAvoidingView>
  );
}
