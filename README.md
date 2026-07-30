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
- `script.js`: navigation, animations and FAQ interactions
- `assets/`: approved brand imagery supplied for the preview
- `sitemap.xml` and `robots.txt`: search-engine discovery
- JSON-LD in `index.html`: local business and studio structured data

## Preview URL

After GitHub Pages is enabled from the `main` branch root:

`https://shukritobi.github.io/core-centric-pilates/`

GitHub: **Settings → Pages → Deploy from a branch → main / root**.

## Production recommendations

1. Replace screenshot-derived preview crops with the original high-resolution Instagram and Rezerv assets.
2. Move the canonical URL and sitemap to the final custom domain.
3. Add verified opening hours, instructor profiles, policies and genuine customer reviews.
4. Create dedicated local SEO pages only when there is enough unique content, for example Reformer Pilates Kota Kemuning and Beginner Pilates Shah Alam.
5. Track clicks to Rezerv, WhatsApp and Google Maps using GA4 or a privacy-friendly analytics tool.
