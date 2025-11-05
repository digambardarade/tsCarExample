@echo off
REM TypeScript Car Example - Vercel Deployment Script for Windows

echo 🚗 TypeScript Car Example - Vercel Deployment
echo ==============================================

REM Check if Vercel CLI is installed
vercel --version >nul 2>&1
if %errorlevel% neq 0 (
    echo ❌ Vercel CLI not found. Installing...
    npm install -g vercel
)

REM Build the project
echo 🔨 Building project...
call npm run build:web

REM Check if build was successful
if %errorlevel% equ 0 (
    echo ✅ Build successful!
    
    REM Deploy to Vercel
    echo 🚀 Deploying to Vercel...
    call vercel --prod
    
    echo 🎉 Deployment complete!
    echo Your TypeScript Car Example is now live on Vercel!
) else (
    echo ❌ Build failed. Please check the errors above.
    exit /b 1
)

pause