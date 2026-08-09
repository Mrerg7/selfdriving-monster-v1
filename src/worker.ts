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

export default {
  async fetch(request: Request, env: Env): Promise<Response> {
    const url = new URL(request.url);
    const host = url.hostname.toLowerCase();
    const isWww = host === `www.${CANONICAL_HOST}`;
    const isHttp = url.protocol === 'http:';

    if (isWww || isHttp) {
      url.protocol = 'https:';
      url.hostname = CANONICAL_HOST;
      return Response.redirect(url.toString(), 301);
    }

    return env.ASSETS.fetch(request);
  },
};
