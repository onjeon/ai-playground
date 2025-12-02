const createNextIntlPlugin = require('next-intl/plugin');

const withNextIntl = createNextIntlPlugin('./src/i18n/request.ts');

/** @type {import('next').NextConfig} */
const nextConfig = {
  // 이미지 도메인 설정 (필요시)
  images: {
    domains: [],
  },
};

module.exports = withNextIntl(nextConfig);
