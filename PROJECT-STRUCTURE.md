# 📦 VOCI Next.js Project Structure

## File Organization

```
VOCIAPP-1/
├── voci-next/                          # Main Next.js application
│   ├── src/
│   │   ├── app/
│   │   │   ├── about/
│   │   │   │   └── page.tsx           # About page
│   │   │   ├── events/
│   │   │   │   └── page.tsx           # Events page
│   │   │   ├── join/
│   │   │   │   └── page.tsx           # Join/Registration page
│   │   │   ├── programs/
│   │   │   │   └── page.tsx           # Programs page
│   │   │   ├── favicon.ico
│   │   │   ├── globals.css            # Global styles with VOCI colors
│   │   │   ├── layout.tsx             # Root layout with metadata
│   │   │   └── page.tsx               # Home page
│   │   ├── components/
│   │   │   ├── Hero.tsx               # Hero section component
│   │   │   ├── JoinForm.tsx           # Registration form with Firestore
│   │   │   └── Navigation.tsx         # Navigation bar
│   │   └── lib/
│   │       └── firebase.ts            # Firebase configuration
│   ├── public/                        # Static assets
│   ├── .env.local                     # Firebase credentials (NOT in git)
│   ├── .env.example                   # Template for env variables
│   ├── .gitignore                     # Excludes node_modules, .env, etc
│   ├── eslint.config.mjs              # ESLint configuration
│   ├── next.config.ts                 # Next.js configuration
│   ├── package.json                   # Dependencies and scripts
│   ├── postcss.config.mjs             # PostCSS configuration
│   ├── tailwind.config.ts             # Tailwind CSS configuration
│   ├── tsconfig.json                  # TypeScript configuration
│   ├── vercel.json                    # Vercel deployment config
│   └── README.md                      # Project documentation
├── DEPLOY-NOW.md                      # Quick deployment guide
├── DEPLOYMENT-GUIDE.md                # Detailed deployment steps
├── MIGRATION-COMPLETE.md              # Full project summary
└── (old HTML files remain for reference)
```

---

## 🔧 Technologies Used

| Technology | Purpose |
|-----------|---------|
| **Next.js 16** | React framework with SSR and optimization |
| **TypeScript** | Type-safe development |
| **Tailwind CSS** | Utility-first styling |
| **Firebase** | Real-time database (Firestore) |
| **React Hook Form** | Form validation and handling |
| **ESLint** | Code quality |
| **Vercel** | Deployment platform |

---

## 📝 Component Breakdown

### Navigation.tsx
- Sticky navbar with VOCI branding
- Links to all pages
- Mobile-responsive hamburger menu
- Uses Next.js Link for optimized navigation

### Hero.tsx
- Full-width hero section
- VOCI gradient background
- Call-to-action buttons
- Animated text with Animate.css

### JoinForm.tsx
- User registration form
- Real-time Firestore integration
- Form validation with React Hook Form
- Success confirmation message
- Fields:
  - Full Name (required)
  - Email (required, validated)
  - Phone (optional)
  - Institution (optional)
  - Area of Interest (required)
  - Motivation (required)

---

## 🔑 Environment Variables

Located in: `voci-next/.env.local` (not committed to git)

```
NEXT_PUBLIC_FIREBASE_API_KEY=AIzaSyA3Z9nOOFBftLgq6BvotnySBbbHDJgzBnk
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=vociapp-63056.firebaseapp.com
NEXT_PUBLIC_FIREBASE_PROJECT_ID=vociapp-63056
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=vociapp-63056.firebasestorage.app
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=336825204127
NEXT_PUBLIC_FIREBASE_APP_ID=1:336825204127:web:035903ebac371854d611aa
```

---

## 📊 Firestore Database Structure

Collection: `applications`

Document fields:
```json
{
  "fullName": "string",
  "email": "string",
  "phone": "string",
  "institution": "string",
  "interest": "string (communication|branding|leadership)",
  "motivation": "string",
  "submittedAt": "timestamp"
}
```

---

## 🎨 VOCI Color Palette

Configured in `globals.css`:

| Color | Value | Usage |
|-------|-------|-------|
| VOCI Blue | `#007bff` | Primary color |
| VOCI Red | `#B00000` | Accent, CTAs |
| VOCI Gold | `#C28B00` | Highlights |
| Dark Blue | `#14213d` | Text, headings |
| Light Blue | `#e6f2ff` | Backgrounds |

---

## 🚀 Available npm Scripts

```bash
npm run dev      # Start development server (localhost:3000)
npm run build    # Build for production
npm start        # Start production server
npm run lint     # Run ESLint
```

---

## 📄 SEO Configuration

Each page includes:
- ✅ Unique title tags (60 chars)
- ✅ Meta descriptions (160 chars)
- ✅ Keywords
- ✅ Open Graph tags
- ✅ Twitter Card tags
- ✅ Canonical URLs
- ✅ Structured metadata in layout.tsx

---

## 🔐 Security Notes

1. **Environment Variables**
   - `.env.local` is in `.gitignore` (never committed)
   - Copy to Vercel dashboard during deployment

2. **Firebase Rules**
   - Firestore rules should be set in Firebase console
   - For testing: Allow read/write to all
   - For production: Restrict to authenticated users only

3. **API Routes (for future)**
   - Can add endpoints in `src/app/api/`
   - Server-side validation recommended
   - Never expose secrets in client code

---

## 📈 Performance Optimizations

- ✅ Server-Side Rendering (SSR) with Next.js
- ✅ Automatic code splitting
- ✅ Image optimization with Next.js Image
- ✅ Font optimization
- ✅ CSS minification with Tailwind
- ✅ JavaScript minification
- ✅ Caching headers configured

---

## 🐛 Troubleshooting

### Build fails
- Check `.env.local` exists
- Run `npm install` again
- Delete `.next` folder: `rm -rf .next`

### Form not submitting
- Verify Firebase credentials in browser console
- Check Firestore security rules
- Ensure collection name is lowercase: `applications`

### Styles not loading
- Check `tailwind.config.ts` has correct template paths
- Restart dev server after changing CSS
- Clear browser cache

---

## 📚 Useful Links

- [Next.js Docs](https://nextjs.org/docs)
- [Firebase Docs](https://firebase.google.com/docs)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [Vercel Docs](https://vercel.com/docs)
- [React Hook Form](https://react-hook-form.com/)

---

## 🎯 Next Steps

1. **Deploy to Vercel** (see DEPLOY-NOW.md)
2. **Test form submission**
3. **Add remaining pages** (contact, resources, team)
4. **Integrate CMS** (Contentful for dynamic content)
5. **Set up authentication** (NextAuth.js for user accounts)

---

## 👤 Project Maintainer

This is the modernized VOCI website built with Next.js.
All old HTML files remain in the root directory for reference.