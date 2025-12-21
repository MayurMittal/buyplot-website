# BuyPlot - Premium Real Estate Website - UP & Uttarakhand

A premium, one-page real estate website built with Next.js (App Router), Tailwind CSS, and Framer Motion for selling properties in Northern India. Founded by Dr. Rajeev Goyal with 30+ years of experience.

## Features

- **Sticky Navbar** with glassmorphism effect
- **Hero Section** with compelling CTAs
- **Trust Values Section** highlighting legal verification, transparency, and support
- **Dynamic Property Listings** with Google Sheet CSV integration
- **WhatsApp Integration** on every property card
- **About Region Section** showcasing UP and Uttarakhand
- **Testimonials Section** with real customer stories
- **Responsive Footer** with contact information
- **Smooth Animations** using Framer Motion
- **Mobile-First Design** optimized for Indian users

## Tech Stack

- **Next.js 14** (App Router)
- **TypeScript**
- **Tailwind CSS**
- **Framer Motion**
- **Lucide React** (Icons)

## Getting Started

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Google Sheet Integration

The website is configured to fetch property data from a Google Sheet published as CSV.

### Setup Instructions:

1. Create a Google Sheet with the following columns:
   - `id` - Unique identifier
   - `title` - Property title
   - `location` - Property location (e.g., "Dehradun, Uttarakhand")
   - `price` - Property price (optional, not displayed on website)
   - `type` - Property type (Plot/Flat/Villa)
   - `imageUrl` - Google Drive direct link or image URL
   - `description` - Property description
   - `rera_status` - RERA approval status

2. Publish the sheet as CSV:
   - Go to File → Share → Publish to web
   - Select CSV format
   - Copy the published URL

3. Add the URL to your environment variables:
   - Create a `.env.local` file
   - Add: `NEXT_PUBLIC_GOOGLE_SHEET_URL=your_csv_url_here`

4. The website will automatically fetch and display properties from the sheet.

**Note:** Currently, the website uses mock data. Replace the URL in `components/PropertyGrid.tsx` or set the environment variable to use your Google Sheet.

## Customization

### Colors

The color scheme is defined in `tailwind.config.ts`:
- **Forest Green**: Represents Uttarakhand/Nature
- **Royal Blue**: Represents trust and professionalism

### WhatsApp Number

Update the WhatsApp number in:
- `components/Navbar.tsx` (Call Now button)
- `components/PropertyCard.tsx` (WhatsApp button)
- `components/Footer.tsx` (Contact section)

### Content

All content can be customized in the respective component files:
- `components/Hero.tsx` - Hero section text
- `components/TrustValues.tsx` - Trust cards
- `components/Testimonials.tsx` - Customer testimonials
- `components/AboutRegion.tsx` - Region information

## Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
├── app/
│   ├── layout.tsx          # Root layout
│   ├── page.tsx            # Main page
│   └── globals.css         # Global styles
├── components/
│   ├── Navbar.tsx          # Navigation bar
│   ├── Hero.tsx            # Hero section
│   ├── TrustValues.tsx     # Trust cards section
│   ├── PropertyGrid.tsx    # Property listings grid
│   ├── PropertyCard.tsx    # Individual property card
│   ├── AboutRegion.tsx     # About region section
│   ├── Testimonials.tsx    # Testimonials section
│   └── Footer.tsx          # Footer component
└── lib/
    └── utils.ts            # Utility functions (Google Sheet fetch)
```

## License

This project is private and proprietary.



