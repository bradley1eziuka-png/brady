import { ALT } from "@/lib/services-data";
import { IMAGES, sizeProps } from "@/lib/site-images";
import { SectionHeading } from "./section-heading";

// Real project photos supplied by Brady. Captions are short and factual; no
// photo is presented as an "after" shot because no verified pairs exist.
const GALLERY = [
  { src: IMAGES.leafStreet, alt: ALT.leafStreet, label: "Fall Leaf Cleanup" },
  { src: IMAGES.brushTrailer, alt: ALT.brushTrailer, label: "Brush & Debris Removal" },
  { src: IMAGES.hedgeLadder, alt: ALT.hedgeLadder, label: "Shrub & Vegetation Cleanup" },
  { src: IMAGES.leavesHillside, alt: ALT.leavesHillside, label: "Seasonal Property Cleanup" },
  { src: IMAGES.trimmingsTrailer, alt: ALT.trimmingsTrailer, label: "Branch & Trimming Haul-Away" },
  { src: IMAGES.sideYardLeaves, alt: ALT.sideYardLeaves, label: "Residential Yard Cleanup" },
  { src: IMAGES.brushPile, alt: ALT.brushPile, label: "Overgrown Area Cleanup" },
];

export function Gallery() {
  return (
    <section id="our-work" className="section-pad scroll-mt-24 bg-background">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="Our Work"
          title="See the Work for Yourself"
          description="From seasonal yard cleanups to lawn maintenance, take a look at some of our recent work."
        />

        <div className="mt-14 columns-1 gap-6 sm:columns-2 lg:columns-3 [&>*]:mb-6">
          {GALLERY.map((item) => (
            <figure
              key={item.label}
              className="group relative break-inside-avoid overflow-hidden rounded-2xl border border-border shadow-[0_2px_20px_-14px_rgba(0,0,0,0.18)]"
            >
              <img
                src={item.src}
                alt={item.alt}
                {...sizeProps(item.src)}
                loading="lazy"
                className="h-auto w-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
              />
              <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-primary/80 via-primary/10 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100 [@media(hover:none)]:opacity-100" />
              <figcaption className="pointer-events-none absolute inset-x-0 bottom-0 flex items-center gap-2 p-5 text-white opacity-0 transition-all duration-300 group-hover:opacity-100 [@media(hover:none)]:opacity-100">
                <span className="h-px w-6 bg-accent" />
                <span className="text-sm font-semibold tracking-wide">{item.label}</span>
              </figcaption>
            </figure>
          ))}
        </div>

        <p className="mt-10 text-center text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground/70">
          Real photos from Brady's Lawn Service jobs
        </p>
      </div>
    </section>
  );
}
