const withTM = require('next-transpile-modules')(['react-haiku']); // pass the modules you would like to see transpiled

module.exports = withTM({
  env: {
    // NEXT_PUBLIC_GOOGLE_ANALYTICS: process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS,
    // GRAPHCMS_API: process.env.GRAPHCMS_API,
    // STRIPE_PUBLIC_KEY: process.env.STRIPE_PUBLIC_KEY,
    // STRIPE_SECRET_KEY: process.env.STRIPE_SECRET_KEY,
  },

  i18n: {
    locales: ['en', 'it'],
    defaultLocale: 'en',
  },

  // in case an image
  images: {
    domains: ['media.graphassets.com'],
  },
});
