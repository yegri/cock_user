import { style } from "@vanilla-extract/css";

export const formBox = style({
  padding: "2rem",
});

export const formTitle = style({
  textAlign: "center",
});

export const form = style({
  padding: "1.2rem 1rem",
});

export const inputBox = style({
  display: "flex",
  alignItems: "center",
  width: "100%",
  marginBottom: "1rem",
});

export const label = style({
  fontSize: "1.2rem",
  fontWeight: "bold",
  width: "10%",
  textAlign: "center",
});

export const input = style({
  width: "90%",
  height: "2.5rem",
  fontSize: "1.1rem",
});

export const textAreaBox = style({
  width: "100%",
  display: "flex",
  alignItems: "center",
  resize: "none",
  marginBottom: "3rem",
});

export const textArea = style({
  width: "90%",
  height: "500px",
  fontSize: "1.1rem",
  padding: "1rem",
});

export const buttonBox = style({
  width: "100%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  marginBottom: "1rem",
});

export const saveBtn = style({
  height: "3rem",
  width: "10rem",
  fontSize: "1.1rem",
  backgroundColor: "rgba(40,22,91,0.5)",
  color: "#fff",
});

export const cancelTxt = style({
  color: "#777",
  cursor: "pointer",
});
