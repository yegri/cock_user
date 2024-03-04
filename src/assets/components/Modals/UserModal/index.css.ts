import { globalStyle, style } from "@vanilla-extract/css";

export const root = style({
  background: "rgba(255,255,255,0.6)",
  width: "180px",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  borderRadius: "7px",
  padding: "1rem",
  fontSize: "0.9rem",
});

export const name = style({
  marginBottom: "0.5rem",
});

export const box = style({
  display: "flex",
});

export const mypage = style({
  ":hover": {
    color: "#28165B",
    borderBottom: "1px solid #28165B",
  },
});

export const bar = style({
  padding: "0 0.3rem",
  margin: "0 0.3rem",
});

export const logout = style({
  cursor: "pointer",

  ":hover": {
    color: "#28165B",
    borderBottom: "1px solid #28165B",
  },
});
