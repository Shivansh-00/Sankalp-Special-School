# Deployment Guide for Sankalp Special School Website

## Quick Deployment Options

### 1. Vercel (Recommended - Free)

**Step 1:** Push your code to GitHub
\`\`\`bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/yourusername/sankalp-special-school.git
git push -u origin main
\`\`\`

**Step 2:** Deploy to Vercel
1. Go to [vercel.com](https://vercel.com)
2. Sign up with GitHub
3. Click "New Project"
4. Import your repository
5. Click "Deploy"

**Step 3:** Configure Domain (Optional)
1. Go to Project Settings
2. Add your custom domain
3. Update DNS records as instructed

### 2. Netlify (Alternative - Free)

**Step 1:** Build the project
\`\`\`bash
npm run build
\`\`\`

**Step 2:** Deploy to Netlify
1. Go to [netlify.com](https://netlify.com)
2. Drag and drop the `.next` folder
3. Or connect your GitHub repository

### 3. Railway (Database Ready)

**Step 1:** Install Railway CLI
\`\`\`bash
npm install -g @railway/cli
\`\`\`

**Step 2:** Deploy
\`\`\`bash
railway login
railway init
railway up
\`\`\`

## Local Development Setup

### Prerequisites
- Node.js 18 or higher
- npm or yarn

### Installation Steps

1. **Download the code** from v0 or clone repository
2. **Navigate to project directory**
   \`\`\`bash
   cd sankalp-special-school
   \`\`\`

3. **Install dependencies**
   \`\`\`bash
   npm install
   \`\`\`

4. **Start development server**
   \`\`\`bash
   npm run dev
   \`\`\`

5. **Open browser**
   - Go to `http://localhost:3000`

## Production Build

### Build for Production
\`\`\`bash
npm run build
npm start
\`\`\`

### Test Production Build Locally
\`\`\`bash
npm run build
npm start
\`\`\`

## Environment Configuration

### Create `.env.local` file:
\`\`\`env
# Site Configuration
NEXT_PUBLIC_SITE_URL=http://localhost:3000
NEXT_PUBLIC_SITE_NAME=Sankalp Special School

# Contact Information
CONTACT_EMAIL=info@sankalpspecialschool.com
CONTACT_PHONE=+91XXXXXXXXXX

# Google Maps (Optional)
NEXT_PUBLIC_GOOGLE_MAPS_API_KEY=your_api_key_here
\`\`\`

### For Production:
\`\`\`env
NEXT_PUBLIC_SITE_URL=https://your-domain.com
NODE_ENV=production
\`\`\`

## Database Migration (Future)

### Current: JSON Files
- Data stored in `/data` folder
- Automatic file creation
- No setup required

### Upgrade to Database:
\`\`\`bash
# For PostgreSQL
npm install pg @types/pg

# For MongoDB
npm install mongodb

# For MySQL
npm install mysql2
\`\`\`

## SSL Certificate

### Automatic (Vercel/Netlify)
- SSL certificates are automatically provided
- HTTPS enabled by default

### Manual Setup
\`\`\`bash
# For custom server
npm install --save-dev mkcert
npx mkcert create-ca
npx mkcert create-cert
\`\`\`

## Performance Optimization

### Image Optimization
\`\`\`bash
# Already configured in next.config.mjs
# Images automatically optimized
\`\`\`

### Caching Strategy
\`\`\`javascript
// In next.config.mjs
const nextConfig = {
  async headers() {
    return [
      {
        source: '/api/:path*',
        headers: [
          { key: 'Cache-Control', value: 'public, max-age=3600' }
        ]
      }
    ]
  }
}
\`\`\`

## Monitoring & Analytics

### Add Google Analytics
\`\`\`javascript
// In app/layout.tsx
import Script from 'next/script'

export default function RootLayout({ children }) {
  return (
    <html>
      <head>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'GA_MEASUREMENT_ID');
          `}
        </Script>
      </head>
      <body>{children}</body>
    </html>
  )
}
\`\`\`

## Backup Strategy

### Automated Backups
\`\`\`bash
# Create backup script
#!/bin/bash
DATE=$(date +%Y%m%d_%H%M%S)
tar -czf "backup_$DATE.tar.gz" data/
\`\`\`

### Manual Backup
\`\`\`bash
# Backup data folder
cp -r data/ backup/data_$(date +%Y%m%d)/
\`\`\`

## Security Checklist

- ✅ Input validation implemented
- ✅ XSS protection enabled
- ✅ CSRF protection ready
- ✅ Rate limiting configured
- ✅ HTTPS enforced
- ✅ Environment variables secured
- ✅ Dependencies updated

## Troubleshooting

### Common Issues

**Build Errors:**
\`\`\`bash
# Clear cache
rm -rf .next
npm run build
\`\`\`

**Port Already in Use:**
\`\`\`bash
# Kill process on port 3000
npx kill-port 3000
npm run dev
\`\`\`

**Module Not Found:**
\`\`\`bash
# Reinstall dependencies
rm -rf node_modules package-lock.json
npm install
\`\`\`

### Performance Issues
\`\`\`bash
# Analyze bundle
npm install --save-dev @next/bundle-analyzer
\`\`\`

## Support

### Getting Help
1. Check the README.md file
2. Review the code comments
3. Check Next.js documentation
4. Contact: info@sankalpspecialschool.com

### Updates
\`\`\`bash
# Update dependencies
npm update
npm audit fix
\`\`\`

## Maintenance

### Regular Tasks
- Update dependencies monthly
- Backup data weekly
- Monitor performance
- Review security updates
- Test contact forms

### Monitoring
- Check form submissions
- Monitor website uptime
- Review user feedback
- Update content regularly
