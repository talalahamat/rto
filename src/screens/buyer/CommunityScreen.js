
import React, { useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { C, S } from '../../theme';
import { Card, Badge, PageHeader, Chips, Sheet, Field, Select, Btn } from '../../components';

const posts = [
  { id:1, author:'Dilani W.', avatar:'DW', time:'2 hours ago', text:'Just made my 13th payment! 13 down, 227 to go. Feeling great about this decision.', likes:12, comments:4, tag:'Milestone' },
  { id:2, author:'Suneetha R.', avatar:'SR', time:'Yesterday', text:'Tip: the 8% annual increase sounds scary but the actual amounts are very manageable even in Year 5.', likes:28, comments:9, tag:'Tip' },
  { id:3, author:'Nimal P.', avatar:'NP', time:'2 days ago', text:'My plumbing request was resolved in 36 hours. Very impressed with Silva Plumbing Co.', likes:15, comments:3, tag:'Maintenance' },
  { id:4, author:'Roshan F.', avatar:'RF', time:'5 days ago', text:'Finally got off the arrears list! Kasun at A&H was incredibly patient. 10/10 support.', likes:34, comments:8, tag:'Success' },
];
const tags = ['All','Milestone','Tip','Question','Maintenance','Success'];

export default function CommunityScreen({ navigation }) {
  const [cat, setCat] = useState('All');
  const [newPost, setNewPost] = useState(false);
  const [likes, setLikes] = useState({});
  const visible = cat === 'All' ? posts : posts.filter(p => p.tag === cat);

  return (
    <View style={S.screen}>
      <PageHeader title="Community Board" subtitle="Connect with fellow buyers" onBack={() => navigation.goBack()} right={
        <TouchableOpacity onPress={() => setNewPost(true)} style={{ backgroundColor:C.white, borderRadius:8, paddingHorizontal:12, paddingVertical:6 }}>
          <Text style={{ fontSize:13, fontWeight:'600', color:C.black }}>✏️ Post</Text>
        </TouchableOpacity>
      } />
      <Chips options={tags} selected={cat} onSelect={setCat} />
      <ScrollView style={{ paddingHorizontal:16 }}>
        {visible.map(p => (
          <Card key={p.id} style={{ marginBottom:10 }}>
            <View style={{ flexDirection:'row', alignItems:'center', gap:10, marginBottom:10 }}>
              <View style={{ width:34, height:34, backgroundColor:C.nearBlack, borderRadius:17, alignItems:'center', justifyContent:'center' }}>
                <Text style={{ fontSize:11, fontWeight:'700', color:C.white }}>{p.avatar}</Text>
              </View>
              <View style={{ flex:1 }}>
                <Text style={{ fontSize:13, fontWeight:'600' }}>{p.author}</Text>
                <Text style={{ fontSize:11, color:C.mid }}>{p.time}</Text>
              </View>
              <Badge label={p.tag} type="gray" />
            </View>
            <Text style={{ fontSize:13, lineHeight:19, color:C.nearBlack, marginBottom:12 }}>{p.text}</Text>
            <View style={{ flexDirection:'row', gap:16, borderTopWidth:1, borderTopColor:C.border, paddingTop:10 }}>
              <TouchableOpacity onPress={() => setLikes(l => ({ ...l, [p.id]: (l[p.id]||p.likes)+1 }))}
                style={{ flexDirection:'row', alignItems:'center', gap:4 }}>
                <Text>❤️</Text>
                <Text style={{ fontSize:13, color:C.mid }}>{likes[p.id] || p.likes}</Text>
              </TouchableOpacity>
              <TouchableOpacity style={{ flexDirection:'row', alignItems:'center', gap:4 }}>
                <Text>💬</Text>
                <Text style={{ fontSize:13, color:C.mid }}>{p.comments}</Text>
              </TouchableOpacity>
            </View>
          </Card>
        ))}
      </ScrollView>
      <Sheet visible={newPost} onClose={() => setNewPost(false)} title="New Post">
        <Field label="Category">
          <Select value="" options={['Milestone','Tip','Question','Maintenance','Success','General']} onSelect={() => {}} />
        </Field>
        <Field label="Your Post"><View style={[S.input,{minHeight:100}]}><Text style={{ color:C.light }}>Share your experience or tip…</Text></View></Field>
        <Text style={{ fontSize:12, color:C.mid, marginBottom:12 }}>Posts are visible to all Rent To Own buyers. A&H moderates the board.</Text>
        <Btn label="Post" onPress={() => setNewPost(false)} />
      </Sheet>
    </View>
  );
}
