import { createFileRoute, notFound } from "@tanstack/react-router";

import { SiteLayout } from "@/components/site/site-layout";
import { ServicePage } from "@/components/site/service-page";
import { isServiceEnabled, SERVICES } from "@/lib/services-data";
import { BUSINESS_NAME } from "@/lib/site-config";
import { pageHead } from "@/lib/seo";

const service = SERVICES.brushRemoval;

export const Route = createFileRoute("/services/brush-branch-removal")({
  // Services removed from site.config.json → services.enabled return a 404.
  beforeLoad: () => {
    if (!isServiceEnabled("brushRemoval")) throw notFound();
  },
  head: () =>
    pageHead({
      title: `${service.title} | Quad Cities | ${BUSINESS_NAME}`,
      description: service.shortDescription,
      path: service.path,
      image: service.heroImage ?? undefined,
    }),
  component: BrushRemovalPage,
});

function BrushRemovalPage() {
  return (
    <SiteLayout>
      <ServicePage service={service} />
    </SiteLayout>
  );
}
