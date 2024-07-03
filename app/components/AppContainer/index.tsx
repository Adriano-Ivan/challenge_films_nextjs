import { Space } from "antd";

function AppContainer({ children }: { children: React.ReactNode }) {
  return <Space direction="vertical">{children}</Space>;
}

export default AppContainer;
