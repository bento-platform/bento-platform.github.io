### Version 20 (current)
#### (Released: 2025-11-28)
**Major milestones**
* Biosamples can display collection locations as a map or as coordinates mostly intended for non-human datasets.
* Experiments and Experiments Results are visible in Bento Public. 
* A compact view is displayed for the Phenopackets, where everything is shown on the same page, rather than navigating through various tabs.

**Other features**
  * Improved text search enabling better results from full-text searches.
  * The entity counts in the projects and datasets are displayed in the data catalogue.
  * Units are viewable in the field description of the user interface.
  * Users with sufficient permissions can use the Export as CSV button to export all search results, rather than just the ones on the current page. 
---
### Version 19 
#### (Released: 2025-10-31)
**Major milestones**
* Merging bento-web and bento-public: Fine-grained data exploration available from the same interface as aggregate data view, based on user authorization level.
* Object store support for all data services, with S3 API.

---

### Version 18 
#### (Released: 2025-02-05)
**Major milestones**
* Datasets catalogue: A way to explore projects and datasets stored on a Bento node
* Releasing Takuan: New service to index and search transcriptomics data

**Other features**
* Authorization service added to the Katsu metadata service
* Now possible to ingest any file type as experiment results into DRS
* Optional MinIO deployment now available
* Branding features for Bento instances has been improved (for example, with customizable dark and light background logos)

---

### Version 17
#### (Released: 2024-10-04)
**Major milestones**
* Scope: Multiple Projects and Datasets/Cohorts are now supported in Aggregate Data exploration tools
* Beacon Network: Query multiple Bento nodes using the Beacon v2 API, and present results together
* Enabled logs monitoring in all Bento services using Grafana

**Other features**
* Authenticated users can get more fine-grained responses in the Aggregate Data exploration tools
* Variants search on non-human genomic data (requires a reference to be ingested in the reference service)
* DATS provenance metadata can now be ingested/downloaded as a JSON document.
* Beacon variant search by gene ID

---

### Version 16
#### (Released: 2024-07-23)
**Major milestones**
* Support for cBioPortal as a service within Bento
	* VCF to MAF conversion workflow 
	* Minimal set of clinical/biosamples data available through cBioPortal
* Authorisation service: Create grants, manage users and groups with the User Interface

**Other features**
* New Bento interface to explore aggregate data
* Support of data files on Object Storage
* Reference service now ingests GFF3 annotations

---

### Version 15
#### (Released 2024-01-10)
**Major milestones**
* Migration of clinical and phenotypical data model to Phenopackets v2
* New reference genomes service allowing to ingest assembly used with a dataset (e.g. for non-human datasets)
* Authorisation Service
    * Limit access to administration and data ingest tools
    * Uncensored counts for authenticated users

**Other features**
* User interface improvements for bento_public (aggregate information)
* Authentication into bento_public to run full Beacon searches

---

### Version 14
#### (Released 2023-11-02)
**Major milestones**
* Documents other than genomic files and annotations can now be ingested as experiment results

**Other features**
* Beacon "record"-level queries for authorised users
* Experiment results and Drop box files can now be visualised from the interface (PDF, CVS, audio/video files, etc.) 
* UI improvements in public Overview and Provenance tabs

---

### Version 13
#### (Released 2023-09-08)
**Major milestones**
* Removal of Tables concept
  * Data now organised by Project > Dataset > Data Type

**Other features**
* API endpoint to extract provenance metadata (DATS format)
* Show latest ingestion date on public site
* Ingestion errors available in workflow execution runs
