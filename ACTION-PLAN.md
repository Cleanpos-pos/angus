# SEO Action Plan: Angus Burger Website

**Date:** 2026-03-28
**Priority:** Ordered by impact (highest first)

---

## Completed (This Audit)

- [x] Added meta description, canonical, OG, Twitter, schema to homepage
- [x] Added Restaurant + WebSite (SearchAction) structured data to homepage
- [x] Trimmed all title tags to under 60 characters
- [x] Trimmed all meta descriptions to under 160 characters
- [x] Created robots.txt with sitemap reference and AI crawler permissions
- [x] Created XML sitemap with all 5 pages (priority-weighted)
- [x] Added ItemList + BreadcrumbList + Restaurant schema to all blog pages
- [x] Added listicle format (numbered items) to all blog pages
- [x] Added FAQ sections with internal cross-links to all blog pages
- [x] Added "Explore More" internal link sections to all blog pages
- [x] Added GeoCoordinates and AggregateRating to all schemas
- [x] Ensured no FAQPage or HowTo schema (restricted/deprecated)
- [x] Enhanced footers with sitemap-style navigation links

---

## Next Steps (Post-Deploy)

### Priority 1 - Critical for Indexing

1. **Deploy site to production domain** (burgers-kebabs-gyros.co.uk)
   - Ensure all pages return 200 status
   - Set up HTTPS with valid SSL certificate
   - Verify robots.txt accessible at /robots.txt
   - Verify sitemap.xml accessible at /sitemap.xml

2. **Submit to Google Search Console**
   - Verify domain ownership
   - Submit sitemap.xml
   - Request indexing for all 5 URLs
   - Monitor coverage report for errors

3. **Submit to Bing Webmaster Tools**
   - Verify domain
   - Submit sitemap
   - Request indexing

### Priority 2 - High Impact

4. **Add original photography**
   - Photograph actual burgers, kebabs, gyros (not stock)
   - Use WebP format, compress to under 100KB each
   - Add descriptive alt text with keywords
   - Update schema image URLs from placeholder to real

5. **Set up Google Business Profile**
   - Claim/create listing for 7 Park Lane, Wembley
   - Add photos, menu, opening hours
   - Link to website
   - Encourage customer reviews

6. **Consider SSR/prerendering for homepage**
   - Homepage is React SPA with no static HTML content
   - Google renders JS but prerendered HTML is stronger signal
   - Options: prerender plugin, SSR, or static HTML fallback

### Priority 3 - Medium Impact

7. **Add security headers** (once deployed)
   - HSTS (Strict-Transport-Security)
   - X-Content-Type-Options: nosniff
   - X-Frame-Options: DENY

8. **Self-host and purge Tailwind CSS**
   - CDN Tailwind sends full framework (~300KB)
   - Purge unused classes for < 10KB CSS

9. **Add Google Fonts `font-display: swap`**
   - Prevents invisible text during font load
   - Improves LCP (Largest Contentful Paint)

10. **Set up Google Analytics / GA4**
    - Track organic traffic per page
    - Monitor which keywords drive traffic
    - Measure engagement and conversions

### Priority 4 - Nice to Have

11. **Create llms.txt** for AI search engines
12. **Add more blog content** targeting long-tail keywords:
    - "halal restaurants near Wembley Stadium"
    - "vegan burgers Wembley"
    - "late night food Wembley"
    - "match day food Wembley Stadium"
13. **Build backlinks** from local directories (Yell, Yelp, TripAdvisor, Google Maps)
14. **Add customer review schema** once real reviews are collected

---

## Key Metrics to Track

| Metric | Target | Tool |
|--------|--------|------|
| Pages indexed | 5/5 | Google Search Console |
| Average position for "best burgers wembley" | Top 10 | GSC |
| Organic clicks/month | 500+ | GSC |
| Core Web Vitals (LCP) | < 2.5s | PageSpeed Insights |
| Core Web Vitals (INP) | < 200ms | PageSpeed Insights |
| Core Web Vitals (CLS) | < 0.1 | PageSpeed Insights |
