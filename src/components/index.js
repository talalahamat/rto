import React, { useState } from 'react';
import { View, Text, TouchableOpacity, TextInput, ScrollView, Modal, ActivityIndicator, Switch } from 'react-native';
import { S, C, gradeStyle, statusBadge } from '../theme';
import { fmtM } from '../data/mockData';

// ─── Badge ───────────────────────────────────────────────────────────────────
export const Badge = ({ label, type = 'gray' }) => {
  const map = { ok:'Ok', warn:'Warn', err:'Err', info:'Info', gray:'Gray', blk:'Blk', purple:'purple' };
  const styles = {
    ok:     { bg: C.okBg,     txt: C.ok },
    warn:   { bg: C.warnBg,   txt: C.warn },
    err:    { bg: C.errBg,    txt: C.err },
    info:   { bg: C.infoBg,   txt: C.info },
    gray:   { bg: C.bg,       txt: C.mid,    border: true },
    blk:    { bg: C.nearBlack,txt: C.white },
    purple: { bg: C.purpleBg, txt: C.purple },
  };
  const s = styles[type] || styles.gray;
  return (
    <View style={[{ backgroundColor: s.bg, paddingHorizontal: 8, paddingVertical: 2, borderRadius: 100, alignSelf: 'flex-start' }, s.border && { borderWidth: 1, borderColor: C.border }]}>
      <Text style={{ fontSize: 11, fontWeight: '600', color: s.txt }}>{label}</Text>
    </View>
  );
};

export const StatusBadge = ({ status }) => {
  const s = statusBadge(status);
  return (
    <View style={{ backgroundColor: s.bg, paddingHorizontal: 8, paddingVertical: 2, borderRadius: 100, alignSelf: 'flex-start' }}>
      <Text style={{ fontSize: 11, fontWeight: '600', color: s.txt }}>{status}</Text>
    </View>
  );
};

export const GradeBadge = ({ grade }) => {
  const g = gradeStyle(grade);
  return (
    <View style={g.container}>
      <Text style={g.text}>{grade}</Text>
    </View>
  );
};

// ─── Buttons ─────────────────────────────────────────────────────────────────
export const Btn = ({ label, onPress, type = 'primary', size = 'md', icon, disabled, style }) => {
  const types = {
    primary:   { bg: C.nearBlack, txt: C.white, border: 'transparent' },
    secondary: { bg: C.white,     txt: C.nearBlack, border: C.border },
    danger:    { bg: C.errBg,     txt: C.err,  border: '#FECACA' },
    success:   { bg: C.okBg,      txt: C.ok,   border: '#BBF7D0' },
    ghost:     { bg: 'transparent', txt: C.nearBlack, border: 'transparent' },
  };
  const sizes = {
    sm: { px: 12, py: 6, fs: 12 },
    md: { px: 18, py: 10, fs: 14 },
    lg: { px: 22, py: 14, fs: 15 },
  };
  const t = types[type] || types.primary;
  const z = sizes[size] || sizes.md;
  return (
    <TouchableOpacity
      onPress={onPress}
      disabled={disabled}
      activeOpacity={0.75}
      style={[{ backgroundColor: t.bg, borderWidth: 1, borderColor: t.border, borderRadius: 8, paddingHorizontal: z.px, paddingVertical: z.py, flexDirection: 'row', alignItems: 'center', justifyContent: 'center', gap: 6, opacity: disabled ? 0.5 : 1 }, style]}
    >
      {icon && <Text style={{ fontSize: 14 }}>{icon}</Text>}
      <Text style={{ fontSize: z.fs, fontWeight: '600', color: t.txt }}>{label}</Text>
    </TouchableOpacity>
  );
};

// ─── Card ─────────────────────────────────────────────────────────────────────
export const Card = ({ children, style, onPress }) => {
  const content = (
    <View style={[S.card, style]}>
      {children}
    </View>
  );
  if (onPress) return <TouchableOpacity onPress={onPress} activeOpacity={0.85}>{content}</TouchableOpacity>;
  return content;
};

// ─── Section header ──────────────────────────────────────────────────────────
export const SectionHeader = ({ title, subtitle, right }) => (
  <View style={{ marginBottom: 14 }}>
    <View style={[S.flexRowSB, { marginBottom: subtitle ? 2 : 0 }]}>
      <Text style={S.h2}>{title}</Text>
      {right}
    </View>
    {subtitle && <Text style={S.muted}>{subtitle}</Text>}
  </View>
);

// ─── Stat card ───────────────────────────────────────────────────────────────
export const StatCard = ({ label, value, sub, subColor, style }) => (
  <View style={[S.statCard, style]}>
    <Text style={S.statLabel}>{label}</Text>
    <Text style={S.statValue}>{value}</Text>
    {sub && <Text style={[S.statSub, subColor && { color: subColor }]}>{sub}</Text>}
  </View>
);

// ─── Stat row ────────────────────────────────────────────────────────────────
export const StatRow = ({ label, value, valueStyle, last }) => (
  <View style={[S.row, last && S.rowLast]}>
    <Text style={S.rowKey}>{label}</Text>
    <Text style={[S.rowVal, valueStyle]}>{value}</Text>
  </View>
);

// ─── Alert ───────────────────────────────────────────────────────────────────
export const Alert = ({ type = 'info', children, icon }) => {
  const types = {
    info:  [S.alertInfo, '#1E3A8A'],
    warn:  [S.alertWarn, '#92400E'],
    ok:    [S.alertOk,   '#14532D'],
    err:   [S.alertErr,  '#7F1D1D'],
  };
  const [style, color] = types[type] || types.info;
  return (
    <View style={[S.alert, style]}>
      {icon && <Text style={{ fontSize: 14 }}>{icon}</Text>}
      <Text style={[S.alertTxt, { color }]}>{children}</Text>
    </View>
  );
};

// ─── Form field ──────────────────────────────────────────────────────────────
export const Field = ({ label, children, required }) => (
  <View style={S.fGroup}>
    <Text style={S.fLabel}>{label}{required && ' *'}</Text>
    {children}
  </View>
);

export const Input = ({ value, onChangeText, placeholder, secureTextEntry, keyboardType, multiline, editable = true, style }) => (
  <TextInput
    value={value}
    onChangeText={onChangeText}
    placeholder={placeholder}
    placeholderTextColor={C.light}
    secureTextEntry={secureTextEntry}
    keyboardType={keyboardType}
    multiline={multiline}
    editable={editable}
    style={[S.input, multiline && { minHeight: 80, textAlignVertical: 'top' }, !editable && { backgroundColor: C.bg, color: C.mid }, style]}
  />
);

export const Select = ({ value, options, onSelect, placeholder }) => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <TouchableOpacity onPress={() => setOpen(true)} style={[S.input, { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }]}>
        <Text style={{ fontSize: 14, color: value ? C.nearBlack : C.light }}>{value || placeholder || 'Select…'}</Text>
        <Text style={{ color: C.mid }}>▾</Text>
      </TouchableOpacity>
      <Modal visible={open} transparent animationType="slide">
        <TouchableOpacity style={{ flex: 1, backgroundColor: 'rgba(0,0,0,0.4)' }} onPress={() => setOpen(false)} />
        <View style={{ backgroundColor: C.white, borderTopLeftRadius: 16, borderTopRightRadius: 16, maxHeight: '60%' }}>
          <View style={{ padding: 16, borderBottomWidth: 1, borderBottomColor: C.border }}>
            <Text style={S.h3}>Select option</Text>
          </View>
          <ScrollView>
            {options.map((opt, i) => (
              <TouchableOpacity key={i} onPress={() => { onSelect(opt); setOpen(false); }} style={{ padding: 16, borderBottomWidth: 1, borderBottomColor: C.border, flexDirection: 'row', justifyContent: 'space-between' }}>
                <Text style={{ fontSize: 14, color: C.nearBlack }}>{opt}</Text>
                {value === opt && <Text style={{ color: C.ok }}>✓</Text>}
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>
      </Modal>
    </>
  );
};

// ─── Progress bar ────────────────────────────────────────────────────────────
export const ProgressBar = ({ pct, style }) => (
  <View style={[S.pbar, style]}>
    <View style={[S.pbarFill, { width: `${Math.min(100, pct)}%` }]} />
  </View>
);

// ─── Toggle row ──────────────────────────────────────────────────────────────
export const ToggleRow = ({ label, sub, value, onValueChange }) => (
  <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingVertical: 12, borderBottomWidth: 1, borderBottomColor: C.border }}>
    <View style={{ flex: 1, marginRight: 12 }}>
      <Text style={{ fontSize: 13, fontWeight: '500', color: C.nearBlack }}>{label}</Text>
      {sub && <Text style={{ fontSize: 12, color: C.mid, marginTop: 2 }}>{sub}</Text>}
    </View>
    <Switch value={value} onValueChange={onValueChange} trackColor={{ false: C.border, true: C.nearBlack }} thumbColor={C.white} />
  </View>
);

// ─── Table row ───────────────────────────────────────────────────────────────
export const TableRow = ({ cols, last }) => (
  <View style={{ flexDirection: 'row', paddingVertical: 10, borderBottomWidth: last ? 0 : 1, borderBottomColor: C.border, alignItems: 'center' }}>
    {cols.map((col, i) => (
      <View key={i} style={{ flex: col.flex || 1, paddingRight: 6 }}>
        {col.node ? col.node : <Text style={[{ fontSize: 13, color: C.nearBlack }, col.muted && { color: C.mid }, col.bold && { fontWeight: '600' }, col.mono && { fontFamily: 'monospace', fontSize: 11 }]} numberOfLines={col.lines || 1}>{col.val}</Text>}
      </View>
    ))}
  </View>
);

// ─── Section list header ─────────────────────────────────────────────────────
export const ListHeader = ({ children }) => (
  <View style={{ backgroundColor: C.bg, paddingHorizontal: 16, paddingVertical: 7, borderBottomWidth: 1, borderBottomColor: C.border }}>
    <Text style={{ fontSize: 11, fontWeight: '600', color: C.mid, textTransform: 'uppercase', letterSpacing: 1 }}>{children}</Text>
  </View>
);

// ─── Score ring ──────────────────────────────────────────────────────────────
export const ScoreRing = ({ pct, size = 80, label }) => {
  const r = (size - 10) / 2;
  const circ = 2 * Math.PI * r;
  const offset = circ * (1 - pct / 100);
  return (
    <View style={{ width: size, height: size, alignItems: 'center', justifyContent: 'center' }}>
      <View style={{ position: 'absolute', alignItems: 'center' }}>
        <Text style={{ fontSize: size * 0.25, fontWeight: '600', color: C.nearBlack }}>{pct}%</Text>
        {label && <Text style={{ fontSize: 9, color: C.mid }}>{label}</Text>}
      </View>
    </View>
  );
};

// ─── Timeline item ───────────────────────────────────────────────────────────
export const TLItem = ({ date, text, done, current, last }) => (
  <View style={{ paddingLeft: 20, marginBottom: last ? 0 : 14, position: 'relative' }}>
    <View style={{ position: 'absolute', left: 0, top: 4, width: 10, height: 10, borderRadius: 5, borderWidth: 2, borderColor: done ? C.nearBlack : current ? C.nearBlack : C.border, backgroundColor: done ? C.nearBlack : C.white }} />
    {!last && <View style={{ position: 'absolute', left: 4, top: 16, width: 1, height: 24, backgroundColor: C.border }} />}
    <Text style={{ fontSize: 11, fontWeight: '500', color: C.mid, marginBottom: 1 }}>{date}</Text>
    <Text style={{ fontSize: 13, color: C.nearBlack }}>{text}</Text>
  </View>
);

// ─── Loading ──────────────────────────────────────────────────────────────────
export const Loading = () => (
  <View style={[S.flex1, S.center]}>
    <ActivityIndicator color={C.nearBlack} />
  </View>
);

// ─── Empty state ─────────────────────────────────────────────────────────────
export const Empty = ({ icon = '📭', message = 'Nothing here yet' }) => (
  <View style={S.empty}>
    <Text style={{ fontSize: 36, marginBottom: 8, opacity: 0.25 }}>{icon}</Text>
    <Text style={S.emptyText}>{message}</Text>
  </View>
);

// ─── Bottom sheet modal ──────────────────────────────────────────────────────
export const Sheet = ({ visible, onClose, title, children, height = '80%' }) => (
  <Modal visible={visible} transparent animationType="slide" onRequestClose={onClose}>
    <View style={{ flex: 1 }}>
      <TouchableOpacity style={{ flex: 1, backgroundColor: 'rgba(0,0,0,0.5)' }} onPress={onClose} />
      <View style={{ backgroundColor: C.white, borderTopLeftRadius: 20, borderTopRightRadius: 20, maxHeight: height, minHeight: 200 }}>
        <View style={{ padding: 16, borderBottomWidth: 1, borderBottomColor: C.border, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
          <Text style={S.h3}>{title}</Text>
          <TouchableOpacity onPress={onClose} style={{ width: 28, height: 28, borderRadius: 14, backgroundColor: C.bg, alignItems: 'center', justifyContent: 'center' }}>
            <Text style={{ color: C.mid, fontSize: 12 }}>✕</Text>
          </TouchableOpacity>
        </View>
        <ScrollView style={{ padding: 16 }}>{children}</ScrollView>
      </View>
    </View>
  </Modal>
);

// ─── Filter chips ─────────────────────────────────────────────────────────────
export const Chips = ({ options, selected, onSelect }) => (
  <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{ marginBottom: 12 }} contentContainerStyle={{ gap: 8, paddingHorizontal: 16 }}>
    {options.map(opt => (
      <TouchableOpacity key={opt} onPress={() => onSelect(opt)} style={{ paddingHorizontal: 12, paddingVertical: 6, borderRadius: 100, borderWidth: 1, borderColor: selected === opt ? C.nearBlack : C.border, backgroundColor: selected === opt ? C.nearBlack : C.white }}>
        <Text style={{ fontSize: 12, fontWeight: '500', color: selected === opt ? C.white : C.mid }}>{opt}</Text>
      </TouchableOpacity>
    ))}
  </ScrollView>
);

// ─── Page header (black) ─────────────────────────────────────────────────────
export const PageHeader = ({ title, subtitle, onBack, right }) => (
  <View style={[S.headerBlk, { flexDirection: 'row', alignItems: 'flex-end', justifyContent: 'space-between' }]}>
    <View style={{ flex: 1 }}>
      {onBack && (
        <TouchableOpacity onPress={onBack} style={{ marginBottom: 6, flexDirection: 'row', alignItems: 'center', gap: 4 }}>
          <Text style={{ color: 'rgba(255,255,255,0.5)', fontSize: 14 }}>‹</Text>
          <Text style={{ color: 'rgba(255,255,255,0.5)', fontSize: 13 }}>Back</Text>
        </TouchableOpacity>
      )}
      <Text style={S.headerTitle}>{title}</Text>
      {subtitle && <Text style={S.headerSub}>{subtitle}</Text>}
    </View>
    {right}
  </View>
);

// ─── KPI card with color bar ──────────────────────────────────────────────────
export const KPICard = ({ label, value, sub, subColor, color = C.ok, style }) => (
  <View style={[S.statCard, { overflow: 'hidden' }, style]}>
    <View style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 3, backgroundColor: color }} />
    <Text style={[S.statLabel, { marginTop: 6 }]}>{label}</Text>
    <Text style={S.statValue}>{value}</Text>
    {sub && <Text style={[S.statSub, subColor && { color: subColor }]}>{sub}</Text>}
  </View>
);

// ─── Search bar ───────────────────────────────────────────────────────────────
export const SearchBar = ({ value, onChangeText, placeholder = 'Search…' }) => (
  <View style={{ flexDirection: 'row', alignItems: 'center', backgroundColor: C.white, borderWidth: 1, borderColor: C.border, borderRadius: 10, paddingHorizontal: 12, paddingVertical: 9, marginBottom: 12 }}>
    <Text style={{ fontSize: 14, marginRight: 8, color: C.light }}>🔍</Text>
    <TextInput value={value} onChangeText={onChangeText} placeholder={placeholder} placeholderTextColor={C.light} style={{ flex: 1, fontSize: 14, color: C.nearBlack }} />
  </View>
);

// ─── Buyer card (list item) ───────────────────────────────────────────────────
export const BuyerCard = ({ buyer, onPress }) => (
  <TouchableOpacity onPress={onPress} activeOpacity={0.85} style={[S.card, { marginBottom: 8 }]}>
    <View style={[S.flexRowSB, { marginBottom: 8 }]}>
      <View style={{ flexDirection: 'row', alignItems: 'center', gap: 10, flex: 1 }}>
        <View style={{ width: 38, height: 38, borderRadius: 19, backgroundColor: C.nearBlack, alignItems: 'center', justifyContent: 'center' }}>
          <Text style={{ fontSize: 12, fontWeight: '700', color: C.white }}>{buyer.name.split(' ').map(n => n[0]).join('')}</Text>
        </View>
        <View style={{ flex: 1 }}>
          <Text style={S.h4}>{buyer.name}</Text>
          <Text style={S.mutedS} numberOfLines={1}>{buyer.property || '—'}</Text>
        </View>
      </View>
      <View style={{ alignItems: 'flex-end', gap: 4 }}>
        <GradeBadge grade={buyer.score} />
        <StatusBadge status={buyer.status} />
      </View>
    </View>
    <View style={{ flexDirection: 'row', gap: 12 }}>
      <Text style={S.mutedS}>📅 {buyer.nextPay}</Text>
      {buyer.nextAmt > 0 && <Text style={[S.mutedS, { fontWeight: '600' }]}>{fmtM(buyer.nextAmt)}/mo</Text>}
      <Text style={S.mutedS}>🏦 {buyer.bank}</Text>
    </View>
  </TouchableOpacity>
);

export default {
  Badge, StatusBadge, GradeBadge, Btn, Card, SectionHeader, StatCard, StatRow,
  Alert, Field, Input, Select, ProgressBar, ToggleRow, TableRow, ListHeader,
  ScoreRing, TLItem, Loading, Empty, Sheet, Chips, PageHeader, KPICard, SearchBar, BuyerCard,
};
