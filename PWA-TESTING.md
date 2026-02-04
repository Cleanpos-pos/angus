# Testing PWA Installation

## How to Test the Install Prompt

1. **Run the development server:**
   ```bash
   npm run dev
   ```

2. **Open in browser:**
   - Navigate to `http://localhost:3000`
   - Wait 3 seconds for the install prompt to appear

3. **Test on Mobile (Recommended):**
   - Open the site on your mobile device using the network URL (e.g., `http://192.168.1.108:3000`)
   - The install prompt will appear after 3 seconds
   - Click "Install" to add the app to your home screen

4. **Test on Desktop (Chrome/Edge):**
   - Open Chrome or Edge browser
   - Navigate to the site
   - Look for the install icon in the address bar (⊕ or install icon)
   - Or wait for the custom install prompt to appear

## PWA Features Included

✅ **Offline Support** - Service worker caches assets for offline use
✅ **Install Prompt** - Beautiful custom install popup
✅ **App Icons** - Multiple sizes for all devices
✅ **Manifest** - Full PWA manifest with theme colors
✅ **Standalone Mode** - Runs like a native app when installed
✅ **Fast Loading** - Cached resources load instantly

## Production Deployment

For production, you'll need to:
1. Build the app: `npm run build`
2. Deploy the `dist` folder to your hosting service
3. Ensure HTTPS is enabled (required for PWA)
4. Test the install prompt on the live site

## Notes

- The install prompt only shows on HTTPS sites (or localhost)
- Users can dismiss the prompt and it won't show again in that session
- The service worker caches resources for faster loading
- Icons are currently copies of the 512x512 icon - consider using proper image resizing for production
