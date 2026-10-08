import type { Locale } from "../i18n/routing";
import type { FeatureItem, GoalSection, ReleaseVersion } from "./types";

import enGoals from "./en/goals";
import enFeatures from "./en/features";
import enReleases from "./en/releases";

import frGoals from "./fr/goals";
import frFeatures from "./fr/features";
import frReleases from "./fr/releases";

const goalsByLocale: Record<Locale, GoalSection[]> = { en: enGoals, fr: frGoals };
const featuresByLocale: Record<Locale, FeatureItem[]> = { en: enFeatures, fr: frFeatures };
const releasesByLocale: Record<Locale, ReleaseVersion[]> = { en: enReleases, fr: frReleases };

export function getGoals(locale: Locale): GoalSection[] {
  return goalsByLocale[locale];
}

export function getFeatures(locale: Locale): FeatureItem[] {
  return featuresByLocale[locale];
}

export function getReleases(locale: Locale): ReleaseVersion[] {
  return releasesByLocale[locale];
}
