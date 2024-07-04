import { Rate } from "antd";
import { useAppRatingStars } from "./hooks/useAppRatingStars";

const desc = ["terrible", "bad", "normal", "good", "wonderful"];

interface AppRatingStarProps {
  defaultValue?: number;
  onChangeRating: (newRating: number) => void;
}

function AppRatingStar({
  defaultValue = 1,
  onChangeRating,
}: AppRatingStarProps) {
  const { value, changeValue } = useAppRatingStars(
    defaultValue,
    onChangeRating
  );
  return (
    <>
      <Rate tooltips={desc} onChange={changeValue} value={value} />
      {value ? <span>I think this is {desc[value - 1]}</span> : null}
    </>
  );
}

export default AppRatingStar;
