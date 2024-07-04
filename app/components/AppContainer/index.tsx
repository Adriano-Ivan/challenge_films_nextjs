import SearchFilmsArea from "@components/SearchFilmsArea";
import { Layout } from "antd";
import { contentStyle, headerStyle, layoutStyle } from "./styles";

const { Header, Content } = Layout;

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
