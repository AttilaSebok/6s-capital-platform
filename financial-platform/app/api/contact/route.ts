import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, email, subject, message } = body

    // Validation
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      )
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email address' },
        { status: 400 }
      )
    }

    const subjectMap: { [key: string]: string } = {
      general: 'General Inquiry',
      feedback: 'Feedback',
      partnership: 'Partnership Opportunity',
      technical: 'Technical Issue',
      content: 'Content Suggestion',
      other: 'Other',
    }

    const subjectLabel = subjectMap[subject] || subject

    // 1. Send notification email to office@money365.market
    const notificationEmail = await resend.emails.send({
      from: 'money365.market <noreply@money365.market>',
      to: 'office@money365.market',
      subject: `New Contact Form Submission: ${subjectLabel}`,
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="utf-8">
          <style>
            body { font-family: 'Arial', sans-serif; line-height: 1.6; color: #333; background-color: #f4f4f4; margin: 0; padding: 0; }
            .container { max-width: 600px; margin: 20px auto; background: #ffffff; border-left: 4px solid #8B6914; box-shadow: 0 2px 4px rgba(0,0,0,0.1); }
            .header { background: linear-gradient(135deg, #1e293b 0%, #292524 100%); color: #8B6914; padding: 30px; text-align: center; }
            .header h1 { margin: 0; font-size: 24px; font-weight: bold; }
            .content { padding: 30px; }
            .field { margin-bottom: 20px; }
            .field-label { font-weight: bold; color: #8B6914; text-transform: uppercase; font-size: 11px; letter-spacing: 1px; margin-bottom: 5px; }
            .field-value { color: #333; font-size: 14px; padding: 10px; background: #f9fafb; border-left: 3px solid #8B6914; }
            .message-box { background: #f9fafb; border-left: 3px solid #8B6914; padding: 15px; margin-top: 10px; white-space: pre-wrap; word-wrap: break-word; }
            .footer { background: #1e293b; color: #a8a29e; text-align: center; padding: 20px; font-size: 12px; }
            .footer a { color: #8B6914; text-decoration: none; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>📧 New Contact Form Submission</h1>
            </div>
            <div class="content">
              <div class="field">
                <div class="field-label">From</div>
                <div class="field-value">${name}</div>
              </div>
              <div class="field">
                <div class="field-label">Email</div>
                <div class="field-value"><a href="mailto:${email}" style="color: #8B6914;">${email}</a></div>
              </div>
              <div class="field">
                <div class="field-label">Subject</div>
                <div class="field-value">${subjectLabel}</div>
              </div>
              <div class="field">
                <div class="field-label">Message</div>
                <div class="message-box">${message}</div>
              </div>
            </div>
            <div class="footer">
              <p>This email was sent from the contact form at <a href="https://money365.market/contact">money365.market</a></p>
              <p>© ${new Date().getFullYear()} money365.market - Advanced Investment Analysis</p>
            </div>
          </div>
        </body>
        </html>
      `,
    })

    // 2. Send auto-reply to the user
    const autoReplyEmail = await resend.emails.send({
      from: 'money365.market <office@money365.market>',
      to: email,
      subject: 'We received your message - money365.market',
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="utf-8">
          <style>
            body { font-family: 'Arial', sans-serif; line-height: 1.6; color: #333; background-color: #f4f4f4; margin: 0; padding: 0; }
            .container { max-width: 600px; margin: 10px auto; background: #ffffff; border-left: 4px solid #8B6914; box-shadow: 0 2px 4px rgba(0,0,0,0.1); }
            .header { background: linear-gradient(135deg, #1e293b 0%, #292524 100%); color: #8B6914; padding: 20px; text-align: center; }
            .header h1 { margin: 0; font-size: 22px; font-weight: bold; font-family: 'Crimson Pro', serif; }
            .content { padding: 20px; }
            .greeting { font-size: 16px; color: #8B6914; font-weight: bold; margin-bottom: 15px; }
            .message { font-size: 14px; line-height: 1.6; color: #333; margin-bottom: 12px; }
            .info-box { background: #f9fafb; border-left: 4px solid #8B6914; padding: 15px; margin: 15px 0; }
            .info-box h3 { margin: 0 0 8px 0; color: #8B6914; font-size: 13px; text-transform: uppercase; letter-spacing: 1px; }
            .info-box p { margin: 3px 0; font-size: 13px; }
            .cta { text-align: center; margin: 20px 0; }
            .cta a { display: inline-block; background: #8B6914; color: #ffffff; padding: 10px 25px; text-decoration: none; font-weight: bold; text-transform: uppercase; letter-spacing: 1px; font-size: 11px; transition: background 0.3s; }
            .cta a:hover { background: #6d5310; }
            .footer { background: #1e293b; color: #a8a29e; text-align: center; padding: 15px; font-size: 11px; }
            .footer a { color: #8B6914; text-decoration: underline; }
            .footer a:hover { color: #6d5310; }
            .social-links { margin: 15px 0; }
            .social-links a { color: #8B6914; margin: 0 10px; text-decoration: underline; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>money365.market</h1>
            </div>
            <div class="content">
              <div class="greeting">Hello ${name},</div>

              <p class="message">
                Thank you for contacting <strong>money365.market</strong>. We have successfully received your message regarding <strong>${subjectLabel}</strong>.
              </p>

              <p class="message">
                Our team will review your inquiry and respond within <strong>24-48 hours</strong> during business days (Monday - Friday).
              </p>

              <div class="info-box">
                <h3>Your Message Summary</h3>
                <p><strong>Subject:</strong> ${subjectLabel}</p>
              </div>

              <div class="cta">
                <a href="https://www.money365.market">Visit Website</a>
              </div>
            </div>
            <div class="footer">
              <p><strong>money365.market</strong> | Professional Investment Analysis</p>
              <p style="margin: 10px 0;">
                <a href="https://www.money365.market" style="color: #8B6914; text-decoration: underline;">Website</a> |
                <a href="mailto:office@money365.market" style="color: #8B6914; text-decoration: underline;">Email Us</a> |
                <a href="https://x.com/money365market" style="color: #8B6914; text-decoration: underline;">X</a> |
                <a href="https://linkedin.com/company/money365market" style="color: #8B6914; text-decoration: underline;">LinkedIn</a>
              </p>
              <p style="color: #78716c; font-size: 11px;">© ${new Date().getFullYear()} money365.market. All rights reserved.</p>
            </div>
          </div>
        </body>
        </html>
      `,
    })

    return NextResponse.json({
      success: true,
      message: 'Email sent successfully',
      notificationId: notificationEmail.data?.id,
      autoReplyId: autoReplyEmail.data?.id,
    })
  } catch (error) {
    console.error('Contact form error:', error)
    return NextResponse.json(
      { error: 'Failed to send email. Please try again later.' },
      { status: 500 }
    )
  }
}
