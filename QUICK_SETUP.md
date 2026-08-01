# ⚡ Quick Setup Checklist

**5-Minute Fast Track to Live Deployment**

---

## 🔧 Step 1: Local Setup (2 minutes)

```bash
# 1. Copy template
cp .env.example .env

# 2. Edit .env file with your actual values
# NEXT_PUBLIC_TELEGRAM_BOT_TOKEN=YOUR_TOKEN_HERE
# NEXT_PUBLIC_TELEGRAM_CHAT_ID=YOUR_CHAT_ID_HERE
```

---

## 🤖 Step 2: Get Telegram Credentials (1 minute)

### Get Bot Token:
1. Open Telegram → Search `@BotFather`
2. Send: `/newbot`
3. Name your bot (e.g., "Sri Lakshmi Portfolio Bot")
4. Choose username (e.g., `srilakshmi_portfolio_bot`)
5. **Copy the token provided** ← This is `NEXT_PUBLIC_TELEGRAM_BOT_TOKEN`

### Get Chat ID:
1. Search for your bot in Telegram
2. Send any message to it
3. Visit: `https://api.telegram.org/bot{YOUR_TOKEN}/getUpdates`
   - Replace `{YOUR_TOKEN}` with your actual token
4. Find `"id":` number in the response ← This is `NEXT_PUBLIC_TELEGRAM_CHAT_ID`

---

## 🚀 Step 3: Vercel Deployment (2 minutes)

### 3.1 Create Account & Import
1. Go to https://vercel.com
2. Sign up with GitHub
3. Click "New Project"
4. Select your portfolio repository
5. Click "Import"

### 3.2 Add Environment Variables

In Vercel dashboard, add these 3 variables:

```
Variable 1:
Name: NEXT_PUBLIC_SITE_URL
Value: https://srilakshmi-portfolio.vercel.app

Variable 2:
Name: NEXT_PUBLIC_TELEGRAM_BOT_TOKEN
Value: 8629820047:AAGYdlfezCIYdlfezCIYdlfezCIYdlfezCIY

Variable 3:
Name: NEXT_PUBLIC_TELEGRAM_CHAT_ID
Value: 1763188831
```

### 3.3 Deploy
- Click "Deploy"
- Wait for build (1-2 min)
- Done! ✅

---

## ✅ Verification

Test your live site:

1. **Open:** `https://srilakshmi-portfolio.vercel.app`
2. **Go to:** Contact section
3. **Fill form:** Name, Email, Message
4. **Submit**
5. **Check Telegram:** Message should arrive ✅

---

## 🔄 After Each GitHub Push

```bash
git add .
git commit -m "Your changes"
git push origin main
```

**Vercel automatically deploys!** (No manual steps)

---

## 🆘 Quick Troubleshooting

| Issue | Solution |
|-------|----------|
| Site shows error | Check env variables in Vercel |
| Form not sending | Verify Telegram token & chat ID |
| Old code showing | Hard refresh: `Ctrl+Shift+R` |
| Variables not working | Re-add them carefully (case-sensitive) |
| Build fails | Check Vercel deployment logs |

---

## 🔐 Remember

```
✅ DO: Keep .env LOCAL only
❌ DON'T: Commit .env to GitHub
✅ DO: Use .env.example as template
❌ DON'T: Share your bot token
```

---

## 📞 Full Guide

For detailed step-by-step: See `DEPLOYMENT_GUIDE.md`

---

**You're live! 🎉**
