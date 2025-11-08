# ConvertKit Newsletter Integration Setup Guide

## Overview
This guide will help you set up ConvertKit for the money365.market newsletter integration. ConvertKit offers a free plan for up to 1,000 subscribers, making it perfect for starting your email list.

## Step 1: Create ConvertKit Account

1. Go to [https://convertkit.com](https://convertkit.com)
2. Click "Get Started Free"
3. Sign up with your email (use office@money365.market)
4. Complete the onboarding questions:
   - **What do you create?** Select "Blog/Content"
   - **How many subscribers?** Select "0-1,000"
   - **Industry:** Financial Services / Investment Education

## Step 2: Create Your Newsletter Form

1. After logging in, go to **Grow** → **Landing Pages & Forms**
2. Click **Create New** → **Form**
3. Choose template: **Inline** or **Modal** (recommended: Inline)
4. Customize your form:
   - **Form Name:** "money365.market Newsletter Signup"
   - **Fields:** Keep it simple - Email only (name is optional)
   - **Success Message:** "Thank you for subscribing! Check your email to confirm."
5. **Design Settings:**
   - Match your brand colors (soft orange: #F97316, deep brown: #44403C)
   - Keep it minimal and professional
6. Click **Save & Publish**

## Step 3: Get Your Form ID

1. On the form you just created, click **Settings** (gear icon)
2. Look for **Form ID** in the URL or settings panel
   - Example: `https://app.convertkit.com/forms/designers/12345678/edit`
   - The Form ID is: `12345678`
3. **Copy this Form ID** - you'll need it for the .env.local file

## Step 4: Get Your API Secret Key

1. Click your profile icon (top right) → **Settings**
2. Go to **Advanced** tab
3. Scroll down to **API Secret**
4. Click **Show** to reveal your API Secret
5. **Copy the API Secret** - you'll need it for the .env.local file

⚠️ **IMPORTANT:** Keep your API Secret private. Never commit it to Git or share it publicly.

## Step 5: Update Environment Variables

1. Open `financial-platform/.env.local`
2. Replace the placeholder values with your actual credentials:

```env
# ConvertKit Newsletter Integration
CONVERTKIT_API_SECRET=your_actual_api_secret_here
CONVERTKIT_FORM_ID=your_actual_form_id_here
```

Example (with fake credentials):
```env
CONVERTKIT_API_SECRET=cs_abc123def456ghi789jkl012mno345pqr678stu901vwx234yz
CONVERTKIT_FORM_ID=6789012
```

3. Save the file

## Step 6: Test the Integration

1. Start your development server:
```bash
npm run dev
```

2. Open your browser to `http://localhost:3000`

3. Scroll to the newsletter signup form on the homepage

4. Enter a test email address (use a real email you can access)

5. Click **Subscribe**

6. Expected behavior:
   - Loading state appears ("Subscribing...")
   - Success message: "Successfully subscribed! Check your email for confirmation."
   - Email field clears

7. Check your ConvertKit dashboard:
   - Go to **Subscribers** → **All Subscribers**
   - Your test email should appear

8. Check your email inbox:
   - You should receive a confirmation email from ConvertKit
   - Click the confirmation link

## Step 7: Set Up Welcome Email Sequence (Recommended)

1. In ConvertKit, go to **Automate** → **Sequences**
2. Click **New Sequence**
3. Name it: "money365.market Welcome Series"
4. Create 3-5 welcome emails:

   **Email 1 (Day 0):** Welcome & Introduction
   - Subject: "Welcome to money365.market - Your Daily Market Intelligence"
   - Content: Introduce yourself, set expectations, link to best articles

   **Email 2 (Day 2):** Top Resources
   - Subject: "3 Must-Read Articles for New Investors"
   - Content: Link to your best beginner articles

   **Email 3 (Day 5):** Tools & Features
   - Subject: "Free Tools to Analyze Any Stock"
   - Content: Showcase your stock screener and analysis tools

   **Email 4 (Day 7):** Engagement
   - Subject: "What Topics Should We Cover Next?"
   - Content: Ask for feedback, encourage replies

5. Connect the sequence to your form:
   - Go back to your form settings
   - Under **Incentive Settings** → **Automation**
   - Select your welcome sequence
   - Save changes

## Step 8: Configure Tag for Segmentation (Optional)

The newsletter API already tags subscribers with `money365.market`. You can use this tag to:

1. Create segments (e.g., separate newsletter campaigns)
2. Track subscriber source
3. Set up automation rules

To view tagged subscribers:
1. Go to **Subscribers** → **Tags**
2. Find the `money365.market` tag
3. Click to see all tagged subscribers

## Step 9: Monitor Analytics

ConvertKit provides built-in analytics:

1. **Dashboard:** Overview of subscriber growth
2. **Forms:** Individual form conversion rates
3. **Sequences:** Email open rates and click rates
4. **Subscribers:** Engagement levels

Additionally, Google Analytics 4 will track:
- Newsletter signups (event: `newsletter_signup`)
- Location: `homepage` (can add more locations like `article_end`, `sidebar`)

## Troubleshooting

### Error: "Newsletter service not configured"
- Check that both `CONVERTKIT_API_SECRET` and `CONVERTKIT_FORM_ID` are set in .env.local
- Restart your development server after changing .env.local

### Error: "Failed to subscribe to newsletter"
- Verify your API Secret is correct
- Verify your Form ID is correct
- Check ConvertKit dashboard for API usage limits

### Error: "This email is already subscribed"
- This is expected behavior - ConvertKit prevents duplicate subscriptions
- The user will see a friendly message

### Email not received
- Check spam folder
- Verify the email address is correct
- Check ConvertKit → Subscribers to confirm subscription
- Some email providers delay confirmation emails

## Next Steps

After setup is complete:

1. ✅ Test newsletter signup from homepage
2. ✅ Create welcome email sequence
3. ✅ Design email templates matching your brand
4. 📝 Write compelling weekly newsletter content
5. 📝 Create lead magnet (e.g., "Beginner's Investment Checklist PDF")
6. 📝 Add newsletter CTA to article pages
7. 📝 Add newsletter CTA to sidebar
8. 📝 Set up automated content delivery

## ConvertKit Resources

- [ConvertKit Documentation](https://help.convertkit.com/)
- [API Documentation](https://developers.convertkit.com/)
- [Email Marketing Best Practices](https://convertkit.com/resources)
- [Support](https://help.convertkit.com/en/)

## Integration Details

The newsletter integration is located in:
- **API Route:** `app/api/newsletter/route.ts`
- **Component:** `components/NewsletterSignup.tsx`
- **Analytics:** `lib/analytics.ts`
- **Environment:** `.env.local`

Features implemented:
- ✅ Email validation
- ✅ Duplicate subscription prevention
- ✅ Error handling
- ✅ Success/error messages
- ✅ Loading states
- ✅ GA4 tracking
- ✅ ConvertKit tagging
- ✅ First name support (optional)

---

**Need help?** Contact ConvertKit support at support@convertkit.com or visit their help center.
