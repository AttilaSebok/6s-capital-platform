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
          status: 'active', // Skip MailerLite's double opt-in, handle via Resend
          resubscribe: false, // Don't resubscribe if already exists
        }),
      }
    )

    const mailerliteData = await mailerliteResponse.json()

    if (!mailerliteResponse.ok) {
      console.error('MailerLite API error:', mailerliteData)

      // Check for specific error messages
      if (mailerliteData.message && mailerliteData.message.includes('already exists')) {
        // If already exists, still send welcome email
        console.log(`Existing subscriber: ${email}`)
      } else {
        return NextResponse.json(
          { error: 'Failed to subscribe to newsletter' },
          { status: 500 }
        )
      }
    }

    // Send confirmation/welcome email via Resend
    try {
      const confirmationUrl = `https://money365.market/resources/stock-analysis-checklist`

      const emailResponse = await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${process.env.RESEND_API_KEY}`,
        },
        body: JSON.stringify({
          from: 'money365.market <office@money365.market>',
          to: email,
          subject: '✓ Welcome to money365.market - Your Stock Analysis Checklist',
          html: `
            <!DOCTYPE html>
            <html>
            <head>
              <style>
                body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
                .container { max-width: 600px; margin: 0 auto; padding: 20px; }
                .header { background: linear-gradient(135deg, #1e293b 0%, #44403c 100%); color: white; padding: 30px; text-align: center; }
                .content { background: #f5f5f4; padding: 30px; }
                .button { display: inline-block; background: #92400e; color: white; padding: 15px 30px; text-decoration: none; font-weight: bold; margin: 20px 0; }
                .footer { text-align: center; padding: 20px; color: #666; font-size: 12px; }
              </style>
            </head>
            <body>
              <div class="container">
                <div class="header">
                  <h1>✓ Subscription Confirmed!</h1>
                </div>
                <div class="content">
                  <h2>Welcome aboard! 🚀</h2>
                  <p>Thank you for subscribing to the money365.market newsletter!</p>

                  <p><strong>Here's what you'll get:</strong></p>
                  <ul>
                    <li>📊 Weekly market insights and analysis</li>
                    <li>🎯 Professional investment strategies</li>
                    <li>📈 Technical analysis tips</li>
                    <li>💰 Financial education resources</li>
                  </ul>

                  <p><strong>Your FREE Stock Analysis Checklist is ready!</strong></p>
                  <p>Click the button below to download your comprehensive 20-point framework:</p>

                  <center>
                    <a href="${confirmationUrl}" class="button">
                      Download Free Checklist →
                    </a>
                  </center>

                  <p>This professional checklist will help you analyze any stock in 30 minutes or less, just like institutional investors do.</p>

                  <p>Best regards,<br><strong>The money365.market Team</strong></p>
                </div>
                <div class="footer">
                  <p>You're receiving this because you subscribed at money365.market</p>
                  <p>© 2025 money365.market. All rights reserved.</p>
                </div>
              </div>
            </body>
            </html>
          `,
        }),
      })

      if (!emailResponse.ok) {
        console.error('Resend email failed:', await emailResponse.text())
      } else {
        console.log(`Welcome email sent to: ${email}`)
      }
    } catch (emailError) {
      console.error('Error sending welcome email:', emailError)
      // Don't fail the subscription if email fails
    }

    // Log successful subscription
    console.log(`New subscriber: ${email}`)

    return NextResponse.json({
      success: true,
      message: 'Welcome aboard! Check your email for your free Stock Analysis Checklist.',
      subscriber: {
        email: mailerliteData.data?.email || email,
        id: mailerliteData.data?.id || 'existing',
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
