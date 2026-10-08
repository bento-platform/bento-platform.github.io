import type { ReleaseVersion } from "../types";

const releases: ReleaseVersion[] = [
  {
    version: 26,
    status: "current",
    date: "2026-09-01",
    majorMilestones: [
      "Better chart layout logic and a compact mode for chart dashboards (overviews).",
      "Spreadsheet export column controls for authorized users.",
      "XLSX data export for authorized users.",
      "Better accessibility for visually-impaired users in the data catalogue.",
    ],
    otherFeatures: [
      "Small fixes for the data catalogue.",
      "Fixes for choropleth maps.",
      "Translatable month-year bins in search and charts.",
      "A new \"Admin\" link in the footer in place of the previous header \"Portal\" link.",
      "Customizable default charts per chart section for deployers.",
      "Various PCGL-specific improvements.",
    ],
  },
  {
    version: 25,
    status: "released",
    date: "2026-08-05",
    majorMilestones: [
      "Data Catalogue Design",
      "Enabled Summary Charts in the Data Catalogue",
      "Redesign of the Provenance Display",
      "Replace about text with dataset (long-)description in project/dataset view",
      "French Translations for Datasets",
    ],
    otherFeatures: [
      "Users with smaller screens will be able to fit more charts on-screen at once with an improved chart layout and an optional compact mode.",
      "Authorized users will be able to select columns of interest when exporting tabular data, and export Excel files directly from Bento.",
      "For multi-dataset instances, the data catalogue will improve accessibility for visually impaired users.",
    ],
  },
  {
    version: 24,
    status: "released",
    date: "2026-06-30",
    majorMilestones: [
      "Move faceted search to the sidebar on project–dataset pages, displaying counts next to each filter for instant context while searching.",
      "A new data catalogue header, modernizing the page header while preserving all existing functionality and backward compatibility.",
      "Support creation of new datasets with the new dataset model, ensuring compliance with the new structural validation rules — including creation of fields and constraints, validation errors for missing or invalid fields, and reliable storage and retrieval of newly created datasets.",
      "Support the new dataset model for Bento Public, with public access now available for the new dataset endpoint, including data display and translation loading.",
      "Biosample pop-over feature, letting users preview key details about a biosample before opening it to quickly assess whether it has the information they need.",
    ],
    otherFeatures: [
      "Implementation of the Bento Data Catalogue Design.",
      "The new Provenance display.",
    ],
  },
  {
    version: 23,
    status: "released",
    date: "2026-05-27",
    majorMilestones: [
      'Support multiple values ("OR" queries) for filters in the UI — select multiple options for a filter and see results matching any of them.',
      "Add a user interface for custom range queries, letting authorized users search arbitrary ranges of dates or numbers in Bento Public rather than fixed bins.",
      "New dataset model — a new dataset provenance model for metadata about datasets ingested into Bento instances.",
      "Grant editing user interface, letting administrators manage access more easily without leaving Bento Web.",
    ],
    otherFeatures: [
      "Enhanced Data Catalogue header, giving a high-level overview of the instance and a customizable branding element for instances.",
      "Interactive biosample popovers — hover over a biosample ID for immediate details, or click to open the full biosample on the relevant phenopacket page.",
      "New dataset model support in Bento Public.",
    ],
  },
  {
    version: 22,
    status: "released",
    date: "2026-03-16",
    majorMilestones: [
      "Fuzzy search — rather than requiring an exact match, returns results that are close to the entered terms.",
      "Biosamples linked experiment view, making it easier to navigate experiment-related information in the phenopacket view when sufficient permissions are available.",
      "Pop-over tooltip for genome assemblies, showing key genome information and relevant links on hover over a reference genome ID.",
      "Highlighting entities in the phenopackets view — clicking an individual, biosample, or experiment highlights it.",
      "Highlighted dataset counts for search results, showing the number of matching entities in the dataset card for multi-dataset project searches.",
    ],
    otherFeatures: [
      "Organize and automate how external data is loaded into Bento data services.",
      "Search arbitrary ranges of numeric fields, for users with sufficient privileges.",
      "Portal administrators can post-hoc ingest files and associate them with existing experiment results.",
      "Researchers can use a compact URL representing the hierarchy of their location on the site.",
    ],
  },
  {
    version: 21,
    status: "released",
    date: "2026-02-06",
    majorMilestones: [
      'The experiments table in the phenopacket detail view now shows "Biosample ID" with links to other data in the tabs above, and the corresponding column under "Sampled Tissue"; the biosamples row is expandable.',
      "Phenopackets are downloadable directly from the Bento Public research portal.",
      "A button (×) in the text search box to clear the search text.",
      "Counts (vertical axis numbers) are displayed above the bar charts.",
      "Navigation now lets users move forward to a new page without losing their position on the original page — going back, or refreshing, restores where they left off.",
      "A back button to return to the search from the detail view.",
    ],
    otherFeatures: [
      "Ontology class-aware discovery functionality, including looking up records by ontology term values.",
      "Users can see all datasets at once in the public Data Catalogue.",
      "Users can view the dataset using a dataset model in the Provenance tab.",
      'Stricter authorization — users without permission can no longer see or use the "Explore" button.',
    ],
  },
  {
    version: 20,
    status: "released",
    date: "2025-11-28",
    majorMilestones: [
      "Biosamples can display collection locations as a map or as coordinates, mostly intended for non-human datasets.",
      "Experiments and experiment results are visible in Bento Public.",
      "A compact view for phenopackets, showing everything on one page rather than navigating through tabs.",
    ],
    otherFeatures: [
      "Improved text search for better full-text search results.",
      "Entity counts for projects and datasets are displayed in the data catalogue.",
      "Units are viewable in the field description of the interface.",
      "Users with sufficient permissions can export all search results as CSV, not just the current page.",
    ],
  },
  {
    version: 19,
    status: "released",
    date: "2025-10-31",
    majorMilestones: [
      "Merging bento-web and bento-public: fine-grained data exploration available from the same interface as the aggregate data view, based on user authorization level.",
      "Object store support for all data services, with the S3 API.",
    ],
  },
  {
    version: 18,
    status: "released",
    date: "2025-02-05",
    majorMilestones: [
      "Datasets catalogue — a way to explore projects and datasets stored on a Bento node.",
      "Releasing Takuan, a new service to index and search transcriptomics data.",
    ],
    otherFeatures: [
      "Authorization service added to the Katsu metadata service.",
      "Now possible to ingest any file type as experiment results into DRS.",
      "Optional MinIO deployment now available.",
      "Improved branding features for Bento instances, e.g. customizable dark and light background logos.",
    ],
  },
  {
    version: 17,
    status: "released",
    date: "2024-10-04",
    majorMilestones: [
      "Scope: multiple projects and datasets/cohorts are now supported in aggregate data exploration tools.",
      "Beacon Network: query multiple Bento nodes using the Beacon v2 API, and present results together.",
      "Enabled logs monitoring in all Bento services using Grafana.",
    ],
    otherFeatures: [
      "Authenticated users get more fine-grained responses in the aggregate data exploration tools.",
      "Variant search on non-human genomic data (requires a reference ingested in the reference service).",
      "DATS provenance metadata can now be ingested/downloaded as a JSON document.",
      "Beacon variant search by gene ID.",
    ],
  },
  {
    version: 16,
    status: "released",
    date: "2024-07-23",
    majorMilestones: [
      "Support for cBioPortal as a service within Bento, including a VCF-to-MAF conversion workflow and a minimal set of clinical/biosamples data available through cBioPortal.",
      "Authorisation service: create grants and manage users and groups from the user interface.",
    ],
    otherFeatures: [
      "New Bento interface to explore aggregate data.",
      "Support for data files on object storage.",
      "Reference service now ingests GFF3 annotations.",
    ],
  },
  {
    version: 15,
    status: "released",
    date: "2024-01-10",
    majorMilestones: [
      "Migration of clinical and phenotypical data model to Phenopackets v2.",
      "New reference genomes service, allowing ingestion of the assembly used with a dataset (e.g. for non-human datasets).",
      "Authorisation service, limiting access to administration and data ingest tools, with uncensored counts for authenticated users.",
    ],
    otherFeatures: [
      "User interface improvements for Bento Public (aggregate information).",
      "Authentication into Bento Public to run full Beacon searches.",
    ],
  },
  {
    version: 14,
    status: "released",
    date: "2023-11-02",
    majorMilestones: [
      "Documents other than genomic files and annotations can now be ingested as experiment results.",
    ],
    otherFeatures: [
      "Beacon record-level queries for authorised users.",
      "Experiment results and drop box files can now be visualised from the interface (PDF, CSV, audio/video files, etc.).",
      "UI improvements in the public Overview and Provenance tabs.",
    ],
  },
  {
    version: 13,
    status: "released",
    date: "2023-09-08",
    majorMilestones: [
      "Removal of the Tables concept — data is now organized by Project > Dataset > Data Type.",
    ],
    otherFeatures: [
      "API endpoint to extract provenance metadata (DATS format).",
      "Show latest ingestion date on the public site.",
      "Ingestion errors available in workflow execution runs.",
    ],
  },
];

export default releases;
