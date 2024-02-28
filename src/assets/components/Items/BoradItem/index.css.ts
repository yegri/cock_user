import { globalStyle, style } from "@vanilla-extract/css";

export const box = style({
  borderBottom: "1px solid #777777",
  width: "49%",
  cursor: "pointer",
  padding: "0.7rem 0.4rem",
});

export const title = style({
  fontSize: "1.15rem",
  fontWeight: "bold",
  marginBottom: "0.3rem",
});

export const explain = style({
  overflow: "hidden",
  textOverflow: "ellipsis",
  whiteSpace: "nowrap",
  fontSize: "0.95rem",
});
