// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   reactStrictMode: true,
// }

// module.exports = nextConfig

const withNextra = require('nextra')({
  theme: 'nextra-theme-blog',
  themeConfig: './theme.config.jsx'
})

module.exports = withNextra(
  {
    i18n: {
      locales: ['en-US'],
      defaultLocale: 'en-US'
    },
    reactStrictMode: true,
    images: {
      domains: ['images.unsplash.com']
    }
  },
)

