#!/bin/bash

# Exit on error
set -e

echo "🚀 Starting deployment process..."

# Install dependencies
echo "📦 Installing dependencies..."
npm install

# Run linting
echo "🔍 Running linting..."
npm run lint

# Build the project
echo "🏗️ Building the project..."
npm run build

# Deploy to Vercel
echo "🚀 Deploying to Vercel..."
vercel --prod

echo "✅ Deployment completed successfully!" 