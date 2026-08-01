# 🚀 Complete Deployment & Environment Setup Guide

**Sri Lakshmi Portfolio - Next.js Deployment Guide**

---

## 📋 Table of Contents

1. [Part 1: Local Environment Setup](#part-1-local-environment-setup)
2. [Part 2: Getting Telegram Credentials](#part-2-getting-telegram-credentials)
3. [Part 3: Vercel Deployment](#part-3-vercel-deployment)
4. [Part 4: Configuration & Testing](#part-4-configuration--testing)
5. [Part 5: Troubleshooting](#part-5-troubleshooting)

---

## Part 1: Local Environment Setup

### What is `.env`?
- Stores **secret credentials** (API keys, bot tokens, etc.)
- **Never committed to GitHub** (security risk)
- Only on your local machine
- Each developer has their own `.env`

### Step 1.1: Copy Template File

```bash
# Navigate to project directory
cd your-project-folder

# Copy the template
cp .env.example .env
```

**On Windows (if cp doesn't work):**
```bash
copy .env.example .env
```

### Step 1.2: View Your New `.env` File

```bash
# Open the .env file in your editor
cat .env
```

**Expected output:**
```
# Site URL for metadata and SEO
NEXT_PUBLIC_SITE_URL=https://yourdomain.com

# Telegram Bot Configuration (for contact form)
# Get these from: https://t.me/BotFather
NEXT_PUBLIC_TELEGRAM_BOT_TOKEN=your-telegram-bot-token-here
NEXT_PUBLIC_TELEGRAM_CHAT_ID=your-telegram-chat-id-here
```

### Step 1.3: Verify `.env` is in `.gitignore`

```bash
# Check if .env is ignored
grep "^\.env$" .gitignore
```

**Expected output:**
```
.env
```

✅ If you see `.env`, it's properly ignored!

---

## Part 2: Getting Telegram Credentials

### Why Telegram?
- ✅ Free messaging service
- ✅ Real-time notifications
- ✅ No database needed
- ✅ Contact form messages sent to your phone

### Step 2.1: Create Telegram Bot

1. **Open Telegram App** (or web.telegram.org)
   - Download from: https://telegram.org/

2. **Search for "BotFather"**
   - Username: `@BotFather`
   - This is the official Telegram bot manager

3. **Start BotFather**
   - Click "Start" button
   - You'll see a menu

### Step 2.2: Create New Bot

**In BotFather chat, send:**
```
/newbot
```

**BotFather asks:** "Alright, a new bot. How are we going to call it? Please choose a name for your bot."

**You respond:** (any name, e.g., "Sri Lakshmi Portfolio Bot")

**BotFather asks:** "Good. Now let's choose a username for your bot. It must end in `bot`. Example: TetrisBot or tetris_bot."

**You respond:** (choose a unique username, e.g., `srilakshmi_portfolio_bot`)

### Step 2.3: Get Your Bot Token

**BotFather responds with:**
```
Done! Congratulations on your new bot. You will find it at 
t.me/srilakshmi_portfolio_bot. You can now add a description, 
about section and profile picture for your bot, see /help for a 
list of commands.

Use this token to access the HTTP API:
⚠️ 8629820047:AAGYdlfezCIYdlfezCIYdlfezCIYdlfezCIY ⚠️

Keep your token secure and store it safely!
```

**Copy this token!** (It's your `NEXT_PUBLIC_TELEGRAM_BOT_TOKEN`)

---

### Step 2.4: Get Your Chat ID

**Now you need to find YOUR chat ID** (where messages will be sent)

#### Method 1: Using Bot (Easiest)

1. **Search for your bot**
   - In Telegram, search: `srilakshmi_portfolio_bot`

2. **Send any message to your bot**
   - Just type: "hello"

3. **Get Chat ID using URL**
   - Visit this URL in browser (replace TOKEN):
   ```
   https://api.telegram.org/bot8629820047:AAGYdlfezCIYdlfezCIYdlfezCIYdlfezCIY/getUpdates
   ```

4. **You'll see JSON response:**
   ```json
   {
     "ok": true,
     "result": [
       {
         "update_id": 123456789,
         "message": {
           "message_id": 1,
           "date": 1234567890,
           "chat": {
             "id": 1763188831,
             "first_name": "Sri",
             "type": "private"
           },
           "text": "hello"
         }
       }
     ]
   }
   ```

5. **Find and copy the `"id"` number**
   - Look for: `"chat": { "id": 1763188831 }`
   - Copy: `1763188831` (your `NEXT_PUBLIC_TELEGRAM_CHAT_ID`)

#### Method 2: Using GetIDs Bot

If Method 1 is confusing:

1. Search for `@getidsbot` in Telegram
2. Click Start
3. Bot automatically sends you your chat ID
4. Copy the number

---

### Step 2.5: Update Your Local `.env` File

**Open `.env` and replace with your real values:**

```env
# Site URL for metadata and SEO
NEXT_PUBLIC_SITE_URL=https://srilakshmi-portfolio.vercel.app

# Telegram Bot Configuration (for contact form)
# Get these from: https://t.me/BotFather
NEXT_PUBLIC_TELEGRAM_BOT_TOKEN=8629820047:AAGYdlfezCIYdlfezCIYdlfezCIYdlfezCIY
NEXT_PUBLIC_TELEGRAM_CHAT_ID=1763188831
```

**⚠️ NEVER share these values!**

### Step 2.6: Test Locally

1. **Start dev server:**
   ```bash
   npm run dev
   ```

2. **Open browser:**
   ```
   http://localhost:3001
   ```

3. **Go to Contact section**

4. **Fill out the form:**
   - Name: Test
   - Email: test@example.com
   - Message: Testing contact form

5. **Click "Submit"**

6. **Check Telegram:**
   - You should receive the message in Telegram! ✅

---

## Part 3: Vercel Deployment

### What is Vercel?
- **Hosting platform** for Next.js apps
- **Free tier** includes everything you need
- **Automatic deployments** from GitHub
- **Environment variables** management

### Step 3.1: Create Vercel Account

1. **Go to:** https://vercel.com

2. **Click "Sign Up"**

3. **Choose "Continue with GitHub"**
   ```
   This connects your GitHub account
   ```

4. **Authorize Vercel**
   - GitHub asks for permission
   - Click "Authorize vercel"

5. **You're now on Vercel! ✅**

### Step 3.2: Import Your GitHub Repository

1. **On Vercel dashboard, click "Add New" → "Project"**
   ```
   Or click "New Project" button
   ```

2. **Select "Import Git Repository"**

3. **Search for your repo**
   - Type: `final-portfolio`
   - Or `portfolio-design`

4. **Click to select it**

5. **Click "Import"**

### Step 3.3: Configure Project Settings

Vercel shows import dialog:

**Framework:** Next.js ✅ (auto-detected)

**Root Directory:** ./  ✅ (correct)

**Environment Variables:** (We'll add next step)

**Click "Continue"**

### Step 3.4: Add Environment Variables

#### In Vercel Dashboard:

1. **See "Environment Variables" section**

2. **Click "Add" or "New Variable"**

3. **First Variable - NEXT_PUBLIC_SITE_URL:**
   ```
   Name: NEXT_PUBLIC_SITE_URL
   Value: https://srilakshmi-portfolio.vercel.app
   
   Select: Production, Preview, Development
   Click: Add
   ```

4. **Second Variable - Telegram Token:**
   ```
   Name: NEXT_PUBLIC_TELEGRAM_BOT_TOKEN
   Value: 8629820047:AAGYdlfezCIYdlfezCIYdlfezCIYdlfezCIY
   
   Select: Production, Preview, Development
   Click: Add
   ```

5. **Third Variable - Telegram Chat ID:**
   ```
   Name: NEXT_PUBLIC_TELEGRAM_CHAT_ID
   Value: 1763188831
   
   Select: Production, Preview, Development
   Click: Add
   ```

**Verify all 3 are added:**
```
✅ NEXT_PUBLIC_SITE_URL
✅ NEXT_PUBLIC_TELEGRAM_BOT_TOKEN
✅ NEXT_PUBLIC_TELEGRAM_CHAT_ID
```

### Step 3.5: Deploy

1. **Click "Deploy"**
   ```
   Vercel starts building...
   (Takes 1-2 minutes)
   ```

2. **Wait for completion**
   ```
   You'll see:
   ✅ Built
   ✅ Ready
   ```

3. **Your site is LIVE! 🎉**
   ```
   Your Vercel domain:
   https://srilakshmi-portfolio.vercel.app
   ```

---

## Part 4: Configuration & Testing

### Step 4.1: Find Your Vercel URL

1. **On Vercel dashboard, click your project**

2. **Look for "Domains" section**

3. **You'll see:**
   ```
   https://srilakshmi-portfolio.vercel.app
   ```

4. **Copy this URL**

### Step 4.2: Update Site URL Environment Variable

1. **Go back to Settings → Environment Variables**

2. **Edit `NEXT_PUBLIC_SITE_URL`:**
   ```
   Old: https://yourdomain.com
   New: https://srilakshmi-portfolio.vercel.app
   ```

3. **Click Save**

4. **Vercel redeploys automatically** ✅

### Step 4.3: Test Your Deployed Site

1. **Open your URL:**
   ```
   https://srilakshmi-portfolio.vercel.app
   ```

2. **Check if site loads** ✅

3. **Scroll to Contact Section**

4. **Fill out contact form:**
   - Name: Your Name
   - Email: your@email.com
   - Message: Testing from Vercel deployment

5. **Click Submit**

6. **Check Telegram:**
   - Message should appear in your Telegram chat! ✅

### Step 4.4: Connect Custom Domain (Optional)

If you have a domain (e.g., `srilakshmi.com`):

1. **On Vercel, go to Settings → Domains**

2. **Click "Add Domain"**

3. **Enter your domain name**

4. **Follow Vercel's DNS instructions**
   - Update DNS records at your domain provider
   - Takes 5-30 minutes to activate

5. **Your site is now at:**
   ```
   https://srilakshmi.com
   ```

---

## Part 5: Troubleshooting

### Problem: Site Shows Error 500

**Solution:**
1. Check Environment Variables in Vercel
2. Verify all 3 variables are added
3. Go to Deployments → Re-deploy latest

### Problem: Contact Form Not Sending

**Checklist:**
```
✅ NEXT_PUBLIC_TELEGRAM_BOT_TOKEN is correct
✅ NEXT_PUBLIC_TELEGRAM_CHAT_ID is correct
✅ Message sent from /contact form
✅ Check browser console for errors (F12)
```

**Debug steps:**
1. Open browser DevTools (F12)
2. Go to Console tab
3. Submit form
4. Look for error messages
5. Send errors to support

### Problem: Old Code Still Showing

**Solution:**
```
Hard refresh browser:
Ctrl + Shift + R (Windows)
or
Cmd + Shift + R (Mac)

Or clear browser cache
```

### Problem: Environment Variables Not Working

**Solution:**
1. Delete all variables in Vercel
2. Add them again carefully
3. Check for typos (case-sensitive!)
4. Trigger redeployment:
   - Go to Deployments
   - Click "..." next to latest
   - Click "Redeploy"

### Problem: Telegram Not Receiving Messages

**Debug:**
1. **Verify bot token is correct:**
   ```
   Go to: https://api.telegram.org/bot{TOKEN}/getMe
   Replace {TOKEN} with your actual token
   Should show bot info if valid
   ```

2. **Verify chat ID is correct:**
   - Send message to your bot
   - Check it arrives in your Telegram app

3. **Check form submission:**
   - Open DevTools (F12)
   - Network tab
   - Submit form
   - Look for `/api/telegram` request
   - Check response (should be success)

---

## 📋 Quick Reference Checklist

### Before First Deploy
- [ ] Created `.env` file from `.env.example`
- [ ] Got Telegram bot token from @BotFather
- [ ] Got chat ID from @getidsbot
- [ ] Updated local `.env` with real values
- [ ] Tested contact form locally (npm run dev)
- [ ] Message received in Telegram ✅

### Vercel Setup
- [ ] Created Vercel account with GitHub
- [ ] Imported GitHub repository
- [ ] Added NEXT_PUBLIC_SITE_URL variable
- [ ] Added NEXT_PUBLIC_TELEGRAM_BOT_TOKEN variable
- [ ] Added NEXT_PUBLIC_TELEGRAM_CHAT_ID variable
- [ ] Clicked Deploy
- [ ] Waited for build completion ✅

### After Deployment
- [ ] Site loads at https://your-site.vercel.app
- [ ] Contact form works
- [ ] Telegram messages received
- [ ] All sections display correctly
- [ ] Images load properly
- [ ] Navigation works
- [ ] Mobile view responsive ✅

---

## 🔐 Security Reminders

### DO ✅
```
✅ Keep .env file LOCAL only
✅ Store variables in Vercel dashboard
✅ Use .env.example as template
✅ Rotate bot token if compromised
✅ Use different tokens for dev/prod
```

### DON'T ❌
```
❌ Commit .env to GitHub
❌ Share bot token in messages
❌ Post screenshots with tokens
❌ Use same token for multiple projects
❌ Store credentials in code comments
```

---

## 📞 Getting Help

**If something doesn't work:**

1. Check this guide's Troubleshooting section
2. Review error messages in browser (F12)
3. Check Vercel deployment logs:
   - Vercel Dashboard → Deployments → Click deployment → Logs
4. Verify environment variables one more time
5. Try clearing browser cache and redeploying

---

## 🎉 You're All Set!

Your site is now:
- ✅ Live on Vercel
- ✅ Receiving contact form submissions via Telegram
- ✅ Auto-deploying on GitHub pushes
- ✅ Protected with hidden environment variables

**Any updates? Just push to GitHub:**
```bash
git add .
git commit -m "Portfolio updates"
git push origin main
```

**Vercel automatically deploys! 🚀**

---

## Additional Resources

- **Vercel Docs:** https://vercel.com/docs
- **Next.js Docs:** https://nextjs.org/docs
- **Telegram Bot API:** https://core.telegram.org/bots/api
- **Environment Variables Guide:** https://vercel.com/docs/projects/environment-variables

---

**Last Updated:** 2026-07-29  
**Portfolio:** Sri Lakshmi Frontend Developer  
**Deployment Platform:** Vercel (Free Tier)
