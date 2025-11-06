# Google Analytics 4 Setup Guide for money365.market

## Status: ✅ Code Ready - Need GA4 Measurement ID

The Google Analytics 4 integration is **already implemented** in the codebase. You just need to create a GA4 property and add the Measurement ID to your environment variables.

---

## Step 1: Create Google Analytics 4 Property

### 1.1 Go to Google Analytics
Visit: https://analytics.google.com/

### 1.2 Create Account (if you don't have one)
- Click **"Start measuring"**
- Account name: `money365.market` or `6s Capital`
- Configure data-sharing settings (optional)
- Click **"Next"**

### 1.3 Create Property
- Property name: `money365.market`
- Reporting time zone: Choose your timezone (e.g., `(GMT+01:00) Central European Time`)
- Currency: `USD` or your preferred currency
- Click **"Next"**

### 1.4 Business Details
- Industry category: **Finance** or **News and Media**
- Business size: **Small** (1-10 employees)
- Intended use: Select relevant options (e.g., "Examine user behavior", "Measure advertising ROI")
- Click **"Create"**

### 1.5 Accept Terms of Service
- Read and accept the Google Analytics Terms of Service
- Accept the Data Processing Amendment if required
- Click **"I Accept"**

---

## Step 2: Set Up Data Stream

### 2.1 Choose Platform
- Select **Web** as your platform

### 2.2 Configure Web Stream
- **Website URL**: `https://money365.market`
- **Stream name**: `money365.market - Production`
- Click **"Create stream"**

### 2.3 Copy Measurement ID
You'll see a **Measurement ID** that looks like: `G-XXXXXXXXXX`

**Example:** `G-K4B9T2XYZ1`

📋 **COPY THIS ID** - You'll need it in the next step!

---

## Step 3: Add Measurement ID to Environment Variables

### 3.1 Local Development (.env.local)

Open or create `financial-platform/.env.local` and add:

```env
# Resend API Key for Contact Form
RESEND_API_KEY=re_LT7szqT4_J7bXEMBX5S26eTegiRdkqbnv

# Google Analytics 4 Measurement ID
NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX
```

Replace `G-XXXXXXXXXX` with your actual Measurement ID.

### 3.2 Production (Vercel)

1. Go to **Vercel Dashboard**: https://vercel.com/dashboard
2. Select your project: `6s-capital-platform` or `money365-market`
3. Go to **Settings** → **Environment Variables**
4. Add new variable:
   - **Key**: `NEXT_PUBLIC_GA_MEASUREMENT_ID`
   - **Value**: `G-XXXXXXXXXX` (your actual ID)
   - **Environment**: Select **Production**, **Preview**, and **Development**
5. Click **"Save"**
6. **Redeploy** your site for changes to take effect

---

## Step 4: Verify Tracking Works

### 4.1 Test in Development
1. Restart your development server:
   ```bash
   cd financial-platform
   npm run dev
   ```
2. Open http://localhost:3000
3. Open **Chrome DevTools** (F12) → **Console**
4. You should see no errors related to `gtag`
5. Check **Network** tab for requests to `google-analytics.com`

### 4.2 Test in Production
1. Deploy to production (or wait for automatic deployment)
2. Visit https://money365.market
3. Open **Chrome DevTools** → **Console**
4. Check Network tab for GA requests

### 4.3 Real-Time Report in GA4
1. Go to Google Analytics dashboard
2. Navigate to **Reports** → **Realtime**
3. Visit your website in another tab
4. You should see **1 active user** in the Realtime report within 30 seconds

---

## Step 5: Configure Enhanced Measurement (Optional but Recommended)

### 5.1 Enable Enhanced Measurement
1. In GA4, go to **Admin** (bottom left gear icon)
2. Under **Property** column, click **Data Streams**
3. Click on your web stream (`money365.market - Production`)
4. Toggle **Enhanced measurement** to **ON**

### 5.2 Enable These Events:
- ✅ **Page views** (already tracked)
- ✅ **Scrolls** (track 90% scroll depth)
- ✅ **Outbound clicks** (track affiliate links)
- ✅ **Site search** (if you add search functionality)
- ✅ **Video engagement** (if you add videos)
- ✅ **File downloads** (track PDF downloads like lead magnets)

---

## Step 6: Set Up Conversion Events

### 6.1 Mark Events as Conversions
1. In GA4, go to **Admin** → **Events**
2. Wait for these events to appear (after users interact with your site):
   - `newsletter_signup`
   - `lead_magnet_download`
   - `affiliate_click`
   - `tool_usage`
3. Click the **toggle switch** next to each event to mark it as a **Conversion**

### 6.2 Key Conversion Events Already Implemented
Our code already tracks these custom events:

✅ **newsletter_signup** - When users subscribe to newsletter
- Location parameter: 'homepage', 'article_end', 'sidebar'

✅ **article_read** - When users finish reading an article
- Article title, category, and reading time tracked

✅ **tool_usage** - When users interact with tools
- Tool name and action tracked

✅ **lead_magnet_download** - When users download PDFs
- Magnet name tracked

✅ **affiliate_click** - When users click affiliate links
- Partner and placement tracked

✅ **scroll_depth** - User engagement (25%, 50%, 75%, 100%)

✅ **time_on_page** - Session duration tracking

---

## Step 7: Link Google Search Console (Highly Recommended)

### 7.1 Why Link GSC?
- See which search queries bring traffic
- Track click-through rates (CTR)
- Identify indexing issues
- See which pages rank best

### 7.2 How to Link
1. In GA4, go to **Admin** → **Product Links** → **Search Console Links**
2. Click **"Link"**
3. Select your Search Console property (or add it if not listed)
4. Click **"Confirm"**
5. Select the web data stream
6. Click **"Submit"**

---

## 📊 What You'll See in Google Analytics

### After 24 Hours:
- **Realtime users**: See who's on your site right now
- **Page views**: Which pages are most popular
- **Traffic sources**: Where visitors come from (organic, direct, social, referral)
- **User demographics**: Age, gender, location (anonymized)
- **Device breakdown**: Desktop vs mobile vs tablet

### After 7 Days:
- **Engagement metrics**: Average session duration, pages per session
- **Top landing pages**: Which pages users enter your site from
- **Exit pages**: Which pages users leave from
- **Conversion rates**: Newsletter signups, tool usage, etc.

### After 30 Days:
- **Traffic trends**: Growth over time
- **User retention**: Returning visitors vs new visitors
- **Content performance**: Which articles drive most engagement
- **SEO insights**: Organic search keywords (via Search Console)

---

## 🚨 Troubleshooting

### Issue: "gtag is not defined" in Console
**Solution**: Make sure `NEXT_PUBLIC_GA_MEASUREMENT_ID` is set in `.env.local` and server is restarted.

### Issue: No data in GA4 Realtime Report
**Checklist**:
1. ✅ Measurement ID is correct (starts with `G-`)
2. ✅ Environment variable is `NEXT_PUBLIC_GA_MEASUREMENT_ID` (must start with `NEXT_PUBLIC_`)
3. ✅ Development server was restarted after adding env variable
4. ✅ Browser is not blocking analytics (check ad blockers, privacy extensions)
5. ✅ Visit the site in an incognito window to test

### Issue: Events Not Showing Up
**Solution**: Events appear in GA4 **after they're triggered at least once**. Test by:
1. Subscribing to newsletter → `newsletter_signup` event fires
2. Scrolling to bottom of page → `scroll_depth` event fires
3. Clicking an affiliate link → `affiliate_click` event fires

---

## ✅ Checklist: Is GA4 Set Up Correctly?

- [ ] GA4 property created
- [ ] Measurement ID copied (format: `G-XXXXXXXXXX`)
- [ ] `NEXT_PUBLIC_GA_MEASUREMENT_ID` added to `.env.local`
- [ ] `NEXT_PUBLIC_GA_MEASUREMENT_ID` added to Vercel environment variables
- [ ] Development server restarted
- [ ] Site deployed to production (Vercel)
- [ ] Realtime report shows active users when visiting site
- [ ] Enhanced measurement enabled
- [ ] Conversion events marked in GA4
- [ ] Google Search Console linked (optional but recommended)

---

## 📚 Next Steps After GA4 is Live

### Week 1: Baseline Metrics
- Monitor daily traffic
- Check which pages get most views
- Identify primary traffic sources

### Week 2-4: Optimize Conversion Funnels
- Track newsletter signup rate (target: >3%)
- A/B test newsletter CTA placements
- Optimize high-traffic pages with low engagement

### Month 2+: SEO & Content Strategy
- Use Search Console data to identify winning keywords
- Create more content around high-traffic topics
- Optimize meta titles/descriptions for CTR

---

## 🔗 Useful Resources

- **GA4 Documentation**: https://support.google.com/analytics/answer/10089681
- **GA4 Setup Assistant**: https://support.google.com/analytics/answer/9744165
- **Event Tracking Guide**: https://developers.google.com/analytics/devguides/collection/gtagjs/events
- **Conversion Tracking**: https://support.google.com/analytics/answer/9267568

---

**Status**: 🟢 Ready to configure
**Estimated Setup Time**: 15-20 minutes
**Maintainer**: Attila Sebok (office@money365.market)
