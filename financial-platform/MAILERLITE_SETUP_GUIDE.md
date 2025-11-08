# MailerLite Newsletter Integration Setup Guide

## Why MailerLite?

MailerLite offers the BEST free tier for starting newsletters:
- ✅ **1,000 subscribers FREE** (vs ConvertKit's paid-only model)
- ✅ **12,000 emails/month FREE**
- ✅ **No credit card required**
- ✅ Unlimited newsletters
- ✅ Drag & drop email builder
- ✅ Landing pages included
- ✅ Automation workflows
- ✅ Simple, clean API
- ✅ Great deliverability rates

## Step 1: Create MailerLite Account

1. Go to [https://www.mailerlite.com/](https://www.mailerlite.com/)
2. Click **"Sign up free"**
3. Enter your details:
   - Email: office@money365.market (or your preferred email)
   - Create password
   - Select **"I want to send newsletters"**
4. Verify your email address
5. Complete the quick onboarding survey:
   - **Industry:** Financial Services / Investment Education
   - **Subscribers:** 0-500
   - **Purpose:** Growing my business

## Step 2: Create a Subscriber Group

1. After logging in, go to **Subscribers** → **Groups**
2. Click **"Create group"**
3. Group settings:
   - **Name:** "money365.market Newsletter"
   - **Description:** "Main newsletter subscribers for money365.market"
4. Click **"Create group"**
5. **Important:** Copy the **Group ID**
   - You can find it in the URL: `https://dashboard.mailerlite.com/subscribers/groups/12345678`
   - The Group ID is: `12345678`
   - Or click on the group and look for the ID in the settings

## Step 3: Get Your API Key

1. Click your profile (bottom left) → **"Integrations"**
2. Find **"MailerLite API"** section
3. Click **"Generate new token"**
4. Token settings:
   - **Name:** "money365.market Website"
   - **Scopes:** Check these permissions:
     - ✅ Read subscribers
     - ✅ Write subscribers
     - ✅ Read groups
5. Click **"Create token"**
6. **IMPORTANT:** Copy the API token immediately
   - It looks like: `eyJ0eXAiOiJKV1QiLCJhbGciOiJS...`
   - You won't be able to see it again!
7. Store it safely (you'll add it to .env.local next)

## Step 4: Update Environment Variables

1. Open `financial-platform/.env.local`
2. Replace the placeholder values:

```env
# MailerLite Newsletter Integration (Free up to 1,000 subscribers)
MAILERLITE_API_KEY=eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9...
MAILERLITE_GROUP_ID=12345678
```

3. Save the file
4. **Security:** Never commit .env.local to Git (it's already in .gitignore)

## Step 5: Test the Integration

1. Start your development server:
```bash
npm run dev
```

2. Open your browser to `http://localhost:3000`

3. Scroll to the newsletter signup form

4. Enter a test email (use a real email you can access)

5. Click **"Subscribe"**

6. Expected behavior:
   - ✅ Loading state: "Subscribing..."
   - ✅ Success message: "Welcome aboard! Confirm your email to start receiving insights."
   - ✅ Email field clears

7. Verify in MailerLite:
   - Go to **Subscribers** → **All subscribers**
   - Your test email should appear
   - Status: "Active" (or "Unconfirmed" if you set double opt-in)

8. Check your email:
   - MailerLite may send a welcome email (if you configured it)
   - Verify the email arrives successfully

## Step 6: Configure Welcome Email (Recommended)

### Option A: Simple Welcome Email

1. In MailerLite, go to **Campaigns** → **Email**
2. Click **"Create campaign"**
3. Choose **"Regular campaign"**
4. Template: Choose a clean template or start from scratch
5. Subject: "Welcome to money365.market - Your Daily Market Intelligence"
6. Design your welcome email:

```
Hi [Name],

Welcome to the money365.market community!

You're now part of 1,000+ smart investors who receive:
✓ Weekly market analysis
✓ Stock insights and strategies
✓ Expert investment tips
✓ Exclusive content

Here's what to read first:
→ [Link to best article]
→ [Link to tools]
→ [Link to about page]

Questions? Just reply to this email.

Best regards,
The money365.market Team

---
P.S. Make sure to add office@money365.market to your contacts so our emails don't go to spam.
```

7. Save as draft for now

### Option B: Automated Welcome Sequence

1. Go to **Automations** → **Workflows**
2. Click **"Create workflow"**
3. Choose **"When subscriber joins a group"**
4. Select your "money365.market Newsletter" group
5. Add **"Delay"** → 0 minutes (immediate)
6. Add **"Email"** → Create welcome email
7. Add **"Delay"** → 2 days
8. Add **"Email"** → Second email with top resources
9. Activate the workflow

## Step 7: Design Email Template

1. Go to **Settings** → **Email design**
2. Customize:
   - **Logo:** Upload money365.market logo
   - **Colors:**
     - Primary: #F97316 (soft orange)
     - Text: #44403C (deep brown)
   - **Footer:**
     ```
     money365.market - Daily Market Intelligence
     office@money365.market

     You're receiving this because you subscribed to our newsletter.
     Unsubscribe | Update preferences
     ```
3. Save as default template

## Step 8: Set Up Double Opt-in (Optional but Recommended)

Double opt-in improves email deliverability and list quality.

1. Go to **Settings** → **Forms**
2. Enable **"Double opt-in"**
3. Customize confirmation email:
   - Subject: "Confirm your subscription to money365.market"
   - Message: "Click the button below to confirm and start receiving insights."
4. Confirmation page:
   - Use MailerLite's default or redirect to your site

To use double opt-in, change in `route.ts`:
```typescript
status: 'unconfirmed', // User must confirm email
```

## Step 9: Create First Newsletter

1. Go to **Campaigns** → **Email**
2. Click **"Create campaign"**
3. Template: Choose clean, professional template
4. Content ideas for first newsletter:
   - Market recap from the week
   - Link to your best article
   - Quick tip or insight
   - Call-to-action (read more, use screener, etc.)
5. Schedule or send immediately

## Troubleshooting

### Error: "Newsletter service not configured"
- ✅ Check that both `MAILERLITE_API_KEY` and `MAILERLITE_GROUP_ID` are set in .env.local
- ✅ Restart your dev server: Stop and run `npm run dev` again
- ✅ Verify no extra spaces in the .env.local values

### Error: "Failed to subscribe to newsletter"
- ✅ Verify your API key is correct (copy-paste again)
- ✅ Verify Group ID is correct (check MailerLite dashboard)
- ✅ Check MailerLite account status (not suspended)
- ✅ Check API token permissions (needs subscriber write access)

### Error: "This email is already subscribed"
- ✅ This is expected - MailerLite prevents duplicates
- ✅ User sees friendly error message
- ✅ Check subscriber in MailerLite → Subscribers

### Email not received
- ✅ Check spam/junk folder
- ✅ Verify email address is correct
- ✅ Check MailerLite → Subscribers to confirm subscription
- ✅ If using double opt-in, user must confirm first
- ✅ Check MailerLite → Campaigns → Reports for delivery status

### API Rate Limits
MailerLite free tier limits:
- 1,000 subscribers max
- 12,000 emails/month
- API rate limit: 120 requests/minute (very generous)

## Next Steps After Setup

1. ✅ Test newsletter signup from homepage
2. ✅ Send welcome email to test subscriber
3. ✅ Create email template matching your brand
4. 📝 Write first newsletter
5. 📝 Set up automated welcome sequence (3-5 emails)
6. 📝 Create lead magnet (e.g., "Beginner's Investment Checklist PDF")
7. 📝 Add newsletter CTAs to article pages
8. 📝 Monitor analytics (open rates, click rates)

## MailerLite vs Competitors

| Feature | MailerLite | ConvertKit | Mailchimp | Brevo |
|---------|-----------|-----------|-----------|-------|
| Free subscribers | 1,000 | None (paid only) | 500 | Unlimited |
| Free emails/month | 12,000 | None | 1,000 | 300/day |
| Credit card required | No | Yes | No | No |
| Ease of use | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐ | ⭐⭐⭐ | ⭐⭐⭐⭐ |
| Landing pages | ✅ Yes | ✅ Yes | ❌ No | ❌ No |
| Automation | ✅ Yes | ✅ Yes | Limited | ✅ Yes |
| API quality | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐ | ⭐⭐⭐ | ⭐⭐⭐⭐ |

**Winner:** MailerLite 🏆

## Resources

- [MailerLite Help Center](https://www.mailerlite.com/help)
- [API Documentation](https://developers.mailerlite.com/docs/)
- [Best Practices](https://www.mailerlite.com/blog/email-marketing-best-practices)
- [Email Templates](https://www.mailerlite.com/templates)

## Integration Details

Files modified for MailerLite integration:
- ✅ **API Route:** `app/api/newsletter/route.ts` - MailerLite API integration
- ✅ **Component:** `components/NewsletterSignup.tsx` - Frontend form
- ✅ **Analytics:** `lib/analytics.ts` - GA4 tracking
- ✅ **Environment:** `.env.local` - API credentials

Features implemented:
- ✅ Email validation
- ✅ Duplicate subscription prevention
- ✅ Error handling with user-friendly messages
- ✅ Loading states
- ✅ GA4 event tracking
- ✅ Group assignment
- ✅ Optional name field
- ✅ Success/error feedback

---

**Need help?**
- MailerLite Support: support@mailerlite.com
- Live chat available in dashboard
- Help center: https://www.mailerlite.com/help

**Ready to launch?** Once you have 1,000+ subscribers, consider upgrading to their Growing Business plan ($9/month for 1,000-2,500 subscribers) for advanced features like custom HTML editor, priority support, and more.
