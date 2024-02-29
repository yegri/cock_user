import { globalStyle, style } from "@vanilla-extract/css";

export const root = style({
  maxWidth: "1400px",
  width: "100%",
  margin: "3rem auto",
});

export const title = style({
  marginBottom: "2rem",
});

export const info = style({
  display: "flex",
  justifyContent: "space-between",
  color: "#777777",
  fontSize: "1.2rem",
});

export const top = style({
  display: "flex",
  flexDirection: "column",
});

export const mainImgBox = style({
  width: "100%",
  height: "40rem",
});

export const mainImg = style({
  width: "100%",
  height: "100%",
  objectFit: "cover",
});

export const heartBox = style({
  display: "flex",
  justifyContent: "flex-end",
  margin: "1rem 0",
});

export const heartImg = style({
  width: "2.5rem",
  height: "auto",
});

export const bottom = style({});

globalStyle("h1", {
  marginBottom: "1rem",
});

globalStyle("h2", {
  margin: "1rem 0",
});

export const nameWrap = style({
  marginBottom: "2rem",
});

export const ingredientsWrap = style({});
