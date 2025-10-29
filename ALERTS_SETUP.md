# 🚨 Automated Alerts Setup Guide

This guide covers setting up automated monitoring alerts for the 6s Capital platform.

---

## 🎯 Alert Strategy

```
┌─────────────────────────────────────────────────────────────┐
│                   Alert Severity Levels                      │
├─────────────────────────────────────────────────────────────┤
│                                                              │
│  🔴 CRITICAL   → Immediate action (5 min response)          │
│  🟡 WARNING    → Review soon (1 hour response)              │
│  🔵 INFO       → Daily digest (no immediate action)         │
│                                                              │
└─────────────────────────────────────────────────────────────┘
```

---

## 1️⃣ Vercel Deployment Notifications

### GitHub Integration (Built-in)

Vercel automatically posts deployment statuses to GitHub:
- ✅ Deployment started
- ✅ Deployment succeeded
- ❌ Deployment failed

**Setup**: No configuration needed (automatic)

### Vercel Slack Integration

1. **Connect Slack**:
   - Go to: https://vercel.com/dashboard/integrations
   - Click "Add" next to Slack
   - Authorize Slack workspace

2. **Configure Notifications**:
   ```yaml
   Events to notify:
     - Deployment started
     - Deployment succeeded
     - Deployment failed
     - Build errors
     - Performance degradation

   Channel: #deployments
   ```

---

## 2️⃣ UptimeRobot Alerts

### Setup (5 minutes)

1. **Create Account**: https://uptimerobot.com/signup

2. **Add Monitor**:
   ```yaml
   Monitor Type: HTTPS
   Friendly Name: 6s Capital Production
   URL: https://your-domain.vercel.app
   Monitoring Interval: 5 minutes
   ```

3. **Add Alert Contacts**:
   ```yaml
   Email:
     - devops@6scapital.com
     - alerts@6scapital.com

   Slack Webhook (optional):
     - https://hooks.slack.com/services/YOUR/SLACK/WEBHOOK

   SMS (optional - paid feature):
     - +36 XX XXX XXXX
   ```

4. **Configure Alert Thresholds**:
   ```yaml
   Alert when down for: 2 consecutive checks (10 minutes)
   Alert on recovery: Yes
   ```

---

## 3️⃣ Sentry Alerts

### Quick Setup

Once Sentry is installed:

```bash
cd financial-platform
npx @sentry/wizard@latest -i nextjs
```

### Alert Rules

#### Critical Errors

```yaml
Rule Name: Critical Production Errors
Conditions:
  - Environment is "production"
  - Error level is "error" or "fatal"
  - Affects > 10 users
Actions:
  - Send Slack notification to #critical-errors
  - Send email to devops@6scapital.com
  - Create PagerDuty incident (optional)
```

#### Performance Degradation

```yaml
Rule Name: Performance Issues
Conditions:
  - Transaction duration > 3 seconds
  - Affects > 5% of transactions
Actions:
  - Send Slack notification to #performance
  - Send email (daily digest)
```

#### New Error Types

```yaml
Rule Name: New Error Detected
Conditions:
  - Error is "new" (first seen)
  - Occurred in last 10 minutes
Actions:
  - Send Slack notification to #errors
```

---

## 4️⃣ Custom Health Check Endpoint

### Implementation

Create a health check API route:

```typescript
// financial-platform/app/api/health/route.ts
import { NextResponse } from 'next/server'

export async function GET() {
  const health = {
    status: 'ok',
    timestamp: new Date().toISOString(),
    uptime: process.uptime(),
    environment: process.env.NODE_ENV,
    version: process.env.VERCEL_GIT_COMMIT_SHA || 'dev',
  }

  // Add checks for external dependencies
  const checks = {
    database: 'ok', // TODO: Add real database check
    cache: 'ok',    // TODO: Add real cache check
    api: 'ok',      // TODO: Add real API check
  }

  return NextResponse.json({
    ...health,
    checks,
  }, {
    status: 200,
    headers: {
      'Cache-Control': 'no-store, max-age=0',
    },
  })
}
```

### Monitor with UptimeRobot

```yaml
Monitor Name: 6s Capital Health Check
URL: https://your-domain.vercel.app/api/health
Type: Keyword
Keyword: "status":"ok"
Alert if keyword not found: Yes
```

---

## 5️⃣ GitHub Actions Alerts

### On Build Failure

Already configured in `.github/workflows/ci.yml`:

```yaml
- name: Notify on failure
  if: failure()
  uses: slackapi/slack-github-action@v1
  with:
    payload: |
      {
        "text": "❌ Build failed for 6s Capital!",
        "blocks": [
          {
            "type": "section",
            "text": {
              "type": "mrkdwn",
              "text": "*Build Failed* :x:\n*Branch:* ${{ github.ref }}\n*Commit:* ${{ github.sha }}\n*Action:* <${{ github.server_url }}/${{ github.repository }}/actions/runs/${{ github.run_id }}|View Logs>"
            }
          }
        ]
      }
  env:
    SLACK_WEBHOOK_URL: ${{ secrets.SLACK_WEBHOOK_URL }}
```

---

## 6️⃣ Slack Webhook Setup

### Create Incoming Webhook

1. Go to: https://api.slack.com/apps
2. Click "Create New App" → "From scratch"
3. Name: "6s Capital Alerts"
4. Select workspace
5. Features → Incoming Webhooks → Enable
6. "Add New Webhook to Workspace"
7. Select channel (e.g., #alerts)
8. Copy webhook URL

### Add to GitHub Secrets

1. Go to: https://github.com/AttilaSebok/6s-capital-platform/settings/secrets/actions
2. Click "New repository secret"
3. Name: `SLACK_WEBHOOK_URL`
4. Value: Your webhook URL
5. Click "Add secret"

### Test Webhook

```bash
curl -X POST YOUR_WEBHOOK_URL \
  -H 'Content-Type: application/json' \
  -d '{
    "text": "🚀 6s Capital Alert System is now active!"
  }'
```

---

## 7️⃣ Email Alerts

### Gmail Setup (for testing)

If using Gmail for alerts:

1. **Enable 2-Factor Authentication**
2. **Create App Password**:
   - Go to: https://myaccount.google.com/apppasswords
   - Select app: "Mail"
   - Select device: "Other" (6s Capital Alerts)
   - Copy password

3. **Add to Vercel Environment Variables**:
   ```bash
   SMTP_HOST=smtp.gmail.com
   SMTP_PORT=587
   SMTP_USER=your-email@gmail.com
   SMTP_PASS=your-app-password
   ALERT_EMAIL=devops@6scapital.com
   ```

### Professional Email Service (recommended)

For production, use:
- **SendGrid**: https://sendgrid.com (100 emails/day free)
- **Mailgun**: https://www.mailgun.com (5,000 emails/month free)
- **AWS SES**: https://aws.amazon.com/ses/ (62,000 emails/month free)

---

## 8️⃣ Alert Escalation Matrix

```
┌───────────────────────────────────────────────────────────┐
│                 Escalation Procedure                       │
├───────────────────────────────────────────────────────────┤
│                                                            │
│  Level 1 (0-15 min):   DevOps Engineer                   │
│    ├─ Slack notification                                  │
│    └─ Email alert                                         │
│                                                            │
│  Level 2 (15-30 min):  Development Team Lead              │
│    ├─ Slack notification                                  │
│    ├─ Email alert                                         │
│    └─ Phone call (if critical)                           │
│                                                            │
│  Level 3 (30+ min):    CTO / Management                   │
│    ├─ Email alert                                         │
│    ├─ Phone call                                          │
│    └─ Incident report required                           │
│                                                            │
└───────────────────────────────────────────────────────────┘
```

---

## 9️⃣ Alert Testing

### Test Critical Alert

```bash
# Simulate critical error
curl -X POST https://your-domain.vercel.app/api/test-error

# Expected result:
# - Sentry notification sent
# - Slack message in #critical-errors
# - Email to devops@6scapital.com
```

### Test Uptime Alert

```bash
# Temporarily disable site (not recommended on production!)
# Better: Use UptimeRobot "Pause monitoring" feature to test

# Expected result:
# - Email notification
# - Slack notification (if configured)
# - Status page updated
```

---

## 🔟 Alert Hygiene

### Best Practices

✅ **Do**:
- Keep alert thresholds realistic
- Review alerts weekly
- Update on-call rotation
- Document alert procedures
- Test alerts monthly

❌ **Don't**:
- Alert on everything (alert fatigue)
- Ignore warning alerts
- Use personal emails/phones
- Forget to test escalation
- Skip post-incident reviews

---

## 📊 Alert Metrics to Track

```yaml
Alert Volume:
  - Alerts per day: Target < 5
  - False positives: Target < 10%
  - Missed incidents: Target 0

Response Times:
  - Critical: < 5 minutes
  - Warning: < 1 hour
  - Info: < 24 hours

Resolution Times:
  - Critical: < 30 minutes
  - Warning: < 4 hours
  - Info: < 1 week
```

---

## 📞 Emergency Contact List

```yaml
DevOps Team:
  Primary: devops@6scapital.com
  Backup: tech@6scapital.com
  Slack: #devops

Development Team:
  Primary: dev@6scapital.com
  Slack: #development

Management:
  CTO: cto@6scapital.com
  CEO: ceo@6scapital.com
```

---

## 🚀 Quick Setup Checklist

```
Infrastructure:
  [ ] Vercel deployment notifications → Slack
  [ ] UptimeRobot monitoring configured
  [ ] Health check endpoint created
  [ ] GitHub Actions alerts configured

Error Tracking:
  [ ] Sentry installed and configured
  [ ] Alert rules created
  [ ] Slack integration active
  [ ] Email notifications setup

Communication:
  [ ] Slack webhooks created
  [ ] Email alerts configured
  [ ] SMS alerts (optional)
  [ ] On-call schedule published

Testing:
  [ ] Test critical alert
  [ ] Test warning alert
  [ ] Test escalation procedure
  [ ] Verify all channels receive alerts
```

---

## 💰 Cost Summary

```
Free Tier (Recommended for MVP):
├─ UptimeRobot: $0/month ✅
├─ Sentry (5K events): $0/month ✅
├─ Slack: $0/month ✅
├─ Email (SendGrid 100/day): $0/month ✅
└─ Total: $0/month

Startup Tier (Growing Product):
├─ UptimeRobot Pro: $0/month (still free)
├─ Sentry Team (50K events): $26/month
├─ Better Uptime: $18/month
├─ SendGrid (40K emails): $15/month
└─ Total: $59/month

Enterprise Tier (High Scale):
├─ PagerDuty: $21/user/month
├─ Sentry Business: $80/month
├─ Datadog: $15/host/month
└─ Total: $200+/month
```

---

**Setup Time**: 1-2 hours
**Maintenance**: 30 minutes/week
**Last Updated**: 2025-10-29
