### Version 15 (current)
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
