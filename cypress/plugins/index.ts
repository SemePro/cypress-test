import * as path from 'path';
import * as fs from 'fs-extra';

export default (on: Cypress.PluginEvents, config: Cypress.PluginConfigOptions) => {
  const file = config.env.configFile || 'dev';
  
  const pathToConfigFile = path.resolve('cypress', 'config', `${file}.json`);

  return fs.readJson(pathToConfigFile).then((envConfig: any) => {
    // Merge the loaded configuration with the existing config
    const mergedConfig = { ...config, ...envConfig };

    // Explicitly disable Backtrace if not configured
    if (!mergedConfig.env.BACKTRACE_ENABLE) {
      mergedConfig.env.BACKTRACE_ENABLE = 'false';
      mergedConfig.env.BACKTRACE_TOKEN = '';
      mergedConfig.env.BACKTRACE_URL = '';
    }

    // Add any other global configurations here

    return mergedConfig;
  });
};