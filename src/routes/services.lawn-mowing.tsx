import { createFileRoute, notFound } from "@tanstack/react-router";

import { SiteLayout } from "@/components/site/site-layout";
import { ServicePage } from "@/components/site/service-page";
import { isServiceEnabled, SERVICES } from "@/lib/services-data";
import { BUSINESS_NAME } from "@/lib/site-config";
import { pageHead } from "@/lib/seo";

const service = SERVICES.lawnMowing;

export const Route = createFileRoute("/services/lawn-mowing")({
  // Services removed from site.config.json → services.enabled return a 404.
  beforeLoad: () => {
    if (!isServiceEnabled("lawnMowing")) throw notFound();
  },
  head: () =>
    pageHead({
      title: `${service.title} | Quad Cities | ${BUSINESS_NAME}`,
      description: service.shortDescription,
      path: service.path,
      image: service.heroImage ?? undefined,
    }),
  component: LawnMowingPage,
});

function LawnMowingPage() {
  return (
    <SiteLayout>
      <ServicePage service={service} />
    </SiteLayout>
  );
}
