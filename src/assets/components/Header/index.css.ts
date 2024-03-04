import { style } from "@vanilla-extract/css";
import { right } from "../Items/ListItem/index.css";

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

export const person_fill = style({
  width: "1.5rem",
  height: "auto",
});

export const personWrap = style({
  position: "relative",
});

export const modalBox = style({
  position: "absolute",
  right: 0,
  top: "2.5rem",
});
