import { globalStyle, style } from "@vanilla-extract/css";

export const root = style({
  maxWidth: "1400px",
  width: "100%",
  margin: "3rem auto",
});

globalStyle("h2", {
  margin: "1rem 0",
});

export const hotPost = style({
  marginBottom: "5rem",
});

export const newPost = style({});
