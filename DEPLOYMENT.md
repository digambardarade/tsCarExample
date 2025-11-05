# Vercel Deployment for TypeScript Car Example

This project is deployed on Vercel with the following configuration:

## Build Settings
- **Build Command**: `npm run build:web`
- **Output Directory**: `.` (root directory)
- **Install Command**: `npm install`
- **Dev Command**: `npm run dev:web`

## Files Structure for Deployment
```
├── index.html          # Main entry point
├── style.css           # Styling
├── dist/
│   └── bundle.js       # Built JavaScript bundle
├── package.json        # Dependencies and scripts
├── vercel.json         # Vercel configuration
└── src/                # TypeScript source files
```

## Environment
- **Framework**: Static Site
- **Node.js Version**: 18.x (default)

## Deployment Process
1. Vercel runs `npm install` to install dependencies
2. Runs `npm run build:web` to create the browser bundle
3. Serves `index.html` as the main page
4. Static files are cached for optimal performance