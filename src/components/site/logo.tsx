import { cn } from "@/lib/utils";
import { BUSINESS_NAME, LOGO } from "@/lib/site-config";

// Business logo. The supplied logo has dark lettering on a transparent
// background, so it sits on a white rounded plate to stay readable over the
// hero photo and the dark footer. Aspect ratio and transparency are kept.
export function Logo({ className }: { className?: string }) {
  if (LOGO.src) {
    return (
      <span
        className={cn(
          "inline-flex shrink-0 items-center rounded-xl bg-white px-2.5 py-1.5 shadow-sm ring-1 ring-black/5",
          className,
        )}
      >
        <img
          src={LOGO.src}
          alt={LOGO.alt || `${BUSINESS_NAME} logo`}
          width={LOGO.width}
          height={LOGO.height}
          className="h-9 w-auto object-contain sm:h-11"
        />
      </span>
    );
  }
  return (
    <span className={cn("font-display text-lg font-semibold tracking-tight", className)}>
      {BUSINESS_NAME}
    </span>
  );
}
