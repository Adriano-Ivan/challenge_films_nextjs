import { CONSTANTS_VALUES } from "@infrastructure/values";

export const headerStyle: React.CSSProperties = {
  textAlign: "center",
  color: "#fff",
  height: CONSTANTS_VALUES.HEADER_VALUE,
  paddingInline: 48,
};

export const contentStyle: React.CSSProperties = {
  textAlign: "center",
  height: CONSTANTS_VALUES.CONTENT_HEIGHT,
  color: "#fff",
};

export const layoutStyle: React.CSSProperties = {
  overflow: "hidden",
  width: "100vw",
  height: "100vh",
};
