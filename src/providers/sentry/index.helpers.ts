import {
  browserTracingIntegration,
  feedbackIntegration,
  init,
  replayIntegration,
  tanstackRouterBrowserTracingIntegration,
} from "@sentry/react";

import { config } from "@/consts/config";

function initSentry(router: unknown) {
  if (!config.sentryDsn) {
    return;
  }

  init({
    enabled: config.mode === "production",
    dsn: config.sentryDsn,
    dataCollection: {},
    integrations: [
      browserTracingIntegration(),
      replayIntegration(),
      feedbackIntegration({
        colorScheme: "system",
      }),
      tanstackRouterBrowserTracingIntegration(router),
    ],
    enableLogs: true,
    tracesSampleRate: 1.0,
    tracePropagationTargets: [/^\//],
    replaysSessionSampleRate: 0.1,
    replaysOnErrorSampleRate: 1.0,
  });
}

export { initSentry };
