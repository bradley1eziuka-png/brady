// Centralized imagery. Defaults live in /public/images (local, no external
// hosting). Override any key per client in site.config.json → branding.images.
import { DEFAULT_IMAGES, IMAGE_SIZES } from "@/config/defaults";
import { siteConfig, type ImageKey } from "@/config";

export const IMAGES = { ...DEFAULT_IMAGES, ...siteConfig.branding.images } as Record<
  ImageKey,
  string
>;

// width/height attributes for a known local image (prevents layout shift).
export function sizeProps(src: string): { width?: number; height?: number } {
  const s = IMAGE_SIZES[src];
  return s ? { width: s[0], height: s[1] } : {};
}
