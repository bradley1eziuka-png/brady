import { CalendarDays, Home, Images, PhoneCall } from "lucide-react";

import { SectionHeading } from "./section-heading";

const REASONS = [
  {
    icon: PhoneCall,
    title: "Direct Communication",
    description: "Call Brady directly to discuss your property and what needs to be done.",
  },
  {
    icon: Home,
    title: "Residential Focus",
    description: "Lawn care and seasonal services designed around homeowners' needs.",
  },
  {
    icon: CalendarDays,
    title: "Year-Round Services",
    description: "Lawn care during the growing season and snow removal during the winter.",
  },
  {
    icon: Images,
    title: "Real Work, Real Results",
    description: "View actual project photographs from Brady's Lawn Service.",
  },
];

export function WhyChooseUs() {
  return (
    <section id="why-choose-us" className="section-pad scroll-mt-24 bg-secondary/40">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="Why Choose Brady's"
          title="Straightforward Lawn Care. No Complications."
          description="Simple, dependable service for homeowners in the Quad Cities area."
        />

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
          {REASONS.map((reason) => {
            const Icon = reason.icon;
            return (
              <div
                key={reason.title}
                className="group flex flex-col rounded-2xl border border-border bg-card p-7 shadow-[0_2px_20px_-14px_rgba(0,0,0,0.14)] transition-all duration-300 hover:-translate-y-1 hover:border-accent/40 hover:shadow-[0_20px_45px_-22px_rgba(0,0,0,0.25)]"
              >
                <span className="flex size-12 items-center justify-center rounded-xl bg-primary text-[#9bdc78] shadow-sm transition-colors group-hover:bg-accent group-hover:text-white">
                  <Icon className="size-6" />
                </span>
                <h3 className="mt-5 font-display text-lg font-semibold tracking-tight text-primary">
                  {reason.title}
                </h3>
                <p className="mt-3 text-[0.9rem] leading-relaxed text-muted-foreground">
                  {reason.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
