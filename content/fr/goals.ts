import type { GoalSection } from "../types";

const goals: GoalSection[] = [
  {
    slug: "ga4gh-standards",
    title: "Bento s'appuie dès le départ sur les normes, schémas et formats du GA4GH",
    body: "La plateforme Bento a débuté dans le cadre du [projet pilote EpiShare du GA4GH](https://www.ga4gh.org/driver_project/epishare/). Bento intègre les normes, schémas et formats du [GA4GH](https://www.ga4gh.org/) au cœur de son fonctionnement, et les étend lorsqu'ils ne suffisent pas. Tout concept ayant une norme GA4GH correspondante doit être implémenté dans Bento en suivant cette norme.",
    bullets: [
      { text: "Données cliniques / phénotypiques → [Phenopackets](https://www.ga4gh.org/product/phenopackets/)" },
      { text: "Variants → [VCF](https://www.ga4gh.org/product/genetic-variation-formats-vcf/) et [VRS](https://www.ga4gh.org/product/variation-representation/)" },
      { text: "Obtention d'un génome de référence → [refget](https://www.ga4gh.org/product/refget/)" },
      { text: "Découverte → [API Beacon v2](https://www.ga4gh.org/product/beacon-api/)" },
      { text: "API d'accès aux fichiers → [Data Repository Service](https://www.ga4gh.org/product/data-repository-service-drs/)" },
      { text: "Exécution de flux de travail → [WES](https://www.ga4gh.org/product/workflow-execution-service-wes/)" },
    ],
  },
  {
    slug: "independent-services",
    title: "Bento sépare les responsabilités en services indépendants",
    body: "Différentes installations de Bento peuvent faire appel à certains services, mais pas à d'autres. Par exemple, un déploiement de Bento pourrait choisir d'offrir [cBioPortal](https://www.cbioportal.org/) comme moyen additionnel d'interroger les données, alors qu'un autre projet pourrait ne pas en avoir besoin.",
    bullets: [
      {
        text: "Chaque type de données possède son propre service de données",
        children: [
          "[Katsu](https://github.com/bento-platform/katsu) conserve les données cliniques et phénotypiques",
          "[Gohan](https://github.com/bento-platform/gohan) permet de rechercher rapidement des variants dans des VCF",
        ],
      },
      {
        text: "Les API sont également séparées en services",
        children: [
          "Recherche de données via l'[API Beacon](https://www.ga4gh.org/product/beacon-api/)",
          "Ingestion de données via des flux de travail au format [WES](https://www.ga4gh.org/product/workflow-execution-service-wes/)",
        ],
      },
      { text: "Tous implémentent le [GA4GH Service Registry](https://www.ga4gh.org/product/service-registry/)" },
      {
        text: "Tous les services sont mis en œuvre sous forme de conteneurs [Docker](https://www.docker.com/)",
        children: ["Un déploiement de Bento est une installation docker-compose déployée sur un serveur"],
      },
    ],
  },
  {
    slug: "project-agnostic",
    title: "Bento est agnostique vis-à-vis des projets",
    body: "",
    bullets: [
      { text: "La plateforme est déployée pour plusieurs projets, prenant en charge plusieurs organismes" },
      { text: "Objectif : développer les choses une seule fois pour tous les projets pris en charge et éviter de maintenir plusieurs versions dérivées pour différents portails" },
      { text: "Adapter les (méta)données d'un projet aux normes couramment utilisées, augmentant la compatibilité et la découvrabilité avec les jeux de données d'autres initiatives en génomique" },
      { text: "La personnalisation d'une instance se fait par des paramètres, fichiers de configuration, images, etc." },
    ],
  },
  {
    slug: "easy-deployment",
    title: "Bento offre des outils pour faciliter le déploiement",
    body: "",
    bullets: [
      { text: "Le déploiement d'une instance de Bento ne nécessite pas de connaissances avancées de la pile technologique" },
      { text: "Des outils en ligne de commande suffisent pour lancer une nouvelle instance" },
    ],
  },
];

export default goals;
