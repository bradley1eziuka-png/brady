import { createFileRoute } from "@tanstack/react-router";

import { SiteLayout } from "@/components/site/site-layout";
import { Hero } from "@/components/site/hero";
import { Services } from "@/components/site/services";
import { WhyChooseUs } from "@/components/site/why-choose-us";
import { Gallery } from "@/components/site/gallery";
import { Process } from "@/components/site/process";
import { Trust } from "@/components/site/trust";
import { Faq } from "@/components/site/faq";
import { FinalCta } from "@/components/site/final-cta";
import { ContactSection } from "@/components/site/contact-section";
import { Testimonials } from "@/components/site/testimonials";
import { HOME_DESCRIPTION, HOME_TITLE, pageHead } from "@/lib/seo";

export const Route = createFileRoute("/")({
  head: () => pageHead({ title: HOME_TITLE, description: HOME_DESCRIPTION, path: "/" }),
  component: Index,
});

function Index() {
  return (
    <SiteLayout>
      <Hero />
      <Services />
      <WhyChooseUs />
      <Gallery />
      <Process />
      <Trust />
      <Testimonials />
      <Faq />
      <FinalCta />
      <ContactSection />
    </SiteLayout>
  );
}
