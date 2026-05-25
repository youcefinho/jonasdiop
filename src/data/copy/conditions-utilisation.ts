import type { BilingualLax } from '@/lib/i18n/types';

/**
 * conditions-utilisation.ts — Page Conditions générales d'utilisation (CGU)
 * Conformité : Loi 25 Québec + Code civil du Québec + LPRPDE
 * Couverture : site jonasdiop.com + programmes / formations DIOP (CDT™, Cash & Scale™, etc.)
 * Draft : 2026-05-26 · Sprint 2.5 Batch 3
 * [À VALIDER JONAS] markers = contenus non confirmés (NEQ, dates, modalités remboursement)
 * Note : Pas AMF / OACIQ (consulting non régulé, règle de conduite interne uniquement)
 */

export const conditionsUtilisationCopy = {
  meta: {
    title: {
      fr: "Conditions d'utilisation | Jonas Diop — DIOP Stratégies Internationales Inc.",
      en: 'Terms of Use | Jonas Diop — DIOP Stratégies Internationales Inc.'
    } satisfies BilingualLax<string>,
    description: {
      fr: "Conditions générales d'utilisation du site jonasdiop.com et des programmes DIOP Stratégies Internationales Inc. Inscription, propriété intellectuelle, remboursements et juridiction applicable.",
      en: 'General terms of use for the jonasdiop.com website and DIOP Stratégies Internationales Inc. programs. Registration, intellectual property, refunds, and applicable jurisdiction.'
    } satisfies BilingualLax<string>
  },

  hero: {
    eyebrow: {
      fr: "Conditions d'utilisation",
      en: 'Terms of use'
    } satisfies BilingualLax<string>,
    h1: {
      fr: "Conditions générales d'utilisation.",
      en: 'General terms of use.'
    } satisfies BilingualLax<string>,
    sub: {
      fr: "Conditions régissant l'utilisation du site jonasdiop.com et la participation aux programmes et formations de DIOP Stratégies Internationales Inc.",
      en: 'Terms governing the use of the jonasdiop.com website and participation in DIOP Stratégies Internationales Inc. programs and trainings.'
    } satisfies BilingualLax<string>
  },

  sections: [
    {
      id: 'objet',
      title: {
        fr: 'Objet',
        en: 'Purpose'
      } satisfies BilingualLax<string>,
      body: {
        fr: `Les présentes conditions générales d'utilisation (ci-après les « CGU ») régissent :

1. L'accès et l'utilisation du site web jonasdiop.com (et de son environnement de pré-production jonas-diop.intralys.dev) ;
2. La participation aux programmes de groupe, formations spécialisées et consultations privées proposés par DIOP Stratégies Internationales Inc.

**Éditeur :**
DIOP Stratégies Internationales Inc.
NEQ : [À VALIDER JONAS]
Courriel : contact@jonasdiop.com

Ces CGU s'appliquent à tout utilisateur du site, qu'il soit simple visiteur ou participant à l'un des programmes DIOP.`,
        en: `These general terms of use (hereinafter the "Terms") govern:

1. Access to and use of the jonasdiop.com website (and its pre-production environment jonas-diop.intralys.dev);
2. Participation in the group programs, specialised trainings, and private consultations offered by DIOP Stratégies Internationales Inc.

**Publisher:**
DIOP Stratégies Internationales Inc.
NEQ: [TO VALIDATE WITH JONAS]
Email: contact@jonasdiop.com

These Terms apply to all users of the website, whether simple visitors or participants in a DIOP program.`
      } satisfies BilingualLax<string>
    },
    {
      id: 'acceptation',
      title: {
        fr: 'Acceptation des conditions',
        en: 'Acceptance of terms'
      } satisfies BilingualLax<string>,
      body: {
        fr: `L'accès et l'utilisation du site jonasdiop.com impliquent l'acceptation pleine et entière des présentes CGU.

Si vous n'acceptez pas ces conditions, vous devez cesser immédiatement d'utiliser ce site.

Pour les participants à un programme ou une formation, l'inscription vaut acceptation expresse des présentes CGU, des conditions financières communiquées lors de l'appel de qualification, et de la Politique de confidentialité de DIOP Stratégies Internationales Inc.

DIOP Stratégies Internationales Inc. se réserve le droit de modifier ces CGU à tout moment. Les utilisateurs et participants seront informés de toute modification substantielle avec un préavis de 30 jours.`,
        en: `Accessing and using the jonasdiop.com website implies full and unconditional acceptance of these Terms.

If you do not accept these Terms, you must immediately cease using this website.

For participants in a program or training, registration constitutes express acceptance of these Terms, the financial terms communicated during the qualification call, and the Privacy Policy of DIOP Stratégies Internationales Inc.

DIOP Stratégies Internationales Inc. reserves the right to modify these Terms at any time. Users and participants will be notified of any material changes with 30 days' prior notice.`
      } satisfies BilingualLax<string>
    },
    {
      id: 'acces-site',
      title: {
        fr: 'Accès au site',
        en: 'Website access'
      } satisfies BilingualLax<string>,
      body: {
        fr: `DIOP Stratégies Internationales Inc. s'efforce d'assurer la disponibilité du site 24h/24, 7j/7. Toutefois, aucune garantie absolue de disponibilité n'est offerte.

L'accès au site peut être interrompu ou suspendu pour des raisons de :
- Maintenance planifiée ou corrective (avec préavis dans la mesure du possible) ;
- Incidents techniques indépendants de notre volonté (pannes d'hébergement, attaques informatiques, etc.) ;
- Force majeure.

DIOP Stratégies Internationales Inc. ne saurait être tenu responsable des dommages résultant d'une indisponibilité temporaire du site.`,
        en: `DIOP Stratégies Internationales Inc. endeavours to ensure website availability 24 hours a day, 7 days a week. However, no absolute guarantee of availability is offered.

Access to the website may be interrupted or suspended due to:
- Planned or corrective maintenance (with advance notice where possible);
- Technical incidents beyond our control (hosting outages, cyberattacks, etc.);
- Force majeure.

DIOP Stratégies Internationales Inc. shall not be liable for damages resulting from temporary unavailability of the website.`
      } satisfies BilingualLax<string>
    },
    {
      id: 'comportement-utilisateur',
      title: {
        fr: 'Comportement des utilisateurs',
        en: 'User conduct'
      } satisfies BilingualLax<string>,
      body: {
        fr: `En utilisant ce site, vous vous engagez à ne pas :

- Tenter de désassembler, décompiler, faire de l'ingénierie inverse (reverse engineering) ou copier tout ou partie du code source ou de la structure du site ;
- Procéder à du scraping automatisé, à de la collecte massive de données ou à tout accès automatisé non autorisé au site ;
- Publier, transmettre ou diffuser tout contenu illicite, diffamatoire, harcelant, frauduleux ou portant atteinte aux droits de tiers ;
- Tenter de compromettre la sécurité ou l'intégrité du site, de ses infrastructures ou des données de ses utilisateurs ;
- Utiliser ce site à des fins commerciales sans l'autorisation expresse écrite de DIOP Stratégies Internationales Inc.

Le non-respect de ces règles peut entraîner la suspension ou la résiliation immédiate de votre accès, et pourra faire l'objet de poursuites judiciaires.`,
        en: `By using this website, you agree not to:

- Attempt to disassemble, decompile, reverse engineer, or copy any part of the source code or structure of the website;
- Conduct automated scraping, mass data collection, or any other unauthorised automated access to the website;
- Post, transmit, or distribute any unlawful, defamatory, harassing, fraudulent, or third-party rights-infringing content;
- Attempt to compromise the security or integrity of the website, its infrastructure, or the data of its users;
- Use this website for commercial purposes without the express written authorisation of DIOP Stratégies Internationales Inc.

Failure to comply with these rules may result in the immediate suspension or termination of your access and may be subject to legal proceedings.`
      } satisfies BilingualLax<string>
    },
    {
      id: 'inscription-programmes',
      title: {
        fr: 'Inscription aux programmes et formations',
        en: 'Program and training registration'
      } satisfies BilingualLax<string>,
      body: {
        fr: `**Appel de qualification préalable obligatoire**

Aucune inscription à un programme ou une formation de DIOP Stratégies Internationales Inc. ne peut se faire sans avoir préalablement complété un appel de qualification avec Jonas Diop ou un représentant désigné. Cet appel est gratuit et sans engagement.

**Sélectivité et droit de refus**

DIOP Stratégies Internationales Inc. se réserve le droit discrétionnaire de refuser une inscription, sans avoir à en justifier la raison. Cette sélectivité est inhérente à la nature et à la qualité de nos programmes, et vise à garantir les meilleurs résultats pour tous les participants.

**Conditions financières**

Les conditions financières (investissement, modalités de paiement, options de financement disponibles) sont communiquées lors de l'appel de qualification. Aucun tarif n'est affiché publiquement.

[À VALIDER JONAS — préciser ici les modalités de paiement retenues : paiement intégral, versements, carte de crédit, virement, financement tiers, etc.]

Le paiement complet ou le premier versement est exigible avant le démarrage du programme.

**Confirmation d'inscription**

L'inscription est confirmée par écrit (courriel) dès réception du paiement requis. Ce courriel fait office de confirmation contractuelle.`,
        en: `**Mandatory prior qualification call**

No registration for a DIOP Stratégies Internationales Inc. program or training may take place without first completing a qualification call with Jonas Diop or a designated representative. This call is free and without commitment.

**Selectivity and right of refusal**

DIOP Stratégies Internationales Inc. reserves the discretionary right to refuse a registration without having to provide reasons. This selectivity is inherent to the nature and quality of our programs and aims to ensure the best outcomes for all participants.

**Financial terms**

Financial terms (investment, payment terms, available financing options) are communicated during the qualification call. No pricing is publicly listed.

[TO VALIDATE WITH JONAS — specify the payment terms retained here: full payment, instalments, credit card, wire transfer, third-party financing, etc.]

Full payment or the first instalment is due before the program begins.

**Registration confirmation**

Registration is confirmed in writing (by email) upon receipt of the required payment. This email serves as contractual confirmation.`
      } satisfies BilingualLax<string>
    },
    {
      id: 'politique-remboursement',
      title: {
        fr: "Politique de remboursement et d'annulation",
        en: 'Refund and cancellation policy'
      } satisfies BilingualLax<string>,
      body: {
        fr: `**Annulation par le participant avant démarrage**

- Annulation reçue **14 jours calendaires ou plus avant la date de démarrage** du programme : remboursement intégral des sommes versées, sans pénalité.
- Annulation reçue **moins de 14 jours avant la date de démarrage** : aucun remboursement, sauf dans les cas de force majeure documentés (voir section « Force majeure »).

**Après démarrage du programme**

Aucun remboursement n'est consenti après le début du premier module ou de la première session du programme, quelle qu'en soit la raison, sauf cas de force majeure dûment documentée acceptée par DIOP Stratégies Internationales Inc.

**Force majeure — cas exceptionnel**

En cas d'événement de force majeure dûment documenté (hospitalisation grave, décès d'un proche immédiat, catastrophe naturelle, etc.), DIOP Stratégies Internationales Inc. examinera la demande de remboursement ou de report au cas par cas, dans un délai de 15 jours ouvrables suivant réception du dossier complet.

**Procédure d'annulation**

Toute demande d'annulation doit être transmise par écrit à contact@jonasdiop.com avec l'objet **Annulation programme — [Votre nom]**.

[À VALIDER JONAS — confirmer ces délais et modalités avant publication]`,
        en: `**Cancellation by the participant before program start**

- Cancellation received **14 calendar days or more before the program start date**: full refund of amounts paid, without penalty.
- Cancellation received **less than 14 days before the program start date**: no refund, except in documented force majeure cases (see "Force majeure" section).

**After the program has started**

No refund is granted after the first module or first session of the program has begun, for any reason, except in duly documented force majeure cases accepted by DIOP Stratégies Internationales Inc.

**Force majeure — exceptional cases**

In the event of a duly documented force majeure event (serious hospitalisation, death of an immediate family member, natural disaster, etc.), DIOP Stratégies Internationales Inc. will review the refund or deferral request on a case-by-case basis within 15 business days of receiving the complete file.

**Cancellation procedure**

All cancellation requests must be submitted in writing to contact@jonasdiop.com with the subject **Program cancellation — [Your name]**.

[TO VALIDATE WITH JONAS — confirm these timelines and terms before publication]`
      } satisfies BilingualLax<string>
    },
    {
      id: 'propriete-intellectuelle-contenus',
      title: {
        fr: 'Propriété intellectuelle des contenus pédagogiques',
        en: 'Intellectual property of educational content'
      } satisfies BilingualLax<string>,
      body: {
        fr: `L'ensemble des contenus pédagogiques accessibles dans le cadre des programmes et formations de DIOP Stratégies Internationales Inc. — y compris mais sans s'y limiter : les vidéos de formation, workbooks, templates, frameworks, slides, enregistrements audio, fiches méthode, et toutes les composantes des méthodologies **CDT™** (Compression Dynamique du Temps) et **Cash & Scale™** — est la propriété exclusive de DIOP Stratégies Internationales Inc.

**Licence d'usage personnelle accordée aux participants :**

L'inscription à un programme confère au participant une licence d'usage personnelle, non exclusive, non cessible et non transférable, uniquement pour son usage personnel dans le cadre de sa propre activité professionnelle.

**Interdictions absolues :**

- Reproduire, distribuer, vendre, louer, prêter ou autrement transmettre tout contenu pédagogique à des tiers, quelle qu'en soit la forme ;
- Partager les accès à la plateforme, aux espaces membres ou aux ressources avec des personnes non inscrites ;
- Utiliser les contenus, frameworks ou méthodologies pour créer des programmes concurrents ou des produits dérivés destinés à la commercialisation ;
- Filmer, enregistrer ou retransmettre les sessions live sans autorisation écrite préalable.

Tout manquement à ces obligations entraîne la résiliation immédiate de l'accès, sans remboursement, et pourra donner lieu à des poursuites civiles et/ou pénales.`,
        en: `All educational content accessible through DIOP Stratégies Internationales Inc. programs and trainings — including but not limited to: training videos, workbooks, templates, frameworks, slides, audio recordings, method sheets, and all components of the **CDT™** (Dynamic Time Compression) and **Cash & Scale™** methodologies — is the exclusive property of DIOP Stratégies Internationales Inc.

**Personal use licence granted to participants:**

Registration in a program grants the participant a personal, non-exclusive, non-assignable, and non-transferable licence for use solely for their own personal purposes within the context of their own professional activity.

**Absolute prohibitions:**

- Reproducing, distributing, selling, renting, lending, or otherwise transmitting any educational content to third parties, in any form;
- Sharing access to the platform, member spaces, or resources with persons who are not registered;
- Using the content, frameworks, or methodologies to create competing programs or derivative products intended for commercial purposes;
- Filming, recording, or retransmitting live sessions without prior written authorisation.

Any breach of these obligations results in immediate termination of access, without refund, and may give rise to civil and/or criminal proceedings.`
      } satisfies BilingualLax<string>
    },
    {
      id: 'communaute-slack',
      title: {
        fr: "Communauté et espaces d'échange (Slack)",
        en: 'Community and discussion spaces (Slack)'
      } satisfies BilingualLax<string>,
      body: {
        fr: `Les participants aux programmes ont accès à un espace d'échange privé (Slack ou équivalent). La participation à cet espace est soumise aux règles suivantes :

**Respect mutuel**
Tout contenu offensant, harcelant, discriminatoire ou irrespectueux est prohibé. Les désaccords professionnels se traitent avec tact et constructivité.

**Confidentialité des échanges (NDA implicite)**
Les informations partagées par les autres participants dans l'espace communautaire (chiffres d'affaires, stratégies, défis business, données personnelles) sont confidentielles. Leur divulgation à l'extérieur du groupe est formellement interdite.

**Interdiction de promotion non sollicitée**
Toute promotion, publicité, sollicitation commerciale ou lien d'affiliation non sollicité est interdit sans l'accord préalable exprès de DIOP Stratégies Internationales Inc.

**Pouvoir d'exclusion**
DIOP Stratégies Internationales Inc. se réserve le droit, à sa seule discrétion, de retirer l'accès à la communauté à tout participant ne respectant pas ces règles, sans remboursement.`,
        en: `Program participants have access to a private discussion space (Slack or equivalent). Participation in this space is subject to the following rules:

**Mutual respect**
Any offensive, harassing, discriminatory, or disrespectful content is prohibited. Professional disagreements are to be handled with tact and constructiveness.

**Confidentiality of exchanges (implicit NDA)**
Information shared by other participants in the community space (revenue figures, strategies, business challenges, personal data) is confidential. Disclosure outside the group is strictly prohibited.

**No unsolicited promotion**
Any unsolicited promotion, advertising, commercial solicitation, or affiliate link is prohibited without the prior express agreement of DIOP Stratégies Internationales Inc.

**Power to exclude**
DIOP Stratégies Internationales Inc. reserves the right, at its sole discretion, to remove community access from any participant who does not comply with these rules, without refund.`
      } satisfies BilingualLax<string>
    },
    {
      id: 'temoignages-cas-study',
      title: {
        fr: 'Témoignages et études de cas',
        en: 'Testimonials and case studies'
      } satisfies BilingualLax<string>,
      body: {
        fr: `DIOP Stratégies Internationales Inc. peut solliciter votre autorisation pour publier vos résultats, témoignages ou éléments de votre parcours sous forme d'étude de cas, sur le site ou dans ses communications marketing.

Cette publication est toujours subordonnée à :
1. Votre **consentement explicite documenté**, recueilli par écrit (courriel ou formulaire signé) ;
2. La possibilité, à tout moment, de retirer ce consentement et de demander la dépublication, sans que cela n'affecte les traitements passés.

Les chiffres et résultats publiés sont exacts à la date de leur publication et représentatifs des performances de l'entrepreneur concerné. Ils ne constituent pas une garantie de résultats pour d'autres participants.`,
        en: `DIOP Stratégies Internationales Inc. may request your authorisation to publish your results, testimonials, or elements of your journey as a case study, on the website or in its marketing communications.

Such publication is always subject to:
1. Your **explicit documented consent**, collected in writing (email or signed form);
2. The ability, at any time, to withdraw this consent and request removal from publication, without affecting past processing.

Published figures and results are accurate as at their date of publication and representative of the performance of the relevant entrepreneur. They do not constitute a guarantee of results for other participants.`
      } satisfies BilingualLax<string>
    },
    {
      id: 'garanties-resultats',
      title: {
        fr: 'Garanties et résultats',
        en: 'Guarantees and results'
      } satisfies BilingualLax<string>,
      body: {
        fr: `**Résultats collectifs documentés**

Les programmes de DIOP Stratégies Internationales Inc. s'appuient sur des méthodologies éprouvées. À ce jour, les entrepreneurs ayant complété les programmes CDT™ ont collectivement généré plus de **31M$+ de chiffre d'affaires additionnel**, sur plus de **857+ entrepreneurs accompagnés**.

Ces chiffres sont représentatifs de l'ensemble des participants ayant complété les programmes et exécuté les recommandations.

**Résultats individuels variables — avertissement légal**

Les résultats individuels varient en fonction de nombreux facteurs, notamment :
- La situation de départ (chiffre d'affaires, secteur, modèle d'affaires, structure d'équipe) ;
- Le niveau d'engagement et d'exécution du participant ;
- Les conditions du marché au moment de l'exécution ;
- Les ressources disponibles (capital, équipe, temps) ;
- Des facteurs externes indépendants de la volonté de toutes les parties.

**Aucune garantie de résultat chiffré individuel n'est offerte, explicite ou implicite.** DIOP Stratégies Internationales Inc. garantit la qualité et la rigueur de la méthodologie CDT™, la précision du diagnostic personnalisé, et l'accompagnement actif pendant toute la durée du programme souscrit. Elle ne saurait garantir un résultat financier spécifique pour chaque participant.`,
        en: `**Documented collective results**

DIOP Stratégies Internationales Inc. programs are based on proven methodologies. To date, entrepreneurs who have completed CDT™ programs have collectively generated over **$31M+ CAD in additional revenue**, across more than **857+ coached entrepreneurs**.

These figures are representative of participants who completed the programs and implemented the recommendations.

**Variable individual results — legal disclaimer**

Individual results vary based on many factors, including:
- Starting situation (revenue, industry, business model, team structure);
- The participant's level of engagement and execution;
- Market conditions at the time of execution;
- Available resources (capital, team, time);
- External factors beyond the control of all parties.

**No guarantee of individual quantified results is offered, expressed, or implied.** DIOP Stratégies Internationales Inc. guarantees the quality and rigour of the CDT™ methodology, the precision of the personalised diagnostic, and active support throughout the duration of the subscribed program. It cannot guarantee a specific financial outcome for each participant.`
      } satisfies BilingualLax<string>
    },
    {
      id: 'limitation-responsabilite',
      title: {
        fr: 'Limitation de responsabilité',
        en: 'Limitation of liability'
      } satisfies BilingualLax<string>,
      body: {
        fr: `DIOP Stratégies Internationales Inc. fournit ses programmes, formations et services à titre d'accompagnement stratégique. La mise en œuvre des recommandations, décisions et stratégies élaborées dans le cadre des programmes reste sous la responsabilité exclusive du participant.

DIOP Stratégies Internationales Inc. ne saurait être tenue responsable :
- Des décisions d'affaires prises par les participants suite aux programmes ;
- Des pertes, manques à gagner, pertes d'opportunités ou dommages indirects résultant de l'application (ou de la non-application) des recommandations ;
- Des interactions, conflits ou préjudices survenus dans les espaces communautaires entre participants.

Dans tous les cas où la responsabilité de DIOP Stratégies Internationales Inc. serait retenue, le montant total des dommages-intérêts pouvant lui être réclamés est limité au montant effectivement payé par le participant pour le programme concerné.`,
        en: `DIOP Stratégies Internationales Inc. provides its programs, trainings, and services as strategic advisory support. The implementation of recommendations, decisions, and strategies developed within the programs remains the sole responsibility of the participant.

DIOP Stratégies Internationales Inc. shall not be held liable for:
- Business decisions made by participants following the programs;
- Losses, lost profits, missed opportunities, or indirect damages resulting from the application (or non-application) of recommendations;
- Interactions, conflicts, or harm occurring in community spaces between participants.

In all cases where the liability of DIOP Stratégies Internationales Inc. is established, the total amount of damages that may be claimed against it is limited to the amount effectively paid by the participant for the program in question.`
      } satisfies BilingualLax<string>
    },
    {
      id: 'force-majeure',
      title: {
        fr: 'Force majeure',
        en: 'Force majeure'
      } satisfies BilingualLax<string>,
      body: {
        fr: `En cas d'événement de force majeure — incluant sans s'y limiter : pandémie, épidémie, catastrophe naturelle, conflit armé, panne d'infrastructure critique, décès ou incapacité grave du formateur principal — DIOP Stratégies Internationales Inc. se réserve le droit de :

- Reporter le programme ou la formation à une date ultérieure ;
- Convertir tout ou partie du programme en format à distance (visioconférence, modules asynchrones) ;
- Dans les cas extrêmes et à sa seule discrétion, proposer un remboursement partiel ou total.

DIOP Stratégies Internationales Inc. informera les participants dans les meilleurs délais et mettra en œuvre les solutions les plus adaptées à la situation.`,
        en: `In the event of force majeure — including without limitation: pandemic, epidemic, natural disaster, armed conflict, critical infrastructure failure, death, or serious incapacity of the lead instructor — DIOP Stratégies Internationales Inc. reserves the right to:

- Postpone the program or training to a later date;
- Convert all or part of the program to a remote format (video conference, asynchronous modules);
- In extreme cases and at its sole discretion, offer a partial or full refund.

DIOP Stratégies Internationales Inc. will inform participants as promptly as possible and implement the solutions best suited to the situation.`
      } satisfies BilingualLax<string>
    },
    {
      id: 'modifications-conditions',
      title: {
        fr: 'Modifications des conditions',
        en: 'Changes to the terms'
      } satisfies BilingualLax<string>,
      body: {
        fr: `DIOP Stratégies Internationales Inc. se réserve le droit de modifier les présentes CGU à tout moment.

Pour toute modification substantielle (changement des droits ou obligations des participants, conditions financières, politique de remboursement), un préavis de **30 jours** sera fourni par :
- Courriel aux participants actifs ;
- Mise à jour du présent document avec indication de la date de modification.

L'utilisation continue du site ou la participation continue à un programme après notification constitue acceptation des nouvelles conditions.`,
        en: `DIOP Stratégies Internationales Inc. reserves the right to modify these Terms at any time.

For any material change (change to participants' rights or obligations, financial terms, refund policy), **30 days'** prior notice will be given by:
- Email to active participants;
- Update of this document with the date of modification.

Continued use of the website or continued participation in a program after notification constitutes acceptance of the new terms.`
      } satisfies BilingualLax<string>
    },
    {
      id: 'litiges-juridiction',
      title: {
        fr: 'Litiges et juridiction applicable',
        en: 'Disputes and applicable jurisdiction'
      } satisfies BilingualLax<string>,
      body: {
        fr: `**Droit applicable**

Les présentes CGU sont régies et interprétées conformément aux lois de la province de Québec et aux lois fédérales du Canada applicables, à l'exclusion de leurs règles de conflit de lois.

**Résolution amiable préalable obligatoire**

Avant toute action judiciaire, les parties s'engagent à tenter de résoudre tout différend à l'amiable. La partie qui souhaite engager ce processus doit en notifier l'autre par écrit (courriel avec accusé de réception). Les parties disposent alors d'un délai de **30 jours calendaires** pour parvenir à un accord.

**Juridiction compétente**

À défaut de résolution amiable dans ce délai, tout litige relatif à l'interprétation, à l'exécution ou à la résiliation des présentes CGU sera porté devant les tribunaux compétents du district de **Montréal, Québec, Canada**.

Les utilisateurs situés hors du Québec acceptent expressément la compétence de ces tribunaux et renoncent à se prévaloir de tout autre for ou loi nationale.`,
        en: `**Governing law**

These Terms are governed by and construed in accordance with the laws of the province of Québec and applicable federal laws of Canada, excluding their conflict of law rules.

**Mandatory prior amicable resolution**

Before initiating any legal proceedings, the parties agree to attempt to resolve any dispute amicably. The party wishing to initiate this process must notify the other in writing (email with acknowledgement of receipt). The parties then have **30 calendar days** to reach an agreement.

**Competent jurisdiction**

Failing amicable resolution within this period, any dispute regarding the interpretation, performance, or termination of these Terms shall be brought before the competent courts of the district of **Montréal, Québec, Canada**.

Users located outside Québec expressly accept the jurisdiction of these courts and waive the right to invoke any other forum or national law.`
      } satisfies BilingualLax<string>
    }
  ],

  lastUpdate: {
    fr: 'Mise à jour : [À VALIDER JONAS — date de publication du site]',
    en: 'Last updated: [TO VALIDATE WITH JONAS — site publication date]'
  } satisfies BilingualLax<string>
} as const;
