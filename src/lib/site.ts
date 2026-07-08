export const SITE = {
  name: 'selfdriving.monster',
  title: 'selfdriving.monster — The Future of Driving, Explained',
  description:
    'The premier source for accurate, up-to-date information on self-driving vehicles. Tesla FSD, Cybercab Robotaxi, Waymo, industrial autonomy in mining & warehouses, and realistic timelines for when we stop driving. Data as of July 2026.',
  url: 'https://selfdriving.monster',
  locale: 'en_US',
  twitter: '@selfdrivingmonster',
  acquisitionEmail: 'sales@desertrich.com',
  dataAsOf: 'July 2026',
  keywords: [
    'self-driving',
    'autonomous vehicles',
    'Tesla FSD',
    'Cybercab',
    'Robotaxi',
    'Waymo',
    'autonomous mining',
    'autonomous forklifts',
    'SAE levels',
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
