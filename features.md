### Bento builds on GA4GH standards, schemas and formats from the ground up

The Bento Platform started as part of the [EpiShare GA4GH Driver Project](https://www.ga4gh.org/driver_project/epishare/). Bento puts [GA4GH](https://www.ga4gh.org/) standards, schemas and formats as part of its core, and extends them when they’re not sufficient. Any concept that has an equivalent GA4GH standard should be implemented in Bento following that standard.

* Clinical / Phenotypic data -> [Phenopackets](https://www.ga4gh.org/product/phenopackets/)
* Variants -> [VCF](https://www.ga4gh.org/product/genetic-variation-formats-vcf/) and [VRS](https://www.ga4gh.org/product/variation-representation/)
* Obtaining a reference genome -> [refget](https://www.ga4gh.org/product/refget/)
* Discovery -> [Beacon v2 API](https://www.ga4gh.org/product/beacon-api/)
* File access API -> [Data Repository Service](https://www.ga4gh.org/product/data-repository-service-drs/)
* Workflow execution -> [WES](https://www.ga4gh.org/product/workflow-execution-service-wes/)

---

### Bento separates concerns in independent services

Different Bento setups could make use of some services, but not others. For instance, one Bento deployment could choose to offer the [cBioPortal](https://www.cbioportal.org/) as an additional way to query data, but another project might not have a need for it.
	
* Data types have their own data service
  * [Katsu](https://github.com/bento-platform/katsu) holds clinical and phenotypic data
  * [Gohan](https://github.com/bento-platform/gohan) allows to quickly search VCFs for variants
* APIs are also separated in services
  * Data Search using the [Beacon API](https://www.ga4gh.org/product/beacon-api/)
  * Data ingest using [WES](https://www.ga4gh.org/product/workflow-execution-service-wes/)-formatted workflows
* They all implement [GA4GH Service Registry](https://www.ga4gh.org/product/service-registry/) 
* All services are implemented as [Docker](https://www.docker.com/) containers
  * A Bento deployment is a docker-compose setup deployed on a server

---

 ### Bento is project-agnostic

* The platform is implemented for multiple projects, supporting multiple organisms
* Goal: Develop things only once for all supported projects and avoid maintaining multiple forks for different portals
* Adapt a project (meta)data to commonly used standards, increasing compatibility and discoverability with datasets from other genomics initiatives
* Customisation of an instance is done through parameters, config files, images, etc.
