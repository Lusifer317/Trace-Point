import React from "react";
import {
  Building2, Search, UserCheck, ShieldAlert, FileSearch,
  Users, UserMinus, Building, Eye, Fingerprint,
  MailWarning, UserX, AlertTriangle, Database, FileWarning,
  CreditCard, MessageCircleWarning, TrendingDown, ShieldBan,
  Wallet, HeartCrack, PhoneOff, Globe,
  Clock, FileText, Scale, Phone, UserSearch, Banknote,
  Link, Lock, Camera, MapPin, BookOpen, AlertCircle,
  CheckCircle, ShieldCheck,
} from "lucide-react";

export type Category = "Corporate" | "Private" | "Cyber" | "Cyber Fraud";

export interface ServiceStep {
  icon: React.ReactNode;
  label: string;
  detail: string;
}

export interface ServiceData {
  id: string;
  category: Category;
  icon: React.ReactNode;
  title: string;
  desc: string;
  situation: string;
  steps: ServiceStep[];
  outcome: string;
}

export const services: ServiceData[] = [
  // ─── Corporate ─────────────────────────────────────────────────────────────
  {
    id: "c1",
    category: "Corporate",
    icon: <Building2 size={22} />,
    title: "Due Diligence",
    desc: "Comprehensive background analysis of businesses before mergers, acquisitions, or partnerships.",
    situation:
      "A company is about to close a ₹40 crore acquisition. The target looks clean on paper — audited accounts, polished website, friendly founders. But what about the litigation buried in a district court? Or the silent director who left under a fraud allegation three years ago?",
    steps: [
      { icon: <Search size={18} />, label: "Entity deep-dive", detail: "We trace every directorship, shareholding pattern, and group company — including subsidiaries the target may not have disclosed." },
      { icon: <Scale size={18} />, label: "Legal & regulatory scan", detail: "Court records, ROC filings, NCLT proceedings, income tax disputes, GST defaults — we check every register." },
      { icon: <UserSearch size={18} />, label: "Key person verification", detail: "We verify the credentials, professional history, and reputation of founders and senior management independently." },
      { icon: <FileText size={18} />, label: "Structured report", detail: "A concise written report flagging red, amber, and green findings — formatted for your legal team and board." },
    ],
    outcome:
      "You get a clear picture of what you're actually buying — before the ink dries. Most clients say the report either gives them confidence to proceed or saves them from a serious mistake.",
  },
  {
    id: "c2",
    category: "Corporate",
    icon: <FileSearch size={22} />,
    title: "Vendor Verification",
    desc: "Rigorous vetting of suppliers and third-party vendors to prevent fraud and compliance risks.",
    situation:
      "A logistics company discovers that one of its top vendors — paid ₹1.2 crore over two years — is a shell firm. The invoices were real, the deliveries weren't. By the time accounts raised a flag, the vendor had vanished.",
    steps: [
      { icon: <Building size={18} />, label: "Existence check", detail: "Physical address verification, GST registration status, and ROC incorporation details — we confirm the vendor actually exists." },
      { icon: <UserCheck size={18} />, label: "Ownership trace", detail: "We identify the real owners, including shell company structures used to obscure beneficial ownership." },
      { icon: <AlertCircle size={18} />, label: "Fraud & default history", detail: "We search for prior cases of cheque bouncing, GST suspension, court judgments, and industry blacklisting." },
      { icon: <CheckCircle size={18} />, label: "Verified vendor report", detail: "A clear pass/flag/fail assessment your procurement team can act on immediately." },
    ],
    outcome:
      "Businesses that vet vendors before onboarding avoid the most common form of B2B fraud in India — fake supplier accounts that drain procurement budgets slowly and invisibly.",
  },
  {
    id: "c3",
    category: "Corporate",
    icon: <UserCheck size={22} />,
    title: "Executive Background",
    desc: "Deep verification of C-level candidates' credentials, history, and undisclosed liabilities.",
    situation:
      "A startup hired a CFO who claimed an MBA from ISB and a decade at a Big Four firm. Eight months later, they found the degree was fabricated and his previous employer had terminated him for misconduct — a fact that a two-minute LinkedIn check would never reveal.",
    steps: [
      { icon: <BookOpen size={18} />, label: "Education verification", detail: "Direct confirmation with institutions — not just certificate review. We detect fake degrees and inflated credentials." },
      { icon: <FileSearch size={18} />, label: "Employment history", detail: "We speak with HR contacts at previous employers and uncover gaps, terminations, and performance issues." },
      { icon: <Scale size={18} />, label: "Legal & financial check", detail: "Criminal records, civil litigation, defaults on personal loans, and directorship in failed companies." },
      { icon: <ShieldCheck size={18} />, label: "Reputation intelligence", detail: "Off-the-record feedback from professional networks — what people say when they're not speaking for a reference call." },
    ],
    outcome:
      "You hire with eyes open. For C-suite roles, a thorough background check pays for itself the moment it stops one bad appointment.",
  },
  {
    id: "c4",
    category: "Corporate",
    icon: <AlertTriangle size={22} />,
    title: "Investment Risk",
    desc: "Risk assessment and intelligence gathering for private equity and venture capital decisions.",
    situation:
      "A PE fund is doing a Series B in an edtech company. The numbers look strong, growth is real, but the founder has three previous ventures that failed — none mentioned in the pitch deck — and a civil dispute with a former co-founder still active in a Bangalore court.",
    steps: [
      { icon: <Search size={18} />, label: "Founder & promoter intelligence", detail: "Full history of all prior ventures, exits, and disputes — across all associated persons, not just the lead founder." },
      { icon: <Database size={18} />, label: "Financial trail", detail: "We review fund utilisation patterns, related-party transactions, and any signs of round-tripping or inflated revenue." },
      { icon: <Globe size={18} />, label: "Market & competitive check", detail: "We verify market claims independently — customer numbers, channel partnerships, regulatory licences." },
      { icon: <FileText size={18} />, label: "Investment risk memo", detail: "A structured briefing covering what is verified, what is unverifiable, and what warrants a deal condition or walk-away." },
    ],
    outcome:
      "Informed capital deployment. You know the full picture before you sign a term sheet — not after an NCLT filing two years down the line.",
  },
  {
    id: "c5",
    category: "Corporate",
    icon: <ShieldAlert size={22} />,
    title: "Corporate Fraud",
    desc: "Internal investigations into embezzlement, kickbacks, and financial irregularities.",
    situation:
      "A manufacturing company notices unusually high vendor payments to a single party over 18 months. The internal accounts team can't explain it. The vendor's contact number belongs to the purchase manager's brother-in-law.",
    steps: [
      { icon: <FileSearch size={18} />, label: "Transaction forensics", detail: "We analyse payment records, purchase orders, and approvals to map the fraud pattern and estimate the loss." },
      { icon: <UserSearch size={18} />, label: "Suspect profiling", detail: "We investigate the implicated employees and their financial connections — lifestyle changes, undisclosed relationships, asset acquisitions." },
      { icon: <Link size={18} />, label: "Vendor linkage analysis", detail: "We trace the beneficial ownership of suspicious vendors and establish the connection back to insiders." },
      { icon: <Scale size={18} />, label: "Evidence for legal action", detail: "We compile investigation findings in a format suitable for police complaints, SFIO referrals, or civil recovery proceedings." },
    ],
    outcome:
      "A documented case that gives you the option to prosecute, recover funds through civil court, or — if you choose — part ways quietly with full awareness of what occurred.",
  },

  // ─── Private ───────────────────────────────────────────────────────────────
  {
    id: "p1",
    category: "Private",
    icon: <Users size={22} />,
    title: "Matrimonial Investigations",
    desc: "Pre and post-matrimonial background checks, asset verification, and fidelity investigations.",
    situation:
      "A family is considering a matrimonial proposal. The prospective groom works abroad, earns well, and comes through a trusted contact. But he's been married before — a fact nobody mentioned — and the divorce is still contested in a UK court.",
    steps: [
      { icon: <UserCheck size={18} />, label: "Identity & marital status", detail: "We verify current marital status, prior marriages, and divorce records — including overseas searches when applicable." },
      { icon: <BookOpen size={18} />, label: "Employment & financial check", detail: "Income, employment position, debts, and undisclosed financial obligations." },
      { icon: <Building size={18} />, label: "Family & background", detail: "Family reputation, history of disputes or domestic incidents, and consistency of stated family details." },
      { icon: <FileText size={18} />, label: "Confidential report", detail: "A discreet written report — shared only with the client, never with the other party." },
    ],
    outcome:
      "Most families engage us when something feels slightly off but they can't identify what. Often the report confirms the proposal is genuine. Sometimes it surfaces something the other party was counting on nobody finding.",
  },
  {
    id: "p2",
    category: "Private",
    icon: <UserMinus size={22} />,
    title: "Missing Persons",
    desc: "Advanced tracing techniques to locate absconding debtors, witnesses, or family members.",
    situation:
      "A woman's husband walked out of the house six months ago and stopped responding to all contact. He has not filed for divorce, not accessed joint accounts, and his family says they don't know where he is. He has also borrowed money from three people, none of whom have been repaid.",
    steps: [
      { icon: <MapPin size={18} />, label: "Last known trail", detail: "We reconstruct activity from the last confirmed date of contact — transport records, telecoms data, social media signals." },
      { icon: <UserSearch size={18} />, label: "Network mapping", detail: "We speak with contacts, colleagues, and extended family through cover approaches to surface location clues." },
      { icon: <Search size={18} />, label: "Asset & financial trace", detail: "We check for property registrations, bank activity, and business filings that indicate where the subject is operating from." },
      { icon: <FileText size={18} />, label: "Location report", detail: "When located, we document the person's current whereabouts and circumstances in a report suitable for legal use." },
    ],
    outcome:
      "Location confirmed with documentary evidence. Whether the purpose is a divorce petition, debt recovery, or simply knowing the person is safe — you get an answer.",
  },
  {
    id: "p3",
    category: "Private",
    icon: <Building size={22} />,
    title: "Asset Verification",
    desc: "Identifying hidden real estate, financial accounts, and business interests.",
    situation:
      "A woman going through a divorce suspects her husband has been hiding assets — there is income that doesn't match the lifestyle, a property he says he sold, and a company his brother runs that looks like it might hold his money.",
    steps: [
      { icon: <Building2 size={18} />, label: "Property search", detail: "We conduct comprehensive property registration searches across relevant jurisdictions — not just the name, but related names and shell structures." },
      { icon: <UserSearch size={18} />, label: "Business interest check", detail: "Directorship searches, shareholding tracing, and identification of informal business arrangements." },
      { icon: <Banknote size={18} />, label: "Financial lifestyle analysis", detail: "We compare declared income against observable expenditure — vehicles, travel, foreign transactions, property upkeep." },
      { icon: <FileText size={18} />, label: "Affidavit-ready report", detail: "A structured asset disclosure report with supporting documentation for use by your lawyer in court proceedings." },
    ],
    outcome:
      "Hidden assets surface. Most people who try to hide wealth from a court leave traces — we find and document them before the settlement is locked in.",
  },
  {
    id: "p4",
    category: "Private",
    icon: <Eye size={22} />,
    title: "Surveillance Operations",
    desc: "Discreet, legal physical surveillance conducted by trained operatives.",
    situation:
      "A business owner suspects an employee on paid sick leave is running a competing business from home. A parent suspects their teenager is meeting adults they've lied about. A spouse has been told they're travelling for work — and something doesn't add up.",
    steps: [
      { icon: <MapPin size={18} />, label: "Surveillance planning", detail: "We brief on legal boundaries, define the objective, and plan the operation — timing, team, and documentation approach." },
      { icon: <Camera size={18} />, label: "Field observation", detail: "Trained operatives conduct discreet mobile and static surveillance in accordance with applicable law — no trespass, no interception." },
      { icon: <Clock size={18} />, label: "Timestamped documentation", detail: "Every observation is recorded with date, time, location, and photographic or video evidence where possible." },
      { icon: <FileText size={18} />, label: "Surveillance log", detail: "A written log and evidence file admissible in court — structured for use in legal or HR proceedings." },
    ],
    outcome:
      "Factual, documented evidence of what is actually happening — not suspicion, not assumption. Either the concern is confirmed, or you have peace of mind that it isn't warranted.",
  },
  {
    id: "p5",
    category: "Private",
    icon: <Search size={22} />,
    title: "Background Verification",
    desc: "Verification of identity, education, employment, and criminal history.",
    situation:
      "A family is hiring a live-in domestic helper. The person seems trustworthy and comes with a verbal reference. They'll have access to the home, the children, and valuable items — but nobody has actually checked who they are.",
    steps: [
      { icon: <UserCheck size={18} />, label: "Identity verification", detail: "Aadhaar, PAN, and address verification — we confirm the person is who they say they are and actually lives where they claim." },
      { icon: <BookOpen size={18} />, label: "Reference checks", detail: "We speak with previous employers or households — real conversations, not text messages that the subject may have pre-arranged." },
      { icon: <Scale size={18} />, label: "Criminal record check", detail: "Police verification and court record searches in home district and current location of residence." },
      { icon: <FileText size={18} />, label: "Verification certificate", detail: "A simple pass/flag summary you can keep on file — and share with your housing society if required." },
    ],
    outcome:
      "You know who is in your home. For most families, this is peace of mind. For the rare case where something surfaces — a prior complaint, a false identity — it's protection that matters enormously.",
  },

  // ─── Cyber (Enterprise) ────────────────────────────────────────────────────
  {
    id: "cy1",
    category: "Cyber",
    icon: <Fingerprint size={22} />,
    title: "Digital Forensics",
    desc: "Data recovery and analysis from computers, mobile devices, and servers for legal evidence.",
    situation:
      "A company discovers a departing employee copied 40,000 files to a personal drive on their last day. The IT department has logs but no clean chain of evidence. Their lawyer says they need a forensic report to file a case.",
    steps: [
      { icon: <Lock size={18} />, label: "Forensic image acquisition", detail: "We create bit-for-bit copies of storage devices under documented chain-of-custody protocols — preserving the original evidence." },
      { icon: <Search size={18} />, label: "Data analysis", detail: "We identify deleted files, access logs, external device connections, and file movement timelines." },
      { icon: <Clock size={18} />, label: "Timeline reconstruction", detail: "A chronological map of all relevant actions — what was accessed, when, and where it went." },
      { icon: <FileText size={18} />, label: "Expert report", detail: "A forensic report written for legal consumption — with methodology, findings, and examiner certification for court use." },
    ],
    outcome:
      "Admissible digital evidence. Courts require a proper forensic process — not screenshots or IT printouts. We produce a report that stands up.",
  },
  {
    id: "cy2",
    category: "Cyber",
    icon: <MailWarning size={22} />,
    title: "Email Fraud (BEC)",
    desc: "Tracing business email compromise, phishing attacks, and corporate spoofing sources.",
    situation:
      "A finance manager received an email that looked exactly like the CEO's address, asking for an urgent vendor payment. ₹28 lakhs left the company before anyone realised the CEO was never involved. The email had a one-letter change nobody noticed.",
    steps: [
      { icon: <Search size={18} />, label: "Email header analysis", detail: "We extract and analyse full email headers to trace the true origin — IP addresses, mail servers, and spoofing technique used." },
      { icon: <Database size={18} />, label: "Infrastructure mapping", detail: "We identify the phishing infrastructure — domains, hosting providers, and connected threat actors." },
      { icon: <UserSearch size={18} />, label: "Attacker attribution", detail: "Where possible, we link the attack to known threat groups or identify individuals behind the fraud operation." },
      { icon: <FileText size={18} />, label: "Report for authorities", detail: "A structured report for CBI Cybercrime, CERT-In, and banking fraud units to support fund freeze and prosecution." },
    ],
    outcome:
      "Understanding of how the attack happened, who was behind it, and a documented case for law enforcement — alongside recommendations to prevent recurrence.",
  },
  {
    id: "cy3",
    category: "Cyber",
    icon: <UserX size={22} />,
    title: "Insider Threats",
    desc: "Identifying employees exfiltrating data or compromising corporate intellectual property.",
    situation:
      "A pharmaceutical company's competitor launches a product that is almost identical to one still in internal development. The source code for a key module appears on a freelance platform. Someone on the inside has been selling information — but who?",
    steps: [
      { icon: <Database size={18} />, label: "Access log review", detail: "We analyse system access patterns — who touched sensitive data, when, and from where — to narrow the field of suspects." },
      { icon: <Search size={18} />, label: "Digital footprint analysis", detail: "We search for signs of exfiltration — cloud uploads, personal email forwards, USB activity, and dark web presence of stolen IP." },
      { icon: <UserSearch size={18} />, label: "Behavioural profiling", detail: "Correlation of digital activity with physical access logs, working hours anomalies, and communication patterns." },
      { icon: <FileText size={18} />, label: "Evidence package", detail: "A complete dossier on identified suspect(s) — suitable for HR proceedings, civil action, or police complaint under the IT Act." },
    ],
    outcome:
      "The leak is identified. You know who, what was taken, and when. That gives you the choice to prosecute, terminate with cause, or recover damages — on solid ground.",
  },
  {
    id: "cy4",
    category: "Cyber",
    icon: <Database size={22} />,
    title: "Data Theft",
    desc: "Investigating the unauthorized copying, transfer, or retrieval of confidential information.",
    situation:
      "A consultancy firm's client database — 12,000 records including contract values and contact details — appears to have been sold to a competitor. A sales manager who resigned three weeks ago is now at that competitor. Their clients are receiving suspiciously well-informed calls.",
    steps: [
      { icon: <Lock size={18} />, label: "Data access reconstruction", detail: "We establish what data was accessed in the period before departure — and how it was extracted." },
      { icon: <Globe size={18} />, label: "External exposure check", detail: "We search paste sites, dark web markets, and competitor-facing channels for signs the data is already in circulation." },
      { icon: <Scale size={18} />, label: "Legal evidence preparation", detail: "We document the theft in a format that supports a civil claim, injunction application, or criminal complaint." },
      { icon: <Phone size={18} />, label: "Regulatory notification support", detail: "We advise on obligations under DPDP Act 2023 — who needs to be notified, what the timelines are, and how to document the incident." },
    ],
    outcome:
      "A documented breach — with evidence of theft, likely perpetrator, and a path to legal remedy. Most data theft cases in India go unprosecuted only because companies lack proper forensic evidence.",
  },
  {
    id: "cy5",
    category: "Cyber",
    icon: <FileWarning size={22} />,
    title: "Insurance Fraud",
    desc: "Digital verification and social media intelligence to expose fraudulent claims.",
    situation:
      "An insurer receives a claim for a supposedly debilitating back injury that prevents the claimant from working. Three days after filing, the same person's Instagram shows them playing cricket at a weekend tournament. The insurer suspects fraud but needs documented evidence.",
    steps: [
      { icon: <Globe size={18} />, label: "Social media intelligence (SOCMINT)", detail: "We collect and preserve publicly available evidence from social platforms — posts, check-ins, tagged photos, and video — with proper timestamping." },
      { icon: <UserSearch size={18} />, label: "Identity verification", detail: "We confirm the social profiles belong to the claimant — ruling out misidentification before the evidence is used." },
      { icon: <Camera size={18} />, label: "Field surveillance", detail: "Where social evidence is insufficient, we conduct physical surveillance to document actual physical capability." },
      { icon: <FileText size={18} />, label: "Fraud evidence report", detail: "A structured report with all evidence catalogued and legally preserved — ready for use in claim denial, civil suit, or IPC 420 complaint." },
    ],
    outcome:
      "Fraudulent claims are documented and defensible to deny. For insurers, this pays for itself many times over on a single case.",
  },

  // ─── Cyber Fraud (Individual) ──────────────────────────────────────────────
  {
    id: "cf1",
    category: "Cyber Fraud",
    icon: <Wallet size={22} />,
    title: "Online Money Recovery",
    desc: "If you lost money through UPI fraud, fake customer care, or bank impersonation — we trace the payment and help you recover.",
    situation:
      "You searched for your bank's customer care number online. The first result was a fake. You called it, followed the instructions, and ₹85,000 left your account in two transfers. By the time you reached your real bank, the money was already in a different account.",
    steps: [
      { icon: <Clock size={18} />, label: "Immediate triage (within 24–48 hours)", detail: "We assess your case urgently — the window to freeze a mule account is narrow. Every hour matters." },
      { icon: <FileText size={18} />, label: "Cybercrime complaint drafting", detail: "We prepare and submit your complaint to the National Cybercrime Portal (cybercrime.gov.in) in the correct format — most self-filed complaints are rejected due to errors." },
      { icon: <Phone size={18} />, label: "Bank liaison", detail: "We contact your bank's fraud team with supporting documentation to request a freeze on the beneficiary account." },
      { icon: <Scale size={18} />, label: "Legal recovery support", detail: "If funds are partially frozen, we support civil proceedings to recover what the police process may not." },
    ],
    outcome:
      "Not every case results in full recovery — but acting within the first 48 hours dramatically increases your chances. We give you the best possible shot at getting your money back.",
  },
  {
    id: "cf2",
    category: "Cyber Fraud",
    icon: <HeartCrack size={22} />,
    title: "Sextortion & Online Blackmail",
    desc: "Someone is threatening to share your photos or videos. Do not pay. We can identify them and stop it.",
    situation:
      "Someone connected with you online — maybe on Instagram, maybe through a dating app. There may have been a video call. Now they're threatening to send a video or photo to your contacts, your family, your employer — unless you pay. They keep asking for more.",
    steps: [
      { icon: <AlertCircle size={18} />, label: "Crisis consultation", detail: "We speak with you confidentially — no judgment. We advise you immediately on what not to do (paying always makes it worse) and map out your options." },
      { icon: <UserSearch size={18} />, label: "Perpetrator identification", detail: "We use OSINT and digital forensics to identify who is behind the threat — even when they're using fake profiles and anonymous numbers." },
      { icon: <Globe size={18} />, label: "Takedown support", detail: "We initiate takedown requests with platforms and support the filing of a complaint under Section 67 of the IT Act and IPC 354C/507." },
      { icon: <Scale size={18} />, label: "Legal action preparation", detail: "Once identified, we prepare a complete case file for police — with enough evidence to support arrest and prosecution." },
    ],
    outcome:
      "In the majority of cases we handle, perpetrators stop threatening once they know they've been identified. Some cases lead to FIR and arrest. You are not alone in this — and you have options that don't involve paying.",
  },
  {
    id: "cf3",
    category: "Cyber Fraud",
    icon: <TrendingDown size={22} />,
    title: "Investment Scam Investigation",
    desc: "You invested in a trading platform or crypto scheme and can't withdraw your money. We document the fraud.",
    situation:
      "Someone added you to a WhatsApp group — maybe a 'stock tips' group, maybe an 'international trading team'. The returns looked real. You invested ₹3 lakhs over three months. When you tried to withdraw, they asked for a 'tax payment' or 'verification fee'. Then the group went silent.",
    steps: [
      { icon: <Search size={18} />, label: "Platform & operator tracing", detail: "We trace the fake trading platform — who registered the domain, where the servers are, and who controls the payment channels." },
      { icon: <Banknote size={18} />, label: "Payment chain analysis", detail: "We map where your money went — through which accounts, to which beneficiaries — to build a fraud documentation trail." },
      { icon: <Database size={18} />, label: "Syndicate intelligence", detail: "We identify whether this is a known scam network — many are run by organised groups with multiple victims — and link your case to a larger complaint." },
      { icon: <FileText size={18} />, label: "Complaint & court filing", detail: "We prepare your complaint for cybercrime police, SEBI (if an unregistered advisor was involved), and support civil recovery filing." },
    ],
    outcome:
      "You have a documented case with a named perpetrator or organisation. Recovery depends on how much of the fraud chain is still reachable — but documented cases are far more likely to result in action than unorganised complaints.",
  },
  {
    id: "cf4",
    category: "Cyber Fraud",
    icon: <CreditCard size={22} />,
    title: "UPI & Banking Fraud",
    desc: "UPI transferred fraudulently, OTP stolen, or KYC scam — we move fast to freeze and document.",
    situation:
      "Someone called saying your KYC needs to be updated or your account will be blocked. They asked you to download an app, share a QR code, or give an OTP. Within minutes, money was transferred out — from your savings, your credit card, or your FD.",
    steps: [
      { icon: <Clock size={18} />, label: "Immediate freeze request", detail: "We help you file an emergency complaint via the 1930 National Cyber Helpline and document the case for bank escalation." },
      { icon: <Phone size={18} />, label: "Bank fraud team engagement", detail: "We draft the formal request to your bank's fraud department — with transaction references, UPI IDs, and the narrative required to trigger a hold." },
      { icon: <Search size={18} />, label: "Beneficiary account tracing", detail: "We identify the mule accounts where your money landed and provide the details to authorities for freeze orders." },
      { icon: <FileText size={18} />, label: "FIR-ready complaint", detail: "We prepare a complete, accurate police complaint — the version that police will actually act on, not return for revision." },
    ],
    outcome:
      "In cases where funds haven't moved from the first beneficiary account, freezing is possible. Even when the money has moved further, a documented case gives you legal standing for recovery and compensation claims.",
  },
  {
    id: "cf5",
    category: "Cyber Fraud",
    icon: <Globe size={22} />,
    title: "Social Media Impersonation",
    desc: "Someone is using your identity, photos, or name online to scam people or damage your reputation.",
    situation:
      "Someone created a fake Instagram account using your photos and your name. They're messaging your friends and contacts asking for money — pretending to be you in a crisis. Or your business has a fake page asking customers to 'pay here' with a different QR code.",
    steps: [
      { icon: <UserSearch size={18} />, label: "Fake account identification", detail: "We document and preserve all evidence from the impersonation account — followers, posts, messages — before it disappears." },
      { icon: <Globe size={18} />, label: "Platform takedown", detail: "We submit structured takedown requests to the platform with the correct legal basis — reports without evidence are usually ignored." },
      { icon: <Fingerprint size={18} />, label: "Perpetrator tracing", detail: "We use digital forensics and OSINT to identify who created the account — often traceable even through anonymous setups." },
      { icon: <Scale size={18} />, label: "IT Act complaint", detail: "We prepare a complaint under Section 66C and 66D of the IT Act and assist with filing — impersonation for financial fraud is a cognisable offence." },
    ],
    outcome:
      "The fake account is taken down and the person behind it is identified. If your contacts have already been defrauded, that documentation also supports their recovery complaints.",
  },
  {
    id: "cf6",
    category: "Cyber Fraud",
    icon: <MessageCircleWarning size={22} />,
    title: "Cyber Harassment",
    desc: "Sustained threats, online stalking, or coordinated abuse — we document it and identify who's behind it.",
    situation:
      "A woman has been receiving threatening messages from unknown numbers for two months. Abusive posts about her appear on Facebook. Someone keeps creating new accounts to get around her blocks. She knows who she suspects, but she has no way to prove it.",
    steps: [
      { icon: <FileText size={18} />, label: "Evidence documentation", detail: "We capture and preserve screenshots, message metadata, account links, and timestamps in a legally usable format — casual screenshots are often inadmissible." },
      { icon: <UserSearch size={18} />, label: "Anonymous account unmasking", detail: "We use network analysis, pattern recognition, and OSINT to link anonymous accounts to a real identity." },
      { icon: <Globe size={18} />, label: "Platform reporting", detail: "We submit structured abuse reports to platforms with the legal references that trigger review by their trust and safety teams, not automated filters." },
      { icon: <Scale size={18} />, label: "FIR and protection order support", detail: "We prepare complaints under IPC 354D (stalking), 507 (criminal intimidation), and the IT Act — and can support an application for anticipatory bail or protection order." },
    ],
    outcome:
      "The harassment is documented, the person behind it is identified, and you have a case file ready for police action. Most perpetrators stop when they receive a legal notice citing their identity.",
  },
  {
    id: "cf7",
    category: "Cyber Fraud",
    icon: <PhoneOff size={22} />,
    title: "Romance & Job Scams",
    desc: "A relationship that turned into financial demands, or a job that charged fees and disappeared.",
    situation:
      "You met someone online — maybe on a matrimonial site, maybe on Instagram. Conversations built over weeks or months. Then came a crisis: a medical emergency, a customs payment, a stranded relative. Or it was a job offer abroad, and they asked for a 'visa processing fee' — then another — then went silent.",
    steps: [
      { icon: <UserSearch size={18} />, label: "Profile investigation", detail: "We establish whether the person is who they claim to be — or whether the identity is fabricated, stolen, or part of a known scam template." },
      { icon: <Search size={18} />, label: "Operator tracing", detail: "Many romance and job scams are run by organised teams — often from specific locations. We identify the structure behind the individual persona." },
      { icon: <Banknote size={18} />, label: "Payment trail documentation", detail: "We map all transfers to build a full financial trail for police and banking complaints." },
      { icon: <FileText size={18} />, label: "Consolidated complaint", detail: "We prepare a complaint that covers all aspects — fraud, cheating under IPC 420, and IT Act sections — as a single coherent case." },
    ],
    outcome:
      "You understand exactly what happened, who was behind it, and you have a complete documented complaint. For many clients, closure matters as much as recovery.",
  },
  {
    id: "cf8",
    category: "Cyber Fraud",
    icon: <ShieldBan size={22} />,
    title: "Cyber Fraud Intelligence",
    desc: "Proactive monitoring for businesses — before scammers impersonate your brand or compromise your customers.",
    situation:
      "Customers are calling a company's helpline to complain about being scammed — by someone pretending to be the company. Fake websites, fake WhatsApp numbers, fake customer care agents are defrauding people in the company's name. The company finds out only when their NPS crashes.",
    steps: [
      { icon: <Globe size={18} />, label: "Brand impersonation monitoring", detail: "We monitor for fake websites, social media pages, and WhatsApp business accounts using your name or logo — continuously or on a project basis." },
      { icon: <Search size={18} />, label: "Fraudulent infrastructure mapping", detail: "We identify the people running the impersonation infrastructure and document their full setup." },
      { icon: <AlertCircle size={18} />, label: "Takedown and disruption", detail: "We submit takedown notices to domain registrars, hosting providers, and platforms — with legal references that result in actual action." },
      { icon: <FileText size={18} />, label: "Intelligence report", detail: "A quarterly or on-demand report covering threats identified, actions taken, and ongoing risk areas — for your legal and security teams." },
    ],
    outcome:
      "Your brand is protected. Customers who would have been defrauded in your name are not. And you have a documented threat record if law enforcement action is warranted.",
  },
];
