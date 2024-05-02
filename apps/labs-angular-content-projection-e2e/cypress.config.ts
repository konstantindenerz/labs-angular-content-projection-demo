import { nxE2EPreset } from '@nx/cypress/plugins/cypress-preset';

import { defineConfig } from 'cypress';

export default defineConfig({
  e2e: {
    ...nxE2EPreset(__filename, {
      cypressDir: 'src',
      webServerCommands: {
        default: 'nx run labs-angular-content-projection:serve:development',
        production: 'nx run labs-angular-content-projection:serve:production',
      },
      ciWebServerCommand: 'nx run labs-angular-content-projection:serve-static',
    }),
    baseUrl: 'http://localhost:4200',
  },
});