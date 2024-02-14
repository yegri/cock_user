import { style } from "@vanilla-extract/css";

export const root = style({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  padding: "1.2rem 1rem",
  borderBottom: "1px solid black",
});

export const logos = style({
  display: "flex",
  alignItems: "flex-end",
});

export const logoImg = style({
  marginRight: "0.3rem",
  marginBottom: "0.2rem",
  width: "1.5rem",
  height: "auto",
});

export const logoTxt = style({
  width: "7rem",
  height: "auto",
});

export const person = style({
  width: "2rem",
  height: "auto",
});
