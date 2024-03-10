import { globalFontFace, style } from "@vanilla-extract/css";

const contentFont = "Noto Sans";

globalFontFace(contentFont, {
  src: "url(https://fonts.googleapis.com/css2?family=Noto+Sans:ital,wght@0,100..900;1,100..900&family=Protest+Strike&family=Rozha+One&display=swap)",
  fontWeight: 500,
  fontStyle: "normal",
  fontDisplay: "swap",
});

const merryFont = "merriwhether";

globalFontFace(merryFont, {
  src: "/src/assets/fonts/Merriweather-Regular.ttf",
  fontWeight: 500,
  fontStyle: "normal",
  fontDisplay: "swap",
});

const styleFont = "blacksword";

globalFontFace(styleFont, {
  src: "/src/assets/fonts/Blacksword.otf",
  fontWeight: 500,
  fontStyle: "normal",
  fontDisplay: "swap",
});

const boldFont = "anton";

globalFontFace(boldFont, {
  src: "/src/assets/fonts/Anton-Regular.ttf",
  fontWeight: 500,
  fontStyle: "normal",
  fontDisplay: "swap",
});

export const fontText = style({
  fontFamily: contentFont,
});

export const font2 = style({
  fontFamily: styleFont,
});

export const font3 = style({
  fontFamily: boldFont,
});

export const font4 = style({
  fontFamily: merryFont,
});
