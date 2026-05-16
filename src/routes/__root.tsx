import { Outlet, Link, createRootRoute, HeadContent, Scripts } from "@tanstack/react-router";

import appCss from "../styles.css?url";
import { RFQProvider } from "@/lib/rfq";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { RFQDrawer } from "@/components/RFQDrawer";
import { StickyCTA } from "@/components/StickyCTA";
import { SITE } from "@/lib/site";

const DESCRIPTION =
  "Crystal Clean Solutions is a B2B workplace hygiene procurement partner for IT offices and corporates in Hyderabad — washroom consumables, cleaning chemicals, pantry supplies and recurring procurement.";

const ORG_JSON_LD = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: SITE.name,
  description: DESCRIPTION,
  telephone: `+${SITE.phoneRaw}`,
  email: SITE.email,
  url: "https://crystalcleansolutions.lovable.app",
  address: {
    "@type": "PostalAddress",
    streetAddress: "37, Sitaram Nagar Colony, Diamond Point Rd, Sikh Village",
    addressLocality: "Secunderabad",
    addressRegion: "Telangana",
    postalCode: "500009",
    addressCountry: "IN",
  },
  areaServed: SITE.city,
  taxID: SITE.gstin,
};

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <p className="font-mono text-xs uppercase tracking-[0.3em] text-muted-foreground">Error 404</p>
        <h1 className="mt-3 text-6xl font-semibold text-gradient">Page not found</h1>
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
      { title: "Crystal Clean Solutions — B2B Workplace Hygiene Procurement, Hyderabad" },
      { name: "description", content: DESCRIPTION },
      { name: "author", content: SITE.name },
      { property: "og:site_name", content: SITE.name },
      { property: "og:title", content: "Crystal Clean Solutions — Workplace Hygiene Procurement" },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Crystal Clean Solutions — Workplace Hygiene Procurement" },
      { name: "twitter:description", content: DESCRIPTION },
    ],
    links: [{ rel: "stylesheet", href: appCss }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(ORG_JSON_LD),
      },
    ],
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
      <StickyCTA />
    </RFQProvider>
  );
}
