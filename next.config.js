/**
 * @type {import('next').NextConfig}
 */
const withTM = require('next-transpile-modules')(['three']);

const nextConfig = withTM({webpack5: true});

module.exports = nextConfig;
