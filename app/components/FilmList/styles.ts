import { CONSTANTS_VALUES } from "@infrastructure/values";

export const filmsColumnStyles: React.CSSProperties = {
  width: "100%",
  height: `calc(${CONSTANTS_VALUES.CONTENT_HEIGHT} - 10vh)`,
  justifyItems: "center",
  alignItems: "center",
  overflowY: "auto",
};

export const paginationContainerStyles: React.CSSProperties = {
  backgroundColor: "#ccc",
  width: "100%",
  justifyContent: "center",
  height: `calc(${CONSTANTS_VALUES.CONTENT_HEIGHT} - 80vh)`,
};

export const containerContentStyles: React.CSSProperties = {
  width: "100%",
  height: `calc(${CONSTANTS_VALUES.CONTENT_HEIGHT} - 10vh)`,
  backgroundColor: "#ddd",
};

export const loadingContainerContentStyles: React.CSSProperties = {
  width: "100%",
  height: `calc(${CONSTANTS_VALUES.CONTENT_HEIGHT} - 10vh)`,
  backgroundColor: "#ddd",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};
