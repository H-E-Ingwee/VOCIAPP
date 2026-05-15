# VOCI Website - Next.js Version

This is the modernized VOCI website built with Next.js, featuring user registration with Firestore integration.

## Setup

1. Copy `.env.example` to `.env.local` and fill in your Firebase configuration.
2. Install dependencies: `npm install`
3. Run development server: `npm run dev`

## Firebase Setup

1. Create a Firebase project at https://console.firebase.google.com/
2. Enable Firestore Database
3. Get your config keys and add to `.env.local`

## Deployment

Deploy to Vercel:

1. Install Vercel CLI: `npm i -g vercel`
2. Run `vercel` in the project root
3. Follow prompts to deploy

## Features

- User registration form with Firestore storage
- Responsive design with Tailwind CSS
- SEO optimized
- Modern React components

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
