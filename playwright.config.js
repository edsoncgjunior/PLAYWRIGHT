const config = {
  use: {
    baseURL: 'https://react-redux.realworld.io',
    browserName: 'webkit',
    headless: false,
    viewport: { width: 1280, height: 720 },
    launchOptions: {
      slowMo: 50,
    },
    screenshot: 'only-on-failure',
    video: 'on',
    trace: 'on',
  },
  testDir: 'tests',
  retries: 2,
  timeout: 60000,
  // workers: 1, // To disable Parallelism 
  workers: 4 // Parallelism | To limit the number of worker processes to 4
}

module.exports = config