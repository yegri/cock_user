import { globalStyle, style } from "@vanilla-extract/css";

export const box = style({
  borderRadius: "10px",
  maxWidth: "250px",
  width: "100%",
  height: "300px",
  cursor: "pointer",
  boxShadow: "2px 2px 10px 2px #cecece",
});

export const top = style({
  width: "100%",
  height: "60%",
});

export const thumbnail = style({
  width: "100%",
  height: "100%",
  objectFit: "cover",
  borderRadius: "10px 10px 0 0",
});

export const bottom = style({
  width: "100%",
  height: "40%",
  padding: "0.5rem",
  background: "rgba(240,240,240,0.5)",
  borderRadius: "10px",
  fontSize: "0.92rem",
});

export const name = style({
  fontSize: "1.2rem",
  fontWeight: "bold",
  marginBottom: "0.3rem",
  marginTop: "0.2rem",
});

export const explain = style({
  display: "webkit-box",
  wordWrap: "break-word",
  WebkitLineClamp: 4,
  lineClamp: "vertical",
  overflow: "hidden",
  textOverflow: "ellipsis",
  height: "65%",
});
