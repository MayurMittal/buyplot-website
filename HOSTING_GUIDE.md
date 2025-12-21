# Hosting Guide for BuyPlot Website

This guide covers the best hosting options for your Next.js website.

## 🚀 Recommended: Vercel (Easiest & Best for Next.js)

**Why Vercel?**
- Made by the creators of Next.js
- Free tier with excellent features
- Automatic deployments from GitHub
- Built-in SSL certificates
- Global CDN
- Zero configuration needed

### Prerequisites

1. **GitHub Account** (free)
2. **Vercel Account** (free)
3. **Your code ready to deploy**

### Step-by-Step: Deploy to Vercel

#### Step 1: Prepare Your Code

1. **Create a `.gitignore` file** (if not exists):
   ```
   /node_modules
   /.next
   /out
   .env*.local
   .env
   ```

2. **Create a GitHub Repository:**
   - Go to [GitHub.com](https://github.com)
   - Click "New Repository"
   - Name it: `buyplot-website` (or any name)
   - Make it **Public** or **Private** (your choice)
   - Don't initialize with README (we already have files)

3. **Push Your Code to GitHub:**
   ```bash
   # Initialize git (if not already done)
   git init
   
   # Add all files
   git add .
   
   # Commit
   git commit -m "Initial commit - BuyPlot website"
   
   # Add your GitHub repository as remote
   git remote add origin https://github.com/YOUR_USERNAME/buyplot-website.git
   
   # Push to GitHub
   git branch -M main
   git push -u origin main
   ```

#### Step 2: Deploy to Vercel

1. **Sign up for Vercel:**
   - Go to [vercel.com](https://vercel.com)
   - Click "Sign Up"
   - Sign up with your GitHub account (easiest)

2. **Import Your Project:**
   - Click "Add New Project"
   - Select your GitHub repository (`buyplot-website`)
   - Vercel will auto-detect Next.js

3. **Configure Project:**
   - **Framework Preset:** Next.js (auto-detected)
   - **Root Directory:** `./` (default)
   - **Build Command:** `npm run build` (auto-detected)
   - **Output Directory:** `.next` (auto-detected)
   - **Install Command:** `npm install` (auto-detected)

4. **Environment Variables (if needed):**
   - If you're using Google Sheets, add:
     - Name: `NEXT_PUBLIC_GOOGLE_SHEET_URL`
     - Value: Your Google Sheet CSV URL

5. **Deploy:**
   - Click "Deploy"
   - Wait 2-3 minutes
   - Your site will be live at: `https://your-project-name.vercel.app`

6. **Custom Domain (Optional):**
   - Go to Project Settings → Domains
   - Add your domain: `buyplot.in`
   - Follow DNS instructions to point your domain to Vercel

---

## 🌐 Alternative: Netlify

**Why Netlify?**
- Free tier available
- Easy GitHub integration
- Good for static sites

### Steps:

1. Sign up at [netlify.com](https://netlify.com)
2. Click "Add new site" → "Import an existing project"
3. Connect your GitHub repository
4. Configure:
   - Build command: `npm run build`
   - Publish directory: `.next`
5. Deploy!

---

## 📋 Pre-Deployment Checklist

Before hosting, make sure:

- [ ] **Environment Variables:**
  - Google Sheet URL (if using): `NEXT_PUBLIC_GOOGLE_SHEET_URL`
  - Any API keys (if needed)

- [ ] **Test Build Locally:**
  ```bash
  npm run build
  npm start
  ```
  Visit `http://localhost:3000` to test

- [ ] **Update Contact Information:**
  - Phone numbers are correct
  - Email addresses are correct
  - WhatsApp numbers are correct

- [ ] **Check All Images:**
  - Founder photo is in `public/` folder
  - Property images load correctly

- [ ] **Test All Features:**
  - WhatsApp links work
  - Phone links work
  - All sections display correctly
  - Mobile responsive

- [ ] **SEO & Metadata:**
  - Title and description in `app/layout.tsx` are correct
  - All content is accurate

---

## 🔧 Build Configuration

Your `package.json` should have these scripts (already set):
```json
{
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start"
  }
}
```

---

## 🌍 Custom Domain Setup (buyplot.in)

### If using Vercel:

1. Go to your project on Vercel
2. Settings → Domains
3. Add domain: `buyplot.in` and `www.buyplot.in`
4. Vercel will provide DNS records:
   - Add A record: `76.76.21.21` (or CNAME to Vercel)
   - Add CNAME: `cname.vercel-dns.com`

### DNS Configuration:
- **A Record:** `@` → `76.76.21.21`
- **CNAME:** `www` → `cname.vercel-dns.com`

---

## 📊 Post-Deployment

After deployment:

1. **Test Everything:**
   - Visit your live site
   - Test all links
   - Test on mobile
   - Test WhatsApp integration

2. **Monitor:**
   - Vercel dashboard shows analytics
   - Check for any errors in logs

3. **Update Content:**
   - Any changes pushed to GitHub auto-deploy
   - Vercel creates preview deployments for pull requests

---

## 🆘 Troubleshooting

### Build Fails:
- Check build logs in Vercel dashboard
- Ensure all dependencies are in `package.json`
- Check for TypeScript errors: `npm run build` locally

### Images Not Loading:
- Ensure images are in `public/` folder
- Check image paths (should start with `/`)
- Clear browser cache

### Environment Variables Not Working:
- Add them in Vercel dashboard: Settings → Environment Variables
- Redeploy after adding

---

## 💰 Cost Estimate

**Vercel Free Tier:**
- ✅ Free for personal projects
- ✅ 100GB bandwidth/month
- ✅ Unlimited deployments
- ✅ SSL certificates included
- ✅ Custom domains supported

**Paid Plans:** Start at $20/month (only if you need more)

---

## 📝 Quick Start Commands

```bash
# 1. Test build locally
npm run build
npm start

# 2. Initialize git (if not done)
git init
git add .
git commit -m "Ready for deployment"

# 3. Push to GitHub
git remote add origin https://github.com/YOUR_USERNAME/buyplot-website.git
git push -u origin main

# 4. Deploy to Vercel (via website)
# Go to vercel.com and import your GitHub repo
```

---

## 🎯 Recommended Workflow

1. **Development:** Work locally with `npm run dev`
2. **Testing:** Test with `npm run build && npm start`
3. **Version Control:** Push to GitHub
4. **Deployment:** Vercel auto-deploys from GitHub
5. **Updates:** Push changes → Auto-deploy

---

## 📞 Need Help?

If you encounter issues:
1. Check Vercel deployment logs
2. Test build locally first
3. Check browser console for errors
4. Verify all environment variables are set

Good luck with your deployment! 🚀

