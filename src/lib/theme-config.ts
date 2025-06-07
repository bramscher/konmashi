// Theme configuration for brand-specific theming
// Based on shadcn/ui color system

export type BrandThemeColor = 
  | 'RED' | 'ROSE' | 'ORANGE' | 'GREEN' | 'BLUE' | 'YELLOW' | 'VIOLET'
  | 'NEUTRAL' | 'STONE' | 'ZINC' | 'SLATE' | 'GRAY' | 'AMBER' | 'LIME'
  | 'EMERALD' | 'TEAL' | 'CYAN' | 'SKY' | 'INDIGO' | 'PURPLE' | 'FUCHSIA' | 'PINK';

// Default theme colors for brands 1-9
export const DEFAULT_BRAND_COLORS: BrandThemeColor[] = [
  'RED',     // Brand 1
  'ROSE',    // Brand 2  
  'ORANGE',  // Brand 3
  'GREEN',   // Brand 4
  'BLUE',    // Brand 5
  'YELLOW',  // Brand 6
  'VIOLET',  // Brand 7
  'RED',     // Brand 8 (cycles back)
  'ROSE',    // Brand 9 (cycles back)
];

// Theme color mappings to CSS custom properties
// Based on shadcn/ui Tailwind color system
export const THEME_COLOR_MAP: Record<BrandThemeColor, {
  primary: string;
  primaryForeground: string;
  secondary: string;
  secondaryForeground: string;
  accent: string;
  accentForeground: string;
  muted: string;
  mutedForeground: string;
  border: string;
  input: string;
  ring: string;
  destructive: string;
  destructiveForeground: string;
}> = {
  RED: {
    primary: '239 68 68',          // red-500
    primaryForeground: '255 255 255', // white
    secondary: '254 226 226',      // red-100
    secondaryForeground: '127 29 29', // red-900
    accent: '254 202 202',         // red-200
    accentForeground: '127 29 29', // red-900
    muted: '254 226 226',          // red-100
    mutedForeground: '185 28 28',  // red-700
    border: '254 202 202',         // red-200
    input: '254 202 202',          // red-200
    ring: '239 68 68',             // red-500
    destructive: '220 38 38',      // red-600
    destructiveForeground: '255 255 255', // white
  },
  ROSE: {
    primary: '244 63 94',          // rose-500
    primaryForeground: '255 255 255',
    secondary: '255 228 230',      // rose-100
    secondaryForeground: '136 19 55', // rose-900
    accent: '254 205 211',         // rose-200
    accentForeground: '136 19 55',
    muted: '255 228 230',
    mutedForeground: '190 18 60',  // rose-700
    border: '254 205 211',
    input: '254 205 211',
    ring: '244 63 94',
    destructive: '220 38 38',
    destructiveForeground: '255 255 255',
  },
  ORANGE: {
    primary: '249 115 22',         // orange-500
    primaryForeground: '255 255 255',
    secondary: '254 215 170',      // orange-200
    secondaryForeground: '124 45 18', // orange-900
    accent: '253 186 116',         // orange-300
    accentForeground: '124 45 18',
    muted: '254 215 170',
    mutedForeground: '194 65 12',  // orange-700
    border: '253 186 116',
    input: '253 186 116',
    ring: '249 115 22',
    destructive: '220 38 38',
    destructiveForeground: '255 255 255',
  },
  GREEN: {
    primary: '34 197 94',          // green-500
    primaryForeground: '255 255 255',
    secondary: '220 252 231',      // green-100
    secondaryForeground: '20 83 45', // green-900
    accent: '187 247 208',         // green-200
    accentForeground: '20 83 45',
    muted: '220 252 231',
    mutedForeground: '21 128 61',  // green-700
    border: '187 247 208',
    input: '187 247 208',
    ring: '34 197 94',
    destructive: '220 38 38',
    destructiveForeground: '255 255 255',
  },
  BLUE: {
    primary: '59 130 246',         // blue-500
    primaryForeground: '255 255 255',
    secondary: '219 234 254',      // blue-100
    secondaryForeground: '30 58 138', // blue-900
    accent: '191 219 254',         // blue-200
    accentForeground: '30 58 138',
    muted: '219 234 254',
    mutedForeground: '29 78 216',  // blue-700
    border: '191 219 254',
    input: '191 219 254',
    ring: '59 130 246',
    destructive: '220 38 38',
    destructiveForeground: '255 255 255',
  },
  YELLOW: {
    primary: '234 179 8',          // yellow-500
    primaryForeground: '255 255 255',
    secondary: '254 240 138',      // yellow-200
    secondaryForeground: '113 63 18', // yellow-900
    accent: '253 224 71',          // yellow-300
    accentForeground: '113 63 18',
    muted: '254 240 138',
    mutedForeground: '161 98 7',   // yellow-700
    border: '253 224 71',
    input: '253 224 71',
    ring: '234 179 8',
    destructive: '220 38 38',
    destructiveForeground: '255 255 255',
  },
  VIOLET: {
    primary: '139 92 246',         // violet-500
    primaryForeground: '255 255 255',
    secondary: '221 214 254',      // violet-200
    secondaryForeground: '55 48 163', // violet-900
    accent: '196 181 253',         // violet-300
    accentForeground: '55 48 163',
    muted: '221 214 254',
    mutedForeground: '109 40 217', // violet-700
    border: '196 181 253',
    input: '196 181 253',
    ring: '139 92 246',
    destructive: '220 38 38',
    destructiveForeground: '255 255 255',
  },
  // Additional colors for team admin selection
  NEUTRAL: {
    primary: '115 115 115',        // neutral-500
    primaryForeground: '255 255 255',
    secondary: '245 245 245',      // neutral-100
    secondaryForeground: '23 23 23', // neutral-900
    accent: '229 229 229',         // neutral-200
    accentForeground: '23 23 23',
    muted: '245 245 245',
    mutedForeground: '64 64 64',   // neutral-700
    border: '229 229 229',
    input: '229 229 229',
    ring: '115 115 115',
    destructive: '220 38 38',
    destructiveForeground: '255 255 255',
  },
  STONE: {
    primary: '120 113 108',        // stone-500
    primaryForeground: '255 255 255',
    secondary: '245 245 244',      // stone-100
    secondaryForeground: '28 25 23', // stone-900
    accent: '231 229 228',         // stone-200
    accentForeground: '28 25 23',
    muted: '245 245 244',
    mutedForeground: '68 64 60',   // stone-700
    border: '231 229 228',
    input: '231 229 228',
    ring: '120 113 108',
    destructive: '220 38 38',
    destructiveForeground: '255 255 255',
  },
  ZINC: {
    primary: '113 113 122',        // zinc-500
    primaryForeground: '255 255 255',
    secondary: '244 244 245',      // zinc-100
    secondaryForeground: '24 24 27', // zinc-900
    accent: '228 228 231',         // zinc-200
    accentForeground: '24 24 27',
    muted: '244 244 245',
    mutedForeground: '63 63 70',   // zinc-700
    border: '228 228 231',
    input: '228 228 231',
    ring: '113 113 122',
    destructive: '220 38 38',
    destructiveForeground: '255 255 255',
  },
  SLATE: {
    primary: '100 116 139',        // slate-500
    primaryForeground: '255 255 255',
    secondary: '241 245 249',      // slate-100
    secondaryForeground: '15 23 42', // slate-900
    accent: '226 232 240',         // slate-200
    accentForeground: '15 23 42',
    muted: '241 245 249',
    mutedForeground: '51 65 85',   // slate-700
    border: '226 232 240',
    input: '226 232 240',
    ring: '100 116 139',
    destructive: '220 38 38',
    destructiveForeground: '255 255 255',
  },
  GRAY: {
    primary: '107 114 128',        // gray-500
    primaryForeground: '255 255 255',
    secondary: '243 244 246',      // gray-100
    secondaryForeground: '17 24 39', // gray-900
    accent: '229 231 235',         // gray-200
    accentForeground: '17 24 39',
    muted: '243 244 246',
    mutedForeground: '55 65 81',   // gray-700
    border: '229 231 235',
    input: '229 231 235',
    ring: '107 114 128',
    destructive: '220 38 38',
    destructiveForeground: '255 255 255',
  },
  AMBER: {
    primary: '245 158 11',         // amber-500
    primaryForeground: '255 255 255',
    secondary: '254 230 153',      // amber-200
    secondaryForeground: '120 53 15', // amber-900
    accent: '252 211 77',          // amber-300
    accentForeground: '120 53 15',
    muted: '254 230 153',
    mutedForeground: '180 83 9',   // amber-700
    border: '252 211 77',
    input: '252 211 77',
    ring: '245 158 11',
    destructive: '220 38 38',
    destructiveForeground: '255 255 255',
  },
  LIME: {
    primary: '132 204 22',         // lime-500
    primaryForeground: '255 255 255',
    secondary: '236 252 203',      // lime-200
    secondaryForeground: '54 83 20', // lime-900
    accent: '217 249 157',         // lime-300
    accentForeground: '54 83 20',
    muted: '236 252 203',
    mutedForeground: '77 124 15',  // lime-700
    border: '217 249 157',
    input: '217 249 157',
    ring: '132 204 22',
    destructive: '220 38 38',
    destructiveForeground: '255 255 255',
  },
  EMERALD: {
    primary: '16 185 129',         // emerald-500
    primaryForeground: '255 255 255',
    secondary: '209 250 229',      // emerald-100
    secondaryForeground: '6 78 59', // emerald-900
    accent: '167 243 208',         // emerald-200
    accentForeground: '6 78 59',
    muted: '209 250 229',
    mutedForeground: '4 120 87',   // emerald-700
    border: '167 243 208',
    input: '167 243 208',
    ring: '16 185 129',
    destructive: '220 38 38',
    destructiveForeground: '255 255 255',
  },
  TEAL: {
    primary: '20 184 166',         // teal-500
    primaryForeground: '255 255 255',
    secondary: '204 251 241',      // teal-100
    secondaryForeground: '19 78 74', // teal-900
    accent: '153 246 228',         // teal-200
    accentForeground: '19 78 74',
    muted: '204 251 241',
    mutedForeground: '15 118 110', // teal-700
    border: '153 246 228',
    input: '153 246 228',
    ring: '20 184 166',
    destructive: '220 38 38',
    destructiveForeground: '255 255 255',
  },
  CYAN: {
    primary: '6 182 212',          // cyan-500
    primaryForeground: '255 255 255',
    secondary: '207 250 254',      // cyan-100
    secondaryForeground: '22 78 99', // cyan-900
    accent: '165 243 252',         // cyan-200
    accentForeground: '22 78 99',
    muted: '207 250 254',
    mutedForeground: '14 116 144', // cyan-700
    border: '165 243 252',
    input: '165 243 252',
    ring: '6 182 212',
    destructive: '220 38 38',
    destructiveForeground: '255 255 255',
  },
  SKY: {
    primary: '14 165 233',         // sky-500
    primaryForeground: '255 255 255',
    secondary: '224 242 254',      // sky-100
    secondaryForeground: '12 74 110', // sky-900
    accent: '186 230 253',         // sky-200
    accentForeground: '12 74 110',
    muted: '224 242 254',
    mutedForeground: '3 105 161',  // sky-700
    border: '186 230 253',
    input: '186 230 253',
    ring: '14 165 233',
    destructive: '220 38 38',
    destructiveForeground: '255 255 255',
  },
  INDIGO: {
    primary: '99 102 241',         // indigo-500
    primaryForeground: '255 255 255',
    secondary: '224 231 255',      // indigo-200
    secondaryForeground: '49 46 129', // indigo-900
    accent: '199 210 254',         // indigo-300
    accentForeground: '49 46 129',
    muted: '224 231 255',
    mutedForeground: '67 56 202',  // indigo-700
    border: '199 210 254',
    input: '199 210 254',
    ring: '99 102 241',
    destructive: '220 38 38',
    destructiveForeground: '255 255 255',
  },
  PURPLE: {
    primary: '168 85 247',         // purple-500
    primaryForeground: '255 255 255',
    secondary: '233 213 255',      // purple-200
    secondaryForeground: '59 7 100', // purple-900
    accent: '196 181 253',         // purple-300
    accentForeground: '59 7 100',
    muted: '233 213 255',
    mutedForeground: '126 34 206', // purple-700
    border: '196 181 253',
    input: '196 181 253',
    ring: '168 85 247',
    destructive: '220 38 38',
    destructiveForeground: '255 255 255',
  },
  FUCHSIA: {
    primary: '217 70 239',         // fuchsia-500
    primaryForeground: '255 255 255',
    secondary: '250 232 255',      // fuchsia-200
    secondaryForeground: '74 4 78', // fuchsia-900
    accent: '240 171 252',         // fuchsia-300
    accentForeground: '74 4 78',
    muted: '250 232 255',
    mutedForeground: '162 28 175', // fuchsia-700
    border: '240 171 252',
    input: '240 171 252',
    ring: '217 70 239',
    destructive: '220 38 38',
    destructiveForeground: '255 255 255',
  },
  PINK: {
    primary: '236 72 153',         // pink-500
    primaryForeground: '255 255 255',
    secondary: '252 231 243',      // pink-200
    secondaryForeground: '80 7 36', // pink-900
    accent: '249 168 212',         // pink-300
    accentForeground: '80 7 36',
    muted: '252 231 243',
    mutedForeground: '190 24 93',  // pink-700
    border: '249 168 212',
    input: '249 168 212',
    ring: '236 72 153',
    destructive: '220 38 38',
    destructiveForeground: '255 255 255',
  },
};

// Function to apply theme colors to CSS custom properties
export function applyBrandTheme(themeColor: BrandThemeColor) {
  const theme = THEME_COLOR_MAP[themeColor];
  const root = document.documentElement;
  
  // Convert space-separated RGB values to proper CSS rgb() format
  root.style.setProperty('--primary', `rgb(${theme.primary})`);
  root.style.setProperty('--primary-foreground', `rgb(${theme.primaryForeground})`);
  root.style.setProperty('--secondary', `rgb(${theme.secondary})`);
  root.style.setProperty('--secondary-foreground', `rgb(${theme.secondaryForeground})`);
  root.style.setProperty('--accent', `rgb(${theme.accent})`);
  root.style.setProperty('--accent-foreground', `rgb(${theme.accentForeground})`);
  root.style.setProperty('--muted', `rgb(${theme.muted})`);
  root.style.setProperty('--muted-foreground', `rgb(${theme.mutedForeground})`);
  root.style.setProperty('--border', `rgb(${theme.border})`);
  root.style.setProperty('--input', `rgb(${theme.input})`);
  root.style.setProperty('--ring', `rgb(${theme.ring})`);
  root.style.setProperty('--destructive', `rgb(${theme.destructive})`);
  root.style.setProperty('--destructive-foreground', `rgb(${theme.destructiveForeground})`);
  
  console.log(`Applied ${themeColor} theme:`, {
    primary: `rgb(${theme.primary})`,
    secondary: `rgb(${theme.secondary})`,
    accent: `rgb(${theme.accent})`
  });
}

// Debug helper to test theme changes from browser console
if (typeof window !== 'undefined') {
  (window as any).testBrandTheme = (color: BrandThemeColor) => {
    console.log('Testing theme:', color);
    applyBrandTheme(color);
  };
}

// Get default color for brand index (0-based)
export function getDefaultBrandColor(index: number): BrandThemeColor {
  return DEFAULT_BRAND_COLORS[index % DEFAULT_BRAND_COLORS.length];
}

// Color display names for UI
export const COLOR_DISPLAY_NAMES: Record<BrandThemeColor, string> = {
  RED: 'Red',
  ROSE: 'Rose', 
  ORANGE: 'Orange',
  GREEN: 'Green',
  BLUE: 'Blue',
  YELLOW: 'Yellow',
  VIOLET: 'Violet',
  NEUTRAL: 'Neutral',
  STONE: 'Stone',
  ZINC: 'Zinc',
  SLATE: 'Slate',
  GRAY: 'Gray',
  AMBER: 'Amber',
  LIME: 'Lime',
  EMERALD: 'Emerald',
  TEAL: 'Teal',
  CYAN: 'Cyan',
  SKY: 'Sky',
  INDIGO: 'Indigo',
  PURPLE: 'Purple',
  FUCHSIA: 'Fuchsia',
  PINK: 'Pink',
}; 