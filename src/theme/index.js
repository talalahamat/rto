import { StyleSheet, Platform } from 'react-native';

export const C = {
  black:      '#0A0A0A',
  nearBlack:  '#1C1C1C',
  dark:       '#2E2E2E',
  mid:        '#5A5A5A',
  light:      '#9A9A9A',
  border:     '#E2E2E2',
  bg:         '#F6F6F6',
  white:      '#FFFFFF',
  ok:         '#15803D',
  okBg:       '#DCFCE7',
  warn:       '#B45309',
  warnBg:     '#FEF3C7',
  err:        '#B91C1C',
  errBg:      '#FEE2E2',
  info:       '#1D4ED8',
  infoBg:     '#DBEAFE',
  purple:     '#7C3AED',
  purpleBg:   '#F3E8FF',
};

export const F = {
  serif:    Platform.OS === 'ios' ? 'Georgia' : 'serif',
  sans:     Platform.OS === 'ios' ? 'System' : 'Roboto',
  mono:     Platform.OS === 'ios' ? 'Courier New' : 'monospace',
};

export const S = StyleSheet.create({
  // Layout
  flex1:      { flex: 1 },
  flexRow:    { flexDirection: 'row' },
  flexRowC:   { flexDirection: 'row', alignItems: 'center' },
  flexRowSB:  { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' },
  flexWrap:   { flexDirection: 'row', flexWrap: 'wrap' },
  center:     { alignItems: 'center', justifyContent: 'center' },
  screen:     { flex: 1, backgroundColor: C.bg },
  scroll:     { flex: 1, backgroundColor: C.bg },
  pad:        { padding: 16 },
  padH:       { paddingHorizontal: 16 },
  padV:       { paddingVertical: 12 },
  gap4:       { gap: 4 },
  gap6:       { gap: 6 },
  gap8:       { gap: 8 },
  gap10:      { gap: 10 },
  gap12:      { gap: 12 },
  gap14:      { gap: 14 },
  gap16:      { gap: 16 },

  // Cards
  card: {
    backgroundColor: C.white,
    borderRadius: 12,
    padding: 16,
    borderWidth: 1,
    borderColor: C.border,
    marginBottom: 12,
  },
  cardFlat: {
    backgroundColor: C.white,
    borderRadius: 8,
    padding: 14,
    borderWidth: 1,
    borderColor: C.border,
  },

  // Typography
  h1: { fontFamily: F.serif, fontSize: 26, fontWeight: '400', color: C.nearBlack, lineHeight: 32 },
  h2: { fontFamily: F.serif, fontSize: 20, fontWeight: '400', color: C.nearBlack },
  h3: { fontSize: 16, fontWeight: '600', color: C.nearBlack },
  h4: { fontSize: 14, fontWeight: '600', color: C.nearBlack },
  body: { fontSize: 14, color: C.nearBlack, lineHeight: 20 },
  bodyS: { fontSize: 13, color: C.nearBlack },
  muted: { fontSize: 13, color: C.mid },
  mutedS: { fontSize: 12, color: C.mid },
  small: { fontSize: 11, color: C.light },
  label: { fontSize: 11, fontWeight: '600', color: C.light, textTransform: 'uppercase', letterSpacing: 1 },
  mono: { fontFamily: F.mono, fontSize: 12, color: C.nearBlack },

  // Stat cards
  statCard: {
    backgroundColor: C.white,
    borderRadius: 12,
    padding: 14,
    borderWidth: 1,
    borderColor: C.border,
    flex: 1,
  },
  statLabel: { fontSize: 10, fontWeight: '600', color: C.light, textTransform: 'uppercase', letterSpacing: 1.2, marginBottom: 4 },
  statValue: { fontFamily: F.serif, fontSize: 22, fontWeight: '400', color: C.nearBlack, lineHeight: 28 },
  statSub: { fontSize: 11, color: C.mid, marginTop: 2 },

  // Buttons
  btn: {
    paddingHorizontal: 18,
    paddingVertical: 11,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  btnPrimary: { backgroundColor: C.nearBlack },
  btnSecondary: { backgroundColor: C.white, borderWidth: 1, borderColor: C.border },
  btnDanger: { backgroundColor: C.errBg, borderWidth: 1, borderColor: '#FECACA' },
  btnSuccess: { backgroundColor: C.okBg, borderWidth: 1, borderColor: '#BBF7D0' },
  btnSm: { paddingHorizontal: 12, paddingVertical: 7, borderRadius: 6 },
  btnLg: { paddingHorizontal: 24, paddingVertical: 14, borderRadius: 10 },
  btnPrimaryTxt: { color: C.white, fontSize: 14, fontWeight: '600' },
  btnSecondaryTxt: { color: C.nearBlack, fontSize: 14, fontWeight: '500' },
  btnDangerTxt: { color: C.err, fontSize: 13, fontWeight: '600' },
  btnSmTxt: { fontSize: 12, fontWeight: '600' },

  // Form
  input: {
    borderWidth: 1,
    borderColor: C.border,
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 10,
    fontSize: 14,
    color: C.nearBlack,
    backgroundColor: C.white,
  },
  inputFocus: { borderColor: C.nearBlack },
  fLabel: { fontSize: 12, fontWeight: '600', color: C.dark, marginBottom: 5 },
  fGroup: { marginBottom: 14 },

  // Badges
  badge: { paddingHorizontal: 8, paddingVertical: 2, borderRadius: 100, alignSelf: 'flex-start' },
  badgeOk:   { backgroundColor: C.okBg },
  badgeWarn: { backgroundColor: C.warnBg },
  badgeErr:  { backgroundColor: C.errBg },
  badgeInfo: { backgroundColor: C.infoBg },
  badgeGray: { backgroundColor: C.bg, borderWidth: 1, borderColor: C.border },
  badgeBlk:  { backgroundColor: C.nearBlack },
  badgeOkTxt:   { fontSize: 11, fontWeight: '600', color: C.ok },
  badgeWarnTxt: { fontSize: 11, fontWeight: '600', color: C.warn },
  badgeErrTxt:  { fontSize: 11, fontWeight: '600', color: C.err },
  badgeInfoTxt: { fontSize: 11, fontWeight: '600', color: C.info },
  badgeGrayTxt: { fontSize: 11, fontWeight: '600', color: C.mid },
  badgeBlkTxt:  { fontSize: 11, fontWeight: '600', color: C.white },

  // Dividers & rows
  divider: { height: 1, backgroundColor: C.border, marginVertical: 10 },
  row: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingVertical: 9, borderBottomWidth: 1, borderBottomColor: C.border },
  rowLast: { borderBottomWidth: 0 },
  rowKey: { fontSize: 12, color: C.mid, fontWeight: '500', flex: 1 },
  rowVal: { fontSize: 13, color: C.nearBlack, fontWeight: '500', textAlign: 'right', flex: 1 },

  // Progress bar
  pbar: { height: 5, backgroundColor: C.border, borderRadius: 3, overflow: 'hidden' },
  pbarFill: { height: 5, backgroundColor: C.nearBlack, borderRadius: 3 },

  // Alert
  alert: { padding: 12, borderRadius: 8, marginBottom: 12, flexDirection: 'row', gap: 8 },
  alertInfo: { backgroundColor: C.infoBg, borderWidth: 1, borderColor: '#BFDBFE' },
  alertWarn: { backgroundColor: C.warnBg, borderWidth: 1, borderColor: '#FDE68A' },
  alertOk: { backgroundColor: C.okBg, borderWidth: 1, borderColor: '#BBF7D0' },
  alertErr: { backgroundColor: C.errBg, borderWidth: 1, borderColor: '#FECACA' },
  alertTxt: { fontSize: 12.5, flex: 1, lineHeight: 18 },

  // Tab bars
  tabBar: { flexDirection: 'row', borderBottomWidth: 1, borderBottomColor: C.border, marginBottom: 12 },
  tabItem: { paddingHorizontal: 14, paddingBottom: 10, borderBottomWidth: 2, borderBottomColor: 'transparent' },
  tabItemActive: { borderBottomColor: C.nearBlack },
  tabTxt: { fontSize: 13, fontWeight: '500', color: C.light },
  tabTxtActive: { color: C.nearBlack },

  // Timeline
  tl: { paddingLeft: 22, position: 'relative' },
  tlLine: { position: 'absolute', left: 6, top: 6, bottom: 6, width: 1, backgroundColor: C.border },
  tlItem: { marginBottom: 16, position: 'relative' },
  tlDot: { position: 'absolute', left: -20, top: 4, width: 10, height: 10, borderRadius: 5, borderWidth: 2, borderColor: C.border, backgroundColor: C.white },
  tlDotDone: { backgroundColor: C.nearBlack, borderColor: C.nearBlack },
  tlDotCurrent: { backgroundColor: C.white, borderColor: C.nearBlack },
  tlDate: { fontSize: 11, fontWeight: '500', color: C.mid, marginBottom: 1 },
  tlText: { fontSize: 13, color: C.nearBlack },

  // Header
  headerBlk: {
    backgroundColor: C.black,
    paddingTop: Platform.OS === 'ios' ? 52 : 16,
    paddingHorizontal: 16,
    paddingBottom: 14,
  },
  headerTitle: { fontFamily: F.serif, fontSize: 22, fontWeight: '400', color: C.white },
  headerSub: { fontSize: 12, color: 'rgba(255,255,255,0.45)', marginTop: 2 },

  // Empty state
  empty: { alignItems: 'center', paddingVertical: 40 },
  emptyIcon: { fontSize: 40, marginBottom: 10, opacity: 0.2 },
  emptyText: { fontSize: 14, color: C.mid },

  // Shadow
  shadow: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.06,
    shadowRadius: 3,
    elevation: 2,
  },
});

export const gradeStyle = (g) => ({
  container: { backgroundColor: g === 'A' ? C.nearBlack : g === 'B' ? '#3A3A3A' : g === 'C' ? '#7A7A7A' : '#CCCCCC', paddingHorizontal: 8, paddingVertical: 2, borderRadius: 4 },
  text: { fontSize: 11, fontWeight: '700', color: g === 'D' ? '#1C1C1C' : C.white },
});

export const statusBadge = (status) => {
  const map = {
    'Active': { bg: C.okBg, txt: C.ok },
    'Arrears': { bg: C.errBg, txt: C.err },
    'Rejected': { bg: C.bg, txt: C.mid },
    'Bank Selection': { bg: C.warnBg, txt: C.warn },
    'Paid': { bg: C.okBg, txt: C.ok },
    'Pending': { bg: C.warnBg, txt: C.warn },
    'Verified': { bg: C.okBg, txt: C.ok },
    'Expired': { bg: C.errBg, txt: C.err },
    'Open': { bg: C.errBg, txt: C.err },
    'Resolved': { bg: C.okBg, txt: C.ok },
    'In Review': { bg: C.warnBg, txt: C.warn },
    'Completed': { bg: C.okBg, txt: C.ok },
    'In Progress': { bg: C.warnBg, txt: C.warn },
  };
  return map[status] || { bg: C.bg, txt: C.mid };
};
