module.exports = {
  browsers: ['chromium'],
  launchOptions: {
    headless: true,
  },
  contextOptions: {
    ignoreHTTPSErrors: true,
    viewport: {
      width: 1920,
      height: 1080,
    },
  },
  serverOptions: {
    command: 'yarn preview --port 8080',
    port: 8080,
    launchTimeout: 50000,
    debug: true,
  },
};
