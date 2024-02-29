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

export const hotPostItemBox = style({
  background: "rgba(240,240,240,0.5)",
  borderRadius: "10px",
  padding: "1rem",
  boxShadow: "2px 2px 10px 2px #cecece",
});

export const newPost = style({});
