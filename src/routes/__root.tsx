import {
  createRootRoute,
  Outlet,
} from "@tanstack/react-router";

const RootRoute = () => {
  return <Outlet />;
};

export const Route = createRootRoute({
  component: RootRoute,
});
