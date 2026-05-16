# VOCI Next.js - Deployment Guide

## Firebase Configuration ✅
Your Firebase credentials have been automatically configured in `.env.local`:
- Project ID: `vociapp-63056`
- Auth Domain: `vociapp-63056.firebaseapp.com`
- Storage Bucket: `vociapp-63056.firebasestorage.app`

## Deploy to Vercel

### Option 1: Using Git (Recommended)

1. **Push to GitHub** (if not already):
   ```bash
   git add .
   git commit -m "Next.js migration with Firebase integration"
   git push origin main
   ```

2. **Connect to Vercel**:
   - Go to https://vercel.com
   - Sign in with GitHub
   - Click "Add New Project"
   - Import your GitHub repository
   - Vercel will auto-detect Next.js

3. **Add Environment Variables**:
   - In Vercel dashboard, go to Settings → Environment Variables
   - Add all variables from `.env.local`:
     ```
     NEXT_PUBLIC_FIREBASE_API_KEY=AIzaSyA3Z9nOOFBftLgq6BvotnySBbbHDJgzBnk
     NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=vociapp-63056.firebaseapp.com
     NEXT_PUBLIC_FIREBASE_PROJECT_ID=vociapp-63056
     NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=vociapp-63056.firebasestorage.app
     NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=336825204127
     NEXT_PUBLIC_FIREBASE_APP_ID=1:336825204127:web:035903ebac371854d611aa
     ```

4. **Deploy**:
   - Click "Deploy"
   - Wait for build to complete (~5 minutes)
   - Your app will be live at `https://your-project.vercel.app`

### Option 2: Using Vercel CLI

```bash
# Navigate to project
cd voci-next

# Install Vercel CLI
npm install -g vercel

# Deploy
vercel --prod
```

## Post-Deployment

1. **Update Domain**:
   - Point your `vociglobal.site` domain to Vercel in your registrar
   - Or use Vercel's domain system

2. **Test Form Submission**:
   - Go to `/join` page
   - Submit test application
   - Check Firestore console to verify data is saved

3. **Monitor Performance**:
   - Vercel Analytics dashboard shows real-time metrics
   - Check build logs if issues occur

4. **Enable Auto-Deployments**:
   - Vercel automatically redeploys on git push
   - No manual deployment needed for future updates

## Features Deployed

✅ SEO optimized metadata on all pages
✅ Firestore user registration form
✅ Firebase authentication ready
✅ Responsive design with Tailwind CSS
✅ Performance optimized with Next.js
✅ Automatic deployments on git push

## Troubleshooting

**Build fails?**
- Check `.env.local` exists in `voci-next/` directory
- Ensure all Firebase variables are set
- Clear `.next` folder: `rm -rf .next`

**Form not submitting?**
- Check Firebase Firestore permissions are set to public read/write (for testing)
- Verify Firebase credentials in browser console

**Domain not connecting?**
- Wait 24-48 hours for DNS propagation
- Check domain registrar settings point to Vercel nameservers

## Next Steps

1. Migrate remaining pages (about, programs, events, etc.) to Next.js components
2. Set up Contentful CMS for dynamic content
3. Add user authentication with NextAuth.js
4. Implement analytics dashboard
5. Add email notifications on form submission