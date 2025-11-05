#!/bin/bash

# TypeScript Car Example - Vercel Deployment Script

echo "🚗 TypeScript Car Example - Vercel Deployment"
echo "=============================================="

# Check if Vercel CLI is installed
if ! command -v vercel &> /dev/null; then
    echo "❌ Vercel CLI not found. Installing..."
    npm install -g vercel
fi

# Build the project
echo "🔨 Building project..."
npm run build:web

# Check if build was successful
if [ $? -eq 0 ]; then
    echo "✅ Build successful!"
    
    # Deploy to Vercel
    echo "🚀 Deploying to Vercel..."
    vercel --prod
    
    echo "🎉 Deployment complete!"
    echo "Your TypeScript Car Example is now live on Vercel!"
else
    echo "❌ Build failed. Please check the errors above."
    exit 1
fi