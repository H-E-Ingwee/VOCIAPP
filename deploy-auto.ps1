# VOCI Automated Deployment Script for Windows
# This script automates deployment to Vercel on Windows

Write-Host "🚀 VOCI Website - Automated Vercel Deployment" -ForegroundColor Green
Write-Host "=================================================="

# Check if vercel CLI is installed
try {
    $vercelVersion = vercel --version
    Write-Host "✅ Vercel CLI found: $vercelVersion" -ForegroundColor Green
} catch {
    Write-Host "📦 Installing Vercel CLI..." -ForegroundColor Yellow
    npm install -g vercel
}

# Navigate to project directory
Set-Location voci-next

# Ensure dependencies are installed
Write-Host "📥 Installing dependencies..." -ForegroundColor Yellow
npm install

# Build the project
Write-Host "🏗️ Building project..." -ForegroundColor Yellow
npm run build

# Deploy to Vercel with production flag
Write-Host "🌐 Deploying to Vercel..." -ForegroundColor Yellow
Write-Host ""
Write-Host "⚠️  Please follow the prompts from Vercel CLI" -ForegroundColor Cyan
Write-Host "    - If asked to link project, choose 'Create a new project on Vercel'" -ForegroundColor Cyan
Write-Host "    - Set project name to 'voci' or similar" -ForegroundColor Cyan
Write-Host "    - Select appropriate options for your deployment" -ForegroundColor Cyan
Write-Host ""

vercel --prod

Write-Host ""
Write-Host "✅ Deployment initiated!" -ForegroundColor Green
Write-Host "🎉 Check your Vercel dashboard for the live URL!" -ForegroundColor Green
Write-Host ""
Write-Host "📊 Your Vercel Dashboard: https://vercel.com/dashboard" -ForegroundColor Cyan