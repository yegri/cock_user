import { globalFontFace, style } from "@vanilla-extract/css";

const contentFont = "Noto Sans";

globalFontFace(contentFont, {
  src: "url(https://fonts.googleapis.com/css2?family=Noto+Sans:ital,wght@0,100..900;1,100..900&family=Protest+Strike&family=Rozha+One&display=swap)",
  fontWeight: 500,
  fontStyle: "normal",
  fontDisplay: "swap",
});

export const fontText = style({
  fontFamily: [contentFont],
});
