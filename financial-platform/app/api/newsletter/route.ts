import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  try {
    const { email } = await request.json()

    if (!email || !email.includes('@')) {
      return NextResponse.json(
        { error: 'Invalid email address' },
        { status: 400 }
      )
    }

    // TODO: Integrate with your email service provider

    /*
     * Option 1: Mailchimp
     *
     * const mailchimp = require('@mailchimp/mailchimp_marketing')
     * mailchimp.setConfig({
     *   apiKey: process.env.MAILCHIMP_API_KEY,
     *   server: process.env.MAILCHIMP_SERVER_PREFIX,
     * })
     *
     * const response = await mailchimp.lists.addListMember(
     *   process.env.MAILCHIMP_LIST_ID,
     *   {
     *     email_address: email,
     *     status: 'subscribed',
     *   }
     * )
     */

    /*
     * Option 2: ConvertKit
     *
     * const response = await fetch(
     *   `https://api.convertkit.com/v3/forms/${process.env.CONVERTKIT_FORM_ID}/subscribe`,
     *   {
     *     method: 'POST',
     *     headers: { 'Content-Type': 'application/json' },
     *     body: JSON.stringify({
     *       api_key: process.env.CONVERTKIT_API_KEY,
     *       email: email,
     *     }),
     *   }
     * )
     */

    /*
     * Option 3: SendGrid (for custom emails)
     *
     * const sgMail = require('@sendgrid/mail')
     * sgMail.setApiKey(process.env.SENDGRID_API_KEY)
     *
     * await sgMail.send({
     *   to: email,
     *   from: 'newsletter@money365.market',
     *   subject: 'Welcome to money365.market Newsletter',
     *   html: '<p>Thank you for subscribing!</p>',
     * })
     */

    // For now, just log it (in production, save to database or email service)
    console.log(`New subscriber: ${email}`)

    return NextResponse.json({
      success: true,
      message: 'Successfully subscribed!',
    })
  } catch (error) {
    console.error('Newsletter subscription error:', error)
    return NextResponse.json(
      { error: 'Failed to subscribe' },
      { status: 500 }
    )
  }
}

/*
 * Email Service Integration Guide:
 *
 * 1. Mailchimp (Free up to 500 subscribers):
 *    - npm install @mailchimp/mailchimp_marketing
 *    - Get API key: https://mailchimp.com/help/about-api-keys/
 *    - Add to .env.local:
 *      MAILCHIMP_API_KEY=your_key
 *      MAILCHIMP_SERVER_PREFIX=us1 (or your server)
 *      MAILCHIMP_LIST_ID=your_list_id
 *
 * 2. ConvertKit (Free up to 1,000 subscribers):
 *    - Get API key: https://app.convertkit.com/account/edit
 *    - Add to .env.local:
 *      CONVERTKIT_API_KEY=your_key
 *      CONVERTKIT_FORM_ID=your_form_id
 *
 * 3. SendGrid (Free 100 emails/day):
 *    - npm install @sendgrid/mail
 *    - Get API key: https://app.sendgrid.com/settings/api_keys
 *    - Add to .env.local:
 *      SENDGRID_API_KEY=your_key
 */
