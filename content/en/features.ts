import type { FeatureItem } from "../types";

const features: FeatureItem[] = [
  {
    slug: "public-dashboard-aggregate",
    image: "/images/features/aggregate-privacy.svg",
    alt: "Illustration of individual records combining into an aggregate bar chart with a lock badge",
    eyebrow: "Aggregate access, individual privacy",
    caption: "Browse counts and trends on configurable properties, with every underlying record kept private.",
  },
  {
    slug: "public-dashboard-counts",
    image: "/images/features/filtered-counts.svg",
    alt: "Illustration of a funnel filtering records into anonymous count cards",
    eyebrow: "Filtered without exposing anyone",
    caption: "Get counts on individuals, biosamples and experiments, filtered by property, without ever surfacing a single record.",
  },
  {
    slug: "authenticated-exploration",
    image: "/images/features/authenticated-portal.svg",
    alt: "Illustration of a browser window with filter sliders and participant rows, with a key badge for approved access",
    eyebrow: "Authenticated portal",
    caption: "Fine-grained data exploration at the participant/individual level, for approved users only.",
  },
  {
    slug: "authenticated-queries",
    image: "/images/features/combined-queries.svg",
    alt: "Illustration of a clinical chart and a DNA helix joined by a search icon",
    eyebrow: "Authenticated portal",
    caption: "Run combined clinical/phenotypic and genomic variation queries at the same time.",
  },
  {
    slug: "beacon-api",
    image: "/images/features/beacon-api.svg",
    alt: "Illustration of a Beacon hub connected to external applications",
    eyebrow: "Beacon API",
    caption: "Let external applications query Bento's data through the standardized Beacon API.",
  },
];

export default features;
