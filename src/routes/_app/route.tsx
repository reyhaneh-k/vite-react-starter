import { createFileRoute } from "@tanstack/react-router";

import { RootLayout } from "@/layout/rootLayout/RootLayout";

export const Route = createFileRoute("/_app")({
  component: RootLayout,
});
