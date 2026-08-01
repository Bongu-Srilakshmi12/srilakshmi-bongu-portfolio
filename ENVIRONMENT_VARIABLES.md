# 🔑 Environment Variables Explained

**Complete Reference Guide**

---

## What Are Environment Variables?

**Environment variables** are configuration values stored separately from your code.

### Why We Use Them

```
❌ BAD - Storing in code:
const botToken = "8629820047:AAGYdlfezCIYdlfezCIYdlfezCIYdlfezCIY";
// Visible to everyone! Security risk!

✅ GOOD - Using env variables:
const botToken = process.env.NEXT_PUBLIC_TELEGRAM_BOT_TOKEN;
// Secret is kept in .env, not visible in code
```

---

## Our Project's Environment Variables

### 1. NEXT_PUBLIC_SITE_URL

**Purpose:** Website URL for SEO and metadata

**Where it's used:**
```
📍 src/app/layout.tsx
   - Line 28: metadataBase for SEO
   - Tells search engines your site URL
```

**Example value:**
```
Development: http://localhost:3001
Staging: https://staging.vercel.app
Production: https://srilakshmi-portfolio.vercel.app
```

**Why NEXT_PUBLIC_?**
```
Prefix "NEXT_PUBLIC_" means it's visible in browser
(Not a secret, safe to share)
```

---

### 2. NEXT_PUBLIC_TELEGRAM_BOT_TOKEN

**Purpose:** Authentication token for Telegram Bot API

**Where it's used:**
```
📍 src/app/api/telegram/route.ts
   - Line 15: Authenticate with Telegram
   - Sends your contact form messages
```

**Example value:**
```
8629820047:AAGYdlfezCIYdlfezCIYdlfezCIYdlfezCIY
```

**Structure breakdown:**
```
8629820047                    ← Bot ID
:                             ← Separator
AAGYdlfezCIYdlfezCIYdlfezCIY ← API Token (secret part)
```

**⚠️ Security:**
```
- This is a SECRET!
- Anyone with this can control your bot
- NEVER share or commit to GitHub
- If leaked, regenerate at @BotFather
```

---

### 3. NEXT_PUBLIC_TELEGRAM_CHAT_ID

**Purpose:** Your personal Telegram chat ID (where messages go)

**Where it's used:**
```
📍 src/app/api/telegram/route.ts
   - Line 16: Recipient of contact form messages
   - Contact form → Telegram (your phone)
```

**Example value:**
```
1763188831
```

**What it is:**
```
Unique ID for your Telegram account
Like a postal address for your messages
```

**⚠️ Security:**
```
- Sharing this allows others to message you
- Keep it private but less critical than bot token
- Can't do damage if leaked (only messages you)
```

---

## File Structure Explained

### `.env` (Never commit to GitHub)

```env
# Your LOCAL secrets
# Only on your computer
# Git ignores this file

NEXT_PUBLIC_SITE_URL=https://srilakshmi-portfolio.vercel.app
NEXT_PUBLIC_TELEGRAM_BOT_TOKEN=8629820047:AAGYdlfezCIYdlfezCIYdlfezCIYdlfezCIY
NEXT_PUBLIC_TELEGRAM_CHAT_ID=1763188831
```

### `.env.example` (Safe to commit to GitHub)

```env
# Template only - no real secrets
# Helps collaborators know what to configure

NEXT_PUBLIC_SITE_URL=https://yourdomain.com
NEXT_PUBLIC_TELEGRAM_BOT_TOKEN=your-telegram-bot-token-here
NEXT_PUBLIC_TELEGRAM_CHAT_ID=your-telegram-chat-id-here
```

### `.gitignore` (Tells Git what to ignore)

```
.env                          ← Git ignores this ✅
.env.local
.env.*.local
```

---

## How Env Variables Work

### Local Development Flow

```
1. Developer has .env file (local only)
   ├─ NEXT_PUBLIC_TELEGRAM_BOT_TOKEN=real_token
   └─ NEXT_PUBLIC_TELEGRAM_CHAT_ID=real_id

2. npm run dev
   ├─ Reads .env
   ├─ Loads variables into process.env
   └─ Your app has access to secrets

3. Contact form submitted
   ├─ App reads: process.env.NEXT_PUBLIC_TELEGRAM_BOT_TOKEN
   ├─ Uses token to authenticate with Telegram
   ├─ Sends message successfully
   └─ You receive in Telegram ✅

4. Git push
   ├─ .gitignore prevents .env from committing
   ├─ GitHub only gets .env.example
   └─ Your secrets stay safe ✅
```

### Production (Vercel) Flow

```
1. Push to GitHub
   └─ No .env included ✅

2. Vercel receives code
   ├─ Reads env variables from Vercel Dashboard
   ├─ Injects them during build
   ├─ App has access to secrets
   └─ No .env file needed

3. Contact form submitted (production)
   ├─ App reads: process.env.NEXT_PUBLIC_TELEGRAM_BOT_TOKEN
   ├─ Uses token to send to Telegram
   └─ You receive message ✅

4. Secrets NEVER in code
   ├─ Only in Vercel Dashboard (encrypted)
   ├─ Only on your computer (.env file)
   └─ Never on GitHub ✅
```

---

## Variable Types Explained

### NEXT_PUBLIC_* Variables

**What:** Client-side variables (visible in browser)

**Usage:** 
```javascript
// Frontend can access these
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL;
console.log(siteUrl); // Visible in browser console
```

**Good for:**
- Site URLs ✅
- Public API keys ✅
- Configuration ✅

**NOT good for:**
- Bot tokens ❌
- API secrets ❌
- Private keys ❌

**Why we use it anyway:**
```
Our bot token needs to be accessible from:
- API routes (server-side)
- Contact form API endpoint
- Telegram Bot API calls

So it MUST be in process.env for API route to read it
```

---

## Common Mistakes & Fixes

### Mistake 1: Forgetting to Create .env

```
❌ Error: Telegram credentials not configured

Fix:
1. cp .env.example .env
2. Edit .env with real values
3. npm run dev again
```

### Mistake 2: Typo in Variable Name

```
❌ Code: process.env.NEXT_PUBLIC_TELEGRAM_BOT_TOKAN
       ↑ Typo: TOKAN should be TOKEN

✅ Fix: Use exact name from .env
   process.env.NEXT_PUBLIC_TELEGRAM_BOT_TOKEN
```

### Mistake 3: Committing .env to GitHub

```
❌ Command that's BAD:
   git add .env
   git commit -m "Add env file"
   
✅ Command that's GOOD:
   .gitignore already prevents this!
   Just do: git add .
   Git automatically skips .env
```

### Mistake 4: Spaces in Values

```
❌ WRONG:
NEXT_PUBLIC_TELEGRAM_BOT_TOKEN = 8629820047:AAGYdlfe...
                              ↑ Space before =
                              
✅ RIGHT:
NEXT_PUBLIC_TELEGRAM_BOT_TOKEN=8629820047:AAGYdlfe...
                              ↑ No spaces
```

### Mistake 5: Forgetting to Add to Vercel

```
❌ Site works locally but fails on Vercel
   Reason: Variables not added to Vercel dashboard
   
✅ Fix:
   1. Go to Vercel Settings → Environment Variables
   2. Add all 3 variables
   3. Redeploy
```

---

## How to Update Environment Variables

### Locally

```bash
# 1. Edit .env file
nano .env

# 2. Update value
NEXT_PUBLIC_TELEGRAM_BOT_TOKEN=NEW_TOKEN_HERE

# 3. Save file
# 4. Restart dev server (Ctrl+C, then npm run dev)
# 5. Changes take effect immediately
```

### On Vercel

```
1. Go to Vercel Dashboard
2. Select your project
3. Go to Settings → Environment Variables
4. Click "..." next to variable
5. Click "Edit"
6. Update value
7. Click "Save"
8. Vercel automatically redeploys with new value ✅
```

---

## Security Best Practices

### ✅ DO THIS

```
✅ Keep .env file LOCAL ONLY
✅ Use strong, randomly generated tokens
✅ Rotate tokens if compromised
✅ Use different tokens for dev/prod
✅ Add .env to .gitignore
✅ Use .env.example as template
✅ Store secrets in Vercel dashboard (encrypted)
```

### ❌ DON'T DO THIS

```
❌ Commit .env to GitHub
❌ Share bot tokens in chat/email
❌ Use same token for multiple services
❌ Store credentials in code
❌ Post screenshots showing tokens
❌ Leave tokens in browser console logs
❌ Use weak or guessable tokens
```

---

## Testing Environment Variables

### Check Local Variables

```bash
# View (but don't expose!)
cat .env

# or

# Run this to test
npm run dev

# Then try contact form
# If you receive Telegram message, variables work ✅
```

### Check Vercel Variables

```
1. Go to Vercel project dashboard
2. Click "Settings"
3. Click "Environment Variables"
4. You should see your 3 variables listed
5. Test by deploying and trying contact form
6. Check if Telegram message arrives
```

### Debug in Code (Temporary Only)

```javascript
// In API route ONLY (not in frontend)
console.log('Token exists:', !!process.env.NEXT_PUBLIC_TELEGRAM_BOT_TOKEN);
console.log('Chat ID exists:', !!process.env.NEXT_PUBLIC_TELEGRAM_CHAT_ID);

// ⚠️ NEVER log actual values in production!
// Only log true/false (whether they exist)
```

---

## Reference: Variable Checklist

| Variable | Type | Where Used | Security | Example |
|----------|------|-----------|----------|---------|
| NEXT_PUBLIC_SITE_URL | Config | layout.tsx | Public | https://srilakshmi.vercel.app |
| NEXT_PUBLIC_TELEGRAM_BOT_TOKEN | Secret | /api/telegram | 🔒 High | 8629820047:AAGYDLFE... |
| NEXT_PUBLIC_TELEGRAM_CHAT_ID | ID | /api/telegram | 🔒 Medium | 1763188831 |

---

## Quick Links

- **Telegram BotFather:** t.me/BotFather
- **Get Your Chat ID:** t.me/getidsbot
- **Vercel Env Vars Docs:** https://vercel.com/docs/projects/environment-variables
- **Next.js Environment Variables:** https://nextjs.org/docs/basic-features/environment-variables

---

**Last Updated:** 2026-07-29
