import { globalStyle, style } from "@vanilla-extract/css";

export const mainWrap = style({
  padding: "3rem 5rem 0",
  width: "100%",
  minHeight: "100vh",
  overflow: "hidden",
  maxWidth: "19200px",
  // margin: "auto",
});

export const logos = style({});

export const logoImg = style({
  width: "1.3rem",
  height: "auto",
});

export const logoTxt = style({
  width: "7rem",
  height: "auto",
  position: "relative",
});

export const mainView = style({
  display: "flex",
});

export const imgBox = style({
  width: "60%",
  position: "relative",
});

export const blackBoard = style({
  width: "30rem",
  height: "auto",
  position: "absolute",
  top: "10%",
  left: "10%",
  background: "rgba(255,255,255,0.5)",
  padding: "0.8rem",
});

export const cheers = style({
  width: "25rem",
  height: "25rem",
  position: "absolute",
  bottom: "0",
  right: "15%",
  borderRadius: "50% 50% 0 0",
  background: "rgba(255,255,255,0.5)",
  padding: "0.8rem",
});

export const cheersImg = style({
  borderRadius: "50% 50% 0 0",
});

export const lemon = style({
  width: "15rem",
  height: "auto",
  position: "absolute",
  top: "20%",
  right: "8%",
  zIndex: -1,
  background: "rgba(255,255,255,0.5)",
  padding: "0.8rem",
});

export const neon = style({
  width: "16rem",
  height: "auto",
  position: "absolute",
  bottom: "-5rem",
  left: "0",
  borderRadius: "50%",
  zIndex: 1,
  background: "rgba(255,255,255,0.5)",
  padding: "0.8rem",
});

export const neonImg = style({
  borderRadius: "50%",
  zIndex: 1,
});

export const texts = style({
  width: "40%",
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-end",
});

export const mainTxt = style({
  fontFamily: "blacksword",
  fontSize: "4.5rem",
  paddingRight: "2rem",
  marginBottom: "1rem",
});

export const mainTxt2 = style({
  fontFamily: "anton",
  fontSize: "8rem",
  lineHeight: "8.5rem",
  textAlign: "end",
  border: "2px solid #28165B",
  padding: "1rem 1rem 1rem 12rem",
  letterSpacing: "0.3rem",
  marginBottom: "2rem",
});

export const mainTxt3 = style({
  display: "flex",
  justifyContent: "space-between",
  fontSize: "1.8rem",
  fontFamily: "anton",
  border: "2px solid #28165B",
  padding: "1rem 1rem 1rem 15rem",
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

globalStyle("img", {
  width: "100%",
  height: "100%",
});
