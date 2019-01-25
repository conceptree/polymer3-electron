module.exports = {
  staticFileGlobs: [
    './manifest.json',
    './images/*',
    './src/**/*',
  ],
  stripPrefix: './src/',
  runtimeCaching: [
    {
      urlPattern: /\/@webcomponents\/webcomponentsjs\//,
      handler: 'fastest'
    },
    {
      urlPattern: /\/data\//,
      handler: 'fastest'
    }
  ]
};
