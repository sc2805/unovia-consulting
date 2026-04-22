// =============================================================================
// ✏️  BLOG POSTS — Edit this file to add, remove, or update articles
//
//  Each post has:
//    slug        → URL path  e.g. "my-article"  → /insights/my-article
//    title       → Article headline
//    excerpt     → Short summary shown on the listing card
//    category    → One of: "Tax Planning" | "GST Advisory" | "Wealth Management" | "Business Strategy"
//    date        → ISO date string "YYYY-MM-DD"
//    readTime    → e.g. "7 min read"
//    author      → Author name (shown inside the article)
//    content     → Full article body.  Use the helper tags below:
//
//  CONTENT FORMATTING GUIDE
//  ─────────────────────────
//  ## Heading 2
//  ### Heading 3
//  **bold text**
//  - bullet item
//  1. numbered item
//  > blockquote / pull-quote
//  [blank line between paragraphs = new paragraph]
//
// =============================================================================

export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  author: string;
  content: string;
};

export const BLOG_POSTS: BlogPost[] = [
  // ─────────────────────────────────────────────────────────────────────────
  // POST 1
  // ─────────────────────────────────────────────────────────────────────────
  {
    slug: "understanding-new-tax-regime-2024",
    title: "Understanding the New Tax Regime: What Changed in 2024",
    excerpt:
      "A comprehensive guide to the revised tax slabs, deductions, and strategic considerations for individuals and HUFs under the new income tax regime.",
    category: "Tax Planning",
    date: "2024-03-15",
    readTime: "8 min read",
    author: "Unovia Tax Team",
    content: `
## Introduction

The Union Budget 2024 brought significant changes to India's personal income tax framework. Understanding these shifts is critical for individuals and HUFs aiming to optimize their tax outgo for FY 2024-25.

## What Changed Under the New Tax Regime?

The new tax regime, introduced in FY 2020-21 as an optional alternative, has now become the **default regime** for most taxpayers. The revised slabs are:

- ₹0 – ₹3,00,000: Nil
- ₹3,00,001 – ₹7,00,000: 5%
- ₹7,00,001 – ₹10,00,000: 10%
- ₹10,00,001 – ₹12,00,000: 15%
- ₹12,00,001 – ₹15,00,000: 20%
- Above ₹15,00,000: 30%

The standard deduction for salaried employees has been raised from ₹50,000 to **₹75,000**, reducing effective taxable income significantly.

## Key Deductions Still Available

While most deductions under Chapter VI-A are not available in the new regime, the following remain applicable:

1. **Standard Deduction** (₹75,000 for salaried/pensioners)
2. **Employer's NPS contribution** (Section 80CCD(2))
3. **Family pension deduction** (₹25,000 or 1/3rd of pension, whichever is lower)

## Should You Switch?

> The decision to opt for the new regime depends on your existing investment commitments, home loan status, and deduction profile.

For most salaried individuals with limited deductions, the new regime is now more beneficial. However, those with significant HRA, home loan interest, and 80C investments may still benefit from the old regime.

## Strategic Recommendations

- Run a parallel computation for both regimes before filing
- Review your employer's TDS declaration before April 2024
- For business income, evaluate carefully — switching back requires compliance conditions

## Conclusion

The 2024 changes simplify the tax filing experience for most taxpayers. Consult with a qualified CA to model your exact scenario and choose the optimal regime for your financial situation.
    `,
  },

  // ─────────────────────────────────────────────────────────────────────────
  // POST 2
  // ─────────────────────────────────────────────────────────────────────────
  {
    slug: "gst-annual-return-filing-checklist",
    title: "The Complete GST Annual Return Filing Checklist",
    excerpt:
      "Ensure zero-error filing with our step-by-step checklist covering GSTR-9, GSTR-9C, reconciliation, and common pitfalls to avoid.",
    category: "GST Advisory",
    date: "2024-02-28",
    readTime: "6 min read",
    author: "Unovia GST Practice",
    content: `
## Why the Annual Return Matters

GSTR-9 is the annual return that consolidates all monthly or quarterly GST filings for a financial year. Errors here can trigger notices, demands, or penalties. A structured checklist minimizes risk.

## Pre-Filing Checklist

### 1. Reconcile Monthly Returns
- Match GSTR-1 (outward supplies) with GSTR-3B (liability declared)
- Reconcile GSTR-2A/2B with Input Tax Credit (ITC) claimed in GSTR-3B
- Identify and resolve any mismatches in HSN/SAC codes

### 2. Verify Turnover
- Cross-check taxable turnover with audited financials
- Confirm zero-rated supplies are correctly classified
- Ensure exempted and non-GST supplies are separated

### 3. ITC Review
- Confirm ITC reversals for non-business use (Rule 42/43)
- Check if ITC on capital goods is correctly apportioned
- Verify RCM (Reverse Charge Mechanism) credits and liabilities

## GSTR-9C (Reconciliation Statement)

Applicable to taxpayers with turnover exceeding ₹5 crore, GSTR-9C requires:

1. Auditor certification of reconciliation
2. Table-wise comparison of declared vs. actual figures
3. Payment of any differential liability before filing

## Common Pitfalls

> Many taxpayers under-report exempt supplies or miss RCM liabilities — two of the most common triggers for GST audit notices.

- Forgetting to report debit/credit note adjustments
- Incorrect classification of exports (with/without payment of tax)
- Missing the deadline (typically December 31 of the subsequent year)

## Conclusion

A disciplined, proactive approach to GSTR-9 filing prevents costly errors and builds credibility with the GST department. Engage a qualified GST professional well before the deadline.
    `,
  },

  // ─────────────────────────────────────────────────────────────────────────
  // POST 3
  // ─────────────────────────────────────────────────────────────────────────
  {
    slug: "wealth-preservation-volatile-markets",
    title: "Wealth Preservation Strategies in Volatile Markets",
    excerpt:
      "How high-net-worth investors can protect and grow wealth during market uncertainty using diversification, hedging, and alternative assets.",
    category: "Wealth Management",
    date: "2024-02-10",
    readTime: "7 min read",
    author: "Unovia Wealth Team",
    content: `
## The Challenge of Market Volatility

Equity markets can lose 20–30% of value in a downturn, as witnessed during COVID-19 and the 2022 rate-hike cycle. For high-net-worth individuals (HNIs), the priority shifts from maximizing returns to **preserving capital** while staying invested.

## Core Preservation Strategies

### 1. Asset Allocation Diversification
The bedrock of wealth preservation is a well-diversified portfolio across:

- **Equity** (domestic + international)
- **Debt** (sovereign bonds, AAA-rated corporate)
- **Real Assets** (gold, REITs, infrastructure)
- **Alternatives** (private equity, hedge funds, unlisted bonds)

A typical HNI preservation portfolio might allocate 40% equity, 30% debt, 20% gold/real assets, and 10% alternatives.

### 2. Gold as a Hedge
Gold has historically moved inversely to equity during crises. An allocation of **10–15%** in gold (physical, Sovereign Gold Bonds, or Gold ETFs) provides a meaningful buffer.

> Sovereign Gold Bonds (SGBs) offer an added 2.5% annual interest and capital gains exemption on maturity — a superior vehicle for gold exposure.

### 3. Dynamic Rebalancing
Rather than a static allocation, disciplined rebalancing — selling assets that have appreciated and buying those that have fallen — ensures you systematically "buy low, sell high."

### 4. Liquid Reserves
Maintaining 6–12 months of expenses in liquid assets prevents forced selling during market lows. Liquid mutual funds or overnight funds serve this purpose.

## Alternative Asset Strategies

For sophisticated investors, alternatives add uncorrelated returns:

1. **AIFs (Alternative Investment Funds)** — Category II for private debt, Category III for hedge strategies
2. **Unlisted equities** — Early-stage investments with high return potential
3. **International diversification** — USD/EUR assets hedge against INR depreciation

## Conclusion

Wealth preservation in volatile markets is about discipline, diversification, and a long-term perspective. Work with a trusted advisor to stress-test your portfolio against multiple scenarios.
    `,
  },

  // ─────────────────────────────────────────────────────────────────────────
  // POST 4
  // ─────────────────────────────────────────────────────────────────────────
  {
    slug: "scaling-business-strategic-framework",
    title: "Scaling Your Business: A Strategic Framework for 2024",
    excerpt:
      "From product-market fit to operational scale — the key decisions founders and CEOs need to make when growing from ₹10Cr to ₹100Cr revenue.",
    category: "Business Strategy",
    date: "2024-01-22",
    readTime: "10 min read",
    author: "Unovia Business Advisory",
    content: `
## The Scaling Inflection Point

Growing from ₹10 crore to ₹100 crore in revenue is one of the most demanding transitions a business faces. What got you here — founder hustle, informal processes, personal relationships — will not get you there. Scaling requires deliberate architecture.

## Phase 1: Validate Before You Scale

Before committing resources to scale, confirm:

1. **Repeatable Sales Motion** — Can non-founders close deals consistently?
2. **Unit Economics** — Is each unit of revenue profitable at contribution level?
3. **Customer Retention** — Is NRR (Net Revenue Retention) above 100% for B2B, or repeat purchase rate above 40% for B2C?

> Scaling broken unit economics just accelerates losses. Fix the model first.

## Phase 2: Build the Operating System

### People & Structure
- Hire functional heads (Sales, Finance, Operations, HR) before you need them
- Invest in middle management — they are the engine of scale
- Implement OKRs or a structured goal-setting framework

### Processes & Systems
- Standardize SOPs for every repeatable function
- Implement ERP/CRM (Zoho, Odoo, Salesforce) to reduce manual coordination
- Create a financial dashboard with weekly visibility into key metrics

### Capital Allocation
- Raise capital ahead of need, not at crisis
- Separate growth capex from operational opex in your P&L
- Build a 12-month rolling cash flow model

## Phase 3: Market Expansion

Once the operating system is stable, expand:

1. **Geographic expansion** — New cities or states with proven playbook
2. **Product extension** — Adjacent offerings to existing customers (land-and-expand)
3. **Channel diversification** — Direct + channel + digital to reduce dependence

## Common Scaling Mistakes

- Hiring too fast before systems are in place
- Ignoring working capital as revenue grows (₹100Cr revenue can have ₹30Cr tied up in receivables)
- Losing culture during rapid headcount growth

## Conclusion

Scaling is a systematic process. Build the foundation, hire ahead, and execute with discipline. Unovia's business advisory team has guided companies through this transition — reach out to design your growth roadmap.
    `,
  },

  // ─────────────────────────────────────────────────────────────────────────
  // POST 5
  // ─────────────────────────────────────────────────────────────────────────
  {
    slug: "nri-taxation-guide-india",
    title: "NRI Taxation in India: Income, Property & Investments",
    excerpt:
      "A practical guide for Non-Resident Indians on tax obligations, DTAA benefits, TDS recovery, and repatriation rules for Indian income and assets.",
    category: "Tax Planning",
    date: "2024-01-08",
    readTime: "9 min read",
    author: "Unovia Tax Team",
    content: `
## Who Is an NRI for Tax Purposes?

Under the Income Tax Act, your residential status determines your tax liability in India. You are a **Non-Resident Indian (NRI)** if you spend fewer than 182 days in India during a financial year (or fewer than 60 days + 365 days in the prior 4 years in certain cases).

NRIs are taxed **only on income earned or received in India** — not on their global income.

## Taxable Income for NRIs

The following Indian-source incomes are taxable:

1. **Salary** received in India or for services rendered in India
2. **Rental income** from Indian property
3. **Capital gains** on sale of Indian assets (property, shares, mutual funds)
4. **Interest** on NRO accounts, fixed deposits
5. **Dividends** from Indian companies

## TDS on NRI Transactions

NRIs face higher TDS rates:

- Property sale: **20% TDS** on capital gains (can apply for lower deduction certificate)
- NRO account interest: **30% TDS**
- Equity mutual fund LTCG: **10% TDS**

> If your total income is below the basic exemption limit, file an ITR to claim a full refund of TDS deducted.

## Double Taxation Avoidance Agreement (DTAA)

India has DTAA with 90+ countries. Key benefits:

- **Tax credit** in your country of residence for taxes paid in India
- **Reduced withholding rates** on interest and dividends
- **Exemptions** on specific income types

To claim DTAA benefits, submit a **Tax Residency Certificate (TRC)** from your country of residence and Form 10F to Indian payers.

## Repatriation Rules

- **NRE accounts**: Freely repatriable (principal + interest)
- **NRO accounts**: Up to USD 1 million per year (after taxes), with Form 15CA/CB
- **Property sale proceeds**: Repatriable subject to RBI regulations and tax compliance

## Filing Requirements

NRIs must file an ITR in India if:
- Total taxable income in India exceeds ₹2,50,000
- They have capital gains (irrespective of amount)
- They want to claim a TDS refund

## Conclusion

NRI taxation is nuanced and country-specific. Proactive planning — especially around TDS refunds, DTAA claims, and repatriation — can significantly reduce your tax burden. Our cross-border tax specialists are here to help.
    `,
  },

  // ─────────────────────────────────────────────────────────────────────────
  // POST 6
  // ─────────────────────────────────────────────────────────────────────────
  {
    slug: "input-tax-credit-optimization",
    title: "Maximizing Input Tax Credit: Common Mistakes & Solutions",
    excerpt:
      "Businesses leave money on the table due to ITC errors. Learn how to reconcile, claim, and optimize your input tax credit under GST.",
    category: "GST Advisory",
    date: "2023-12-18",
    readTime: "5 min read",
    author: "Unovia GST Practice",
    content: `
## What is Input Tax Credit (ITC)?

Under GST, Input Tax Credit allows businesses to deduct the tax paid on purchases (inputs) from the tax payable on sales (output). Correctly claiming ITC is one of the most powerful tools to reduce your effective GST cost.

## Why ITC Optimization Matters

A business with ₹5 crore in annual GST purchases could save ₹50–₹90 lakhs annually by optimizing ITC claims — yet many businesses forgo this due to reconciliation errors or poor vendor compliance.

## Common Mistakes

### 1. Supplier Non-Compliance
If your supplier doesn't file GSTR-1, your ITC doesn't appear in GSTR-2B and is at risk of being disallowed.

**Solution**: Audit suppliers quarterly. Prioritize GST-compliant vendors and add compliance clauses in purchase agreements.

### 2. Claiming ITC on Blocked Credits
Section 17(5) blocks ITC on:
- Motor vehicles (with exceptions)
- Food, beverages, outdoor catering
- Personal consumption items
- Construction of immovable property

> Many businesses unknowingly claim ITC on blocked categories — a high-risk area during audits.

### 3. Missing Reconciliation with GSTR-2B
GSTR-2B (auto-populated ITC statement) should be reconciled monthly with your purchase register. Differences must be investigated and resolved before claiming.

### 4. Time Limit Lapsing
ITC must be claimed by the earlier of:
- November 30 following the financial year end
- Date of filing the annual return for that year

ITC not claimed within this window is permanently lost.

## Best Practices for ITC Optimization

1. **Monthly GSTR-2B reconciliation** — Don't wait until year-end
2. **Vendor scorecard** — Track and penalize non-filing vendors
3. **ITC register** — Maintain a running ledger of available, claimed, and pending ITC
4. **Invoice matching** — Ensure all purchase invoices have GSTIN, HSN, and correct amounts

## Conclusion

ITC is a legitimate and powerful cost reduction tool. With systematic reconciliation and vendor management, most businesses can significantly improve their effective GST position. Our GST advisory team can audit your ITC profile and identify unclaimed credits.
    `,
  },

  // ─────────────────────────────────────────────────────────────────────────
  // ✏️  ADD NEW POSTS BELOW THIS LINE
  //
  // Template:
  // {
  //   slug: "your-article-url-slug",
  //   title: "Your Article Title",
  //   excerpt: "Short summary shown on the card (1-2 sentences).",
  //   category: "Tax Planning",   // or GST Advisory | Wealth Management | Business Strategy
  //   date: "2024-04-01",
  //   readTime: "5 min read",
  //   author: "Author Name",
  //   content: `
  //     ## Your First Heading
  //     Write your article here using the formatting guide at the top of this file.
  //   `,
  // },
  // ─────────────────────────────────────────────────────────────────────────
];

// Helper — get a post by slug
export function getPostBySlug(slug: string): BlogPost | undefined {
  return BLOG_POSTS.find((p) => p.slug === slug);
}

// Helper — get slugs for static generation
export function getAllSlugs(): string[] {
  return BLOG_POSTS.map((p) => p.slug);
}
