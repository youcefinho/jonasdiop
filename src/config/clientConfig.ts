/**
 * Client config — Jonas Diop / DIOP Stratégies Internationales Inc.
 * Tous les IDs externes vides ici → remplis en fin de projet (Sprint 6+).
 * Pattern : type strict + valeurs vides → erreur typecheck si on en ajoute mal.
 */

export interface ClientConfig {
  readonly client: {
    readonly name: string;
    readonly legalName: string;
    readonly neq: string | null;
    readonly email: string;
    readonly phone: string;
    readonly address: {
      readonly street: string;
      readonly city: string;
      readonly province: string;
      readonly postalCode: string | null;
      readonly country: string;
      readonly publiclyDisplayed: boolean;
    };
    readonly socials: {
      readonly facebook: string | null;
      readonly instagram: string | null;
      readonly linkedin: string | null;
      readonly x: string | null;
      readonly tiktok: string | null;
      readonly youtube: string | null;
    };
  };

  readonly ghl: {
    readonly locationId: string;
    readonly trackingId: string;
    readonly formId: string;
  };

  readonly calendly: {
    readonly username: string;
    readonly eventUrl: string;
  };

  readonly tracking: {
    readonly metaPixelId: string;
    readonly ga4MeasurementId: string;
    readonly clarityProjectId: string;
  };

  readonly site: {
    readonly stagingUrl: string;
    readonly productionUrl: string;
    readonly finalDomain: string;
  };

  /**
   * Podcast "The Game Changer" — H17 pending Jonas.
   * 'coming_soon' (default) renders waitlist scenario.
   * 'live' renders episode embeds + platforms scenario.
   * URLs filled when H17 confirmed.
   */
  readonly podcast: {
    readonly status: 'live' | 'coming_soon';
    readonly spotifyUrl: string | null;
    readonly applePodcastsUrl: string | null;
    readonly youtubeUrl: string | null;
  };

  /**
   * Sentry error monitoring — empty DSN = no-op init (Sprint 6 scaffold state).
   * Filled when Sentry project provisioned. Tracing + Replay disabled by default ;
   * enable per-env in initSentry() once volume justifies the sampling cost.
   */
  readonly sentry: {
    readonly dsn: string;
    readonly environment: 'staging' | 'production' | 'development';
    readonly release: string;
  };
}

export const clientConfig: ClientConfig = {
  client: {
    name: 'Jonas Diop',
    legalName: 'DIOP Stratégies Internationales Inc.',
    neq: null, // ⏳ H8 — à récupérer
    email: 'contact@jonasdiop.com',
    phone: '+14383567746',
    address: {
      street: '2381 Rue Préfontaine',
      city: 'Montréal',
      province: 'QC',
      postalCode: null, // brief ne précise pas
      country: 'CA',
      publiclyDisplayed: false // brief dit B. Non
    },
    socials: {
      facebook: 'https://www.facebook.com/JonasDiopDM/',
      instagram: 'https://www.instagram.com/jonasdiopdm/',
      linkedin: 'https://www.linkedin.com/in/jonasdiopdm/',
      x: 'https://x.com/JonasDiopDM',
      tiktok: null, // ⏳ URL brief pointe LinkedIn par erreur (question pending)
      youtube: null
    }
  },

  ghl: {
    locationId: '', // ⏳ H8
    trackingId: '', // ⏳ H8
    formId: '' // ⏳ H8
  },

  calendly: {
    username: '', // ⏳ H8
    eventUrl: '' // ⏳ H8
  },

  tracking: {
    metaPixelId: '', // ⏳ H9
    ga4MeasurementId: '', // ⏳ H9
    clarityProjectId: '' // ⏳ H9
  },

  site: {
    stagingUrl: 'https://jonas-diop-staging.intralys.dev',
    productionUrl: 'https://jonas-diop.intralys.dev',
    finalDomain: 'jonasdiop.com'
  },

  podcast: {
    status: 'coming_soon', // ⏳ H17 — flip to 'live' once Jonas confirms platforms
    spotifyUrl: null, // ⏳ H17
    applePodcastsUrl: null, // ⏳ H17
    youtubeUrl: null // ⏳ H17
  },

  sentry: {
    dsn: '', // ⏳ Empty → initSentry() is a no-op ; fill once Sentry project provisioned
    environment: 'production',
    release: 'jonas-diop@sprint-6'
  }
} as const;
