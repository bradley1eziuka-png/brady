// ───────────────────────────────────────────────────────────────────────────
// Service content for Brady's Lawn Service (website mockup).
//
// Every service page is generated from this single source of truth so all
// pages share one voice, layout, and visual system. Lawn care and snow
// removal are confirmed by Brady's business card; the individual service
// breakdown is a proposed offering list pending Brady's confirmation. No
// fertilization, pesticide, landscaping, irrigation, or tree removal services
// are described.
//
// To hide a service, remove its key from site.config.json → services.enabled.
// Its page then returns 404 and it disappears from the nav, footer, homepage,
// and form dropdown.
// ───────────────────────────────────────────────────────────────────────────

import { Leaf, Scissors, Snowflake, Sprout, Trash2, TreePine, type LucideIcon } from "lucide-react";

import { siteConfig, type ServiceKey } from "@/config";
import { IMAGES } from "./site-images";

export type ServiceStep = { number: string; title: string; description: string };
export type ServiceBenefit = { title: string; description: string };
export type ServiceFaq = { q: string; a: string };
export type GalleryItem = { src: string; alt: string; label: string };

export interface ServiceConfig {
  slug: string;
  path: string;
  title: string;
  eyebrow: string;
  shortDescription: string;
  explanation: { title: string; body: string };
  benefits: ServiceBenefit[];
  process: ServiceStep[];
  gallery: GalleryItem[];
  faqs: ServiceFaq[];
  // null = no real photo yet; the page shows a branded panel instead.
  heroImage: string | null;
  heroAlt: string;
  icon: LucideIcon;
}

// Real project photo descriptions, reused wherever a photo appears.
export const ALT = {
  lawnFront:
    "A freshly mowed residential lawn in front of a small blue house with trees in the background",
  yardGarage:
    "A residential backyard with a paved path, mature trees, and a detached garage behind a chain-link fence",
  leafStreet:
    "Large piles of fall leaves on tarps along a brick street, with a trailer loaded with leaves behind them",
  leavesHillside: "Fall leaves covering a sloped residential yard beside a sidewalk and steps",
  trimmingsTrailer:
    "A trailer loaded with green branch trimmings in a residential driveway beside a pickup truck and trash can",
  brushTrailer:
    "A trailer hauling a large load of branches and yard brush on a residential street behind an SUV",
  sideYardLeaves:
    "A residential side yard with grass, scattered leaves, and overgrown vines along a fence",
  brushPile: "A pile of cut branches and brush along a fence line in a residential side yard",
  brushPileSide: "A pile of dry brush and branches in a residential side yard next to a house",
  hedgeLadder: "A tall, overgrown hedge along a chain-link fence with a ladder leaning against it",
  truckLeafLoad:
    "A pickup truck parked beside a trailer loaded with fall leaves on a residential street",
} as const;

// The same simple three-step path applies to every service.
const SHARED_PROCESS: ServiceStep[] = [
  {
    number: "01",
    title: "Tell Brady What You Need",
    description: "Call or send a request with a few details about your property.",
  },
  {
    number: "02",
    title: "Talk Through the Details",
    description: "Go over what needs to be done and get a free estimate.",
  },
  {
    number: "03",
    title: "Get It Taken Care Of",
    description: "Once the details are settled, the work gets scheduled and done.",
  },
];

const ESTIMATE_FAQ: ServiceFaq = {
  q: "Can I get an estimate first?",
  a: "Yes. Call Brady at (563) 570-8635 or use the estimate form to talk through your property and what you need.",
};

const BASE_SERVICES = {
  lawnMowing: {
    slug: "lawn-mowing",
    path: "/services/lawn-mowing",
    title: "Lawn Mowing & Maintenance",
    eyebrow: "Lawn Mowing & Maintenance",
    shortDescription: "Routine residential lawn mowing and general yard upkeep.",
    explanation: {
      title: "A Well-Kept Lawn Makes the Whole Property Look Cared For",
      body: "Keeping up with the lawn takes time. Brady's Lawn Service offers routine mowing and general yard upkeep for homeowners in the Quad Cities area, so the yard stays neat through the growing season.",
    },
    benefits: [
      {
        title: "Routine Mowing",
        description: "Regular lawn mowing to keep your yard neat and under control.",
      },
      {
        title: "General Yard Upkeep",
        description: "Everyday maintenance that keeps the whole property tidy.",
      },
      {
        title: "A Direct Contact",
        description: "Talk to Brady directly about your lawn and what you need.",
      },
    ],
    process: SHARED_PROCESS,
    gallery: [
      { src: IMAGES.lawnFront, alt: ALT.lawnFront, label: "Residential Lawn" },
      { src: IMAGES.yardGarage, alt: ALT.yardGarage, label: "Residential Yard" },
    ],
    faqs: [
      {
        q: "How do I set up lawn mowing?",
        a: "Call Brady or send the estimate form with your address and a few details about your yard. You'll talk through what you need from there.",
      },
      ESTIMATE_FAQ,
    ],
    heroImage: IMAGES.yardGarage,
    heroAlt: ALT.yardGarage,
    icon: Sprout,
  },

  leafRemoval: {
    slug: "leaf-removal",
    path: "/services/leaf-removal",
    title: "Leaf Removal",
    eyebrow: "Leaf Removal",
    shortDescription: "Seasonal leaf clearing and cleanup to keep outdoor spaces tidy.",
    explanation: {
      title: "Clear the Fallen Leaves, Keep the Yard Tidy",
      body: "Every fall, leaves pile up across lawns, walkways, and steps. Brady's Lawn Service offers seasonal leaf clearing and cleanup so your outdoor spaces stay tidy without the weekend of raking.",
    },
    benefits: [
      {
        title: "Seasonal Cleanup",
        description: "Leaf clearing when it's needed most, through the fall.",
      },
      {
        title: "Tidy Outdoor Spaces",
        description: "Lawns, walkways, and steps cleared of fallen leaves.",
      },
      {
        title: "Hauled Away",
        description: "Brady's trailer is used to collect and haul leaves from the property.",
      },
    ],
    process: SHARED_PROCESS,
    gallery: [
      { src: IMAGES.leafStreet, alt: ALT.leafStreet, label: "Fall Leaf Cleanup" },
      { src: IMAGES.leavesHillside, alt: ALT.leavesHillside, label: "Seasonal Leaf Cleanup" },
    ],
    faqs: [
      {
        q: "When is leaf removal needed?",
        a: "Leaves fall mostly in autumn. Call Brady to talk about timing for your yard.",
      },
      ESTIMATE_FAQ,
    ],
    heroImage: IMAGES.leafStreet,
    heroAlt: ALT.leafStreet,
    icon: Leaf,
  },

  brushRemoval: {
    slug: "brush-branch-removal",
    path: "/services/brush-branch-removal",
    title: "Brush & Branch Removal",
    eyebrow: "Brush & Branch Removal",
    shortDescription: "Cleanup and removal of branches, brush, and accumulated yard debris.",
    explanation: {
      title: "Get Rid of the Branches and Brush",
      body: "Fallen branches and piles of brush can take over a yard quickly. Brady's Lawn Service offers cleanup and removal of branches, brush, and accumulated yard debris, loaded up and hauled away.",
    },
    benefits: [
      {
        title: "Branches & Brush",
        description: "Cleanup of cut branches, brush, and loose yard debris.",
      },
      {
        title: "Hauled Away",
        description: "Debris is loaded onto a trailer and taken off your property.",
      },
      {
        title: "Open, Usable Yard",
        description: "Clear the clutter so you can use your outdoor space again.",
      },
    ],
    process: SHARED_PROCESS,
    gallery: [
      { src: IMAGES.trimmingsTrailer, alt: ALT.trimmingsTrailer, label: "Brush & Branch Removal" },
      { src: IMAGES.brushTrailer, alt: ALT.brushTrailer, label: "Brush & Debris Removal" },
      { src: IMAGES.brushPile, alt: ALT.brushPile, label: "Brush Pile Cleanup" },
    ],
    faqs: [
      {
        q: "Can you haul away brush and branches?",
        a: "Brady's photos show brush and branches loaded onto a trailer for removal. Call to talk through your property and what needs to go.",
      },
      ESTIMATE_FAQ,
    ],
    heroImage: IMAGES.trimmingsTrailer,
    heroAlt: ALT.trimmingsTrailer,
    icon: TreePine,
  },

  yardCleanup: {
    slug: "yard-cleanups",
    path: "/services/yard-cleanups",
    title: "Yard Cleanups",
    eyebrow: "Yard Cleanups",
    shortDescription: "General property cleanups for overgrown or cluttered outdoor areas.",
    explanation: {
      title: "Take Back an Overgrown Yard",
      body: "When a yard gets overgrown or cluttered, it can be hard to know where to start. Brady's Lawn Service offers general property cleanups for homeowners who want their outdoor areas cleared and taken care of.",
    },
    benefits: [
      {
        title: "Overgrown Areas",
        description: "Cleanup help for yards that have gotten away from you.",
      },
      {
        title: "Debris Cleared",
        description: "Leaves, brush, and clutter cleared from the property.",
      },
      {
        title: "One Point of Contact",
        description: "Explain what you need directly to Brady.",
      },
    ],
    process: SHARED_PROCESS,
    gallery: [
      { src: IMAGES.sideYardLeaves, alt: ALT.sideYardLeaves, label: "Yard Cleanup" },
      { src: IMAGES.brushPileSide, alt: ALT.brushPileSide, label: "Seasonal Property Cleanup" },
    ],
    faqs: [
      {
        q: "What kinds of yards do you clean up?",
        a: "Residential yards that are overgrown or cluttered with leaves, brush, and debris. Call to describe your property.",
      },
      ESTIMATE_FAQ,
    ],
    heroImage: IMAGES.sideYardLeaves,
    heroAlt: ALT.sideYardLeaves,
    icon: Trash2,
  },

  shrubTrimming: {
    slug: "shrub-hedge-trimming",
    path: "/services/shrub-hedge-trimming",
    title: "Shrub & Hedge Trimming",
    eyebrow: "Shrub & Hedge Trimming",
    shortDescription: "Trimming and maintenance of shrubs, hedges, and overgrown vegetation.",
    explanation: {
      title: "Keep Hedges and Shrubs Under Control",
      body: "Hedges and shrubs can grow past fences, walkways, and windows if they aren't kept up. Brady's Lawn Service offers trimming and maintenance of shrubs, hedges, and overgrown vegetation for residential properties.",
    },
    benefits: [
      {
        title: "Shrubs & Hedges",
        description: "Trimming that helps keep plantings in check.",
      },
      {
        title: "Overgrown Vegetation",
        description: "Help cutting back growth that has gotten out of hand.",
      },
      {
        title: "Clippings Cleaned Up",
        description: "Trimmings are collected so the yard is left tidy.",
      },
    ],
    process: SHARED_PROCESS,
    gallery: [
      { src: IMAGES.hedgeLadder, alt: ALT.hedgeLadder, label: "Shrub & Vegetation Cleanup" },
      { src: IMAGES.trimmingsTrailer, alt: ALT.trimmingsTrailer, label: "Trimmings Haul-Away" },
    ],
    faqs: [
      {
        q: "Can you trim large or overgrown hedges?",
        a: "Call Brady and describe the hedge or shrubs you have. It's the easiest way to find out whether the job is a fit.",
      },
      ESTIMATE_FAQ,
    ],
    heroImage: IMAGES.hedgeLadder,
    heroAlt: ALT.hedgeLadder,
    icon: Scissors,
  },

  snowRemoval: {
    slug: "snow-removal",
    path: "/services/snow-removal",
    title: "Snow Removal",
    eyebrow: "Snow Removal",
    shortDescription: "Seasonal snow removal services for residential properties.",
    explanation: {
      title: "Winter Help for Homeowners",
      body: "When snow piles up, clearing it can be a chore. Brady's Lawn Service offers seasonal snow removal for residential properties in the Quad Cities area. Call to talk about what you need.",
    },
    benefits: [
      {
        title: "Seasonal Service",
        description: "Snow removal during the winter months.",
      },
      {
        title: "Residential Focus",
        description: "Services designed around homeowners' needs.",
      },
      {
        title: "Direct Communication",
        description: "Call Brady directly to discuss your property.",
      },
    ],
    process: SHARED_PROCESS,
    gallery: [],
    faqs: [
      {
        q: "Do you offer snow removal?",
        a: "Yes. Snow removal for residential properties is part of Brady's Lawn Service. Call to talk through your property.",
      },
      ESTIMATE_FAQ,
    ],
    heroImage: null,
    heroAlt: "",
    icon: Snowflake,
  },
} satisfies Record<ServiceKey, ServiceConfig>;

export const SERVICES = Object.fromEntries(
  Object.entries(BASE_SERVICES).map(([key, base]) => {
    const o = siteConfig.services.overrides[key as ServiceKey] ?? {};
    return [
      key,
      {
        ...base,
        ...(o.title ? { title: o.title } : {}),
        ...(o.shortDescription ? { shortDescription: o.shortDescription } : {}),
      },
    ];
  }),
) as Record<ServiceKey, ServiceConfig>;

export function isServiceEnabled(key: ServiceKey) {
  return siteConfig.services.enabled.includes(key);
}

// Ordered list for the header dropdown, footer links, and the home services grid.
// Only services enabled in site.config.json appear.
export const SERVICE_LIST: ServiceConfig[] = siteConfig.services.enabled.map((k) => SERVICES[k]);
