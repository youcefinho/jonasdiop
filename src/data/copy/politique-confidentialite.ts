import type { BilingualLax } from '@/lib/i18n/types';

/**
 * politique-confidentialite.ts — Page Politique de confidentialité
 * Conformité : Loi 25 Québec (RSQ c P-39.1 mod. 2022, entrée en vigueur progressive 2022-2024)
 *              Droits : accès / rectification / effacement / opposition / portabilité / retrait consentement
 *              Mention CAI (Commission d'accès à l'information du Québec) obligatoire
 * Draft : 2026-05-26 · Sprint 2.5 Batch 3
 * [À VALIDER JONAS] markers = contenus non confirmés (NEQ, date entrée en vigueur, identité DPO)
 * Note : Pas AMF / OACIQ (consulting non régulé)
 */

export const politiqueConfidentialiteCopy = {
  meta: {
    title: {
      fr: 'Politique de confidentialité | Jonas Diop — DIOP Stratégies Internationales Inc.',
      en: 'Privacy Policy | Jonas Diop — DIOP Stratégies Internationales Inc.'
    } satisfies BilingualLax<string>,
    description: {
      fr: 'Politique de confidentialité de DIOP Stratégies Internationales Inc. : collecte, utilisation et protection de vos renseignements personnels, conformément à la Loi 25 du Québec.',
      en: 'Privacy policy of DIOP Stratégies Internationales Inc. : collection, use, and protection of your personal information, in accordance with Québec Act 25.'
    } satisfies BilingualLax<string>
  },

  hero: {
    eyebrow: {
      fr: 'Vie privée',
      en: 'Privacy'
    } satisfies BilingualLax<string>,
    h1: {
      fr: 'Politique de confidentialité.',
      en: 'Privacy policy.'
    } satisfies BilingualLax<string>,
    sub: {
      fr: 'Comment DIOP Stratégies Internationales Inc. collecte, utilise et protège vos renseignements personnels, conformément à la Loi 25 du Québec et aux lois fédérales canadiennes applicables.',
      en: 'How DIOP Stratégies Internationales Inc. collects, uses, and protects your personal information, in accordance with Québec Act 25 and applicable Canadian federal laws.'
    } satisfies BilingualLax<string>
  },

  sections: [
    {
      id: 'identite-responsable',
      title: {
        fr: 'Identité du responsable du traitement',
        en: 'Identity of the data controller'
      } satisfies BilingualLax<string>,
      body: {
        fr: `**DIOP Stratégies Internationales Inc.**

NEQ : [À VALIDER JONAS]

Courriel : contact@jonasdiop.com

Téléphone : +1 438 356 7746

Site web : jonasdiop.com

DIOP Stratégies Internationales Inc. est le responsable du traitement de vos renseignements personnels au sens de la *Loi sur la protection des renseignements personnels dans le secteur privé* du Québec (Loi 25, RSQ c P-39.1) et de la *Loi sur la protection des renseignements personnels et les documents électroniques* (LPRPDE) au niveau fédéral.`,
        en: `**DIOP Stratégies Internationales Inc.**

NEQ: [TO VALIDATE WITH JONAS]

Email: contact@jonasdiop.com

Phone: +1 438 356 7746

Website: jonasdiop.com

DIOP Stratégies Internationales Inc. is the data controller for your personal information within the meaning of Québec's *Act Respecting the Protection of Personal Information in the Private Sector* (Act 25, RSQ c P-39.1) and the federal *Personal Information Protection and Electronic Documents Act* (PIPEDA).`
      } satisfies BilingualLax<string>
    },
    {
      id: 'responsable-protection',
      title: {
        fr: 'Responsable de la protection des renseignements personnels',
        en: 'Person responsible for the protection of personal information'
      } satisfies BilingualLax<string>,
      body: {
        fr: `Conformément à l'article 3.1 de la Loi 25, DIOP Stratégies Internationales Inc. a désigné un responsable de la protection des renseignements personnels.

**Responsable désigné :** [À VALIDER JONAS — Jonas Diop lui-même ou délégué externe à confirmer]

**Pour exercer vos droits ou toute question relative à la protection de vos renseignements personnels :**

Courriel : contact@jonasdiop.com — objet : **Protection RP**

Toute demande reçue à cette adresse avec la mention « Protection RP » en objet fera l'objet d'un traitement prioritaire, dans un délai maximum de **30 jours** calendaires.`,
        en: `In accordance with section 3.1 of Act 25, DIOP Stratégies Internationales Inc. has designated a person responsible for the protection of personal information.

**Designated responsible person:** [TO VALIDATE WITH JONAS — Jonas Diop himself or an external delegate to confirm]

**To exercise your rights or for any question regarding the protection of your personal information:**

Email: contact@jonasdiop.com — subject: **Privacy RP**

Any request received at this address with the subject "Privacy RP" will be handled on a priority basis, within a maximum of **30 calendar days**.`
      } satisfies BilingualLax<string>
    },
    {
      id: 'renseignements-collectes',
      title: {
        fr: 'Renseignements personnels collectés',
        en: 'Personal information collected'
      } satisfies BilingualLax<string>,
      body: {
        fr: `Nous collectons uniquement les renseignements personnels nécessaires aux finalités décrites ci-dessous (principe de minimisation).

**Via le formulaire de contact et de qualification :**
- Nom complet
- Adresse courriel
- Numéro de téléphone (optionnel)
- Fourchette de chiffre d'affaires annuel
- Contenu de votre message ou demande

**Via Cloudflare (infrastructure d'hébergement — collecte automatique) :**
- Adresse IP (anonymisée ou pseudonymisée)
- Agent utilisateur (navigateur, système d'exploitation)
- Pages consultées, durée de visite
- Pays d'origine de la connexion

**Via les outils analytiques (avec votre consentement) :**
- Données de navigation agrégées et anonymisées
- Interactions avec le contenu du site

**Via GoHighLevel (CRM — clients programmes uniquement) :**
- Nom, courriel, téléphone
- Historique des échanges et des transactions
- Informations liées à l'exécution du programme souscrit`,
        en: `We collect only the personal information necessary for the purposes described below (data minimisation principle).

**Via the contact and qualification form:**
- Full name
- Email address
- Phone number (optional)
- Annual revenue range
- Content of your message or inquiry

**Via Cloudflare (hosting infrastructure — automatic collection):**
- IP address (anonymised or pseudonymised)
- User agent (browser, operating system)
- Pages visited, visit duration
- Country of origin of the connection

**Via analytics tools (with your consent):**
- Aggregated and anonymised browsing data
- Interactions with site content

**Via GoHighLevel (CRM — program clients only):**
- Name, email, phone
- History of exchanges and transactions
- Information related to the execution of the subscribed program`
      } satisfies BilingualLax<string>
    },
    {
      id: 'finalites',
      title: {
        fr: 'Finalités du traitement',
        en: 'Purposes of processing'
      } satisfies BilingualLax<string>,
      body: {
        fr: `Vos renseignements personnels sont collectés et traités aux fins suivantes :

1. **Réponse aux demandes de contact et de qualification** — traitement et suivi de votre demande, prise de rendez-vous, évaluation de l'adéquation programme.
2. **Qualification et inscription aux programmes** — évaluation de votre profil, présentation des programmes adaptés, gestion de l'inscription et de l'intégration.
3. **Exécution contractuelle** — pour les clients inscrits à un programme, gestion de la relation client, accès aux contenus, facturation et comptabilité.
4. **Communications de suivi** — envoi d'informations sur nos programmes, événements et ressources, uniquement avec votre consentement préalable et révocable à tout moment.
5. **Statistiques d'utilisation anonymisées** — amélioration du site et des contenus, à partir de données agrégées ne permettant pas d'identifier individuellement un utilisateur.
6. **Sécurité et prévention de la fraude** — protection du site et des utilisateurs contre les accès non autorisés, le spam et les activités malveillantes.`,
        en: `Your personal information is collected and processed for the following purposes:

1. **Responding to contact and qualification requests** — processing and following up on your request, scheduling appointments, assessing program fit.
2. **Program qualification and registration** — evaluating your profile, presenting suitable programs, managing enrolment and onboarding.
3. **Contractual performance** — for clients enrolled in a program, managing the client relationship, providing access to content, billing and accounting.
4. **Follow-up communications** — sending information about our programs, events, and resources, solely with your prior and revocable consent.
5. **Anonymised usage statistics** — improving the website and its content, based on aggregated data that does not allow individual identification.
6. **Security and fraud prevention** — protecting the website and users against unauthorised access, spam, and malicious activity.`
      } satisfies BilingualLax<string>
    },
    {
      id: 'bases-juridiques',
      title: {
        fr: 'Bases juridiques du traitement',
        en: 'Legal basis for processing'
      } satisfies BilingualLax<string>,
      body: {
        fr: `Conformément à la Loi 25, chaque traitement repose sur l'une des bases juridiques suivantes :

- **Consentement** : collecte via formulaire de contact, communications marketing, cookies analytiques et publicitaires. Vous pouvez retirer votre consentement à tout moment, sans que cela affecte la licéité du traitement antérieur.
- **Exécution d'un contrat** : traitement nécessaire à la gestion de votre inscription et à la fourniture des programmes achetés.
- **Intérêt légitime** : sécurité et stabilité du site, prévention de la fraude, statistiques de navigation anonymisées. Ces traitements ne prévalent pas sur vos droits et libertés fondamentaux.`,
        en: `In accordance with Act 25, each processing activity is based on one of the following legal grounds:

- **Consent**: collection via contact form, marketing communications, analytics and advertising cookies. You may withdraw your consent at any time, without affecting the lawfulness of prior processing.
- **Performance of a contract**: processing necessary for managing your enrolment and delivering the purchased programs.
- **Legitimate interest**: website security and stability, fraud prevention, anonymised browsing statistics. These processing activities do not override your fundamental rights and freedoms.`
      } satisfies BilingualLax<string>
    },
    {
      id: 'destinataires',
      title: {
        fr: 'Destinataires de vos renseignements',
        en: 'Recipients of your information'
      } satisfies BilingualLax<string>,
      body: {
        fr: `Vos renseignements personnels sont accessibles uniquement aux personnes et organisations suivantes, dans la stricte limite de ce qui est nécessaire à l'exercice de leurs fonctions :

**Équipe interne DIOP :**
Jonas Diop et les collaborateurs directement impliqués dans le suivi de votre dossier.

**Sous-traitants techniques (agissant pour notre compte) :**
- **Cloudflare, Inc.** (États-Unis) — hébergement, sécurité, CDN
- **GoHighLevel / HL** (États-Unis) — CRM, gestion des contacts et des transactions clients
- **Calendly, LLC** (États-Unis) — prise de rendez-vous
- **Meta Platforms, Inc.** (États-Unis) — publicité et retargeting, **uniquement avec votre consentement**
- **Google LLC** (États-Unis) — analytics, **uniquement avec votre consentement**

Nous ne vendons, louons ni échangeons jamais vos renseignements personnels à des tiers à des fins commerciales.`,
        en: `Your personal information is accessible only to the following persons and organisations, strictly limited to what is necessary for them to fulfil their functions:

**DIOP internal team:**
Jonas Diop and collaborators directly involved in managing your file.

**Technical data processors (acting on our behalf):**
- **Cloudflare, Inc.** (United States) — hosting, security, CDN
- **GoHighLevel / HL** (United States) — CRM, client contact and transaction management
- **Calendly, LLC** (United States) — appointment scheduling
- **Meta Platforms, Inc.** (United States) — advertising and retargeting, **solely with your consent**
- **Google LLC** (United States) — analytics, **solely with your consent**

We never sell, rent, or trade your personal information to third parties for commercial purposes.`
      } satisfies BilingualLax<string>
    },
    {
      id: 'transferts-internationaux',
      title: {
        fr: 'Transferts internationaux de renseignements',
        en: 'International transfers of personal information'
      } satisfies BilingualLax<string>,
      body: {
        fr: `Certains de nos sous-traitants (Cloudflare, GoHighLevel, Calendly, Meta, Google) sont établis aux États-Unis. Vos renseignements peuvent donc faire l'objet d'un transfert hors du Canada.

Conformément aux articles 17 et 70.1 de la Loi 25 (en vigueur depuis le 22 septembre 2023), nous avons réalisé une évaluation des facteurs relatifs à la vie privée (EFVP) pour ces transferts. Des clauses contractuelles types et des mécanismes de protection appropriés sont en place avec chacun de ces sous-traitants afin d'assurer un niveau de protection équivalent à celui requis par la législation québécoise.

Pour toute question relative à ces transferts, contactez-nous à contact@jonasdiop.com (objet : **Protection RP**).`,
        en: `Some of our data processors (Cloudflare, GoHighLevel, Calendly, Meta, Google) are established in the United States. Your information may therefore be transferred outside Canada.

In accordance with sections 17 and 70.1 of Act 25 (in force since September 22, 2023), we have conducted a Privacy Impact Assessment (PIA) for these transfers. Standard contractual clauses and appropriate protective mechanisms are in place with each of these processors to ensure a level of protection equivalent to that required under Québec law.

For any questions regarding these transfers, contact us at contact@jonasdiop.com (subject: **Privacy RP**).`
      } satisfies BilingualLax<string>
    },
    {
      id: 'duree-conservation',
      title: {
        fr: 'Durée de conservation',
        en: 'Retention period'
      } satisfies BilingualLax<string>,
      body: {
        fr: `Nous conservons vos renseignements personnels uniquement le temps nécessaire aux finalités pour lesquelles ils ont été collectés :

| Catégorie | Durée de conservation |
|---|---|
| Prospects et leads non convertis en clients | 24 mois à compter du dernier contact |
| Clients (renseignements liés au programme) | Durée de la relation + 5 ans (obligations comptables et légales) |
| Données de navigation anonymisées (analytics) | 13 mois maximum |
| Cookies analytiques | 13 mois maximum (ou jusqu'au retrait du consentement) |
| Cookies strictement nécessaires | Durée de la session ou jusqu'à expiration technique |

À l'expiration de ces délais, vos renseignements sont détruits de manière sécurisée ou anonymisés de façon irréversible.`,
        en: `We retain your personal information only for as long as necessary for the purposes for which it was collected:

| Category | Retention period |
|---|---|
| Prospects and leads not converted into clients | 24 months from the last contact |
| Clients (program-related information) | Duration of relationship + 5 years (accounting and legal obligations) |
| Anonymised browsing data (analytics) | Maximum 13 months |
| Analytics cookies | Maximum 13 months (or until consent is withdrawn) |
| Strictly necessary cookies | Session duration or until technical expiry |

Upon expiry of these periods, your information is securely destroyed or irreversibly anonymised.`
      } satisfies BilingualLax<string>
    },
    {
      id: 'droits-loi25',
      title: {
        fr: 'Vos droits en vertu de la Loi 25',
        en: 'Your rights under Act 25'
      } satisfies BilingualLax<string>,
      body: {
        fr: `Conformément à la Loi sur la protection des renseignements personnels dans le secteur privé du Québec (Loi 25), vous disposez des droits suivants :

**Droit d'accès** : obtenir confirmation que des renseignements vous concernant sont détenus, et en recevoir une copie.

**Droit de rectification** : faire corriger tout renseignement inexact, incomplet ou ambigu.

**Droit à l'effacement** : demander la suppression de vos renseignements, dans les limites permises par la loi (certaines obligations légales peuvent justifier leur conservation).

**Droit d'opposition** : vous opposer au traitement de vos renseignements pour des finalités spécifiques, notamment à des fins de sollicitation commerciale.

**Droit à la portabilité** : recevoir vos renseignements dans un format technologique structuré et communément utilisé (droit applicable depuis septembre 2024 en vertu de la Loi 25).

**Droit de retirer votre consentement** : à tout moment, sans préjudice pour la licéité du traitement fondé sur ce consentement avant son retrait.

**Comment exercer vos droits :**
Adressez votre demande écrite à contact@jonasdiop.com avec l'objet **Protection RP**. Nous accuserons réception dans les 5 jours ouvrables et répondrons dans un délai maximum de **30 jours calendaires**.

**Recours auprès de la Commission d'accès à l'information (CAI) :**
Si vous estimez que vos droits ne sont pas respectés, vous avez le droit de déposer une plainte auprès de la Commission d'accès à l'information du Québec :

Commission d'accès à l'information du Québec
Site web : https://www.cai.gouv.qc.ca
Téléphone : 1 888 528-7741`,
        en: `In accordance with Québec's Act Respecting the Protection of Personal Information in the Private Sector (Act 25), you have the following rights:

**Right of access**: obtain confirmation that personal information about you is held, and receive a copy.

**Right of rectification**: have any inaccurate, incomplete, or ambiguous information corrected.

**Right to erasure**: request the deletion of your personal information, within the limits permitted by law (certain legal obligations may justify its retention).

**Right to object**: object to the processing of your personal information for specific purposes, including for commercial solicitation.

**Right to data portability**: receive your personal information in a structured, commonly used technological format (right applicable since September 2024 under Act 25).

**Right to withdraw consent**: at any time, without prejudice to the lawfulness of processing based on that consent prior to its withdrawal.

**How to exercise your rights:**
Submit your written request to contact@jonasdiop.com with the subject **Privacy RP**. We will acknowledge receipt within 5 business days and respond within a maximum of **30 calendar days**.

**Recourse with the Commission d'accès à l'information (CAI):**
If you believe your rights are not being respected, you have the right to file a complaint with the Commission d'accès à l'information du Québec:

Commission d'accès à l'information du Québec
Website: https://www.cai.gouv.qc.ca
Phone: 1 888 528-7741`
      } satisfies BilingualLax<string>
    },
    {
      id: 'cookies-traceurs',
      title: {
        fr: 'Cookies et traceurs',
        en: 'Cookies and trackers'
      } satisfies BilingualLax<string>,
      body: {
        fr: `Ce site utilise des cookies et technologies similaires. Voici les catégories utilisées :

**Cookies strictement nécessaires (toujours actifs)**
Essentiels au fonctionnement du site : gestion de la session, sécurité, préférences de langue. Ces cookies ne peuvent pas être désactivés.

**Cookies analytiques (consentement requis)**
Permettent de mesurer l'audience du site de façon agrégée et anonymisée, afin d'améliorer l'expérience utilisateur. Durée maximale : 13 mois.

**Cookies marketing et publicitaires (consentement requis)**
Utilisés pour personnaliser les publicités sur les plateformes Meta et Google, uniquement si vous avez donné votre consentement explicite. Durée maximale : 13 mois.

**Gestion de vos préférences :**
Vous pouvez modifier vos préférences de cookies à tout moment via le panneau de gestion des cookies accessible en bas de page. Le retrait du consentement ne rétroagit pas sur les données déjà collectées.`,
        en: `This website uses cookies and similar technologies. Here are the categories used:

**Strictly necessary cookies (always active)**
Essential for the website to function: session management, security, language preferences. These cookies cannot be disabled.

**Analytics cookies (consent required)**
Enable measurement of website traffic in an aggregated and anonymised way to improve the user experience. Maximum duration: 13 months.

**Marketing and advertising cookies (consent required)**
Used to personalise advertisements on Meta and Google platforms, solely with your explicit consent. Maximum duration: 13 months.

**Managing your preferences:**
You can update your cookie preferences at any time via the cookie management panel accessible at the bottom of the page. Withdrawal of consent does not apply retroactively to data already collected.`
      } satisfies BilingualLax<string>
    },
    {
      id: 'securite',
      title: {
        fr: 'Sécurité des renseignements',
        en: 'Security of personal information'
      } satisfies BilingualLax<string>,
      body: {
        fr: `DIOP Stratégies Internationales Inc. met en œuvre des mesures de sécurité techniques et organisationnelles appropriées pour protéger vos renseignements personnels contre tout accès non autorisé, divulgation, modification ou destruction :

- **Chiffrement en transit** : toutes les communications entre votre navigateur et notre site sont chiffrées via TLS (HTTPS).
- **Chiffrement au repos** : les données stockées dans nos systèmes CRM et plateformes sont protégées par chiffrement.
- **Accès restreint** : seules les personnes autorisées ayant besoin d'accéder à vos renseignements dans le cadre de leurs fonctions y ont accès.
- **Journalisation** : les accès aux données font l'objet d'une journalisation pour détecter tout accès anormal.
- **Vigilance fournisseurs** : nos sous-traitants sont sélectionnés sur la base de leurs garanties en matière de sécurité.

En cas d'incident de confidentialité (au sens de l'article 3.5 de la Loi 25) présentant un risque de préjudice sérieux, vous en serez informé promptement, conformément aux obligations légales.`,
        en: `DIOP Stratégies Internationales Inc. implements appropriate technical and organisational security measures to protect your personal information against unauthorised access, disclosure, modification, or destruction:

- **Encryption in transit**: all communications between your browser and our website are encrypted via TLS (HTTPS).
- **Encryption at rest**: data stored in our CRM systems and platforms is protected by encryption.
- **Restricted access**: only authorised persons who need to access your information in the course of their duties may do so.
- **Logging**: data access is logged to detect any abnormal access.
- **Vendor diligence**: our data processors are selected based on their security guarantees.

In the event of a confidentiality incident (within the meaning of section 3.5 of Act 25) presenting a risk of serious harm, you will be promptly notified in accordance with legal obligations.`
      } satisfies BilingualLax<string>
    },
    {
      id: 'modifications',
      title: {
        fr: 'Modifications de la politique',
        en: 'Policy updates'
      } satisfies BilingualLax<string>,
      body: {
        fr: `Nous pouvons être amenés à modifier la présente politique de confidentialité pour refléter des changements législatifs, réglementaires ou opérationnels.

Toute modification substantielle sera portée à votre connaissance par :
- Un bandeau d'information visible sur le site, actif pendant au moins 30 jours ;
- Un courriel adressé aux clients actifs inscrits à un programme.

La date d'entrée en vigueur de la version en cours figure en bas de cette page. Nous vous recommandons de consulter cette politique périodiquement.`,
        en: `We may update this privacy policy to reflect legislative, regulatory, or operational changes.

Any material change will be brought to your attention by:
- A visible information banner on the website, active for at least 30 days;
- An email sent to active clients enrolled in a program.

The effective date of the current version appears at the bottom of this page. We recommend consulting this policy periodically.`
      } satisfies BilingualLax<string>
    }
  ],

  effectiveDate: {
    fr: "Date d'entrée en vigueur : [À VALIDER JONAS — date de publication du site]",
    en: 'Effective date: [TO VALIDATE WITH JONAS — site publication date]'
  } satisfies BilingualLax<string>,

  lastUpdate: {
    fr: 'Dernière mise à jour : [À VALIDER JONAS — date de publication du site]',
    en: 'Last updated: [TO VALIDATE WITH JONAS — site publication date]'
  } satisfies BilingualLax<string>
} as const;
