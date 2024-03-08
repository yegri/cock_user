import { globalStyle, style } from "@vanilla-extract/css";

export const root = style({
  maxWidth: "1400px",
  width: "100%",
  margin: "3rem auto",
  display: "flex",
});

export const left = style({
  display: "flex",
  flexDirection: "column",
  borderRight: "1px solid #28165B",
  padding: "0rem 2rem",
});

export const mainImgBox = style({
  width: "100%",
  height: "25rem",
});

export const mainImg = style({
  width: "100%",
  height: "100%",
  objectFit: "cover",
});

export const heartBox = style({
  display: "flex",
  justifyContent: "flex-end",
  margin: "0.5rem 0",
});

export const heartImg = style({
  width: "1.8rem",
  height: "auto",
});

export const right = style({
  padding: "0rem 2rem",
});

export const contentBox = style({
  marginBottom: "1.5rem",
  display: "flex",
  fontSize: "1.2rem",
});

export const subTitle = style({
  width: "7rem",
  fontWeight: "bold",
});

export const content = style({});

globalStyle("h1", {
  marginBottom: "2rem",
});

globalStyle("h2", {
  margin: "2rem 0",
});

export const nameWrap = style({
  marginBottom: "4rem",
});

export const ingredientsWrap = style({});

export const ingredient = style({
  fontSize: "1.2rem",
  marginBottom: "0.7rem",
});
