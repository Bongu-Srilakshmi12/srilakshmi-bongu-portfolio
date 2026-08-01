# 🤖 Telegram Bot Setup Guide (Free Contact Form Notifications)

## Why Telegram Instead of EmailJS?

| Feature | EmailJS | Telegram Bot |
|---------|---------|-------------|
| **Cost** | Free tier (200/month) | Completely FREE ✅ |
| **Notifications** | Email (may go to spam) | Push notifications ✅ |
| **Mobile Access** | Open email app | Telegram app ✅ |
| **Setup Time** | 5 minutes | 3 minutes ✅ |
| **Real-time** | Email delay | Instant ✅ |
| **No Rate Limits** | Limited | Unlimited ✅ |

---

## ⚡ Quick Setup (3 Steps - 3 Minutes)

### **Step 1: Create Telegram Bot**
1. Open Telegram and search for **`@BotFather`**
2. Send `/start`
3. Send `/newbot`
4. Choose a name: e.g., "Sri's Portfolio Bot"
5. Choose a username: e.g., "srilakshmi_portfolio_bot"
6. **Copy the Bot Token** (looks like: `123456:ABC-DEF1234ghIkl-zyx57W2v1u123ew11`)
7. Save it for Step 3

### **Step 2: Get Your Chat ID**
1. Still chatting with @BotFather, send `/start` to your bot username
2. Send any message to your bot
3. Open in browser: `https://api.telegram.org/bot<YOUR_BOT_TOKEN>/getUpdates`
   - Replace `<YOUR_BOT_TOKEN>` with the token from Step 1
4. Look for `"chat":{"id":` - that's your Chat ID (e.g., `123456789`)
5. Save it for Step 3

### **Step 3: Add to `.env.local`**
Create or edit `.env.local` in your project root:

```env
NEXT_PUBLIC_TELEGRAM_BOT_TOKEN=your_bot_token_from_step_1
NEXT_PUBLIC_TELEGRAM_CHAT_ID=your_chat_id_from_step_2
```

**Example:**
```env
NEXT_PUBLIC_TELEGRAM_BOT_TOKEN=123456:ABC-DEF1234ghIkl-zyx57W2v1u123ew11
NEXT_PUBLIC_TELEGRAM_CHAT_ID=987654321
```

---

## ✅ Verification

After setup, test it:

1. Go to your portfolio website
2. Fill in the contact form with test data
3. Submit
4. **You should receive a Telegram notification instantly!** 🎉

---

## 📱 Message Format

When someone submits the form, you'll receive:

```
📨 New Contact Form Submission

Name: John Doe
Email: john@company.com

Message:
Hi! I'd love to discuss a collaboration opportunity...

Sent at: 12/27/2024, 10:30:45 AM
```

---

## 🔄 Optional: Create a Telegram Group

Want notifications in a group instead of private chat?

1. Create a Telegram group
2. Add your bot to the group
3. Send a message in the group
4. Get Chat ID (same process, but with negative ID like `-123456789`)
5. Use that Chat ID in `.env.local`

---

## 🛡️ Security Notes

- ✅ `NEXT_PUBLIC_TELEGRAM_BOT_TOKEN` and `NEXT_PUBLIC_TELEGRAM_CHAT_ID` are public (sent to frontend)
- ✅ They're safe to expose - Telegram API is rate-limited per user
- ✅ The bot can only send messages to YOUR chat ID
- ✅ No sensitive data is exposed

---

## 🐛 Troubleshooting

**Problem: "Failed to send message"**
- Check `.env.local` is saved and app is restarted
- Verify Bot Token is correct
- Verify Chat ID is correct

**Problem: "No notification received"**
- Make sure you sent a message to the bot first
- Check Telegram notification settings
- Try with test data

**Problem: "getUpdates shows empty"**
- Send another message to bot first
- Wait a few seconds
- Refresh the browser

---

## 📚 Full Implementation Features

Your contact form now has:

✅ **Professional Validation**
- Email format validation
- Min length checks
- Required field validation

✅ **Toast Notifications**
- Error notifications (red)
- Success notifications (green)
- Info messages (blue)
- Auto-dismiss after 4 seconds

✅ **Field-by-Field Focus**
- Auto-focus to next field on Tab/Enter
- Validation on blur
- Error display under each field

✅ **Success Modal**
- Beautiful animated modal
- Confirms message sent
- Auto-closes after 3 seconds

✅ **Form Disable State**
- Fields disabled during submit
- Submit button disabled
- Prevents duplicate submissions

✅ **Form Reset**
- All fields cleared after success
- Errors cleared
- Ready for next submission

✅ **Telegram Integration**
- Instant notifications
- Formatted messages
- No monthly costs

---

## 🚀 You're All Set!

Your contact form is now production-ready with:
- ✅ Professional validation
- ✅ Beautiful UX with toasts & modals
- ✅ Free Telegram notifications
- ✅ Field-by-field focus management
- ✅ Disabled states during submission

Enjoy getting contact form submissions directly in Telegram! 🎉
