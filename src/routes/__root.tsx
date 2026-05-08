import { Outlet, Link, createRootRoute, HeadContent, Scripts } from "@tanstack/react-router";

import appCss from "../styles.css?url";
import { RFQProvider } from "@/lib/rfq";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { RFQDrawer } from "@/components/RFQDrawer";

const DESCRIPTION =
  "CRYSTAL is a tech-enabled B2B procurement platform for cleaning, housekeeping, stationery and facility supplies. Fast quotations, recurring supply, GST-compliant — Hyderabad.";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <p className="font-mono text-xs uppercase tracking-[0.3em] text-muted-foreground">Error 404</p>
        <h1 className="mt-3 text-6xl font-semibold text-gradient">Off the grid</h1>
        <p className="mt-4 text-sm text-muted-foreground">
          The page you're looking for has been moved or doesn't exist.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-full bg-foreground px-5 py-2.5 text-sm font-medium text-background transition hover:opacity-90"
          >
            Back to home
          </Link>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "CRYSTAL — Procurement Infrastructure for Modern Businesses" },
      { name: "description", content: DESCRIPTION },
      { name: "author", content: "CRYSTAL" },
      { property: "og:title", content: "CRYSTAL — Procurement. Simplified." },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "CRYSTAL — Procurement. Simplified." },
      { name: "twitter:description", content: DESCRIPTION },
    ],
    links: [{ rel: "stylesheet", href: appCss }],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  return (
    <RFQProvider>
      <div className="flex min-h-screen flex-col">
        <Header />
        <main className="flex-1">
          <Outlet />
        </main>
        <Footer />
      </div>
      <RFQDrawer />
    </RFQProvider>
  );
}
