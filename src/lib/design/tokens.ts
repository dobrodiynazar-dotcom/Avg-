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
    canvas: "#010102",
    surface1: "#0f1115",
    surface2: "#151922",
    surface3: "#1b212c",
    surface4: "#222a36",
    hairline: "#23252a",
    hairlineStrong: "#30333a",
    hairlineTertiary: "#3b414b",
    ink: "#f7f8f8",
    inkMuted: "#d0d6e0",
    inkSubtle: "#8a8f98",
    inkTertiary: "#62666d",
    primary: "#5e6ad2",
    primaryHover: "#828fff",
    primaryFocus: "#5e69d1",
    brandSecure: "#7a7fad",
    inverseCanvas: "#ffffff",
    inverseSurface1: "#f3f4f6",
    inverseSurface2: "#e6e8ec",
    inverseInk: "#010102",
    semanticSuccess: "#27a644",
    semanticOverlay: "rgb(0 0 0 / 0.72)",
  } satisfies Record<ColorTokenName, string>,
  typography: {
    displayXl: {
      fontSize: "clamp(2.5rem, 6vw, 5rem)",
      lineHeight: "1.05",
      fontWeight: 600,
      letterSpacing: "-0.06em",
    },
    displayLg: {
      fontSize: "clamp(2.125rem, 4.2vw, 3.5rem)",
      lineHeight: "1.1",
      fontWeight: 600,
      letterSpacing: "-0.04em",
    },
    displayMd: {
      fontSize: "clamp(1.875rem, 3vw, 2.5rem)",
      lineHeight: "1.15",
      fontWeight: 600,
      letterSpacing: "-0.03em",
    },
    headline: {
      fontSize: "1.75rem",
      lineHeight: "1.2",
      fontWeight: 600,
      letterSpacing: "-0.02em",
    },
    cardTitle: {
      fontSize: "1.375rem",
      lineHeight: "1.25",
      fontWeight: 500,
      letterSpacing: "-0.018em",
    },
    subhead: {
      fontSize: "1.25rem",
      lineHeight: "1.4",
      fontWeight: 400,
      letterSpacing: "-0.01em",
    },
    bodyLg: {
      fontSize: "1.125rem",
      lineHeight: "1.5",
      fontWeight: 400,
      letterSpacing: "-0.006em",
    },
    body: {
      fontSize: "1rem",
      lineHeight: "1.5",
      fontWeight: 400,
      letterSpacing: "-0.003em",
    },
    bodySm: {
      fontSize: "0.875rem",
      lineHeight: "1.5",
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
      lineHeight: "1.2",
      fontWeight: 500,
      letterSpacing: "0",
    },
    eyebrow: {
      fontSize: "0.8125rem",
      lineHeight: "1.3",
      fontWeight: 500,
      letterSpacing: "0.03em",
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
    xs: "0.5rem",
    sm: "0.75rem",
    md: "1rem",
    lg: "1.5rem",
    xl: "2rem",
    xxl: "3rem",
    section: "6rem",
  },
  radii: {
    xs: "0.25rem",
    sm: "0.375rem",
    md: "0.5rem",
    lg: "0.75rem",
    xl: "1rem",
    xxl: "1.5rem",
    pill: "9999px",
    full: "9999px",
  },
  shadows: {
    edge: "inset 0 1px 0 rgb(255 255 255 / 0.04)",
    focus: "0 0 0 2px rgb(94 105 209 / 0.5)",
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
