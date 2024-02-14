import { globalStyle, style } from "@vanilla-extract/css";

globalStyle("input", {
  height: "2.5rem",
  fontSize: "1rem",
});

globalStyle("button", {
  height: "2.8rem",
  fontSize: "1.2rem",
  backgroundColor: "#a79aaf",
  transition: "all 0.3s",
});

globalStyle("button:hover", {
  backgroundColor: "#85768f",
});

export const root = style({
  maxWidth: "500px",
  width: "100%",
  margin: "8rem auto",
});

export const h1 = style({
  textAlign: "center",
  marginBottom: "3rem",
});

export const p = style({
  marginBottom: "0.3rem",
});

export const inputBox = style({
  display: "flex",
  flexDirection: "column",
  marginBottom: "1rem",
  fontSize: "1.2rem",
  fontWeight: "600",
});

export const buttonBox = style({
  display: "flex",
  flexDirection: "column",
  marginTop: "4rem",
});

export const navi = style({
  display: "flex",
  justifyContent: "space-between",
  marginTop: "1rem",
});
