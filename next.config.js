const { imageConfigDefault } = require("next/dist/shared/lib/image-config");

const withNextra = require("nextra")({
    theme: "nextra-theme-blog",
    themeConfig: "./theme.config.jsx",
});

module.exports = withNextra({
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'via.placeholder.com'
            },
        ],
    },
    reactStrictMode: true,
});
