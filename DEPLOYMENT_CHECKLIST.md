# Pre-Deployment Checklist

Use this checklist before deploying your BuyPlot website.

## ✅ Code Preparation

- [ ] All code is committed to Git
- [ ] `.gitignore` is properly configured
- [ ] No sensitive data in code (API keys, passwords)
- [ ] All images are in `public/` folder
- [ ] Founder photo exists: `public/founder-photo.jpg`

## ✅ Build Test

Run these commands locally to ensure everything builds:

```bash
# Install dependencies
npm install

# Build the project
npm run build

# Test production build
npm start
```

Visit `http://localhost:3000` and verify:
- [ ] Site loads without errors
- [ ] All images display correctly
- [ ] All sections are visible
- [ ] Mobile responsive works
- [ ] WhatsApp links work
- [ ] Phone links work

## ✅ Content Verification

- [ ] Company name: **BuyPlot** (not PropertyHub)
- [ ] Founder name: **Dr. Rajeev Goyal**
- [ ] Phone numbers:
  - Primary: +91 95367 11313
  - Secondary: +91 95685 22577
- [ ] Email: info@buyplot.in
- [ ] Website: buyplot.in
- [ ] WhatsApp number: +91 95367 11313
- [ ] All testimonials are appropriate
- [ ] Property listings (if using Google Sheets) are configured

## ✅ Environment Variables

If using Google Sheets for properties, prepare:
- [ ] Google Sheet CSV URL ready
- [ ] Will add to Vercel: `NEXT_PUBLIC_GOOGLE_SHEET_URL`

## ✅ SEO & Metadata

Check `app/layout.tsx`:
- [ ] Title is correct
- [ ] Description is accurate
- [ ] Metadata includes buyplot.in

## ✅ Testing

Test on:
- [ ] Desktop browser (Chrome, Firefox, Edge)
- [ ] Mobile device (or browser dev tools)
- [ ] Tablet view
- [ ] All navigation links work
- [ ] Smooth scrolling works
- [ ] Animations work properly

## ✅ Git Repository

- [ ] GitHub repository created
- [ ] Code pushed to GitHub
- [ ] Repository is accessible (public or private)

## ✅ Deployment Platform

Choose one:
- [ ] Vercel (recommended)
- [ ] Netlify
- [ ] Other platform

## ✅ Post-Deployment

After deployment:
- [ ] Visit live site
- [ ] Test all features
- [ ] Check mobile view
- [ ] Test WhatsApp integration
- [ ] Verify phone numbers work
- [ ] Check Google Analytics (if added)
- [ ] Test form submissions (if any)

## 🚀 Ready to Deploy!

Once all items are checked, you're ready to deploy!

