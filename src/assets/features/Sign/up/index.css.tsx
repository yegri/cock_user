import { globalStyle, style } from "@vanilla-extract/css";

globalStyle("input", {
  height: "2.5rem",
  fontSize: "1rem",
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
  fontSize: "1rem",
  fontWeight: "600",
});

export const inputBox2 = style([inputBox, { position: "relative" }]);

export const buttonBox = style({
  display: "flex",
  flexDirection: "column",
  marginTop: "4rem",
});

globalStyle(`${buttonBox} button`, {
  height: "2.8rem",
  fontSize: "1.2rem",
  backgroundColor: "#a79aaf",
  transition: "all 0.3s",
});

globalStyle(`${inputBox2} button`, {
  height: "1.8rem",
  fontSize: "0.85rem",
  backgroundColor: "#a79aaf",
  transition: "all 0.3s",
  padding: "0.5rem",
});

globalStyle("button:hover", {
  backgroundColor: "#85768f",
});

export const idBtn = style({
  position: "absolute",
  bottom: "0.4rem",
  right: "0.7rem",
});
