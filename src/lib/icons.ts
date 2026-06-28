/**
 * Named icon registry. Each entry is a list of SVG path `d` strings on a
 * 24x24 Lucide-style grid (stroke, round caps). Data files reference icons
 * by name (e.g. `icons.whatsapp`) so content stays readable.
 *
 * To add an icon: copy the `d` attributes of a Lucide icon's <path> elements
 * (convert <circle>/<rect> to path arcs if needed) and add a new entry.
 */
import type { IconPaths } from "./types";

export const icons = {
  // people
  user: ["M19 21v-1a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v1", "M12 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8z"],
  user2: ["M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2", "M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8z"],
  userCheck: ["M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2", "M10 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8z", "M16 11l2 2 4-4"],
  users: ["M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2", "M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8z", "M22 21v-2a4 4 0 0 0-3-3.87", "M16 3.13a4 4 0 0 1 0 7.75"],

  // messaging
  messageCircle: ["M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8z"],
  messageSquare: ["M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"],
  messageCheck: ["M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z", "M9 10l2 2 4-4"],
  messageHelp: ["M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z", "M9.5 9a2.5 2.5 0 1 1 3 2.5c-.7.3-1 .8-1 1.5", "M11.5 16h.01"],
  whatsapp: ["M21 11.5a8.4 8.4 0 0 1-12.3 7.4L3 20.5l1.7-5.5A8.5 8.5 0 1 1 21 11.5z"],
  bell: ["M18 8a6 6 0 0 0-12 0c0 7-3 9-3 9h18s-3-2-3-9", "M13.7 21a2 2 0 0 1-3.4 0"],

  // files & content
  file: ["M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z", "M14 2v6h6"],
  fileText: ["M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z", "M14 2v6h6", "M9 13h6", "M9 17h4"],
  fileCheck: ["M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z", "M14 2v6h6", "M9 15l2 2 4-4"],
  book: ["M2 3h7a3 3 0 0 1 3 3v13a2.5 2.5 0 0 0-2.5-2.5H2z", "M22 3h-7a3 3 0 0 0-3 3v13a2.5 2.5 0 0 1 2.5-2.5H22z"],
  presentation: ["M2 3h20v13H2z", "M8 21h8", "M12 16v5"],
  slides: ["M3 4h7v7H3z", "M14 4h7v16h-7z", "M3 14h7v6H3z"],
  image: ["M3 3h18v18H3z", "M3 15l5-5 4 4 3-3 6 6"],
  lineChart: ["M3 3v18h18", "M7 14l3-3 3 3 4-5"],
  textLines: ["M8 6h13", "M8 12h13", "M8 18h13", "M3 6h.01", "M3 12h.01", "M3 18h.01"],
  columns: ["M4 9h16", "M4 15h16", "M10 3 8 21", "M16 3l-2 18"],
  folder: ["M4 20a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h5l2 3h7a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2z"],
  clipboard: ["M9 2h6a1 1 0 0 1 1 1v2H8V3a1 1 0 0 1 1-1z", "M8 5H6a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2", "M9 12h6", "M9 16h4"],
  clipboardCheck: ["M9 11l3 3L22 4", "M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"],
  save: ["M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z", "M17 21v-8H7v8", "M7 3v5h8"],

  // process & logic
  eye: ["M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7-10-7-10-7z", "M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"],
  search: ["M11 19a8 8 0 1 0 0-16 8 8 0 0 0 0 16z", "M21 21l-4.3-4.3"],
  database: ["M12 8c4.97 0 9-1.34 9-3s-4.03-3-9-3-9 1.34-9 3 4.03 3 9 3z", "M21 5v6c0 1.66-4.03 3-9 3s-9-1.34-9-3V5", "M21 11v6c0 1.66-4.03 3-9 3s-9-1.34-9-3v-6"],
  code: ["M16 18l6-6-6-6", "M8 6l-6 6 6 6"],
  workflow: ["M5 3a2 2 0 0 0-2 2v3a2 2 0 0 0 2 2h3a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2z", "M16 14a2 2 0 0 0-2 2v3a2 2 0 0 0 2 2h3a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2z", "M10 6.5h4a2 2 0 0 1 2 2V14"],
  gitBranch: ["M6 3v12", "M18 9a3 3 0 1 0 0-6 3 3 0 0 0 0 6z", "M6 21a3 3 0 1 0 0-6 3 3 0 0 0 0 6z", "M18 9a9 9 0 0 1-9 9"],
  share: ["M18 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6z", "M6 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6z", "M18 22a3 3 0 1 0 0-6 3 3 0 0 0 0 6z", "M8.6 13.5l6.8 3.98", "M15.4 6.5l-6.8 3.98"],
  sliders: ["M4 21v-7", "M4 10V3", "M12 21v-9", "M12 8V3", "M20 21v-5", "M20 12V3", "M1 14h6", "M9 8h6", "M17 16h6"],
  filter: ["M22 3H2l8 9.5V19l4 2v-8.5z"],
  layout: ["M3 3h18v18H3z", "M3 9h18", "M9 9v12"],
  grid: ["M3 3h7v7H3z", "M14 3h7v7h-7z", "M14 14h7v7h-7z", "M3 14h7v7H3z"],
  refresh: ["M21 2v6h-6", "M3 12a9 9 0 0 1 15-6.7L21 8", "M3 22v-6h6", "M21 12a9 9 0 0 1-15 6.7L3 16"],
  shieldCheck: ["M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z", "M9 12l2 2 4-4"],
  pen: ["M12 20h9", "M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4z"],
  send: ["M22 2 11 13", "M22 2l-7 20-4-9-9-4z"],
  download: ["M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4", "M7 10l5 5 5-5", "M12 15V3"],
  compare: ["M12 3v18", "M5 7l-3 5 3 5", "M19 7l3 5-3 5"],
  plug: ["M9 2v6", "M15 2v6", "M6 8h12v3a6 6 0 0 1-12 0z", "M12 17v5"],
  braces: ["M8 3H7a2 2 0 0 0-2 2v5a2 2 0 0 1-2 2 2 2 0 0 1 2 2v5c0 1.1.9 2 2 2h1", "M16 21h1a2 2 0 0 0 2-2v-5c0-1.1.9-2 2-2a2 2 0 0 1-2-2V5a2 2 0 0 0-2-2h-1"],
  table: ["M3 3h18v18H3z", "M3 9h18", "M3 15h18", "M9 9v12", "M15 9v12"],

  // industries
  chefHat: ["M6 13a4 4 0 1 1 1-7.87A5 5 0 0 1 17 5a4 4 0 0 1 1 8", "M6 13v6a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1v-6"],
  plusSquare: ["M3 3h18v18H3z", "M12 8v8", "M8 12h8"],
  scissors: ["M6 9a3 3 0 1 0 0-6 3 3 0 0 0 0 6z", "M6 21a3 3 0 1 0 0-6 3 3 0 0 0 0 6z", "M20 4 8.5 15.5", "M14.5 14.5 20 20", "M8.5 8.5 12 12"],
  wrench: ["M21 3a6 6 0 0 1-8 8l-7 7-3-3 7-7a6 6 0 0 1 9-7z", "M14 10l-1-1"],
  ticket: ["M20.6 13.4 13.4 20.6a2 2 0 0 1-2.8 0l-7.2-7.2A2 2 0 0 1 3 12V4a1 1 0 0 1 1-1h8a2 2 0 0 1 1.4.6l7.2 7.2a2 2 0 0 1 0 2.6z", "M7 7h.01"],
  lightbulb: ["M9 18h6", "M10 22h4", "M12 2a7 7 0 0 0-4 12c.7.6 1 1.4 1 2h6c0-.6.3-1.4 1-2a7 7 0 0 0-4-12z"],
  mapPin: ["M12 22s8-7 8-12a8 8 0 1 0-16 0c0 5 8 12 8 12z", "M12 10a2 2 0 1 0 0-4 2 2 0 0 0 0 4z"],

  // misc / brand
  sparkles: ["M12 3l1.9 4.8L19 9.7l-5.1 1.9L12 16l-1.9-4.4L5 9.7l5.1-1.9z", "M19 15l.8 2.2L22 18l-2.2.8L19 21l-.8-2.2L16 18l2.2-.8z"],
  zap: ["M13 2 3 14h9l-1 8 10-12h-9z"],
  mail: ["M4 4h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2z", "m22 7-10 6L2 7"],
  calendar: ["M3 4h18v18H3z", "M16 2v4", "M8 2v4", "M3 10h18"],
} as const satisfies Record<string, IconPaths>;

export type IconName = keyof typeof icons;
