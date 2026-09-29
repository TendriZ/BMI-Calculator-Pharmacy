import type { NextConfig } from "next";

const securityHeaders = [
  // Prevent MIME-type sniffing (stops browser from interpreting files as a different MIME type)
  { key: 'X-Content-Type-Options', value: 'nosniff' },
  // Prevent clickjacking by disallowing the site from being embedded in iframes
  { key: 'X-Frame-Options', value: 'DENY' },
  // Enable browser XSS filter as a safety net
  { key: 'X-XSS-Protection', value: '1; mode=block' },
  // Control Referer header — send origin only for cross-origin requests
  { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
  // Restrict browser features/APIs the site can access
  { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=(), payment=()' },
  // Enforce HTTPS for 1 year (includeSubDomains for full coverage)
  { key: 'Strict-Transport-Security', value: 'max-age=31536000; includeSubDomains' },
  // Content Security Policy — strict allowlist of resource origins
  {
    key: 'Content-Security-Policy',
    value: [
      "default-src 'self'",
      "script-src 'self' 'unsafe-inline' 'unsafe-eval'",         // Next.js requires unsafe-inline/eval for hydration
      "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
      "font-src 'self' https://fonts.gstatic.com",
      "img-src 'self' data: blob: https://i.ytimg.com",
      "media-src 'self'",
      "frame-src 'self' https://www.youtube.com https://www.youtube-nocookie.com",
      "connect-src 'self'",
      "frame-ancestors 'none'",                                   // Reinforces X-Frame-Options DENY
      "base-uri 'self'",
      "form-action 'self'",
      "object-src 'none'",                                        // Block Flash/Java applets
    ].join('; '),
  },
];

const nextConfig: NextConfig = {
  allowedDevOrigins: [
    '192.168.100.70',
    'localhost',
    '127.0.0.1',
  ],
  headers: async () => [
    {
      // Apply security headers to all routes
      source: '/(.*)',
      headers: securityHeaders,
    },
  ],
  // Disable the X-Powered-By header to avoid exposing Next.js version
  poweredByHeader: false,
};

export default nextConfig;
