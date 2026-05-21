export type ColorTokenName =
  | "canvas"
  | "surface1"
  | "surface2"
  | "surface3"
  | "surface4"
  | "hairline"
  | "hairlineStrong"
  | "hairlineTertiary"
  | "ink"
  | "inkMuted"
  | "inkSubtle"
  | "inkTertiary"
  | "primary"
  | "primaryHover"
  | "primaryFocus"
  | "brandSecure"
  | "inverseCanvas"
  | "inverseSurface1"
  | "inverseSurface2"
  | "inverseInk"
  | "semanticSuccess"
  | "semanticOverlay";

export type TypographyTokenName =
  | "displayXl"
  | "displayLg"
  | "displayMd"
  | "headline"
  | "cardTitle"
  | "subhead"
  | "bodyLg"
  | "body"
  | "bodySm"
  | "caption"
  | "button"
  | "eyebrow"
  | "mono";

export type SizeToken = {
  fontSize: string;
  lineHeight: string;
  fontWeight: number;
  letterSpacing: string;
};

export const designTokens = {
  colors: {
    canvas: "#ffffff",
    surface1: "#fbfbf9",
    surface2: "#f6f6f3",
    surface3: "#e5e5e0",
    surface4: "#262622",
    hairline: "#dadad3",
    hairlineStrong: "#c8c8c1",
    hairlineTertiary: "#b6b6af",
    ink: "#000000",
    inkMuted: "#33332e",
    inkSubtle: "#62625b",
    inkTertiary: "#91918c",
    primary: "#e60023",
    primaryHover: "#cc001f",
    primaryFocus: "#435ee5",
    brandSecure: "#211922",
    inverseCanvas: "#262622",
    inverseSurface1: "#33332e",
    inverseSurface2: "#62625b",
    inverseInk: "#ffffff",
    semanticSuccess: "#103c25",
    semanticOverlay: "rgb(38 38 34 / 0.5)",
  } satisfies Record<ColorTokenName, string>,
  typography: {
    displayXl: {
      fontSize: "clamp(2.75rem, 7vw, 4.375rem)",
      lineHeight: "1.1",
      fontWeight: 600,
      letterSpacing: "-0.075rem",
    },
    displayLg: {
      fontSize: "clamp(2rem, 4.5vw, 2.75rem)",
      lineHeight: "1.15",
      fontWeight: 700,
      letterSpacing: "-0.05rem",
    },
    displayMd: {
      fontSize: "clamp(1.75rem, 3vw, 2rem)",
      lineHeight: "1.2",
      fontWeight: 600,
      letterSpacing: "-0.03rem",
    },
    headline: {
      fontSize: "1.75rem",
      lineHeight: "1.2",
      fontWeight: 700,
      letterSpacing: "-0.075rem",
    },
    cardTitle: {
      fontSize: "1.375rem",
      lineHeight: "1.25",
      fontWeight: 600,
      letterSpacing: "0",
    },
    subhead: {
      fontSize: "1.125rem",
      lineHeight: "1.4",
      fontWeight: 400,
      letterSpacing: "0",
    },
    bodyLg: {
      fontSize: "1rem",
      lineHeight: "1.4",
      fontWeight: 400,
      letterSpacing: "0",
    },
    body: {
      fontSize: "1rem",
      lineHeight: "1.4",
      fontWeight: 400,
      letterSpacing: "0",
    },
    bodySm: {
      fontSize: "0.875rem",
      lineHeight: "1.4",
      fontWeight: 400,
      letterSpacing: "0",
    },
    caption: {
      fontSize: "0.75rem",
      lineHeight: "1.5",
      fontWeight: 500,
      letterSpacing: "0",
    },
    button: {
      fontSize: "0.875rem",
      lineHeight: "1",
      fontWeight: 700,
      letterSpacing: "0",
    },
    eyebrow: {
      fontSize: "0.75rem",
      lineHeight: "1.5",
      fontWeight: 500,
      letterSpacing: "0",
    },
    mono: {
      fontSize: "0.8125rem",
      lineHeight: "1.5",
      fontWeight: 400,
      letterSpacing: "0",
    },
  } satisfies Record<TypographyTokenName, SizeToken>,
  spacing: {
    xxs: "0.25rem",
    xs: "0.375rem",
    sm: "0.5rem",
    md: "0.75rem",
    lg: "1rem",
    xl: "1.5rem",
    xxl: "2rem",
    section: "4rem",
  },
  radii: {
    xs: "0.5rem",
    sm: "1rem",
    md: "1rem",
    lg: "2rem",
    xl: "2rem",
    xxl: "2rem",
    pill: "9999px",
    full: "9999px",
  },
  shadows: {
    edge: "none",
    focus: "0 0 0 2px #ffffff, 0 0 0 4px #435ee5",
  },
  layout: {
    containerMax: "80rem",
    containerPaddingMobile: "1rem",
    containerPaddingDesktop: "2rem",
    sectionGap: "4rem",
    sectionGapCompact: "3rem",
  },
  breakpoints: {
    mobile: 480,
    mobileLg: 768,
    tablet: 1024,
    desktop: 1280,
    desktopXl: 1440,
  },
} as const;

export type DesignTokens = typeof designTokens;
