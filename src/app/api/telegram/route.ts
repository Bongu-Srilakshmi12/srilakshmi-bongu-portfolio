import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const { name, email, message } = await request.json();

    // Validate input
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    const botToken = process.env.NEXT_PUBLIC_TELEGRAM_BOT_TOKEN;
    const chatId = process.env.NEXT_PUBLIC_TELEGRAM_CHAT_ID;

    if (!botToken || !chatId) {
      console.error('Telegram credentials not configured');
      return NextResponse.json(
        { error: 'Telegram not configured' },
        { status: 500 }
      );
    }

    // Format message for Telegram
    const telegramMessage = `
<b>Contact Form</b>

<b>Name:</b> ${name}
<b>Email:</b> ${email}
<b>Message:</b> ${message}

<i>Sent at: ${new Date().toLocaleString()}</i>
    `.trim();

    // Send to Telegram Bot API
    const response = await fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        chat_id: chatId,
        text: telegramMessage,
        parse_mode: 'HTML',
      }),
    });

    if (!response.ok) {
      const error = await response.text();
      console.error('Telegram API error:', error);
      return NextResponse.json(
        { error: 'Failed to send message via Telegram' },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true, message: 'Message sent to Telegram' });
  } catch (error) {
    console.error('Error sending Telegram message:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}