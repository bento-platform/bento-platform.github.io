import type { FeatureItem } from "../types";

const features: FeatureItem[] = [
  {
    slug: "public-dashboard-aggregate",
    image: "/images/features/aggregate-privacy.svg",
    alt: "Illustration de dossiers individuels regroupés en un graphique à barres agrégé avec un cadenas",
    eyebrow: "Accès agrégé, vie privée individuelle",
    caption: "Parcourez les décomptes et les tendances sur des propriétés configurables, tout en gardant chaque enregistrement sous-jacent privé.",
  },
  {
    slug: "public-dashboard-counts",
    image: "/images/features/filtered-counts.svg",
    alt: "Illustration d'un entonnoir filtrant des dossiers en cartes de décomptes anonymes",
    eyebrow: "Filtré sans jamais rien exposer",
    caption: "Obtenez des décomptes d'individus, de biospécimens et d'expériences, filtrés par propriété, sans jamais révéler un seul enregistrement.",
  },
  {
    slug: "authenticated-exploration",
    image: "/images/features/authenticated-portal.svg",
    alt: "Illustration d'une fenêtre de navigateur avec des filtres et des lignes de participants, avec une clé pour l'accès approuvé",
    eyebrow: "Portail authentifié",
    caption: "Exploration fine des données au niveau du participant/de l'individu, réservée aux utilisateurs approuvés.",
  },
  {
    slug: "authenticated-queries",
    image: "/images/features/combined-queries.svg",
    alt: "Illustration d'un graphique clinique et d'une hélice d'ADN reliés par une icône de recherche",
    eyebrow: "Portail authentifié",
    caption: "Exécutez simultanément des requêtes sur les données cliniques/phénotypiques et les variations génomiques.",
  },
  {
    slug: "beacon-api",
    image: "/images/features/beacon-api.svg",
    alt: "Illustration d'un hub Beacon relié à des applications externes",
    eyebrow: "API Beacon",
    caption: "Permettez à des applications externes d'interroger les données de Bento via l'API Beacon standardisée.",
  },
];

export default features;
