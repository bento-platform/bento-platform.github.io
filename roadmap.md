### Version 13 (Current, 2023-09-08)
**Major milestones**
* Removal of Tables concept
  * Data now organised by Project > Dataset > Data Type

**Other features**
* API endpoint to extract provenance metadata (DATS format)
* Show latest ingestion date on public site
* Ingestion errors available in workflow execution runs

---

### Version 14 (Target: End of October)
**Major milestones**
* Migration to Phenopackets v2
* Authorisation Service
    * Limit access to administration and data ingest tools
    * Allow for Beacon authenticated search for full record responses

---

### Version 15 (Target: Mid-december)
**Major milestones**
* Search revamp
	* Merge Aggregation and Beacon services querying
* New Bento interface
	* Merge data exploration tools of bento_web and bento_public
	* Separate data management, such as ingestion, in another interface
* Initial support for cBioPortal
	* VCF to MAF workflow for cBioPortal
	* Minimal set of clinical/biosample data available through cBioPortal

**Other features**
* Support multiple datasets and projects in a node
* Improved compatibility of Bento Beacon with Elixir/CINECA Beacon network