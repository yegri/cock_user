import { globalStyle, style } from "@vanilla-extract/css";

export const mainWrap = style({
  padding: "2rem",
  maxWidth: "1400px",
  margin: "auto",
});

export const mainFirst = style({
  marginBottom: "4rem",
});

export const mainSecond = style({
  marginBottom: "4rem",
});

export const mainThird = style({});

export const mainTitle = style({
  fontSize: "1.3rem",
  fontWeight: "bold",
  display: "block",
  marginBottom: "0.8rem",
});

export const boardBox = style({
  background: "#f0f0f0",
  borderRadius: "10px",
  padding: "1rem",
  boxShadow: "2px 2px 10px 2px #cecece",
});
