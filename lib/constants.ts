// =============================================================================
// Unovia Consulting — Brand Constants, Services Data, Testimonials
// =============================================================================

export const COMPANY = {
  name: "Unovia Consulting",
  tagline: "Strategic Advisory. Lasting Impact.",
  description:
    "Premium financial and business consultancy delivering expert wealth management, tax planning, GST advisory, and strategic business consulting.",
  phone: "+91 98765 43210",
  email: "info@unoviaconsulting.com",
  address: "14th Floor, One Horizon Centre, Golf Course Road, Gurugram, Haryana 122002",
  founded: "2009",
  social: {
    linkedin: "https://linkedin.com/company/unovia-consulting",
    twitter: "https://twitter.com/unoviaconsulting",
  },
} as const;

export const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Insights", href: "/insights" },
  { label: "Contact", href: "/contact" },
] as const;

export const SERVICES = [
  {
    slug: "wealth-management",
    title: "Wealth Management",
    shortDescription:
      "Comprehensive portfolio strategies designed to grow, protect, and transfer your wealth across generations.",
    description:
      "Our wealth management practice combines deep market expertise with personalized financial planning. We work closely with high-net-worth individuals, families, and institutions to craft investment strategies aligned with your risk appetite, time horizon, and life goals.",
    icon: "TrendingUp",
    color: "from-blue-500 to-indigo-600",
    offerings: [
      "Portfolio Construction & Optimization",
      "Retirement & Succession Planning",
      "Estate & Trust Advisory",
      "Alternative Investment Strategies",
      "Risk Assessment & Mitigation",
      "Family Office Services",
    ],
    process: [
      { step: "Discovery", desc: "Deep dive into your financial landscape, goals, and risk tolerance." },
      { step: "Strategy", desc: "Custom portfolio architecture aligned with your objectives." },
      { step: "Execution", desc: "Disciplined implementation across asset classes and geographies." },
      { step: "Monitoring", desc: "Continuous review, rebalancing, and performance reporting." },
    ],
  },
  {
    slug: "tax-consultancy",
    title: "Tax Consultancy",
    shortDescription:
      "Expert tax planning and compliance to minimize liabilities while ensuring full regulatory adherence.",
    description:
      "Navigating India's complex tax landscape requires precision and foresight. Our tax consultancy team provides strategic planning for individuals, businesses, and NRIs — ensuring you retain more of what you earn while staying fully compliant with Income Tax, DTAA, and international regulations.",
    icon: "FileText",
    color: "from-emerald-500 to-teal-600",
    offerings: [
      "Income Tax Planning & Optimization",
      "Corporate Tax Strategy",
      "International Tax & DTAA Advisory",
      "Tax Dispute Resolution & Litigation Support",
      "Transfer Pricing Documentation",
      "NRI Taxation & Repatriation Planning",
    ],
    process: [
      { step: "Analysis", desc: "Comprehensive review of your current tax position and exposure." },
      { step: "Planning", desc: "Proactive strategies to optimize your tax structure legally." },
      { step: "Filing", desc: "Accurate and timely return preparation across all jurisdictions." },
      { step: "Defense", desc: "Full support in assessments, notices, and appellate proceedings." },
    ],
  },
  {
    slug: "gst-advisory",
    title: "GST Advisory & Compliance",
    shortDescription:
      "End-to-end GST solutions from registration to audit support, keeping your business compliant and efficient.",
    description:
      "Since GST's inception in 2017, the regulatory framework has evolved rapidly. Our dedicated GST practice keeps you ahead of every change — from registration and return filing to refund claims and anti-profiteering compliance. We serve businesses of all sizes across sectors.",
    icon: "Shield",
    color: "from-amber-500 to-orange-600",
    offerings: [
      "GST Registration & Migration",
      "Monthly & Annual Return Filing",
      "GST Audit & Reconciliation",
      "Input Tax Credit Optimization",
      "E-Invoicing & E-Way Bill Compliance",
      "Anti-Profiteering & Advance Ruling",
    ],
    process: [
      { step: "Assessment", desc: "Evaluate your GST exposure, classification, and compliance status." },
      { step: "Setup", desc: "Streamline registration, invoicing, and reporting workflows." },
      { step: "Compliance", desc: "Timely filing of all returns with accuracy and ITC optimization." },
      { step: "Audit Support", desc: "Preparation and representation for GST audits and notices." },
    ],
  },
  {
    slug: "business-consulting",
    title: "Business Consulting",
    shortDescription:
      "Strategic guidance to transform operations, drive growth, and build resilient, future-ready organizations.",
    description:
      "Whether you're scaling up, restructuring, or entering new markets, our business consulting team provides the strategic clarity and operational expertise to make bold moves with confidence. We partner with founders, CEOs, and boards to unlock value and accelerate growth.",
    icon: "Briefcase",
    color: "from-violet-500 to-purple-600",
    offerings: [
      "Business Strategy & Growth Planning",
      "Market Entry & Expansion Advisory",
      "Operational Efficiency & Process Improvement",
      "Mergers, Acquisitions & Due Diligence",
      "Financial Modeling & Valuation",
      "Startup Advisory & Fundraising Support",
    ],
    process: [
      { step: "Diagnosis", desc: "Thorough assessment of business model, market position, and challenges." },
      { step: "Roadmap", desc: "Clear, actionable strategy with milestones and KPIs." },
      { step: "Implementation", desc: "Hands-on support to execute initiatives and manage change." },
      { step: "Scale", desc: "Sustain momentum with ongoing advisory and performance tracking." },
    ],
  },
] as const;

export const TRUST_STATS = [
  { value: 15, suffix: "+", label: "Years of Experience" },
  { value: 500, suffix: "+", label: "Clients Served" },
  { value: 2000, suffix: "Cr+", label: "Assets Managed (₹)" },
  { value: 98, suffix: "%", label: "Client Retention" },
] as const;

export const TESTIMONIALS = [
  {
    quote:
      "Unovia transformed our tax strategy completely. We reduced our effective tax rate by 18% in the first year — all within full compliance. Their expertise is unmatched.",
    name: "Rajesh Kapoor",
    title: "Managing Director",
    company: "Kapoor Industries Pvt. Ltd.",
  },
  {
    quote:
      "The wealth management team at Unovia gave us the confidence to plan long-term. Our portfolio has consistently outperformed benchmarks while keeping risk in check.",
    name: "Priya Mehta",
    title: "Family Office Principal",
    company: "Mehta Family Trust",
  },
  {
    quote:
      "When GST compliance became overwhelming, Unovia stepped in and streamlined everything. From filing to ITC optimization, they handle it all seamlessly.",
    name: "Arjun Sethi",
    title: "CEO & Founder",
    company: "NovaTech Solutions",
  },
  {
    quote:
      "Their business consulting helped us navigate a complex acquisition. The due diligence was thorough, the advice was sharp, and the outcome exceeded expectations.",
    name: "Sneha Agarwal",
    title: "CFO",
    company: "Green Valley Exports",
  },
] as const;

export const INSIGHTS = [
  {
    slug: "understanding-new-tax-regime-2024",
    title: "Understanding the New Tax Regime: What Changed in 2024",
    excerpt:
      "A comprehensive guide to the revised tax slabs, deductions, and strategic considerations for individuals and HUFs under the new income tax regime.",
    category: "Tax Planning",
    date: "2024-03-15",
    readTime: "8 min read",
  },
  {
    slug: "gst-annual-return-filing-checklist",
    title: "The Complete GST Annual Return Filing Checklist",
    excerpt:
      "Ensure zero-error filing with our step-by-step checklist covering GSTR-9, GSTR-9C, reconciliation, and common pitfalls to avoid.",
    category: "GST Advisory",
    date: "2024-02-28",
    readTime: "6 min read",
  },
  {
    slug: "wealth-preservation-volatile-markets",
    title: "Wealth Preservation Strategies in Volatile Markets",
    excerpt:
      "How high-net-worth investors can protect and grow wealth during market uncertainty using diversification, hedging, and alternative assets.",
    category: "Wealth Management",
    date: "2024-02-10",
    readTime: "7 min read",
  },
  {
    slug: "scaling-business-strategic-framework",
    title: "Scaling Your Business: A Strategic Framework for 2024",
    excerpt:
      "From product-market fit to operational scale — the key decisions founders and CEOs need to make when growing from ₹10Cr to ₹100Cr revenue.",
    category: "Business Strategy",
    date: "2024-01-22",
    readTime: "10 min read",
  },
  {
    slug: "nri-taxation-guide-india",
    title: "NRI Taxation in India: Income, Property & Investments",
    excerpt:
      "A practical guide for Non-Resident Indians on tax obligations, DTAA benefits, TDS recovery, and repatriation rules for Indian income and assets.",
    category: "Tax Planning",
    date: "2024-01-08",
    readTime: "9 min read",
  },
  {
    slug: "input-tax-credit-optimization",
    title: "Maximizing Input Tax Credit: Common Mistakes & Solutions",
    excerpt:
      "Businesses leave money on the table due to ITC errors. Learn how to reconcile, claim, and optimize your input tax credit under GST.",
    category: "GST Advisory",
    date: "2023-12-18",
    readTime: "5 min read",
  },
] as const;

export const VALUES = [
  {
    title: "Integrity First",
    description: "Every recommendation we make is grounded in transparency, ethics, and your best interest.",
    icon: "Shield",
  },
  {
    title: "Client-Centric",
    description: "Your goals drive our strategy. We measure success by the impact on your financial well-being.",
    icon: "Users",
  },
  {
    title: "Deep Expertise",
    description: "Our team brings decades of specialized experience across tax, finance, and business domains.",
    icon: "Award",
  },
  {
    title: "Innovation",
    description: "We leverage technology and fresh thinking to deliver modern solutions for complex challenges.",
    icon: "Lightbulb",
  },
] as const;
