import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { appRoutes } from './app.routes';
import { FOO_TOKEN } from './foo.token';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(appRoutes),{ provide: FOO_TOKEN, useValue: '🔥' }],
};
