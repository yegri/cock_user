import { globalStyle, style } from "@vanilla-extract/css";

export const root = style({
  maxWidth: "500px",
  width: "100%",
  margin: "8rem auto",
});

export const h1 = style({
  textAlign: "center",
  marginBottom: "3rem",
});

export const tabs = style({
  maxWidth: "350px",
  width: "100%",
  display: "flex",
  justifyContent: "center",
  margin: "0 auto",
});

export const tab = style({
  display: "inline-block",
  textAlign: "center",
  width: "calc(100% / 3)",
  cursor: "pointer",
});

export const txt = style({
  transition: "all 0.1s",
  paddingBottom: "0.3rem",
});

export const active = style({
  borderBottom: "1px solid #28165B",
});
