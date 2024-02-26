import { globalStyle, style } from "@vanilla-extract/css";

export const mainWrap = style({
  padding: "2rem",
});

export const mainFirst = style({
  marginBottom: "2rem",
});

export const mainSecond = style({
  marginBottom: "2rem",
});

export const mainThird = style({});

globalStyle("h2", {
  marginBottom: "0.8rem",
});
