# 🛒 বাজার দর (BazarDor)

**প্রয়োজনীয় পণ্যের দাম এক নজরে।**
BazarDor is a market-price browsing website designed primarily in Bangla for users in Bangladesh. It brings together today's prices for daily necessities—rice, lentils, cooking oil, vegetables, fish, meat, eggs, dairy products and spices. Users can explore price movements and compare market prices across 12 bazars in six divisions using the supplied API data.

🔗 **Live:** https://a-07-d2qn.vercel.app/
🔗 **Repository:** https://github.com/MH-git-ui/A_07

---

## ✨ Key Features

1. **Scrolling price ticker** — a continuously moving bar below the navbar displays product prices and their ▲/▼ changes. It pauses on hover and supports reduced-motion preferences.
2. **Daily price highlights** — the “আজ দাম বেড়েছে ▲” and “আজ দাম কমেছে ▼” sections present the six products with the largest percentage increases and decreases.
3. **Category browsing and numerical sorting** — browse eight product categories and switch between default order, lowest price first and highest price first. Bengali digits are converted to numbers for accurate sorting.
4. **Protected product details** — signed-in users can view minimum, maximum and average prices, the lowest- and highest-priced markets, previous-period prices and a market-by-market comparison table.
5. **Better Auth integration** — email/password registration and login, Google sign-in, protected-page redirects and authentication feedback are implemented. GitHub sign-in is integrated, but its deployed OAuth callback configuration still needs correction.
6. **Account and profile pages** — view your avatar and account information, sign out, or visit a separate page to update your name.
7. **Bangla-focused interface** — Hind Siliguri typography, Bengali price and percentage formatting, and Bangla dates make the information easier to read.
8. **Responsive browsing experience** — layouts adapt to mobile, tablet and desktop screens, with loading skeletons, empty states and a friendly custom 404 page.

## 🛠️ Technologies Used

| Purpose | Technology |
|---|---|
| Framework | [Next.js 16](https://nextjs.org) with App Router, Cache Components and Turbopack |
| Language | TypeScript and React 19 |
| Styling | Tailwind CSS v4 and [DaisyUI 5](https://daisyui.com), using a custom `bazardor` theme |
| Authentication | [Better Auth](https://better-auth.com) with email/password and Google/GitHub provider integration |
| Database | MongoDB through `@better-auth/mongo-adapter` |
| Notifications | react-hot-toast |
| Font | Hind Siliguri, loaded with `next/font/google` |
| Data | Bazardor REST API endpoints for products and categories |
| Deployment | Vercel |

## 📄 Pages

| Route | Description | Auth |
|---|---|---|
| `/` | Banner, six risers, six fallers and the complete product grid | Public |
| `/category/[slug]` | Category items with price sorting, loading skeletons and empty-state handling | Public |
| `/product/[slug]` | Product price statistics and market comparison table | 🔒 Login |
| `/signin`, `/signup` | Authentication forms and Google/GitHub sign-in buttons | Public |
| `/profile` | User information and sign-out control | 🔒 Login |
| `/profile/update` | Form for changing the user's name | 🔒 Login |
| any other URL | Friendly 404 page with “হোম পেজে ফিরে যান” | — |

## 🚀 Run Locally

```bash
git clone https://github.com/MH-git-ui/A_07.git
cd A_07
npm install
# Create a .env file in the project root and add the variables listed below.
npm run dev
```

Visit http://localhost:3000 after the development server starts.

### Environment variables

Create a `.env` file in the project root with these values. Keep credentials private and do not commit the file.

| Variable | What it is |
|---|---|
| `BETTER_AUTH_SECRET` | A securely generated random authentication secret of at least 32 characters |
| `BETTER_AUTH_URL` | Application address: `http://localhost:3000` for development or `https://a-07-d2qn.vercel.app` for production |
| `BETTER_AUTH_MONGODB_URL` | MongoDB connection URI; authentication data uses the `Better_auth` database |
| `BETTER_AUTH_API_KEY` | API key used by the Better Auth infrastructure/dashboard integration |
| `GOOGLE_CLIENT_ID` / `GOOGLE_CLIENT_SECRET` | Credentials for the Google OAuth client |
| `GITHUB_CLIENT_ID` / `GITHUB_CLIENT_SECRET` | Credentials for the GitHub OAuth application |

Register the corresponding OAuth callback addresses with each provider: `<BETTER_AUTH_URL>/api/auth/callback/google` and `<BETTER_AUTH_URL>/api/auth/callback/github`. Use the correct application address for each environment.

## 📁 Project Structure

```text
src/
├── app/                 # App Router pages and authentication API routes
├── components/          # Navbar, ticker, product cards, forms and profile interface
├── lib/                 # API access, Better Auth setup, session checks and Bangla formatting
└── proxy.ts             # Initial access checks for /product/* and /profile/*
```

---

_সকল দাম সম্ভাব্য; বাজার অবস্থার ওপর নির্ভর করে পরিবর্তিত হয়।_
