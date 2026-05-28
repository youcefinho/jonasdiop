import type { BilingualLax } from '@/lib/i18n/types';

/**
 * game-changer-protocol.ts — brand chapeau "Game Changer Protocol" (brief v3).
 *
 * Reconciliation pattern brief v3 + brief signé :
 *   - Game Changer Protocol = brand chapeau (parcours client visible : D-I-O-P)
 *   - CDT™ (Compression Dynamique du Temps) = framework technique signature interne
 *
 * Analogie : iOS (système moteur) + iPhone (device qui le manifeste).
 * Le Game Changer Protocol = le parcours que le client traverse.
 * CDT™ = le levier technique qui rend la compression possible à l'intérieur.
 *
 * Les 4 phases D-I-O-P sont la déclinaison du protocole sur l'acronyme Jonas DIOP —
 * branding élégant : Diagnostic, Implémentation, Optimisation, Propulser.
 *
 * Utilisé sur Home (GameChangerProtocolPreview) et About (chapter dédié).
 * Version détaillée des 4 phases reste sur /contact (contactCopy.diopMethod).
 */

interface ProtocolStep {
  readonly letter: 'D' | 'I' | 'O' | 'P';
  readonly title: BilingualLax<string>;
  readonly body: BilingualLax<string>;
}

export const gameChangerProtocolCopy = {
  // ─── Home preview block ─────────────────────────────────────────────────
  homePreview: {
    eyebrow: {
      fr: 'Le Game Changer Protocol',
      en: 'The Game Changer Protocol'
    } satisfies BilingualLax<string>,
    title: {
      fr: 'Quatre phases. Un parcours mesurable.',
      en: 'Four phases. One measurable journey.'
    } satisfies BilingualLax<string>,
    sub: {
      fr: "De l'audit initial à la propulsion durable — le protocole que tu suis avec nous, étape par étape.",
      en: 'From initial audit to lasting propulsion — the protocol you follow with us, step by step.'
    } satisfies BilingualLax<string>,
    ctaLabel: {
      fr: 'Découvrir la méthode complète',
      en: 'Discover the full method'
    } satisfies BilingualLax<string>,
    cdtNote: {
      fr: "À l'intérieur du protocole, CDT™ — Compression Dynamique du Temps — est le framework signature qui transforme chaque heure investie en 3 à 5× de résultats. Pas une promesse. Une mécanique.",
      en: 'Within the protocol, CDT™ — Dynamic Time Compression — is the signature framework that turns every hour invested into 3 to 5× the output. Not a promise. A mechanism.'
    } satisfies BilingualLax<string>
  },

  // ─── About chapter block (inserted between "Aujourd'hui" and "Mission") ──
  aboutChapter: {
    eyebrow: {
      fr: 'Le protocole',
      en: 'The protocol'
    } satisfies BilingualLax<string>,
    title: {
      fr: 'Game Changer Protocol — quatre phases, signées.',
      en: 'Game Changer Protocol — four phases, signed.'
    } satisfies BilingualLax<string>,
    body: {
      fr: `D'observations répétées sur des centaines de mandats, une structure est née : le Game Changer Protocol. Quatre phases qui suivent les initiales DIOP — Diagnostic, Implémentation, Optimisation, Propulser. Pas un acronyme commercial. Un parcours qui se mesure étape par étape, sur chaque mandat.

À l'intérieur du protocole, la signature technique : CDT™, la Compression Dynamique du Temps. C'est le levier qui rend possible le rapport 3 à 5× de résultats sur chaque heure investie. Pas une promesse — une mécanique.

Le protocole décrit le parcours. CDT™ décrit le moteur. L'un sans l'autre ne suffit pas.`,
      en: `From patterns observed across hundreds of engagements, a structure emerged : the Game Changer Protocol. Four phases that follow the DIOP initials — Diagnostic, Implementation, Optimization, Propel. Not a marketing acronym. A journey that measures itself step by step, on every engagement.

Within the protocol, the technical signature : CDT™, Dynamic Time Compression. The lever that makes the 3 to 5× return on every invested hour possible. Not a promise — a mechanism.

The protocol describes the journey. CDT™ describes the engine. One without the other does not suffice.`
    } satisfies BilingualLax<string>
  },

  // ─── Shared 4 phases (D-I-O-P, condensed for preview rendering) ──────────
  steps: [
    {
      letter: 'D',
      title: { fr: 'Diagnostic', en: 'Diagnostic' } satisfies BilingualLax<string>,
      body: {
        fr: "On cartographie l'architecture actuelle : où le temps fuit, où l'offre perd, où l'opération tourne à vide.",
        en: 'We map the current architecture : where time leaks, where the offer loses value, where the operation runs idle.'
      } satisfies BilingualLax<string>
    },
    {
      letter: 'I',
      title: { fr: 'Implémentation', en: 'Implementation' } satisfies BilingualLax<string>,
      body: {
        fr: "Les leviers prioritaires passent en exécution : nouvelle architecture d'offre, refonte des systèmes, réalignement de l'équipe.",
        en: 'Priority levers move into execution : new offer architecture, system refactor, team realignment.'
      } satisfies BilingualLax<string>
    },
    {
      letter: 'O',
      title: { fr: 'Optimisation', en: 'Optimization' } satisfies BilingualLax<string>,
      body: {
        fr: "On mesure, on raffine. Les premiers résultats structurels sont là — l'objectif devient de compresser le temps et d'augmenter la marge.",
        en: 'We measure, refine. First structural results are in — the goal becomes compressing time and increasing margin.'
      } satisfies BilingualLax<string>
    },
    {
      letter: 'P',
      title: { fr: 'Propulser', en: 'Propel' } satisfies BilingualLax<string>,
      body: {
        fr: "L'architecture tient seule. Le scaling devient commercial, pas opérationnel. Durable, mesurable, transmissible.",
        en: 'The architecture holds on its own. Scaling becomes commercial, not operational. Durable, measurable, transmissible.'
      } satisfies BilingualLax<string>
    }
  ] satisfies readonly ProtocolStep[]
} as const;
