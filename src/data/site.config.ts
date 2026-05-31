/**
 * SITE CONFIG — single source of truth for branding & business info.
 * Edit this file first when starting a new site. Most of the template reads from here.
 *
 * Expand each section as needed for your business type.
 */

export const site = {
  // ---- Business identity ----
  name: "Finch Hill Restaurant & Dairy Bar",
  tagline: "Homemade comfort, classic Italian, and sweet summer soft-serve.",
  description:
    "A local crossroads institution in Greenfield Township, PA, for over 30 years. Serving hearty breakfasts, famous chicken tenders, Italian specialties, and seasonal ice cream.",

  // ---- Contact ----
  email: "info@finchhillrestaurant.com",
  phone: "5702826750",
  phoneDisplay: "(570) 282-6750", // formatted for display
  address: {
    street: "393 PA Route 247",
    city: "Greenfield Township",
    state: "PA",
    zip: "18407",
    country: "US",
  },
  serviceAreas: ["Greenfield Township", "Carbondale", "Crystal Lake", "Dundaff", "Endless Mountains"],
  hours: {
    monday: "7:00 AM – 3:00 PM",
    tuesday: "7:00 AM – 8:00 PM",
    wednesday: "7:00 AM – 8:00 PM",
    thursday: "7:00 AM – 8:00 PM",
    friday: "7:00 AM – 8:00 PM",
    saturday: "7:00 AM – 8:00 PM",
    sunday: "7:00 AM – 8:00 PM",
  },

  // ---- URLs ----
  url: "https://finchhillrestaurant.com", // no trailing slash
  ogImage: "/og-image.png", // 1200x630 social share image (replace the placeholder in /public)

  // ---- Social ----
  social: {
    facebook: "https://www.facebook.com/profile.php?id=100063628469372", // full URL or empty string
    instagram: "",
    twitter: "",
    linkedin: "",
    youtube: "",
  },

  // ---- Analytics (paste IDs to activate; leave blank to skip) ----
  analytics: {
    googleAnalyticsId: "", // e.g. "G-XXXXXXXXXX"
    googleTagManagerId: "", // e.g. "GTM-XXXXXXX"
    facebookPixelId: "",
    plausibleDomain: "", // e.g. "yourbusiness.com"
  },

  // ---- Schema.org / structured data ----
  // Used for LocalBusiness schema. Change "@type" to match: LocalBusiness,
  // ProfessionalService, HomeAndConstructionBusiness, Restaurant, Store, etc.
  schemaType: "Restaurant",
  priceRange: "$", // $, $$, $$$, $$$$
  foundingYear: 1990,

  // ---- Design / Theming ----
  // Choose a theme preset or leave blank for default professional theme.
  // Options: "professional" | "creative" | "natural" | "luxury" | "medical"
  theme: "professional",

  // ---- Localization / i18n ----
  // Set locale for date formatting, number formatting, and language attributes.
  locale: "en-US", // e.g. "es-MX", "fr-FR", "de-DE"
  // Additional languages (add more as needed)
  languages: [
    { code: "en", label: "English", active: true },
    // { code: "es", label: "Español", active: false },
  ],

  // ---- Cookie consent ----
  cookieConsent: {
    enabled: true,
    message: "This site uses cookies to improve your experience. By continuing, you agree to our use of cookies.",
  },

  // ---- Coming Soon / Maintenance Mode ----
  // Set to true to show a coming-soon page instead of the regular site.
  comingSoon: {
    enabled: false,
    heading: "Coming Soon",
    message: "We're working on something great. Check back soon!",
    launchDate: "", // optional ISO date e.g. "2025-06-01"
  },
} as const;

// ---- Navigation ----
// Edit nav items here; they appear in header and footer automatically.
export const nav = {
  primary: [
    { label: "Home", href: "/" },
    { label: "Menu", href: "/menu" },
    { label: "Our Story", href: "/about" },
    { label: "Gallery", href: "/gallery" },
    { label: "Contact", href: "/contact" },
  ],
  cta: { label: "Call to Order", href: "tel:5702826750" },
  legal: [
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms of Service", href: "/terms" },
  ],
};

export type Site = typeof site;
