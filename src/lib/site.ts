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
} as const;

/**
 * Build a Cloudflare Images CDN URL.
 * @see https://developers.cloudflare.com/images/transform-images/
 */
export function cfImage(
  imageId: string,
  variantOrOptions: string | Record<string, string | number> = 'public',
): string {
  const base = `https://imagedelivery.net/${CF_IMAGES.accountHash}/${imageId}`;
  if (typeof variantOrOptions === 'string') {
    return `${base}/${variantOrOptions}`;
  }
  const params = Object.entries(variantOrOptions)
    .map(([k, v]) => `${k}=${v}`)
    .join(',');
  return `${base}/${params}`;
}

export const HERO_IMAGE = cfImage(CF_IMAGES.heroId, 'public');
export const OG_IMAGE = cfImage(CF_IMAGES.heroId, {
  width: 1200,
  height: 630,
  fit: 'cover',
  format: 'auto',
  quality: 85,
});
