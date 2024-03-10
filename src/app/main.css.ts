import { style } from "@vanilla-extract/css";

export const mainWrap = style({
  padding: "4rem 5rem",
  width: "100%",
  minHeight: "100vh",
  overflow: "hidden",
  // maxWidth: "1400px",
  // margin: "auto",
});

export const logos = style({
  border: "1px solid red",
});

export const texts = style({
  width: "100%",
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-end",
  border: "1px solid pink",
});

export const mainTxt = style({
  fontFamily: "blacksword",
  fontSize: "5rem",
  paddingRight: "2rem",
  marginBottom: "1rem",
});

export const mainTxt2 = style({
  fontFamily: "anton",
  fontSize: "8rem",
  lineHeight: "8.5rem",
  textAlign: "end",
  border: "2px solid #28165B",
  padding: "1rem 1rem 1rem 10rem",
  letterSpacing: "0.3rem",
  marginBottom: "2rem",
});

export const mainTxt3 = style({
  display: "flex",
  justifyContent: "space-between",
  fontSize: "2rem",
  fontFamily: "merriwhether",
});

export const a = style({
  position: "relative",
  margin: "0 1.8rem",
});

export const arrowNone = style({
  width: "1.5rem",
  height: "auto",
  position: "absolute",
  top: "50%",
  right: "2rem",
  transform: "translateY(-50%)",
  opacity: 0,
  transition: "all 0.3s",
});

export const arrowShow = style({
  width: "1.5rem",
  height: "auto",
  position: "absolute",
  top: "50%",
  right: "-2rem",
  transform: "translateY(-50%)",
  opacity: "1",
  transition: "all 0.3s",
});
