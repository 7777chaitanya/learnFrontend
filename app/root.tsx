import { Outlet, Scripts, ScrollRestoration } from "react-router";
import "./input.css";

export function Layout() {
  return (
    <html lang="en">
      <head>
        <link href="/output.css" rel="stylesheet"></link>
      </head>
      <body>
        <Outlet />
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export function HydrateFallback() {
  return <div>Loading...</div>;
}

export default function Root() {
  return <h1>Hello, world!</h1>;
}

export function ErrorBoundary() {
  return <h1>Something went wrong</h1>;
}
