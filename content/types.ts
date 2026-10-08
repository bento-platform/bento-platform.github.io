export interface GoalBullet {
  text: string;
  children?: string[];
}

export interface GoalSection {
  slug: string;
  title: string;
  body: string;
  bullets?: GoalBullet[];
}

export interface FeatureItem {
  slug: string;
  image: string;
  alt: string;
  eyebrow: string;
  caption: string;
}

export type ReleaseStatus = "released" | "current" | "upcoming";

export interface ReleaseVersion {
  version: number;
  status: ReleaseStatus;
  date?: string;
  majorMilestones: string[];
  otherFeatures?: string[];
}
