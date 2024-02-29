import { globalStyle, style } from "@vanilla-extract/css";

export const box = style({
  boxShadow: "2px 2px 10px 2px #cecece",
  background: "rgba(240,240,240,0.5)",
  borderRadius: "10px",
  maxWidth: "50%",
  width: "100%",
  height: "140px",
  cursor: "pointer",
  display: "flex",
});

export const left = style({
  width: "25%",
  height: "100%",
  padding: "0.8rem",
});

export const thumbnail = style({
  width: "100%",
  height: "100%",
  objectFit: "cover",
  borderRadius: "10px",
});

export const right = style({
  width: "70%",
  height: "100%",
  padding: "0.8rem",
});

export const name = style({
  fontSize: "1.3rem",
  fontWeight: "bold",
  marginBottom: "0.3rem",
  marginTop: "0.3rem",
});

export const explain = style({
  display: "webkit-box",
  wordWrap: "break-word",
  WebkitLineClamp: 4,
  lineClamp: "vertical",
  overflow: "hidden",
  textOverflow: "ellipsis",
  height: "66%",
});
