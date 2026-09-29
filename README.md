# Bongu Sri Lakshmi — Frontend Developer Portfolio

Modern, responsive, and performance-optimized personal portfolio built with **Next.js 15 (App Router)**, **React 19**, **TypeScript**, and **Tailwind CSS**.

---

## ⚡ Tech Stack

- **Framework:** [Next.js 15](https://nextjs.org/) (App Router, Server & Client Components)
- **Library:** [React 19](https://react.dev/)
- **Language:** [TypeScript](https://www.typescriptlang.org/)
- **Styling:** [Tailwind CSS 3](https://tailwindcss.com/)
- **Animations:** [Framer Motion](https://www.framer.com/motion/) & [tsparticles](https://particles.js.org/)
- **Icons:** [Lucide React](https://lucide.dev/)
- **Forms & Integration:** Next.js Route Handlers + Telegram Bot API
- **Deployment:** [Vercel](https://vercel.com/) / [Netlify](https://www.netlify.com/)

---

## ✨ Features & Highlights

- **Modern Cyber Aesthetics:** Deep space dark theme with vibrant cyan, purple, and violet accents.
- **Micro-Interactions & Motion:** Cursor spotlight tracker, particle background, smooth entry transitions, and an orbital scroll-progress indicator with return-to-top.
- **Full Responsiveness:** Mobile-first layout with custom mobile navigation drawer.
- **Server-Side API Handling:** Contact form submission handled through secure server-side Next.js route handlers (`/api/telegram`) without exposing credentials.
- **Component Architecture:** Modular, reusable component structure adhering to clean code and maintainability principles.

---

## 📁 Project Structure

```bash
srilakshmi-portfolio/
├── public/
│   ├── assets/              # Profile images, Resume PDF, and static media
│   └── favicon.svg          # Custom SVG favicon
├── src/
│   ├── app/
│   │   ├── api/             # Next.js Server Route Handlers (Contact API)
│   │   ├── components/      # Page-level sections (Hero, About, Skills, Projects, etc.)
│   │   ├── styles/          # Tailwind directives, custom utilities & theme variables
│   │   ├── layout.tsx       # Root layout with fonts, metadata, and progress orbit
│   │   └── page.tsx         # Main single-page application entry
│   └── components/          # Reusable shared UI components (Navbar, Footer, AppImage)
├── next.config.mjs          # Next.js build and image optimization settings
├── package.json             # Project dependencies and npm scripts
├── tailwind.config.js       # Design tokens, color palette, and animation definitions
└── tsconfig.json            # TypeScript configuration
```

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** 18.18+ or 20+
- **npm**, **yarn**, or **pnpm**

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/Bongu-Srilakshmi12/srilakshmi-bongu-portfolio.git
   cd srilakshmi-portfolio
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Set up Environment Variables:**
   Create a `.env.local` file in the root directory:
   ```env
   TELEGRAM_BOT_TOKEN=your_telegram_bot_token
   TELEGRAM_CHAT_ID=your_telegram_chat_id
   NEXT_PUBLIC_SITE_URL=http://localhost:3000
   ```

4. **Run the development server:**
   ```bash
   npm run dev
   ```

   Open [http://localhost:4028](http://localhost:4028) in your browser.

---

## 🛠️ Scripts

- `npm run dev` — Starts the local dev server on port `4028`
- `npm run build` — Builds the optimized production bundle
- `npm run start` — Runs the production build locally
- `npm run lint` — Runs ESLint code quality checks
- `npm run format` — Formats files with Prettier
- `npm run type-check` — Runs TypeScript type verification

---

## 📬 Contact & Connect

- **Portfolio:** [srilakshmi-bongu.vercel.app](https://srilakshmi-bongu.vercel.app)
- **LinkedIn:** [Sri Lakshmi Bongu](https://www.linkedin.com/in/sri-lakshmi-bongu-981962291/)
- **GitHub:** [@Bongu-Srilakshmi12](https://github.com/Bongu-Srilakshmi12)
- **Email:** [srilakshmigoud0412@gmail.com](mailto:srilakshmigoud0412@gmail.com)

---

Developed with passion by **Bongu Sri Lakshmi** © 2026