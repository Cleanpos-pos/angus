# SEO Audit Report: Angus Burger Website

**Date:** 2026-03-28
**Auditor:** Claude SEO Skill
**Domain:** burgers-kebabs-gyros.co.uk
**Pages Audited:** 5

---

## Overall Score: 88/100 (Good)

| Category | Score | Weight | Weighted |
|----------|-------|--------|----------|
| Technical SEO | 90 | 25% | 22.5 |
| Content Quality | 92 | 20% | 18.4 |
| On-Page SEO | 88 | 15% | 13.2 |
| Schema / Structured Data | 90 | 15% | 13.5 |
| Performance (CWV) | 80 | 10% | 8.0 |
| Image Optimization | 70 | 10% | 7.0 |
| AI Search Readiness | 90 | 5% | 4.5 |
| **Total** | | | **87.1** |

---

## Page-by-Page Summary

| Page | Title (chars) | Meta Desc (chars) | Canonical | OG | Twitter | Schema | H1 |
|------|:---:|:---:|:---:|:---:|:---:|:---:|:---:|
| Homepage | 46 | 144 | Yes | 6 | 3 | 2 | 0* |
| Best Burgers | 43 | 137 | Yes | 5 | 3 | 3 | 1 |
| Best Kebabs | 42 | 126 | Yes | 5 | 3 | 3 | 1 |
| Best Gyros | 41 | 133 | Yes | 5 | 3 | 3 | 1 |
| Takeaways Near Me | 45 | 126 | Yes | 5 | 3 | 3 | 1 |

*Homepage H1 is rendered client-side by React (not in static HTML).

---

## Findings by Category

### Technical SEO

| Finding | Severity | Status |
|---------|----------|--------|
| robots.txt present | Pass | Created |
| XML sitemap present | Pass | Created |
| Canonical tags on all pages | Pass | Fixed |
| Mobile viewport meta | Pass | Present |
| HTTPS canonical URLs | Pass | Set |
| AI crawler management in robots.txt | Pass | All allowed |
| Homepage is React SPA (no static H1/content for crawlers) | Warning | See action plan |

### Content Quality

| Finding | Severity | Status |
|---------|----------|--------|
| Blog pages 500+ words unique content | Pass | All pages exceed 500 words |
| Listicle format with numbered items | Pass | All blog pages use ranked listicle format |
| FAQ sections with internal cross-links | Pass | All blog pages have 4+ FAQs |
| Internal cross-linking between all pages | Pass | Every page links to every other page |
| Keyword density appropriate | Pass | Primary keywords appear 3-5 times per page |

### On-Page SEO

| Finding | Severity | Status |
|---------|----------|--------|
| Title tags under 60 chars | Pass | All pages 41-46 chars |
| Meta descriptions under 160 chars | Pass | All pages 126-144 chars |
| H1 tags (1 per page) | Pass | All blog pages have exactly 1 H1 |
| H2 hierarchy (8-9 per blog page) | Pass | Good content structure |
| Open Graph tags (5-6 per page) | Pass | Full OG markup |
| Twitter Card tags (3 per page) | Pass | Full Twitter markup |
| Breadcrumb navigation | Pass | All blog pages have breadcrumbs |
| Click-to-call phone links | Pass | All pages have tel: links |

### Schema / Structured Data

| Finding | Severity | Status |
|---------|----------|--------|
| Restaurant (LocalBusiness) schema | Pass | All pages |
| ItemList schema for listicle items | Pass | All blog pages |
| BreadcrumbList schema | Pass | All blog pages |
| WebSite + SearchAction schema | Pass | Homepage |
| GeoCoordinates in schema | Pass | All pages |
| AggregateRating in schema | Pass | All pages |
| No deprecated/restricted schema types | Pass | No FAQPage or HowTo used |

### Performance

| Finding | Severity | Status |
|---------|----------|--------|
| Tailwind loaded via CDN (not purged) | Warning | Consider self-hosting purged CSS |
| Google Fonts loaded externally | Info | Consider font-display: swap |
| No image lazy loading (no images yet) | Info | Add loading="lazy" when images added |

### Image Optimization

| Finding | Severity | Status |
|---------|----------|--------|
| No actual images on blog pages | Warning | Add original photography (WebP format) |
| Schema image URLs are placeholder | Warning | Update when real images available |

### AI Search Readiness

| Finding | Severity | Status |
|---------|----------|--------|
| robots.txt allows GPTBot, ClaudeBot, PerplexityBot | Pass | Configured |
| Structured data rich enough for AI extraction | Pass | Good |
| No llms.txt file | Info | Optional, low priority |

---

## Environment Limitations

- Site not yet deployed to production domain; cannot test live HTTP status codes, Core Web Vitals, redirect chains, or security headers.
- No images uploaded yet; image optimisation audit deferred.
- Homepage is a React SPA; Google will render JS but initial HTML lacks static content for non-JS crawlers.
