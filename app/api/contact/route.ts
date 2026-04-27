import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const { name, phone, message } = await request.json()

    // Validate input
    if (!name || !phone || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    // Format message for WhatsApp
    const whatsappMessage = encodeURIComponent(
      `Contact Form Submission\n\nName: ${name}\nPhone: ${phone}\n\nMessage:\n${message}`
    )

    // Return WhatsApp URL
    return NextResponse.json({
      success: true,
      whatsappUrl: `https://wa.me/234?text=${whatsappMessage}`,
      message: 'Redirecting to WhatsApp...'
    })
  } catch (error) {
    console.error('Contact form error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}
