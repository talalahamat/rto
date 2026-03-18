export const fmtM = (n) => 'LKR ' + new Intl.NumberFormat('en').format(n);
export const fmt = (n) => new Intl.NumberFormat('en').format(n);

export const DATA = {
  buyers: [
    { id:'B001', name:'Priya Jayawardena', nic:'198756789V', phone:'0771234567', email:'priya@email.com', score:'A', scoreVal:88, pkg:'B', bank:'HDFC', property:'Colombo 07 — 2BR Apartment', propAddr:'Apt 8B, Kingsley Tower, Colombo 07', propVal:12500000, status:'Active', joinDate:'2024-03-15', monthsPaid:12, nextPay:'2026-04-01', nextAmt:75600, deposit:1000000, depositInterest:84000, agent:'Kasun Bandara', agentPhone:'0771122334', income:280000, employer:'MAS Holdings', empType:'Permanent', yrsEmployed:8, dob:'1987-03-15', address:'42/3 Park Road, Colombo 05', ecName:'Suresh Jayawardena', ecRel:'Spouse', ecPhone:'0772345678' },
    { id:'B002', name:'Nimal Perera', nic:'197834521V', phone:'0772345678', email:'nimal@email.com', score:'B', scoreVal:74, pkg:'A', bank:'BOC', property:'Dehiwala — 3BR Apartment', propAddr:'Apt 14, Coral Residencies, Dehiwala', propVal:15000000, status:'Active', joinDate:'2024-01-10', monthsPaid:14, nextPay:'2026-04-01', nextAmt:140000, deposit:2000000, depositInterest:197000, agent:'Dilini Fernando', agentPhone:'0773344556', income:420000, employer:'Dialog Axiata', empType:'Permanent', yrsEmployed:12, dob:'1978-06-22', address:'15 Temple Road, Nugegoda', ecName:'Nimali Perera', ecRel:'Spouse', ecPhone:'0779876543' },
    { id:'B003', name:'Chamari Silva', nic:'199012345V', phone:'0773456789', email:'chamari@email.com', score:'A', scoreVal:91, pkg:'B', bank:'Pending', property:'Nugegoda — 2BR Apartment', propAddr:'Apt 3A, Green Gardens, Nugegoda', propVal:11000000, status:'Bank Selection', joinDate:'2024-05-20', monthsPaid:0, nextPay:'—', nextAmt:70000, deposit:0, depositInterest:0, agent:'Kasun Bandara', agentPhone:'0771122334', income:195000, employer:'Softlogic Holdings', empType:'Permanent', yrsEmployed:5 },
    { id:'B004', name:'Roshan Fernando', nic:'198523456V', phone:'0774567890', email:'roshan@email.com', score:'C', scoreVal:62, pkg:'B', bank:'Peoples', property:'Moratuwa — 2BR Apartment', propAddr:'Apt 2C, Blue Horizon, Moratuwa', propVal:9500000, status:'Active', joinDate:'2023-11-01', monthsPaid:17, nextPay:'2026-04-01', nextAmt:81648, deposit:1000000, depositInterest:119000, agent:'Dilini Fernando', agentPhone:'0773344556', income:165000, employer:'Lanka Hospitals', empType:'Permanent', yrsEmployed:6 },
    { id:'B005', name:'Dilani Wickramasinghe', nic:'199234567V', phone:'0775678901', email:'dilani@email.com', score:'B', scoreVal:78, pkg:'A', bank:'HDFC', property:'Maharagama — 3BR House', propAddr:'No. 5, Flower Road, Maharagama', propVal:18000000, status:'Active', joinDate:'2024-02-28', monthsPaid:13, nextPay:'2026-04-01', nextAmt:140000, deposit:2000000, depositInterest:167000, agent:'Kasun Bandara', agentPhone:'0771122334', income:380000, employer:'Commercial Bank', empType:'Permanent', yrsEmployed:9 },
    { id:'B006', name:'Ajith Kumara', nic:'198045678V', phone:'0776789012', email:'ajith@email.com', score:'D', scoreVal:51, pkg:'B', bank:'Rejected', property:'—', propAddr:'', propVal:0, status:'Rejected', joinDate:'2024-06-10', monthsPaid:0, nextPay:'—', nextAmt:0, deposit:0, depositInterest:0, agent:'', agentPhone:'', income:120000, employer:'Self Employed', empType:'Self-Employed', yrsEmployed:2 },
    { id:'B007', name:'Suneetha Rathnayake', nic:'199156789V', phone:'0777890123', email:'suneetha@email.com', score:'A', scoreVal:85, pkg:'A', bank:'Comm', property:'Battaramulla — 3BR Apartment', propAddr:'Apt 12D, Lagoon Residencies, Battaramulla', propVal:16500000, status:'Active', joinDate:'2023-09-15', monthsPaid:19, nextPay:'2026-04-01', nextAmt:140000, deposit:2000000, depositInterest:258000, agent:'Dilini Fernando', agentPhone:'0773344556', income:450000, employer:'Unilever Lanka', empType:'Permanent', yrsEmployed:11 },
    { id:'B008', name:'Prasad Gunawardena', nic:'198767890V', phone:'0778901234', email:'prasad@email.com', score:'B', scoreVal:71, pkg:'B', bank:'HDFC', property:'Kirulapone — 2BR Apartment', propAddr:'Apt 7A, Siri Tower, Kirulapone', propVal:10800000, status:'Arrears', joinDate:'2024-04-01', monthsPaid:10, nextPay:'2026-03-01', nextAmt:75600, deposit:1000000, depositInterest:70000, agent:'Kasun Bandara', agentPhone:'0771122334', income:210000, employer:'Cargills Food City', empType:'Permanent', yrsEmployed:7 },
  ],
  banks: [
    { id:'BNK001', name:'HDFC Bank Sri Lanka', code:'HDFC', contact:'Ranjith Mendis', email:'ranjith@hdfc.lk', phone:'0114762000', active:true, saas:150000, portfolio:3, totalValue:41300000, yield:10.9, joined:'2024-01-01' },
    { id:'BNK002', name:'Bank of Ceylon', code:'BOC', contact:'Chandani Perera', email:'chandani@boc.lk', phone:'0112204444', active:true, saas:150000, portfolio:1, totalValue:15000000, yield:10.2, joined:'2024-02-15' },
    { id:'BNK003', name:'Peoples Bank', code:'Peoples', contact:'Anura Dissanayake', email:'anura@peoplesbank.lk', phone:'0112327841', active:true, saas:150000, portfolio:1, totalValue:9500000, yield:9.8, joined:'2024-03-01' },
    { id:'BNK004', name:'Commercial Bank', code:'Comm', contact:'Nirosha Jayasuriya', email:'nirosha@combank.lk', phone:'0112353000', active:true, saas:150000, portfolio:1, totalValue:16500000, yield:10.5, joined:'2024-04-10' },
    { id:'BNK005', name:'Seylan Bank', code:'Seylan', contact:'', email:'', phone:'', active:false, saas:0, portfolio:0, totalValue:0, yield:0, joined:'' },
  ],
  payments: [
    { id:'PAY001', date:'2026-03-01', amount:75600, method:'Direct Debit', status:'Paid', ref:'RTO-PAY-2026-03-001', late:false },
    { id:'PAY002', date:'2026-02-01', amount:75600, method:'Direct Debit', status:'Paid', ref:'RTO-PAY-2026-02-001', late:false },
    { id:'PAY003', date:'2026-01-01', amount:75600, method:'Direct Debit', status:'Paid', ref:'RTO-PAY-2026-01-001', late:false },
    { id:'PAY004', date:'2025-12-01', amount:75600, method:'Bank Transfer', status:'Paid', ref:'RTO-PAY-2025-12-001', late:false },
    { id:'PAY005', date:'2025-11-01', amount:75600, method:'Direct Debit', status:'Paid', ref:'RTO-PAY-2025-11-001', late:false },
    { id:'PAY006', date:'2025-10-01', amount:75600, method:'Direct Debit', status:'Paid', ref:'RTO-PAY-2025-10-001', late:false },
    { id:'PAY007', date:'2025-09-01', amount:75600, method:'Direct Debit', status:'Paid', ref:'RTO-PAY-2025-09-001', late:false },
    { id:'PAY008', date:'2025-08-01', amount:70000, method:'Direct Debit', status:'Paid', ref:'RTO-PAY-2025-08-001', late:false },
    { id:'PAY009', date:'2025-07-01', amount:70000, method:'Direct Debit', status:'Paid', ref:'RTO-PAY-2025-07-001', late:false },
    { id:'PAY010', date:'2025-06-01', amount:70000, method:'Bank Transfer', status:'Paid', ref:'RTO-PAY-2025-06-001', late:true },
    { id:'PAY011', date:'2025-05-01', amount:70000, method:'Direct Debit', status:'Paid', ref:'RTO-PAY-2025-05-001', late:false },
    { id:'PAY012', date:'2025-04-01', amount:70000, method:'Direct Debit', status:'Paid', ref:'RTO-PAY-2025-04-001', late:false },
  ],
  documents: [
    { id:'DOC001', name:'NIC — Certified Copy', category:'Identity', status:'Verified', date:'2024-03-15', size:'1.2 MB', expiry:'2030-03-15', icon:'🪪' },
    { id:'DOC002', name:'CSA Agreement (Signed)', category:'Legal', status:'Signed', date:'2024-03-28', size:'3.8 MB', expiry:'2044-03-28', icon:'📝' },
    { id:'DOC003', name:'Proof of Income', category:'Financial', status:'Verified', date:'2024-03-16', size:'0.8 MB', expiry:'—', icon:'💵' },
    { id:'DOC004', name:'CRIB Report', category:'Credit', status:'Verified', date:'2024-03-18', size:'2.1 MB', expiry:'2026-03-18', icon:'📊' },
    { id:'DOC005', name:'Employment Letter', category:'Employment', status:'Verified', date:'2024-03-16', size:'0.5 MB', expiry:'—', icon:'💼' },
    { id:'DOC006', name:'Bank Statements (6mo)', category:'Financial', status:'Verified', date:'2024-03-17', size:'4.2 MB', expiry:'—', icon:'🏦' },
    { id:'DOC007', name:'Deposit Receipt', category:'Financial', status:'Received', date:'2024-03-28', size:'0.3 MB', expiry:'—', icon:'🧾' },
    { id:'DOC008', name:'Property Survey 2025', category:'Property', status:'Current', date:'2025-02-15', size:'5.6 MB', expiry:'2026-02-15', icon:'🏡' },
  ],
  messages: [
    { id:'M1', sender:'agent', name:'Kasun Bandara', text:'Good morning Priya! March payment received and confirmed by HDFC. You are on track.', time:'Mar 1, 9:04 AM', read:true },
    { id:'M2', sender:'me', name:'Me', text:'Thank you Kasun! Quick question — when is the next annual property survey scheduled?', time:'Mar 1, 11:30 AM', read:true },
    { id:'M3', sender:'agent', name:'Kasun Bandara', text:'Annual survey is scheduled for April 1st, 2026. The surveyor will contact you 3 days prior.', time:'Mar 1, 2:15 PM', read:true },
    { id:'M4', sender:'me', name:'Me', text:'Perfect, thanks. Also raised a maintenance request for the kitchen sink — assigned to a contractor?', time:'Mar 10, 10:00 AM', read:true },
    { id:'M5', sender:'agent', name:'Kasun Bandara', text:'Yes! Silva Plumbing Co. has been assigned. They will call today. Priority High — resolved within 48 hours.', time:'Mar 10, 11:45 AM', read:true },
    { id:'M6', sender:'agent', name:'Kasun Bandara', text:'Your deposit has now accrued LKR 84,000 in interest. Year 2 will add approximately LKR 90,000.', time:'Mar 14, 3:30 PM', read:false },
  ],
  maintenance: [
    { id:'MNT001', buyerId:'B001', buyer:'Priya Jayawardena', prop:'Colombo 07', type:'Plumbing', desc:'Kitchen sink pipe leak', priority:'High', status:'In Progress', date:'2026-03-10', amount:12500, markup:1875, total:14375, contractor:'Silva Plumbing Co.', billStatus:'Pending', update:'Parts ordered, completion Mar 20' },
    { id:'MNT002', buyerId:'B002', buyer:'Nimal Perera', prop:'Dehiwala', type:'Electrical', desc:'Light fitting replacement', priority:'Medium', status:'Completed', date:'2026-02-20', amount:8000, markup:1200, total:9200, contractor:'Power Fix Ltd', billStatus:'Billed', update:'Completed Feb 22.' },
    { id:'MNT003', buyerId:'B005', buyer:'Dilani Wickramasinghe', prop:'Maharagama', type:'General', desc:'Front door lock replacement', priority:'Low', status:'Pending', date:'2026-03-14', amount:5500, markup:825, total:6325, contractor:'Pending', billStatus:'Pending', update:'Awaiting assignment' },
    { id:'MNT004', buyerId:'B004', buyer:'Roshan Fernando', prop:'Moratuwa', type:'Plumbing', desc:'Bathroom toilet flush', priority:'Medium', status:'Completed', date:'2026-02-28', amount:9000, markup:1350, total:10350, contractor:'Silva Plumbing Co.', billStatus:'Billed', update:'Completed Mar 2.' },
    { id:'MNT005', buyerId:'B008', buyer:'Prasad Gunawardena', prop:'Kirulapone', type:'Electrical', desc:'AC socket installation', priority:'Low', status:'Pending', date:'2026-03-12', amount:35000, markup:5250, total:40250, contractor:'Cool Systems', billStatus:'Pending', update:'Awaiting buyer confirmation' },
  ],
  arrears: [
    { id:'AR001', buyerId:'B008', buyer:'Prasad Gunawardena', bank:'HDFC', months:2, amount:151200, daysOverdue:45, status:'Notice Sent', lastContact:'2026-03-01', notes:'Buyer requests 2-week extension' },
    { id:'AR002', buyerId:'B004', buyer:'Roshan Fernando', bank:'Peoples', months:1, amount:81648, daysOverdue:18, status:'Monitoring', lastContact:'2026-03-10', notes:'Payment promised by March 20' },
  ],
  pendingApps: [
    { id:'APP001', name:'Kavya Mendis', nic:'199345678V', phone:'0779876543', score:'A', scoreVal:83, pkg:'B', propVal:11500000, property:'Nugegoda 2BR', income:220000, employer:'Nations Trust Bank', applied:'2026-03-10' },
    { id:'APP002', name:'Tharaka Dissanayake', nic:'198956123V', phone:'0771234567', score:'B', scoreVal:76, pkg:'A', propVal:14000000, property:'Rajagiriya 3BR', income:390000, employer:'Expolanka Holdings', applied:'2026-03-11' },
    { id:'APP003', name:'Malintha Jayakody', nic:'199478234V', phone:'0778901234', score:'A', scoreVal:90, pkg:'B', propVal:10500000, property:'Dehiwala 2BR', income:185000, employer:'Hatton National Bank', applied:'2026-03-12' },
    { id:'APP004', name:'Ruwanthi Gamage', nic:'199067890V', phone:'0772345678', score:'B', scoreVal:72, pkg:'A', propVal:17000000, property:'Battaramulla 3BR', income:410000, employer:'Brandix Lanka', applied:'2026-03-13' },
    { id:'APP005', name:'Ishan Pathirana', nic:'200112345V', phone:'0773456789', score:'C', scoreVal:65, pkg:'B', propVal:9800000, property:'Moratuwa 2BR', income:155000, employer:'Aitken Spence', applied:'2026-03-14' },
  ],
  tickets: [
    { id:'TKT001', subject:'Payment not reflecting in portal', buyer:'Priya Jayawardena', type:'Technical', priority:'High', status:'Open', created:'2026-03-14', agent:'', lastUpdate:'2026-03-14' },
    { id:'TKT002', subject:'Request to change bank offer', buyer:'Nimal Perera', type:'Request', priority:'Medium', status:'In Review', created:'2026-03-10', agent:'Kasun Bandara', lastUpdate:'2026-03-13' },
    { id:'TKT003', subject:'Maintenance billing dispute', buyer:'Nimal Perera', type:'Dispute', priority:'High', status:'Resolved', created:'2026-02-25', agent:'Dilini Fernando', lastUpdate:'2026-03-01' },
    { id:'TKT004', subject:'Question about deposit interest', buyer:'Roshan Fernando', type:'Enquiry', priority:'Low', status:'Resolved', created:'2026-02-18', agent:'Dilini Fernando', lastUpdate:'2026-02-20' },
    { id:'TKT005', subject:'Package A vs B — consultation', buyer:'Chamari Silva', type:'Enquiry', priority:'Low', status:'Open', created:'2026-03-12', agent:'', lastUpdate:'2026-03-12' },
    { id:'TKT006', subject:'Arrears — request payment plan', buyer:'Prasad Gunawardena', type:'Arrears', priority:'High', status:'In Review', created:'2026-03-02', agent:'Kasun Bandara', lastUpdate:'2026-03-10' },
  ],
  agents: [
    { id:'AGT001', name:'Kasun Bandara', phone:'0771122334', email:'kasun@andhholdings.lk', territory:'Colombo, Nugegoda, Maharagama, Kirulapone', buyers:4, activeCSAs:3, monthlyTarget:5, monthlyActual:3, ytdTarget:12, ytdActual:9, totalOriginated:9, commissionYTD:337500, rating:4.7, joined:'2023-06-01' },
    { id:'AGT002', name:'Dilini Fernando', phone:'0773344556', email:'dilini@andhholdings.lk', territory:'Dehiwala, Moratuwa, Battaramulla', buyers:4, activeCSAs:3, monthlyTarget:5, monthlyActual:2, ytdTarget:12, ytdActual:8, totalOriginated:8, commissionYTD:300000, rating:4.5, joined:'2023-09-01' },
  ],
  notifications: {
    buyer: [
      { id:'n1', icon:'💰', title:'Payment Processed', sub:'March 2026 — LKR 75,600 received', time:'Today', read:false },
      { id:'n2', icon:'💬', title:'New Message from Kasun', sub:'Your deposit has accrued LKR 84,000...', time:'Mar 14', read:false },
      { id:'n3', icon:'🏠', title:'Survey Scheduled', sub:'Annual survey April 1, 2026', time:'Mar 8', read:true },
      { id:'n4', icon:'🔧', title:'Maintenance Update', sub:'Kitchen sink — contractor confirmed', time:'Mar 10', read:true },
    ],
    bank: [
      { id:'n1', icon:'📋', title:'5 New Applications', sub:'Awaiting your offer', time:'Today', read:false },
      { id:'n2', icon:'⚠️', title:'Arrears Alert', sub:'Prasad G — 45 days overdue', time:'Yesterday', read:false },
      { id:'n3', icon:'💹', title:'Monthly Report Ready', sub:'February 2026 yield report', time:'Mar 1', read:true },
    ],
    admin: [
      { id:'n1', icon:'🎫', title:'2 New Support Tickets', sub:'TKT001 and TKT005 unassigned', time:'Today', read:false },
      { id:'n2', icon:'⚠️', title:'2 Arrears Cases', sub:'AR001 & AR002 require review', time:'Yesterday', read:false },
      { id:'n3', icon:'👷', title:'Agent Monthly Review', sub:'March performance available', time:'Mar 14', read:true },
    ],
  },
};

export const getPkgBSchedule = () => {
  const s = []; let a = 70000;
  for (let y = 1; y <= 20; y++) { s.push({ year: y, monthly: Math.round(a), annual: Math.round(a * 12) }); a *= 1.08; }
  return s;
};

export const getPkgASchedule = () => {
  const steps = [[1,2,140000],[3,4,120000],[5,7,100000],[8,11,80000],[12,16,65000],[17,20,55000]];
  const s = [];
  for (const [from, to, amt] of steps) for (let y = from; y <= to; y++) s.push({ year: y, monthly: amt, annual: amt * 12 });
  return s;
};

export const PORTALS = {
  buyer: { label: 'Buyer Portal', user: 'Priya Jayawardena', initials: 'PJ', color: '#0A0A0A' },
  bank: { label: 'Bank Portal', user: 'Ranjith Mendis — HDFC', initials: 'RM', color: '#1D4ED8' },
  admin: { label: 'Admin Portal', user: 'Admin User', initials: 'AU', color: '#7C3AED' },
};
