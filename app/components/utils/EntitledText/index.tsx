import AppParagraph from "../AppParagraph";
import TextTitle from "../TextTitle";

interface EntitledTextProps {
  title: string;
  text: string;
  levelTitle?: 4 | 5 | 1 | 2 | 3;
}

function EntitledText({ title, levelTitle = 4, text }: EntitledTextProps) {
  return (
    <>
      <TextTitle level={levelTitle} text={title} />
      <AppParagraph text={text} />
    </>
  );
}

export default EntitledText;
