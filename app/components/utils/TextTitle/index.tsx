import { Typography } from "antd";
const { Title } = Typography;

function TextTitle({
  text,
  level = 4,
}: {
  text: string;
  level?: 4 | 5 | 1 | 2 | 3;
}) {
  return <Title level={level}>{text}</Title>;
}

export default TextTitle;
