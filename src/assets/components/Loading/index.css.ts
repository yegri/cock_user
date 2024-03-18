import { globalStyle, style } from "@vanilla-extract/css";

export const loadingBox = style({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  width: "100%",
  height: "100vh",
  fontSize: "1.5rem",
});

export const loadingImg = style({
  marginBottom: "1.2rem",
});
