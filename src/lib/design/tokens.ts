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
    canvas: "#181818",
    surface1: "#181818",
    surface2: "#303030",
    surface3: "#f7f7f7",
    surface4: "#ffffff",
    hairline: "#303030",
    hairlineStrong: "#d2d2d2",
    hairlineTertiary: "#ebebeb",
    ink: "#ffffff",
    inkMuted: "#969696",
    inkSubtle: "#8f8f8f",
    inkTertiary: "#666666",
    primary: "#da291c",
    primaryHover: "#9d2211",
    primaryFocus: "#fff200",
    brandSecure: "#f6e500",
    inverseCanvas: "#ffffff",
    inverseSurface1: "#f7f7f7",
    inverseSurface2: "#ebebeb",
    inverseInk: "#181818",
    semanticSuccess: "#03904a",
    semanticOverlay: "rgb(24 24 24 / 0.72)",
  } satisfies Record<ColorTokenName, string>,
  typography: {
    displayXl: {
      fontSize: "clamp(3.5rem, 8vw, 5rem)",
      lineHeight: "1.05",
      fontWeight: 500,
      letterSpacing: "-0.1rem",
    },
    displayLg: {
      fontSize: "clamp(2.5rem, 5vw, 3.5rem)",
      lineHeight: "1.1",
      fontWeight: 500,
      letterSpacing: "-0.07rem",
    },
    displayMd: {
      fontSize: "clamp(1.625rem, 3vw, 2.25rem)",
      lineHeight: "1.2",
      fontWeight: 500,
      letterSpacing: "-0.0225rem",
    },
    headline: {
      fontSize: "1.125rem",
      lineHeight: "1.2",
      fontWeight: 700,
      letterSpacing: "0",
    },
    cardTitle: {
      fontSize: "1.125rem",
      lineHeight: "1.2",
      fontWeight: 700,
      letterSpacing: "0",
    },
    subhead: {
      fontSize: "1rem",
      lineHeight: "1.5",
      fontWeight: 500,
      letterSpacing: "0.0125rem",
    },
    bodyLg: {
      fontSize: "0.9375rem",
      lineHeight: "1.7",
      fontWeight: 400,
      letterSpacing: "0",
    },
    body: {
      fontSize: "0.875rem",
      lineHeight: "1.65",
      fontWeight: 400,
      letterSpacing: "0",
    },
    bodySm: {
      fontSize: "0.8125rem",
      lineHeight: "1.6",
      fontWeight: 400,
      letterSpacing: "0",
    },
    caption: {
      fontSize: "0.75rem",
      lineHeight: "1.4",
      fontWeight: 400,
      letterSpacing: "0",
    },
    button: {
      fontSize: "0.875rem",
      lineHeight: "1",
      fontWeight: 700,
      letterSpacing: "0.0875rem",
    },
    eyebrow: {
      fontSize: "0.6875rem",
      lineHeight: "1.4",
      fontWeight: 600,
      letterSpacing: "0.08rem",
    },
    mono: {
      fontSize: "0.8125rem",
      lineHeight: "1.5",
      fontWeight: 400,
      letterSpacing: "0",
    },
  } satisfies Record<TypographyTokenName, SizeToken>,
  spacing: {
    xxs: "0.5rem",
    xs: "1rem",
    sm: "1.5rem",
    md: "2rem",
    lg: "3rem",
    xl: "4rem",
    xxl: "6rem",
    section: "6rem",
  },
  radii: {
    xs: "2px",
    sm: "4px",
    md: "0px",
    lg: "0px",
    xl: "12px",
    xxl: "12px",
    pill: "9999px",
    full: "9999px",
  },
  shadows: {
    edge: "0 4px 8px rgb(0 0 0 / 0.1)",
    focus: "0 0 0 2px #181818, 0 0 0 4px #fff200",
  },
  layout: {
    containerMax: "80rem",
    containerPaddingMobile: "1rem",
    containerPaddingDesktop: "2rem",
    sectionGap: "6rem",
    sectionGapCompact: "4rem",
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
