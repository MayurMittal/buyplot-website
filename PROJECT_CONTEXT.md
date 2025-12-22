# BuyPlot Website - Project Context

This document contains all the context and requirements for the BuyPlot real estate website project.

## 📋 Project Overview

**Project Name:** BuyPlot  
**Website:** buyplot.in  
**Type:** Premium one-page real estate website  
**Target Market:** Northern India (Uttar Pradesh & Uttarakhand)  
**Technology:** Next.js 14 (App Router), TypeScript, Tailwind CSS, Framer Motion

## 🎯 Brand Identity

### Core Values
- **Trust** - 100% legally verified properties
- **Transparency** - No hidden costs, transparent pricing
- **Legal Clarity** - Every property is verified
- **Relationship Focus** - "A relationship, not just a transaction"

### Target Audience
- Indian families
- Investors
- Retirees
- People looking for properties in UP & Uttarakhand

### Brand Aesthetics
- **Style:** Clean, minimalistic, premium but accessible
- **Color Palette:**
  - **Deep Forest Green** (representing Uttarakhand/Nature)
  - **Trustworthy Royal Blue** (representing trust and professionalism)
  - **White space** for clean design

## 👤 Founder Information

**Name:** Dr. Rajeev Goyal  
**Title:** Founder & CEO  
**Experience:** Almost 30 years in real estate industry  
**Achievements:** 100+ Happy Families  
**Photo:** `public/founder-photo.jpg` (graphic card style)

### Founder Quote
> "A relationship, not just a transaction. That's what sets us apart. When you choose BuyPlot, you're choosing a partner who will be with you every step of the way."  
> — Dr. Rajeev Goyal

## 📞 Contact Information

### Phone Numbers
- **Primary:** +91 95367 11313
- **Secondary:** +91 95685 22577

### Email
- **General:** info@buyplot.in

### WhatsApp
- **Number:** +91 95367 11313
- **Integration:** Every property card has a WhatsApp button that opens WhatsApp directly (no pre-filled message)

### Locations
- Dehradun, Uttarakhand
- Noida, Uttar Pradesh

### RERA Registration (Placeholders)
- UP: UP-RERA/XXXX/XXXX
- UK: UK-RERA/XXXX/XXXX

## 🏗️ Technical Stack

### Core Technologies
- **Framework:** Next.js 14.2.35 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS 3.4.7
- **Animations:** Framer Motion 11.3.19
- **Icons:** Lucide React 0.424.0
- **Font:** Inter (from Google Fonts)

### Build Configuration
- **Build Command:** `npm run build`
- **Start Command:** `npm start`
- **Dev Command:** `npm run dev`

## 📁 Project Structure

```
├── app/
│   ├── layout.tsx          # Root layout with metadata
│   ├── page.tsx            # Main page (single-page scroll)
│   └── globals.css         # Global styles and Tailwind
├── components/
│   ├── Navbar.tsx          # Sticky navbar with glassmorphism
│   ├── Hero.tsx            # Hero section with CTA
│   ├── TrustValues.tsx     # Three trust cards (Shield, Eye, Handshake)
│   ├── PropertyGrid.tsx    # Property listings grid
│   ├── PropertyCard.tsx    # Individual property card
│   ├── AboutUs.tsx         # Founder section with photo
│   ├── AboutRegion.tsx     # UP & Uttarakhand info
│   ├── Testimonials.tsx    # Customer testimonials
│   └── Footer.tsx           # Footer with contact info
├── lib/
│   └── utils.ts            # Google Sheet CSV fetch utility
├── public/
│   ├── founder-photo.jpg   # Founder's graphic card image
│   └── README.md           # Instructions for images
└── Configuration files
    ├── package.json
    ├── tsconfig.json
    ├── tailwind.config.ts
    ├── next.config.js
    └── .gitignore
```

## 🎨 Design Specifications

### Color Scheme (Tailwind Config)
- **Forest Green:** 
  - Primary: `forest-green-600` (#277349)
  - Light: `forest-green-400`, `forest-green-50`
  - Dark: `forest-green-800`
- **Royal Blue:**
  - Primary: `royal-blue-600` (#2563eb)
  - Light: `royal-blue-400`, `royal-blue-50`
  - Dark: `royal-blue-700`

### Typography
- **Font Family:** Inter (system fallback)
- **Headings:** Bold, large sizes (3xl to 7xl)
- **Body:** Regular weight, readable sizes

### Animations
- **Library:** Framer Motion
- **Type:** Fade-in on scroll
- **Effect:** Smooth reveal animations
- **Viewport:** Once (animations trigger once when in view)

## 📄 Page Sections (Single Page Scroll)

### 1. Navbar
- **Type:** Sticky, glassmorphism effect
- **Logo:** "B" in gradient circle + "BuyPlot" text
- **Links:** Listings, About, Our Promise, Contact
- **CTA:** "Call Now" button (primary phone number)
- **Mobile:** Hamburger menu

### 2. Hero Section
- **Background:** High-quality image with overlay
- **Headline:** "Find Your Piece of Peace in UP & Uttarakhand"
- **Subhead:** "Verified Properties. Transparent Pricing. Zero Hidden Costs."
- **CTA:** "View Verified Listings" button
- **Scroll Indicator:** Animated scroll down indicator

### 3. Trust Values Section
Three cards explaining why BuyPlot is different:

1. **100% Legally Verified** (Shield icon)
   - "We don't list disputed properties. Every paper is checked."

2. **Transparent Pricing** (Eye icon)
   - "No hidden brokerage. What you see is what you pay."

3. **End-to-End Support** (Handshake icon)
   - "From site visit to registry, we are with you."

### 4. Property Listings Section
- **Dynamic:** Fetches from Google Sheet CSV (or uses mock data)
- **Grid Layout:** Responsive (1 col mobile, 2 col tablet, 3 col desktop)
- **Card Features:**
  - Property image
  - Title
  - Location (with pin icon)
  - Description
  - Type badge (Plot/Flat/Villa)
  - RERA status badge
  - WhatsApp button (opens directly, no pre-filled message)
- **No Price Display:** Prices are removed from display (but kept in data structure)

### 5. About Us Section
- **Founder Photo:** Graphic card style image
- **Founder Name:** Dr. Rajeev Goyal
- **Title:** Founder & CEO
- **Bio:** Two paragraphs about experience and mission
- **Stats:**
  - 30+ Years Experience
  - 100+ Happy Families
  - 100% Verified Properties
- **Quote:** Founder's quote in styled box

### 6. About Region Section
Split-screen highlighting:

**Uttar Pradesh:**
- Infrastructure growth
- Rapid urbanization
- IT and manufacturing hubs
- Affordable pricing with high ROI

**Uttarakhand:**
- Pristine environment
- Excellent educational institutions
- Growing tourism sector
- Natural beauty and modern living

### 7. Testimonials Section
- **Title:** "Stories of Happy Families"
- **Format:** Three testimonial cards
- **Features:** Quote, rating stars, customer name, property type, location

### 8. Footer
- **Brand:** BuyPlot logo and tagline
- **Quick Links:** Listings, About, Our Promise
- **Contact:** Both phone numbers, email, locations
- **Social:** Facebook, Instagram, Twitter (placeholders)
- **Legal:** RERA registration numbers
- **Copyright:** BuyPlot with tagline

## 🔧 Key Features

### WhatsApp Integration
- **Location:** Every property card
- **Functionality:** Opens WhatsApp directly (no pre-filled message)
- **Number:** +91 95367 11313
- **Button Style:** WhatsApp green (#25D366)

### Google Sheet Integration
- **Purpose:** Dynamic property listings
- **Format:** CSV published from Google Sheets
- **Columns Required:**
  - `id` - Unique identifier
  - `title` - Property title
  - `location` - Property location
  - `price` - Property price (not displayed)
  - `type` - Plot/Flat/Villa
  - `imageUrl` - Image URL
  - `description` - Property description
  - `rera_status` - RERA approval status
- **Environment Variable:** `NEXT_PUBLIC_GOOGLE_SHEET_URL`
- **Fallback:** Mock data if URL not provided

### Mobile-First Design
- **Priority:** 80% of users on mobile
- **Touch Targets:** Large, easy to tap
- **Layout:** Stacks perfectly on mobile
- **Responsive:** Works on all screen sizes

### Animations
- **Library:** Framer Motion
- **Type:** Scroll-triggered fade-in
- **Performance:** Optimized, triggers once
- **Smooth:** No janky animations

## 📝 Content Guidelines

### Language
- **Primary:** English
- **Style:** Simple, professional
- **Tone:** Trustworthy, friendly, accessible

### Key Messages
- Trust and transparency
- Legal verification
- No hidden costs
- Relationship-focused
- End-to-end support

## 🚀 Deployment Information

### Hosting Platform
- **Recommended:** Vercel (made by Next.js creators)
- **Alternative:** Netlify
- **Domain:** buyplot.in

### Build Configuration
- **Framework:** Next.js (auto-detected)
- **Build Command:** `npm run build`
- **Output:** `.next` directory
- **Node Version:** Compatible with Node 18+

### Environment Variables
- `NEXT_PUBLIC_GOOGLE_SHEET_URL` - Google Sheet CSV URL (optional)

## 🔍 Important Notes

### Image Handling
- **Founder Photo:** Uses regular `<img>` tag (not Next.js Image)
- **Path:** `/founder-photo.jpg` in public folder
- **Format:** Graphic card style, not traditional photo
- **Fallback:** Shows initials "RG" if image fails to load

### Property Listings
- **Prices:** Removed from display (kept in data structure)
- **WhatsApp:** Direct link, no pre-filled message
- **Images:** Can be from Google Drive or any URL

### Brand Consistency
- **Company Name:** Always "BuyPlot" (not PropertyHub)
- **Founder Name:** Always "Dr. Rajeev Goyal"
- **Domain:** buyplot.in
- **Logo:** "B" in gradient circle

## 🐛 Known Issues & Solutions

### Image Loading
- **Issue:** 404 errors for images
- **Solution:** Ensure images are in `public/` folder
- **Cache:** Use cache-busting parameter `?v=1` if needed

### Build Warnings
- **ESLint:** Circular structure warning (non-critical)
- **Solution:** Can be ignored or fixed in future

## 📚 Development Commands

```bash
# Install dependencies
npm install

# Development server
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Lint code
npm run lint
```

## 🎯 Future Enhancements (Optional)

- Add Google Analytics
- Add contact form
- Add property search/filter
- Add blog section
- Add more testimonials
- Add property comparison feature
- Add virtual tour integration
- Add multi-language support (Hindi)

## 📞 Support & Maintenance

### Regular Updates Needed
- Property listings (via Google Sheet)
- Testimonials (add new ones)
- Founder photo (if needed)
- Contact information (if changes)

### Monitoring
- Check Vercel/Netlify logs
- Monitor website performance
- Check for broken links
- Verify WhatsApp/phone links work

---

**Last Updated:** December 2024  
**Project Status:** Production Ready  
**Version:** 1.0.0

