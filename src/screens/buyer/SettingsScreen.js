
import React, { useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { C, S } from '../../theme';
import { Card, PageHeader, ToggleRow, Btn, Alert, Field, Select } from '../../components';

export default function SettingsScreen({ navigation }) {
  const [prefs, setPrefs] = useState({ payDue:true, payConfirm:true, lateWarn:true, maint:true, deposit:true, survey:true, agent:true, platform:false, directDebit:true });
  const toggle = k => setPrefs(p => ({ ...p, [k]: !p[k] }));

  return (
    <View style={S.screen}>
      <PageHeader title="Settings" subtitle="Notifications, reminders and account security" onBack={() => navigation.goBack()} />
      <ScrollView style={{ padding:16 }}>
        <Card>
          <Text style={[S.h3,{marginBottom:4}]}>Payment Reminders</Text>
          <Text style={[S.mutedS,{marginBottom:12}]}>Configure when and how you are reminded</Text>
          <ToggleRow label="Payment Due Reminder" sub="Remind me X days before due date" value={prefs.payDue} onValueChange={() => toggle('payDue')} />
          <ToggleRow label="Payment Confirmation" sub="Notify when payment is received" value={prefs.payConfirm} onValueChange={() => toggle('payConfirm')} />
          <ToggleRow label="Late Payment Warning" sub="Alert if payment fails or is overdue" value={prefs.lateWarn} onValueChange={() => toggle('lateWarn')} />
          <View style={{ marginTop:12 }}>
            <Field label="Remind me how many days before?">
              <Select value="3 days before" options={['1 day before','3 days before','5 days before','7 days before']} onSelect={() => {}} />
            </Field>
          </View>
        </Card>
        <Card>
          <Text style={[S.h3,{marginBottom:4}]}>Notification Preferences</Text>
          <Text style={[S.mutedS,{marginBottom:12}]}>Choose which updates you receive</Text>
          <ToggleRow label="Maintenance Updates" sub="Updates on open requests" value={prefs.maint} onValueChange={() => toggle('maint')} />
          <ToggleRow label="Deposit Interest Accruals" sub="Monthly deposit balance" value={prefs.deposit} onValueChange={() => toggle('deposit')} />
          <ToggleRow label="Survey Notifications" sub="Upcoming property surveys" value={prefs.survey} onValueChange={() => toggle('survey')} />
          <ToggleRow label="Agent Messages" sub="New messages from A&H agent" value={prefs.agent} onValueChange={() => toggle('agent')} />
          <ToggleRow label="Platform Announcements" sub="General news from A&H" value={prefs.platform} onValueChange={() => toggle('platform')} />
        </Card>
        <Card>
          <Text style={[S.h3,{marginBottom:12}]}>Direct Debit</Text>
          <Alert type="ok" icon="✅">Direct debit is active — payments auto-collected on the 1st.</Alert>
          <View style={[S.row]}><Text style={S.rowKey}>Bank</Text><Text style={S.rowVal}>HDFC Bank Sri Lanka</Text></View>
          <View style={[S.row]}><Text style={S.rowKey}>Account</Text><Text style={S.rowVal}>XXXX-XXXX-1234</Text></View>
          <View style={[S.row,S.rowLast]}><Text style={S.rowKey}>Collection Date</Text><Text style={S.rowVal}>1st of each month</Text></View>
          <View style={{ flexDirection:'row', gap:8, marginTop:12 }}>
            <Btn label="Update" type="secondary" size="sm" style={{ flex:1 }} onPress={() => {}} />
            <Btn label="Cancel DD" type="danger" size="sm" style={{ flex:1 }} onPress={() => {}} />
          </View>
        </Card>
        <Card>
          <Text style={[S.h3,{marginBottom:12}]}>Security</Text>
          <Field label="Current Password"><View style={S.input}><Text style={{ color:C.light }}>••••••••</Text></View></Field>
          <Field label="New Password"><View style={S.input}><Text style={{ color:C.light }}>New password</Text></View></Field>
          <Field label="Confirm New Password"><View style={S.input}><Text style={{ color:C.light }}>Confirm</Text></View></Field>
          <ToggleRow label="Two-Factor Authentication" sub="Send OTP via SMS on login" value={false} onValueChange={() => {}} />
          <Btn label="Change Password" style={{ marginTop:12 }} onPress={() => {}} />
        </Card>
      </ScrollView>
    </View>
  );
}
