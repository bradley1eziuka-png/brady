import { createFileRoute, notFound } from "@tanstack/react-router";

import { SiteLayout } from "@/components/site/site-layout";
import { ServicePage } from "@/components/site/service-page";
import { isServiceEnabled, SERVICES } from "@/lib/services-data";
import { BUSINESS_NAME } from "@/lib/site-config";
import { pageHead } from "@/lib/seo";

const service = SERVICES.yardCleanup;

export const Route = createFileRoute("/services/yard-cleanups")({
  // Services removed from site.config.json → services.enabled return a 404.
  beforeLoad: () => {
    if (!isServiceEnabled("yardCleanup")) throw notFound();
  },
  head: () =>
    pageHead({
      title: `${service.title} | Quad Cities | ${BUSINESS_NAME}`,
      description: service.shortDescription,
      path: service.path,
      image: service.heroImage ?? undefined,
    }),
  component: YardCleanupsPage,
});

function YardCleanupsPage() {
  return (
    <SiteLayout>
      <ServicePage service={service} />
    </SiteLayout>
  );
}
