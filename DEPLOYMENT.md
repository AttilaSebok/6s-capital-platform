# 🚀 Deployment Guide - 6s Capital Financial Platform

This guide will help you deploy the 6s Capital platform to production using Vercel.

---

## 📋 Prerequisites

- GitHub account with access to the repository
- Vercel account (free tier works perfectly)
- Domain name (optional, Vercel provides free subdomain)

---

## 🎯 Quick Deploy (5 Minutes)

### Step 1: Connect to Vercel

1. **Go to Vercel**: https://vercel.com/signup
2. **Sign up with GitHub** (easiest option)
3. **Import your repository**:
   - Click "Add New Project"
   - Select "Import Git Repository"
   - Choose `AttilaSebok/6s-capital-platform`

### Step 2: Configure Project

```yaml
Framework Preset: Next.js
Root Directory: ./financial-platform
Build Command: npm run build
Output Directory: .next
Install Command: npm install
```

### Step 3: Environment Variables (Optional)

Add these in Vercel dashboard if needed:

```bash
NEXT_PUBLIC_APP_NAME=6s Capital
NEXT_PUBLIC_APP_URL=https://your-domain.vercel.app
```

### Step 4: Deploy

Click **"Deploy"** and wait 2-3 minutes. That's it! 🎉

Your site will be live at: `https://6s-capital-platform.vercel.app`

---

## 🔄 Automated Deployments

Once connected to Vercel:

- **Push to `main` branch** → Automatic production deployment
- **Open Pull Request** → Automatic preview deployment
- **Every commit** → Automatic build and test

### GitHub Actions CI/CD

The repository includes automated testing:

```yaml
✓ Lint & Type Check
✓ Build Test
✓ Deploy to Vercel
```

---

## 🔐 GitHub Secrets Setup (for CI/CD)

If you want to use the GitHub Actions workflow, add these secrets to your repository:

1. Go to: `https://github.com/AttilaSebok/6s-capital-platform/settings/secrets/actions`
2. Click "New repository secret"
3. Add these secrets:

### Required Secrets:

```bash
VERCEL_TOKEN          # Get from: https://vercel.com/account/tokens
VERCEL_ORG_ID         # Get from: Vercel project settings
VERCEL_PROJECT_ID     # Get from: Vercel project settings
```

### How to get Vercel credentials:

1. **VERCEL_TOKEN**:
   - Go to https://vercel.com/account/tokens
   - Click "Create Token"
   - Copy the token

2. **VERCEL_ORG_ID** and **VERCEL_PROJECT_ID**:
   - Run in your terminal:
     ```bash
     cd financial-platform
     npm i -g vercel
     vercel link
     ```
   - IDs will be saved in `.vercel/project.json`

---

## 🌍 Custom Domain Setup

### Option 1: Vercel Subdomain (Free)

Your site is automatically available at:
```
https://6s-capital-platform.vercel.app
```

### Option 2: Custom Domain

1. Go to Vercel Project → Settings → Domains
2. Add your domain (e.g., `6scapital.com`)
3. Update DNS records at your domain provider:

```dns
Type: CNAME
Name: www
Value: cname.vercel-dns.com

Type: A
Name: @
Value: 76.76.21.21
```

4. Wait 24-48 hours for DNS propagation
5. SSL certificate is automatically provisioned (free)

---

## 📊 Monitoring & Analytics

### Vercel Analytics (Built-in)

Vercel provides free analytics:
- Page views
- Unique visitors
- Top pages
- Geographic distribution
- Web Vitals (performance)

Enable in: Project Settings → Analytics → Enable

### Error Tracking (Optional)

For production error tracking, consider:
- **Sentry** (recommended): https://sentry.io
- **LogRocket**: https://logrocket.com
- **Datadog**: https://www.datadoghq.com

---

## 🔧 Production Checklist

Before going live, verify:

- [ ] All pages load correctly
- [ ] TradingView widgets display properly
- [ ] Newsletter form works
- [ ] Stock screener functions correctly
- [ ] Mobile responsive design
- [ ] SSL certificate active (HTTPS)
- [ ] Performance: Lighthouse score > 90
- [ ] SEO: Meta tags configured
- [ ] Analytics tracking enabled
- [ ] Error tracking configured

---

## 🚨 Troubleshooting

### Build Fails

```bash
# Common issue: Node version mismatch
# Solution: Ensure package.json has:
"engines": {
  "node": ">=18.0.0"
}
```

### API Routes Not Working

```bash
# Ensure API routes are in:
/financial-platform/app/api/
```

### Environment Variables Not Loading

```bash
# Production variables must start with NEXT_PUBLIC_
# Add them in Vercel dashboard → Settings → Environment Variables
```

### Slow Loading

```bash
# Enable Vercel Speed Insights:
npm install @vercel/speed-insights
```

---

## 📞 Support

- **Vercel Docs**: https://vercel.com/docs
- **Next.js Docs**: https://nextjs.org/docs
- **GitHub Issues**: https://github.com/AttilaSebok/6s-capital-platform/issues

---

## 🎉 You're Live!

Congratulations! Your 6s Capital Financial Platform is now deployed.

**Next Steps:**
1. Share your live URL with stakeholders
2. Monitor traffic and performance
3. Set up custom domain (if not done)
4. Enable analytics
5. Plan future features

---

**Deployment Date**: January 2025
**Platform**: Vercel
**Framework**: Next.js 15
**Deployment Time**: ~2-3 minutes
**Monthly Cost**: $0 (Free tier) - $20 (Pro tier with custom domain)
