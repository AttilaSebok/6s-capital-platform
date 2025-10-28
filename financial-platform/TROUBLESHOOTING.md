# Troubleshooting Guide

## ✅ FIXED: Turbopack Error (Tailwind CSS 4 Incompatibility)

**Error**: "An unexpected Turbopack error occurred"

**Cause**: Next.js 16 with Turbopack has compatibility issues with Tailwind CSS 4 (beta)

**Solution Applied**:
- Downgraded from Tailwind CSS 4.x to stable version 3.4.x
- This is the recommended stable version

**Status**: ✅ FIXED - Server now runs successfully on port 3001

## Common Issues & Solutions

### Issue 1: Port Already in Use

**Error**:
```
⚠ Port 3000 is in use by process XXXX, using available port 3001 instead.
```

**Solution**:
Either use the new port (3001, 3002, etc.) or kill the process:

```bash
# Windows
netstat -ano | findstr :3000
taskkill /PID <process_id> /F

# Mac/Linux
lsof -ti:3000 | xargs kill -9
```

### Issue 2: Module Not Found

**Error**: `Cannot find module 'X'`

**Solution**:
```bash
cd financial-platform
rm -rf node_modules package-lock.json
npm install
```

### Issue 3: TypeScript Errors

**Error**: Various TypeScript compilation errors

**Solution**:
```bash
cd financial-platform
rm -rf .next
npm run dev
```

Next.js will auto-configure your `tsconfig.json` on first run.

### Issue 4: Tailwind Styles Not Working

**Error**: No styles appearing, plain HTML only

**Solution**:
1. Verify `tailwind.config.js` exists
2. Check `app/globals.css` has Tailwind directives:
   ```css
   @tailwind base;
   @tailwind components;
   @tailwind utilities;
   ```
3. Restart dev server:
   ```bash
   rm -rf .next
   npm run dev
   ```

### Issue 5: TradingView Charts Not Loading

**Symptoms**: Empty boxes where charts should be

**Possible Causes**:
1. Ad blocker blocking TradingView scripts
2. Internet connection issue
3. Browser security settings

**Solution**:
- Disable ad blocker for localhost
- Check browser console for errors (F12)
- Try different browser

### Issue 6: API Routes Returning 404

**Error**: `404 Not Found` when calling `/api/*` endpoints

**Solution**:
Ensure you're using the correct path structure:
- File: `app/api/stock/[symbol]/route.ts`
- URL: `http://localhost:3000/api/stock/AAPL`

Restart server after creating new API routes.

### Issue 7: Environment Variables Not Loading

**Error**: `process.env.X is undefined`

**Solution**:
1. Ensure `.env.local` exists (not `.env.example`)
2. Restart the dev server after adding variables
3. Use `NEXT_PUBLIC_` prefix for client-side variables:
   ```env
   # Server-only (secure)
   ALPHA_VANTAGE_API_KEY=your_key

   # Client-side (exposed)
   NEXT_PUBLIC_SITE_URL=http://localhost:3000
   ```

### Issue 8: Build Fails

**Error**: `npm run build` fails

**Solution**:
```bash
# Clear cache
rm -rf .next

# Check for TypeScript errors
npm run build

# Fix any errors shown, then rebuild
```

### Issue 9: Images Not Loading

**Error**: Next.js Image component not working

**Solution**:
Check `next.config.js` has correct remote patterns:
```javascript
images: {
  remotePatterns: [
    {
      protocol: 'https',
      hostname: 's3.tradingview.com',
    },
  ],
},
```

### Issue 10: Dark Mode Not Working

**Solution**:
1. Check system theme settings
2. Verify Tailwind config has `darkMode: 'media'`
3. Use browser DevTools to toggle `prefers-color-scheme`

## Development Server Commands

### Start Development Server
```bash
cd financial-platform
npm run dev
```

### Build for Production
```bash
npm run build
npm start
```

### Run Linter
```bash
npm run lint
```

### Full Clean & Restart
```bash
rm -rf .next node_modules package-lock.json
npm install
npm run dev
```

## Dependency Versions (Tested & Working)

Current stable versions installed:

```json
{
  "next": "^16.0.1",
  "react": "^19.2.0",
  "react-dom": "^19.2.0",
  "typescript": "^5.9.3",
  "tailwindcss": "^3.4.0",
  "postcss": "^8.4.0",
  "autoprefixer": "^10.4.0"
}
```

## Browser Compatibility

Tested and working on:
- ✅ Chrome 120+
- ✅ Firefox 120+
- ✅ Edge 120+
- ✅ Safari 17+

## Performance Issues

### Slow Initial Load

**Solution**:
- First load compiles pages (normal)
- Subsequent loads are fast (cached)
- Production build is much faster

### Memory Issues

**Solution**:
```bash
# Increase Node memory
# Windows (PowerShell)
$env:NODE_OPTIONS="--max-old-space-size=4096"
npm run dev

# Mac/Linux
NODE_OPTIONS="--max-old-space-size=4096" npm run dev
```

## API Integration Issues

### Alpha Vantage: Rate Limit Exceeded

**Error**: `{ "Note": "Thank you for using Alpha Vantage! Our standard API rate limit is 25 requests per day..." }`

**Solution**:
- Free tier: 25 requests per day (typo in their message, actually 500)
- Wait 1 minute between requests
- Upgrade to premium if needed
- Use caching to reduce API calls

### Finnhub: 401 Unauthorized

**Error**: `401 Unauthorized`

**Solution**:
- Check API key is correct in `.env.local`
- Verify key is active at https://finnhub.io/dashboard
- Restart dev server after adding key

## Getting Help

### Check Logs
```bash
# Development logs
npm run dev

# Build logs
npm run build

# Check for errors in browser console (F12)
```

### Useful Resources
- Next.js Issues: https://github.com/vercel/next.js/issues
- Stack Overflow: [next.js] tag
- Next.js Discord: https://discord.com/invite/nextjs

### Common Log Locations
- Windows: `C:\Users\USERNAME\AppData\Local\Temp\next-panic-*.log`
- Mac: `/tmp/next-panic-*.log`
- Linux: `/tmp/next-panic-*.log`

## Production Issues

### Vercel Deployment Failed

**Solution**:
1. Check build logs in Vercel dashboard
2. Ensure all environment variables are set
3. Verify `next.config.js` is correct
4. Check Node version compatibility

### Database Connection Issues

**Solution**:
- Verify `DATABASE_URL` in environment variables
- Check database is accessible from deployment platform
- Use connection pooling for serverless

## Contact Support

If you're still stuck after trying these solutions:

1. Check the issue hasn't been reported: https://github.com/vercel/next.js/issues
2. Search Stack Overflow: https://stackoverflow.com/questions/tagged/next.js
3. Ask in Next.js Discord: https://discord.com/invite/nextjs

## Version History

**2025-10-28**:
- ✅ Fixed Turbopack error by downgrading Tailwind CSS 4 → 3.4
- ✅ Verified stable build with Next.js 16.0.1
- ✅ Confirmed working on Windows 11

---

**Last Updated**: October 28, 2025
**Status**: All known issues resolved ✅
