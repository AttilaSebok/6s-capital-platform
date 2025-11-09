import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  try {
    const { email, name } = await request.json()

    // Validate email
    if (!email || !email.includes('@')) {
      return NextResponse.json(
        { error: 'Invalid email address' },
        { status: 400 }
      )
    }

    // Check if MailerLite credentials are configured
    if (!process.env.MAILERLITE_API_KEY || !process.env.MAILERLITE_GROUP_ID) {
      console.error('MailerLite credentials not configured')
      return NextResponse.json(
        { error: 'Newsletter service not configured' },
        { status: 500 }
      )
    }

    // Subscribe to MailerLite with 'active' status to bypass double opt-in
    // We'll handle confirmation email separately via Resend
    const mailerliteResponse = await fetch(
      'https://connect.mailerlite.com/api/subscribers',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${process.env.MAILERLITE_API_KEY}`,
          'Accept': 'application/json',
        },
        body: JSON.stringify({
          email: email,
          fields: {
            name: name || '',
          },
          groups: [process.env.MAILERLITE_GROUP_ID],
          status: 'unconfirmed', // MailerLite will send double opt-in email
          resubscribe: false,
        }),
      }
    )

    const mailerliteData = await mailerliteResponse.json()

    if (!mailerliteResponse.ok) {
      console.error('MailerLite API error:', mailerliteData)
      return NextResponse.json(
        { error: 'Failed to subscribe to newsletter' },
        { status: 500 }
      )
    }

    // Log successful subscription - MailerLite will send double opt-in email
    console.log(`New subscriber: ${email} - MailerLite will send confirmation email`)

    return NextResponse.json({
      success: true,
      message: 'Almost there! Check your email to confirm your subscription.',
      subscriber: {
        email: mailerliteData.data?.email || email,
        id: mailerliteData.data?.id,
      },
    })
  } catch (error) {
    console.error('Newsletter subscription error:', error)
    return NextResponse.json(
      { error: 'An unexpected error occurred. Please try again.' },
      { status: 500 }
    )
  }
}

/*
 * Email Service Integration Guide:
 *
 * MailerLite (CURRENT - Free up to 1,000 subscribers):
 *    - Sign up: https://www.mailerlite.com/
 *    - Get API key: Settings → Integrations → MailerLite API → Generate new token
 *    - Create group: Subscribers → Groups → Create new group
 *    - Get Group ID from the URL or API
 *    - Add to .env.local:
 *      MAILERLITE_API_KEY=your_api_key
 *      MAILERLITE_GROUP_ID=your_group_id
 *
 * Features:
 *    - 1,000 subscribers FREE forever
 *    - 12,000 emails/month FREE
 *    - Drag & drop editor
 *    - Landing pages
 *    - Automation
 *    - No credit card required
 *
 * Other alternatives:
 *
 * 1. Mailchimp (Free up to 500 subscribers):
 *    - npm install @mailchimp/mailchimp_marketing
 *    - More limited free tier
 *
 * 2. Brevo/Sendinblue (Free 300 emails/day):
 *    - Good alternative
 *    - Unlimited contacts
 *
 * 3. SendGrid (Free 100 emails/day):
 *    - npm install @sendgrid/mail
 *    - More for transactional emails
 */
