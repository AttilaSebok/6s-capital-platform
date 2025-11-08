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

    // Check if ConvertKit credentials are configured
    if (!process.env.CONVERTKIT_API_SECRET || !process.env.CONVERTKIT_FORM_ID) {
      console.error('ConvertKit credentials not configured')
      return NextResponse.json(
        { error: 'Newsletter service not configured' },
        { status: 500 }
      )
    }

    // Subscribe to ConvertKit
    const convertkitResponse = await fetch(
      `https://api.convertkit.com/v3/forms/${process.env.CONVERTKIT_FORM_ID}/subscribe`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          api_secret: process.env.CONVERTKIT_API_SECRET,
          email: email,
          first_name: name || '',
          tags: ['money365.market'], // Optional: tag for segmentation
        }),
      }
    )

    const convertkitData = await convertkitResponse.json()

    if (!convertkitResponse.ok) {
      console.error('ConvertKit API error:', convertkitData)

      // Check for specific error messages
      if (convertkitData.message && convertkitData.message.includes('already subscribed')) {
        return NextResponse.json(
          { error: 'This email is already subscribed to our newsletter' },
          { status: 409 }
        )
      }

      return NextResponse.json(
        { error: 'Failed to subscribe to newsletter' },
        { status: 500 }
      )
    }

    // Log successful subscription
    console.log(`New subscriber: ${email}`)

    return NextResponse.json({
      success: true,
      message: 'Successfully subscribed! Check your email for confirmation.',
      subscriber: {
        email: convertkitData.subscription.subscriber.email,
        id: convertkitData.subscription.subscriber.id,
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
