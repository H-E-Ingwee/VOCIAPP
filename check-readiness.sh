#!/bin/bash
# VOCI Deployment Readiness Checker
# This script verifies everything is ready for deployment

echo "🔍 VOCI Deployment Readiness Check"
echo "===================================="
echo ""

ERRORS=0
WARNINGS=0

# Check Node.js
echo "📦 Checking Node.js..."
if command -v node &> /dev/null; then
    NODE_VERSION=$(node --version)
    echo "✓ Node.js installed: $NODE_VERSION"
else
    echo "✗ Node.js not found"
    ERRORS=$((ERRORS + 1))
fi

# Check npm
echo ""
echo "📦 Checking npm..."
if command -v npm &> /dev/null; then
    NPM_VERSION=$(npm --version)
    echo "✓ npm installed: $NPM_VERSION"
else
    echo "✗ npm not found"
    ERRORS=$((ERRORS + 1))
fi

# Check Git
echo ""
echo "🔗 Checking Git..."
if command -v git &> /dev/null; then
    GIT_VERSION=$(git --version)
    echo "✓ Git installed: $GIT_VERSION"
else
    echo "✗ Git not found"
    ERRORS=$((ERRORS + 1))
fi

# Check project files
echo ""
echo "📁 Checking project files..."
if [ -d "voci-next" ]; then
    echo "✓ voci-next directory found"
else
    echo "✗ voci-next directory not found"
    ERRORS=$((ERRORS + 1))
fi

if [ -f "voci-next/.env.local" ]; then
    echo "✓ .env.local configured"
else
    echo "⚠ .env.local not found (will need it for deployment)"
    WARNINGS=$((WARNINGS + 1))
fi

if [ -f "voci-next/vercel.json" ]; then
    echo "✓ vercel.json configured"
else
    echo "⚠ vercel.json not found"
    WARNINGS=$((WARNINGS + 1))
fi

if [ -f "voci-next/package.json" ]; then
    echo "✓ package.json found"
else
    echo "✗ package.json not found"
    ERRORS=$((ERRORS + 1))
fi

# Check node_modules
echo ""
echo "📚 Checking dependencies..."
if [ -d "voci-next/node_modules" ]; then
    echo "✓ node_modules found (dependencies installed)"
else
    echo "⚠ node_modules not found (will need to run: npm install)"
    WARNINGS=$((WARNINGS + 1))
fi

# Check Git status
echo ""
echo "🔗 Checking Git status..."
cd voci-next 2>/dev/null
if [ -d ".git" ]; then
    echo "✓ Git repository initialized"
    COMMIT_COUNT=$(git rev-list --count HEAD 2>/dev/null || echo "0")
    if [ "$COMMIT_COUNT" -gt 0 ]; then
        echo "✓ Commits found: $COMMIT_COUNT"
    else
        echo "⚠ No commits found (run: git add . && git commit -m 'Initial commit')"
        WARNINGS=$((WARNINGS + 1))
    fi
else
    echo "⚠ Git repository not initialized (run: git init)"
    WARNINGS=$((WARNINGS + 1))
fi
cd ..

# Summary
echo ""
echo "===================================="
echo "Summary:"
echo "  Errors: $ERRORS"
echo "  Warnings: $WARNINGS"
echo ""

if [ $ERRORS -eq 0 ]; then
    echo "✅ All systems ready for deployment!"
    if [ $WARNINGS -eq 0 ]; then
        echo "🚀 You can deploy now!"
    else
        echo "⚠ Address the warnings above before deploying"
    fi
else
    echo "❌ Fix the errors above before deploying"
fi

echo ""