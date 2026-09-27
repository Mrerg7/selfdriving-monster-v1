/**
 * Canonical host enforcement for static assets.
 * Runs before assets (run_worker_first) so www/http variants 301 to the apex HTTPS URL
 * instead of serving duplicate HTML that only differs by Host — which GSC reports as
 * "Alternate page with proper canonical tag".
 */
const CANONICAL_HOST = 'selfdriving.monster';

interface Env {
  ASSETS: Fetcher;
}

const SECURITY_HEADERS: Record<string, string> = {
  'X-Content-Type-Options': 'nosniff',
  'X-Frame-Options': 'DENY',
  'Referrer-Policy': 'strict-origin-when-cross-origin',
  'Permissions-Policy': 'camera=(), microphone=(), geolocation=()',
  'Strict-Transport-Security': 'max-age=31536000; includeSubDomains; preload',
};

export default {
  async fetch(request: Request, env: Env): Promise<Response> {
    const url = new URL(request.url);
    const host = url.hostname.toLowerCase();
    const isWww = host === `www.${CANONICAL_HOST}`;
    const isHttp = url.protocol === 'http:';

    if (isWww || isHttp) {
      url.protocol = 'https:';
      url.hostname = CANONICAL_HOST;
      return new Response(null, {
        status: 301,
        headers: {
          Location: url.toString(),
          'Cache-Control': 'public, max-age=86400',
          ...SECURITY_HEADERS,
        },
      });
    }

    const response = await env.ASSETS.fetch(request);
    const headers = new Headers(response.headers);
    for (const [key, value] of Object.entries(SECURITY_HEADERS)) {
      headers.set(key, value);
    }
    return new Response(response.body, {
      status: response.status,
      statusText: response.statusText,
      headers,
    });
  },
};
