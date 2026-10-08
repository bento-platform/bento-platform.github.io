import type { GoalSection } from "../types";

const goals: GoalSection[] = [
  {
    slug: "ga4gh-standards",
    title: "Bento builds on GA4GH standards, schemas and formats from the ground up",
    body: "The Bento Platform started as part of the [EpiShare GA4GH Driver Project](https://www.ga4gh.org/driver_project/epishare/). Bento puts [GA4GH](https://www.ga4gh.org/) standards, schemas and formats as part of its core, and extends them when they're not sufficient. Any concept that has a corresponding GA4GH standard should be implemented in Bento following that standard.",
    bullets: [
      { text: "Clinical / Phenotypic data → [Phenopackets](https://www.ga4gh.org/product/phenopackets/)" },
      { text: "Variants → [VCF](https://www.ga4gh.org/product/genetic-variation-formats-vcf/) and [VRS](https://www.ga4gh.org/product/variation-representation/)" },
      { text: "Obtaining a reference genome → [refget](https://www.ga4gh.org/product/refget/)" },
      { text: "Discovery → [Beacon v2 API](https://www.ga4gh.org/product/beacon-api/)" },
      { text: "File access API → [Data Repository Service](https://www.ga4gh.org/product/data-repository-service-drs/)" },
      { text: "Workflow execution → [WES](https://www.ga4gh.org/product/workflow-execution-service-wes/)" },
    ],
  },
  {
    slug: "independent-services",
    title: "Bento separates concerns in independent services",
    body: "Different Bento setups could make use of some services, but not others. For instance, one Bento deployment could choose to offer the [cBioPortal](https://www.cbioportal.org/) as an additional way to query data, but another project might not have a need for it.",
    bullets: [
      {
        text: "Data types have their own data service",
        children: [
          "[Katsu](https://github.com/bento-platform/katsu) holds clinical and phenotypic data",
          "[Gohan](https://github.com/bento-platform/gohan) allows to quickly search VCFs for variants",
        ],
      },
      {
        text: "APIs are also separated in services",
        children: [
          "Data Search using the [Beacon API](https://www.ga4gh.org/product/beacon-api/)",
          "Data ingest using [WES](https://www.ga4gh.org/product/workflow-execution-service-wes/)-formatted workflows",
        ],
      },
      { text: "They all implement [GA4GH Service Registry](https://www.ga4gh.org/product/service-registry/)" },
      {
        text: "All services are implemented as [Docker](https://www.docker.com/) containers",
        children: ["A Bento deployment is a docker-compose setup deployed on a server"],
      },
    ],
  },
  {
    slug: "project-agnostic",
    title: "Bento is project-agnostic",
    body: "",
    bullets: [
      { text: "The platform is implemented for multiple projects, supporting multiple organisms" },
      { text: "Goal: Develop things only once for all supported projects and avoid maintaining multiple forks for different portals" },
      { text: "Adapt a project (meta)data to commonly used standards, increasing compatibility and discoverability with datasets from other genomics initiatives" },
      { text: "Customisation of an instance is done through parameters, config files, images, etc." },
    ],
  },
  {
    slug: "easy-deployment",
    title: "Bento offers tooling to ease deployment",
    body: "",
    bullets: [
      { text: "Deployment of a Bento instance does not require advanced knowledge of the stack" },
      { text: "CLI tooling is enough to launch a new instance" },
    ],
  },
];

export default goals;
