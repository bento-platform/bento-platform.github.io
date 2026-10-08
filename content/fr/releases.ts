import type { ReleaseVersion } from "../types";

const releases: ReleaseVersion[] = [
  {
    version: 26,
    status: "current",
    date: "2026-09-01",
    majorMilestones: [
      "Meilleure logique de disposition des graphiques et mode compact pour les tableaux de bord de graphiques (aperçus).",
      "Contrôle des colonnes de l'exportation en tableur pour les utilisateurs autorisés.",
      "Exportation de données au format XLSX pour les utilisateurs autorisés.",
      "Meilleure accessibilité pour les utilisateurs malvoyants dans le catalogue de données.",
    ],
    otherFeatures: [
      "Petits correctifs pour le catalogue de données.",
      "Correctifs pour les cartes choroplèthes.",
      "Intervalles mois-année traduisibles dans la recherche et les graphiques.",
      "Un nouveau lien « Admin » dans le pied de page, remplaçant l'ancien lien « Portail » de l'en-tête.",
      "Graphiques par défaut personnalisables par section de graphiques pour les responsables de déploiement.",
      "Diverses améliorations propres au PCGL.",
    ],
  },
  {
    version: 25,
    status: "released",
    date: "2026-08-05",
    majorMilestones: [
      "Conception du catalogue de données",
      "Activation des graphiques sommaires dans le catalogue de données",
      "Refonte de l'affichage de la provenance",
      "Remplacement du texte « à propos » par la (longue) description du jeu de données dans la vue projet/jeu de données",
      "Traductions françaises pour les jeux de données",
    ],
    otherFeatures: [
      "Les utilisateurs disposant de petits écrans pourront afficher plus de graphiques à l'écran grâce à une disposition améliorée et un mode compact optionnel.",
      "Les utilisateurs autorisés pourront sélectionner les colonnes d'intérêt lors de l'exportation de données tabulaires, et exporter des fichiers Excel directement depuis Bento.",
      "Pour les instances à jeux de données multiples, le catalogue de données améliorera l'accessibilité pour les utilisateurs malvoyants.",
    ],
  },
  {
    version: 24,
    status: "released",
    date: "2026-06-30",
    majorMilestones: [
      "Déplacement de la recherche à facettes vers la barre latérale sur les pages projet–jeu de données, affichant les décomptes à côté de chaque filtre pour un contexte instantané pendant la recherche.",
      "Un nouvel en-tête pour le catalogue de données, modernisant l'en-tête de page tout en préservant toutes les fonctionnalités existantes et la rétrocompatibilité.",
      "Prise en charge de la création de nouveaux jeux de données avec le nouveau modèle de jeu de données, garantissant la conformité aux nouvelles règles de validation structurelle — incluant la création de champs et de contraintes, des erreurs de validation pour les champs manquants ou invalides, ainsi que le stockage et la récupération fiables des nouveaux jeux de données créés.",
      "Prise en charge du nouveau modèle de jeu de données pour Bento Public, l'accès public étant désormais disponible pour le nouveau point d'accès de jeux de données, incluant l'affichage des données et le chargement des traductions.",
      "Fonctionnalité de fenêtre contextuelle pour les biospécimens, permettant aux utilisateurs d'aperçevoir les détails clés d'un biospécimen avant de l'ouvrir afin d'évaluer rapidement s'il contient l'information recherchée.",
    ],
    otherFeatures: [
      "Mise en œuvre de la conception du catalogue de données Bento.",
      "Le nouvel affichage de la provenance.",
    ],
  },
  {
    version: 23,
    status: "released",
    date: "2026-05-27",
    majorMilestones: [
      "Prise en charge des requêtes « OU » à valeurs multiples pour les filtres dans l'interface — sélectionner plusieurs options pour un filtre et voir les résultats correspondant à l'une d'elles.",
      "Ajout d'une interface pour les requêtes par plage personnalisée, permettant aux utilisateurs autorisés de rechercher des plages arbitraires de dates ou de nombres dans Bento Public plutôt que des intervalles fixes.",
      "Nouveau modèle de jeu de données — un nouveau modèle de provenance pour les métadonnées des jeux de données ingérés dans les instances de Bento.",
      "Interface de gestion des autorisations, permettant aux administrateurs de gérer plus facilement les accès sans quitter Bento Web.",
    ],
    otherFeatures: [
      "En-tête amélioré du catalogue de données, offrant une vue d'ensemble de l'instance et un élément de personnalisation de marque pour les instances.",
      "Fenêtres contextuelles interactives pour les biospécimens — survoler un identifiant de biospécimen pour voir des détails immédiats, ou cliquer pour afficher le biospécimen complet sur la page phenopacket correspondante.",
      "Prise en charge du nouveau modèle de jeu de données dans Bento Public.",
    ],
  },
  {
    version: 22,
    status: "released",
    date: "2026-03-16",
    majorMilestones: [
      "Recherche floue — plutôt que d'exiger une correspondance exacte, retourne des résultats proches des termes saisis.",
      "Vue des expériences liées aux biospécimens, facilitant la navigation entre les informations liées aux expériences dans la vue phenopacket lorsque les permissions suffisantes sont accordées.",
      "Infobulle contextuelle pour les assemblages génomiques, affichant les informations clés du génome et les liens pertinents au survol d'un identifiant de génome de référence.",
      "Mise en évidence des entités dans la vue des phenopackets — cliquer sur un individu, un biospécimen ou une expérience le met en surbrillance.",
      "Décomptes de jeux de données mis en évidence pour les résultats de recherche, affichant le nombre d'entités correspondantes dans la fiche du jeu de données pour les recherches de projets à jeux de données multiples.",
    ],
    otherFeatures: [
      "Organiser et automatiser le chargement de données externes dans les services de données de Bento.",
      "Rechercher des plages arbitraires de champs numériques, pour les utilisateurs disposant des privilèges suffisants.",
      "Les administrateurs de portail peuvent ingérer des fichiers a posteriori et les associer à des résultats d'expérience existants.",
      "Les chercheurs peuvent utiliser une URL compacte représentant la hiérarchie de leur emplacement sur le site.",
    ],
  },
  {
    version: 21,
    status: "released",
    date: "2026-02-06",
    majorMilestones: [
      "Le tableau des expériences dans la vue détaillée du phenopacket affiche désormais l'« identifiant du biospécimen » avec des liens vers les autres données dans les onglets ci-dessus, ainsi que la colonne correspondante sous « Tissu échantillonné » ; la ligne des biospécimens est extensible.",
      "Les phenopackets sont téléchargeables directement depuis le portail de recherche Bento Public.",
      "Un bouton (×) dans la boîte de recherche textuelle pour effacer le texte recherché.",
      "Les décomptes (axe vertical) sont désormais affichés au-dessus des graphiques à barres.",
      "La navigation permet désormais aux utilisateurs d'avancer vers une nouvelle page sans perdre leur position sur la page d'origine — revenir en arrière, ou actualiser la page, restaure leur position précédente.",
      "Un bouton de retour pour revenir à la recherche depuis la vue détaillée.",
    ],
    otherFeatures: [
      "Fonctionnalité de découverte tenant compte des classes d'ontologie, incluant la recherche d'enregistrements par valeurs de termes d'ontologie.",
      "Les utilisateurs peuvent voir tous les jeux de données à la fois dans le catalogue de données public.",
      "Les utilisateurs peuvent visualiser le jeu de données selon un modèle de jeu de données dans l'onglet Provenance.",
      "Autorisation plus stricte — les utilisateurs sans permission ne peuvent plus voir ni utiliser le bouton « Explorer ».",
    ],
  },
  {
    version: 20,
    status: "released",
    date: "2025-11-28",
    majorMilestones: [
      "Les biospécimens peuvent afficher leur lieu de collecte sous forme de carte ou de coordonnées, principalement destiné aux jeux de données non humains.",
      "Les expériences et leurs résultats sont visibles dans Bento Public.",
      "Une vue compacte pour les phenopackets, affichant tout sur une seule page plutôt que de naviguer entre plusieurs onglets.",
    ],
    otherFeatures: [
      "Recherche textuelle améliorée pour de meilleurs résultats de recherche en texte intégral.",
      "Les décomptes d'entités pour les projets et jeux de données sont affichés dans le catalogue de données.",
      "Les unités sont visibles dans la description des champs de l'interface.",
      "Les utilisateurs disposant des permissions suffisantes peuvent exporter tous les résultats de recherche en CSV, pas seulement ceux de la page courante.",
    ],
  },
  {
    version: 19,
    status: "released",
    date: "2025-10-31",
    majorMilestones: [
      "Fusion de bento-web et bento-public : exploration fine des données disponible depuis la même interface que la vue de données agrégées, selon le niveau d'autorisation de l'utilisateur.",
      "Prise en charge du stockage objet pour tous les services de données, avec l'API S3.",
    ],
  },
  {
    version: 18,
    status: "released",
    date: "2025-02-05",
    majorMilestones: [
      "Catalogue de jeux de données — un moyen d'explorer les projets et jeux de données stockés sur un nœud Bento.",
      "Lancement de Takuan, un nouveau service pour indexer et rechercher des données transcriptomiques.",
    ],
    otherFeatures: [
      "Service d'autorisation ajouté au service de métadonnées Katsu.",
      "Il est désormais possible d'ingérer tout type de fichier comme résultat d'expérience dans DRS.",
      "Déploiement optionnel de MinIO désormais disponible.",
      "Fonctionnalités de personnalisation de marque améliorées pour les instances de Bento (par exemple, logos clairs et sombres personnalisables).",
    ],
  },
  {
    version: 17,
    status: "released",
    date: "2024-10-04",
    majorMilestones: [
      "Portée : plusieurs projets et jeux de données/cohortes sont désormais pris en charge dans les outils d'exploration de données agrégées.",
      "Réseau Beacon : interroger plusieurs nœuds Bento via l'API Beacon v2, et présenter les résultats ensemble.",
      "Surveillance des journaux activée dans tous les services Bento via Grafana.",
    ],
    otherFeatures: [
      "Les utilisateurs authentifiés obtiennent des réponses plus détaillées dans les outils d'exploration de données agrégées.",
      "Recherche de variants sur des données génomiques non humaines (nécessite une référence ingérée dans le service de référence).",
      "Les métadonnées de provenance DATS peuvent désormais être ingérées/téléchargées sous forme de document JSON.",
      "Recherche de variants Beacon par identifiant de gène.",
    ],
  },
  {
    version: 16,
    status: "released",
    date: "2024-07-23",
    majorMilestones: [
      "Prise en charge de cBioPortal en tant que service au sein de Bento, incluant un flux de conversion VCF vers MAF et un ensemble minimal de données cliniques/biospécimens disponibles via cBioPortal.",
      "Service d'autorisation : créer des autorisations et gérer les utilisateurs et groupes depuis l'interface utilisateur.",
    ],
    otherFeatures: [
      "Nouvelle interface Bento pour explorer les données agrégées.",
      "Prise en charge des fichiers de données sur stockage objet.",
      "Le service de référence ingère désormais les annotations GFF3.",
    ],
  },
  {
    version: 15,
    status: "released",
    date: "2024-01-10",
    majorMilestones: [
      "Migration du modèle de données cliniques et phénotypiques vers Phenopackets v2.",
      "Nouveau service de génomes de référence, permettant l'ingestion de l'assemblage utilisé avec un jeu de données (par ex. pour les jeux de données non humains).",
      "Service d'autorisation, limitant l'accès aux outils d'administration et d'ingestion de données, avec décomptes non censurés pour les utilisateurs authentifiés.",
    ],
    otherFeatures: [
      "Améliorations de l'interface utilisateur pour Bento Public (informations agrégées).",
      "Authentification dans Bento Public pour effectuer des recherches Beacon complètes.",
    ],
  },
  {
    version: 14,
    status: "released",
    date: "2023-11-02",
    majorMilestones: [
      "Des documents autres que des fichiers génomiques et des annotations peuvent désormais être ingérés comme résultats d'expérience.",
    ],
    otherFeatures: [
      "Requêtes Beacon au niveau de l'enregistrement pour les utilisateurs autorisés.",
      "Les résultats d'expérience et les fichiers de la boîte de dépôt peuvent désormais être visualisés depuis l'interface (PDF, CSV, fichiers audio/vidéo, etc.).",
      "Améliorations de l'interface dans les onglets publics Aperçu et Provenance.",
    ],
  },
  {
    version: 13,
    status: "released",
    date: "2023-09-08",
    majorMilestones: [
      "Suppression du concept de tables — les données sont désormais organisées par Projet > Jeu de données > Type de données.",
    ],
    otherFeatures: [
      "Point d'accès API pour extraire les métadonnées de provenance (format DATS).",
      "Affichage de la date de la dernière ingestion sur le site public.",
      "Erreurs d'ingestion disponibles dans les exécutions de flux de travail.",
    ],
  },
];

export default releases;
