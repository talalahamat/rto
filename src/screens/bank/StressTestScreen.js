
import React, { useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { C, S } from '../../theme';
import { Card, StatCard, Alert, PageHeader, Btn } from '../../components';
import { DATA, fmtM } from '../../data/mockData';

const presets = {
  mild: { income:15, prop:10, unemp:3 },
  moderate: { income:35, prop:25, unemp:8 },
  severe: { income:60, prop:40, unemp:15 },
};
export default function StressTestScreen({ navigation }) {
  const [scenario, setScenario] = useState('mild');
  const s = presets[scenario];
  const hdfc = DATA.buyers.filter(b => b.bank === 'HDFC');
  const atRisk = Math.round(hdfc.length * s.income / 100);
  const arrears = Math.min(hdfc.length, Math.round(atRisk * 0.6));
  const portfolioStressed = Math.round(hdfc.reduce((acc,b) => acc+b.propVal,0) * (1-s.prop/100));
  const lossRisk = Math.round(hdfc.reduce((acc,b) => acc+b.nextAmt,0) * arrears * 3);
  const severity = s.income < 20 ? 'Low' : s.income < 45 ? 'Medium' : 'High';

  return (
    <View style={S.screen}>
      <PageHeader title="Stress Test" subtitle="Portfolio resilience scenarios — HDFC" onBack={() => navigation.goBack()} />
      <ScrollView style={{ padding:16 }}>
        <Alert type="info" icon="ℹ️">Stress tests simulate portfolio performance under adverse conditions. Results are projections only.</Alert>
        <Card>
          <Text style={[S.h3,{marginBottom:12}]}>Scenario Preset</Text>
          <View style={{ flexDirection:'row', gap:8 }}>
            {['mild','moderate','severe'].map(sc => (
              <TouchableOpacity key={sc} onPress={() => setScenario(sc)} style={{ flex:1, padding:10, borderRadius:8, borderWidth:sc===scenario?2:1, borderColor:sc===scenario?C.nearBlack:C.border, backgroundColor:sc===scenario?C.nearBlack:C.white, alignItems:'center' }}>
                <Text style={{ fontSize:12, fontWeight:'700', color:sc===scenario?C.white:C.nearBlack, textTransform:'capitalize' }}>{sc}</Text>
              </TouchableOpacity>
            ))}
          </View>
          <View style={{ marginTop:14 }}>
            {[['Income Shock',`${s.income}% of buyers affected`],['Property Decline',`-${s.prop}% value drop`],['Unemployment',`+${s.unemp}pp increase`]].map(([k,v],i) => (
              <View key={i} style={[S.row,i===2&&S.rowLast]}><Text style={S.rowKey}>{k}</Text><Text style={[S.rowVal,{color:C.warn}]}>{v}</Text></View>
            ))}
          </View>
        </Card>
        <Card>
          <Text style={[S.h3,{marginBottom:12}]}>Scenario Results</Text>
          <View style={{ flexDirection:'row', gap:10, marginBottom:12 }}>
            <StatCard label="Buyers at Risk" value={`${atRisk}/${hdfc.length}`} style={{ flex:1 }} />
            <StatCard label="Projected Arrears" value={arrears} style={{ flex:1 }} />
          </View>
          {[['Stressed Portfolio Value',fmtM(portfolioStressed)],['3-Month Loss at Risk',fmtM(lossRisk)],['Overall Severity',severity],['Capital Buffer Required',fmtM(lossRisk*1.5)],['Recovery Probability',severity==='Low'?'95%':severity==='Medium'?'78%':'52%']].map(([k,v],i) => (
            <View key={i} style={[S.row,i===4&&S.rowLast]}><Text style={S.rowKey}>{k}</Text><Text style={[S.rowVal,{color:severity==='High'&&i>0?C.err:C.nearBlack}]}>{v}</Text></View>
          ))}
        </Card>
        <Card>
          <Text style={[S.h3,{marginBottom:12}]}>Historical Scenarios</Text>
          {[['Mild Recession (Mar 14)','2 arrears, LKR 227K at risk'],['Moderate Shock (Feb 28)','3 arrears, LKR 454K at risk'],['Severe Crisis (Jan 15)','5 arrears, full portfolio stress']].map(([s,r],i) => (
            <View key={i} style={{ paddingVertical:10, borderBottomWidth:i<2?1:0, borderBottomColor:C.border }}>
              <Text style={{ fontSize:13, fontWeight:'600' }}>{s}</Text>
              <Text style={S.mutedS}>{r}</Text>
            </View>
          ))}
        </Card>
      </ScrollView>
    </View>
  );
}
