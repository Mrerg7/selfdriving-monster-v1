export const SITE = {
  name: 'selfdriving.monster',
  title: 'selfdriving.monster — Pro-Tesla Guide to Self-Driving & Cybercab',
  description:
    'A pro-Tesla guide to Full Self-Driving, Cybercab, and the robotaxi future. Clear SAE levels, real fleet data, and why Tesla’s vision-only approach scales. Premium domain available. Data as of September 2026.',
  url: 'https://selfdriving.monster/',
  locale: 'en_US',
  twitter: '@selfdrivingmonster',
  acquisitionEmail: 'sales@desertrich.com',
  dataAsOf: 'September 2026',
  dateModified: '2026-09-27',
  keywords: [
    'Tesla FSD',
    'Tesla Full Self-Driving',
    'Cybercab',
    'Tesla Robotaxi',
    'self-driving Tesla',
    'autonomous vehicles',
    'vision-only autonomy',
    'SAE levels',
    'selfdriving.monster',
    'domain for sale',
    'Waymo vs Tesla',
    'future of driving',
  ],
} as const;

/** Cloudflare Images account hash + image ID helpers */
export const CF_IMAGES = {
  accountHash: '-sPAUAWeA405NiWJ0SNIQA',
  heroId: 'c0e2c472-d1d1-467c-b5ff-f6ca4e0e7400',
  faviconId: '20aae291-1f97-4771-466d-a237f15cd600',
  /** Named variant that is publicly allowed on this account */
  variant: 'public',
} as const;

/**
 * Build a Cloudflare Images CDN URL using a named variant.
 * Flexible on-the-fly transforms (width=...,fit=...) return 403 unless
 * Flexible Variants are enabled on the Cloudflare Images account.
 * @see https://developers.cloudflare.com/images/manage-images/create-variants/
 */
export function cfImage(
  imageId: string,
  variant: string = CF_IMAGES.variant,
): string {
  return `https://imagedelivery.net/${CF_IMAGES.accountHash}/${imageId}/${variant}`;
}

export const HERO_IMAGE = cfImage(CF_IMAGES.heroId);
export const FAVICON_IMAGE = cfImage(CF_IMAGES.faviconId);
/** Same public variant — flexible OG crop URLs are blocked (403) on this account */
export const OG_IMAGE = HERO_IMAGE;

export function mailtoAcquire(subject?: string, body?: string): string {
  const mailSubject = encodeURIComponent(
    subject ?? 'Inquiry: selfdriving.monster domain acquisition',
  );
  const mailBody = encodeURIComponent(
    body ??
      'Hello,\n\nI am interested in acquiring the selfdriving.monster domain. Please share availability and terms.\n\nThanks,',
  );
  return `mailto:${SITE.acquisitionEmail}?subject=${mailSubject}&body=${mailBody}`;
}

export const NAV_LINKS = [
  { href: '/#understanding', label: 'SAE Levels' },
  { href: '/tesla-fsd/', label: 'Tesla FSD' },
  { href: '/cybercab/', label: 'Cybercab' },
  { href: '/why-tesla/', label: 'Why Tesla' },
  { href: '/#timeline', label: 'Timeline' },
  { href: '/#faq', label: 'FAQ' },
] as const;
