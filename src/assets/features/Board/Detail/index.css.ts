import { globalStyle, style } from "@vanilla-extract/css";

export const root = style({
  maxWidth: "1400px",
  width: "100%",
  margin: "3rem auto",
});

export const titleBox = style({
  marginBottom: "1rem",
  borderBottom: "1.2px solid #000",
  paddingBottom: "1rem",
});

export const titleTop = style({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  width: "100%",
  marginBottom: "1rem",
});

export const title = style({
  fontSize: "2rem",
  fontWeight: "bold",
});

export const subTxt = style({
  color: "#777",
});

export const bar = style({
  margin: "0 0.5rem",
});

export const info = style({
  display: "flex",
  alignItems: "center",
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
});

export const heartImg = style({
  width: "1.8rem",
  height: "auto",
});

export const bottom = style({
  marginTop: "3rem",
});

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
