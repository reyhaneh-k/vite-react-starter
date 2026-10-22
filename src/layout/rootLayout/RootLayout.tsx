import { Outlet } from "@tanstack/react-router";

function RootLayout() {
  return (
    <div className="bg-canvas text-ink min-h-dvh">
      <Outlet />
    </div>
  );
}

export { RootLayout };
