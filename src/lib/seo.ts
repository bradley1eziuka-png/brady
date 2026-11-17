// SEO helpers: per-page head tags (title, description, canonical, Open Graph,
// Twitter) and the mockup noindex flag, all driven by site.config.json.
// No LocalBusiness structured data is emitted: address, hours and ratings are
// unverified, and the mockup must not publish unconfirmed business schema.
import { DEFAULT_CONTENT } from "@/config/defaults";
import { siteConfig } from "@/config";
import { BUSINESS_NAME, SITE_URL } from "./site-config";
import { IMAGES } from "./site-images";

const { seo } = siteConfig;

function absolute(pathOrUrl: string) {
  if (!pathOrUrl) return "";
  if (/^https?:\/\//i.test(pathOrUrl)) return pathOrUrl;
  return SITE_URL ? `${SITE_URL}${pathOrUrl.startsWith("/") ? "" : "/"}${pathOrUrl}` : pathOrUrl;
}

export const HOME_TITLE = seo.title || `${BUSINESS_NAME} | Lawn Care & Snow Removal | Quad Cities`;
export const HOME_DESCRIPTION = seo.description || DEFAULT_CONTENT.seo.description;

export function pageHead({
  title,
  description,
  path,
  image,
}: {
  title: string;
  description: string;
  path: string;
  image?: string | undefined;
}) {
  const ogImage = absolute(seo.ogImage || image || IMAGES.hero);
  const url = SITE_URL ? `${SITE_URL}${path === "/" ? "" : path}` : "";
  return {
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:image", content: ogImage },
      { property: "og:type", content: "website" },
      { property: "og:site_name", content: BUSINESS_NAME },
      { property: "og:locale", content: seo.locale },
      ...(url ? [{ property: "og:url", content: url }] : []),
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
      { name: "twitter:image", content: ogImage },
      ...(seo.noindex ? [{ name: "robots", content: "noindex, nofollow" }] : []),
    ],
    links: url ? [{ rel: "canonical", href: url }] : [],
  };
}
