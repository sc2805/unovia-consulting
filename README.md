# Unovia Consulting — Website

Premium consultancy website for **Unovia Consulting** — a financial and business advisory firm.

🌐 **Live**: *Coming soon on Vercel*

---

## ✨ Features

- **5 Pages**: Home, About, Services (with 4 detail sub-pages), Insights, Contact
- **Responsive Design**: Mobile-first, works on all screen sizes
- **Smart Logo**: Text placeholder that can be swapped to an image with one flag change
- **Contact Form**: With server-side validation and email notification via Resend
- **SEO Optimized**: Full metadata, Open Graph tags, semantic HTML
- **Animated Elements**: Scroll-triggered counters, hover effects, smooth transitions
- **Accessibility**: Proper labels, semantic markup, keyboard navigation

---

## 🛠️ Tech Stack

| Technology | Purpose |
|-----------|---------|
| [Next.js 14](https://nextjs.org/) | React framework (App Router) |
| [Tailwind CSS](https://tailwindcss.com/) | Utility-first styling |
| [TypeScript](https://www.typescriptlang.org/) | Type safety |
| [Lucide React](https://lucide.dev/) | Icons |
| [Resend](https://resend.com/) | Email delivery |

---

## 🚀 Getting Started

### Prerequisites

- Node.js 18.17+ (recommend 20 LTS)
- npm 9+

### Setup

```bash
# Clone the repository
git clone https://github.com/sc2805/unovia-consulting.git
cd unovia-consulting

# Install dependencies
npm install

# Copy environment variables
cp .env.example .env.local

# Edit .env.local with your values
# (see Environment Variables section below)

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 🔑 Environment Variables

Create a `.env.local` file in the root directory:

```env
# Email Service (Resend) — get your key from https://resend.com
RESEND_API_KEY=re_xxxxxxxxxxxxxxxxxxxxxxxxxxxx

# Contact form recipient email
CONTACT_EMAIL=info@unoviaconsulting.com

# Site URL
NEXT_PUBLIC_SITE_URL=https://unoviaconsulting.com
```

> **Note**: The contact form works in development without Resend — submissions are logged to console.

---

## 🖼️ Logo Replacement

The site uses a text placeholder logo by default. To replace with your logo image:

1. Drop your logo file into `/public/logo.png` (or `.svg`)
2. Open `components/ui/Logo.tsx`
3. Change `USE_IMAGE_LOGO` from `false` to `true`
4. (Optional) Update `LOGO_PATH` if your filename is different

That's it — **zero other changes needed**.

---

## 📁 Project Structure

```
├── app/
│   ├── layout.tsx              # Root layout (Navbar + Footer)
│   ├── page.tsx                # Home page
│   ├── about/page.tsx          # About page
│   ├── services/
│   │   ├── page.tsx            # Services overview
│   │   └── [slug]/page.tsx     # Individual service pages
│   ├── insights/page.tsx       # Blog/insights page
│   ├── contact/page.tsx        # Contact page
│   └── api/contact/route.ts    # Contact form API
├── components/
│   ├── layout/                 # Navbar, Footer
│   ├── ui/                     # Logo, Button, ServiceCard, SectionHeading
│   ├── sections/               # Hero, ServicesGrid, Testimonials, etc.
│   └── forms/                  # ContactForm
├── lib/
│   ├── constants.ts            # All content/data
│   └── email.ts                # Email utility
└── public/                     # Static assets (logo goes here)
```

---

## 🚢 Deployment (Vercel)

1. Push code to GitHub
2. Import repository in [Vercel](https://vercel.com)
3. Add environment variables in Vercel dashboard
4. Deploy — Vercel auto-detects Next.js

---

## 📄 License

Private — All rights reserved by Unovia Consulting.
