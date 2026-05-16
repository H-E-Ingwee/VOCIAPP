#!/bin/bash
# VOCI Automated Deployment Script
# This script automates deployment to Vercel

set -e

echo "🚀 VOCI Website - Automated Vercel Deployment"
echo "=================================================="

# Check if vercel CLI is installed
if ! command -v vercel &> /dev/null; then
    echo "📦 Installing Vercel CLI..."
    npm install -g vercel
fi

# Navigate to project directory
cd voci-next

# Ensure dependencies are installed
echo "📥 Installing dependencies..."
npm install

# Build the project
echo "🏗️ Building project..."
npm run build

# Deploy to Vercel
echo "🌐 Deploying to Vercel..."
vercel --prod --confirm

echo "✅ Deployment complete!"
echo "Your site is now live! 🎉"