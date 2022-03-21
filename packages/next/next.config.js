const { withExpo } = require('@expo/next-adapter')
const withPlugins = require('next-compose-plugins')
const nextTranslate = require('next-translate')
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true'
})
const withTM = require('next-transpile-modules')([
  'app',
  'locale',
  'expo-next-translation'
])

const nextConfig = {}

module.exports = withPlugins(
  [
    withTM,
    nextTranslate,
    withBundleAnalyzer,
    [withExpo, { projectRoot: __dirname + '/../..' }]
  ],
  nextConfig
)
