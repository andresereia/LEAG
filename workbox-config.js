module.exports = {
  globDirectory: 'dist/',
  globPatterns: ['**/*.{html,js,css,png,jpg,svg,webp,gif}'],
  swDest: 'dist/service-worker.js',

  runtimeCaching: [
    {
      urlPattern: /\.(js|css|html)$/,
      handler: 'CacheFirst',
      options: { cacheName: 'core-assets' },
    },
    {
      urlPattern: /\.(png|jpg|jpeg|svg|webp|gif)$/,
      handler: 'StaleWhileRevalidate',
      options: { cacheName: 'images-cache', expiration: { maxEntries: 50 }},
    }
  ],
};
