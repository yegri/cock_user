import { globalStyle, style } from "@vanilla-extract/css";

export const root = style({
  maxWidth: "1400px",
  width: "100%",
  margin: "3rem auto",
});

export const top = style({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "2rem 3rem",
});

export const bottom = style({
  display: "grid",
  gridTemplateColumns: "1fr 1fr 1fr 1fr",
  rowGap: "4rem",
  placeItems: "center",
});

export const filterBox = style({
  display: "flex",
});

export const selectBox = style({
  marginLeft: "1rem",
  height: "2rem",
});

export const select = style({
  width: "5rem",
  height: "100%",
});
