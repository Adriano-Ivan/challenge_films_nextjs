import SearchFilmsArea from "@components/SearchFilmsArea";
import { CONSTANTS_VALUES } from "@infrastructure/values";
import { Layout } from "antd";

const { Header, Content } = Layout;

const headerStyle: React.CSSProperties = {
  textAlign: "center",
  color: "#fff",
  height: CONSTANTS_VALUES.HEADER_VALUE,
  paddingInline: 48,
  backgroundColor: "#4096ff",
};

const contentStyle: React.CSSProperties = {
  textAlign: "center",
  height: CONSTANTS_VALUES.CONTENT_HEIGHT,
  color: "#fff",
  backgroundColor: "#0958d9",
};

const layoutStyle: React.CSSProperties = {
  overflow: "hidden",
  width: "100vw",
  height: "100vh",
};

function AppContainer({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Layout style={layoutStyle}>
        <Header style={headerStyle}>
          <SearchFilmsArea />
        </Header>
        <Content style={contentStyle}>{children}</Content>
      </Layout>
    </>
  );
}

export default AppContainer;
