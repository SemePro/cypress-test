import { defineConfig } from 'cypress';

export default defineConfig({
  e2e: {
    baseUrl: 'https://www.saucedemo.com',
    specPattern: 'cypress/tests/**/*.{js,jsx,ts,tsx}',
    setupNodeEvents(on, config) {
      // Environment-specific configurations
      const envSettings = {
        dev: {
          BACKTRACE_ENABLE: 'false',
          BACKTRACE_TOKEN: '',
          BACKTRACE_URL: ''
        },
        prod: {
          BACKTRACE_ENABLE: 'true',
          BACKTRACE_TOKEN: process.env.BACKTRACE_TOKEN || '',
          BACKTRACE_URL: process.env.BACKTRACE_URL || ''
        }
      };

      const currentEnv = config.env.configEnv || 'dev';
      config.env = { ...config.env, ...envSettings[currentEnv] };
      return config;
    }
  },
  video: false,
  screenshotOnRunFailure: true,
});
