import {
  assignVars,
  createGlobalTheme,
  createGlobalThemeContract,
  globalStyle,
} from "@vanilla-extract/css";

// 테마의 이름을 지정
export const global = createGlobalThemeContract({
  background: {
    color: "bg-color",
  },
  foreground: {
    color: "fg-color",
  },
});

// white global theme
createGlobalTheme(":root", global, {
  background: {
    color: "rgba(167,154,175,0.3)",
  },
  foreground: {
    color: "rgb(0, 0, 0)",
  },
});

// dark global theme
const darkGlobalTheme = {
  background: {
    color: "rgb(0, 0, 0)",
  },
  foreground: {
    color: "rgb(255, 255, 255)",
  },
};

globalStyle(":root", {
  "@media": {
    "(prefers-color-scheme: dark)": {
      vars: assignVars(global, darkGlobalTheme),
    },
  },
});

globalStyle("*", {
  boxSizing: "border-box",
  padding: 0,
  margin: 0,
});

globalStyle("html", {
  "@media": {
    "(prefers-color-scheme: dark)": {
      colorScheme: "dark",
    },
  },
});

globalStyle("html, body", {
  maxWidth: "100dvw",
  overflowX: "hidden",
});

globalStyle("body", {
  backgroundColor: global.background.color,
  color: global.foreground.color,
});

globalStyle("input", {
  outline: "none",
  paddingLeft: "0.5rem",
});

globalStyle("button", {
  border: "none",
  borderRadius: "3px",
});

globalStyle("a", {
  color: "inherit",
  textDecoration: "none",
});
