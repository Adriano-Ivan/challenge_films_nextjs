import { ConfigProvider } from "antd";
import React from "react";

const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: "#00b96b",
          borderRadius: 2,
          colorLink: "#bbb",
          colorBgContainer: "#ffffff",
          fontFamily: "Raleway",
        },
        components: {
          Form: {
            labelColor: "#595A6D",
            labelFontSize: 14,
            fontFamily: "Raleway",
          },
          Input: {
            fontFamily: "Raleway",
            fontWeightStrong: 600,
          },
          Collapse: {
            padding: 0,
          },
        },
      }}
    >
      {children}
    </ConfigProvider>
  );
};

export default ThemeProvider;
