import Vue from 'vue';
import * as Sentry from '@sentry/vue';
import { Integrations } from '@sentry/tracing';

import { version } from 'app/package.json';

if (process.env.PROD) {
  Sentry.init({
    Vue,
    dsn: process.env.SENTRY_DSN,
    integrations: [new Integrations.BrowserTracing()],
    autoSessionTracking: true,
    release: `v${version}`,
    environment: process.env.ENVIRONMENT,
    ignoreErrors: ['ResizeObserver loop limit exceeded'],
    tracesSampleRate: 1.0,
  });
}
