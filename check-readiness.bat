@echo off
REM VOCI Deployment Readiness Checker (Windows Batch)

cls
echo 🔍 VOCI Deployment Readiness Check
echo ====================================
echo.

setlocal enabledelayedexpansion
set ERRORS=0
set WARNINGS=0

REM Check Node.js
echo 📦 Checking Node.js...
node --version >nul 2>&1
if %ERRORLEVEL% equ 0 (
    for /f "tokens=*" %%i in ('node --version') do set NODE_VER=%%i
    echo ✓ Node.js installed: !NODE_VER!
) else (
    echo ✗ Node.js not found
    set /a ERRORS=!ERRORS!+1
)

REM Check npm
echo.
echo 📦 Checking npm...
npm --version >nul 2>&1
if %ERRORLEVEL% equ 0 (
    for /f "tokens=*" %%i in ('npm --version') do set NPM_VER=%%i
    echo ✓ npm installed: !NPM_VER!
) else (
    echo ✗ npm not found
    set /a ERRORS=!ERRORS!+1
)

REM Check Git
echo.
echo 🔗 Checking Git...
git --version >nul 2>&1
if %ERRORLEVEL% equ 0 (
    for /f "tokens=*" %%i in ('git --version') do set GIT_VER=%%i
    echo ✓ Git installed: !GIT_VER!
) else (
    echo ✗ Git not found
    set /a ERRORS=!ERRORS!+1
)

REM Check project directory
echo.
echo 📁 Checking project files...
if exist "voci-next" (
    echo ✓ voci-next directory found
) else (
    echo ✗ voci-next directory not found
    set /a ERRORS=!ERRORS!+1
)

REM Check .env.local
if exist "voci-next\.env.local" (
    echo ✓ .env.local configured
) else (
    echo ⚠ .env.local not found
    set /a WARNINGS=!WARNINGS!+1
)

REM Check vercel.json
if exist "voci-next\vercel.json" (
    echo ✓ vercel.json configured
) else (
    echo ⚠ vercel.json not found
    set /a WARNINGS=!WARNINGS!+1
)

REM Check package.json
if exist "voci-next\package.json" (
    echo ✓ package.json found
) else (
    echo ✗ package.json not found
    set /a ERRORS=!ERRORS!+1
)

REM Check node_modules
echo.
echo 📚 Checking dependencies...
if exist "voci-next\node_modules" (
    echo ✓ node_modules found ^(dependencies installed^)
) else (
    echo ⚠ node_modules not found ^(run: npm install^)
    set /a WARNINGS=!WARNINGS!+1
)

REM Check Git repository
echo.
echo 🔗 Checking Git status...
if exist "voci-next\.git" (
    echo ✓ Git repository initialized
    cd voci-next
    for /f "tokens=*" %%i in ('git rev-list --count HEAD 2^>nul') do set COMMITS=%%i
    cd ..
    if not "!COMMITS!"=="" if !COMMITS! gtr 0 (
        echo ✓ Commits found: !COMMITS!
    ) else (
        echo ⚠ No commits found
        set /a WARNINGS=!WARNINGS!+1
    )
) else (
    echo ⚠ Git repository not initialized
    set /a WARNINGS=!WARNINGS!+1
)

REM Summary
echo.
echo ====================================
echo Summary:
echo   Errors: !ERRORS!
echo   Warnings: !WARNINGS!
echo.

if !ERRORS! equ 0 (
    echo ✅ All systems ready for deployment!
    if !WARNINGS! equ 0 (
        echo 🚀 You can deploy now!
    ) else (
        echo ⚠ Address the warnings above before deploying
    )
) else (
    echo ❌ Fix the errors above before deploying
)

echo.
pause