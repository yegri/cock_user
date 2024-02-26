import { globalStyle, style } from "@vanilla-extract/css";

export const box = style({
  border: "1px solid black",
  borderRadius: "10px",
  maxWidth: "300px",
  width: "100%",
  height: "350px",
  cursor: "pointer",
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
  height: "80px",
});
