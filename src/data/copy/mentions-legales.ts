import type { BilingualLax } from '@/lib/i18n/types';

/**
 * mentions-legales.ts — Page Mentions légales
 * Conformité : Loi 25 Québec (RSQ c P-39.1 modifiée) + standard français mentions légales
 * Draft : 2026-05-26 · Sprint 2.5 Batch 3
 * [À VALIDER JONAS] markers = contenus non confirmés (NEQ, date publication)
 */

export const mentionsLegalesCopy = {
  meta: {
    title: {
      fr: "Mentions légales | Jonas Diop, Architecte d'affaires — DIOP Stratégies Internationales Inc.",
      en: 'Legal Notice | Jonas Diop, Business Architect — DIOP Stratégies Internationales Inc.'
    } satisfies BilingualLax<string>,
    description: {
      fr: "Mentions légales du site jonasdiop.com : éditeur, hébergeur, propriété intellectuelle, conditions d'usage et responsabilité. DIOP Stratégies Internationales Inc., Montréal, Québec.",
      en: 'Legal notice for jonasdiop.com : publisher, host, intellectual property, terms of use, and liability. DIOP Stratégies Internationales Inc., Montréal, Québec.'
    } satisfies BilingualLax<string>
  },

  hero: {
    eyebrow: {
      fr: 'Transparence',
      en: 'Transparency'
    } satisfies BilingualLax<string>,
    h1: {
      fr: 'Mentions légales.',
      en: 'Legal notice.'
    } satisfies BilingualLax<string>,
    sub: {
      fr: "Informations légales relatives à l'édition et à l'exploitation du site jonasdiop.com, conformément aux lois applicables au Québec et au Canada.",
      en: 'Legal information relating to the publication and operation of the jonasdiop.com website, in accordance with applicable laws in Québec and Canada.'
    } satisfies BilingualLax<string>
  },

  sections: [
    {
      id: 'editeur',
      title: {
        fr: 'Éditeur du site',
        en: 'Site publisher'
      } satisfies BilingualLax<string>,
      body: {
        fr: `**DIOP Stratégies Internationales Inc.**

Numéro d'entreprise du Québec (NEQ) : [À VALIDER JONAS]

Adresse postale : communiquée sur demande — courriel contact@jonasdiop.com

Courriel : contact@jonasdiop.com

Téléphone : +1 438 356 7746

Président : Jonas Diop

Territoire d'activité : Québec, Canada et international`,
        en: `**DIOP Stratégies Internationales Inc.**

Québec Enterprise Number (NEQ): [TO VALIDATE WITH JONAS]

Mailing address: provided upon request — email contact@jonasdiop.com

Email: contact@jonasdiop.com

Phone: +1 438 356 7746

President: Jonas Diop

Area of activity: Québec, Canada and international`
      } satisfies BilingualLax<string>
    },
    {
      id: 'hebergeur',
      title: {
        fr: 'Hébergeur',
        en: 'Hosting provider'
      } satisfies BilingualLax<string>,
      body: {
        fr: `**Cloudflare, Inc.**

101 Townsend Street
San Francisco, CA 94107
États-Unis

Site web : https://www.cloudflare.com

Le site jonasdiop.com est hébergé sur l'infrastructure Cloudflare Workers (réseau CDN mondial). Cloudflare agit en qualité de sous-traitant au sens de la Loi 25 et des lois sur la protection des données applicables.`,
        en: `**Cloudflare, Inc.**

101 Townsend Street
San Francisco, CA 94107
United States

Website: https://www.cloudflare.com

The jonasdiop.com website is hosted on the Cloudflare Workers infrastructure (global CDN network). Cloudflare acts as a data processor within the meaning of Act 25 and applicable data protection laws.`
      } satisfies BilingualLax<string>
    },
    {
      id: 'directeur-publication',
      title: {
        fr: 'Directeur de la publication',
        en: 'Publication director'
      } satisfies BilingualLax<string>,
      body: {
        fr: `**Jonas Diop**, Président, DIOP Stratégies Internationales Inc.

Courriel : contact@jonasdiop.com`,
        en: `**Jonas Diop**, President, DIOP Stratégies Internationales Inc.

Email: contact@jonasdiop.com`
      } satisfies BilingualLax<string>
    },
    {
      id: 'conception',
      title: {
        fr: 'Conception & développement',
        en: 'Design & development'
      } satisfies BilingualLax<string>,
      body: {
        fr: `Ce site a été conçu et développé par **Intralys**.

Site : https://intralys.dev

Intralys est une agence web spécialisée dans la conception de sites performants et la mise en place de systèmes d'acquisition digitaux pour entrepreneurs et experts.`,
        en: `This website was designed and developed by **Intralys**.

Website: https://intralys.dev

Intralys is a web agency specializing in high-performance website design and digital acquisition systems for entrepreneurs and experts.`
      } satisfies BilingualLax<string>
    },
    {
      id: 'propriete-intellectuelle',
      title: {
        fr: 'Propriété intellectuelle',
        en: 'Intellectual property'
      } satisfies BilingualLax<string>,
      body: {
        fr: `**Marques et méthodologies propriétaires**

Les marques **CDT™** (Compression Dynamique du Temps) et **Cash & Scale™** sont des marques et méthodologies propriétaires de DIOP Stratégies Internationales Inc. Toute reproduction, utilisation, adaptation ou exploitation de ces marques et méthodes sans autorisation écrite préalable est strictement interdite.

**Contenus du site**

L'ensemble des contenus publiés sur le présent site — textes, articles, études de cas, témoignages, images, vidéos, enregistrements audio, logos, graphiques, et tout autre élément — est la propriété exclusive de DIOP Stratégies Internationales Inc., sauf mention expresse contraire.

Ces contenus sont protégés par les lois canadiennes et québécoises sur le droit d'auteur, ainsi que par les conventions internationales applicables.

**Partage non commercial (Creative Commons BY-NC-ND 4.0)**

Le partage des contenus à titre strictement non commercial, à des fins d'information et sans modification, est autorisé sous licence Creative Commons Attribution — Pas d'Utilisation Commerciale — Pas de Modification 4.0 International (CC BY-NC-ND 4.0), à condition de mentionner la source et de lier vers le site jonasdiop.com.

Toute utilisation commerciale, modification, adaptation ou incorporation dans des œuvres dérivées est expressément interdite sans autorisation écrite de DIOP Stratégies Internationales Inc.`,
        en: `**Trademarks and proprietary methodologies**

The marks **CDT™** (Dynamic Time Compression) and **Cash & Scale™** are proprietary trademarks and methodologies of DIOP Stratégies Internationales Inc. Any reproduction, use, adaptation, or exploitation of these marks and methods without prior written authorization is strictly prohibited.

**Site content**

All content published on this website — texts, articles, case studies, testimonials, images, videos, audio recordings, logos, graphics, and any other element — is the exclusive property of DIOP Stratégies Internationales Inc., unless expressly stated otherwise.

This content is protected by Canadian and Québec copyright laws, as well as applicable international conventions.

**Non-commercial sharing (Creative Commons BY-NC-ND 4.0)**

Sharing of content on a strictly non-commercial basis, for informational purposes and without modification, is permitted under the Creative Commons Attribution — NonCommercial — NoDerivatives 4.0 International licence (CC BY-NC-ND 4.0), provided that the source is credited and a link to jonasdiop.com is included.

Any commercial use, modification, adaptation, or incorporation into derivative works is expressly prohibited without written authorization from DIOP Stratégies Internationales Inc.`
      } satisfies BilingualLax<string>
    },
    {
      id: 'conditions-usage',
      title: {
        fr: "Conditions d'utilisation",
        en: 'Terms of use'
      } satisfies BilingualLax<string>,
      body: {
        fr: "L'accès et l'utilisation du présent site sont soumis aux Conditions générales d'utilisation de DIOP Stratégies Internationales Inc., disponibles sur la page dédiée de ce site.\n\nEn naviguant sur ce site, vous reconnaissez avoir pris connaissance de ces conditions et les acceptez dans leur intégralité.",
        en: 'Access to and use of this website are subject to the General Terms of Use of DIOP Stratégies Internationales Inc., available on the dedicated page of this website.\n\nBy browsing this website, you acknowledge that you have read these terms and accept them in their entirety.'
      } satisfies BilingualLax<string>
    },
    {
      id: 'limitation-responsabilite',
      title: {
        fr: 'Limitation de responsabilité',
        en: 'Limitation of liability'
      } satisfies BilingualLax<string>,
      body: {
        fr: `Les informations publiées sur ce site sont fournies à titre indicatif et général. Elles ne constituent pas un conseil juridique, financier, comptable ou de toute autre nature professionnelle.

DIOP Stratégies Internationales Inc. s'efforce d'assurer l'exactitude et la mise à jour des informations diffusées, mais ne peut garantir l'exhaustivité, la précision ou l'actualité de tout contenu, ni l'absence d'erreurs ou d'omissions.

**Résultats variables**

Les résultats mentionnés sur ce site (chiffres d'affaires additionnels générés, délais de transformation, etc.) sont représentatifs d'entrepreneurs ayant pleinement exécuté les programmes CDT™. Les résultats individuels varient en fonction de la situation de départ, du secteur d'activité, de l'engagement client, du contexte de marché et de nombreux autres facteurs indépendants de la volonté de DIOP Stratégies Internationales Inc. **Aucune garantie de résultat chiffré individuel n'est offerte ni implicite.**

DIOP Stratégies Internationales Inc. ne saurait être tenue responsable des décisions d'affaires prises par des tiers sur la base des informations publiées sur ce site.`,
        en: `Information published on this website is provided for general and informational purposes only. It does not constitute legal, financial, accounting, or any other form of professional advice.

DIOP Stratégies Internationales Inc. endeavours to ensure the accuracy and currency of the information published, but cannot guarantee the completeness, accuracy, or timeliness of any content, nor the absence of errors or omissions.

**Variable results**

Results mentioned on this website (additional revenue generated, transformation timelines, etc.) are representative of entrepreneurs who have fully executed the CDT™ programs. Individual results vary based on starting situation, industry, client engagement, market conditions, and many other factors beyond the control of DIOP Stratégies Internationales Inc. **No guarantee of individual quantified results is offered or implied.**

DIOP Stratégies Internationales Inc. shall not be held liable for business decisions made by third parties based on information published on this website.`
      } satisfies BilingualLax<string>
    },
    {
      id: 'droit-applicable',
      title: {
        fr: 'Droit applicable et tribunaux compétents',
        en: 'Governing law and jurisdiction'
      } satisfies BilingualLax<string>,
      body: {
        fr: `Les présentes mentions légales et toute question relative à l'utilisation de ce site sont régies par les lois de la province de Québec et les lois fédérales du Canada applicables, à l'exclusion de leurs règles de conflit de lois.

Tout litige découlant de l'utilisation de ce site ou de son contenu, qui ne peut être résolu à l'amiable, sera soumis à la compétence exclusive de la **Cour supérieure du Québec, district de Montréal**.`,
        en: `These legal notices and any matter relating to the use of this website are governed by the laws of the province of Québec and applicable federal laws of Canada, excluding their conflict of law rules.

Any dispute arising from the use of this website or its content that cannot be resolved amicably shall be submitted to the exclusive jurisdiction of the **Superior Court of Québec, district of Montréal**.`
      } satisfies BilingualLax<string>
    }
  ],

  lastUpdate: {
    fr: 'Mise à jour : [À VALIDER JONAS — date de publication du site]',
    en: 'Last updated: [TO VALIDATE WITH JONAS — site publication date]'
  } satisfies BilingualLax<string>
} as const;
