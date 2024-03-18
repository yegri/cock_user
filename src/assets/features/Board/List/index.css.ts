import { globalStyle, style } from "@vanilla-extract/css";

export const root = style({
  maxWidth: "1400px",
  width: "100%",
  margin: "3rem auto",
});

globalStyle("h2", {
  margin: "1rem 0",
});

export const hotPost = style({
  marginBottom: "5rem",
});

export const hotPostItemBox = style({
  background: "rgba(240,240,240,0.5)",
  borderRadius: "10px",
  padding: "1rem",
  boxShadow: "2px 2px 10px 2px #cecece",
});

export const newPost = style({});

export const topBox = style({
  display: "flex",
  alignItems: "center",
  marginBottom: "1rem",
});

export const goWrite = style({
  marginLeft: "1rem",
});

export const newPostTable1 = style({
  display: "flex",
  borderTop: "1.5px solid #000",
  borderBottom: "1.2px solid #000",
  padding: "0.5rem 0",
});

export const newPostTable2 = style({});

export const th = style({
  display: "inline-block",
  textAlign: "center",
  fontWeight: "bold",
});

export const th1 = style({
  width: "10%",
});

export const th2 = style({
  width: "40%",
});

export const th3 = style({
  width: "15%",
});

export const th4 = style({
  width: "25%",
});

export const th5 = style({
  width: "10%",
});
