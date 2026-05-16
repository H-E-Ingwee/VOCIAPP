#!/bin/bash
# Deployment script for VOCI Next.js App to Vercel

echo "Installing Vercel CLI..."
npm install -g vercel

echo "Deploying to Vercel..."
cd voci-next
vercel --prod

echo "Deployment complete!"
echo "Your app is now live on Vercel."
