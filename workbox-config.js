module.exports = {
  globDirectory: 'public/',
  globPatterns: [
    '**/*.{html,svg,ico,json,js,css}'
  ],
  swDest: 'public/sw.js',
  swSrc: "src/sw.js",
  globIgnores: [
    "**/node_modules/**/*",
  ]
};