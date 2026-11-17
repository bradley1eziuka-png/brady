// ───────────────────────────────────────────────────────────────────────────
// Default copy for Brady's Lawn Service (website mockup). Any field can be
// overridden in site.config.json → content. Do not add business facts that
// have not been confirmed: no founding year, years in business, license or
// insurance claims, ratings, reviews, or specific towns served.
// ───────────────────────────────────────────────────────────────────────────

export const DEFAULT_CONTENT = {
  hero: {
    eyebrow: "Residential Lawn Care & Snow Removal",
    tagline: "Great Service is ALWAYS in season!",
    subheadline:
      "Lawn mowing, seasonal cleanups, brush removal, and property maintenance for homeowners throughout the Quad Cities area.",
  },
  about: {
    eyebrow: "About Brady's",
    title: "Local Lawn Care. Personal Service.",
    body: "Brady's Lawn Service provides residential lawn care, seasonal cleanups, and snow removal in the Quad Cities area. Whether it's keeping up with the lawn, clearing fallen leaves, or tackling an overgrown yard, Brady offers a direct point of contact for homeowners looking to get their outdoor spaces taken care of.",
    badgeTitle: "Year-Round",
    badgeText: "lawn care & snow removal",
  },
  faqs: [
    {
      q: "How do I get started?",
      a: "Call Brady at (563) 570-8635 or send a request with the form on this page. Share what you need done and where the property is, and you'll get a direct response.",
    },
    {
      q: "Can I request a free estimate?",
      a: "Yes. Use the estimate form or give Brady a call to talk through your property and what needs to be done.",
    },
    {
      q: "What services are offered?",
      a: "Lawn mowing and maintenance, leaf removal, brush and branch removal, yard cleanups, shrub and hedge trimming, and snow removal for residential properties.",
    },
    {
      q: "Is snow removal available?",
      a: "Yes. Brady's Lawn Service offers seasonal snow removal for residential properties. Call to talk about what you need.",
    },
    {
      q: "What area is served?",
      a: "Brady's Lawn Service serves the Quad Cities area. Call or send your address with the estimate form to confirm your location.",
    },
  ],
  footerBlurb:
    "QC residential lawn care and snow removal. Lawn mowing, seasonal cleanups, and yard maintenance for homeowners in the Quad Cities area.",
  finalCta: {
    title: "Ready to Get Your Yard Taken Care Of?",
    body: "Call Brady or request a free estimate to talk through your property and what needs to be done.",
  },
  seo: {
    description:
      "Brady's Lawn Service provides residential lawn care, leaf removal, yard cleanup, and snow removal in the Quad Cities area. Call (563) 570-8635.",
  },
} as const;

const W = "/images/work";

export const DEFAULT_IMAGES = {
  hero: `${W}/lawn-mowed-front-yard.webp`,
  about: `${W}/truck-trailer-leaf-load.webp`,
  lawnFront: `${W}/lawn-mowed-front-yard.webp`,
  yardGarage: `${W}/residential-yard-garage.webp`,
  leafStreet: `${W}/leaf-piles-trailer-street.webp`,
  leavesHillside: `${W}/fall-leaves-hillside-yard.webp`,
  trimmingsTrailer: `${W}/branch-trimmings-trailer-driveway.webp`,
  brushTrailer: `${W}/brush-load-on-trailer.webp`,
  sideYardLeaves: `${W}/side-yard-leaves-vines.webp`,
  brushPile: `${W}/brush-pile-fence-line.webp`,
  brushPileSide: `${W}/brush-pile-side-yard.webp`,
  hedgeLadder: `${W}/hedge-trimming-ladder.webp`,
} as const;

// Intrinsic pixel sizes of the optimized files, so <img> tags can reserve
// space and avoid layout shift.
export const IMAGE_SIZES: Record<string, readonly [number, number]> = {
  [`${W}/lawn-mowed-front-yard.webp`]: [1600, 1200],
  [`${W}/truck-trailer-leaf-load.webp`]: [1050, 1400],
  [`${W}/residential-yard-garage.webp`]: [1400, 1050],
  [`${W}/leaf-piles-trailer-street.webp`]: [1050, 1400],
  [`${W}/fall-leaves-hillside-yard.webp`]: [1050, 1400],
  [`${W}/branch-trimmings-trailer-driveway.webp`]: [1400, 1050],
  [`${W}/brush-load-on-trailer.webp`]: [1400, 1050],
  [`${W}/side-yard-leaves-vines.webp`]: [1131, 848],
  [`${W}/brush-pile-fence-line.webp`]: [848, 1131],
  [`${W}/brush-pile-side-yard.webp`]: [1131, 848],
  [`${W}/hedge-trimming-ladder.webp`]: [763, 572],
};
