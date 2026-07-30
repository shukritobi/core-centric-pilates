# Core Centric Pilates & Fitness

A conversion-focused static website preview for Core Centric Pilates & Fitness, Kota Kemuning.

## Recommended architecture

This preview uses a **static-first website + Rezerv as the booking engine**:

- The website handles brand presentation, local SEO, first-class education, FAQs and conversion.
- Rezerv remains the source of truth for live schedules, package prices, member accounts and payments.
- WhatsApp handles private-session enquiries and pre-booking questions.
- GitHub Pages hosts the preview with no server or database maintenance.

This avoids duplicated prices, out-of-sync schedules and insecure payment handling on the marketing site.

## Pages

- `index.html`: main marketing website
- `booking.html`: booking hand-off page
- `styles.css`: complete responsive design system
- `visuals.css`: lightweight self-contained preview artwork
- `script.js`: navigation, animations and FAQ interactions
- `assets/logo.svg`: Core Centric brand logo extracted from the client-supplied reference
- `sitemap.xml` and `robots.txt`: search-engine discovery
- JSON-LD in `index.html`: local business and studio structured data

## Preview URL

The repository includes a GitHub Actions deployment workflow. Once GitHub Pages accepts the first deployment, the preview is available at:

`https://shukritobi.github.io/core-centric-pilates/`

If the first workflow requests setup, open **Settings → Pages → Source → GitHub Actions**, then run the workflow again from the Actions tab.

## Production recommendations

1. Replace the self-contained preview artwork with the original high-resolution Instagram and Rezerv photography.
2. Move the canonical URL and sitemap to the final custom domain.
3. Add verified opening hours, instructor profiles, policies and genuine customer reviews.
4. Create dedicated local SEO pages only when there is enough unique content, for example Reformer Pilates Kota Kemuning and Beginner Pilates Shah Alam.
5. Track clicks to Rezerv, WhatsApp and Google Maps using GA4 or a privacy-friendly analytics tool.
