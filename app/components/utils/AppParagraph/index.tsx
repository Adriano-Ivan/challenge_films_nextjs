import { Typography } from "antd";
const { Paragraph } = Typography;

function AppParagraph({ text }: { text: string }) {
  return <Paragraph>{text}</Paragraph>;
}

export default AppParagraph;
