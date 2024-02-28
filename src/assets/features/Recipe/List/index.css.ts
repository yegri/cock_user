import { globalStyle, style } from "@vanilla-extract/css";

export const root = style({
  maxWidth: "1400px",
  width: "100%",
  margin: "3rem auto",
});

export const top = style({
  display: "flex",
  justifyContent: "space-between",
  padding: "2rem 1rem",
});

export const bottom = style({
  display: "grid",
  gridTemplateColumns: "1fr 1fr 1fr 1fr 1fr",
  placeItems: "center",
});
