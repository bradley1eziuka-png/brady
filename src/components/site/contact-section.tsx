import { ArrowRight, MapPin, Phone } from "lucide-react";

import { BUSINESS_PHONE, BUSINESS_PHONE_TEL } from "@/lib/site-config";
import { SectionHeading } from "./section-heading";
import { ctaButton } from "./buttons";

// The homepage "Contact" section — a confident call-to-call block that points
// to the estimate form in the hero. The form itself lives in the hero so the
// page never shows two identical forms.
export function ContactSection() {
  return (
    <section id="contact" className="section-pad scroll-mt-24 bg-background">
      <div className="mx-auto max-w-4xl px-6 text-center">
        <SectionHeading
          eyebrow="Contact"
          title="Let's Talk About Your Yard"
          description="Call Brady or send a few details about your property to get a free estimate."
        />

        <div className="mx-auto mt-10 max-w-lg rounded-2xl border border-border bg-secondary/50 p-8 shadow-[0_2px_20px_-14px_rgba(0,0,0,0.14)]">
          <p className="text-sm font-medium uppercase tracking-[0.16em] text-muted-foreground">
            Prefer to talk it through?
          </p>
          <a
            href={BUSINESS_PHONE_TEL}
            className="mt-3 flex items-center justify-center gap-3 font-display text-3xl font-semibold tracking-tight text-primary transition-colors hover:text-accent"
          >
            <Phone className="size-7 text-accent" />
            {BUSINESS_PHONE}
          </a>
          <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
            Call Brady directly to talk through your property and what needs to be done.
          </p>
        </div>

        <div className="mx-auto mt-6 flex max-w-lg flex-col items-center gap-1 text-center">
          <p className="flex items-center gap-2 font-display text-lg font-semibold tracking-tight text-primary">
            <MapPin className="size-5 text-accent" />
            Serving the Quad Cities Area
          </p>
          <p className="text-sm leading-relaxed text-muted-foreground">
            Not sure if your address is covered? Give Brady a call to confirm.
          </p>
        </div>

        <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <a href="/#estimate" className={ctaButton({ variant: "gold", size: "lg" })}>
            Get a Free Estimate
            <ArrowRight className="size-4" />
          </a>
          <a href={BUSINESS_PHONE_TEL} className={ctaButton({ variant: "solid", size: "lg" })}>
            <Phone className="size-4" />
            Call Brady
          </a>
        </div>
      </div>
    </section>
  );
}
