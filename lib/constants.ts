// =============================================================================
// Unovia Consulting — Brand Constants, Services Data, Testimonials
// =============================================================================

export const COMPANY = {
  name: "UNoviA Consulting",
  tagline: "Strategic Advisory. Lasting Impact.",
  description:
    "Premium financial and business consultancy powered by an experienced team of Chartered Accountants (CAs) and MBAs, delivering expert wealth management, tax planning, GST advisory, and strategic business consulting.",
  phone: "+91 72786 71467",
  email: "connect@unovia.in",
  address: "Kolkata, West Bengal, India",
  founded: "2025",
  social: {
    linkedin: "https://www.linkedin.com/in/unovia-consulting/",
    instagram: "https://www.instagram.com/unoviaconsulting",
  },
} as const;

export const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Insights", href: "/insights" },
  { label: "Daily Brief", href: "/daily-brief" },
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
  { value: 10, suffix: "+", label: "Expert CAs & MBAs" },
  { value: 98, suffix: "%", label: "Client Retention" },
] as const;

export const TESTIMONIALS = [
  {
    quote:
      "Working with Unovia completely transformed how I approach my finances. As a marketing professional managing multiple income streams, I was always confused about tax-saving options beyond the basics. Unovia's team built a personalized tax plan that saved me over ₹1.8 lakhs in the first year alone. They also helped me start a disciplined SIP strategy aligned with my five-year goals. What I appreciate most is their transparency — every recommendation comes with clear reasoning, never a sales pitch. Unovia has made financial planning feel accessible and empowering.",
    name: "Ankit Burnwal",
    title: "Marketing Professional",
    company: "KreditBee",
    rating: 5,
    services: ["Tax Planning", "Personal Financial Planning"],
  },
  {
    quote:
      "Before Unovia, I had savings scattered across random FDs and a couple of mutual funds I barely understood. Their team sat down with me, mapped out my financial goals — buying a home, building an emergency fund, early retirement planning — and created a structured investment roadmap. Within 18 months, my portfolio has grown meaningfully, and more importantly, I finally feel in control. The quarterly reviews are incredibly detailed, and they proactively adjust my strategy based on market conditions and tax implications. Unovia treats me like a priority, not just another client.",
    name: "Rahul Sharma",
    title: "Software Engineer",
    company: "Bengaluru",
    rating: 5,
    services: ["Investment Strategy", "Wealth Management"],
  },
  {
    quote:
      "As an entrepreneur running a D2C brand, I was so focused on revenue that I completely neglected my personal wealth. Unovia helped me separate my business and personal finances, set up a proper tax structure, and start building long-term wealth outside the business. Their CFO advisory has been a game-changer for our financial reporting — investors now get clean, professional MIS reports every month. They genuinely understand the startup mindset and tailor their advice accordingly. I consider Unovia an extension of my founding team.",
    name: "Priya Mehta",
    title: "Founder & CEO",
    company: "D2C Lifestyle Brand, Mumbai",
    rating: 5,
    services: ["Business Consulting", "Financial Reporting"],
  },
  {
    quote:
      "Running a manufacturing unit in Kolkata means dealing with complex GST filings, TDS obligations, and constantly evolving compliance requirements. Unovia took over our entire tax and compliance function and brought order to what was previously chaos. They identified ₹12 lakhs in unclaimed input tax credits we had missed, streamlined our return filing process, and ensured we are always audit-ready. Their team is responsive, thorough, and deeply knowledgeable. For any business owner drowning in compliance, Unovia is the partner you need.",
    name: "Vikram Singh",
    title: "Managing Director",
    company: "Singh Manufacturing Pvt. Ltd., Kolkata",
    rating: 5,
    services: ["Tax Planning", "Compliance Advisory"],
  },
  {
    quote:
      "At my level, financial decisions have significant long-term implications — stock options, deferred compensation, retirement corpus, real estate investments. I needed an advisor who could see the complete picture and optimize across all these dimensions. Unovia delivered exactly that. They restructured my investment portfolio to be far more tax-efficient, helped me exercise my ESOPs at the right time, and built a comprehensive retirement plan that gives me genuine peace of mind. Their professionalism and depth of expertise are on par with the best advisory firms I have encountered.",
    name: "Neha Gupta",
    title: "Senior Vice President",
    company: "Leading Financial Services Firm, Mumbai",
    rating: 5,
    services: ["Wealth Management", "Retirement Planning"],
  },
  {
    quote:
      "Managing investments in India while living abroad is incredibly complex — DTAA provisions, TDS recovery, FEMA compliance, rental income taxation. I tried managing it myself for years and lost money to inefficiencies. Unovia's NRI advisory team has been exceptional. They consolidated my India portfolio, optimized my tax position across both jurisdictions, handled all my ITR filings remotely, and even assisted with repatriation planning. The entire experience has been seamless, professional, and genuinely reassuring. I finally have a trusted team on the ground managing my Indian finances.",
    name: "Rajesh Patel",
    title: "NRI Investor",
    company: "Dubai, UAE",
    rating: 5,
    services: ["Tax Planning", "Investment Strategy"],
  },
  {
    quote:
      "When our family business transitioned to the next generation, we realized we had no structured wealth management plan. Unovia stepped in and created a comprehensive family financial blueprint — covering everything from succession planning and estate structuring to education funds for our grandchildren and a diversified investment portfolio. They treat our family's wealth with the same care and diligence as their own. What sets them apart is their patience in explaining complex strategies in simple terms and their unwavering commitment to our long-term financial well-being.",
    name: "The Agarwal Family",
    title: "Wealth Management Clients",
    company: "Kolkata",
    rating: 5,
    services: ["Wealth Management", "Personal Financial Planning"],
  },
  {
    quote:
      "With both of us nearing retirement, we were anxious about whether our savings would sustain our lifestyle for the next 25–30 years. Unovia conducted a thorough retirement readiness assessment and the results were eye-opening. They restructured our corpus into a balanced mix of growth and income-generating assets, optimized our tax outgo on pension and interest income, and set up a systematic withdrawal plan. For the first time in years, we feel genuinely confident about our financial future. Unovia has given us the retirement we always envisioned — stress-free and secure.",
    name: "The Mehta Family",
    title: "Retirement Planning Clients",
    company: "Pune",
    rating: 5,
    services: ["Retirement Planning", "Tax Planning"],
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
    description: "Our team of qualified CAs and MBAs brings specialized experience across tax, finance, and business domains.",
    icon: "Award",
  },
  {
    title: "Innovation",
    description: "We leverage technology and fresh thinking to deliver modern solutions for complex challenges.",
    icon: "Lightbulb",
  },
] as const;
