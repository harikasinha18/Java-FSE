import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import {
  provideHttpClient,
  withInterceptors
} from '@angular/common/http';

import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { authInterceptor } from './interceptors/auth-interceptor';
import { errorHandlerInterceptor } from './interceptors/error-handler-interceptor';
import { loadingInterceptor } from './interceptors/loading-interceptor';
import { provideStore } from '@ngrx/store';
import { courseReducer } from './store/reducers/course.reducer';
import { provideEffects } from '@ngrx/effects';
import { CourseEffects } from './store/effects/course.effects';

export const appConfig: ApplicationConfig = {
  providers: [
  provideRouter(routes),
  provideHttpClient(
    withInterceptors([
      authInterceptor,
      errorHandlerInterceptor,
      loadingInterceptor
    ])
  ),
  provideStore({
    courses: courseReducer
  }),
  provideEffects([CourseEffects])
]
};