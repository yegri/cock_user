import { globalStyle, style } from "@vanilla-extract/css";

export const box = style({
  display: "flex",
  padding: "0.8rem 0",
  borderBottom: "1px solid #999",
});

export const num = style({
  width: "10%",
  textAlign: "center",
});

export const name = style({
  textAlign: "center",
  width: "40%",
});

export const author = style({
  color: "#777",
  textAlign: "center",
  width: "15%",
});

export const date = style({
  width: "25%",
  textAlign: "center",
});

export const like = style({
  width: "10%",
  textAlign: "center",
});
